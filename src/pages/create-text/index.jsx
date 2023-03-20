import React, { memo, useRef, useState, useEffect } from "react";
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
  const [textareaValue, setTextAreaValue] = useState("");
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
    const textarea = textareaRef.current;
    textarea.focus();
    const styleObj = {
      font: getFontString(element),
      left: `${sceneX}px`,
      top: `${sceneY}px`,
      opacity: 1,
      color: element.strokeColor,
      fontSize: element.fontSize,
    };
    Object.assign(textarea.style, styleObj);
    const copyTextarea = document.getElementById("copyText");
    Object.assign(copyTextarea.style, styleObj);
    // 输入框限制最大宽度，防止输入的文字超出画布宽度
    const maxWidth = appState.canvasWidth - sceneX;
    textarea.style.maxWidth = `${maxWidth}px`;
    textarea.style.width = `${element.fontSize}px`;
    textarea.style.height = `${element.fontSize * 1.2}px`;
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
        <textarea
          onChange={(e) => {
            let text = e.target.value;
            const textarea = textareaRef.current;
            const maxWidth = parseFloat(textarea.style.maxWidth);

            const copyTextarea = document.getElementById("copyText");
            copyTextarea.innerText = text;
            const copyTextWidth = copyTextarea.getBoundingClientRect().width;
            if (copyTextWidth > maxWidth) {
              // 正常输入的情况下，两者的差值不会太大，只有粘贴进来的文本才会导致
              // copy text宽度突然增大
              if (copyTextWidth - maxWidth < 30) {
                text = copyTextarea.innerText =
                  text.slice(0, text.length - 1) +
                  "\n" +
                  text.slice(text.length - 1);
              } else {
                let lines = text.split("\n");
                const splitResult = [];
                lines.forEach((line) => {
                  copyTextarea.innerText = line;
                  const copyTextWidth =
                    copyTextarea.getBoundingClientRect().width;
                  if (copyTextWidth <= maxWidth) {
                    splitResult.push(line);
                  } else {
                    let lastIdx = 0;
                    for (let i = 1; i < line.length; i++) {
                      const str = line.slice(lastIdx, i);
                      copyTextarea.innerText = str;
                      const copyTextWidth =
                        copyTextarea.getBoundingClientRect().width;
                      if (copyTextWidth > maxWidth) {
                        splitResult.push(line.slice(lastIdx, i - 1));
                        lastIdx = i - 1;
                      } else if (i === line.length - 1) {
                        splitResult.push(line.slice(lastIdx, i));
                      }
                    }
                  }
                });
                text = splitResult.join("\n");
                copyTextarea.innerText = text;
              }
            }

            setTextAreaValue(text);
            const { width, height } = copyTextarea.getBoundingClientRect();
            textarea.style.width = `${width + 30}px`;
            textarea.style.height = `${height}px`;

            appState.draggingElement.text = text;
          }}
          onBlur={() => {
            const element = appState.draggingElement;
            const textarea = textareaRef.current;
            const copyTextarea = document.getElementById("copyText");
            if (element.text) {
              element.width = copyTextarea.offsetWidth;
              element.height = copyTextarea.offsetHeight;
              deleteElementCache(appState.draggingElement);
              elements.push(appState.draggingElement);
              renderScene(staticCanvasRef.current, appState);
              setTimeout(() => {
                copyTextarea.innerText = "";
                setTextAreaValue("");
              }, 200);
            }
            Object.assign(textarea.style, {
              left: `0px`,
              top: `0px`,
              width: "20px",
              height: `30px`,
              opacity: 0,
            });
          }}
          value={textareaValue}
          className="textarea"
          ref={textareaRef}
        ></textarea>
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
