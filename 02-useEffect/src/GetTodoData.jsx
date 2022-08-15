import React, { useState, useEffect } from 'react'

function GetTodoData() {
  const [resourceType, setResourceType] = useState('posts')
  const [items, setItems] = useState([])

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/${resourceType}`)
      .then((response) => response.json())
      .then((json) => setItems(json))
  }, [resourceType])

  return (
    <>
      <div>
        <button onClick={() => setResourceType('posts')}>Posts</button>
        <button onClick={() => setResourceType('users')}>Users</button>
        <button onClick={() => setResourceType('comments')}>Comments</button>
      </div>
      <h1>{resourceType}</h1>
      {items.map((item, index) => {
        console.log(item)
        return <div key={index}>{JSON.stringify(item, null, 2)}</div>
      })}
    </>
  )
}

export default GetTodoData
