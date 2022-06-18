import React, { useContext } from 'react';
import { UserContext } from '../../../context/userContext';

const HomePage = () => {
  const { user, setUser } = useContext(UserContext);
  return <div>Hi, {user}</div>;
};

export default HomePage;
