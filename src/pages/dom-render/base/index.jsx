import React, { memo, useRef, useEffect, useState } from "react";
import { distance } from "@/util";
// import { isAndroid } from "@/util/device";
import {
  withBatchedUpdatesThrottled,
  viewportCoordsToSceneCoords,
} from "@/util";
import { getNormalizedZoom, getStateForZoom } from "@/util/zoom";
import generateElements, { animateElements } from "./generateElement";
import { createElement } from "./element/newElement";
import { renderScene } from "./renderer";
import { useGesture } from "./useGesture";
import { deleteElementCache, clearElementCache } from "./renderer";
import LayerUI from "./components/layer-ui";
import TextArea from "./components/textarea";
import { scene } from "./scene/scene";
import "./index.less";
const temp = JSON.parse(localStorage.getItem("appState"));
export let appState = temp || {
  zoom: { value: 1 },
  scrollX: 0,
  scrollY: 0,
  offsetLeft: 0,
  offsetTop: 0,
  draggingElement: null,
  canvasWidth: 0,
  canvasHeight: 0,
};
const ZOOM_STEP = 0.1;

const Canvas = memo(() => {
  const canvasRef = useRef(null);
  const canvasContainer = useRef(null);
  const staticCanvasRef = useRef(null);
  const svgContainerRef = useRef(null);
  const cursorPosition = useRef({});
  const textareaRef = useRef(null);
  const rafRef = useRef(null);
  const globalVarRef = useRef({});
  const [flag, refreshFlag] = useState(false);
  const [activeTool, setActiveTool] = useState({ type: "" });
  const [testObj, setTestObj] = useState({ count: "", type: "rectangle" });
  const [animate, setAnimate] = useState(false);
  const animateRef = useRef();
  const refresh = () => {
    refreshFlag(!flag);
  };
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
      svg: svgContainerRef.current,
      renderConfig: {
        selectionColor: "#6965db",
        scrollX: appState.scrollX,
        scrollY: appState.scrollY,
        viewBackgroundColor: "#ffffff",
        zoom: appState.zoom,
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
    const updateCurrentCursorPosition = (event) => {
      cursorPosition.current = {
        cursorX: event.clientX,
        cursorY: event.clientY,
      };
    };
    const onTapStart = (e) => {
      e.preventDefault();
    };
    const canvas = canvasRef.current;
    canvas.addEventListener("touchstart", onTapStart);
    document.addEventListener("mousemove", updateCurrentCursorPosition);
    return () => {
      canvas.removeEventListener("touchstart", onTapStart);

      wrap.removeEventListener("wheel", handleWheel);
      document.removeEventListener("mousemove", updateCurrentCursorPosition);
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
  const {
    updateGestureOnPointerDown,
    handleCanvasPointerMove,
    removePointer,
    gesture,
  } = useGesture(canvasRef, appState);
  const reDrawAfterZoom = () => {
    renderScene({
      elements: scene.getElementsIncludingDeleted(),
      appState: appState,
      scale: window.devicePixelRatio,
      canvas: staticCanvasRef.current,
      svg: svgContainerRef.current,
      renderConfig: {
        selectionColor: "#6965db",
        scrollX: appState.scrollX,
        scrollY: appState.scrollY,
        viewBackgroundColor: "#ffffff",
        zoom: appState.zoom,
      },
    });
    if (globalVarRef.current.zoomTimerId) {
      clearTimeout(globalVarRef.current.zoomTimerId);
    }
    globalVarRef.current.zoomTimerId = setTimeout(() => {
      clearElementCache();
      renderScene({
        elements: scene.getElementsIncludingDeleted(),
        appState: appState,
        scale: window.devicePixelRatio,
        canvas: staticCanvasRef.current,
        svg: svgContainerRef.current,
        renderConfig: {
          selectionColor: "#6965db",
          scrollX: appState.scrollX,
          scrollY: appState.scrollY,
          viewBackgroundColor: "#ffffff",
          zoom: appState.zoom,
        },
      });
    }, 300);
  };
  const handleCanvasWheel = (event) => {
    const { deltaX, deltaY } = event;
    // 关于缩放：双指放大时，deltaY是负数，缩小时，deltaY是正数
    // 缩放，本质上就是对某个点的坐标进行变换
    if (event.metaKey || event.ctrlKey) {
      const sign = Math.sign(deltaY); // 只有两种情况，要么+1，要么-1
      const MAX_STEP = ZOOM_STEP * 100; // 10
      const absDelta = Math.abs(deltaY);
      let delta = deltaY;
      // delta最大为10
      if (absDelta > MAX_STEP) {
        delta = MAX_STEP * sign;
      }
      let newZoom = appState.zoom.value - delta / 100;
      newZoom +=
        Math.log10(Math.max(1, appState.zoom.value)) *
        -sign *
        Math.min(1, absDelta / 20);
      const nextZoom = getNormalizedZoom(newZoom);
      Object.assign(appState, {
        ...getStateForZoom(
          {
            viewportX: cursorPosition.current.cursorX,
            viewportY: cursorPosition.current.cursorY,
            nextZoom: nextZoom,
          },
          appState
        ),
      });
      refresh();
      reDrawAfterZoom();
      return;
    }
    appState.scrollX = appState.scrollX - deltaX / appState.zoom.value;
    appState.scrollY = appState.scrollY - deltaY / appState.zoom.value;

    // 在滚动画布的过程中，只绘制底层的canvas
    renderScene({
      elements: scene.getElementsIncludingDeleted(),
      appState: appState,
      scale: window.devicePixelRatio,
      canvas: staticCanvasRef.current,
      svg: svgContainerRef.current,
      renderConfig: {
        selectionColor: "#6965db",
        scrollX: appState.scrollX,
        scrollY: appState.scrollY,
        viewBackgroundColor: "#ffffff",
        zoom: appState.zoom,
      },
    });
  };

  const handleCanvasPointerDown = (event) => {
    if (gesture.pointers.size > 1) {
      return;
    }
    if (!activeTool.type) {
      updateGestureOnPointerDown(event);
      return;
    }
    const pointerDownState = initialPointerDownState(event);
    const element = createElement({
      elementType: activeTool.type,
      pointerDownState,
      appState,
    });
    appState.draggingElement = element;
    deleteElementCache(element);
    scene.replaceAllElements([
      ...scene.getElementsIncludingDeleted(),
      appState.draggingElement,
    ]);
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
        elements: scene.getElementsIncludingDeleted(),
        appState: appState,
        scale: window.devicePixelRatio,
        canvas: staticCanvasRef.current,
        svg: svgContainerRef.current,
        renderConfig: {
          selectionColor: "#6965db",
          scrollX: appState.scrollX,
          scrollY: appState.scrollY,
          viewBackgroundColor: "#ffffff",
          zoom: appState.zoom,
        },
      });
    });

  const onPointerUpFromCanvasPointerDownHandler =
    (pointerDownState) => (event) => {
      // deleteElementCache(appState.draggingElement);
      removePointer(event);
      // scene.replaceAllElements([
      //   ...scene.getElementsIncludingDeleted(),
      //   appState.draggingElement,
      // ]);

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
        svg: svgContainerRef.current,
        renderConfig: {
          selectionColor: "#6965db",
          scrollX: appState.scrollX,
          scrollY: appState.scrollY,
          viewBackgroundColor: "#ffffff",
          zoom: appState.zoom,
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
    if (activeTool.type) return;
    // 创建新的文本元素
    textareaRef.current.startEditText(event);
  };
  return (
    <div className="svg-base" ref={canvasContainer}>
      {/* <div className="refer">
        参照物
      </div> */}
      <div
        onWheel={handleCanvasWheel}
        onPointerDown={handleCanvasPointerDown}
        onDoubleClick={handleCanvasDoubleClick}
        onPointerCancel={removePointer}
        onPointerMove={(event) => {
          handleCanvasPointerMove(event, () => {
            refresh();
            reDrawAfterZoom();
          });
        }}
        className="container wrap"
      >
        <div className="svg-container" ref={svgContainerRef}></div>
        <canvas ref={staticCanvasRef} className="canvas">
          静态canvas
        </canvas>
        <canvas
          ref={canvasRef}
          className="canvas draw"
          // onWheel={handleCanvasWheel}
          // onPointerDown={handleCanvasPointerDown}
          // onDoubleClick={handleCanvasDoubleClick}
          // onPointerCancel={removePointer}
          // onPointerMove={(event) => {
          //   handleCanvasPointerMove(event, () => {
          //     refresh();
          //     reDrawAfterZoom();
          //   });
          // }}
        >
          动态canvas
        </canvas>
        <LayerUI
          activeTool={activeTool}
          onZoomChange={(zoomVal) => {
            if (appState.zoom.value === zoomVal) return;
            Object.assign(appState, {
              ...getStateForZoom(
                {
                  viewportX: appState.canvasWidth / 2 + appState.offsetLeft,
                  viewportY: appState.canvasHeight / 2 + appState.offsetTop,
                  nextZoom: zoomVal,
                },
                appState
              ),
            });
            refresh();
            reDrawAfterZoom();
          }}
          appState={{ ...appState }}
          onActiveToolChange={(value) => {
            setActiveTool(value);
          }}
        />
        <TextArea ref={textareaRef} staticCanvasRef={staticCanvasRef} />
      </div>
      <div>
        <span ref={rafRef}>FPS：--</span>
        <span className="total" id="canvas-total"></span>
      </div>
      <div className="row">
        <input
          type="number"
          value={testObj.count}
          onChange={(e) => setTestObj({ ...testObj, count: e.target.value })}
        />
        <select
          value={testObj.type}
          onChange={(e) => setTestObj({ ...testObj, type: e.target.value })}
        >
          <option value="freedraw">freedraw</option>
          <option value="rectangle">rectangle</option>
          <option value="text">text</option>
        </select>
        <button
          onClick={() => {
            const elements = generateElements(
              Number(testObj.count),
              testObj.type,
              appState
            );
            scene.replaceAllElements([
              ...scene.getElementsIncludingDeleted(),
              ...elements,
            ]);
            renderScene({
              elements: scene.getElementsIncludingDeleted(),
              appState: appState,
              scale: window.devicePixelRatio,
              canvas: staticCanvasRef.current,
              svg: svgContainerRef.current,
              renderConfig: {
                selectionColor: "#6965db",
                scrollX: appState.scrollX,
                scrollY: appState.scrollY,
                viewBackgroundColor: "#ffffff",
                zoom: appState.zoom,
              },
            });
          }}
        >
          生成
        </button>
        <button
          onClick={() => {
            setAnimate(!animate);
            if (animateRef.current) {
              cancelAnimationFrame(animateRef.current);
            }
            if (animate) return;
            let diffTime = 100;
            let lastDate = Date.now();
            const tick = () => {
              const currentDate = Date.now();
              if (currentDate - lastDate >= diffTime) {
                lastDate = currentDate;
                const elements = animateElements(
                  scene.getElementsIncludingDeleted(),
                  appState
                );
                renderScene({
                  elements: elements,
                  appState: appState,
                  scale: window.devicePixelRatio,
                  canvas: staticCanvasRef.current,
                  svg: svgContainerRef.current,
                  renderConfig: {
                    selectionColor: "#6965db",
                    scrollX: appState.scrollX,
                    scrollY: appState.scrollY,
                    viewBackgroundColor: "#ffffff",
                    zoom: appState.zoom,
                  },
                });
              }

              animateRef.current = requestAnimationFrame(tick);
            };
            animateRef.current = requestAnimationFrame(tick);
          }}
        >
          {animate ? "停止动画" : "动画"}
        </button>
      </div>
      <div id="placeholder"></div>
    </div>
  );
});

export default Canvas;
