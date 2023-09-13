// @ts-nocheck
import React, { memo, useState, useRef, useEffect } from "react";
import { viewportCoordsToSceneCoords } from "@/util";
import MarkDown from "@/components/markdown";
import doc from "@doc/canvas进阶/自由绘制.md";
import "./index.less";
import renderScene from "./renderScene";

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
  const [scale, setScale] = useState(window.devicePixelRatio)
  const [size, setSize] = useState({})
  const resize = (canvas, scale) => {
    const context = canvas.getContext("2d");
    const { offsetWidth, offsetHeight } = canvas;
    canvas.width = offsetWidth * scale;
    canvas.height = offsetHeight * scale;
    setSize({ width: canvas.width, height: canvas.height })
    context.scale(scale, scale);
  }
  useEffect(() => {
    // canvas分辨率矫正
    const canvas = canvasRef.current;
    const { offsetLeft, offsetTop } = canvas;

    resize(canvas, scale)
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
      strokeStyle: 'black',
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
    (pointerDownState) => (event) => {
      const pointerCoords = viewportCoordsToSceneCoords(event, appState);

      appState.draggingElement.points.push([pointerCoords.x, pointerCoords.y]);
      renderScene(canvasRef.current, appState);
    };

  const onPointerUpFromCanvasPointerDownHandler = (pointerDownState) => () => {
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
    <div className="free-draw">
      <div>
        <div>canvas宽度：{size.width} 高度：{size.height} 面积：{size.width * size.height}</div>
        <div>
          当前系数：
          <input
            type="number"
            value={scale}
            onChange={(e) => {
              const v = Number(e.target.value)
              elements.length = 0
              setScale(v)
              resize(canvasRef.current, v)
            }}
          />
        </div>
      </div>
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
