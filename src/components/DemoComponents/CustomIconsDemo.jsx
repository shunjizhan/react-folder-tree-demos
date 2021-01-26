import React, { useState } from 'react';

import {
  FaCaretRight,
  FaCaretDown,
  FaRegFolder,
  FaRegFolderOpen,
  FaRegFile,
  FaRegWindowClose,
  FaRegTrashAlt,
  FaRegEdit,
  FaRegCheckSquare,
} from 'react-icons/fa';

import FolderTree, { testData } from 'react-folder-tree';
import {
  DemoCode,
  DemoDescription,
  Highlight,
} from './DemoUtils';

const demoDescription = (
  <span>
    This example demos how to use <Highlight>custom icons</Highlight>. It uses icon from ***, and implements <Highlight>custom onClick behaviors</Highlight> for these icons: when click, console log the name of the icon clicked.'
  </span>
);

const codeString = `
import FolderTree, { testData } from 'react-folder-tree';
import {
  FaCaretRight,
  FaCaretDown,
  FaRegFolder,
  FaRegFolderOpen,
  FaRegFile,
  FaRegWindowClose,
  FaRegTrashAlt,
  FaRegEdit,
  FaRegCheckSquare,
} from 'react-icons/fa';

/* ---------- custom icons ---------- */
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

  return <FaRegFile onClick={ handleClick } />;
};

const FolderIcon = ({ onClick, className }) => {
  const handleClick = () => {
    console.log('clicked: FolderIcon');
    onClick();
  };

  return <FaRegFolder onClick={ handleClick } />;
};

const FolderOpenIcon = ({ onClick, className }) => {
  const handleClick = () => {
    console.log('clicked: FolderOpenIcon');
    onClick();
  };

  return <FaRegFolderOpen onClick={ handleClick } />;
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
    <FolderTree
      data={ testData }
      onChange={ onTreeStateChange }
      iconComponents={ iconComponents }
    />
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

  return <FaRegFile onClick={ handleClick } />;
};

const FolderIcon = ({ onClick, className }) => {
  const handleClick = () => {
    console.log('clicked: FolderIcon');
    onClick();
  };

  return <FaRegFolder onClick={ handleClick } />;
};

const FolderOpenIcon = ({ onClick, className }) => {
  const handleClick = () => {
    console.log('clicked: FolderOpenIcon');
    onClick();
  };

  return <FaRegFolderOpen onClick={ handleClick } />;
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
        />
      </div>
    </>
  );
};

export default CustomIconsDemo;
