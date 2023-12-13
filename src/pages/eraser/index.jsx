import React, { memo, useEffect } from "react";

const Index = memo(() => {
  useEffect(() => {
    // 获取canvas元素和绘图上下文
    const canvas = document.getElementById("myCanvas");
    const ctx = canvas.getContext("2d");

    // 绘制背景
    ctx.fillStyle = "red";
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    // 设置橡皮擦的属性
    const eraserSize = 20; // 橡皮擦的大小
    let isErasing = false; // 是否正在擦除

    // 鼠标按下时开始擦除
    canvas.addEventListener("mousedown", startErasing);
    canvas.addEventListener("touchstart", startErasing);

    // 鼠标移动时进行擦除
    canvas.addEventListener("mousemove", erase);
    canvas.addEventListener("touchmove", erase);

    // 鼠标松开时停止擦除
    canvas.addEventListener("mouseup", stopErasing);
    canvas.addEventListener("touchend", stopErasing);

    // 开始擦除
    function startErasing(e) {
      isErasing = true;
      erase(e);
    }

    // 擦除
    function erase(e) {
      if (!isErasing) return;

      // 获取鼠标在canvas中的坐标
      let x, y;
      if (e.type === "touchmove") {
        x = e.touches[0].clientX - canvas.offsetLeft;
        y = e.touches[0].clientY - canvas.offsetTop;
      } else {
        x = e.clientX - canvas.offsetLeft;
        y = e.clientY - canvas.offsetTop;
      }

      // 设置裁剪区域
      ctx.save();
      ctx.beginPath();
      ctx.arc(x, y, eraserSize, 0, 2 * Math.PI);
      ctx.clip();

      // 使用透明色进行绘制
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // 恢复绘制状态
      ctx.restore();
    }

    // 停止擦除
    function stopErasing() {
      isErasing = false;
    }
  }, []);
  return (
    <div>
      <div>
        232343434343423234343434342323434343434232343434343423234343434342323434343434
        232343434343423234343434342323434343434232343434343423234343434342323434343434
        232343434343423234343434342323434343434232343434343423234343434342323434343434
        232343434343423234343434342323434343434232343434343423234343434342323434343434
        232343434343423234343434342323434343434232343434343423234343434342323434343434
        232343434343423234343434342323434343434232343434343423234343434342323434343434
        232343434343423234343434342323434343434232343434343423234343434342323434343434
        232343434343423234343434342323434343434232343434343423234343434342323434343434
        232343434343423234343434342323434343434232343434343423234343434342323434343434
        232343434343423234343434342323434343434232343434343423234343434342323434343434
        232343434343423234343434342323434343434232343434343423234343434342323434343434
        232343434343423234343434342323434343434232343434343423234343434342323434343434
        232343434343423234343434342323434343434232343434343423234343434342323434343434
        232343434343423234343434342323434343434232343434343423234343434342323434343434
        232343434343423234343434342323434343434232343434343423234343434342323434343434
      </div>
      <canvas
        style={{
          position: "fixed",
          left: 0,
          top: 0,
        }}
        width="800"
        height="600"
        id="myCanvas"
      ></canvas>
    </div>
  );
});

export default Index;
