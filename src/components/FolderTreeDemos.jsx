import React, { useState } from 'react';

import TreeStateViewer from './DemoComponents/TreeStateViewer';
import CustomIconsDemo from './DemoComponents/CustomIconsDemo';

import './FolderTreeDemos.scss';

const allComponents = {
  TreeStateViewer,
  CustomIconsDemo,
};

const FolderTreeDemos = () => {
  const [componentName, setComponentName] = useState('TreeStateViewer');
  const DemoComponent = allComponents[componentName];

  return (
    <div id='folder-tree-demos'>
      <h1>React Folder Tree Demos</h1>
      <DemoComponent />
    </div>
  );
};
export default FolderTreeDemos;
