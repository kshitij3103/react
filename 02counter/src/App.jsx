import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  let [counter,setCounter]=useState(15)
  // let counter=5;
  const addvalue=()=>{
    counter=counter+1;
 
    setCounter(counter)
    console.log("clicked", {counter});
    
    

    
  }
  const decvalue=()=>{
     counter=counter-1;
 
    setCounter(counter)
    console.log("clicked", {counter});

  }

  let [count, setCount] = useState(0)

  return (
    <>
      <h1> chai aur react</h1>
      <h2> Counter Value : {counter}</h2>
      <button onClick={addvalue}> Add Val {counter}</button>
      <br></br><br></br>
      <button onClick={decvalue}> Dec Val{counter}</button>
       
    </>
  )
}

export default App
