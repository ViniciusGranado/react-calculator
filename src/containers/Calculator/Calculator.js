import React from 'react';
import './Calculator.css';
import Screen from '../../components/Screen/Screen';
import Keyboard from '../../components/Keyboard/Keyboard';

const Calculator = () => {
  return (
    <div className='Calculator'>
      <Screen />
      <Keyboard />
    </div>
  )
}

export default Calculator;