import React, { useState } from 'react';
import FolderTree, { testData } from 'react-folder-tree';

import {
  DemoCode,
  DemoDescription,
  Highlight,
} from './DemoUtils';

const demoDescription = (
  <span>
    This example demos a <Highlight>live visualization of the tree state</Highlight>. Each time a user interacts with the tree, tree state will changes internally, and folder tree will trigger <Highlight>onChange(updated_tree_state)</Highlight>. This is how folder tree can communicate with the outside world, such as saving the latest tree state to somewhere else, or telling other components that a new tree state comes.
  </span>
);

const codeString = `
import FolderTree, { testData } from 'react-folder-tree';

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
          The Tree
        </SectionTitle>

        <FolderTree
          data={ testData }
          onChange={ onTreeStateChange }
        />
      </div>

      <div>
        <SectionTitle>
          Live Tree State
        </SectionTitle>

        <pre>
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
            The Tree
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
            Live Tree State
          </SectionTitle>

          <pre style={{
            margin: 0,
            fontFamily: 'consolas',
          }}
          >
            { JSON.stringify(treeState, null, 2) }
          </pre>
        </div>
      </div>
    </>
  );
};

export default TreeStateViewer;
