import React,{useState} from 'react';

function Counter()
{
    const [count,setCount]=useState(0);
    const styles={
        fontSize:"2em",
        color:"red",
        textAlign:"center",

    };

    const sty={
        margin:"10px",
    };

    const addition=()=>{
        //updater function (c=>...)
        //where c represent previous state 
        //not current state
        setCount(c=>c+1);
    };

    const reseting=()=>{
        setCount(0);
    };
    const subtraction=()=>
    {
        setCount(c=>c-1);
    };

    return(
        <div style={styles}>
            <p>{count}</p>
            <button   style={sty} onClick={addition}>Increment</button>
            <button   style={sty} onClick={reseting}>Reset</button>
            <button   style={sty} onClick={subtraction}>Decrement</button>

        </div>
    );

}
export default Counter