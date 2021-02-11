import React from 'react';
import './CurrentValue.css';
import {useSelector} from 'react-redux';


const CurrentValue = () => {
  const newValue = useSelector((state) => {
    return state.newValue;
  });

  return (
    <div className='CurrentValue'>{newValue}</div>
    // <input className='CurrentValue' value={newValue} readOnly>
    // </input>
  )
}

export default CurrentValue;