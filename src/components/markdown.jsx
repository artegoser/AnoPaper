import rehypeMathjax from "rehype-mathjax";
import remarkMath from "remark-math";
import ReactMarkdown from "react-markdown";

function RenderMarkdown(props) {
  return (
    <ReactMarkdown
      children={props.children}
      remarkPlugins={[remarkMath]}
      rehypePlugins={[rehypeMathjax]}
    />
  );
}

export default RenderMarkdown;
