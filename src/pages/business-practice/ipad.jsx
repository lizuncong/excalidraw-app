import React from "react";
import MarkDown from "@/components/markdown";
import doc from "@doc/实践/联想低端设备性能排查及优化.md";

function Index() {
  return <MarkDown src={doc} />;
}

export default Index;
