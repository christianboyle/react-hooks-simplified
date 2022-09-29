import { useRef, useState } from 'react'
import useClickOutside from './useClickOutside'

export default function ClickOutsideComponent() {
  const [open, setOpen] = useState(false)
  const [justOpened, setJustOpened] = useState(false)
  const modalRef = useRef()

  useClickOutside(modalRef, () => {
    if (justOpened) {
      setJustOpened(false)
      return
    }
    if (open) setOpen(false)
  })

  return (
    <>
      <button
        onClick={() => {
          setOpen(true)
          setJustOpened(true)
        }}
      >
        Open
      </button>
      {open && (
        <div
          ref={modalRef}
          style={{
            backgroundColor: 'blue',
            color: 'white',
            width: '100px',
            height: '100px',
            position: 'absolute',
            top: 'calc(50% - 50px)',
            left: 'calc(50% - 50px)'
          }}
        >
          <span>Modal</span>
        </div>
      )}
    </>
  )
}
