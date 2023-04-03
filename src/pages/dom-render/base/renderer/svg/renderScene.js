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
  if(!root){
    root = ReactDOM.createRoot(svg)
  }
  const originSize = 30;
  svg.setAttribute('style', `
    transform: translateX(${appState.scrollX * appState.zoom.value}px) translateY(${appState.scrollY * appState.zoom.value}px) scale(${appState.zoom.value});
    width: ${originSize}px;
    height: ${originSize}px;
    transform-origin: left top;
  `)
  console.log('开始渲染。。。', elements)
  const children = elements.map((element, index) => {
    return renderElementToSvg(element, renderConfig, appState);
  });
  console.log('渲染后。。。', children)
  root.render(children)
};
