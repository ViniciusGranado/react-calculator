import React from 'react';
import './Operation.css';
import {useSelector} from 'react-redux';

const Operation = () => {
  const oldValue = useSelector((state) => {
    return state.oldValue;
  })

  const curOpr = useSelector((state) => {
    return state.curOpr;
  })

  const formatValue = (value) => {
    if (!curOpr) {
      return '';
    };
    
    return `${value} ${curOpr}`;
  }

  return (
    <input className='Operation' value={formatValue(oldValue)} readOnly></input>
  )
}

export default Operation;