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
  let text = props.children[0];
  let oneline = text.indexOf("\n") <= 1;
  if (oneline) {
    return <code className="md-code">{text}</code>;
  } else
    return (
      <SyntaxHighlighter
        className={`md-code ${props.className}`}
        style={theme == "light" ? github : darcula}
      >
        {text}
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
  let text = children[0].props.children[0];
  let oneline = text.indexOf("\n") <= 1;
  return (
    <pre className={oneline ? "" : "blog-pre"}>
      {!oneline && <CodeCopyBtn text={text} />}
      {children}
    </pre>
  );
}

export default RenderMarkdown;
