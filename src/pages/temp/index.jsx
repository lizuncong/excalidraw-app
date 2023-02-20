import React, { memo, useRef, useEffect } from "react";
import MarkDown from "@/components/markdown";
import doc from "../../../doc/canvas进阶/自由绘制.md";
import "./index.less";

const Canvas = memo(() => {
  const canvasRef = useRef(null);
  const canvasContainer = useRef(null);
  useEffect(() => {
    // canvas分辨率矫正
    const canvas = canvasRef.current;
    const context = canvas.getContext("2d");
    const { offsetWidth, offsetHeight } = canvas;
    canvas.width = offsetWidth * window.devicePixelRatio;
    canvas.height = offsetHeight * window.devicePixelRatio;
    context.scale(window.devicePixelRatio, window.devicePixelRatio);

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

  return (
    <div>
      <div ref={canvasContainer}>
        <canvas ref={canvasRef} className="canvas">
          绘制canvas
        </canvas>
      </div>

      <MarkDown src={doc} />
    </div>
  );
});

export default Canvas;
