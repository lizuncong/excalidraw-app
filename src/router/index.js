import React from "react";
import { createHashRouter } from "react-router-dom";
import App from "../App";

const PracticeAndroid = React.lazy(() =>
  import(
    /* webpackChunkName: "PracticeAndroid" */ "@/pages/business-practice/android"
  )
);
const PracticeIpad = React.lazy(() =>
  import(
    /* webpackChunkName: "PracticeIpad" */ "@/pages/business-practice/ipad"
  )
);
const PracticeMemory= React.lazy(() =>
  import(
    /* webpackChunkName: "PracticeMemory" */ "@/pages/business-practice/memory"
  )
);
const DocPerf = React.lazy(() =>
  import(/* webpackChunkName: "DocPerf" */ "@/pages/docs/perf")
);
const DocMemory = React.lazy(() =>
  import(/* webpackChunkName: "DocMemory" */ "@/pages/docs/memory")
);
const DocScale = React.lazy(() =>
  import(/* webpackChunkName: "DocScale" */ "@/pages/docs/scale")
);
const DocText = React.lazy(() =>
  import(/* webpackChunkName: "DocText" */ "@/pages/docs/text")
);
const DocTranslate = React.lazy(() =>
  import(/* webpackChunkName: "DocTranslate" */ "@/pages/docs/translate")
);
const DocDot = React.lazy(() =>
  import(/* webpackChunkName: "DocDot" */ "@/pages/docs/dot")
);
const DocOffscreen = React.lazy(() =>
  import(/* webpackChunkName: "DocOffscreen" */ "@/pages/docs/offscreen")
);
const DocMulti = React.lazy(() =>
  import(/* webpackChunkName: "DocMulti" */ "@/pages/docs/multi")
);
const DocVisible = React.lazy(() =>
  import(/* webpackChunkName: "DocVisible" */ "@/pages/docs/visible")
);
const DocBg = React.lazy(() =>
  import(/* webpackChunkName: "DocBg" */ "@/pages/docs/bg")
);
const DocImg = React.lazy(() =>
  import(/* webpackChunkName: "DocImg" */ "@/pages/docs/img")
);
const DocWorker = React.lazy(() =>
  import(/* webpackChunkName: "DocWorker" */ "@/pages/docs/worker")
);
const DocOff = React.lazy(() =>
  import(/* webpackChunkName: "DocOff" */ "@/pages/docs/off")
);
const DocEnd = React.lazy(() =>
  import(/* webpackChunkName: "DocEnd" */ "@/pages/docs/end")
);
const Shapes = React.lazy(() =>
  import(/* webpackChunkName: "Shape" */ "@/pages/shapes")
);

const Style = React.lazy(() =>
  import(/* webpackChunkName: "Style" */ "@/pages/style")
);

const Canvas = React.lazy(() =>
  import(/* webpackChunkName: "Canvas" */ "@/pages/canvas")
);

const Size = React.lazy(() =>
  import(/* webpackChunkName: "Size" */ "@/pages/size")
);

const MaxSize = React.lazy(() =>
  import(/* webpackChunkName: "MaxSize" */ "@/pages/max-size")
);

const InfiniteCavnas = React.lazy(() =>
  import(/* webpackChunkName: "InfiniteCavnas" */ "@/pages/infinite-canvas")
);

const FreeDraw = React.lazy(() =>
  import(/* webpackChunkName: "FreeDraw" */ "@/pages/free-draw/base")
);
const Dilution = React.lazy(() =>
  import(/* webpackChunkName: "Dilution" */ "@/pages/free-draw/dilution")
);

const DrawImage = React.lazy(() =>
  import(/* webpackChunkName: "DrawImage" */ "@/pages/free-draw/draw-image")
);
const Excalidraw = React.lazy(() =>
  import(/* webpackChunkName: "Excalidraw" */ "@/pages/free-draw/excalidraw")
);
const MultipleCanvas = React.lazy(() =>
  import(
    /* webpackChunkName: "MultipleCanvas" */ "@/pages/free-draw/multiple-layered"
  )
);
const DynamicLayer = React.lazy(() =>
  import(
    /* webpackChunkName: "DynamicLayer" */ "@/pages/free-draw/dynamic-layer"
  )
);
const Performance = React.lazy(() =>
  import(/* webpackChunkName: "Performance" */ "@/pages/performance/base")
);
const Transform = React.lazy(() =>
  import(/* webpackChunkName: "Transform" */ "@/pages/performance/transform")
);
const TransformImg = React.lazy(() =>
  import(
    /* webpackChunkName: "TransformImg" */ "@/pages/performance/transform-img"
  )
);
const TransformImgHd = React.lazy(() =>
  import(
    /* webpackChunkName: "TransformImgHd" */ "@/pages/performance/transform-img-hd"
  )
);
const OffscreenCanvas = React.lazy(() =>
  import(
    /* webpackChunkName: "OffscreenCanvas" */ "@/pages/performance/offscreen-canvas"
  )
);
const CreateText = React.lazy(() =>
  import(/* webpackChunkName: "CreateText" */ "@/pages/create-text")
);
const Scale = React.lazy(() =>
  import(/* webpackChunkName: "Scale" */ "@/pages/scale")
);
const Gesture = React.lazy(() =>
  import(/* webpackChunkName: "Gesture" */ "@/pages/gesture")
);

