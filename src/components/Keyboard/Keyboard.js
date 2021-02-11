import React from 'react';
import './Keyboard.css';
import {useDispatch} from 'react-redux';

const Keyboard = (props) => {
  const dispatch = useDispatch();

  return (
    <div className='Keyboard'>
      <button onClick={() => dispatch({type: 'CLEAR'})}>AC</button>
      <button onClick={() => dispatch({type: 'CHANGE_SIGN'})}>+/-</button>
      <button onClick={() => dispatch({type: 'BACKSPACE'})}>🡸</button>
      <button onClick={() => dispatch({type: 'SELECT_OPERATOR', opr: '÷'})}>÷</button>
      <button onClick={() => dispatch({type: 'CHANGE_CUR_VALUE', value: '7'})}>7</button>
      <button onClick={() => dispatch({type: 'CHANGE_CUR_VALUE', value: '8'})}>8</button>
      <button onClick={() => dispatch({type: 'CHANGE_CUR_VALUE', value: '9'})}>9</button>
      <button onClick={() => dispatch({type: 'SELECT_OPERATOR', opr: '×'})}>×</button>
      <button onClick={() => dispatch({type: 'CHANGE_CUR_VALUE', value: '4'})}>4</button>
      <button onClick={() => dispatch({type: 'CHANGE_CUR_VALUE', value: '5'})}>5</button>
      <button onClick={() => dispatch({type: 'CHANGE_CUR_VALUE', value: '6'})}>6</button>
      <button onClick={() => dispatch({type: 'SELECT_OPERATOR', opr: '−'})}>−</button>
      <button onClick={() => dispatch({type: 'CHANGE_CUR_VALUE', value: '1'})}>1</button>
      <button onClick={() => dispatch({type: 'CHANGE_CUR_VALUE', value: '2'})}>2</button>
      <button onClick={() => dispatch({type: 'CHANGE_CUR_VALUE', value: '3'})}>3</button>
      <button onClick={() => dispatch({type: 'SELECT_OPERATOR', opr: '+'})}>+</button>
      <button onClick={() => dispatch({type: 'CHANGE_CUR_VALUE', value: '0'})}className='span-2'>0</button>
      <button onClick={() => dispatch({type: 'CHANGE_CUR_VALUE', value: '.'})}>.</button>
      <button onClick={() => dispatch({type: 'CALCULATE_RESULT'})}>=</button>
    </div>
  )
}

export default Keyboard;