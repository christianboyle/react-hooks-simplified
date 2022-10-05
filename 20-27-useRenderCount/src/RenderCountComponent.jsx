import useRenderCount from './useRenderCount'
import useToggle from '../../15-1-useToggle/src/useToggle'

export default function RenderCountComponent() {
  const [boolean, toggle] = useToggle(false)

  const renderCount = useRenderCount()

  return (
    <>
      <div>{boolean.toString()}</div>
      <div>{renderCount}</div>
      <button onClick={toggle}>Toggle</button>
    </>
  )
}
