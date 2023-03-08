import React, {
  memo,
  useState,
  useRef,
  forwardRef,
  useImperativeHandle,
} from "react";
import { deleteElementCache } from "../../renderer/renderElement";
import { viewportCoordsToSceneCoords, rgb, getFontString } from "@/util";
import { newTextElement } from "../../element/newElement";
import { scene } from "../../scene/scene";
import { renderScene } from "../../renderer/renderScene";
import { appState } from "../../index";
import styles from "./index.module.less";

const Index = forwardRef(({ staticCanvasRef }, ref) => {
  const textareaRef = useRef(null);
  const [textareaValue, setTextAreaValue] = useState("");
  useImperativeHandle(ref, () => ({
    startEditText: (event) => {
      event.preventDefault();
      event.stopPropagation();
      let { x: sceneX, y: sceneY } = viewportCoordsToSceneCoords(
        event,
        appState
      );
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
      const left = event.clientX - appState.offsetLeft;
      const top = event.clientY - appState.offsetTop;
      const styleObj = {
        font: getFontString(element),
        left: `${left}px`,
        top: `${top}px`,
        opacity: 1,
        color: element.strokeColor,
        fontSize: element.fontSize,
      };
      Object.assign(textarea.style, styleObj);
      const copyTextarea = document.getElementById("copyText");
      Object.assign(copyTextarea.style, styleObj);
      // 输入框限制最大宽度，防止输入的文字超出画布宽度
      const maxWidth = appState.canvasWidth - left;
      // textarea.style.maxWidth = `${maxWidth}px`;
      // textarea.style.width = `${element.fontSize}px`;
      // textarea.style.height = `${element.fontSize * 1.2}px`;
      Object.assign(textarea.style, {
        zIndex: 1,
        maxWidth: `${maxWidth}px`,
        width: `${element.fontSize}px`,
        height: `${element.fontSize * 1.2}px`,
      });
    },
  }));
  return (
    <>
      <textarea
        onChange={(e) => {
          let text = e.target.value;
          // console.log("tex5....", text, text.length);
          const textarea = textareaRef.current;
          const maxWidth = parseFloat(textarea.style.maxWidth);

          const copyTextarea = document.getElementById("copyText");
          copyTextarea.innerText = text;
          const copyTextWidth = copyTextarea.getBoundingClientRect().width;
          if (copyTextWidth > maxWidth) {
            // 正常输入的情况下，两者的差值不会太大，只有粘贴进来的文本才会导致
            // copy text宽度突然增大
            if (copyTextWidth - maxWidth < 30) {
              console.log("正常的输入");
              text = copyTextarea.innerText =
                text.slice(0, text.length - 1) +
                "\n" +
                text.slice(text.length - 1);
            } else {
              console.log("粘贴进来的文本");
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
              console.log("splitResult..", splitResult);
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
            scene.replaceAllElements([
              ...scene.getElementsIncludingDeleted(),
              appState.draggingElement,
            ]);
            renderScene({
              elements: scene.getElementsIncludingDeleted(),
              appState: appState,
              scale: window.devicePixelRatio,
              canvas: staticCanvasRef.current,
              renderConfig: {
                selectionColor: "#6965db",
                scrollX: appState.scrollX,
                scrollY: appState.scrollY,
                viewBackgroundColor: "#ffffff",
                zoom: appState.zoom,
              },
            });
            setTimeout(() => {
              copyTextarea.innerText = "";
              setTextAreaValue("");
            }, 200);
          }
          Object.assign(textarea.style, {
            left: `0px`,
            top: `0px`,
            zIndex: -1,
            opacity: 0,
          });
        }}
        value={textareaValue}
        className={styles.textarea}
        ref={textareaRef}
      ></textarea>
      <div
        style={{ background: "grey" }}
        id="copyText"
        contentEditable={true}
        className={[styles.textarea, styles.textarea_copy].join(" ")}
      ></div>
    </>
  );
});

export default memo(Index);
