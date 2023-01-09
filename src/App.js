import React, { useRef, useEffect } from "react";
import "./App.css";
import Canvas from './canvas'

const canvasInstance = new Canvas();
function App() {
  const canvasRef = useRef(null);
  useEffect(() => {
    canvasInstance.init(canvasRef.current)
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
