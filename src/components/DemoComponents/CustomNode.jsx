import React from 'react';
import FolderTree, { testData } from 'react-folder-tree';

import {
  DemoCode,
  DemoDescription,
  Highlight,
} from './DemoUtils';

const demoDescription = (
  <span>
    This example demos how to provide <Highlight>custom onClick handler</Highlight> for all node names. It takes this node's data as param, so we can build anything we want using these data. What's more, since we don't need checkboxes, we can simply set <Highlight>showCheckbox</Highlight> prop to false.
  </span>
);

const codeString = `
import FolderTree, { testData } from 'react-folder-tree';

// add fake url to data for testing purpose
const addUrl = node => {
  const fakeUrl = \`root/\${node.name}\`;
if (node.children) {
  node.url = fakeUrl;
  node.children = node.children.map(c => addUrl(c));
} else {
  node.url = fakeUrl;
}

return node;
};

// simulate a download function
const fakeDownload = nodeData => console.log('downloading...', nodeData);

// custom event handler for node name click
const onNameClick = (defaultOnClick, nodeData) => {
  const {
    // internal data
    path, name, checked, isOpen,
    // custom data
    url, ...whateverRest
  } = nodeData;

  fakeDownload({ name, url });
};

const CustomNodeClickDemo = () => (
  <FolderTree
    data={ addUrl(testData) }
    onNameClick={ onNameClick }
    showCheckbox={ false }
  />
);
`;

// add fake url to data for testing purpose
const addUrl = node => {
  const fakeUrl = `root/${node.name}`;
  if (node.children) {
    node.url = fakeUrl;
    node.children = node.children.map(c => addUrl(c));
  } else {
    node.url = fakeUrl;
  }

  return node;
};

const fakeDownload = nodeData => console.log('downloading...', nodeData);
const onNameClick = (defaultOnClick, nodeData) => {
  const {
    // internal data
    path, name, checked, isOpen,
    // custom data
    url, ...whateverRest
  } = nodeData;

  fakeDownload({ name, url });
};

const CustomNodeClickDemo = () => (
  <>
    <DemoDescription>
      {demoDescription}
    </DemoDescription>

    <DemoCode>
      {codeString}
    </DemoCode>

    <div className='demo-sandbox'>
      <FolderTree
        data={ addUrl(testData) }
        onNameClick={ onNameClick }
        showCheckbox={ false }
      />
    </div>
  </>
);

export default CustomNodeClickDemo;
