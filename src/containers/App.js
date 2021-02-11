import './App.css';
import {useSelector, useDispatch} from 'react-redux';
import Calculator from './Calculator/Calculator';

function App() {
  return (
    <div className="App">
      <Calculator />
    </div>
  );
}

export default App;
