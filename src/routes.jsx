import { useRoutes } from 'react-router-dom';

import React, { useContext } from 'react';
import ProjectPage from './components/features/projectPage';
import HomePage from './components/features/homePage';
import Login from './components/features/auth/Login';
import SignUp from './components/features/auth/SignUp';
import { UserContext } from './context/userContext';


const Routing = () => {
  const user = true;
  if (user) {
    return (
      <>
        <Layout>
          {useRoutes([
            {
              path: '/',
              element: <HomePage />,
            },
            {
              path: 'project/:id',
              element: <ProjectPage />,
            },
          ])}
        </Layout>
      </>
    );
  } else {
    return useRoutes([
      {
        path: '/',
        element: <Login />,
    
      },
      {
        path: '/register',
        element: <SignUp />
      }
    ]);
  }
};

export default Routing;
