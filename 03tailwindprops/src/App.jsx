import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './components/Card.jsx'

function App() {
  const [count, setCount] = useState(0)
  let myObj = {
    username: "Anmol",
    age: 21
  }

  let newArray = [1, 2, 3]

  return (
    <>
      <h1 className='bg-green-400 text-black p-4 rounded-xl mb-4 '>TailWind Test</h1>

      <Card title = "The Sunset"  hashValue = "#photography"/>
      <Card title = "The Moonset"  /> 
    </>
  )
}

export default App
