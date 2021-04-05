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
    This example demos how to use <Highlight>custom icons</Highlight> (all icons can be customized)! In the example it uses icons from Fontawesome, and implements <Highlight>custom onClick behaviors</Highlight>: when click, console log the name of the icon clicked. We can also pass a custom <Highlight>indentPixels</Highlight> prop to folder tree to fix the indentation to your favorite size.
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

const CaretRightIcon = ({ onClick, className }) => {
  const handleClick = () => {
    console.log('clicked: CaretRightIcon');
    onClick();
  };

  return <FaCaretRight onClick={ handleClick } />;
};

const CaretDownIcon = ({ onClick, className }) => {
  const handleClick = () => {
    console.log('clicked: CaretDownIcon');
    onClick();
  };

  return <FaCaretDown onClick={ handleClick } />;
};

const FileIcon = ({ onClick, className }) => {
  const handleClick = () => {
    console.log('clicked: FileIcon');
    onClick();
  };

  return <FaEthereum onClick={ handleClick } />;
};

const FolderIcon = ({ onClick, className }) => {
  const handleClick = () => {
    console.log('clicked: FolderIcon');
    onClick();
  };

  return <FaBitcoin onClick={ handleClick } />;
};

const FolderOpenIcon = ({ onClick, className }) => {
  const handleClick = () => {
    console.log('clicked: FolderOpenIcon');
    onClick();
  };

  return <FaBitcoin onClick={ handleClick } />;
};

const EditIcon = ({ onClick, className }) => {
  const handleClick = () => {
    console.log('clicked: EditIcon');
    onClick();
  };

  return <FaRegEdit onClick={ handleClick } />;
};

const DeleteIcon = ({ onClick, className }) => {
  const handleClick = () => {
    console.log('clicked: EditIcon');
    onClick();
  };

  return <FaRegTrashAlt onClick={ handleClick } />;
};

const CancelIcon = ({ onClick, className }) => {
  const handleClick = () => {
    console.log('clicked: CancelIcon');
    onClick();
  };

  return <FaRegWindowClose onClick={ handleClick } />;
};

const OKIcon = ({ onClick, className }) => {
  const handleClick = () => {
    console.log('clicked: OKIcon');
    onClick();
  };

  return <FaRegCheckSquare onClick={ handleClick } />;
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
        data={ testData }
        onChange={ onTreeStateChange }
        iconComponents={ iconComponents }
        indentPixels={ customIdentPixels }
      />
    </div>
  );
};
`;

const CaretRightIcon = ({ onClick, className }) => {
  const handleClick = () => {
    console.log('clicked: CaretRightIcon');
    onClick();
  };

  return <FaCaretRight onClick={ handleClick } />;
};

const CaretDownIcon = ({ onClick, className }) => {
  const handleClick = () => {
    console.log('clicked: CaretDownIcon');
    onClick();
  };

  return <FaCaretDown onClick={ handleClick } />;
};

const FileIcon = ({ onClick, className }) => {
  const handleClick = () => {
    console.log('clicked: FileIcon');
    onClick();
  };

  return <FaEthereum onClick={ handleClick } />;
};

const FolderIcon = ({ onClick, className }) => {
  const handleClick = () => {
    console.log('clicked: FolderIcon');
    onClick();
  };

  return <FaBitcoin onClick={ handleClick } />;
};

const FolderOpenIcon = ({ onClick, className }) => {
  const handleClick = () => {
    console.log('clicked: FolderOpenIcon');
    onClick();
  };

  return <FaBitcoin onClick={ handleClick } />;
};

const EditIcon = ({ onClick, className }) => {
  const handleClick = () => {
    console.log('clicked: EditIcon');
    onClick();
  };

  return <FaRegEdit onClick={ handleClick } />;
};

const DeleteIcon = ({ onClick, className }) => {
  const handleClick = () => {
    console.log('clicked: EditIcon');
    onClick();
  };

  return <FaRegTrashAlt onClick={ handleClick } />;
};

const CancelIcon = ({ onClick, className }) => {
  const handleClick = () => {
    console.log('clicked: CancelIcon');
    onClick();
  };

  return <FaRegWindowClose onClick={ handleClick } />;
};

const OKIcon = ({ onClick, className }) => {
  const handleClick = () => {
    console.log('clicked: OKIcon');
    onClick();
  };

  return <FaRegCheckSquare onClick={ handleClick } />;
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
          data={ testData }
          onChange={ onTreeStateChange }
          iconComponents={ iconComponents }
          indentPixels={ customIdentPixels }
        />
      </div>
    </>
  );
};

export default CustomIconsDemo;
