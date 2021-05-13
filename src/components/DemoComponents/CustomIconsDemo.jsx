import React, { useState } from 'react';

import {
  FaCaretRight,
  FaCaretDown,
  FaRegWindowClose,
  FaRegTrashAlt,
  FaRegEdit,
  FaRegCheckSquare,
  FaBitcoin,
  FaEthereum,
} from 'react-icons/fa';

import FolderTree, { testData } from 'react-folder-tree';
import {
  DemoCode,
  DemoDescription,
  Highlight,
} from './DemoUtils';

const demoDescription = (
  <span>
    This example demos how to use <Highlight>custom icons</Highlight> (all icons can be customized)! This example uses icons from Fontawesome, and implements <Highlight>custom onClick behaviors</Highlight>: when click an Icon, console.log all it's data. We can build more complex onClick functions using these data. Also, We can pass a custom <Highlight>indentPixels</Highlight> prop to FolderTree to set the indentation to your favorite size.
  </span>
);

const codeString = `
import {
  FaCaretRight,
  FaCaretDown,
  FaRegWindowClose,
  FaRegTrashAlt,
  FaRegEdit,
  FaRegCheckSquare,
  FaBitcoin,
  FaEthereum,
} from 'react-icons/fa';

import FolderTree, { testData } from 'react-folder-tree';

const CaretRightIcon = ({ onClick: defaultOnClick, nodeData }) => {
  const { path, name, checked, isOpen, url, restData } = nodeData;
  const handleClick = () => {
    console.log('icon clicked:', { path, name, url, restData });
    defaultOnClick();
  };

  return <FaCaretRight onClick={ handleClick } />;
};

const CaretDownIcon = ({ onClick: defaultOnClick, nodeData }) => {
  const { path, name, checked, isOpen, url, restData } = nodeData;
  const handleClick = () => {
    console.log('icon clicked:', { path, name, url, restData });
    defaultOnClick();
  };

  return <FaCaretDown onClick={ handleClick } />;
};

const FileIcon = ({ onClick: defaultOnClick, nodeData }) => {
  const { path, name, checked, isOpen, url, restData } = nodeData;
  const handleClick = () => {
    console.log('icon clicked:', { path, name, url, restData });
    defaultOnClick();
  };

  return <FaEthereum onClick={ handleClick } />;
};

const FolderIcon = ({ onClick: defaultOnClick, nodeData }) => {
  const { path, name, checked, isOpen, url, restData } = nodeData;
  const handleClick = () => {
    console.log('icon clicked:', { path, name, url, restData });
    defaultOnClick();
  };

  return <FaBitcoin onClick={ handleClick } />;
};

const FolderOpenIcon = ({ onClick: defaultOnClick, nodeData }) => {
  const { path, name, checked, isOpen, url, restData } = nodeData;
  const handleClick = () => {
    console.log('icon clicked:', { path, name, url, restData });
    defaultOnClick();
  };

  return <FaBitcoin onClick={ handleClick } />;
};

const EditIcon = ({ onClick: defaultOnClick, nodeData }) => {
  const { path, name, checked, isOpen, url, restData } = nodeData;
  const handleClick = () => {
    console.log('icon clicked:', { path, name, url, restData });
    defaultOnClick();
  };

  return <FaRegEdit onClick={ handleClick } />;
};

const DeleteIcon = ({ onClick: defaultOnClick, nodeData }) => {
  const { path, name, checked, isOpen, url, restData } = nodeData;
  const handleClick = () => {
    console.log('icon clicked:', { path, name, url, restData });
    defaultOnClick();
  };

  return <FaRegTrashAlt onClick={ handleClick } />;
};

const CancelIcon = ({ onClick: defaultOnClick, nodeData }) => {
  const { path, name, checked, isOpen, url, restData } = nodeData;
  const handleClick = () => {
    console.log('icon clicked:', { path, name, url, restData });
    defaultOnClick();
  };

  return <FaRegWindowClose onClick={ handleClick } />;
};

const OKIcon = ({ onClick: defaultOnClick, nodeData }) => {
  const { path, name, checked, isOpen, url, restData } = nodeData;
  const handleClick = () => {
    console.log('icon clicked:', { path, name, url, restData });
    defaultOnClick();
  };

  return <FaRegCheckSquare onClick={ handleClick } />;
};

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

const CustomIconsDemo = () => {
  const onTreeStateChange = data => { /* do whatever needed */ };

  const customIdentPixels = 50;
  const iconComponents = {
    FileIcon,
    FolderIcon,
    FolderOpenIcon,
    EditIcon,
    DeleteIcon,
    CancelIcon,
    CaretRightIcon,
    CaretDownIcon,
    OKIcon,
  };

  return (
    <div className='demo-sandbox'>
      <FolderTree
        data={ addUrl(testData) }
        onChange={ onTreeStateChange }
        iconComponents={ iconComponents }
        indentPixels={ customIdentPixels }
      />
    </div>
  );
};
`;

