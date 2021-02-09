import React from 'react';
import Operation from './Operation/Operation';
import Result from './Result/Result';

const Screen = () => {
  return (
    <div className='Screen'>
      <Operation />
      <Result />
    </div>
  )
}

export default Screen;