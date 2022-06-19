import React from 'react';
import { AiOutlineDown, AiOutlineFieldTime, AiOutlineMore, AiOutlineRocket } from 'react-icons/ai';

const taskData = [
  {
    title: 'login page',
    desc: 'login page for e-commerce web app',
    assignedBy: 'Pankaj',
    assignedTo: 'PS',
    category: 'frontend',
    dueDate: '12/7/22',
    comments: [
      { comment: 'comment 1', by: 'prash' },
      { comment: 'comment 1', by: 'prash' },
      { comment: 'comment 1', by: 'prash' },
    ],
  },
  {
    title: 'login page',
    desc: 'login page for e-commerce web app',
    assignedBy: 'Pankaj',
    assignedTo: 'PS',
    category: 'frontend',
    dueDate: '12/7/22',
    comments: [
      { comment: 'comment 1', by: 'prash' },
      { comment: 'comment 1', by: 'prash' },
      { comment: 'comment 1', by: 'prash' },
    ],
  },
  {
    title: 'login page',
    desc: 'login page for e-commerce web app',
    assignedBy: 'Pankaj',
    assignedTo: 'PS',
    category: 'frontend',
    dueDate: '12/7/22',
    comments: [
      { comment: 'comment 1', by: 'prash' },
      { comment: 'comment 1', by: 'prash' },
      { comment: 'comment 1', by: 'prash' },
    ],
  },
  {
    title: 'login page',
    desc: 'login page for e-commerce web app',
    assignedBy: 'Pankaj',
    assignedTo: 'PS',
    category: 'frontend',
    dueDate: '12/7/22',
    comments: [
      { comment: 'comment 1', by: 'prash' },
      { comment: 'comment 1', by: 'prash' },
      { comment: 'comment 1', by: 'prash' },
    ],
  },
];

const ProjectPage = () => {
  return (
    <div className='h-full max-h-full w-full bg-primaryDark flex flex-col items-start p-2 relative'>
      {/* info*/}
      <div className='border-b h-10cx  border-b-slate-600 flex p-3 pt-2 pb-3.5 top-0 items-center justify-between w-full px-4'>
        <div className='p-2 rounded-md bg-secondaryDark'>
          <AiOutlineRocket className='color-slate-200 ' size={32} />
        </div>
        <div className='flex flex-col items-start -ml-16'>
          <p className='text-2xl mt-1 ml-5'>{'E-commerce App'}</p>
          <p className=' m-0 -mt-1 ml-5 opacity-40 text-xs'>{'Owner: Manish Mandal'}</p>
        </div>
        <AiOutlineMore size={22} className='mr-1' />
      </div>
      {/* board */}
      <div className='bg-gradient-to-tr from-slate-600 to-slate-800  w-full h-90cx p-2 overflow-y-auto'>
        {/* Todo */}
        <div className='flex flex-col w-full h-2/5 rounded-md  shadow-sm shadow-slate-700'>
          <div className='flex h-1/6 bg-teal-600 w-full rounded-t-md items-center justify-between px-6'>
            <p className='text-lg font-bold'>{'Todo 📚'}</p>
            <AiOutlineDown size={18} className='opacity-80 font-bold' />
          </div>
          <div className='flex flex-col p-2 overflow-y-auto relative h-full bg-emerald-500 '>
            {taskData.map((task) => (
              <div className='bg-cyan-600 rounded-md mb-2 p-2 '>
                <div className='flex w-full justify-between'>
                  <p className='text-base font-bold'>{task.title}</p>
                  <p className='text-sm bg-emerald-500 rounded-xl px-2.5 flex justify-center items-center'>
                    {task.category}
                  </p>
                </div>
                <div className='flex w-full items-center justify-between relative mt-1'>
                  <p className='text-xs'>{`${task.desc.substring(0, 26)}...`}</p>
                  <p className='text-sm bg-red-400 rounded-xl px-2.5 py-px flex justify-center items-center'>
                    <AiOutlineFieldTime className='mr-1' /> {task.dueDate}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
        {/* In Progress */}
        <div className='flex flex-col w-full h-2/5 rounded-md  shadow-sm shadow-slate-700 mt-5'>
          <div className='flex h-1/6 bg-teal-600 w-full rounded-t-md items-center justify-between px-6'>
            <p className='text-lg font-bold'>{'In Progress 📚'}</p>
            <AiOutlineDown size={18} className='opacity-80 font-bold' />
          </div>
          <div className='flex flex-col p-2 overflow-y-auto relative h-full bg-emerald-500 '>
            {taskData.map((task) => (
              <div className='bg-cyan-600 rounded-sm mb-2 p-2 '>
                <div className='flex w-full justify-between'>
                  <p className='text-base font-bold'>{task.title}</p>
                  <p className='text-sm bg-emerald-500 rounded-xl px-2.5 flex justify-center items-center'>
                    {task.category}
                  </p>
                </div>
                <div className='flex w-full items-center justify-between relative mt-1'>
                  <p className='text-xs'>{`${task.desc.substring(0, 26)}...`}</p>
                  <p className='text-sm bg-red-400 rounded-xl px-2.5 py-px flex justify-center items-center'>
                    <AiOutlineFieldTime className='mr-1' /> {task.dueDate}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
        {/* Review */}
        <div className='flex flex-col w-full h-2/5 rounded-md  shadow-sm shadow-slate-700 mt-6'>
          <div className='flex h-1/6 bg-teal-600 w-full rounded-t-md items-center justify-between px-6'>
            <p className='text-lg font-bold'>{'Review 📚'}</p>
            <AiOutlineDown size={18} className='opacity-80 font-bold' />
          </div>
          <div className='flex flex-col p-2 overflow-y-auto relative h-full bg-emerald-500 '>
            {taskData.map((task) => (
              <div className='bg-cyan-600 rounded-sm mb-2 p-2 '>
                <div className='flex w-full justify-between'>
                  <p className='text-base font-bold'>{task.title}</p>
                  <p className='text-sm bg-emerald-500 rounded-xl px-2.5 flex justify-center items-center'>
                    {task.category}
                  </p>
                </div>
                <div className='flex w-full items-center justify-between relative mt-1'>
                  <p className='text-xs'>{`${task.desc.substring(0, 26)}...`}</p>
                  <p className='text-sm bg-red-400 rounded-xl px-2.5 py-px flex justify-center items-center'>
                    <AiOutlineFieldTime className='mr-1' /> {task.dueDate}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
        {/* Done */}
      </div>
    </div>
  );
};

export default ProjectPage;
