import React from 'react';
import './Keyboard/Keyboard';
import Keyboard from './Keyboard/Keyboard';
import Screen from './Screen/Screen';

const Calculator = () => {
  return (
    <div className='Calculator'>
      <Keyboard />
      <Screen />
    </div>
  )
}

export default Calculator;