import React from "react";
import MarkDown from "@/components/markdown";
import doc from "@doc/实践/书写笔迹增加，导致安卓内存溢出问题排查及优化.md";

function Index() {
  return <MarkDown src={doc} />;
}

export default Index;
