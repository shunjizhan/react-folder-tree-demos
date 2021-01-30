import React from 'react';
import FolderTree from 'react-folder-tree';

import {
  DemoCode,
  DemoDescription,
  Highlight,
} from './DemoUtils';

const demoDescription = (
  <span>
    This example demos how to <Highlight>pass in the initial tree state</Highlight>. Basically each tree node has these properties: <Highlight>name</Highlight> [it's name], <Highlight>children</Highlight> [(folders only) it's children nodes], <Highlight>checked</Highlight> [(optional) is this node checked, 0 for unchecked, 1 for checked, 0.5 for half checked (some of it's children are checked)], <Highlight>isOpen</Highlight> [(optional) if this node is open]. Note that we need to specify <Highlight>initCheckedStatus='custom'</Highlight>, and <Highlight>initOpenStatus='custom'</Highlight>, otherwise check status will be set to default 0, and isOpen will be set to default true.
  </span>
);

const codeString = `
import FolderTree from 'react-folder-tree';

const treeState = {
  name: 'root [half checked and opened]',
  checked: 0.5,   // half check: some children are checked
  isOpen: true,   // this folder is opened, we can see it's children
  children: [
    { name: 'children 1 [not checked]', checked: 0 },
    {
      name: 'children 2 [half checked and not opened]',
      checked: 0.5,
      isOpen: false,
      children: [
        { name: 'children 2-1 [not checked]', checked: 0 },
        { name: 'children 2-2 [checked]', checked: 1 },
      ],
    },
  ],
};

const InitialStateDemo = () => {
  const onTreeStateChange = state => console.log('tree state: ', state);

  return (
    <div className='demo-sandbox'>
      <FolderTree
        data={ treeState }
        onChange={ onTreeStateChange }
        initCheckedStatus='custom'  // default is 0 [unchecked]
        initOpenStatus='custom'     // default is 'open'
      />
    </div>
  );
};
`;

const treeState = {
  name: 'root [half checked and opened]',
  checked: 0.5,   // half check: some children are checked
  isOpen: true,   // this folder is opened, we can see it's children
  children: [
    { name: 'children 1 [not checked]', checked: 0 },
    {
      name: 'children 2 [half checked and not opened]',
      checked: 0.5,
      isOpen: false,
      children: [
        { name: 'children 2-1 [not checked]', checked: 0 },
        { name: 'children 2-2 [checked]', checked: 1 },
      ],
    },
  ],
};

const InitialState = () => {
  const onTreeStateChange = state => console.log('tree state: ', state);

  return (
    <>
      <DemoDescription>
        {demoDescription}
      </DemoDescription>

      <DemoCode>
        {codeString}
      </DemoCode>

      <div className='demo-sandbox'>
        <FolderTree
          data={ treeState }
          onChange={ onTreeStateChange }
          initCheckedStatus='custom'  // default is 0 [unchecked]
          initOpenStatus='custom'     // default is 'open'
        />
      </div>
    </>
  );
};

export default InitialState;
