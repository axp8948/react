import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './components/Card'

function App() {
  const [description, setDescription] = useState("")
  const [showCard, setShowCard] = useState(false)
  const [isCompleted, setisCompleted] = useState(false)

  function handleClick() {
    if (description.trim() != "")
      setShowCard(true)
    setisCompleted(false)
  }

  function handleOnDone() {
    setisCompleted(true)
    setShowCard(false)
  }

  function handleOnDelete() {
    setShowCard(false)
    setisCompleted(false)
  }

  return (
    <div className='mx-auto w-10/12 min-h-48 bg-cyan-800 text-white py-10 px-10'>
      <h1 className='my-2 text-3xl font-extrabold text-white tracking-tight'>ToDo</h1>
      <input className='border border-gray-300 rounded px-4 py-2 my-4 focus:outline-none focus:ring-2 focus:ring-black-500 text-black'
        type="text"
        placeholder='Enter to do'
        value={description}
        onChange={(e) => setDescription(e.target.value)}

      />
      <button className='bg-blue-500 hover:bg-blue-800 text-white font-semibold py-2 px-4 rounded'
        onClick={handleClick}
      >
        Submit</button>

      <div className='flex justify-between my-3'>
        <div >
          <h2 className='text-2xl font-extrabold text-white tracking-tight my-4'>Tasks List</h2>
          {showCard && !isCompleted && (<Card
            description={description}
            onDelete={handleOnDelete}
            onDone={handleOnDone}
          />)}
        </div>

        <div>
          <h2 className='text-2xl font-extrabold text-white tracking-tight my-4 '>Completed Tasks</h2>
          {isCompleted && <Card description={description}/>}
        </div>
      </div>

    </div>
  )
}

export default App
