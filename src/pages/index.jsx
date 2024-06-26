import React, { useEffect, useState } from 'react';
import { Link as Anchor, useNavigate } from 'react-router-dom';
import '../fonts/fonts.css'
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
    <div className='w-full h-screen lg:hidden flex justify-center'>
      <img  src="https://firebasestorage.googleapis.com/v0/b/boda-8ade5.appspot.com/o/Te%20invitamos%20a%20nuestro%20matrimonio%20(2).jpg?alt=media&token=cd12b5be-8fe1-406f-8458-0d874ae70461" alt="" />
      <img className='absolute top-[8%] animate-fade-up animate-once' src="https://firebasestorage.googleapis.com/v0/b/boda-8ade5.appspot.com/o/Untitled%20design%20(1).png?alt=media&token=048b5e12-f937-4989-8251-425a86dc7335" alt="" />
      <div className='flex flex-col absolute animate-fade-up animate-once z-50 top-[45%] text-[1.7rem] text-center'>
      <p className='intro-font font-semibold'>Invitación a</p>
      <p className='intro-font font-semibold'>Nuestra Boda</p>
      </div>
      <div className='flex flex-col absolute animate-fade-up animate-once top-[58%] text-[2.3rem] text-center'>
      <p className='cinzel  text-[#848F60]'>Gustavo</p>
      <p className='cinzel text-[#8D6335] text-[2.7rem]'>&</p>
      <p className='cinzel  text-[#848F60]'>Ariela</p>
      </div>
      <div className='absolute top-[87%] flex gap-10 animate-fade-up animate-once'>
      <Anchor onClick={handleButtonClick}  className='bg-[white] border-solid border-[1px] border-[gray] px-[1rem] py-[0.3rem] text-center font-semibold text-[gray] rounded-[10px]'>Ver la invitación</Anchor>
    </div>
    </div>
    </div>
    </>
  );
}