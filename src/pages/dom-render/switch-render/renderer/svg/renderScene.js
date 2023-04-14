import { renderElementToSvg } from "./renderElement";
import { getCanvasSize } from "@/util/export";
export const SVG_NS = "http://www.w3.org/2000/svg";

const trimSpace = (str) => {
  // return str;
  return str.replace(/\s+/g, " ");
};

let svg;
let timerId;
let _minX;
let _minY;
export const renderScene = ({
  elements,
  appState,
  scale,
  svg: svgContainer,
  renderConfig,
  isTransform,
}) => {
  const { accelerate } = renderConfig;
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
    ${accelerate ? "will-change: transform;" : ""}
  `;
  svgContainer.setAttribute("style", trimSpace(constainerStyle));
  if (isTransform) {
    if (timerId) {
      clearTimeout(timerId);
    }
    // if (accelerate) {
    //   timerId = setTimeout(() => {
    //     console.log('ddd')
    //     svgContainer.style.willChange = "";
    //     setTimeout(() => {
    //       svgContainer.style.willChange = "transform";
    //     }, 0);
    //   }, 1000);
    // }
    return;
  }
  const [minX, minY, width, height] = getCanvasSize(elements, 10);
  if (!svg) {
    svg = document.createElementNS(SVG_NS, "svg");
    svg.style.position = "absolute";
    svg.style.background = "transparent";
    svg.setAttribute("xmlns", "http://www.w3.org/2000/svg");
    svg.setAttribute("version", "1.1");
    svgContainer.appendChild(svg);
  }
  svg.setAttribute("width", width);
  svg.setAttribute("height", height);
  svg.style.left = `${minX}px`;
  svg.style.top = `${minY}px`;
  elements.map(function renderToSvg(element, index) {
    return renderElementToSvg(element, renderConfig, appState, {
      minX,
      minY,
      svg,
      originChange: _minX !== minX || _minY !== minY
    });
  });
  _minX = minX;
  _minY = minY;
};

window.__svg2img = (svg) => {
  const xml = new XMLSerializer().serializeToString(svg);
  const svg64 = btoa(xml); //for utf8: btoa(unescape(encodeURIComponent(xml)))
  const b64start = "data:image/svg+xml;base64,";
  const image64 = b64start + svg64;
  const img = document.createElement("img");
  img.src = image64;
  document.body.appendChild(img);
  return image64;
};
