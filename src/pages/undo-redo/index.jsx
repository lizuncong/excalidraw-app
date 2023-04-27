import React, { memo, useRef, useEffect } from "react";
import { viewportCoordsToSceneCoords, rgb } from "@/util";
import styles from "./index.module.less";
import renderScene from "./renderScene";
import History from "./History";

let elements = JSON.parse(localStorage.getItem("free-draw-elements")) || [];

const appState = {
  offsetLeft: 0,
  offsetTop: 0,
  scrollX: 0,
  scrollY: 0,
  draggingElement: null,
};
const history = new History();
window.__history = history;

console.log("history...", history);
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
    renderScene(canvas, appState, elements);
    history.record(appState, elements);
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
      id: Math.floor(Math.random() * 2 ** 31),
      y: pointerDownState.origin.y,
      points: [[pointerDownState.origin.x, pointerDownState.origin.y]],
      strokeColor: "#000000",
      backgroundColor: "transparent",
      fillStyle: "hachure",
      strokeWidth: 1,
      strokeStyle: rgb(),
      versionNonce: Math.floor(Math.random() * 2 ** 31),
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
      appState.draggingElement.versionNonce = Math.floor(
        Math.random() * 2 ** 31
      );
      renderScene(canvasRef.current, appState, elements);
    };

  const onPointerUpFromCanvasPointerDownHandler = (pointerDownState) => () => {
    history.record(appState, elements);
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
    <div className={styles.undoRedo}>
      <div className={styles.container} ref={canvasContainer}>
        <canvas
          ref={canvasRef}
          className={styles.canvas}
          onPointerDown={handleCanvasPointerDown}
        >
          绘制canvas
        </canvas>
        <div className={styles.btnRow}>
          <button
            onClick={() => {
              const data = history.undoOnce();
              console.log("撤销。。。", data);
              if (data) {
                elements = data.elements;
                renderScene(canvasRef.current, appState, elements);
              }
            }}
          >
            撤销
          </button>
          <button
            onClick={() => {
              const data = history.redoOnce();
              console.log("重做...", data);
              if (data) {
                elements = data.elements;
                renderScene(canvasRef.current, appState, elements);
              }
            }}
          >
            重做
          </button>
        </div>
      </div>
    </div>
  );
});

export default Canvas;
