import React, { memo, useRef, useEffect } from "react";
// import MarkDown from "@/components/markdown";
// import doc from "../../../doc/canvas进阶/绘制矩形及无限画布.md";
import renderScene from "./renderScene";
import { getNormalizedZoom, getStateForZoom } from "./zoom";
import "./index.less";
const appState = {
  zoom: { value: 1 },
  offsetLeft: 0,
  offsetTop: 0,
  scrollX: 0,
  scrollY: 0,
  draggingElement: null,
};
const ZOOM_STEP = 0.1;
export const elements = [];
const viewportCoordsToSceneCoords = (
  { clientX, clientY },
  { zoom, offsetLeft, offsetTop, scrollX, scrollY }
) => {
  const x = (clientX - offsetLeft) / zoom.value - scrollX;
  const y = (clientY - offsetTop) / zoom.value - scrollY;
  return { x, y };
};
const Canvas = memo(() => {
  const canvasRef = useRef(null);
  const canvasContainer = useRef(null);
  const cursorPosition = useRef({});
  const scaleRef = useRef();
  useEffect(() => {
    const render = () => {
      const canvas = canvasRef.current;
      const context = canvas.getContext("2d");
      const { offsetWidth, offsetHeight, offsetLeft, offsetTop } = canvas;
      canvas.width = offsetWidth * window.devicePixelRatio;
      canvas.height = offsetHeight * window.devicePixelRatio;
      context.scale(window.devicePixelRatio, window.devicePixelRatio);

      appState.offsetLeft = offsetLeft;
      appState.offsetTop = offsetTop;
      renderScene(canvas, appState);
    };
    render();
    const resize = () => {
      render();
    };
    window.addEventListener("resize", resize);
    return () => {
      window.removeEventListener("resize", resize);
    };
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
    document.addEventListener("mousemove", updateCurrentCursorPosition);
    return () => {
      wrap.removeEventListener("wheel", handleWheel);
      document.removeEventListener("mousemove", updateCurrentCursorPosition);
    };
  }, []);
  const handleCanvasPointerDown = (event) => {
    const origin = viewportCoordsToSceneCoords(event, appState);
    const pointerDownState = {
      origin,
      lastCoords: { ...origin },
      eventListeners: {
        onMove: null,
        onUp: null,
      },
    };
    const element = {
      x: pointerDownState.origin.x,
      y: pointerDownState.origin.y,
      width: 0,
      height: 0,
      strokeColor: "#000000",
      backgroundColor: "transparent",
      fillStyle: "hachure",
      strokeWidth: 1,
      strokeStyle: "solid",
    };
    appState.draggingElement = element;
    elements.push(element);
    const onPointerMove =
      onPointerMoveFromCanvasPointerDownHandler(pointerDownState);
    const onPointerUp =
      onPointerUpFromCanvasPointerDownHandler(pointerDownState);
    window.addEventListener("pointermove", onPointerMove);
    window.addEventListener("pointerup", onPointerUp);
    pointerDownState.eventListeners.onMove = onPointerMove;
    pointerDownState.eventListeners.onUp = onPointerUp;
  };
  const onPointerUpFromCanvasPointerDownHandler =
    (pointerDownState) => (event) => {
      window.removeEventListener(
        "pointermove",
        pointerDownState.eventListeners.onMove
      );
      window.removeEventListener(
        "pointerup",
        pointerDownState.eventListeners.onUp
      );
    };
  const onPointerMoveFromCanvasPointerDownHandler =
    (pointerDownState) => (event) => {
      const pointerCoords = viewportCoordsToSceneCoords(event, appState);
      pointerDownState.lastCoords.x = pointerCoords.x;
      pointerDownState.lastCoords.y = pointerCoords.y;
      // maybeDragNewGenericElement(pointerDownState, event);
      appState.draggingElement.width =
        pointerCoords.x - pointerDownState.origin.x;
      appState.draggingElement.height =
        pointerCoords.y - pointerDownState.origin.y;
      renderScene(canvasRef.current, appState);
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
      scaleRef.current.innerText = `${(nextZoom * 100).toFixed(0)}%`;
      renderScene(canvasRef.current, appState);

      return;
    }
    //
    appState.scrollX = appState.scrollX - deltaX / appState.zoom.value;
    appState.scrollY = appState.scrollY - deltaY / appState.zoom.value;
    renderScene(canvasRef.current, appState);
  };
  return (
    <div className="scale">
      <div ref={canvasContainer}>
        <canvas
          ref={canvasRef}
          className="canvas"
          onPointerDown={handleCanvasPointerDown}
          onWheel={handleCanvasWheel}
        >
          绘制canvas
        </canvas>
      </div>
      <div>
        <button
          onClick={() => {
            let minX = Infinity;
            let maxX = -Infinity;
            let minY = Infinity;
            let maxY = -Infinity;

            elements.forEach((element) => {
              const [x1, y1, x2, y2] = [
                element.x,
                element.y,
                element.x + element.width,
                element.y + element.height,
              ];
              minX = Math.min(minX, x1);
              minY = Math.min(minY, y1);
              maxX = Math.max(maxX, x2);
              maxY = Math.max(maxY, y2);
            });

            const canvas = document.createElement("canvas");
            canvas.width = (maxX - minX + 20) * window.devicePixelRatio;
            canvas.height = (maxY - minY + 20) * window.devicePixelRatio;
            const context = canvas.getContext("2d");
            context.scale(window.devicePixelRatio, window.devicePixelRatio);
            renderScene(canvas, {
              ...appState,
              scrollX: -minX + 10,
              scrollY: -minY + 10,
            });
            var a = document.createElement("a");
            a.href = canvas.toDataURL();
            a.download = "canvas.png";
            a.click();
          }}
        >
          导出PNG
        </button>
      </div>
      <div ref={scaleRef}></div>
      {/* <div className="tip">温馨提示：可以在上面的画板中绘制矩形哦！！</div> */}
      {/* <MarkDown src={doc} /> */}
    </div>
  );
});

export default Canvas;
