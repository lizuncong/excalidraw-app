import React from "react";
import MarkDown from "@/components/markdown";
import doc from "@doc/canvas2D渲染方案/10.性能优化之基于容器背景的平移缩放.md";

function Index() {
  return <MarkDown src={doc} />;
}

export default Index;
