import { useState } from 'react'
import Navbar from './Components/Navbar/Navbar'
import { AiFillAliwangwang } from "react-icons/ai";

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Navbar />
    </>
  )
}

export default App
