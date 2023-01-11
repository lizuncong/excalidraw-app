import React, { memo, useState, useRef, useEffect } from "react";
import { drawAxis } from "./util";
const Canvas = memo(() => {
  const canvasRef = useRef(null);
  const canvasStateRef = useRef({
    scrollX: 0,
    scrollY: 0,
  });
  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    const { offsetWidth, offsetHeight, offsetLeft, offsetTop } = canvas;

    canvas.width = offsetWidth * window.devicePixelRatio;
    canvas.height = offsetHeight * window.devicePixelRatio;

    drawAxis(ctx);
  }, []);
  const handleCanvasWheel = (event) => {
    const { deltaX, deltaY } = event;
    canvasStateRef.current.scrollX = canvasStateRef.current.scrollX - deltaX;
    canvasStateRef.current.scrollY = canvasStateRef.current.scrollY - deltaY;
    console.log(
      "whe444430el",
      canvasStateRef.current.scrollX,
      canvasStateRef.current.scrollY
    );
  };
  const handleWindowPointerMove = event => {
    console.log('handleWindowPointerMove=========', event.target)
  }
  const handleCanvasPointerDown = (event) => {
    // this.savePointer(event.clientX, event.clientY, "down");
    // const pointerDownState = this.initialPointerDownState(event);
    console.log("pointer down===", event);
    window.addEventListener('pointermove', handleWindowPointerMove);

  };
  return (
    <canvas
      onWheel={handleCanvasWheel}
      onPointerDown={handleCanvasPointerDown}
      onPointerUp={e=> {
        window.removeEventListener('pointermove', handleWindowPointerMove)
      }}
      ref={canvasRef}
      className="canvas"
    >
      绘制canvas
    </canvas>
  );
});

export default Canvas;
