import React from 'react';
import background from '../images/plantilla.png'
import marco from '../images/marco.png'
export default function seccion_padres({deslizar_crono}) {
  return (
    <div className='w-full h-auto py-[2rem] lg:py-[5rem] relative px-[1.5rem] lg:px-0 gap-[1rem] lg:gap-5 flex-col flex justify-center bg-no-repeat items-center' 
    style={{ backgroundImage: 'url("https://png.pngtree.com/background/20230502/original/pngtree-wedding-invitation-card-with-watercolor-green-leaves-vector-picture-image_2500071.jpg")', backgroundSize: '100% 100%' }}>
        {/* <img className='w-full h-[95vh] lg:h-screen bg-cover lg:bg-contain bg-no-repeat absolute' src="g" alt="" /> */}
        <div className='text-[2rem]  lg:text-[3.5rem] z-50 text-[#4A663E] text-center pacifico font-semibold flex flex-col'>
        <p className=''>Con la bendición de  Dios</p>
        <p >y</p>
        <p >Nuestros padres</p>
        </div>
        <div className='flex lg:flex-row flex-col font-semibold items-center text-center z-50 gap-5 elegant lg:text-[1.7rem] text-[1rem]'>
        <div>
                <p className='flex gap-2 items-center'><svg class="w-6 h-6 text-gray-800" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
  <path d="M7.833 2c-.507 0-.98.216-1.318.576A1.92 1.92 0 0 0 6 3.89V21a1 1 0 0 0 1.625.78L12 18.28l4.375 3.5A1 1 0 0 0 18 21V3.889c0-.481-.178-.954-.515-1.313A1.808 1.808 0 0 0 16.167 2H7.833Z"/>
</svg> María Elena Meza Bellido</p>
                <p className='flex gap-2 items-center'><svg class="w-6 h-6 text-gray-800" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
  <path d="M7.833 2c-.507 0-.98.216-1.318.576A1.92 1.92 0 0 0 6 3.89V21a1 1 0 0 0 1.625.78L12 18.28l4.375 3.5A1 1 0 0 0 18 21V3.889c0-.481-.178-.954-.515-1.313A1.808 1.808 0 0 0 16.167 2H7.833Z"/>
</svg> Luis Daniel Sanchez Tantas</p>
            </div>
            <div >
                <p className='flex gap-2 items-center'><svg class="w-6 h-6 text-gray-800" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
  <path d="M7.833 2c-.507 0-.98.216-1.318.576A1.92 1.92 0 0 0 6 3.89V21a1 1 0 0 0 1.625.78L12 18.28l4.375 3.5A1 1 0 0 0 18 21V3.889c0-.481-.178-.954-.515-1.313A1.808 1.808 0 0 0 16.167 2H7.833Z"/>
</svg>
 Magdalena Contreras</p>
                <p className='flex gap-2 items-center'><svg class="w-6 h-6 text-gray-800" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
  <path d="M7.833 2c-.507 0-.98.216-1.318.576A1.92 1.92 0 0 0 6 3.89V21a1 1 0 0 0 1.625.78L12 18.28l4.375 3.5A1 1 0 0 0 18 21V3.889c0-.481-.178-.954-.515-1.313A1.808 1.808 0 0 0 16.167 2H7.833Z"/>
</svg> Marcos Torre Tomasto</p>
            </div>
            
        </div>
        <div className='flex flex-col z-50 items-center gap-2 text-center lg:text-[1.7rem] text-[1rem]'>
          <p className='pacifico text-[2rem] lg:text-[2.5rem] text-[#4A663E]'>Padrinos</p>
          <div className='flex flex-col items-center text-center font-semibold'>
          <p className='flex gap-2 items-center elegant'><svg class="w-6 h-6 text-gray-800" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
  <path d="M7.833 2c-.507 0-.98.216-1.318.576A1.92 1.92 0 0 0 6 3.89V21a1 1 0 0 0 1.625.78L12 18.28l4.375 3.5A1 1 0 0 0 18 21V3.889c0-.481-.178-.954-.515-1.313A1.808 1.808 0 0 0 16.167 2H7.833Z"/>
</svg> Veronica Galarza</p>
<p className='flex gap-2 items-center elegant'><svg class="w-6 h-6 text-gray-800" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
  <path d="M7.833 2c-.507 0-.98.216-1.318.576A1.92 1.92 0 0 0 6 3.89V21a1 1 0 0 0 1.625.78L12 18.28l4.375 3.5A1 1 0 0 0 18 21V3.889c0-.481-.178-.954-.515-1.313A1.808 1.808 0 0 0 16.167 2H7.833Z"/>
</svg> Carlos Meza</p>
          </div>
        </div>
        <button  className=' rounded-full p-2 flex flex-col items-center lg:hidden'>
          <svg class="w-8 h-8 text-black" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 9-7 7-7-7"/>
          </svg>
          <p className='text-[1rem] font-semibold'>Sigue bajando</p>
      </button>
    </div>
  );
}
