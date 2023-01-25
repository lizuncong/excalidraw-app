import React, { useEffect, useRef } from "react";

function Style() {
  const canvasRef = useRef();
  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");

    function draw() {
      ctx.lineWidth = 1;
      ctx.strokeStyle = "red";
      ctx.moveTo(5.5, 5);
      ctx.lineTo(5.5, 140);
      ctx.stroke();

      ctx.beginPath();
      ctx.lineWidth = 1;
      ctx.strokeStyle = "red";
      ctx.moveTo(20, 5);
      ctx.lineTo(20, 140);
      ctx.stroke();
    }
    draw();
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
