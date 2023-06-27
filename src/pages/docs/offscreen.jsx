import React from "react";
import MarkDown from "@/components/markdown";
import doc from "@doc/canvas2D渲染方案/7.性能优化之离屏渲染及缓存.md";

function Index() {
  return <MarkDown src={doc} />;
}

export default Index;
