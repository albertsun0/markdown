import ReactMarkdown from "react-markdown";
import { MathJaxContext, MathJax } from "better-react-mathjax";

const config = {
  loader: { load: ["[tex]/html"] },
  tex: {
    packages: { "[+]": ["html"] },
    inlineMath: [["$", "$"]],
    displayMath: [["$$", "$$"]],
  },
};

export default function MarkdownRender({ source }: { source: string }) {
  return (
    <MathJaxContext config={config}>
      <div className="text-left">
        <MathJax dynamic hideUntilTypeset="every" inline={true}>
          <ReactMarkdown>{source}</ReactMarkdown>
        </MathJax>
      </div>
    </MathJaxContext>
  );
}
