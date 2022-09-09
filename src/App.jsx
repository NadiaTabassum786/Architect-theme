 import React from 'react'
 import Navbar from './component/navbar'
 import Header from './component/header'
 import First from './component/first'
import Second from './component/sec'
import Thir from './component/thir'
import Forth from './component/forth'
import Foot from './component/footer'
 export default function App() {
   return (
     <>
     <Navbar/>
     <Header/>
     <First/>
     <Second/>
     <div className='flex w-full justify-evenly'> 
     <Thir data={{heading:"John Doe", head:"CEO & Founder"}}/>
     <Thir data={{heading:"Jane Doe", head:"Architect"}}/>
     <Thir data={{heading:"Mike Ross", head:"Architect"}}/>
     <Thir data={{heading:"Mike Ross", head:"Architect"}}/>
     </div>
     <Forth/>
     <Foot/>
     </>
   )
 }
//  %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%% 2nd-task %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
//  ____________________________counter with class components_____________________
// import React from "react";
// export default class App extends React.Component{
//   state={
//     counter:0
//   }
// handelClick=()=>{
// this.counter++
// this.setState({counter:this.state.counter+1})
// }
// handelDel=()=>{
//   this.counter++
//   if(this.state.counter>0){
//     this.setState({counter:this.state.counter-1})
//   }
//   }
//   handelReset=()=>{
//     this.counter++
//     this.setState({counter:0})
//     }
//  render(){ 
//   console.log(this.state);
//    return( 
//     <>
//     <div className="flex flex-col justify-center items-center border-[5px] border-red-500 h-[300px] w-[300px] ml-[200px] mt-[100px] rounded-[50%]">
//     <h1 className="text-4xl mb-[20px] text-red-700"> Counter</h1>
//     <h1 className="text-2xl"> {this.state.counter}</h1>
//     <div className="flex mt-[20px] w-[200px] justify-between">
//     <button  onClick={this.handelClick} className="bg-red-500 hover:bg-red-700 text-white font-bold py-1 px-2 rounded">Add</button>
//     <button  onClick={this.handelDel} className="px-[17px] bg-red-500 hover:bg-red-700 text-white font-bold py-1 px-2 rounded">Del</button>
//     <button  onClick={this.handelReset} className="bg-red-500 hover:bg-red-700 text-white font-bold py-1 px-2 rounded">Reset</button>

//     </div>
   
   
//     </div>
    
//     </>
//    )
//  }
// }
 


//  %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%% 3rd-task %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
//  ____________________________counter with functional components_____________________

// import React,{useState} from 'react'

// export default function App() {
//   const [counter,setcounter]=useState(0)
//   const handleClick=()=>{
//     setcounter(counter+1)
//   }
//   const handleDel=()=>{
//     if(counter>0){
//       setcounter(counter-1)
//     }
//   }
//   const handleReset=()=>{
//       setcounter(0)
//    }
//   return (
//     <>
//       <div className="flex flex-col justify-center items-center border-[5px] border-red-500 h-[300px] w-[300px] ml-[200px] mt-[100px] rounded-[50%]">
//       <h1 className="text-4xl mb-[20px] text-red-700"> Counter</h1>
//       <h1 className="text-2xl"> {counter}</h1>
//       <div className="flex mt-[20px] w-[200px] justify-between">
//       <button  onClick={handleClick} className="bg-red-500 hover:bg-red-700 text-white font-bold py-1 px-2 rounded">Add</button>
//       <button  onClick={handleDel} className="px-[17px] bg-red-500 hover:bg-red-700 text-white font-bold py-1 px-2 rounded">Del</button>
//       <button  onClick={handleReset} className="bg-red-500 hover:bg-red-700 text-white font-bold py-1 px-2 rounded">Reset</button>
//       </div>
//       </div>
//       </>
//   )
// }
//  %%%%%%%%%%%%%%%%%%%%%%%%%%%%%% 4th-task-To-Do List %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%

 
 

