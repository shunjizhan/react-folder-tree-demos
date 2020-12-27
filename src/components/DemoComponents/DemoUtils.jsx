import React from 'react';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { tomorrow } from 'react-syntax-highlighter/dist/esm/styles/prism';

const DemoCode = ({ children: codeString }) => (
  <SyntaxHighlighter
    className='demo-code'
    language='javascript'
    style={ tomorrow }
  >
    { codeString }
  </SyntaxHighlighter>
);

const DemoDescription = ({ children }) => (
  <div className='demo-description'>
    <div className='description-text'>
      { children }
    </div>
  </div>
);

export {
  DemoCode,
  DemoDescription,
};
