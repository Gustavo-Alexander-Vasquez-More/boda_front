import React, { useEffect, useState } from 'react';
import { Link as Anchor, useNavigate } from 'react-router-dom';
export default function Index() {
const navigate=useNavigate()
const handleButtonClick = () => {
navigate('/templated');
};
  return (
    <div className='w-full h-auto'>
    <div className='w-full h-screen'>
      <video  className='w-full relative h-screen object-cover' muted autoPlay  src="https://firebasestorage.googleapis.com/v0/b/boda-8ade5.appspot.com/o/Bienvenidos%20(1).mp4?alt=media&token=9f1140c6-ddac-40d2-9e28-ec43dfb86f5a" ></video>
    <div className='absolute top-[80%] left-[61%] flex gap-10'>
      <Anchor onClick={handleButtonClick}  className='bg-[red] px-[0.7rem] py-[0.3rem] text-center font-semibold text-white rounded-[10px]'>Ver la invitacion!</Anchor>
    </div>
    </div>
    </div>
  );
}