import React,{useState} from 'react';

function Colorchange()
{
    const [col,setCol]=useState("None");


    function handle1(event){
        setCol(event.target.value);
    };
    return(
        <div style={{textAlign:'center'}}>
            <h2>Color Picker</h2>
            <div className="display" style={{backgroundColor:col}}><p>Selected color:{col}</p></div>
            <h3>Select a Colour:</h3>
            <input type="color" onChange={handle1}></input>

        </div>
    );
}
export default Colorchange