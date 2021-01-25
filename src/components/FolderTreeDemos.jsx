import React, { useState } from 'react';
import { DropdownButton, Dropdown } from 'react-bootstrap';
import WebFont from 'webfontloader';

import TreeStateViewer from './DemoComponents/TreeStateViewer';
import CustomIconsDemo from './DemoComponents/CustomIconsDemo';

import './FolderTreeDemos.scss';

WebFont.load({
  google: {
    families: [
      'Handlee',              // home
      'Cabin Sketch:700',     // section title
      'Neucha',               // home
      'Lato',                 // general
      'Noto Serif KR',        // myself
      'Architects Daughter',  // data chart title
      'M PLUS Rounded 1c',    // book and life
    ],
  },
});

const allComponents = {
  'View Tree State': TreeStateViewer,
  'Use Custom Icons': CustomIconsDemo,
};

const FolderTreeDemos = () => {
  const [componentName, setComponentName] = useState('View Tree State');
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
        <span id='app-title'>React Folder Tree Demos </span>
        { DemoSelect }
      </div>
      <DemoComponent />
    </div>
  );
};
export default FolderTreeDemos;
