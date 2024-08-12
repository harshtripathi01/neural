// components/HtmlEditor.js
import React, { useState } from "react";
import dynamic from "next/dynamic";
import "react-quill/dist/quill.snow.css";
import "./HtmlEditor.css";
// Import the Quill styles

// Dynamically import Quill to avoid SSR issues
const ReactQuill = dynamic(() => import("react-quill"), { ssr: false });

const HtmlEditor = () => {
  const [editorHtml, setEditorHtml] = useState("");

  const handleChange = (html) => {
    setEditorHtml(html);
  };

  return (
    <div className="">
      <ReactQuill
        value={editorHtml}
        onChange={handleChange}
        modules={HtmlEditor.modules}
        formats={HtmlEditor.formats}
        placeholder="Write something..."
        className="custom-quill" // Add a custom class for styling
      />
    </div>
  );
};

// Quill modules to be included in the editor
HtmlEditor.modules = {
  toolbar: [
    [{ header: [1, 2, false] }],
    ["bold", "italic", "underline"],
    ["link", "image"],
    ["clean"], // Remove formatting button
  ],
};

// Quill formats to be included in the editor
HtmlEditor.formats = ["header", "bold", "italic", "underline", "link", "image"];

export default HtmlEditor;
