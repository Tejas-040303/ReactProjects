import { useState } from 'react'
import './App.css'
import CommentForm from './CommentForm'
import Comment from './Comment'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Comment/>
    </>
  )
}

export default App
