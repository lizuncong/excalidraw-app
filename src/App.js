import React, { useRef, useEffect } from "react";
import "./App.css";

const statusConfig = {
  IDLE: 0,
  DRAG_START: 1,
  DRAGGING: 2,
  MOVE_START: 3,
  MOVING: 4
};
// 画布缩放：以鼠标为中心进行缩放
// 元素拖动：以鼠标偏移量进行移动
const canvasInfo = {
  stauts: statusConfig.IDLE,
  dragTarget: null,
  lastEvtPos: { x: null, y: null }, // 用于计算偏移量，比如手指按下，到移动5px才认为是拖动元素
  offsetEvtPos: { x: null, y: null }, // 用于拖动的时候计算元素的偏移量
  offset: { x: 0, y: 0 }, // 用于计算缩放的偏移量
  scale: 1, // 记录画布缩放系数
  scaleStep: 0.1,
  maxScale: 2,
  minScale: 0.5,
};

const circles = [
  { x: 100, y: 100, r: 20 },
  { x: 200, y: 200, r: 30 },
];

function App() {
  const canvasRef = useRef(null);
  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    renderCanvas(ctx, canvas);
    const onMouseDown = (e) => {
      // console.log('mouse.down', e)
      const canvasPosition = getCanvasPosition(e, canvasInfo.offset, canvasInfo.scale); // 画布坐标
      const circleRef = ifInCircle(canvasPosition);
      if (circleRef) {
        canvasInfo.dragTarget = circleRef;
        canvasInfo.status = statusConfig.DRAG_START;
        canvasInfo.lastEvtPos = canvasPosition;
        canvasInfo.offsetEvtPos = canvasPosition;
      }
    };
    const onMouseMove = (e) => {
      const canvasPosition = getCanvasPosition(e, canvasInfo.offset, canvasInfo.scale);

      // 只有移动距离大于5才认为是拖拽。防止点击的时候也产生元素位置的移动
      if (
        canvasInfo.status === statusConfig.DRAG_START &&
        getDistance(canvasPosition, canvasInfo.lastEvtPos) > 5
      ) {
        canvasInfo.status = statusConfig.DRAGGING;
        canvasInfo.offsetEvtPos = canvasPosition;
        console.log("try to drag");
        canvas.style.cursor = "all-scroll";
      } else if (canvasInfo.status === statusConfig.DRAGGING) {
        console.log("dragging....");
        const { dragTarget } = canvasInfo;
        dragTarget.x += canvasPosition.x - canvasInfo.offsetEvtPos.x;
        dragTarget.y += canvasPosition.y - canvasInfo.offsetEvtPos.y;

        renderCanvas(ctx, canvas);
        canvasInfo.offsetEvtPos = canvasPosition;
      }
    };
    const onMouseUp = (e) => {
      console.log("mouse up");
      if (canvasInfo.status === statusConfig.DRAGGING) {
        canvasInfo.status = statusConfig.IDLE;
        canvas.style.cursor = "";
      }
    };
    const onWheel = (e) => {
      e.preventDefault();
      console.log('wheel', e)
      const canvasPosition = getCanvasPosition(e, canvasInfo.offset);
      const { scaleStep } = canvasInfo
      const deltaX = canvasPosition.x / canvasInfo.scale * scaleStep;
      const deltaY = canvasPosition.y / canvasInfo.scale * scaleStep;

      if (e.wheelDelta > 0 && canvasInfo.scale < canvasInfo.maxScale) {
        // console.log('up')
        canvasInfo.offset.x -= deltaX
        canvasInfo.offset.y -= deltaY
        canvasInfo.scale += scaleStep
      } else if (e.wheelDelta <= 0 && canvasInfo.scale > canvasInfo.minScale) {
        // console.log('down')
        canvasInfo.offset.x += deltaX
        canvasInfo.offset.y += deltaY
        canvasInfo.scale -= scaleStep
      }
      ctx.setTransform(canvasInfo.scale, 0, 0, canvasInfo.scale, canvasInfo.offset.x, canvasInfo.offset.y)
      renderCanvas(ctx, canvas);

    };
    canvas.addEventListener("mousedown", onMouseDown);
    canvas.addEventListener("mousemove", onMouseMove);
    canvas.addEventListener("mouseup", onMouseUp);
    canvas.addEventListener("wheel", onWheel);

    return () => {
      canvas.removeEventListener("mousedown", onMouseDown);
      canvas.removeEventListener("mousemove", onMouseMove);
      canvas.removeEventListener("mouseup", onMouseUp);
      canvas.removeEventListener("wheel", onWheel);
    };
  }, []);
  const renderCanvas = (ctx, canvas) => {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    circles.forEach((c) => drawCircle(ctx, c.x, c.y, c.r));
  };
  const getDistance = (p1, p2) => {
    return Math.sqrt((p1.x - p2.x) ** 2 + (p1.y - p2.y) ** 2);
  };
  const ifInCircle = (pos) => {
    for (let i = 0; i < circles.length; i++) {
      if (getDistance(circles[i], pos) < circles[i].r) {
        return circles[i];
      }
    }
    return false;
  };
  const getCanvasPosition = (e, offset = { x: 0, y: 0 }, scale = 1) => {
    return {
      x: (e.offsetX - offset.x) / scale,
      y: (e.offsetY - offset.y) / scale,
    };
  };
  const drawCircle = (ctx, cx, cy, r) => {
    ctx.save();
    ctx.beginPath();

    ctx.strokeStyle = "blue";
    ctx.arc(cx, cy, r, 0, Math.PI * 2);
    ctx.stroke();

    ctx.closePath();
    ctx.restore();
  };
  return (
    <div className="App">
      <canvas ref={canvasRef} width={600} height={400} className="canvas">
        绘制canvas
      </canvas>
    </div>
  );
}

export default App;
