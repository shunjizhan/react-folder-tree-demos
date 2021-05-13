import React, { useState } from 'react';
import { DropdownButton, Dropdown } from 'react-bootstrap';
import WebFont from 'webfontloader';

import BasicTree from './DemoComponents/BasicTree';
import InitialState from './DemoComponents/InitialState';
import TreeStateViewer from './DemoComponents/TreeStateViewer';
import CustomIconsDemo from './DemoComponents/CustomIconsDemo';
import CustomNode from './DemoComponents/CustomNode';
import logo from '../assets/logo.png';

import './FolderTreeDemos.scss';

// TODO: add github link on the right corner to link the github folder
// TODO: add footer made with love by shunjizhan, and link to my github
// TODO: webpack tree shaking to reduce trunk size (and other optimizations)
// TODO: use route so in README can add link to it
WebFont.load({
  google: {
    families: [
      'M PLUS Rounded 1c',    // book and life
    ],
  },
});

const allComponents = {
  'Basic Tree': BasicTree,
  'Initial State': InitialState,
  'View Live State': TreeStateViewer,
  'Use Custom Icons': CustomIconsDemo,
  'Custom TreeNode onClick': CustomNode,
};

const FolderTreeDemos = () => {
  const [componentName, setComponentName] = useState('Basic Tree');
  const DemoComponent = allComponents[componentName];

  const DemoSelect = (
    <div id='DemoSelect'>
      <DropdownButton
        id='dropdown-basic-button'
        title={ componentName }
      >
        {
          Object.keys(allComponents).map(demoName => (
            <Dropdown.Item
              className='dropdown-items'
              key={ demoName }
              eventKey={ demoName }
              onSelect={ setComponentName }
            >
              { demoName }
            </Dropdown.Item>
          ))
        }
      </DropdownButton>
    </div>
  );

  return (
    <div id='folder-tree-demos'>
      <div id='top-bar'>
        <img id='logo' src={ logo } alt='logo' /><span id='app-title'>React Folder Tree Demos </span>
        { DemoSelect }
      </div>
      <DemoComponent />
    </div>
  );
};
export default FolderTreeDemos;
