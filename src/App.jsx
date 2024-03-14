import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  console.log("hello world")

  // comment
  // another comment

  return (
    <>
      <h1>New Project</h1>
      <nav>
        <a href="">Home</a>
        <a href="">about</a>
        <a href="">skills</a>
        <a href="">projects</a>
      </nav>
    </>
  )
}

export default App
