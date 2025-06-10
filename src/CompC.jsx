import React,{useContext} from "react";
import {userCon} from './CompA.jsx'

function CompC()
{
const u=useContext(userCon);
    return(
        <div style={{border:"solid 5px"}}>
        <h1>Comp C</h1>
        <p>Bye {u}</p>
       </div>
    );
}
export default CompC
