import React from 'react';
import './Keyboard.css';
import {useDispatch} from 'react-redux';

const Keyboard = () => {
  const dispatch = useDispatch();

  const buttonList = [
    {type: 'CLEAR', label: 'AC',},
    {type: 'CHANGE_SIGN', label: '+/-',},
    {type: 'BACKSPACE', label: '🡸',},
    {type: 'SELECT_OPERATOR', label: '÷', opr: '÷',},
    {type: 'APPEND_VALUE', label: '7', value: '7'},
    {type: 'APPEND_VALUE', label: '8', value: '8',},
    {type: 'APPEND_VALUE', label: '9', value: '9',},
    {type: 'SELECT_OPERATOR', label: '×', opr: '×'},
    {type: 'APPEND_VALUE', label: '4', value: '4'},
    {type: 'APPEND_VALUE', label: '5', value: '5'},
    {type: 'APPEND_VALUE', label: '6', value: '6'},
    {type: 'SELECT_OPERATOR', label: '−', opr: '−'},
    {type: 'APPEND_VALUE', label: '1', value: '1'},
    {type: 'APPEND_VALUE', label: '2', value: '2'},
    {type: 'APPEND_VALUE', label: '3', value: '3'},
    {type: 'SELECT_OPERATOR', label: '+', opr: '+'},
    {type: 'APPEND_VALUE', label: '0', value: '0', styleClass: 'span-2'},
    {type: 'APPEND_VALUE', label: '.', value:'.'},
    {type: 'CALCULATE_RESULT', label: '='},
  ];
  
  const generateButtons = (list) => {
    return list.map((item) => {
      return (
        <button className={item.styleClass} onClick={() => dispatch({type: item.type, opr: item.opr, value: item.value})}>{item.label}</button>
      )
    })
  }

  const buttons = generateButtons(buttonList);

  return (
    <div className='Keyboard'>
      {buttons}
    </div>
  )
}

export default Keyboard;