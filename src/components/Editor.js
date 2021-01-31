import React from "react";
import "codemirror/lib/codemirror.css";
import "codemirror/theme/material.css";
import "codemirror/mode/xml/xml";
import "codemirror/mode/javascript/javascript";
import "codemirror/mode/css/css";
import { Controlled as ControlledEditor } from "react-codemirror2";

export default function Editor({ displayName, value, language, onChange }) {
  function handleChange(editor, data, value) {
    onChange(value);
  }

  return (
    <div className="editor-container">
      <div className="editor-header">
        <div className="name">{displayName}</div>
      </div>
      <ControlledEditor
        className="code-mirror-wrapper"
        onBeforeChange={handleChange}
        value={value}
        options={{
          lineWrapping: true,
          lint: true,
          mode: language,
          lineNumbers: true,
          theme: "material",
        }}
      />
    </div>
  );
}
