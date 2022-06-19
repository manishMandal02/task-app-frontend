import React, { useContext } from 'react';
import { UserContext } from '../../../context/userContext';

import { TbGridDots } from 'react-icons/tb';
import { MdOutlineGroupWork } from 'react-icons/md';

import { useNavigate } from 'react-router-dom';

const projectData = [
  { title: 'Ecommerce App', desc: 'e-commerce web app', _id: '2' },
  { title: 'Ecommerce App', desc: 'e-commerce web app', _id: '3' },
  { title: 'Ecommerce App', desc: 'e-commerce web app', _id: '4' },
  { title: 'Ecommerce App', desc: 'e-commerce web app', _id: '5' },
  { title: 'Ecommerce App', desc: 'e-commerce web app', _id: '6' },
];
const taskData = [
  { title: 'Ecommerce App', desc: 'e-commerce web app' },
  { title: 'Ecommerce App', desc: 'e-commerce web app' },
  { title: 'Ecommerce App', desc: 'e-commerce web app' },
  { title: 'Ecommerce App', desc: 'e-commerce web app' },
  { title: 'Ecommerce App', desc: 'e-commerce web app' },
];

const HomePage = () => {
  const { user, setUser } = useContext(UserContext);
  const navigate = useNavigate();

  return (
    <div className='h-full w-full bg-primaryDark flex flex-col items-start'>
      {/* user */}
      <div className='flex items-center justify-between p-4 px-6 w-full relative'>
        <div className='flex items-center mt-1'>
          <TbGridDots size={20} className='-mt-2.5 opacity-50' />
          <div className='flex flex-col justify-center ml-2.5 items-start'>
            <p className='m-0'>{'Manish Mandal'}</p>
            <p className='m-0 -mt-px text-xs opacity-60'>{'Fullstack developer'}</p>
          </div>
        </div>
        <div className='w-12 h-12 rounded-full p-0 absolute right-4 top-4 '>
          <img
            src='https://avatars.githubusercontent.com/u/76472450?v=4'
            alt='profile-pic'
            className='w-12 h-12 p-0'
          />
        </div>
      </div>
      {/* dates */}
      <div>
        <p className='p-4 m-0 '>{`${new Date().toLocaleDateString()}`}</p>
      </div>
      {/* projects */}
      <div className='flex items-start flex-col py-4 pt-2 relative w-full'>
        <p className='mb-2 ml-3 text-lg font-bold tracking-wide text-slate-100'>Projects</p>
        <div className='flex overflow-x-auto w-full ml-2.5'>
          {projectData.map((project) => (
            <div
              className='mr-4 rounded-lg bg-secondaryDark p-4'
              onClick={() => {
                navigate(`/project/${project._id}`);
              }}
            >
              <MdOutlineGroupWork size={28} className='opacity-70' />
              <p className='text-base leading-5 font-semibold mt-2 text-left mb-2.5'>{project.title}</p>
              <div
                style={{ width: `70%` }}
                className='bg-gradient-to-tr h-1 from-primaryColor to-secondaryColor rounded-md '
              ></div>
            </div>
          ))}
        </div>
      </div>
      {/* tasks */}
      <div className='flex items-start flex-col p-4 pt-2 relative w-full'>
        <p className='mb-2 text-lg font-bold tracking-wide text-slate-100'>Tasks</p>
        <div className='flex flex-col overflow-y-auto h-4/5  w-full'>
          {taskData.map((task) => (
            <div className='w-full  mb-3 rounded-lg bg-secondaryDark p-4 py-3.5'>
              <MdOutlineGroupWork size={28} className='opacity-70' />
              <p className='text-base leading-5 font-semibold mt-2 text-left mb-2.5'>{task.title}</p>
              <div
                style={{ width: `70%` }}
                className='bg-gradient-to-tr h-1 from-primaryColor to-secondaryColor rounded-md '
              ></div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default HomePage;
