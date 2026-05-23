import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import  Card from './componemts/Card'

function App() {
  // let myObj={
  //   name: 'Raiha',
  //   age: 22,
  // }

  
  const [count, setCount] = useState(0)

  return (
    <> 
      <h3 className='bg-cyan-300 text-black  p-2 rounded-full'>Assalamualikum Warahamatullah Wabarakatuhu</h3>
      <h1 className='bg-green-400 text-black p-1 rounded-xl mb-3'>Tailwind CSS</h1>
      <Card sM="Raiha" btnText="Click Me"/>
      <Card sM="Naziaat" btnText="Visit Me"/>
      <Card sM="Tohrin" btnText="View Profile → "/>
    </>
  )
}

export default App
