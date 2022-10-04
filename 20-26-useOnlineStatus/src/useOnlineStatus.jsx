import { useState } from 'react'
import useEventListener from '../../17-13-useEventListener/src/useEventListener'

export default function useOnlineStatus() {
  const [online, setOnline] = useState(navigator.onLine)

  useEventListener('online', () => setOnline(navigator.onLine))
  useEventListener('offline', () => setOnline(navigator.onLine))

  return online
}
