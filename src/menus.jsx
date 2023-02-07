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
        label: <NavLink to="/base/size">彻底搞懂canvas尺寸</NavLink>,
        key: "/base/size",
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
    ],
  },
];

export default MENUS;
