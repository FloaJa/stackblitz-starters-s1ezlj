import * as React from 'react';
import AceEditor from 'react-ace';

import 'ace-builds/src-noconflict/mode-json';
import 'ace-builds/src-noconflict/theme-monokai';
import 'ace-builds/src-noconflict/ext-language_tools';

import './style.css';

export default function App() {
  const ace = React.useRef();

  React.useEffect(() => {
    console.log(ace.current);

    // ace.current?.config.set('basePath', './');
  });

  return (
    <AceEditor
      mode="json"
      theme="monokai"
      value={JSON.stringify(JSON.parse('{"json字符串": 123}'), null, 2)}
      placeholder="默认json数据"
      name={'UNIQUE_ID_OF_DIV'}
      highlightActiveLine={false}
      displayIndentGuides={false}
      editorProps={{ $blockScrolling: false }}
      style={{ width: '100%', height: '300px' }}
      setOptions={{
        enableBasicAutocompletion: true,
        enableLiveAutocompletion: true,
        enableSnippets: true,
        showLineNumbers: true,
        tabSize: 2,
      }}
    />
  );
}
