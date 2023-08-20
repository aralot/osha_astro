import React, { FunctionComponent } from 'react';

export const close: FunctionComponent = ({ className }) => (
  <svg
    className={className}
    width="36"
    height="36"
    fill="none"
    viewBox="0 0 36 36"
  >
    <path
      fill="currentColor"
      fillRule="evenodd"
      d="M30.5607 28.4393c.5857.5858.5857 1.5356 0 2.1214-.5858.5857-1.5356.5857-2.1214 0L18 20.1213 7.56064 30.5607c-.58578.5858-1.53553.5858-2.12132 0-.58578-.5858-.58578-1.5356 0-2.1213L15.8787 18 5.43934 7.56066c-.58578-.58579-.58578-1.53554 0-2.12132.58579-.58579 1.53554-.58579 2.12132 0L18 15.8787 28.4393 5.43935c.5858-.58578 1.5356-.58578 2.1213 0 .5858.58579.5858 1.53554 0 2.12133L20.1213 18l10.4394 10.4393Z"
      clipRule="evenodd"
    />
  </svg>
);
