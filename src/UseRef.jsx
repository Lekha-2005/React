import React,{useRef, useEffect, useState} from "react";

function UseRef()
{
    const ans=useRef(null);
    const [count,setCount]=useState(0);

    function clickMe()
    {
        ans.current.focus();
        ans.current.style.backgroundColor="violet";
    }
    useEffect(()=>{
        console.log("comp render");
    })

    function clickst()
    {
        setCount(count+1);
    }


    return(<>
    <button onClick={clickMe}>Click Me</button>
    <input ref={ans}></input>

    <button onClick={clickst}>Click Me</button>
    <input value={count}></input>

    </>)
}
export default UseRef



/*
React re-runs the component function to get a new virtual DOM.

React compares the old virtual DOM vs. new one (diffing algorithm).

React only updates the parts of the real DOM that changed (efficiently).
*/


/*
useRef updates its .current value directly, not via state hooks 
— so React has no reason to update the DOM.
*/