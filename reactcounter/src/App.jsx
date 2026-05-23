import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  const Addvalue = () => {
    if (count === 5){
      setCount(5)
    }else{
      setCount(count + 1)
    }

  }
  const RemoveValue = () => {
    if( count === 0 ){
      setCount(0)
    }else{
    setCount(count - 1)
    }

  }

  return (
    <>
      <h1>Counter App </h1>
      <h3>Counter : {count}</h3>
      <button onClick={Addvalue}>Add Value</button> <br/>
      <button onClick={RemoveValue} >Remove Value</button>
    </>
  )
}

export default App
