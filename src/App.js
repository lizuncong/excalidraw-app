import React, { useRef, useEffect } from "react";
import "./App.css";
import Board from './canvas'


function App() {
  const canvasRef = useRef(null);
  useEffect(() => {
    new Board(canvasRef.current)
  }, [])
  return (
    <div className="App">
      <canvas ref={canvasRef} className="canvas">
        绘制canvas
      </canvas>
    </div>
  );
}

export default App;
