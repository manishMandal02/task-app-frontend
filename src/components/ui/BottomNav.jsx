import React from 'react';

import { useNavigate } from 'react-router-dom';

import { AiOutlineHome, AiOutlinePlus, AiOutlineUser } from 'react-icons/ai';

const BottomNav = () => {
  const navigate = useNavigate();
  return (
    <div className='fixed bottom-0 w-full rounded-lg border-none  outline-none h-10cx bg-secondaryDark shadow-md shadow-slate-700'>
      <div className='flex justify-around items-center h-full px-4'>
        <AiOutlineHome
          className=''
          size={30}
          onClick={() => {
            navigate('/');
          }}
        />
        <span className='bg-gradient-to-tr from-primaryColor to-secondaryColor rounded-full p-4 -mt-10 shadow-sm shadow-teal-700'>
          <AiOutlinePlus className='' size={30} />
        </span>
        <AiOutlineUser
          className=''
          size={28}
          onClick={() => {
            navigate('/profile');
          }}
        />
      </div>
    </div>
  );
};

export default BottomNav;
