import { useState } from "react"

function App() {
  const [color, setColor] = useState("olive")
  return (
    <>
      <div className="w-full screen-h duration-200" style={{ backgroundColor: color }} >
        <div className="fixed flex fex-wrap justify-center bottom-12 inset-x-0 px-4 py-1">
          <div className="flex flex-wrap justify-center gap-2 shadow-lg bg-white px-3 py-2 rounded-full">
            <button 
            onClick={() => setColor("red")}
            className="outline-none px-4 py-1 rounded-full shadow-sm " 
            style={{backgroundColor:"red"}}>Red</button>
            <button 
            onClick={() => setColor("green")}
            className="outline-none px-4 py-1 rounded-full shadow-sm " 
            style={{backgroundColor:"Green"}}>Green</button>
            <button 
            onClick={() => setColor("blue")}
            className="outline-none px-4 py-1 rounded-full shadow-sm " 
            style={{backgroundColor:"Blue"}}>Blue</button>
            <button 
            onClick={() => setColor("yellow")}
            className="outline-none px-4 py-1 rounded-full shadow-sm " 
            style={{backgroundColor:"Yellow"}}>Yellow</button>
            <button 
            onClick={() => setColor("cyan")}
            className="outline-none px-4 py-1 rounded-full shadow-sm " 
            style={{backgroundColor:"Cyan"}}>Cyan</button>
            <button 
            onClick={() => setColor("magenta")}
            className="outline-none px-4 py-1 rounded-full shadow-sm " 
            style={{backgroundColor:"Magenta"}}>Magenta</button>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
