import { useState } from 'react'
import useEventListener from '../../17-13-useEventListener/src/useEventListener.jsx'

export default function useWindowSize() {
  const [windowSize, setWindowSize] = useState({
    width: window.innerWidth,
    height: window.innerHeight
  })

  useEventListener('resize', () => {
    setWindowSize({ width: window.innerWidth, height: window.innerHeight })
  })

  return windowSize
}
