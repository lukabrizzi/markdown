import React, { useState, useEffect } from "react";
import ReactMarkdown from "react-markdown";
import RenderButton from "./RenderButton.tsx";
import "github-markdown-css/github-markdown.css";

const MarkdownEditor = () => {
  const [markdownText, setMarkdownText] = useState<string>("");

  useEffect(() => {
    const savedMarkdown = localStorage.getItem("markdownText");
    if (savedMarkdown) {
      setMarkdownText(savedMarkdown);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("markdownText", markdownText);
  }, [markdownText]);

  const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const text = e.target.value;
    setMarkdownText(text);
  };

  return (
    <div className="App flex flex-col items-center">
      <div className="flex w-full max-w-6xl p-20 gap-4">
        <textarea
          className="flex-1 h-[400px] p-8 border border-gray-300 rounded-xl resize-none"
          value={markdownText}
          onChange={handleChange}
          placeholder="Type your Markdown here..."
        />
        <div
          style={{ backgroundColor: "white", color: "black" }}
          className="flex-1 h-[400px] p-8 border border-gray-300 rounded-xl overflow-auto markdown-body"
        >
          <ReactMarkdown>{markdownText}</ReactMarkdown>
        </div>
      </div>
      <RenderButton
        setMarkdownText={setMarkdownText}
        markdownText={markdownText}
      />
    </div>
  );
};

export default MarkdownEditor;
