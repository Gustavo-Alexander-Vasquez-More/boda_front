import React from 'react';

export default function modal2({closeModal2}) {
  return (
    <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50">
    <div className="bg-white rounded-lg   lg:w-[40%] flex py-[1rem] w-[95%] px-[1rem] flex-col items-center ">
      <div className='w-full h-auto flex justify-end '>
      <button onClick={closeModal2}>
      <svg class="w-6 h-6 text-gray-800" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
  <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m15 9-6 6m0-6 6 6m6-3a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"/>
</svg>
  </button>
      </div>
      <div className='flex flex-col gap-2 w-full'>
        <div className='w-full flex text-center justify-center items-center font-bold underline'><p>Cuentas Disponibles para transferencia</p></div>
        <div className='flex w-full items-center'>
          <div className='w-[30%] hidden lg:flex'>
            <img className='object-cover ' src="https://play-lh.googleusercontent.com/4hN-UTy-2_Ma1Ouye5FpN2Issj73Oms62hokLp5OZR6zdt2yzkEpGSpK0v47RK8Oc8Q" alt="" />
          </div>
          <div className='w-[70%] px-[0.5rem]  flex flex-col'>
            <p className=' underline font-semibold'>MercadoPago Opción 1</p>
            <div className='flex gap-1'><p className='font-semibold'>ALIAS:</p><p>bodaAriyGus.mp</p></div>
            <div className='flex gap-1'><p className='font-semibold'>CBU:</p><p>0000003100004689001781</p></div>
            <div className=' hidden lg:flex gap-1 '><p className='font-semibold'>NOMBRE:</p><p>Ariela Isabel Torre Venegas</p></div>
          </div>
        </div>
        <div className='flex w-full items-center'>
          <div className='w-[30%] hidden lg:flex'>
            <img className='object-cover' src="https://play-lh.googleusercontent.com/4hN-UTy-2_Ma1Ouye5FpN2Issj73Oms62hokLp5OZR6zdt2yzkEpGSpK0v47RK8Oc8Q" alt="" />
          </div>
          <div className='w-[70%] px-[0.5rem]  flex flex-col'>
            <p className=' underline font-semibold'>MercadoPago Opción 2</p>
            <div className='flex gap-1'><p className='font-semibold'>ALIAS:</p><p>Alex.more.24.mp</p></div>
            <div className='flex gap-1'><p className='font-semibold'>CBU:</p><p>0000003100016421569329</p></div>
            <div className='hidden lg:flex gap-1'><p className='font-semibold'>NOMBRE:</p><p>Gustavo Alexander Vásquez More</p></div>

          </div>
        </div>      
      </div>
      {/* <div className='flex w-full lg:flex-row flex-col h-auto py-[1rem] items-center justify-between px-[1rem]'>
        <img className='w-[5rem] ' src="https://play-lh.googleusercontent.com/4hN-UTy-2_Ma1Ouye5FpN2Issj73Oms62hokLp5OZR6zdt2yzkEpGSpK0v47RK8Oc8Q" alt="" />
      <div className='flex flex-col'>
      <p className='lg:text-[1.3rem] text-[1.1rem] font-semibold'>Transferencia Mercado Pago:</p>
      <p>ALIAS: bodaAriyGus.mp</p>
      <p>CVU: 0000003100004689001781</p>
      </div>
      </div> */}
    </div>
  </div>
  );
}
