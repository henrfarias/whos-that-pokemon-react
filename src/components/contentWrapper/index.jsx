import React from 'react';

import './style.css';

const ContentWrapper = ({ children }) => {

  console.log(children)
  return (
    <div className='contentWrapper'>
      {children}
    </div>
  );
}

export  { ContentWrapper };