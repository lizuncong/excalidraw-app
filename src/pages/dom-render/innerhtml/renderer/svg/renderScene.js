import { renderElementToSvg } from "./renderElement";
export const SVG_NS = "http://www.w3.org/2000/svg";

const trimSpace = (str) => {
  return str.replace(/\s+/g," ")
}

export const renderScene = ({
  elements,
  appState,
  scale,
  svg,
  renderConfig,
  isTransform,
}) => {
  const originSize = 30;
  svg.setAttribute(
    "style",
    `
    transform: translateX(${
      appState.scrollX * appState.zoom.value
    }px) translateY(${appState.scrollY * appState.zoom.value}px) scale(${
      appState.zoom.value
    });
    width: ${originSize}px;
    height: ${originSize}px;
    transform-origin: left top;
  `
  );
  if (isTransform) return;
  console.log("开始渲染。。。", elements);
  const children = elements.map((element, index) => {
    return renderElementToSvg(element, renderConfig, appState);
  });
  svg.innerHTML = children.join('').replace(/\s+/g," ");
  console.log("渲染后。。。", children);
};
