import React, { useState, useEffect, useRef } from 'react'

function App() {
  const [name, setName] = useState('Christian')
  const previousName = useRef(null)

  useEffect(() => {
    previousName.current = name
  }, [name])

  return (
    <>
      <input value={name} onChange={(e) => setName(e.target.value)} />
      <div>
        {previousName.current} => {name}
      </div>
    </>
  )
}

export default App
