import React,{useState} from 'react';
function MyComp()
{
    const [name,setName]=useState("Guest");
    const [age,setAge]=useState(0);

    const updateAge =()=>
    {
        setAge(10);
    };

    const update = () => {
        setName("Gokul");
    };
    return(
        <div>
            <p>Name : {name} </p>
            <button onClick={update}>SetName</button>
            <p> Age: {age}</p>
            <button onClick={updateAge}>SetAge</button>
        </div>
    );
}
export default MyComp