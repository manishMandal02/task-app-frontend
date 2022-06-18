import { useState } from 'react'
import logo from './logo.svg'
import './App.css'
import Auth from './components/features/auth/Auth'
import axios from 'axios'

axios.defaults.baseURL = 'http://192.168.105.253:8000'
// axios.defaults.baseURL = 'https://task-app.heroku.app'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
     <Auth />
    </div>
  )
}

export default App
