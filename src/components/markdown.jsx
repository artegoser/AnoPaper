/*
 Copyright (c) 2023 artegoser (Artemy Egorov)

 This program is free software: you can redistribute it and/or modify
 it under the terms of the GNU General Public License as published by
 the Free Software Foundation, either version 3 of the License, or
 (at your option) any later version.

 This program is distributed in the hope that it will be useful,
 but WITHOUT ANY WARRANTY; without even the implied warranty of
 MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the
 GNU General Public License for more details.

 You should have received a copy of the GNU General Public License
 along with this program. If not, see <https://www.gnu.org/licenses/>.
 */

import rehypeMathjax from "rehype-mathjax";
import remarkMath from "remark-math";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";

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
      remarkPlugins={[remarkMath, remarkGfm]}
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
