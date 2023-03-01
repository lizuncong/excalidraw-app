import { getCommonBounds, distance } from "./index";
import { renderScene } from '@/pages/canvas/renderer/renderScene'
const getCanvasSize = (elements, exportPadding) => {
  const [minX, minY, maxX, maxY] = getCommonBounds(elements);
  const width = distance(minX, maxX) + exportPadding * 2;
  const height = distance(minY, maxY) + exportPadding + exportPadding;

  return [minX, minY, width, height];
};
export const exportPng = ({ elements, appState }) => {
  const exportPadding = 10;
  const [minX, minY, width, height] = getCanvasSize(elements, exportPadding);

  console.log("export...", minX, minY, width, height);
  const canvas = document.createElement("canvas");
  canvas.width = width * window.devicePixelRatio;
  canvas.height = height * window.devicePixelRatio;
  // const context = canvas.getContext("2d");
  // context.scale(window.devicePixelRatio, window.devicePixelRatio);

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
      zoom: 1,
    },
  });
  console.log("导出", elements);
  var a = document.createElement("a");
  a.href = canvas.toDataURL();
  a.download = "canvas.png";
  a.click();
};
