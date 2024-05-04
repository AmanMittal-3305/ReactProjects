import { useState } from 'react'

import './App.css'

function App() {

  let [count, setCount] = useState(0)

  const increaseValue = () => {
    count = count+1;
    setCount(count)
  }

  const decreaseValue = () => {
    if(count === 0){
      count = 0
      return
    }
    count = count-1;
    setCount(count)
  }

  return (
    <>
    <h1>Chai aur react</h1>
    <h2>Counter value : {count}</h2>
    <button onClick={increaseValue}>Add Value</button>
    <br />
    <button onClick={decreaseValue}>Remove Value</button>
    </>
  )
}

export default App
