import React, { useEffect, useRef } from "react";

function Style() {
  const canvasRef = useRef();
  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");

    function draw() {
      ctx.lineWidth = 1;
      ctx.strokeStyle = "red";
      ctx.moveTo(5, 5);
      ctx.lineTo(5, 140);
      ctx.stroke();

      ctx.lineWidth = 2;
      ctx.strokeStyle = "yellow";
      ctx.moveTo(19, 5);
      ctx.lineTo(19, 140);
      ctx.stroke();

      ctx.lineWidth = 5;
      ctx.strokeStyle = "blue";
      ctx.moveTo(33, 5);
      ctx.lineTo(33, 140);
      ctx.stroke();
    }
    function drawRect() {
      // ctx.lineWidth = 1;
      // ctx.strokeStyle = 'red'
      // ctx.strokeRect(50,50, 100,100)
      // ctx.lineWidth = 10;
      // ctx.strokeStyle = 'green'
      // ctx.strokeRect(200, 200, 100,100)
    }
    draw();
    drawRect();
  }, []);
  return (
    <div>
      <canvas
        style={{ border: "1px solid black" }}
        ref={canvasRef}
        width="400"
        height="400"
        id="tutorial"
      ></canvas>
    </div>
  );
}

export default Style;
