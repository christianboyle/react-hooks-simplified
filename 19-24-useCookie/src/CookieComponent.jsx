import useCookie from './useCookie'

export default function CookieComponent() {
  const [value, update, remove] = useCookie('name', 'Christian')

  return (
    <>
      <div>{value}</div>
      <button onClick={() => update('Patrick')}>Change Name To Patrick</button>
      <button onClick={remove}>Delete Name</button>
    </>
  )
}
