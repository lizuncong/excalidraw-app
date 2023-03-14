import React from "react";
import { createHashRouter } from "react-router-dom";
import App from "../App";

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
    ],
  },
]);

export default router;
