import React, { useRef, useEffect } from "react";
import MarkDown from "@/components/markdown";
import doc from "../../../doc/canvas最大尺寸限制.md";
import "./index.less";

function Index() {
  const canvasRef = useRef(null);
  const isCanvasExceedsMaximumSize = (width, height) => {
    const testCvs = document.createElement("canvas");
    testCvs.width = width;
    testCvs.height = height;
    const testCtx = testCvs.getContext("2d");
    testCtx.fillRect(width - 1, height - 1, 1, 1);

    const cropCvs = document.createElement("canvas");
    cropCvs.width = 1;
    cropCvs.height = 1;
    const cropCtx = cropCvs.getContext("2d");
    cropCtx.drawImage(testCvs, width - 1, height - 1, 1, 1, 0, 0, 1, 1);

    const isTestPass =
      cropCtx && cropCtx.getImageData(0, 0, 1, 1).data[3] !== 0;

    if (isTestPass) {
      console.log(`canvas绘制正常，宽度：${width}，高度：${height}`);
    } else {
      console.error(
        `canvas绘制超出最大尺寸限制，宽度：${width}，高度：${height}`
      );
    }
    return isTestPass;
  };

  useEffect(() => {
    try {
      const canvas = canvasRef.current;
      const sum = 268496895;
      canvas.width = 65535;
      canvas.height = sum / canvas.width;
      const ctx = canvas.getContext("2d");
      ctx.fillStyle = "red";
      ctx.fillRect(0, 0, 300, 300);
      isCanvasExceedsMaximumSize(canvas.width, canvas.height);
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
