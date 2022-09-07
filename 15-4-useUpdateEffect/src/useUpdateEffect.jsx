import { useEffect, useRef } from 'react'

export default function useUpdateEffect(callback) {
  const firstRenderRef = useRef(false)

  useEffect(() => {
    if (firstRenderRef.current) {
      return callback()
    } else {
      firstRenderRef.current = true
    }
  })

  useEffect(() => {
    return () => {
      firstRenderRef.current = false
    }
  }, [])
}
