import { useEffect, useRef } from 'react'
import isEqual from 'lodash.isequal'

export default function useDeepCompareEffect(callback, dependencies) {
  const currentDependenciesRef = useRef()

  if (!isEqual(currentDependenciesRef.current, dependencies)) {
    currentDependenciesRef.current = dependencies
  }

  useEffect(callback, [currentDependenciesRef.current])
}
