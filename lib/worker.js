let canvas = null;
let ctxWorker = null;
self.onmessage = (event) => {
  const { canvasWorker, scale } = event.data;
  canvas = canvasWorker;
  ctxWorker = canvas.getContext("2d");
  ctxWorker.scale(scale, scale);
  startCounting();
};

let counter = 0;
function startCounting() {
  setInterval(() => {
    redrawCanvasB();
    counter++;
  }, 100);
}

function redrawCanvasB() {
  ctxWorker.clearRect(0, 0, canvas.width, canvas.height);
  ctxWorker.font = "24px Verdana";
  ctxWorker.textAlign = "center";
  ctxWorker.fillText(counter, canvas.width / 2, canvas.height / 2);
}
