import { useRoutes } from 'react-router-dom';

import React from 'react';
import ProjectPage from './components/features/projectPage';
import HomePage from './components/features/homePage';
import Login from './components/features/auth/login/Login';
import SignUp from './components/features/auth/login/SignUp';

const Routing = () => {
  const user = false;
  if (user) {
    return useRoutes([
      {
        path: '/',
        element: <HomePage />,
        children: [
          {
            path: 'project/:id',
            element: <ProjectPage />,
          },
        ],
      },
    ]);
  } else {
    return useRoutes([
      {
        path: '/',
        element: <Login />,
        children: [
          {
            path: 'register',
            element: <SignUp />,
          },
        ],
      },
    ]);
  }
};

export default Routing;