const DomRenderBase = React.lazy(() =>
  import(/* webpackChunkName: "DomRenderBase" */ "@/pages/dom-render/base")
);
const InnerHtml = React.lazy(() =>
  import(/* webpackChunkName: "InnerHtml" */ "@/pages/dom-render/innerhtml")
);
const SingleSVG = React.lazy(() =>
  import(/* webpackChunkName: "SingleSVG" */ "@/pages/dom-render/single-svg")
);
const ReactDiff = React.lazy(() =>
  import(/* webpackChunkName: "ReactDiff" */ "@/pages/dom-render/react-diff")
);
const CacheDiff = React.lazy(() =>
  import(/* webpackChunkName: "CacheDiff" */ "@/pages/dom-render/cache-detect")
);

const SvgToImg = React.lazy(() =>
  import(/* webpackChunkName: "SvgToImg" */ "@/pages/dom-render/svg-to-img")
);

const SwitchRender = React.lazy(() =>
  import(
    /* webpackChunkName: "SwitchRender" */ "@/pages/dom-render/switch-render"
  )
);

const UndoRedo = React.lazy(() =>
  import(/* webpackChunkName: "UndoRedo" */ "@/pages/undo-redo")
);

const router = createHashRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: (
          <React.Suspense fallback={<div>loading...</div>}>
            <Canvas />
          </React.Suspense>
        ),
      },
      {
        path: "/base/shape",
        element: (
          <React.Suspense fallback={<div>loading...</div>}>
            <Shapes />
          </React.Suspense>
        ),
      },
      {
        path: "/base/style",
        element: (
          <React.Suspense fallback={<div>loading...</div>}>
            <Style />
          </React.Suspense>
        ),
      },
      {
        path: "/base/size",
        element: (
          <React.Suspense fallback={<div>loading...</div>}>
            <Size />
          </React.Suspense>
        ),
      },
      {
        path: "/base/maxsize",
        element: (
          <React.Suspense fallback={<div>loading...</div>}>
            <MaxSize />
          </React.Suspense>
        ),
      },
      {
        path: "/advanced/infinite",
        element: (
          <React.Suspense fallback={<div>loading...</div>}>
            <InfiniteCavnas />
          </React.Suspense>
        ),
      },
      {
        path: "/advanced/scale",
        element: (
          <React.Suspense fallback={<div>loading...</div>}>
            <Scale />
          </React.Suspense>
        ),
      },
      {
        path: "/advanced/gesture",
        element: (
          <React.Suspense fallback={<div>loading...</div>}>
            <Gesture />
          </React.Suspense>
        ),
      },
      {
        path: "/advanced/text",
        element: (
          <React.Suspense fallback={<div>loading...</div>}>
            <CreateText />
          </React.Suspense>
        ),
      },
      {
        path: "/performance/transform",
        element: (
          <React.Suspense fallback={<div>loading...</div>}>
            <Transform />
          </React.Suspense>
        ),
      },
      {
        path: "/performance/transform-img",
        element: (
          <React.Suspense fallback={<div>loading...</div>}>
            <TransformImg />
          </React.Suspense>
        ),
      },
      {
        path: "/performance/transform-img-hd",
        element: (
          <React.Suspense fallback={<div>loading...</div>}>
            <TransformImgHd />
          </React.Suspense>
        ),
      },
      {
        path: "/performance/offscreen-canvas",
        element: (
          <React.Suspense fallback={<div>loading...</div>}>
            <OffscreenCanvas />
          </React.Suspense>
        ),
      },
      {
        path: "/performance/base",
        element: (
          <React.Suspense fallback={<div>loading...</div>}>
            <Performance />
          </React.Suspense>
        ),
      },
      {
        path: "/free-draw/excalidraw",
        element: (
          <React.Suspense fallback={<div>loading...</div>}>
            <Excalidraw />
          </React.Suspense>
        ),
      },
      {
        path: "/free-draw/base",
        element: (
          <React.Suspense fallback={<div>loading...</div>}>
            <FreeDraw />
          </React.Suspense>
        ),
      },
      {
        path: "/free-draw/dilution",
        element: (
          <React.Suspense fallback={<div>loading...</div>}>
            <Dilution />
          </React.Suspense>
        ),
      },
      {
        path: "/free-draw/draw-image",
        element: (
          <React.Suspense fallback={<div>loading...</div>}>
            <DrawImage />
          </React.Suspense>
        ),
      },
      {
        path: "/free-draw/multiple-canvas",
        element: (
          <React.Suspense fallback={<div>loading...</div>}>
            <MultipleCanvas />
          </React.Suspense>
        ),
      },
      {
        path: "/free-draw/dynamic-layer",
        element: (
          <React.Suspense fallback={<div>loading...</div>}>
            <DynamicLayer />
          </React.Suspense>
        ),
      },
      {
        path: "/dom-render/base",
        element: (
          <React.Suspense fallback={<div>loading...</div>}>
            <DomRenderBase />
          </React.Suspense>
        ),
      },
      {
        path: "/dom-render/innerhtml",
        element: (
          <React.Suspense fallback={<div>loading...</div>}>
            <InnerHtml />
          </React.Suspense>
        ),
      },
      {
        path: "/dom-render/single-svg",
        element: (
          <React.Suspense fallback={<div>loading...</div>}>
            <SingleSVG />
          </React.Suspense>
        ),
      },
      {
        path: "/dom-render/react-diff",
        element: (
          <React.Suspense fallback={<div>loading...</div>}>
            <ReactDiff />
          </React.Suspense>
        ),
      },
      {
        path: "/dom-render/cache-detect",
        element: (
          <React.Suspense fallback={<div>loading...</div>}>
            <CacheDiff />
          </React.Suspense>
        ),
      },
      {
        path: "/dom-render/svg-to-img",
        element: (
          <React.Suspense fallback={<div>loading...</div>}>
            <SvgToImg />
          </React.Suspense>
        ),
      },
      {
        path: "/dom-render/switch-render",
        element: (
          <React.Suspense fallback={<div>loading...</div>}>
            <SwitchRender />
          </React.Suspense>
        ),
      },
      {
        path: "/undo-redo",
        element: (
          <React.Suspense fallback={<div>loading...</div>}>
            <UndoRedo />
          </React.Suspense>
        ),
      },
      {
        path: "/doc/perf",
        element: (
          <React.Suspense fallback={<div>loading...</div>}>
            <DocPerf />
          </React.Suspense>
        ),
      },
      {
        path: "/doc/memory",
        element: (
          <React.Suspense fallback={<div>loading...</div>}>
            <DocMemory />
          </React.Suspense>
        ),
      },
      {
        path: "/doc/scale",
        element: (
          <React.Suspense fallback={<div>loading...</div>}>
            <DocScale />
          </React.Suspense>
        ),
      },
      {
        path: "/doc/text",
        element: (
          <React.Suspense fallback={<div>loading...</div>}>
            <DocText />
          </React.Suspense>
        ),
      },
      {
        path: "/doc/translate",
        element: (
          <React.Suspense fallback={<div>loading...</div>}>
            <DocTranslate />
          </React.Suspense>
        ),
      },
      {
        path: "/doc/dot",
        element: (
          <React.Suspense fallback={<div>loading...</div>}>
            <DocDot />
          </React.Suspense>
        ),
      },
      {
        path: "/doc/offscreen",
        element: (
          <React.Suspense fallback={<div>loading...</div>}>
            <DocOffscreen />
          </React.Suspense>
        ),
      },
      {
        path: "/doc/multi",
        element: (
          <React.Suspense fallback={<div>loading...</div>}>
            <DocMulti />
          </React.Suspense>
        ),
      },
      {
        path: "/doc/visible",
        element: (
          <React.Suspense fallback={<div>loading...</div>}>
            <DocVisible />
          </React.Suspense>
        ),
      },
      {
        path: "/doc/bg",
        element: (
          <React.Suspense fallback={<div>loading...</div>}>
            <DocBg />
          </React.Suspense>
        ),
      },
      {
        path: "/doc/img",
        element: (
          <React.Suspense fallback={<div>loading...</div>}>
            <DocImg />
          </React.Suspense>
        ),
      },
      {
        path: "/doc/worker",
        element: (
          <React.Suspense fallback={<div>loading...</div>}>
            <DocWorker />
          </React.Suspense>
        ),
      },
      {
        path: "/doc/off",
        element: (
          <React.Suspense fallback={<div>loading...</div>}>
            <DocOff />
          </React.Suspense>
        ),
      },
      {
        path: "/doc/end",
        element: (
          <React.Suspense fallback={<div>loading...</div>}>
            <DocEnd />
          </React.Suspense>
        ),
      },
      {
        path: "/practice/ipad",
        element: (
          <React.Suspense fallback={<div>loading...</div>}>
            <PracticeIpad />
          </React.Suspense>
        ),
      },
      {
        path: "/practice/android",
        element: (
          <React.Suspense fallback={<div>loading...</div>}>
            <PracticeAndroid />
          </React.Suspense>
        ),
      },
      {
        path: "/practice/memory",
        element: (
          <React.Suspense fallback={<div>loading...</div>}>
            <PracticeMemory />
          </React.Suspense>
        ),
      },
    ],
  },
]);

export default router;
