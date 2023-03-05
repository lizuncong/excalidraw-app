import React, { memo, useRef, useEffect } from "react";
import { viewportCoordsToSceneCoords, rgb } from "@/util";
import MarkDown from "@/components/markdown";
import doc from "@doc/canvas进阶/点稀释.md";
import "./index.less";
import renderScene, { deleteElementCache } from "./renderScene";
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
    const styleObj = {
      font: getFontString(element),
      left: `${sceneX}px`,
      top: `${sceneY}px`,
      opacity: 1,
      // width: 'auto',
      color: element.strokeColor,
      fontSize: element.fontSize,
    };
    Object.assign(textarea.style, styleObj);
    const copyTextarea = document.getElementById("copyText");
    Object.assign(copyTextarea.style, styleObj);
    const handleBlur = (e) => {
      if (element.text) {
        element.width = copyTextarea.offsetWidth;
        element.height = copyTextarea.offsetHeight;
        deleteElementCache(appState.draggingElement);
        elements.push(appState.draggingElement);
        renderScene(staticCanvasRef.current, appState);
        setTimeout(() => {
          copyTextarea.innerText = "";
        }, 200);
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
    const maxWidth = appState.canvasWidth - sceneX;
    textarea.style.width = `${maxWidth}px`;
    const handleInput = (e) => {
      const text = textarea.value;
      copyTextarea.innerText = text;
      // 为了让textarea高度自适应
      textarea.style.height = textarea.scrollHeight + "px";
      if (copyTextarea.offsetWidth > maxWidth) {
        copyTextarea.innerText =
          text.slice(0, text.length - 1) + "\n" + text.slice(text.length - 1);
        textarea.value = copyTextarea.innerText;
      }
      // textarea.style.width = `${copyTextarea.offsetWidth}px`;

      element.text = textarea.value;
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
          onDoubleClick={handleCanvasDoubleClick}
        >
          动态canvas
        </canvas>
        <textarea className="textarea" ref={textareaRef}></textarea>
      </div>
      <div id="offscreen"></div>
      <MarkDown src={doc} />
      <div
        style={{ background: "grey" }}
        id="copyText"
        contentEditable={true}
        className="textarea textarea_copy"
      ></div>
    </div>
  );
});

export default Canvas;
