import { useState, useEffect, useCallback, useRef} from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [length, setLength] = useState(8)
  const [numberAllowed, setnumberAllowed] = useState(false)
  const [characterAllowed, setcharacterAllowed] = useState(false)
  const [password, setPassword] = useState("")

  const passwordRef = useRef(null)

  const passwordGenerator = useCallback(() => {
    let pass = ""
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"

    if(numberAllowed) str += "0123456789"
    if(characterAllowed) str += "@#$%&*_+!"

    for(let i = 1; i <= length; i++){
      let char = Math.floor (Math.random() * str.length + 1)
      pass += str.charAt(char)
    }

    setPassword(pass)

  }, [length, numberAllowed, characterAllowed, setPassword])

  const copyPasswordToClipboard = useCallback (() => {
    passwordRef.current?.select();
    passwordRef.current?.setSelectionRange(0, 100)
    window.navigator.clipboard.writeText(password)
  }, [password])

  useEffect(()=> {
    passwordGenerator()
  }, [length, numberAllowed, characterAllowed, passwordGenerator])


  return (
      <div className='w-full max-w-2xl h-64 mx-auto py-6 shadow-md rounded-lg px-6 my-12 text-orange-500 bg-gray-700'>
        <h1 className='text-white text-2xl text-center my-4 p-3'>Password Generator</h1>
        <div className='flex shadow rounded-lg overflow-hidden mb-5'>
          <input type="text"
            value={password}
            className='outline-none w-full py-3 px-4'
            placeholder='password'
            readOnly
            ref={passwordRef}
          />
          <button onClick = {copyPasswordToClipboard} className='outline-none bg-blue-500 text-white px-3 py-0.5 shink-0'>Copy</button>
        </div>

        <div className='flex text-2xl gap-x-2'>
          <div className='flex items-center gap-x-1 '>
            <input type="range"
            
              min={6}
              max={100}
              value={length}
              className='cursor-pointer'
              onChange={(e) => {setLength(e.target.value)}}

            /> 
            <label> Length: {length} </label>
          </div>

          <div className='flex items-center gap-x-1'>
            <input 
              type="checkbox"
              className='w-5 h-5'
              defaultChecked={numberAllowed}
              id='numberInput'
              onChange={() => {
                setnumberAllowed((prev) => !prev);
              }}
            />

             <label htmlFor="numberInput">Numbers</label>
          </div>

            <div className='flex items-center gap-x-1'>
            <input 
              type="checkbox"
              className='w-5 h-5'
              defaultChecked={characterAllowed}
              id='characterInput'
              onChange={() => {
                setcharacterAllowed((prev) => !prev);
              }}
            />

             <label htmlFor="characterInput">Characters</label>
          </div>

        </div>
        
      </div>
  )
}

export default App
