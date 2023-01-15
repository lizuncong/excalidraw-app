import React, { useRef, useState, useEffect } from "react";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import rehypeRaw from "rehype-raw";
import { tomorrow } from "react-syntax-highlighter/dist/esm/styles/prism";
import "github-markdown-css";

import './index.less'


import shape from "../../../doc/canvas图形绘制基础.md";

function Shapes() {
  const [mdText, setMdText] = useState("");
  useEffect(() => {
    fetch(shape)
      .then((response) => response.text())
      .then((text) => {
        setMdText(text);
      });
  }, []);
  return (
    <div className="markdown-body">
      <ReactMarkdown
        children={mdText}
        rehypePlugins={[rehypeRaw]}
        remarkPlugins={[remarkGfm]}
        // components={{
        //   code({ node, inline, className, children, ...props }) {
        //     console.log("clasname...", className);
        //     const match = /language-(\w+)/.exec(className || "");
        //     return !inline && match ? (
        //       <SyntaxHighlighter
        //         children={String(children).replace(/\n$/, "")}
        //         style={tomorrow}
        //         language={match[1]}
        //         PreTag="div"
        //         {...props}
        //       />
        //     ) : (
        //       <code className={className} {...props}>
        //         {children}
        //       </code>
        //     );
        //   },
        // }}
      />
    </div>
  );
}

export default Shapes;
