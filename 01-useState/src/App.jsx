import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  function changeCount(amount) {
    setCount((prevCount) => prevCount + amount)
  }

  function resetCount() {
    setCount(0)
  }

  return (
    <>
      <button onClick={() => changeCount(-1)}>-</button>
      <span>{count}</span>
      <button onClick={() => changeCount(1)}>+</button>
      <button onClick={() => resetCount()}>Reset</button>
    </>
  )
}

export default App
