import React from "react";
import MarkDown from "@/components/markdown";
import doc from "@doc/canvas2D渲染方案/6.性能优化之点稀释.md";

function Index() {
  return <MarkDown src={doc} />;
}

export default Index;
