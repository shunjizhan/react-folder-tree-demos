import React from 'react';
import FolderTree, { testData } from 'react-folder-tree';

import {
  DemoCode,
  DemoDescription,
  Highlight,
} from './DemoUtils';

const demoDescription = (
  <span>
    This example demos a very basic tree, try it out! It fully supports inline CRUD operations:
    <Highlight>(un)check</Highlight>
    ,
    <Highlight> (un)open</Highlight>
    {' '}
    (folders only),
    <Highlight> edit node name</Highlight>
    ,
    <Highlight> delete node</Highlight>
    ,
    <Highlight> add new file</Highlight>
    {' '}
    (folders only),
    <Highlight> add new folder</Highlight>
    {' '}
    (folders only).
    By passing an
    {' '}
    <Highlight>onChange</Highlight>
    {' '}
    function, we can console log the latest tree state after each operation.
  </span>
);

const codeString = `
import FolderTree, { testData } from 'react-folder-tree';

const BasicTree = () => {
  const onTreeStateChange = state => console.log('tree state: ', state);

  return (
    <FolderTree
      data={ testData }
      onChange={ onTreeStateChange }
    />
  );
};
`;

const BasicTree = () => {
  const onTreeStateChange = state => console.log('tree state: ', state);

  return (
    <>
      <DemoDescription>
        { demoDescription }
      </DemoDescription>

      <DemoCode>
        { codeString }
      </DemoCode>

      <div className='demo-sandbox'>
        <FolderTree
          data={ testData }
          onChange={ onTreeStateChange }
        />
      </div>
    </>
  );
};

export default BasicTree;
