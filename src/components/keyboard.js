import { useState } from 'react';
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../css/style.css';


const Keyboard = ({value,setvalue,setResult,result}) => {
    const [lockedOperator,setLockedOperator]=useState(['',false])
    const [isCalculated,setIsCalculated]=useState(false);
    var res;
    
    const calculate=(val)=>{
        console.log("Calculating");        
        switch (lockedOperator[0]||val){
            case '+':
                res=parseFloat(value)+parseFloat(result)
                setResult(res)
                setvalue(res)
                console.log(res)
                break;
            case '-':
                res=parseFloat(value)-parseFloat(result)
                setResult(res)
                setvalue(res)
                console.log("Result"+res)
                break;
            case '/':
                res=parseFloat(value)/parseFloat(result);
                setResult(res);
                setvalue(res)
                console.log(res)
                break;
            case '*':
                res=parseFloat(value)*parseFloat(result)
                console.log(res)
                setResult(res);
                setvalue(res)
                break;
            case '%':
                res=parseFloat(result)/100;
                console.log(res)
                setResult(res);
                setvalue(res)
                break;
                default:       
                break;            
            }        
        setLockedOperator([val,false])
        setIsCalculated(true);
        
    }

    function changeResult(num){
        if(isCalculated){
           setResult(num);
           console.log("if")
           setIsCalculated(false);
          }else{
            setResult(()=>result[0]==='0'?num:result+num)
            console.log("else")
        }
    }

    const clickHandler=(e)=>{         
        switch(e.target.value){
            case '1':
                if(lockedOperator[0]!==''){
                    setLockedOperator([lockedOperator[0],true]);
                    console.log("reset Result")
                }
                changeResult('1');
                break;
            case '2':
                if(lockedOperator[0]!=='')
                setLockedOperator([lockedOperator[0],true]);
                changeResult('2');
                break;
            case '3':
                if(lockedOperator[0]!=='')
                setLockedOperator([lockedOperator[0],true]);                
                changeResult('3');
                break;
            case '4':
                if(lockedOperator[0]!=='')
                setLockedOperator([lockedOperator[0],true]);                                
                changeResult('4');
                break;
            case '5':
                if(lockedOperator[0]!=='')
                setLockedOperator([lockedOperator[0],true]);     
                changeResult('5');
                break;
            case '6':
                if(lockedOperator[0]!=='')
                setLockedOperator([lockedOperator[0],true]);
                changeResult('6');
                break;
            case '7':
                if(lockedOperator[0]!=='')
                setLockedOperator([lockedOperator[0],true]);
                changeResult('7');
                break;
            case '8':
                if(lockedOperator[0]!=='')
                setLockedOperator([lockedOperator[0],true]);
                changeResult('8');
                break;
            case '9':
                if(lockedOperator[0]!=='')
                setLockedOperator([lockedOperator[0],true]);
                changeResult('9');
                break;
            case '0':
                if(lockedOperator[0]!=='')
                setLockedOperator([lockedOperator[0],true]);
                // setResult(()=>result[0]==='0'?'0':result+'0');
                changeResult('0');
                break;

            case '.':
                setResult(result+'.');
                break;
            case '+/-':
                var sign=result[0]!=='-'?'-'+result:result.slice(1);
                console.log(sign);
                setResult(sign)                    
                break;
            
            case 'AC':
                setvalue(['0']);
                setLockedOperator(['',false])
                setResult('0');
                break;
            case '+':
                setLockedOperator(['+',false])                             
                console.log("+ Clicked")
                if(lockedOperator[1]){                    
                    calculate('+');
                }else{      
                    console.log("+ Clicked")                         
                    setvalue(result);
                    setResult('0');                    
                }               
                break;
            case '-':
                setLockedOperator(['-',false])                
                if(lockedOperator[1]){                    
                    calculate('-');
                }else{      
                    console.log("- Clicked")                         
                    setvalue(result);
                    setResult('0'); 
                }                
                break;    
            case 'X':
                setLockedOperator(['*',false])                
                               
                               
                if(lockedOperator[1]){                    
                    calculate('*');
                }else{      
                    console.log("* Clicked")                         
                    setvalue(result);
                    setResult('0'); 
                }                
                break;
            case '/':                
                setLockedOperator(['/',false])
                if(lockedOperator[1]){                    
                    calculate('/');
                }else{      
                    console.log("/ Clicked")                         
                    setvalue(result);
                    setResult('0'); 
                }               
                break;
            case '%':  
                setLockedOperator(['%',true])   
                calculate('%');                
                setvalue(result)
                break;
            case '=':                
                calculate('=');
                break;
            default:
                break;
        }
    }



    return (
    <>
        <div className="row">
            <div className="col-md-3  border border-dark component-button">
                <button  value="AC" onClick={clickHandler}>AC</button>
            </div>
            <div className="col-md-3  border border-dark component-button">
                <button value="+/-" onClick={clickHandler}>+/-</button>
            </div>
            <div className="col-md-3 border border-dark component-button">
                <button value="%" onClick={clickHandler}>%</button>
            </div>
            <div className="col-md-3 orange-button orange border border-dark component-button">
                <button value="/" onClick={clickHandler}>/</button>
            </div>
        </div>
        <div className="row">
            <div className="col-md-3  border border-dark component-button">
                <button value="7" onClick={clickHandler}>7</button>
            </div>
            <div className="col-md-3  border border-dark component-button">
                <button value="8" onClick={clickHandler}>8</button>
            </div>
            <div className="col-md-3 border border-dark component-button">
                <button value="9" onClick={clickHandler}>9</button>
            </div>
            <div className="col-md-3 orange-button orange border border-dark component-button">
                <button value="X" onClick={clickHandler}>X</button>
            </div>
        </div>
        <div className="row">
            <div className="col-md-3  border border-dark component-button">
                <button value="4" onClick={clickHandler}>4</button>
            </div>
            <div className="col-md-3  border border-dark component-button">
                <button value="5" onClick={clickHandler}>5</button>
            </div>
            <div className="col-md-3 border border-dark component-button">
                <button value="6" onClick={clickHandler}>6</button>
            </div>
            <div className="col-md-3 orange-button orange border border-dark component-button">
                <button value="+" onClick={clickHandler}>+</button>
            </div>
        </div>
        <div className="row">
            <div className="col-md-3  border border-dark component-button">
                <button value='1' onClick={clickHandler}>1</button>
            </div>
            <div className="col-md-3  border border-dark component-button">
                <button value="2" onClick={clickHandler}>2</button>
            </div>
            <div className="col-md-3 border border-dark component-button">
                <button value="3" onClick={clickHandler}>3</button>
            </div>
            <div className="col-md-3 orange-button orange border border-dark component-button">
                <button value="-" onClick={clickHandler}>-</button>
            </div>
        </div>
        <div className="row">
            <div className="col-md-6  border border-dark component-button">
                <button value="0" onClick={clickHandler}>0</button>
            </div>
            <div className="col-md-3 border border-dark component-button">
                <button value="." onClick={clickHandler}>.</button>
            </div>
            <div className="col-md-3 orange-button orange border border-dark component-button">
                <button value="=" onClick={clickHandler}>=</button>
            </div>
        </div>
            
    </>

    );
}
export default Keyboard;