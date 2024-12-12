import React from 'react';
import background from '../images/plantilla.png'
import marco from '../images/marco.png'
export default function seccion_padres({deslizar_crono}) {
  return (
    <div className='w-full h-screen relative px-[1.5rem] lg:px-0 gap-[3rem]  lg:gap-4 flex-col flex justify-center items-center bg-cover' style={{ backgroundImage: `url(${background})` }}>
        
        <img src={marco} className='absolute lg:flex hidden w-[48%]' alt="" />
        <div className='text-[2.7rem]  lg:text-[3.5rem] text-[#4A663E] text-center pacifico font-semibold flex flex-col'>
        <p className=''>Con la bendición de</p>
        <p >Nuestros padres</p>
        </div>
        <div className='flex lg:flex-row flex-col text-center gap-5 elegant lg:text-[1rem] text-[1.2rem]'>
            <div >
                <p>Marcos Torre Tomasto</p>
                <p>Magdalena Contreras</p>
            </div>
            <div>
                <p>María Elena Meza Bellido</p>
                <p>Luis Daniel Sanchez Tantas</p>
            </div>
        </div>
        <button onClick={deslizar_crono} className='bg-[#808080ca] rounded-full p-2 flex lg:hidden'>
          <svg class="w-8 h-8 text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 9-7 7-7-7"/>
          </svg>
      </button>
    </div>
  );
}
