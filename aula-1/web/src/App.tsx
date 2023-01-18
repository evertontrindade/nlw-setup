import { useState } from 'react'
import './App.css'
import { Habit } from './components/Habits'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <Habit completed={3} />
      <Habit completed={1} />
      <Habit completed={5} />
      <Habit completed={10} />
    </div>
  )
}

export default App
