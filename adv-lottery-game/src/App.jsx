import { useState } from 'react'
import './App.css'
import Lottery from './Lottery'
import { sum } from './helper'

function App() {
  const [count, setCount] = useState(0)

  let winCondition = (ticket)=>{
    return sum(ticket)===15;
  };
  return (
    <>
      {/* <h1>Ticket Lottery Game</h1> */}
      <Lottery n={3} winCondition={winCondition}/>
    </>
  )
}

export default App
