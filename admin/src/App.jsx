import { useState } from 'react'
import './css/App.css'
import Header from './comp/Header'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Header/>
    </>
  )
}

export default App