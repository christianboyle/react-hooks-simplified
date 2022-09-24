import { useState, useEffect } from 'react'
import useEventListener from '../../17-13-useEventListener/src/useEventListener.jsx'

export default function useMediaQuery(mediaQuery) {
  const [isMatch, setIsMatch] = useState(false)
  const [mediaQueryList, setMediaQueryList] = useState(null)

  useEffect(() => {
    const list = window.matchMedia(mediaQuery)
    setMediaQueryList(list)
    setIsMatch(list.matches)
  }, [mediaQuery])

  useEventListener('change', (e) => setIsMatch(e.matches), mediaQueryList)

  return isMatch
}
