import { useEffect, useRef, useState } from "react";
import BaseNode from "./BaseNode";

export default function TextNode() {
  const [text, setText] = useState("");
  const textareaRef = useRef(null);

  useEffect(() => {
    if (textareaRef.current) {
      textareaRef.current.style.height = "auto";
      textareaRef.current.style.height =
        textareaRef.current.scrollHeight + "px";
    }
  }, [text]);


  const regex = /{{\s*([a-zA-Z_$][\w$]*)\s*}}/g;
  const variables = Array.from(text.matchAll(regex)).map((m) => m[1]);


  const inputHandles = ["input", ...variables];

  return (
    <BaseNode title="Text" inputs={inputHandles} outputs={["output"]}>
      <textarea
         ref={textareaRef}
         value={text}
        onChange={(e) => setText(e.target.value)}
         placeholder="Type text with {{variables}}"
        style={{
        width: "100%",
        border: "1px solid #d1d5db",
        borderRadius: "8px",
      padding: "10px",
      fontSize: "14px",
      outline: "none",
      resize: "none",
  }}
/>

    </BaseNode>
  );
}
