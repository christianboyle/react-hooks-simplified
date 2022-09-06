import { useEffect } from 'react'
import useTimeout from '../../15-2-useTimeout/src/useTimeout.jsx'

export default function useDebounce(callback, delay, dependencies) {
  const { reset, clear } = useTimeout(callback, delay)
  useEffect(reset, [...dependencies, reset])
  useEffect(clear, [])
}
