import { useState } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';

import './App.css';
import Auth from './components/features/auth/Auth';
import axios from 'axios';
import Routing from './routes';
import { UserProvider } from './context/userContext';
//
axios.defaults.baseURL = 'http://192.168.105.253:8000';
// axios.defaults.baseURL = 'https://task-app.heroku.app'

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className='App'>
      <UserProvider>
        <Router>
          <Routing />
        </Router>
      </UserProvider>
    </div>
  );
}

export default App;
