import { useEffect, useRef } from 'react'

export default function useRenderCount() {
  const isFirstUpdate = useRef(true)
  const count = useRef(1)

  // This wil run on every re-render cause there is no dependencies.
  useEffect(() => {
    // Prevents adding 2 to the count on the first re-render.
    if (isFirstUpdate.current) {
      isFirstUpdate.current = false
    } else {
      count.current++
    }
  })

  return count.current
}