const CaretRightIcon = ({ onClick: defaultOnClick, nodeData }) => {
  const { path, name, checked, isOpen, url, restData } = nodeData;
  const handleClick = () => {
    console.log('icon clicked:', { path, name, url, restData });
    defaultOnClick();
  };

  return <FaCaretRight onClick={ handleClick } />;
};

const CaretDownIcon = ({ onClick: defaultOnClick, nodeData }) => {
  const { path, name, checked, isOpen, url, restData } = nodeData;
  const handleClick = () => {
    console.log('icon clicked:', { path, name, url, restData });
    defaultOnClick();
  };

  return <FaCaretDown onClick={ handleClick } />;
};

const FileIcon = ({ onClick: defaultOnClick, nodeData }) => {
  const { path, name, checked, isOpen, url, restData } = nodeData;
  const handleClick = () => {
    console.log('icon clicked:', { path, name, url, restData });
    defaultOnClick();
  };

  return <FaEthereum onClick={ handleClick } />;
};

const FolderIcon = ({ onClick: defaultOnClick, nodeData }) => {
  const { path, name, checked, isOpen, url, restData } = nodeData;
  const handleClick = () => {
    console.log('icon clicked:', { path, name, url, restData });
    defaultOnClick();
  };

  return <FaBitcoin onClick={ handleClick } />;
};

const FolderOpenIcon = ({ onClick: defaultOnClick, nodeData }) => {
  const { path, name, checked, isOpen, url, restData } = nodeData;
  const handleClick = () => {
    console.log('icon clicked:', { path, name, url, restData });
    defaultOnClick();
  };

  return <FaBitcoin onClick={ handleClick } />;
};

const EditIcon = ({ onClick: defaultOnClick, nodeData }) => {
  const { path, name, checked, isOpen, url, restData } = nodeData;
  const handleClick = () => {
    console.log('icon clicked:', { path, name, url, restData });
    defaultOnClick();
  };

  return <FaRegEdit onClick={ handleClick } />;
};

const DeleteIcon = ({ onClick: defaultOnClick, nodeData }) => {
  const { path, name, checked, isOpen, url, restData } = nodeData;
  const handleClick = () => {
    console.log('icon clicked:', { path, name, url, restData });
    defaultOnClick();
  };

  return <FaRegTrashAlt onClick={ handleClick } />;
};

const CancelIcon = ({ onClick: defaultOnClick, nodeData }) => {
  const { path, name, checked, isOpen, url, restData } = nodeData;
  const handleClick = () => {
    console.log('icon clicked:', { path, name, url, restData });
    defaultOnClick();
  };

  return <FaRegWindowClose onClick={ handleClick } />;
};

const OKIcon = ({ onClick: defaultOnClick, nodeData }) => {
  const { path, name, checked, isOpen, url, restData } = nodeData;
  const handleClick = () => {
    console.log('icon clicked:', { path, name, url, restData });
    defaultOnClick();
  };

  return <FaRegCheckSquare onClick={ handleClick } />;
};

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

const CustomIconsDemo = () => {
  const onTreeStateChange = data => { /* do whatever needed */ };

  const customIdentPixels = 50;
  const iconComponents = {
    FileIcon,
    FolderIcon,
    FolderOpenIcon,
    EditIcon,
    DeleteIcon,
    CancelIcon,
    CaretRightIcon,
    CaretDownIcon,
    OKIcon,
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
        <FolderTree
          data={ addUrl(testData) }
          onChange={ onTreeStateChange }
          iconComponents={ iconComponents }
          indentPixels={ customIdentPixels }
        />
      </div>
    </>
  );
};

export default CustomIconsDemo;
