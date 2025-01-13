import React, { useState } from 'react'

function App() {
  const [color, serColor] = useState("olive")

  return (
    <>
       <div className='w-full h-screen duration-200'
       style={{backgroundColor:color}}>
        
        <div className='fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2 '>
          <div className="flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-3xl">
            <button onClick={() => serColor("red")} className=' outline-none px-4 py-1 rounded-full text-white shadow-large' style={{backgroundColor:"red"}}>Red</button>

            <button onClick={() => serColor("yellow")}  className=' outline-none px-4 py-1 rounded-full text-white shadow-large' style={{backgroundColor:"yellow"}}>Yellow</button>

            <button onClick={() => serColor("blue")}  className=' outline-none px-4 py-1 rounded-full text-white shadow-large' style={{backgroundColor:"blue"}}>Blue</button>

            <button onClick={() => serColor("green")}  className=' outline-none px-4 py-1 rounded-full text-white shadow-large' style={{backgroundColor:"green"}}>Green</button>
          </div>
        </div>

       </div>
     
    </>
  )
}

export default App
