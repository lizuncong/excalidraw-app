import React, { memo, useRef, useEffect } from "react";
import { viewportCoordsToSceneCoords, rgb } from "@/util";
import MarkDown from "@/components/markdown";
import doc from "@doc/canvas进阶/点稀释.md";
import "./index.less";
import renderScene from "./renderScene";
import { withBatchedUpdatesThrottled } from './util'
export const elements = JSON.parse(localStorage.getItem("free-draw-elements")) || [];
const appState = {
  offsetLeft: 0,
  offsetTop: 0,
  scrollX: 0,
  scrollY: 0,
  draggingElement: null,
};
const Canvas = memo(() => {
  const canvasRef = useRef(null);
  const canvasContainer = useRef(null);
  useEffect(() => {
    // canvas分辨率矫正
    const canvas = canvasRef.current;
    const context = canvas.getContext("2d");
    const { offsetWidth, offsetHeight, offsetLeft, offsetTop } = canvas;
    canvas.width = offsetWidth * window.devicePixelRatio;
    canvas.height = offsetHeight * window.devicePixelRatio;
    context.scale(window.devicePixelRatio, window.devicePixelRatio);
    appState.offsetLeft = offsetLeft;
    appState.offsetTop = offsetTop;
    renderScene(canvas, appState);

    // 防止双指滑动时切换页面
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
      points: [[pointerDownState.origin.x, pointerDownState.origin.y]],
      strokeColor: "#000000",
      backgroundColor: "transparent",
      fillStyle: "hachure",
      strokeWidth: 1,
      strokeStyle: rgb(),
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
  const onPointerMoveFromCanvasPointerDownHandler =
    (pointerDownState) => withBatchedUpdatesThrottled((event) => {
      const pointerCoords = viewportCoordsToSceneCoords(event, appState);

      appState.draggingElement.points.push([pointerCoords.x, pointerCoords.y]);
      renderScene(canvasRef.current, appState);
    });

  const onPointerUpFromCanvasPointerDownHandler = (pointerDownState) => () => {
    console.log('appState...', appState)
    console.log("elements...", elements.map(ele => ele.points.length));
    window.removeEventListener(
      "pointermove",
      pointerDownState.eventListeners.onMove
    );
    window.removeEventListener(
      "pointerup",
      pointerDownState.eventListeners.onUp
    );
  };
  return (
    <div className="dilution">
      <div className="container" ref={canvasContainer}>
        <canvas
          ref={canvasRef}
          className="canvas"
          onPointerDown={handleCanvasPointerDown}
        >
          绘制canvas
        </canvas>
      </div>
      <MarkDown src={doc} />
    </div>
  );
});

export default Canvas;
