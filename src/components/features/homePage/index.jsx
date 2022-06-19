import React, { useContext } from 'react';
import { UserContext } from '../../../context/userContext';

const HomePage = () => {
  const { user, setUser } = useContext(UserContext);
  console.warn('home',user)
  return <div>Hi, {user.firstName}</div>;
};

export default HomePage;
