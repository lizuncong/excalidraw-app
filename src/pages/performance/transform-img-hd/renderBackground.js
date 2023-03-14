import { getCanvasSize } from "@/util/export";
// let previewCanvas = null;
// 由于canvasToDataURL导出的图片是以zoom.value=1导出的，因此放大后是拉伸了图片的宽高，还是很模糊的
// 如果需要放大后图片保持清晰，则需要按实际的zoom.value绘制canvas的大小。
export const canvasToDataURL = ({
  renderScene,
  isExport,
  notUseCache,
  elements,
  appState,
}) => {
  const exportPadding = 1;
  const [minX, minY, width, height] = getCanvasSize(elements, exportPadding);
  // const placeholder = document.getElementById("placeholder");
  console.log("export...", minX, minY, width, height);
  const canvas = document.createElement("canvas");
  let w = width * appState.zoom.value;
  let h = height * appState.zoom.value;
  canvas.style.width = `${w}px`;
  canvas.style.height = `${h}px`;
  canvas.width = w * window.devicePixelRatio;
  canvas.height = h * window.devicePixelRatio;
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
      // zoom: { value: 1 },
      zoom: appState.zoom,
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
