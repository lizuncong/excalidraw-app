import { renderScene } from "./renderScene";

let canvas = null;
let preElements = [];
/*eslint-disable*/
self.onmessage = (event) => {
  const { elements, canvasWorker, appState, scale, renderConfig, type } =
    event.data;
  if (canvasWorker) {
    canvas = canvasWorker;
  }
  if (elements) {
    preElements = elements;
  }
  console.log("worker接收到消息并绘制....", preElements.length);
  renderScene({
    elements: preElements,
    appState,
    scale,
    canvas,
    renderConfig,
  });
};
