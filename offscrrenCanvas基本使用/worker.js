let canvas = null;
let ctxWorker = null;

self.onmessage = (event) => {
  const { canvasWorker, scale } = event.data;
  if (canvas) {
    drawOffscreenCanvas();
  } else {
    canvas = canvasWorker;
    ctxWorker = canvas.getContext("2d");
    ctxWorker.scale(scale, scale);
    drawOffscreenCanvas()
  }
};

function drawOffscreenCanvas() {
  ctxWorker.clearRect(0, 0, canvas.width, canvas.height);
  ctxWorker.save();
  
  ctxWorker.lineWidth = 3;
  ctxWorker.strokeStyle = 'red';
  ctxWorker.strokeRect(0, 0, 200, 200);

  ctxWorker.restore();
}
