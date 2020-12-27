import React, { useState } from 'react';
import FolderTree from 'react-folder-tree';

import { testData } from '../../utils/testData';
import {
  DemoCode,
  DemoDescription,
} from './DemoUtils';

const demoDescription = 'This demos a visualization of the tree state. When tree state changes internally (due to any user interaction), folder tree will trigger onChange with the updated tree state as an argument.';

const codeString = `
const TreeStateViewer = () => {
  // this tree state will be in sync with the internal tree state
  // don't pass this state to FolderTree, since FolderTree manages state internally
  // this state is only for external usage.
  const [treeState, setTreeState] = useState(testData);
  const onTreeStateChange = newState => {
    // probably do something else here
    setTreeState(newState);
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
  const onTreeStateChange = newState => {
    // probably do something else here
    setTreeState(newState);
  };

  return (
    <>
      <DemoDescription>
        { demoDescription }
      </DemoDescription>

      <DemoCode>
        { codeString }
      </DemoCode>

      <div className='demo-sandbox'>
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
