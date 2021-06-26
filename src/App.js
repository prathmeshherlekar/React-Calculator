import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './css/style.css';
import Result from './components/Result';
import Keyboard from './components/keyboard';
import { useState } from 'react';




function App() {
  const [value,setvalue]=useState(0);
  
  const [result,setResult]=useState('0');


  return (
    <div className="container-fluid">
      <div className="row">
          <Result value={result} setvalue={setvalue}/>                
      </div>
      
      <Keyboard value={value} setResult={setResult} result={result} setvalue={setvalue}/>
      
    </div>
  );
}

export default App;
