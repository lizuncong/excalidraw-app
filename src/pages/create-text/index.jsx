import React, { memo, useRef, useEffect } from "react";
import { viewportCoordsToSceneCoords, rgb } from "@/util";
import MarkDown from "@/components/markdown";
import doc from "@doc/canvas进阶/点稀释.md";
import "./index.less";
import renderScene, {
  deleteElementCache,
  // renderDraggingScene,
} from "./renderScene";
// import { withBatchedUpdatesThrottled } from "@/util";
import { elementKey } from "./constant";
import { newTextElement, getFontString } from "./element";
export let elements = JSON.parse(localStorage.getItem(elementKey)) || [];
const appState = {
  offsetLeft: 0,
  offsetTop: 0,
  scrollX: 0,
  scrollY: 0,
  canvasWidth: 0,
  canvasHeight: 0,
  draggingElement: null,
};
const Canvas = memo(() => {
  const canvasRef = useRef(null);
  const canvasContainer = useRef(null);
  const staticCanvasRef = useRef(null);
  const textareaRef = useRef(null);
  // const globalVar = useRef({});
  useEffect(() => {
    const setCanvasSize = (canvas) => {
      const context = canvas.getContext("2d");

      canvas.width = offsetWidth * window.devicePixelRatio;
      canvas.height = offsetHeight * window.devicePixelRatio;
      context.scale(window.devicePixelRatio, window.devicePixelRatio);
    };
    // canvas分辨率矫正
    const canvas = canvasRef.current;
    const { offsetWidth, offsetHeight } = canvas;
    setCanvasSize(canvas);
    setCanvasSize(staticCanvasRef.current);
    // 设置appState
    const { x, y } = canvas.getBoundingClientRect();
    // const offsetTop = Math.ceil(y);
    // const offsetLeft = Math.ceil(x);

    appState.offsetLeft = x; //offsetLeft;
    appState.offsetTop = y; //offsetTop;
    appState.canvasWidth = offsetWidth;
    appState.canvasHeight = offsetHeight;
    // 绘制静态canvas
    renderScene(staticCanvasRef.current, appState);

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
  // const handleCanvasPointerDown = (event) => {
  //   if(!globalVar.current.text) return
  //   const origin = viewportCoordsToSceneCoords(event, appState);

  //   const pointerDownState = {
  //     origin,
  //     lastCoords: { ...origin },
  //     eventListeners: {
  //       onMove: null,
  //       onUp: null,
  //     },
  //   };
  //   const element = {
  //     x: pointerDownState.origin.x,
  //     y: pointerDownState.origin.y,
  //     points: [[pointerDownState.origin.x, pointerDownState.origin.y]],
  //     strokeColor: "#000000",
  //     backgroundColor: "transparent",
  //     fillStyle: "hachure",
  //     strokeWidth: 1,
  //     strokeStyle: rgb(),
  //   };
  //   appState.draggingElement = element;
  //   deleteElementCache(element);
  //   // elements.push(element);

  //   const onPointerMove =
  //     onPointerMoveFromCanvasPointerDownHandler(pointerDownState);
  //   const onPointerUp =
  //     onPointerUpFromCanvasPointerDownHandler(pointerDownState);
  //   window.addEventListener("pointermove", onPointerMove);
  //   window.addEventListener("pointerup", onPointerUp);
  //   pointerDownState.eventListeners.onMove = onPointerMove;
  //   pointerDownState.eventListeners.onUp = onPointerUp;
  // };
  // const onPointerMoveFromCanvasPointerDownHandler = (pointerDownState) =>
  //   withBatchedUpdatesThrottled((event) => {
  //     const pointerCoords = viewportCoordsToSceneCoords(event, appState);
  //     appState.draggingElement.points.push([pointerCoords.x, pointerCoords.y]);

  //     renderDraggingScene(canvasRef.current, appState);
  //   });

  // const onPointerUpFromCanvasPointerDownHandler = (pointerDownState) => () => {
  //   deleteElementCache(appState.draggingElement);
  //   elements.push(appState.draggingElement);
  //   console.log("appState...", appState);
  //   console.log(
  //     "elements...",
  //     elements.map((ele) => ele.points.length)
  //   );
  //   const canvas = canvasRef.current;
  //   const context = canvas.getContext("2d");
  //   context.clearRect(0, 0, canvas.width, canvas.height);
  //   renderScene(staticCanvasRef.current, appState);
  //   window.removeEventListener(
  //     "pointermove",
  //     pointerDownState.eventListeners.onMove
  //   );
  //   window.removeEventListener(
  //     "pointerup",
  //     pointerDownState.eventListeners.onUp
  //   );
  // };
  const handleCanvasDoubleClick = (event) => {
    event.preventDefault();
    event.stopPropagation();
    let { x: sceneX, y: sceneY } = viewportCoordsToSceneCoords(event, appState);
    const element = newTextElement({
      x: sceneX,
      y: sceneY,
      strokeColor: rgb(),
      backgroundColor: "transparent",
      fillStyle: "hachure",
      strokeWidth: 1,
      strokeStyle: "solid",
      text: "",
      fontSize: 20,
      fontFamily: "Virgil", // Helvetica Cascadia
      textAlign: "left",
      verticalAlign: "top",
    });
    appState.draggingElement = element;
    canvasRef.current.style.cursor = "";
    const textarea = textareaRef.current;
    textarea.value = element.text;
    textarea.tabIndex = 0;
    textarea.focus();
    Object.assign(textarea.style, {
      font: getFontString(element),
      left: `${sceneX}px`,
      top: `${sceneY}px`,
      opacity: 1,
      width: `${appState.canvasWidth - sceneX}px`,
      maxHeight: `${appState.canvasHeight - sceneY}px`,
      color: element.strokeColor,
      fontSize: element.fontSize,
    });
    const handleBlur = (e) => {
      if (element.text) {
        element.width = textarea.offsetWidth;
        element.height = textarea.offsetHeight;
        deleteElementCache(appState.draggingElement);
        elements.push(appState.draggingElement);
        renderScene(staticCanvasRef.current, appState);
      }
      textarea.innerText = "";
      Object.assign(textarea.style, {
        left: `0px`,
        top: `0px`,
        width: 0,
        opacity: 0,
      });
      textarea.removeEventListener("blur", handleBlur);
      textarea.removeEventListener("input", handleInput);
    };
    const handleInput = (e) => {
      element.text = textarea.innerText;
    };
    textarea.addEventListener("blur", handleBlur);
    textarea.addEventListener("input", handleInput);
  };
  return (
    <div className="create-text">
      <div className="container wrap" ref={canvasContainer}>
        <canvas ref={staticCanvasRef} className="canvas">
          静态canvas
        </canvas>
        <canvas
          ref={canvasRef}
          className="canvas draw"
          // onPointerDown={handleCanvasPointerDown}
          onDoubleClick={handleCanvasDoubleClick}
        >
          动态canvas
        </canvas>
        <div
          contentEditable={true}
          className="textarea"
          ref={textareaRef}
        ></div>
      </div>
      <div id="offscreen"></div>
      <MarkDown src={doc} />
    </div>
  );
});

export default Canvas;
