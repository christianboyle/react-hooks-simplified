import React, { useDebugValue, useState } from 'react'

function useExampleHook() {
  const [b, setB] = useState(true)

  useDebugValue(b ? 'Rocket is Active' : 'Rocket is Inactive')
  return [b, setB]
}

export default function App() {
  useExampleHook()
  return <div />
}
