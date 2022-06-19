import { useState } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { ChakraProvider, extendTheme } from '@chakra-ui/react';

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

  const colors = {
    brand: {
      primaryColor: '#2ADACB',
      secondaryColor: '#B80BF4',
      primaryDark: '#050910',
      secondaryDark: '#383b56',
    },
  };

  const theme = extendTheme({ colors });

  return (
    <div className='App'>
      <UserProvider>
        <ChakraProvider theme={theme}>
          <Router>
            <Routing />
          </Router>
        </ChakraProvider>
      </UserProvider>
    </div>
  );
}

export default App;
