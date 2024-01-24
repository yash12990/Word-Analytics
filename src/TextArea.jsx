import React, { useState } from "react";
import Warning from "./Warning";

export default function TextArea({ text, setText }) {
  const [warningText, setWarningText] = useState("");
  
  const handleChange = (event) => {
    let newText = event.target.value;

    if (newText.includes("<script>")) {
      setWarningText("Warning!! <script> not allowed");
      newText = newText.replace("<script>", "");
    } 
    else if (newText.includes("@")) {
      setWarningText('Warning!! @ not allowed');
      newText = newText.replace("@", "");
    }
    else{
      setWarningText("");
    }

    setText(newText);
  };

  return (
    <div className="textarea">
      <textarea
        spellCheck= "false"
        placeholder="Enter text..."
        value={text}
        onChange={handleChange}
      />
      {
        warningText ? <Warning warningText={warningText}/> : null
      }
    </div>
  );
}
