import React, { memo, useState, useRef, useEffect } from "react";
import { viewportCoordsToSceneCoords } from "./util";
import { renderCanvas } from "./renderer";
const Canvas = memo(() => {
  const canvasRef = useRef(null);
  const canvasStateRef = useRef({
    scrollX: 0,
    scrollY: 0,
    offsetLeft: 0,
    offsetTop: 0,
  });
  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    const { offsetWidth, offsetHeight, offsetLeft, offsetTop } = canvas;

    canvas.width = offsetWidth * window.devicePixelRatio;
    canvas.height = offsetHeight * window.devicePixelRatio;
    canvasStateRef.current.offsetLeft = offsetLeft;
    canvasStateRef.current.offsetTop = offsetTop;
    renderCanvas(ctx, canvasStateRef.current);
  }, []);
  const handleCanvasWheel = (event) => {
    const { deltaX, deltaY } = event;
    canvasStateRef.current.scrollX = canvasStateRef.current.scrollX - deltaX;
    canvasStateRef.current.scrollY = canvasStateRef.current.scrollY - deltaY;
   
    renderCanvas(canvasRef.current.getContext('2d'), canvasStateRef.current)

    console.log(
      "wheel",
      canvasStateRef.current.scrollX,
      canvasStateRef.current.scrollY
    );
  };
  const handleWindowPointerMove = (event) => {
    console.log("handleWindowPointerMove=========", event.target);
  };
  const handleCanvasPointerDown = (event) => {
    const pointerDownState = this.initialPointerDownState(event);
    console.log("pointer down===", event);
    window.addEventListener("pointermove", handleWindowPointerMove);
  };

  const initialPointerDownState = (event) => {
    const origin = viewportCoordsToSceneCoords(
      { clientX: event.clientX, clientY: event.clientY },
      canvasStateRef.current
    );
  };

  return (
    <canvas
      onWheel={handleCanvasWheel}
      onPointerDown={handleCanvasPointerDown}
      onPointerUp={(e) => {
        window.removeEventListener("pointermove", handleWindowPointerMove);
      }}
      ref={canvasRef}
      className="canvas"
    >
      绘制canvas
    </canvas>
  );
});

export default Canvas;
