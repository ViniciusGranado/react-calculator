import React from 'react';
import Screen from '../../components/Screen/Screen';
import Keyboard from '../../components/Keyboard/Keyboard';
import './Calculator.css';

const Calculator = () => {
  return (
    <div className='Calculator'>
      <Screen />
      <Keyboard />
    </div>
  )
}

export default Calculator;