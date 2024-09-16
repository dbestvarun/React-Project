import { useState } from 'react'
import './App.css'

function App() {
  const [color, setColor] = useState("black")
  return (
    <div className='w-full h-screen '
    style={{backgroundColor: color}}
    >
      <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2">
          <div className='flex flex-wrap justify-center bg-white gap-3 rounded-2xl p-4'>
            <button className='p-3 rounded-2xl'
            style={{backgroundColor: "red", color: "white"}}
            onClick={()=> setColor("red")}>
              Red
            </button>
            <button className='p-3 rounded-2xl'
            style={{backgroundColor: "green", color:"white"}}
            onClick={()=> setColor("green")}>
              Green
            </button>
            <button className='p-3 rounded-2xl'
            style={{backgroundColor: "blue", color:"white"}}
            onClick={()=> setColor("blue")}>
              Blue
            </button>
            <button className='p-3 rounded-2xl'
            style={{backgroundColor: "beige"}}
            onClick={()=> setColor("beige")}>
              Beige
            </button>

          </div>
      </div>
    </div>
  )
}

export default App
