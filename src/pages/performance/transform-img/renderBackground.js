import { getCanvasSize } from "@/util/export";
// let previewCanvas = null;
export const canvasToDataURL = ({
  renderScene,
  isExport,
  notUseCache,
  elements,
  appState,
}) => {
  const exportPadding = 0;
  const [minX, minY, width, height] = getCanvasSize(elements, exportPadding);
  // const placeholder = document.getElementById("placeholder");
  console.log("export...", minX, minY, width, height);
  const canvas = document.createElement("canvas");
  canvas.style.width = `${width}px`;
  canvas.style.height = `${height}px`;
  canvas.width = width * window.devicePixelRatio;
  canvas.height = height * window.devicePixelRatio;
  renderScene({
    elements,
    appState: {
      ...appState,
      scrollX: -minX + exportPadding,
      scrollY: -minY + exportPadding,
    },
    scale: window.devicePixelRatio,
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
    },
  });
  // if (previewCanvas) {
  //   previewCanvas.remove();
  // }
  // previewCanvas = canvas;
  // placeholder.appendChild(canvas);
  return {
    canvas,
    minX,
    minY,
    width,
    height,
  };
};
