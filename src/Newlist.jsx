import React,{useState} from "react";

function Newlist()
{
    const [foods,setFoods]=useState(['Apple','orange','banana']);
    
    
    function add()
    {
        const newF=document.getElementById("in").value;
        document.getElementById("in").value="";
        setFoods(f=> [...f,newF]);
    }

    function del(index)
    {
        // _ means ignore them
        setFoods(foods.filter((_,i)=> i!= index));
    }
    return(<div>
    <h2>List of Food</h2>
    <ul>
        {foods.map((food,index)=>
        <li key={index} onClick={()=>del(index)}>
        {food}</li>
        )}
    </ul>

    <input id="in" type="text"></input>
    <button onClick={add}>Add Food</button>
    </div>);
}
export default Newlist