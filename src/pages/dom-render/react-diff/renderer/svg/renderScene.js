import { renderElementToSvg } from "./renderElement";
import { useState, useEffect } from "react";
import { getCanvasSize } from "@/util/export";
import ReactDOM from "react-dom/client";
export const SVG_NS = "http://www.w3.org/2000/svg";

const trimSpace = (str) => {
  // return str;
  return str.replace(/\s+/g, " ");
};

let setApp;
const App = ({ eles, config, state }) => {
  const [elements, setElements] = useState(eles);
  const [renderConfig, setRenderConfig] = useState(config);
  const [appState, setAppState] = useState(state);
  const [size, setSize] = useState({});
  useEffect(() => {
    setApp = (elements, renderConfig, appState, size) => {
      setElements(elements);
      setRenderConfig(renderConfig);
      setAppState(appState);
      setSize(size);
    };
  }, []);
  const children = elements.map((element, index) => {
    return renderElementToSvg(element, renderConfig, appState, size);
  });
  return (
    <svg
      width={size.width}
      height={size.height}
      style={{
        position: "absolute",
        left: `${size.minX}px`,
        top: `${size.minY}px`,
        background: "transparent",
      }}
      xmlns="http://www.w3.org/2000/svg"
      version="1.1"
    >
      {children}
    </svg>
  );
};
let root;
export const renderScene = ({
  elements,
  appState,
  scale,
  svg,
  renderConfig,
  isTransform,
}) => {
  if (!root) {
    root = ReactDOM.createRoot(svg);
    root.render(<App eles={elements} config={renderConfig} state={appState} />);
  }
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
  const [minX, minY, width, height] = getCanvasSize(elements, 10);
  setApp &&
    setApp(elements, renderConfig, appState, { minX, minY, width, height });
  // const start = Date.now();
  // const [minX, minY, width, height] = getCanvasSize(elements, 10);
  // console.log("耗时...", Date.now() - start, minX, minY, width, height);
  // const children = elements.map(function renderToSvg(element, index) {
  //   return renderElementToSvg(element, renderConfig, appState, { minX, minY });
  // });
  // svg.innerHTML = `
  // <svg
  //   width=${width}
  //   height=${height}
  //   style="position: absolute;left: ${minX}px;top: ${minY}px;background: transparent;"
  //   xmlns="http://www.w3.org/2000/svg"
  //   version="1.1"
  // >${trimSpace(children.join(""))}</svg>`;
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
