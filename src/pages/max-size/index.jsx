import React, { useRef, useState, useEffect } from "react";
import MarkDown from "@/components/markdown";
import doc from "../../../doc/canvas最大尺寸限制.md";
import "./index.less";
import { getMaxArea } from "./util";
let count = 0;
export const isCanvasExceedsMaximumSize = (width, height) => {
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

  const isTestPass = cropCtx && cropCtx.getImageData(0, 0, 1, 1).data[3] !== 0;

  return !isTestPass;
};

const getMaxWidth = () => {
  let max = 65535;
  const step = 1000;
  let min = 1000;
  while (min < max) {
    count++;
    if (count > 1000) {
      // 加个阀值，防止死循环，返回0表示算法错误导致获取失败
      return 0;
    }
    if (isCanvasExceedsMaximumSize(max, 1)) {
      max = parseInt((min + max) / 2);
    } else {
      min = max;
      max = max + step;
    }
  }
  console.log(`最大宽度：尝试了${count}次`);
  return max;
};
const maxWidth = getMaxWidth();
function Index() {
  const canvasRef = useRef(null);
  const [width, setWidth] = useState(maxWidth);
  const [height, setHeight] = useState(1);
  const [areaRes, setAreaRes] = useState({ max: "--", areaCount: "--" });

  const draw = () => {
    const startTime = new Date().getTime();
    const canvas = canvasRef.current;
    canvas.width = width;
    canvas.height = height;
    const ctx = canvas.getContext("2d");
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.fillStyle = "red";
    ctx.fillRect(0, 0, 300 + Math.random() * 1000, 300);

    console.log(`绘制耗时：${new Date().getTime() - startTime}毫秒`);
  };
  useEffect(() => {
    getMaxArea(maxWidth).then((res) => {
      setAreaRes(res);
    });
  }, []);
  return (
    <>
      <div className="row">
        最大宽度：{maxWidth}，最大高度：{maxWidth}，算法查找次数：{count}
      </div>
      <div>
        最大面积：{areaRes.max}，算法查找次数：{areaRes.areaCount}
      </div>
      <div className="row">
        宽度：
        <input
          type="number"
          value={width}
          onChange={(e) => setWidth(Number(e.target.value))}
        />
      </div>
      <div className="row">
        高度：
        <input
          type="number"
          value={height}
          onChange={(e) => setHeight(Number(e.target.value))}
        />
      </div>
      <div>
        <button className="btn" onClick={() => draw()}>
          点击绘制canvas
        </button>
      </div>
      <canvas ref={canvasRef} className="canvas">
        绘制canvas
      </canvas>
      <MarkDown src={doc} />
    </>
  );
}

export default Index;
