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
      // 貌似这种平移效果不是很好，无法满足无限画布的需求
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
      {
        label: <NavLink to="/advanced/scale">画布缩放</NavLink>,
        key: "/advanced/scale",
      },
      {
        label: <NavLink to="/advanced/gesture">移动端手势平移缩放</NavLink>,
        key: "/advanced/gesture",
      },
      {
        label: <NavLink to="/advanced/text">创建文本</NavLink>,
        key: "/advanced/text",
      },
    ],
  },
  {
    label: "canvas性能优化进阶",
    key: "canvas_performance",
    children: [
      {
        label: <NavLink to="/performance/base">基准</NavLink>,
        key: "/performance/base",
      },
      {
        label: (
          <NavLink to="/performance/transform">容器背景图片css 变换</NavLink>
        ),
        key: "/performance/transform",
      },
      {
        label: (
          <NavLink to="/performance/transform-img">
            图片 css transform 变换
          </NavLink>
        ),
        key: "/performance/transform-img",
      },
      {
        label: (
          <NavLink to="/performance/transform-img-hd">
            图片 css transform 变换-高清
          </NavLink>
        ),
        key: "/performance/transform-img-hd",
      },
      {
        label: (
          <NavLink to="/performance/offscreen-canvas">
            使用offscreen canvas全量绘制元素
          </NavLink>
        ),
        key: "/performance/offscreen-canvas",
      },
    ],
  },
  {
    label: "DOM 渲染方案",
    key: "dom_render",
    children: [
      {
        label: <NavLink to="/dom-render/base">React Diff方案(反向优化)</NavLink>,
        key: "/dom-render/base",
      },
      {
        label: <NavLink to="/dom-render/innerhtml">多SVG节点</NavLink>,
        key: "/dom-render/innerhtml",
      },
      {
        label: <NavLink to="/dom-render/single-svg">单SVG节点</NavLink>,
        key: "/dom-render/single-svg",
      },
      {
        label: <NavLink to="/dom-render/react-diff">React Diff</NavLink>,
        key: "/dom-render/react-diff",
      },
      {
        label: <NavLink to="/dom-render/cache-detect">缓存检测</NavLink>,
        key: "/dom-render/cache-detect",
      },
      {
        label: <NavLink to="/dom-render/svg-to-img">SVG转图片(反向优化，效果不是很理想)</NavLink>,
        key: "/dom-render/svg-to-img",
      },
      {
        label: <NavLink to="/dom-render/switch-render">切换渲染引擎</NavLink>,
        key: "/dom-render/switch-render",
      },
    ],
  },
];

export default MENUS;
