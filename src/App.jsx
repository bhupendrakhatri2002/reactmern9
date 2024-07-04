// boiler plate create by rafce
import { useState } from 'react'
import React from 'react'

const App = () => {
// here we write logic of javascript
// note:- function only return 1 ata time what we want to show on screen write inside dive of return
// in react we always use usestate for value or store value not use user define datatype like const let a=5
// seta use for chnage stat of variable and sat is a asyncronous function humesa late chlta hai
// in usestate  firstvalue always used for read only 
// 

// ------------------usestate with and nonparametric function------------------------------------------------
// const [a, seta] = useState(12)
// const changevariable =()=>{
//    seta(15)
// }
// console.log(a)
//   return (
//     <div>
//           <h1 style={{color:"red"}}>Hello this is written div</h1>
//           <h2>{a}</h2>
//           <button onClick={changevariable}>change value</button>
//     </div>
//   )

// wrapperfunction------------------------------use for parametric function-------------------

//   const [a, seta] = useState(12)
// const changevariable =(x)=>{
//    seta(x)
// }
// console.log(a)

// //  const wrapperfunction =()=>{
// //   changevariable(15)
// //  }
// // also use other in onclick --()=>changevariable(value)
// // note :-,parametric ko chlane ke lie ek nn parametric call back function ki jarurat padti hai


//   return (
//     <div>
//           <h1 style={{color:"red"}}>Hello this is written div</h1>
//           <h2>{a}</h2>
//           <button onClick={()=>changevariable(15)}>change value</button>
//     </div>
//   )


// form handling in react---------------------


// ist way to show value of input but isme value kahi store nahi hoti hai -----------------------so use 2way binding
// note:- or isme agar bhut sare elemnt hai form me to hu,e har ek ko target karna padea so compicated
// const submithandler =(e)=>{
//   e.preventDefault()
//   console.log("submitted")
//   // console.log(e.target[0].value)
//   console.log(e.target.name.value)
//   // console.log(e.value)
// }

// return (
//   <div>
//      <form onSubmit={submithandler}>
//       <input type="text" placeholder='enter your name' name='name' />
//       <button>submit</button>
//      </form>
//   </div>
// )




// 2way binding for handling or store form data----------------------------------------------

const [username, setusername] = useState("")
const[names,setnames] =useState([])


const submitHandler =(e)=>{
  e.preventDefault()
  
  const copynames =[...names]
  copynames.push(username)
  setnames(copynames)
  console.log(username)
  setusername("")
}
console.log(names)

 

return(
  <div>

     <form onSubmit={submitHandler}>
      <input type="text" placeholder='enter your name' onChange={(e)=>setusername(e.target.value)} value={username}  />
      <button>submit</button>
     </form>

  </div>
)


}

export default App