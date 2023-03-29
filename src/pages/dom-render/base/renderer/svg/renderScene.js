import { renderElementToSvg } from "./renderElement";
import ReactDOM from "react-dom/client";
export const SVG_NS = "http://www.w3.org/2000/svg";
// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(<RouterProvider router={router} />);
let root;
export const renderScene = ({
  elements,
  appState,
  scale,
  svg,
  renderConfig,
}) => {
  // if (!svgRoot) {
  //   svgRoot = document.createElementNS(SVG_NS, "svg");
  //   svgRoot.setAttribute("version", "1.1");
  //   svgRoot.setAttribute("xmlns", SVG_NS);
  //   const { canvasHeight, canvasWidth } = appState;
  //   svgRoot.setAttribute("viewBox", `0 0 ${canvasWidth} ${canvasHeight}`);
  //   svgRoot.setAttribute("width", `${canvasWidth}`);
  //   svgRoot.setAttribute("height", `${canvasHeight}`);
  //   svgRoot.setAttribute("style", `background: rgba(0,0,0,0.05)`);

  //   canvas.parentNode.insertBefore(svgRoot, canvas);
  // }
  if(!root){
    root = ReactDOM.createRoot(svg)
  }
  svg.setAttribute('style', `
    transform: translateX(${appState.scrollX * appState.zoom.value}px) translateY(${appState.scrollY * appState.zoom.value}px) scale(${appState.zoom.value})
  `)
  console.log('开始渲染。。。', elements)
  const children = elements.map((element, index) => {
    return renderElementToSvg(element, renderConfig, appState);
  });
  console.log('渲染后。。。', children)
  root.render(children)
};
