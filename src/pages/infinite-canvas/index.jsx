import React, { memo, useRef, useEffect } from "react";
import MarkDown from "@/components/markdown";
import doc from "../../../doc/canvas进阶/绘制矩形及无限画布.md";
import renderScene from "./renderScene";
import "./index.less";
const appState = {
  offsetLeft: 0,
  offsetTop: 0,
  scrollX: 0,
  scrollY: 0,
  draggingElement: null,
};
export const elements = [];
const viewportCoordsToSceneCoords = (
  { clientX, clientY },
  { offsetLeft, offsetTop, scrollX, scrollY }
) => {
  const x = clientX - offsetLeft - scrollX;
  const y = clientY - offsetTop - scrollY;
  return { x, y };
};
const Canvas = memo(() => {
  const canvasRef = useRef(null);
  const canvasContainer = useRef(null);

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
    return () => {
      wrap.removeEventListener("wheel", handleWheel);
    };
  }, []);
  const handleCanvasPointerDown = (event) => {
    const origin = viewportCoordsToSceneCoords(event, appState);
    console.log("origin...", appState, origin);
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
    appState.scrollX = appState.scrollX - deltaX;
    appState.scrollY = appState.scrollY - deltaY;
    console.log(`滚动距离，X：${appState.scrollX}, Y：${appState.scrollY}`);
    renderScene(canvasRef.current, appState);
  };
  return (
    <div>
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
            console.log("导出", elements);
            var a = document.createElement("a");
            a.href = canvas.toDataURL();
            a.download = "canvas.png";
            a.click();
          }}
        >
          导出PNG
        </button>
      </div>
      <div className="tip">温馨提示：可以在上面的画板中绘制矩形哦！！</div>
      <MarkDown src={doc} />
    </div>
  );
});

export default Canvas;
