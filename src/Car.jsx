import React, { useState } from 'react';

function Car()
{
    const [car,setCar]=useState({
        year:2024,
        name:"Ford",
    });

    function yr(event)
    {
        //spread opertaor
        setCar(c=>({...c,year : event.target.value}));
    }
    function na(event){
        setCar(c=>({...c,name : event.target.value}));
    }
    return(<div>
    <p> Fav car is : {car.name} made in {car.year}</p>
    <input type="number" placeholder="Enter year"  onChange={yr}/><br></br>
    <input onChange={na}  placeholder="Enter name"/><br></br>
    </div>);
}

export default Car
