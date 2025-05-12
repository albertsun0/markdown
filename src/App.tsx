import MarkdownRender from "./components/Markdown";
import { useState } from "react";
import "./App.css";

function App() {
  const [markDown, setMarkDown] = useState("");

  return (
    <div className="flex flex-row w-screen h-screen">
      <div className="w-1/2">
        <textarea
          className="w-full h-full border-red-50"
          value={markDown}
          onChange={(e) => setMarkDown(e.target.value)}
        />
      </div>
      <div className="w-1/2">
        <MarkdownRender source={markDown} />
      </div>
    </div>
  );
}

export default App;
