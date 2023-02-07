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

const InfiniteCavnas = React.lazy(() =>
  import(/* webpackChunkName: "InfiniteCavnas" */ "@/pages/infinite-canvas")
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
        path: "/advanced/infinite",
        element: (
          <React.Suspense fallback={<div>loading...</div>}>
            <InfiniteCavnas />
          </React.Suspense>
        ),
      },
    ],
  },
]);

export default router;
