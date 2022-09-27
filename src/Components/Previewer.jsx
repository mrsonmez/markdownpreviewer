import { useState } from "react";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import rehypeRaw from "rehype-raw";
function Previewer() {
  const [text, setText] = useState("");
  return (
    <div className="container">
      <div>
        <textarea
          name="text"
          id=""
          onChange={(e) => setText(e.target.value)}
          cols="30"
          rows="12"
          placeholder="text"
          title="Input Text"
        ></textarea>
      </div>
      <div className="markdown">
        <ReactMarkdown
          remarkPlugins={[remarkGfm]}
          rehypePlugins={[rehypeRaw]}
          children={text}
        ></ReactMarkdown>
      </div>
    </div>
  );
}

export default Previewer;
