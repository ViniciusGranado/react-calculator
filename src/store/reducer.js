const initialState = {
  oldValue: '',
  newValue: '',
  curOpr: undefined,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'CLEAR':
      return {
        ...state,
        oldValue: '',
        newValue: '',
        curOpr: undefined,
      };

    case 'CHANGE_CUR_VALUE':
      if (action.value === '.' && state.newValue.includes('.')) {
        return state;
      }

      return {
        ...state,
        newValue: state.newValue += action.value,
      };

    case 'SELECT_OPERATOR':
      if(!state.newValue) {
        return state;
      }

      // if (state.oldValue !== '') {
      //   'CALCULATE_RESULT'
      //   return {
      //     ...state,
      //     oldValue: state.newValue,
      //     newValue: '',
      //     curOpr: undefined,
      //   };
      // }

      return {
        ...state,
        oldValue: state.newValue,
        newValue: '',
        curOpr: action.opr,
      };

    case 'CALCULATE_RESULT':
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
        newValue: result.toString(),
        curOpr: undefined,
      };

    case 'BACKSPACE':
      return {
        ...state,
        newValue: state.newValue.slice(0, -1),
      };

    case 'CHANGE_SIGN':
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