import React from 'react';

export default function modalDressCode({ closeModal }) {
  return (
    <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50">
    <div className="bg-white rounded-lg  max-w-md w-full flex py-[0.3rem] px-[0.5rem] flex-col items-center mx-4">
      <div className='w-full h-auto flex justify-end '>
      <button onClick={closeModal}>
      <svg class="w-6 h-6 text-gray-800 " aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
  <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18 17.94 6M18 18 6.06 6"/>
</svg>
      </button>
      </div>
      <div className='flex w-full flex-col h-auto py-[2rem] items-center'>
        <div className='flex justify-center'>
          <img className='w-[15rem]' src="https://firebasestorage.googleapis.com/v0/b/boda-8ade5.appspot.com/o/hombres%20(2).png?alt=media&token=b6d7a451-a75a-4c73-80b7-cc85ed684a34" alt="" />
          <img className='w-[15rem]' src="https://firebasestorage.googleapis.com/v0/b/boda-8ade5.appspot.com/o/mujeres%20(2).png?alt=media&token=7c6cca6d-faff-45e9-b1e8-a4391c3bae22" alt="" />
        </div>
      <p className='text-[1.5rem] pacifico'>Elegante Sport</p>
      </div>
      
    </div>
  </div>
  );
}
