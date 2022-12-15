import React, { useRef, useEffect } from 'react'
import './App.css';

const statusConfig = {
  IDLE: 0,
  DRAG_START: 1,
  DRAGGING: 2
}
const canvasInfo = {
  stauts: statusConfig.IDLE
}

const circles = []

function App() {
  const canvasRef = useRef(null)
  useEffect(() => {
    const ctx = canvasRef.current.getContext('2d')
    drawCircle(ctx, 100, 100, 20)
    drawCircle(ctx, 200, 200, 30)
    const onMouseDown = (e) => {
      const canvasPosition = getCanvasPosition(e) // 画布坐标
      const circleRef = ifInCircle(canvasPosition)
      if (circleRef) {
        console.log(circleRef)
      }
    }
    canvasRef.current.addEventListener('mousedown', onMouseDown)
    return () => {
      canvasRef.current.removeEventListener('mousedown', onMouseDown)
    }
  }, [])
  const ifInCircle = (pos) => {
    const getDistance = (p1, p2) => {
      return Math.sqrt((p1.x - p2.x) ** 2 + (p1.y - p2.y) ** 2)
    }
    for (let i = 0; i < circles.length; i++) {
      if (getDistance(circles[i], pos) < circles[i].r) {
        return circles[i]
      }
    }
    return false
  }
  const getCanvasPosition = e => {
    return {
      x: e.offsetX,
      y: e.offsetY
    }
  }
  const drawCircle = (ctx, cx, cy, r) => {
    circles.push({
      x: cx,
      y: cy,
      r
    })
    ctx.save()
    ctx.beginPath()

    ctx.strokeStyle = "blue"
    ctx.arc(cx, cy, r, 0, Math.PI * 2)
    ctx.stroke()

    ctx.closePath()
    ctx.restore()
  }
  return (
    <div className="App">
      <canvas ref={canvasRef} width={600} height={400} className='canvas'>绘制canvas</canvas>
    </div>
  );
}

export default App;
