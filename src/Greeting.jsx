

function Greeting(props)
{
        if(props.isLoggedIn)
        {
            return <h2> Welcome {props.name} </h2>
        }
        else{
            return <h2> Please log in </h2>
        }
}
export default Greeting

/*
  <Greeting isLoggedIn={true} name="brocode"></Greeting>
  <Greeting isLoggedIn={false}></Greeting>
  */