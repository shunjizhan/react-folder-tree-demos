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
    This example demos how to use <Highlight>custom icons</Highlight> (all icons can be customized)! This example uses icons from Fontawesome, and implements <Highlight>custom onClick behaviors</Highlight>: when click an Icon, console log it's <Highlight>name</Highlight>, <Highlight>path</Highlight>, <Highlight>className (icon type)</Highlight>. We can build more complex onClick functions using these props. Also, We can pass a custom <Highlight>indentPixels</Highlight> prop to folder tree to fix the indentation to your favorite size.
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

const CaretRightIcon = ({ onClick: defaultOnClick, className, path, name }) => {
  const handleClick = () => {
    console.log('clicked:', { className, path, name });
    defaultOnClick();
  };

  return <FaCaretRight onClick={ handleClick } />;
};

const CaretDownIcon = ({ onClick: defaultOnClick, className, path, name }) => {
  const handleClick = () => {
    console.log('clicked:', { className, path, name });
    defaultOnClick();
  };

  return <FaCaretDown onClick={ handleClick } />;
};

const FileIcon = ({ onClick: defaultOnClick, className, path, name }) => {
  const handleClick = () => {
    console.log('clicked:', { className, path, name });
    defaultOnClick();
  };

  return <FaEthereum onClick={ handleClick } />;
};

const FolderIcon = ({ onClick: defaultOnClick, className, path, name }) => {
  const handleClick = () => {
    console.log('clicked:', { className, path, name });
    defaultOnClick();
  };

  return <FaBitcoin onClick={ handleClick } />;
};

const FolderOpenIcon = ({ onClick: defaultOnClick, className, path, name }) => {
  const handleClick = () => {
    console.log('clicked:', { className, path, name });
    defaultOnClick();
  };

  return <FaBitcoin onClick={ handleClick } />;
};

const EditIcon = ({ onClick: defaultOnClick, className, path, name }) => {
  const handleClick = () => {
    console.log('clicked:', { className, path, name });
    defaultOnClick();
  };

  return <FaRegEdit onClick={ handleClick } />;
};

const DeleteIcon = ({ onClick: defaultOnClick, className, path, name }) => {
  const handleClick = () => {
    console.log('clicked:', { className, path, name });
    defaultOnClick();
  };

  return <FaRegTrashAlt onClick={ handleClick } />;
};

const CancelIcon = ({ onClick: defaultOnClick, className, path, name }) => {
  const handleClick = () => {
    console.log('clicked:', { className, path, name });
    defaultOnClick();
  };

  return <FaRegWindowClose onClick={ handleClick } />;
};

const OKIcon = ({ onClick: defaultOnClick, className, path, name }) => {
  const handleClick = () => {
    console.log('clicked:', { className, path, name });
    defaultOnClick();
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

const CaretRightIcon = ({ onClick: defaultOnClick, className, path, name }) => {
  const handleClick = () => {
    console.log('clicked:', { className, path, name });
    defaultOnClick();
  };

  return <FaCaretRight onClick={ handleClick } />;
};

const CaretDownIcon = ({ onClick: defaultOnClick, className, path, name }) => {
  const handleClick = () => {
    console.log('clicked:', { className, path, name });
    defaultOnClick();
  };

  return <FaCaretDown onClick={ handleClick } />;
};

const FileIcon = ({ onClick: defaultOnClick, className, path, name }) => {
  const handleClick = () => {
    console.log('clicked:', { className, path, name });
    defaultOnClick();
  };

  return <FaEthereum onClick={ handleClick } />;
};

const FolderIcon = ({ onClick: defaultOnClick, className, path, name }) => {
  const handleClick = () => {
    console.log('clicked:', { className, path, name });
    defaultOnClick();
  };

  return <FaBitcoin onClick={ handleClick } />;
};

const FolderOpenIcon = ({ onClick: defaultOnClick, className, path, name }) => {
  const handleClick = () => {
    console.log('clicked:', { className, path, name });
    defaultOnClick();
  };

  return <FaBitcoin onClick={ handleClick } />;
};

const EditIcon = ({ onClick: defaultOnClick, className, path, name }) => {
  const handleClick = () => {
    console.log('clicked:', { className, path, name });
    defaultOnClick();
  };

  return <FaRegEdit onClick={ handleClick } />;
};

const DeleteIcon = ({ onClick: defaultOnClick, className, path, name }) => {
  const handleClick = () => {
    console.log('clicked:', { className, path, name });
    defaultOnClick();
  };

  return <FaRegTrashAlt onClick={ handleClick } />;
};

const CancelIcon = ({ onClick: defaultOnClick, className, path, name }) => {
  const handleClick = () => {
    console.log('clicked:', { className, path, name });
    defaultOnClick();
  };

  return <FaRegWindowClose onClick={ handleClick } />;
};

const OKIcon = ({ onClick: defaultOnClick, className, path, name }) => {
  const handleClick = () => {
    console.log('clicked:', { className, path, name });
    defaultOnClick();
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
