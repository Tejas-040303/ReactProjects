import { useState } from 'react'
import ProductTab from './ProductTab.jsx'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <ProductTab/>
    </>
  )
}

export default App
