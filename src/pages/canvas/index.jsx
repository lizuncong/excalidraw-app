import React, { memo, useRef, useEffect } from "react";
import { viewportCoordsToSceneCoords, distance } from "./util";
import { dragNewElement } from "./element/dragElements";
import { newElement } from "./element/newElement";
import { renderCanvas, renderScene } from "./renderer/renderScene";
import Scene from "./scene/scene";
import "./index.less";
const scene = new Scene();
let appState = {
  scrollX: 0,
  scrollY: 0,
  offsetLeft: 0,
  offsetTop: 0,
  draggingElement: null,
  currentItemStrokeColor: "#000000",
  currentItemBackgroundColor: "transparent",
  currentItemFillStyle: "hachure",
  currentItemStrokeWidth: 1,
  currentItemStrokeStyle: "solid",
  currentItemRoughness: 1,
  currentItemOpacity: 100,
};
const Canvas = memo(() => {
  const canvasRef = useRef(null);
  const canvasContainer = useRef(null);
  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    const { offsetWidth, offsetHeight, offsetLeft, offsetTop } = canvas;

    canvas.width = offsetWidth * window.devicePixelRatio;
    canvas.height = offsetHeight * window.devicePixelRatio;
    appState.offsetLeft = offsetLeft;
    appState.offsetTop = offsetTop;
    renderCanvas(ctx, appState);
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
  const handleCanvasWheel = (event) => {
    const { deltaX, deltaY } = event;
    appState.scrollX = appState.scrollX - deltaX;
    appState.scrollY = appState.scrollY - deltaY;

    // renderCanvas(canvasRef.current.getContext("2d"), appState);

    console.log("wheel", appState.scrollX, appState.scrollY);
  };

  const handleCanvasPointerDown = (event) => {
    const pointerDownState = initialPointerDownState(event);
    createGenericElementOnPointerDown("rectangle", pointerDownState);
    const onPointerMove =
      onPointerMoveFromCanvasPointerDownHandler(pointerDownState);
    const onPointerUp =
      onPointerUpFromCanvasPointerDownHandler(pointerDownState);
    window.addEventListener("pointermove", onPointerMove);
    window.addEventListener("pointerup", onPointerUp);
    pointerDownState.eventListeners.onMove = onPointerMove;
    pointerDownState.eventListeners.onUp = onPointerUp;
  };
  const createGenericElementOnPointerDown = (elementType, pointerDownState) => {
    const element = newElement({
      type: elementType,
      x: pointerDownState.origin.x,
      y: pointerDownState.origin.y,
      strokeColor: appState.currentItemStrokeColor,
      backgroundColor: appState.currentItemBackgroundColor,
      fillStyle: appState.currentItemFillStyle,
      strokeWidth: appState.currentItemStrokeWidth,
      strokeStyle: appState.currentItemStrokeStyle,
      roughness: appState.currentItemRoughness,
      opacity: appState.currentItemOpacity,
      roundness: null,
      locked: false,
    });
    scene.replaceAllElements([...scene.getElementsIncludingDeleted(), element]);
    appState.draggingElement = element;
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
      maybeDragNewGenericElement(pointerDownState, event);
      renderScene({
        elements: scene.getElementsIncludingDeleted(),
        appState: appState,
        scale: window.devicePixelRatio,
        canvas: canvasRef.current,
        renderConfig: {
          selectionColor: '#6965db',
          scrollX: appState.scrollX,
          scrollY: appState.scrollY,
          viewBackgroundColor: '#ffffff',
          zoom: 1,
        },
      });
    };
  const maybeDragNewGenericElement = (pointerDownState, event) => {
    const pointerCoords = pointerDownState.lastCoords;
    const draggingElement = appState.draggingElement;
    dragNewElement(
      draggingElement,
      "rectangle",
      pointerDownState.origin.x,
      pointerDownState.origin.y,
      pointerCoords.x,
      pointerCoords.y,
      distance(pointerDownState.origin.x, pointerCoords.x),
      distance(pointerDownState.origin.y, pointerCoords.y),
      false,
      false,
      null
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

  return (
    <div ref={canvasContainer}>
      <canvas
        onWheel={handleCanvasWheel}
        onPointerDown={handleCanvasPointerDown}
        // onPointerUp={(e) => {
        //   window.removeEventListener("pointermove", handleWindowPointerMove);
        // }}
        ref={canvasRef}
        className="canvas"
      >
        绘制canvas
      </canvas>
    </div>
  );
});

export default Canvas;
