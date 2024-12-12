import React from 'react';
import traje from '../images/traje.png'
import vestido from '../images/vestido.png'
export default function seccion_dress_code({deslizar_reloj}) {
  return (
    <div className='w-full h-screen bg-no-repeat bg-cover relative  bg-[url("https://png.pngtree.com/background/20230611/original/pngtree-wedding-ceremony-set-up-for-a-wedding-in-the-woods-picture-image_3154319.jpg")]'>
      <div className='w-full h-screen bg-[#00000055] absolute'></div>
        <div className='w-full h-screen absolute z-50 flex flex-col items-center gap-5 lg:gap-[4rem] py-[1.5rem] lg:py-[5rem]'>
        <p className='pacifico text-white text-[2rem] lg:text-[4rem]'>~ Dress Code ~</p>
        <div className='flex lg:flex-row flex-col w-full gap-5 lg:gap-[10rem] items-center lg:justify-center'>
           <div className='lg:w-[20%] w-[90%] gap-4 items-center flex flex-col'>
           <div className='lg:w-[50%] w-[30%] p-6  bg-white rounded-full'>
                <img className=' object-contain' src={traje} alt="" />
            </div>
            <div className='w-full rounded-[15px] bg-[#ffffffcc] px-[0.5rem] lg:px-[1.5rem] flex flex-col items-center py-[0.5rem] lg:py-[1rem] text-center'>
                <p className='pacifico text-center text-[1.2rem] lg:text-[1.7rem]'>Para los caballeros</p>
                <p className='lg:text-[1rem] text-[0.7rem] elegant'>Pantalón de vestir o chinos, camisa de manga larga y zapatos elegantes. </p>
                <p className='elegant lg:text-[1rem] text-[0.7rem]'>El blazer y la corbata son opcionales, pero siempre son un buen detalle.</p>
            </div>
           </div>
           <div className='lg:w-[20%]  w-[90%] gap-4 items-center flex flex-col'>
           <div className='lg:w-[50%] w-[30%] p-6  bg-white rounded-full'>
                <img className=' object-contain' src={vestido} alt="" />
            </div>
            <div className='w-full rounded-[15px] bg-[#ffffffcc] px-[1.5rem] flex flex-col items-center py-[1rem] text-center'>
                <p className='pacifico text-center text-[1.2rem] lg:text-[1.7rem]'>Para las damas</p>
                <p className='elegant lg:text-[1rem] text-[0.7rem]'>Vestido mediano o largo, conjunto elegante o falda y blusa formal. </p>
                <p className='elegant lg:text-[1rem] text-[0.7rem]'>Los tacones o sandalias de vestir son ideales, pero prioriza tu comodidad.</p>
            </div>
           </div>
        </div>
        <button onClick={deslizar_reloj} className='bg-[#808080ca] rounded-full p-2 flex lg:hidden'>
          <svg class="w-8 h-8 text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 9-7 7-7-7"/>
          </svg>
      </button>
        </div>
    </div>
  );
}
