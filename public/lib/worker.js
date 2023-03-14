let canvas = null;
let ctxWorker = null;
// Waiting to receive the OffScreenCanvas
self.onmessage = (event) => {
  const { canvasWorker, devicePixelRatio, offsetWidth, offsetHeight } =
    event.data;
  canvas = canvasWorker;
  ctxWorker = canvas.getContext("2d");
  console.log("offsetwidth..", offsetWidth, offsetHeight);
  canvas.width = offsetWidth * devicePixelRatio;
  canvas.height = offsetHeight * devicePixelRatio;
  ctxWorker.scale(devicePixelRatio, devicePixelRatio);
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
