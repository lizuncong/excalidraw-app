import { getCanvasSize } from "@/util/export";
import { renderSceneInWorker } from "./worker";

let canvas;

export const canvasToDataURL = ({
  isExport,
  notUseCache,
  elements,
  appState,
  callback,
}) => {
  const exportPadding = 1.6;
  const [minX, minY, width, height] = getCanvasSize(elements, exportPadding);
  canvas = document.createElement("canvas");

  canvas.style.width = `${width}px`;
  canvas.style.height = `${height}px`;
  canvas.width = width * window.devicePixelRatio;
  canvas.height = height * window.devicePixelRatio;

  renderSceneInWorker({
    elements,
    appState: {
      ...appState,
      scrollX: -minX + exportPadding,
      scrollY: -minY + exportPadding,
    },
    scale: window.devicePixelRatio,
    canvasImg: canvas,
    renderConfig: {
      selectionColor: "#6965db",
      scrollX: -minX + exportPadding,
      scrollY: -minY + exportPadding,
      viewBackgroundColor: "#ffffff",
      zoom: { value: 1 },
      fillStyle: appState.fillStyle,
      // strokeStyle: 'black', //appState.strokeStyle,
      isExport,
      notUseCache,
    },
    cb: ({ base64 }) => {
      callback({
        base64,
        minX,
        minY,
        width,
        height,
      });
    },
  });
};
