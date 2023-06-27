import React from "react";
import MarkDown from "@/components/markdown";
import doc from "@doc/canvas2D渲染方案/13.性能优化之基于offscreencanvas+web worker全量绘制元素.md";

function Index() {
  return <MarkDown src={doc} />;
}

export default Index;
