import React from 'react';
import BottomNav from './BottomNav';

const Layout = ({ children }) => {
  return (
    <div className='overflow-hidden h-full w-full bg-primaryDark'>
      <div className='h-90cx w-full'>{children}</div>
      <BottomNav />
    </div>
  );
};

export default Layout;
