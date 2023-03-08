import React, { memo, useRef, useEffect, useState } from "react";
import { viewportCoordsToSceneCoords, distance } from "./util";
import { withBatchedUpdatesThrottled } from "@/util";
import { createElement } from "./element/newElement";
import { renderScene } from "./renderer/renderScene";
import { deleteElementCache } from "./renderer/renderElement";
import LayerUI from "./components/layer-ui";
import TextArea from "./components/textarea";
import { scene } from "./scene/scene";
import "./index.less";
const temp = JSON.parse(localStorage.getItem("appState"));
export let appState = temp || {
  scrollX: 0,
  scrollY: 0,
  offsetLeft: 0,
  offsetTop: 0,
  draggingElement: null,
  canvasWidth: 0,
  canvasHeight: 0,
};
const Canvas = memo(() => {
  const canvasRef = useRef(null);
  const canvasContainer = useRef(null);
  const staticCanvasRef = useRef(null);
  const textareaRef = useRef(null);
  const rafRef = useRef(null);
  const [activeTool, setActiveTool] = useState({ type: "" });
  useEffect(() => {
    const setCanvasSize = (canvas) => {
      canvas.width = offsetWidth * window.devicePixelRatio;
      canvas.height = offsetHeight * window.devicePixelRatio;
    };

    // canvas分辨率矫正
    const canvas = canvasRef.current;
    const { offsetWidth, offsetHeight } = canvas;
    setCanvasSize(canvas);
    setCanvasSize(staticCanvasRef.current);

    const { x, y } = canvas.getBoundingClientRect();
    appState.offsetLeft = x;
    appState.offsetTop = y;
    appState.canvasWidth = offsetWidth;
    appState.canvasHeight = offsetHeight;

    // 绘制静态canvas
    renderScene({
      elements: scene.getElementsIncludingDeleted(),
      appState: appState,
      scale: window.devicePixelRatio,
      canvas: staticCanvasRef.current,
      renderConfig: {
        selectionColor: "#6965db",
        scrollX: appState.scrollX,
        scrollY: appState.scrollY,
        viewBackgroundColor: "#ffffff",
        zoom: 1,
      },
    });
  }, []);
  useEffect(() => {
    const wrap = canvasContainer.current;
    const handleWheel = (e) => {
      e.preventDefault();
    };
    // 防止双指滑动时切换页面
    wrap.addEventListener("wheel", handleWheel, {
      passive: false,
    });
    return () => {
      wrap.removeEventListener("wheel", handleWheel);
    };
  }, []);
  useEffect(() => {
    let frame = 0;
    let startTime = Date.now();

    const loop = () => {
      const currentTime = Date.now();
      frame++;

      if (currentTime > 1000 + startTime) {
        const fps = Math.round((frame * 1000) / (currentTime - startTime));
        rafRef.current.innerText = `FPS：${fps}`;
        frame = 0;
        startTime = currentTime;
      }

      requestAnimationFrame(loop);
    };

    loop();
  }, []);
  const handleCanvasWheel = (event) => {
    const { deltaX, deltaY } = event;
    appState.scrollX = appState.scrollX - deltaX;
    appState.scrollY = appState.scrollY - deltaY;

    // 在滚动画布的过程中，只绘制底层的canvas
    renderScene({
      elements: scene.getElementsIncludingDeleted(),
      appState: appState,
      scale: window.devicePixelRatio,
      canvas: staticCanvasRef.current,
      renderConfig: {
        selectionColor: "#6965db",
        scrollX: appState.scrollX,
        scrollY: appState.scrollY,
        viewBackgroundColor: "#ffffff",
        zoom: 1,
      },
    });
  };

  const handleCanvasPointerDown = (event) => {
    if (!activeTool.type) return;
    const pointerDownState = initialPointerDownState(event);
    const element = createElement({
      elementType: activeTool.type,
      pointerDownState,
      appState,
    });
    appState.draggingElement = element;
    deleteElementCache(element);
    const onPointerMove =
      onPointerMoveFromCanvasPointerDownHandler(pointerDownState);
    const onPointerUp =
      onPointerUpFromCanvasPointerDownHandler(pointerDownState);
    window.addEventListener("pointermove", onPointerMove);
    window.addEventListener("pointerup", onPointerUp);
    pointerDownState.eventListeners.onMove = onPointerMove;
    pointerDownState.eventListeners.onUp = onPointerUp;
  };

  const onPointerMoveFromCanvasPointerDownHandler = (pointerDownState) =>
    withBatchedUpdatesThrottled((event) => {
      const pointerCoords = viewportCoordsToSceneCoords(event, appState);
      pointerDownState.lastCoords.x = pointerCoords.x;
      pointerDownState.lastCoords.y = pointerCoords.y;
      if (activeTool.type === "freedraw") {
        appState.draggingElement.points.push([
          pointerCoords.x,
          pointerCoords.y,
        ]);
      } else {
        const pointerCoords = pointerDownState.lastCoords;
        const originX = pointerDownState.origin.x;
        const originY = pointerDownState.origin.y;
        const x = pointerCoords.x;
        const y = pointerCoords.y;
        const width = distance(pointerDownState.origin.x, pointerCoords.x);
        const height = distance(pointerDownState.origin.y, pointerCoords.y);
        let newX = x < originX ? originX - width : originX;
        let newY = y < originY ? originY - height : originY;
        appState.draggingElement.x = newX;
        appState.draggingElement.y = newY;
        appState.draggingElement.width = width;
        appState.draggingElement.height = height;
      }
      deleteElementCache(appState.draggingElement);
      // 在移动过程中，先在顶层canvas绘制
      renderScene({
        elements: [appState.draggingElement],
        appState: appState,
        scale: window.devicePixelRatio,
        canvas: canvasRef.current,
        renderConfig: {
          selectionColor: "#6965db",
          scrollX: appState.scrollX,
          scrollY: appState.scrollY,
          viewBackgroundColor: "#ffffff",
          zoom: 1,
        },
      });
    });

  const onPointerUpFromCanvasPointerDownHandler =
    (pointerDownState) => (event) => {
      // deleteElementCache(appState.draggingElement);
      scene.replaceAllElements([
        ...scene.getElementsIncludingDeleted(),
        appState.draggingElement,
      ]);
      console.log("pointer up appState...", appState);

      // 鼠标抬起后，先清空顶层的cavans
      const canvas = canvasRef.current;
      const context = canvas.getContext("2d");
      context.clearRect(0, 0, canvas.width, canvas.height);
      // 重绘底层canvas
      renderScene({
        elements: scene.getElementsIncludingDeleted(),
        appState: appState,
        scale: window.devicePixelRatio,
        canvas: staticCanvasRef.current,
        renderConfig: {
          selectionColor: "#6965db",
          scrollX: appState.scrollX,
          scrollY: appState.scrollY,
          viewBackgroundColor: "#ffffff",
          zoom: 1,
        },
      });
      window.removeEventListener(
        "pointermove",
        pointerDownState.eventListeners.onMove
      );
      window.removeEventListener(
        "pointerup",
        pointerDownState.eventListeners.onUp
      );
    };

  const initialPointerDownState = (event) => {
    const origin = viewportCoordsToSceneCoords(event, appState);
    return {
      origin,
      lastCoords: { ...origin },
      eventListeners: {
        onMove: null,
        onUp: null,
        onKeyUp: null,
        onKeyDown: null,
      },
    };
  };

  const handleCanvasDoubleClick = (event) => {
    // 创建新的文本元素
    textareaRef.current.startEditText(event);
  };
  return (
    <div ref={canvasContainer}>
      {/* <div className="refer">
        参照物
      </div> */}
      <div className="container wrap">
        <canvas ref={staticCanvasRef} className="canvas">
          静态canvas
        </canvas>
        <canvas
          ref={canvasRef}
          className="canvas draw"
          onWheel={handleCanvasWheel}
          onPointerDown={handleCanvasPointerDown}
          onDoubleClick={handleCanvasDoubleClick}
        >
          动态canvas
        </canvas>
        <LayerUI
          activeTool={activeTool}
          onActiveToolChange={(value) => {
            setActiveTool(value);
          }}
        />
        <TextArea ref={textareaRef} staticCanvasRef={staticCanvasRef} />
      </div>
      <div ref={rafRef}>FPS：--</div>
      <div id="placeholder"></div>
    </div>
  );
});

export default Canvas;
