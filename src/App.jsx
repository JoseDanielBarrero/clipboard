import React from 'react';
import "./App.css";
import BreakRoom from './Components/Breakroom/BreakRoom';
import Clipboard from './Components/Clipboard/Clipboard';
import FunctionBar from './Components/FunctionBar/FunctionBar';

function App() {
  return (
    <div className='App'>
      <Clipboard className='clipboard' />
      <BreakRoom className='breakroom' />
      <FunctionBar className='function-bar'/>
    </div>
  )
}

export default App
