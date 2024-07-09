
import React, { useState } from 'react';
import './App.css'
export default function Ex1(props){
  const [name , setName]=useState('')
  const [age , setAge]=useState(0);
  function Click(){
    alert('buttonClo')
    return(
   
      <>
      <h1> hellp</h1>
      </>
     )
  }
  function Button(event){

   event.preventDefault();
   console.log(`${name}  ${age}`);
   
  }
  function OnAgeChange(event){
    setAge(event.target.value);
  }
 function OnNameChange(event){
  setName(event.target.value);
 }
  return (
    <>
    <form className="ex1" onSubmit={Button}>
    <label htmlFor='name'>user name </label>
    <input value={name} name='name' onChange={OnNameChange} />
    <label htmlFor='age'>Age</label>
    <input type='number' value={age} name='age' onChange={OnAgeChange}/>
    <button onClick={Click}>Add user</button>
      
    </form>
   
    </>
  )
}


// function Square() {
//   const [value ,setValue]=useState()
//   function click(){
//     setValue('x')
//   }
//   return (
//     <>
//     <button 
//     onClick={click}
//     style={{
//       height:20, 
//       width :20,
//       backgroundColor:'gray'

//     }}
//     >{value}</button>
    
//     </>
//   );
// }
//  export default function Bord() {
//     return (
//       <div className='xx'>
//         <div>
//         <Square />
//         <Square />
//         <Square />
//         </div>
//         <div>
//         <Square />
//         <Square />
//         <Square />
//         </div>
//         <div>
//         <Square />
//         <Square />
//         <Square />
//         </div>
//       </div>
//     );
// }