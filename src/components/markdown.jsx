import rehypeMathjax from "rehype-mathjax";
import remarkMath from "remark-math";
import ReactMarkdown from "react-markdown";

import SyntaxHighlighter from "react-syntax-highlighter";
import { darcula, github } from "react-syntax-highlighter/dist/esm/styles/hljs";

import { CodeCopyBtn } from "./copytocb";

let theme = window.matchMedia("(prefers-color-scheme: dark)").matches
  ? "dark"
  : "light";

function CodeBlock(props) {
  return (
    <SyntaxHighlighter
      className={`md-code ${props.className}`}
      style={theme == "light" ? github : darcula}
    >
      {props.children[0]}
    </SyntaxHighlighter>
  );
}

function RenderMarkdown(props) {
  return (
    <ReactMarkdown
      children={props.children}
      remarkPlugins={[remarkMath]}
      rehypePlugins={[rehypeMathjax]}
      components={{
        code: CodeBlock,
        pre: Pre,
      }}
    />
  );
}

function Pre({ children }) {
  return (
    <pre className="blog-pre">
      <CodeCopyBtn>{children}</CodeCopyBtn>
      {children}
    </pre>
  );
}

export default RenderMarkdown;
