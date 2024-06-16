import React from 'react';

export default function modal2({closeModal2}) {
  return (
    <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50">
    <div className="bg-white rounded-lg  max-w-md w-full flex py-[0.3rem] px-[0.5rem] flex-col items-center mx-4">
      <div className='w-full h-auto flex justify-end '>
      <button onClick={closeModal2}>
      <svg class="w-6 h-6 text-gray-800 " aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
  <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18 17.94 6M18 18 6.06 6"/>
</svg>
      </button>
      </div>
      <div className='flex w-full h-auto py-[1rem] justify-between px-[1rem]'>
        <img className='w-[5rem]' src="https://play-lh.googleusercontent.com/4hN-UTy-2_Ma1Ouye5FpN2Issj73Oms62hokLp5OZR6zdt2yzkEpGSpK0v47RK8Oc8Q" alt="" />
      <div className='flex flex-col'>
      <p className='text-[1.3rem] font-semibold'>Transferencia Mercado Pago:</p>
      <p>ALIAS: bodaAriyGus.mp</p>
      <p>CVU: 0000003100004689001781</p>
      </div>
      </div>
    </div>
  </div>
  );
}
