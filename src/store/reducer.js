const initialState = {
  oldValue: '',
  newValue: '',
  curOpr: undefined,
};

const calculateResult = (state) => {
  let result;
  const numOldValue = parseFloat(state.oldValue);
  const numNewValue = parseFloat(state.newValue);

  if (isNaN(numOldValue) || isNaN(numNewValue)) {
    return state;
  }

  switch (state.curOpr) {
    case '+':
      result = numOldValue + numNewValue;
      break;
    case '−':
      result = numOldValue - numNewValue;
      break;
    case '÷':
      result = numOldValue / numNewValue;
      break;
    case '×':
      result = numOldValue * numNewValue;
      break;
    default:
      return {
        ...state,
        oldValue: '',
        newValue: '[Erro]',
        curOpr: '',
      };
  }

  return {
    ...state,
    oldValue: '',
    newValue: (+result.toFixed(5)).toString(), // Limits to 5 decimal places
    curOpr: undefined,
  };
}

const reducer = (state = initialState, action) => {
  switch (action.type) {
    // Clear all values
    case 'CLEAR':
      return {
        ...state,
        oldValue: '',
        newValue: '',
        curOpr: undefined,
      };

    // Add passed value to newValue
    case 'APPEND_VALUE':
      if (action.value === '.' && state.newValue.includes('.')) {
        return state;
      }

      return {
        ...state,
        newValue: state.newValue += action.value,
      };

      // Select math operator
    case 'SELECT_OPERATOR':
      if(!state.newValue) {
        return state;
      }

      if (state.oldValue !== '') {
        const result = calculateResult(state);

        return {
          ...result,
          oldValue: result.newValue,
          newValue: '',
          curOpr: action.opr,
        }
      }

      return {
        ...state,
        oldValue: state.newValue,
        newValue: '',
        curOpr: action.opr,
      };

    // Calculate the final result
    case 'CALCULATE_RESULT':
      return calculateResult(state);

    // Delete last char from newValue
    case 'BACKSPACE':
      return {
        ...state,
        newValue: state.newValue.slice(0, -1),
      };

    // Change sign from newValue
    case 'CHANGE_SIGN':
      if (state.newValue.length === 0) {
        return state;
      }
      if (state.newValue[0] === '-') {
        const positiveValue = state.newValue.slice(1);
        return {
          ...state,
          newValue: positiveValue,
        };
      }

      return {
        ...state,
        newValue: '-' + state.newValue,
      }

    default:
      return state;
  }
}

export default reducer;