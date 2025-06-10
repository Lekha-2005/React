import React,{useState} from "react";

function Todo()
{
    const[tasks,setTasks]=useState([]);
    const[newTask,setNewTask]=useState("");

    const css={
        margin:"10px",
        backgroundColor:"Red",
    };
    const css1={
        margin:"10px",
        backgroundColor:"Blue",
    };
    const css2={
        margin:"10px",
        backgroundColor:"Violet",
    };

    const css3={
        margin:"10px",
        backgroundColor:"Green",
    };

    function handleinput(event)
    {
        setNewTask(event.target.value);
    }
    function Add()
    {
        if(newTask.trim() !==""){
        setTasks(t=>[...t,newTask]);
        setNewTask("");
        }
    }
    function handledel(index){
        const updtaed=tasks.filter((_,i)=> i!== index);
        setTasks(updtaed);
    }

    function handleup(index)
    {
        if(index>0){
        const updated=[...tasks];
        [updated[index],updated[index-1]]=[updated[index-1],updated[index]];
        setTasks(updated);
        }
    }

    function handledown(index)
    {
        if(index < tasks.length-1){
        const updated=[...tasks];
        [updated[index],updated[index+1]]=[updated[index+1],updated[index]];
        setTasks(updated);
        
        }
    }
    return(
        <div style={{textAlign:'center' , margin: 'auto' , maxWidth : '450px'}}>
            <h2> To-Do List</h2>
            <input value={newTask} type="text" onChange={handleinput}></input>
            <button onClick={Add} style={css3}>Add </button>
            <ul>
                {tasks.map((task,index)=>
                <li key={index}>
                <span>{task} </span>
                <button style={css} onClick={()=>handledel(index)}>Delete</button>
                <button style={css1} onClick={()=>handleup(index)}>MOVE-UP</button>
                <button style={css2} onClick={()=>handledown(index)}>MOVE_DOWN</button>
                </li>
                )}
               
            </ul>
        </div>
    );
}
export default Todo