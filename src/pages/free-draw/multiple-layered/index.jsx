import React, { memo, useRef, useEffect, useState } from "react";
import { viewportCoordsToSceneCoords, rgb } from "@/util";
import MarkDown from "@/components/markdown";
import doc from "@doc/canvas进阶/点稀释.md";
import "./index.less";
import renderScene, {
  deleteElementCache,
  renderDraggingScene,
} from "./renderScene";
import { withBatchedUpdatesThrottled } from "./util";
export let elements =
  JSON.parse(localStorage.getItem("free-draw-elements")) || [];
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
  const staticCanvasRef = useRef(null);
  const [loading, setLoading] = useState(false);
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
  useEffect(() => {
    import("./1500").then((res) => {
      // console.log("懒加载....");
    });
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
      strokeStyle: rgb(),
    };
    appState.draggingElement = element;
    deleteElementCache(element);
    // elements.push(element);

    const onPointerMove =
      onPointerMoveFromCanvasPointerDownHandler(pointerDownState);
    const onPointerUp =
      onPointerUpFromCanvasPointerDownHandler(pointerDownState);
    window.addEventListener("pointermove", onPointerMove);
    window.addEventListener("pointerup", onPointerUp);
    pointerDownState.eventListeners.onMove = onPointerMove;
    pointerDownState.eventListeners.onUp = onPointerUp;
  };
  const onPointerMoveFromCanvasPointerDownHandler = (pointerDownState) =>
    withBatchedUpdatesThrottled((event) => {
      const pointerCoords = viewportCoordsToSceneCoords(event, appState);
      appState.draggingElement.points.push([pointerCoords.x, pointerCoords.y]);

      renderDraggingScene(canvasRef.current, appState);
    });

  const onPointerUpFromCanvasPointerDownHandler = (pointerDownState) => () => {
    deleteElementCache(appState.draggingElement);
    elements.push(appState.draggingElement);
    console.log("appState...", appState);
    console.log(
      "elements...",
      elements.map((ele) => ele.points.length)
    );
    const canvas = canvasRef.current;
    const context = canvas.getContext("2d");
    context.clearRect(0, 0, canvas.width, canvas.height);
    renderScene(staticCanvasRef.current, appState);
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
    <div className="multiple-layer">
      <div className="container wrap" ref={canvasContainer}>
        <canvas ref={staticCanvasRef} className="canvas">
          静态canvas
        </canvas>
        <canvas
          ref={canvasRef}
          className="canvas"
          onPointerDown={handleCanvasPointerDown}
        >
          动态canvas
        </canvas>
        <button
          className="btn clear"
          onClick={() => {
            localStorage.setItem("free-draw-elements", JSON.stringify([]));
            elements = [];
            // 绘制静态canvas
            renderScene(staticCanvasRef.current, appState);
          }}
        >
          清空localstorage
        </button>
        <button
          className="btn"
          onClick={() => {
            if (loading) return;
            setLoading(true);
            import("./1500")
              .then((res) => {
                const largeData = res.default;
                localStorage.setItem(
                  "free-draw-elements",
                  JSON.stringify(largeData)
                );
                elements = largeData;
                // 绘制静态canvas
                renderScene(staticCanvasRef.current, appState);
              })
              .finally(() => {
                setLoading(false);
              });
          }}
        >
          极限测试
        </button>
      </div>
      {/* <div id="offscreen"></div> */}
      <MarkDown src={doc} />
    </div>
  );
});

export default Canvas;
