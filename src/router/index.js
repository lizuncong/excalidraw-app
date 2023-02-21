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
    ],
  },
]);

export default router;
