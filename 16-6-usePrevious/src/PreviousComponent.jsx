import { useState } from 'react'
import usePrevious from './usePrevious'

export default function PreviousComponent() {
  const [count, setCount] = useState(0)
  const [name, setName] = useState('Christian')
  const previousCount = usePrevious(count)

  return (
    <div>
      <div>
        {count} - {previousCount}
      </div>
      <div>{name}</div>
      <button onClick={() => setCount((currentCount) => currentCount + 1)}>
        Increment
      </button>
      <button onClick={() => setName('Rambo')}>Change Name</button>
    </div>
  )
}
