import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

export default function Index() {

  return (
    <div className='w-full h-auto'>
    <div className='w-full h-screen'>
      <video  className='w-full relative h-screen object-cover' muted autoPlay  src="https://firebasestorage.googleapis.com/v0/b/boda-8ade5.appspot.com/o/Gus%20y%20Ari.mp4?alt=media&token=922f3180-dc4e-4fcf-a2ee-78decff8097d" ></video>
    <div className='absolute top-[80%] left-[57%] flex gap-10'>
      <button className='bg-[red] px-[0.7rem] py-[0.3rem] text-center text-white rounded-[10px]'>Ingresar con música</button>
      <button className='bg-[red] px-[0.7rem] py-[0.3rem] text-center text-white rounded-[10px]'>Ingresar sin música</button>
    </div>
    </div>
    </div>
  );
}