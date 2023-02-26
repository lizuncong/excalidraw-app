import { NavLink } from "react-router-dom";

const MENUS = [
  {
    label: "canvas基础知识",
    key: "canvas_base",
    children: [
      {
        label: <NavLink to="/base/shape">canvas图形绘制基础</NavLink>,
        key: "/base/shape",
      },
      {
        label: <NavLink to="/base/style">canvas线宽</NavLink>,
        key: "/base/style",
      },
      {
        label: <NavLink to="/base/size">canvas尺寸及分辨率矫正</NavLink>,
        key: "/base/size",
      },
      {
        label: <NavLink to="/base/maxsize">canvas最大尺寸限制</NavLink>,
        key: "/base/maxsize",
      },
    ],
  },
  {
    label: "自由书写",
    key: "free-draw",
    children: [
      {
        label: <NavLink to="/free-draw/excalidraw">开源的excalidraw</NavLink>,
        key: "/free-draw/excalidraw",
      },
      {
        label: <NavLink to="/free-draw/base">书写基础(没有任何优化)</NavLink>,
        key: "/free-draw/base",
      },
      {
        label: <NavLink to="/free-draw/dilution">优化一：点稀释</NavLink>,
        key: "/free-draw/dilution",
      },
      {
        label: <NavLink to="/free-draw/draw-image">优化二：离屏渲染</NavLink>,
        key: "/free-draw/draw-image",
      },
      {
        label: (
          <NavLink to="/free-draw/multiple-canvas">优化三：多层画布</NavLink>
        ),
        key: "/free-draw/multiple-canvas",
      },
      // {
      //   label: (
      //     <NavLink to="/free-draw/dynamic-layer">优化四：动态分层</NavLink>
      //   ),
      //   key: "/free-draw/dynamic-layer",
      // },
    ],
  },
  {
    label: "canvas进阶",
    key: "canvas_advanced",
    children: [
      {
        label: <NavLink to="/advanced/infinite">canvas无限画布</NavLink>,
        key: "/advanced/infinite",
      },
    ],
  },
];

export default MENUS;
