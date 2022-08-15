import React from 'react'
import ReactDOM from 'react-dom/client'
import WindowSizeList from './WindowSizeList'
import GetTodoData from './GetTodoData'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <WindowSizeList />
    <GetTodoData />
  </React.StrictMode>
)
