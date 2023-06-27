import React from "react";
import MarkDown from "@/components/markdown";
import doc from "@doc/canvas2D渲染方案/12.web worker高频拥堵问题.md";

function Index() {
  return <MarkDown src={doc} />;
}

export default Index;
