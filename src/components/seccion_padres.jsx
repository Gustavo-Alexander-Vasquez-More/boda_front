import React from 'react';
import background from '../images/plantilla.png'
import marco from '../images/marco.png'
export default function seccion_padres({deslizar_crono}) {
  return (
    <div className='w-full h-[80vh] lg:h-screen relative px-[1.5rem] lg:px-0 gap-[1rem]  lg:gap-5 flex-col flex justify-center items-center '>
        <img className='w-full h-[80vh] lg:h-screen bg-cover lg:bg-contain bg-no-repeat absolute' src="https://png.pngtree.com/background/20230502/original/pngtree-wedding-invitation-card-with-watercolor-green-leaves-vector-picture-image_2500071.jpg" alt="" />
        <div className='text-[2rem]  lg:text-[3.5rem] z-50 text-[#4A663E] text-center pacifico font-semibold flex flex-col'>
        <p className=''>Con la bendición de  Dios</p>
        <p >y</p>
        <p >Nuestros padres</p>
        </div>
        <div className='flex lg:flex-row flex-col items-center text-center z-50 gap-5 elegant lg:text-[1.7rem] text-[1rem]'>
            <div >
                <p className='flex gap-2 items-center'><svg class="w-6 h-6 text-gray-800" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
  <path d="M7.833 2c-.507 0-.98.216-1.318.576A1.92 1.92 0 0 0 6 3.89V21a1 1 0 0 0 1.625.78L12 18.28l4.375 3.5A1 1 0 0 0 18 21V3.889c0-.481-.178-.954-.515-1.313A1.808 1.808 0 0 0 16.167 2H7.833Z"/>
</svg>
 Magdalena Contreras</p>
                <p className='flex gap-2 items-center'><svg class="w-6 h-6 text-gray-800" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
  <path d="M7.833 2c-.507 0-.98.216-1.318.576A1.92 1.92 0 0 0 6 3.89V21a1 1 0 0 0 1.625.78L12 18.28l4.375 3.5A1 1 0 0 0 18 21V3.889c0-.481-.178-.954-.515-1.313A1.808 1.808 0 0 0 16.167 2H7.833Z"/>
</svg> Marcos Torre Tomasto</p>
            </div>
            <div>
                <p className='flex gap-2 items-center'><svg class="w-6 h-6 text-gray-800" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
  <path d="M7.833 2c-.507 0-.98.216-1.318.576A1.92 1.92 0 0 0 6 3.89V21a1 1 0 0 0 1.625.78L12 18.28l4.375 3.5A1 1 0 0 0 18 21V3.889c0-.481-.178-.954-.515-1.313A1.808 1.808 0 0 0 16.167 2H7.833Z"/>
</svg> María Elena Meza Bellido</p>
                <p className='flex gap-2 items-center'><svg class="w-6 h-6 text-gray-800" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
  <path d="M7.833 2c-.507 0-.98.216-1.318.576A1.92 1.92 0 0 0 6 3.89V21a1 1 0 0 0 1.625.78L12 18.28l4.375 3.5A1 1 0 0 0 18 21V3.889c0-.481-.178-.954-.515-1.313A1.808 1.808 0 0 0 16.167 2H7.833Z"/>
</svg> Luis Daniel Sanchez Tantas</p>
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
