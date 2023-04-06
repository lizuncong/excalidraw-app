import { renderElementToSvg } from "./renderElement";
import { getCanvasSize } from "@/util/export";
export const SVG_NS = "http://www.w3.org/2000/svg";

const trimSpace = (str) => {
  // return str;
  return str.replace(/\s+/g, " ");
};

export const renderScene = ({
  elements,
  appState,
  scale,
  svg,
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
  svg.setAttribute("style", trimSpace(constainerStyle));
  if (isTransform) return;
  const start = Date.now();
  const [minX, minY, width, height] = getCanvasSize(elements, 10);
  console.log("耗时...", Date.now() - start, minX, minY, width, height);
  const children = elements.map(function renderToSvg(element, index) {
    return renderElementToSvg(element, renderConfig, appState, { minX, minY });
  });
  svg.innerHTML = `
  <svg 
    width=${width} 
    height=${height} 
    style="position: absolute;left: ${minX}px;top: ${minY}px;background: transparent;"
    xmlns="http://www.w3.org/2000/svg"
    version="1.1"
  >${trimSpace(children.join(""))}</svg>`;
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
