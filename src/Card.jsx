import ReactPic from './assets/react.svg'

function Card()
{
    return(
        <div className ="card">
            <img className="card-im" src={ReactPic} alt="pic"></img>
            <h2 className="title"> Lekha</h2>
            <p className="text">CSE-Graduate in RMD engineering college</p>
        </div>
    );
}

export default Card

/*
.card{
    border:1px solid rgb(171, 32, 32);
    border-radius:10px;
    box-shadow:5px 5px 5px hsla(0,0%,0%,0%,0.1);
    padding:20px;
    margin:10px;
    text-align:center;
    max-width:250px;
    display:inline-block;
}

.card .card-im{
    max-width: 60%;
    height:auto;
    border-radius:50%;
    margin-bottom: 10px;
}

.card .title{
    font-family: Arial, Helvetica, sans-serif;
    margin:0px;
    color: rgb(171, 32, 32);
}

.card .text{
    font-family: Arial, Helvetica, sans-serif;
}
*/