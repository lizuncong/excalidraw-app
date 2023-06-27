import React from "react";
import MarkDown from "@/components/markdown";
import doc from "@doc/canvas2D渲染方案/2.canvas内存开销.md";

function Index() {
  return <MarkDown src={doc} />;
}

export default Index;
