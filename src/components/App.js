import React, { useState, useEffect } from "react";
import "./App.css";
import Editor from "./Editor";

function App() {
  const [html, setHtml] = useState(
    "<h1>Nosił wilk razy kilka, ponieśli i wilka.</h1>"
  );
  const [css, setCss] = useState(
    "@import url('https://fonts.googleapis.com/css2?family=Architects+Daughter&display=swap'); h1 { color: whitesmoke; font-family: 'Architects Daughter', cursive; padding: 20px; }"
  );
  const [js, setJs] = useState(
    "document.querySelector('body').style.background = '#144e68';"
  );
  const [srcDoc, setSrcDoc] = useState("");

  useEffect(() => {
    const timeout = setTimeout(() => {
      setSrcDoc(`
      <html>
      <body>
      ${html}
      </body>
      <style>${css}</style>
      <script>${js}</script>
    </html>
      `);
    }, 250);

    return () => clearTimeout(timeout);
  }, [html, css, js]);

  return (
    <div className="App">
      <div className="pane top-pane">
        <Editor
          displayName="HTML"
          language="xml"
          value={html}
          onChange={setHtml}
        />
        <Editor
          displayName="CSS"
          language="css"
          value={css}
          onChange={setCss}
        />
        <Editor
          displayName="JS"
          language="javascript"
          value={js}
          onChange={setJs}
        />
      </div>
      <div className="spacer"></div>
      <div className="pane bottom-pane">
        <iframe
          srcDoc={srcDoc}
          title="output"
          sandbox="allow-scripts"
          frameBorder="0"
          width="100%"
          height="100%"
        />
      </div>
    </div>
  );
}

export default App;
