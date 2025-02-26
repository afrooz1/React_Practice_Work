import { use } from 'react'
import { useState, useCallback, useEffect, useRef } from 'react'


function App() {
  const [lenth, setLenth] = useState(8)
   const [number, setNumber] = useState(true)
   const [charac, setCharac] = useState(true)
   const [password, setPassword] = useState('')

   const passwordRef = useRef(null)


   const passwordGenerator = useCallback(() => {
    let str = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ'
    let num = '0123456789'
    let sym = '!@#$%^&*()_+'
    
    let pass = ''
    if (number) str += num
    if (charac) str += sym
for (let i = 0; i < lenth; i++) {
  pass += str.charAt(Math.floor(Math.random() * str.length))
}
setPassword(pass)
}, [lenth, number, charac, setPassword])
    
const copyPasswordToClipboard = useCallback(() => {
  passwordRef.current?.select();
  passwordRef.current?.setSelectionRange(0, 100) 
  window.navigator.clipboard.writeText(passwordRef.current.value)
},
[password]  )

useEffect(() => {
  passwordGenerator()
}, [lenth, number, charac, passwordGenerator])


  
  return (
   <>
  <div className='w-full max-w-md mx-auto shadow-md rounded-lg px-4 py-3 my-8 bg-gray-800 text-orange-500'>
    <h1 className='text-white text-center my-3'>Passsword Generator</h1>

    <div className='flex shadow rounded-lg overflow-hidden mb-4'>
      <input type="text" value={password} className='outline-none w-full py-1 px-3' placeholder='Password'
      readOnly ref={passwordRef} />
      <button className='outline-none bg-blue-700 text-white px-3 py-0.5 shrink-0
     ' onClick={copyPasswordToClipboard}>Copy</button>
    </div>
    <div className='flex text-sm gap-x-2'>
      <div className='flex items-center gap-x-1'>
        <input type="range"min={6} max={100} value={lenth} className='cursor-pointer' onChange={(e) => {setLenth(e.target.value)}}/>
        <label>Length:</label>
      </div>

      <div className='flex items-center gap-x-1'>
        <input type="checkbox" defaultChecked={number} id='numberInput'  
        className='cursor-pointer' onChange={(e) => {setNumber((prev)=> !prev);
        }}/>
        <label>Number</label>
      </div>

      <div className='flex items-center gap-x-1'>
        <input type="checkbox" defaultChecked={charac} id='numberInput'  
        className='cursor-pointer' onChange={(e) => {setCharac((prev)=> !prev);
        }}/>
        <label>Characters</label>
      </div>

    </div>
  </div>
    </>
  )
}

export default App
