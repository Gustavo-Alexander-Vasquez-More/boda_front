import React from 'react';
import { Parallax } from 'react-parallax';

export default function template() {
 
  return (
    <div className='w-full h-auto'>
    <div className='w-full h-screen'>
      <video  className='w-full relative h-screen object-cover' muted autoPlay  src="https://firebasestorage.googleapis.com/v0/b/boda-8ade5.appspot.com/o/Gus%20y%20Ari%20(3).mp4?alt=media&token=cd9bd2f7-434a-4955-a058-6b454ac02915" ></video>
    </div>
    <div className='w-full h-screen flex justify-center items-center'>
   
   <img className='w-full h-screen' src="https://firebasestorage.googleapis.com/v0/b/boda-8ade5.appspot.com/o/Gus%20y%20Ari.jpg?alt=media&token=e69b234e-9a7b-457c-9570-54896fda24f6" alt="" />
   
    </div>
    </div>
  );
}
