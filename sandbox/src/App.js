import './App.css';
import AceEditor from "react-ace";

import 'ace-builds/src-noconflict/mode-html';
import 'ace-builds/src-noconflict/mode-css';
import 'ace-builds/src-noconflict/mode-javascript';
import 'ace-builds/src-noconflict/theme-dracula';
import { useEffect, useRef, useState } from 'react';


function App() {
  const result = useRef(null);
  const [html, setHtml] = useState('');
  const [css, setCss] = useState('');
  const [js, setJs] = useState('');

  function update (e) {
    if (this.name === 'html') setHtml(e);
    if (this.name === 'css') setCss(e);
    if (this.name === 'js') setJs(e);
  }

  useEffect(() => {
    if (result.current) {
      result.current.innerHTML = html;
    }
  }, [html]);

  return (
    <div className="sandbox">
      <div className="field-wrapper">
        <AceEditor
          mode="html"
          debounceChangePeriod={1000}
          fontSize={16}
          height="300px"
          width="33.333%"
          theme="dracula"
          onChange={update}
          tabSize={2}
          name="html"
          editorProps={{ $blockScrolling: true }}
        />
        <AceEditor
          mode="css"
          debounceChangePeriod={1000}
          fontSize={16}
          height="300px"
          width="33.333%"
          theme="dracula"
          onChange={update}
          tabSize={2}
          name="css"
          editorProps={{ $blockScrolling: true }}
        />  
        <AceEditor
          mode="javascript"
          debounceChangePeriod={1000}
          fontSize={16}
          height="300px"
          width="33.333%"
          theme="dracula"
          onChange={update}
          tabSize={2}
          name="js"
          editorProps={{ $blockScrolling: true }}
        />
      </div>
      <div className="result" ref={result}></div>
      <style>{css}</style>
      <script>{js}</script>
    </div>
  );
}

export default App;