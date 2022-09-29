import useEventListener from '../../17-13-useEventListener/src/useEventListener.jsx'

export default function useClickOutside(ref, cb) {
  useEventListener(
    'click',
    (e) => {
      if (ref.current == null || ref.current.contains(e.target)) return
      cb(e)
    },
    document
  )
}
