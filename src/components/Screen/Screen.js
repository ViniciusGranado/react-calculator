import React from 'react';
import Operation from './Operation/Operation';
import CurrentValue from './CurrentValue/CurrentValue';
import './Screen.css';

const Screen = () => {
  return (
    <div className='Screen'>
      <Operation/>
      <CurrentValue/>
    </div>
  )
}

export default Screen;