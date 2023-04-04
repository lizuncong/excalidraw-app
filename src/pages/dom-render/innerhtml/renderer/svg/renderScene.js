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
  const constainerStyle = `
    transform: translateX(${
      appState.scrollX * appState.zoom.value
    }px) translateY(${appState.scrollY * appState.zoom.value}px) scale(${
      appState.zoom.value
    });
    width: ${originSize}px;
    height: ${originSize}px;
    transform-origin: left top;
  `
  svg.setAttribute(
    "style",
    trimSpace(constainerStyle)
  );
  if (isTransform) return;
  const children = elements.map((element, index) => {
    return renderElementToSvg(element, renderConfig, appState);
  });
  svg.innerHTML = trimSpace(children.join(''));
};
