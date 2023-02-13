import React, { useRef, useEffect } from "react";
import MarkDown from "@/components/markdown";
import doc from "../../../doc/canvas最大尺寸限制.md";
import "./index.less";

function Index() {
  const canvasRef = useRef(null);
  useEffect(() => {
    try {
      const canvas = canvasRef.current;
      const sum = 268496895;
      canvas.width = 65535;
      canvas.height = sum / canvas.width;
      const ctx = canvas.getContext("2d");
      ctx.fillStyle = "red";
      ctx.fillRect(0, 0, 300, 300);
      console.log(canvas.toDataURL());
    } catch (e) {
      console.log("error===", e);
    }
  }, []);
  return (
    <>
      <canvas ref={canvasRef} className="canvas">
        绘制canvas
      </canvas>
      <MarkDown src={doc} />
    </>
  );
}

export default Index;
