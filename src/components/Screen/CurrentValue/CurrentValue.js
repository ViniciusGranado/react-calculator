import React from 'react';
import './CurrentValue.css';
import {useSelector} from 'react-redux'

const CurrentValue = (props) => {
  const newValue = useSelector((state) => {
    return state.newValue;
  });

  return (
    <input className='CurrentValue' value={newValue} readOnly>
    </input>
  )
}

export default CurrentValue;