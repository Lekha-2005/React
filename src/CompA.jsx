import React,{useState , createContext} from 'react';
import CompB from './CompB.jsx';

export const userCon =createContext();
function CompA()
{
const [user,setUser]=useState("broCode");

    return(
        <div style={{border:"solid 5px"}}>
        <h1>Comp A</h1>
        <p>Hello {user}</p>
        <userCon.Provider value={user}> 
            <CompB />
            </userCon.Provider>
        
        </div>
    );
}
export default CompA
