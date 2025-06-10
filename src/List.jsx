
function List()
{
const fruits=[
    {id:1,name:"orangle" , cal : 9},
    {id:2,name:"apple", cal:7},
    {id:3,name:"carrot", cal:11},
    {id:4,name:"banana" ,cal:12},
    {id:5,name: "coconut",cal:5}
  ];

//using only array string : use fruits.sort()
//fruits.sort()

//to sort the obj in ascending order
//fruits.sort((a,b)=>a.name.localeCompare(b.name));

//to sort in descending order
//fruits.sort((a,b)=>b.name.localeCompare(a.name));

//to sort numberically
//fruits.sort((a,b)=>a.cal-b.cal);

//descending numeric
//fruits.sort((a,b)=>b.cal-a.cal);

//filtering
/*
const lowfruit=fruits.filter(fruit=> fruit.cal>10);

const listitem= lowfruit.map(ffruit => <li key={ffruit.id}> {ffruit.name}: <b>{ffruit.cal}</b></li>);
*/

const listitem= fruits.map(ffruit => <li key={ffruit.id}> {ffruit.name}: <b>{ffruit.cal}</b></li>);

return(
   fruits.length > 0 ? <ol>{listitem}</ol> : null
);
}


export default List

