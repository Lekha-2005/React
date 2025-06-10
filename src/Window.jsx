import React,{useState,useEffect} from 'react';

function Window()
{
    const [he,setHeight]=useState(window.innerHeight);
    const [we,setWidth]=useState(window.innerHeight);

    useEffect(()=> {
    window.addEventListener("resize",handle);
    },[]);    
    function handle(){
        setHeight(window.innerHeight);
        setWidth(window.innerWidth);
    }

    return(
        <div>
            <h2>Window Height:{he}px</h2>
            <h2>Window Width:{we}px</h2>
            
        </div>
    );
}
export default Window
