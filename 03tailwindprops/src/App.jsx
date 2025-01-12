import { useState } from 'react'

import './App.css'
import Card from './components/Card'

function App() {


  let myObj= {
    name: 'John',
    age: 25
  } 

  return (
    <>
      <h1 className='bg-green-400 text-black p-4 rounded-xl'>Tailwind css</h1>
      <Card  username="chaiaurcode"/>
      <Card  username="Afrooz"/>
    </>
  )
}

export default App
