import { getCommonBounds, distance } from "./index";
export const getCanvasSize = (elements, exportPadding) => {
  const [minX, minY, maxX, maxY] = getCommonBounds(elements);
  const width = distance(minX, maxX) + exportPadding * 2;
  const height = distance(minY, maxY) + exportPadding + exportPadding;

  return [minX, minY, width, height];
};
export const canvasToDataURL = ({
  renderScene,
  isExport,
  notUseCache,
  elements,
  appState,
}) => {
  const exportPadding = 10;
  const [minX, minY, width, height] = getCanvasSize(elements, exportPadding);

  const canvas = document.createElement("canvas");
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
      isExport,
      notUseCache,
    },
  });

  return canvas.toDataURL();
};
export const exportPng = ({
  renderScene,
  isExport = true,
  notUseCache = true,
  elements,
  appState,
}) => {
  const dataUrl = canvasToDataURL({
    renderScene,
    isExport,
    notUseCache,
    elements,
    appState,
  });
  var a = document.createElement("a");
  a.href = dataUrl;
  a.download = "canvas.png";
  a.click();
};
