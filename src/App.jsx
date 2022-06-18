import { useState } from 'react'
import logo from './logo.svg'
import './App.css'
import Auth from './components/features/auth/Auth'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
     <Auth />
    </div>
  )
}

export default App
