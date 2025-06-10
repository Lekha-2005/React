function Button()
{
    const styles={
    backgroundColor:"hsl(200, 86.90%, 76.10%)",
    cursor: "pointer",
    }
const st={
    marginTop:"20px",
    cursor: "pointer",
}

    //check the console
const handle=(name)=> {
    console.log(`${name} "stop it OUCH!"`);
};
//double click
const handle2= (e)=>{ e.target.textContent = "OUCH !"
};

    return(<>
        <button style={styles} onClick={()=>handle("lekha")}>Click Me</button>
        <br></br>
        <button style={st} onDoubleClick={(e)=> handle2(e)}> Click ME </button>
        </>
    );
}
export default Button