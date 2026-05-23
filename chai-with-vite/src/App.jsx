import { useState } from 'react'
import './App.css'



function App() {
  const [counter, setCounter]= useState(0);

  // let counter = 15;
  const addValue = () => {
    // console.log("clicked ", counter)
    // counter += 1
    if (counter === 20){
      setCounter(20)

    }else{
    setCounter(counter + 1)
    }
    // if (counter === 20 ? setCounter(20):setCounter(counter + 1))
  }
  const removeValue = () => {
    // console.log("removed ", counter)
    // counter += 1
    if (counter === 0) {
      setCounter(0)
    }else{
      setCounter(counter-1)

     }
    // if (counter === 0 ? setCounter(0) : setCounter(counter - 1))
  }


  return (
    <>
     <h1>Chai Aur React </h1>
     <h2>Counter value : {counter}</h2>
     <button onClick={addValue}> Add value </button>
     <br />
     <button onClick={removeValue}>Remove value </button>
    </>
  )
}

export default App
