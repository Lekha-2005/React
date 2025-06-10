import React,{useState} from 'react';

function MyComponent()
{
    const [name,setName]=useState("Guest");
    const [payment,setPayment]=useState("");
    const [ship,setShip]=useState("");
    function handle(event)
    {
        setName(event.target.value);
    }
    function handle2(event){
        setPayment(event.target.value);
    }
      function handle3(event){
        setShip(event.target.value);
    }
    return (
        <div>
            <input onChange={handle}/>
            <p>Name :{name}</p>
            <select value={payment} onChange={handle2}>
                <option value="">Select an option</option>
                <option> Visa</option>
                <option value="Mvisa"> MVisa</option>
                <option> GVisa</option>
            </select>
            <p>Payment :{payment}</p>
            <label>
                <input type="radio" value="Pick uup" name="he"
                onChange={handle3}/> Pick up
            </label><br></br>
             <label>
                <input type="radio" value="Delivery" name="he"
                onChange={handle3}/> Delivery
            </label>
            <p> Shipping :{ship}</p>
        </div>
    )
}

export default MyComponent
