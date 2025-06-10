
function Student(props)
{
    return(
        <div className="stud">
            <p>Name:{props.name}</p>
            <p>Age:{props.age}</p>
            <p> Student:{props.isStudent ? "Yes" : "No"}</p>
        </div>
    );
}
//its not working
//so use Student({name = "Guest", age = 0, isStudent = false}) instead of props
Student.defaultProps = {
  name: "Guest",
  age: 0,
  isStudent: false,
}



export default Student

/*
.stud{
    background-color: aquamarine;
    font-family:cursive;
    font-size: 2em;
    padding:10px;
    border: 1px dotted black;
    margin-bottom: 10px;
}


in app.jsx

  <>
  <Student name="Vicky" age={25} isStudent={false}/>
  <Student name="Lekha" age={20} isStudent={true}/>
  <Student/>
  </>

*/