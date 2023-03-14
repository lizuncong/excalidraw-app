import { renderScene } from "./renderScene";

let canvas = null;
let ctxWorker = null;
/*eslint-disable*/
self.onmessage = (event) => {
  const {
    canvasWorker,
    scale,
    isExport,
    notUseCache,
    type,
    minX,
    exportPadding,
    minY,
    elements,
    width,
    height,
    devicePixelRatio,
    appState,
  } = event.data;
  if (type === "render") {
    canvas = canvasWorker;
    ctxWorker = canvas.getContext("2d");
    ctxWorker.scale(scale, scale);
    renderScene({
      elements,
      appState: {
        ...appState,
        scrollX: -minX + exportPadding,
        scrollY: -minY + exportPadding,
      },
      scale: devicePixelRatio,
      canvas: canvas,
      renderConfig: {
        selectionColor: "#6965db",
        scrollX: -minX + exportPadding,
        scrollY: -minY + exportPadding,
        viewBackgroundColor: "#ffffff",
        zoom: { value: 1 },
        fillStyle: appState.fillStyle,
        strokeStyle: appState.strokeStyle,
        isExport,
        notUseCache,
        devicePixelRatio,
      },
    });
    const imageBitmap = canvas.transferToImageBitmap();
    // console.log('worker finish..', canvas.toDataURL())
    postMessage({ imageBitmap }, [imageBitmap]);
  }

  // startCounting();
};

// let counter = 0;
// function startCounting() {
//   setInterval(() => {
//     redrawCanvasB();
//     counter++;
//   }, 100);
// }

// function redrawCanvasB() {
//   ctxWorker.clearRect(0, 0, canvas.width, canvas.height);
//   ctxWorker.font = "24px Verdana";
//   ctxWorker.textAlign = "center";
//   ctxWorker.fillText(counter, canvas.width / 2, canvas.height / 2);
// }
console.log("worker===========");
