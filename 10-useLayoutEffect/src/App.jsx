import React, { useState, useEffect } from 'react'

function App() {
  const [count, setCount] = useState(0)

  useEffect(() => {
    console.log(count)
  }, [count])

  return (
    <>
      <button onClick={() => setCount((c) => c + 1)}>Increment</button>
      <div>{count}</div>
    </>
  )
}

export default App
