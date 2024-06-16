import React, { useEffect, useState } from 'react';
import { Link as Anchor, useNavigate } from 'react-router-dom';
export default function Index() {
const navigate=useNavigate()
const handleButtonClick = () => {
navigate('/templated');
};
  return (
    <>
    <div className='w-full h-auto'>
    <div className='w-full h-screen lg:flex hidden'>
      <video  className='w-full relative h-screen object-cover' muted autoPlay  src="https://firebasestorage.googleapis.com/v0/b/boda-8ade5.appspot.com/o/Bienvenidos%20(1).mp4?alt=media&token=9f1140c6-ddac-40d2-9e28-ec43dfb86f5a" ></video>
    <div className='absolute top-[80%] left-[61%] flex gap-10'>
      <Anchor onClick={handleButtonClick}  className='bg-[white] border-solid border-[1px] border-[gray] py-[0.3rem] text-center font-semibold text-[gray] px-[0.5rem] rounded-[10px]'>Ver la invitacion</Anchor>
    </div>
    </div>
    <div className='w-full h-screen lg:hidden flex'>
      <video  className='w-full relative h-screen object-cover' muted autoPlay  playsInline src="https://firebasestorage.googleapis.com/v0/b/boda-8ade5.appspot.com/o/intro%20index.mp4?alt=media&token=02050e6b-91ef-4e03-bf1e-3082f139c6ac" ></video>
      <div className='absolute top-[80%] left-[27%] flex gap-10'>
      <Anchor onClick={handleButtonClick}  className='bg-[white] border-solid border-[1px] border-[gray] px-[0.7rem] py-[0.3rem] text-center font-semibold text-[gray] rounded-[10px]'>Ver la invitacion</Anchor>
    </div>
    </div>
    </div>
    </>
  );
}