import useEventListener from '../../17-13-useEventListener/src/useEventListener'
import useTimeout from '../../15-2-useTimeout/src/useTimeout'
import useEffectOnce from '../../18-20-useEffectOnce/src/useEffectOnce'

export default function useLongPress(ref, cb, { delay = 250 } = {}) {
  const { reset, clear } = useTimeout(cb, delay)
  useEffectOnce(clear)

  useEventListener('mousedown', reset, ref.current)
  useEventListener('touchstart', reset, ref.current)

  useEventListener('mouseup', clear, ref.current)
  useEventListener('mouseleave', clear, ref.current)
  useEventListener('touchend', clear, ref.current)
}
