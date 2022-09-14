import { useSessionStorage, useLocalStorage } from './useStorage'

export default function StorageComponent() {
  const [name, setName, removeName] = useSessionStorage('name', 'Christian')
  const [age, setAge, removeAge] = useLocalStorage('age', 40)

  return (
    <div>
      <div>
        {name} - {age}
      </div>
      <button onClick={() => setName('John')}>Set Name</button>
      <button onClick={() => setAge(21)}>Set Age</button>
      <button onClick={removeName}>Remove Name</button>
      <button onClick={removeAge}>Remove Age</button>
    </div>
  )
}
