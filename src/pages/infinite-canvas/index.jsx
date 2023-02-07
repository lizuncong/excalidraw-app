import React, { memo, useRef, useEffect } from "react";
import MarkDown from "@/components/markdown";
import doc from "../../../doc/canvas进阶/绘制矩形及无限画布.md";
import renderScene from "./renderScene";
import "./index.less";
const appState = {
  offsetLeft: 0,
  offsetTop: 0,
};
const viewportCoordsToSceneCoords = (
  { clientX, clientY },
  { offsetLeft, offsetTop }
) => {
  const x = clientX - offsetLeft;
  const y = clientY - offsetTop;
  return { x, y };
};
const Canvas = memo(() => {
  const canvasRef = useRef(null);
  const canvasContainer = useRef(null);
  useEffect(() => {
    const canvas = canvasRef.current;
    const context = canvas.getContext("2d");
    const { offsetWidth, offsetHeight, offsetLeft, offsetTop } = canvas;
    canvas.width = offsetWidth * window.devicePixelRatio;
    canvas.height = offsetHeight * window.devicePixelRatio;
    context.scale(window.devicePixelRatio, window.devicePixelRatio);

    appState.offsetLeft = offsetLeft;
    appState.offsetTop = offsetTop;
    renderScene(canvas);
  }, []);
  const handleCanvasPointerDown = (event) => {
    const origin = viewportCoordsToSceneCoords(event, appState);
    const pointerDownState = {
      origin,
      lastCoords: { ...origin },
    };
    console.log('pointerDownState==',pointerDownState)
    // createGenericElementOnPointerDown("rectangle", pointerDownState);
    // const onPointerMove =
    //   onPointerMoveFromCanvasPointerDownHandler(pointerDownState);
    // const onPointerUp =
    //   onPointerUpFromCanvasPointerDownHandler(pointerDownState);
    // window.addEventListener("pointermove", onPointerMove);
    // window.addEventListener("pointerup", onPointerUp);
    // pointerDownState.eventListeners.onMove = onPointerMove;
    // pointerDownState.eventListeners.onUp = onPointerUp;
  };
  return (
    <div ref={canvasContainer}>
      <MarkDown src={doc} />
      <canvas
        ref={canvasRef}
        className="canvas"
        onPointerDown={handleCanvasPointerDown}
      >
        绘制canvas
      </canvas>
    </div>
  );
});

export default Canvas;
