import React, { useState } from 'react';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { tomorrow } from 'react-syntax-highlighter/dist/esm/styles/prism';

import FolderTree from 'react-folder-tree';
import { testData } from '../../utils/testData';

const codeString = `
const TreeStateViewer = () => {
  const [treeState, setTreeState] = useState(testData);
  const onTreeStateChange = data => {
    // probably do something else here
    setTreeState(data);
  };

  return (
    <div id='demo-sandbox'>
      <div>
        <SectionTitle>
          Real Tree
        </SectionTitle>

        <FolderTree
          data={ testData }
          onChange={ onTreeStateChange }
        />
      </div>

      <div>
        <SectionTitle>
          Tree State Viewer
        </SectionTitle>

        <pre style={{ margin: 0 }}>
          { JSON.stringify(treeState, null, 2) }
        </pre>
      </div>
    </div>
  );
};
`;

const SectionTitle = ({ children }) => (
  <div
    style={{
      display: 'inline-block',
      padding: '2px 5px',
      border: '2px solid black',
      marginBottom: '10px',
    }}
  >
    { children }
  </div>
);

const TreeStateViewer = () => {
  const [treeState, setTreeState] = useState(testData);
  const onTreeStateChange = data => {
    // probably do something else here
    setTreeState(data);
  };

  return (
    <>
      <SyntaxHighlighter
        id='demo-code'
        language='javascript'
        style={ tomorrow }
      >
        { codeString }
      </SyntaxHighlighter>

      <div id='demo-sandbox'>
        <div
          style={{
            width: '49%',
            float: 'left',
          }}
        >
          <SectionTitle>
            Real Tree
          </SectionTitle>

          <FolderTree
            data={ testData }
            onChange={ onTreeStateChange }
          />
        </div>

        <div
          style={{
            width: '48%',
            float: 'right',
            paddingLeft: '10px',
            borderLeft: '1px solid black',
            fontSize: '80%',
          }}
        >
          <SectionTitle>
            Tree State Viewer
          </SectionTitle>

          <pre style={{ margin: 0 }}>
            { JSON.stringify(treeState, null, 2) }
          </pre>
        </div>
      </div>
    </>
  );
};

export default TreeStateViewer;
