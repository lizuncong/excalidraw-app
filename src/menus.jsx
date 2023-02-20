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
    label: "canvas进阶",
    key: "canvas_advanced",
    children: [
      {
        label: <NavLink to="/advanced/infinite">canvas无限画布</NavLink>,
        key: "/advanced/infinite",
      },
      {
        label: <NavLink to="/advanced/free-draw">自由绘制</NavLink>,
        key: "/advanced/free-draw",
      },
    ],
  },
];

export default MENUS;
