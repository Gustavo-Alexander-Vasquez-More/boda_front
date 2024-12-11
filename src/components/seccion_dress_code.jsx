import React from 'react';
import traje from '../images/traje.png'
import vestido from '../images/vestido.png'
export default function seccion_dress_code() {
  return (
    <div className='w-full h-screen bg-no-repeat bg-cover relative  bg-[url("https://png.pngtree.com/background/20230611/original/pngtree-wedding-ceremony-set-up-for-a-wedding-in-the-woods-picture-image_3154319.jpg")]'>
      <div className='w-full h-screen bg-[#00000055] absolute'></div>
        <div className='w-full h-screen absolute z-50 flex flex-col items-center gap-[4rem] py-[5rem]'>
        <p className='pacifico text-white text-[4rem]'>~ Dress Code ~</p>
        <div className='flex w-full gap-[10rem] justify-center'>
           <div className='w-[20%] gap-4 items-center flex flex-col'>
           <div className='w-[50%] p-6  bg-white rounded-full'>
                <img className=' object-contain' src={traje} alt="" />
            </div>
            <div className='w-full rounded-[15px] bg-[#ffffffcc] px-[1.5rem] flex flex-col items-center py-[1rem] text-center'>
                <p className='pacifico text-center text-[1.7rem]'>Para los caballeros</p>
                <p className='elegant'>Pantalón de vestir o chinos, camisa de manga larga y zapatos elegantes. </p>
                <p className='elegant'>El blazer y la corbata son opcionales, pero siempre son un buen detalle.</p>
            </div>
           </div>
           <div className='w-[20%] gap-4 items-center flex flex-col'>
           <div className='w-[50%] p-6  bg-white rounded-full'>
                <img className=' object-contain' src={vestido} alt="" />
            </div>
            <div className='w-full rounded-[15px] bg-[#ffffffcc] px-[1.5rem] flex flex-col items-center py-[1rem] text-center'>
                <p className='pacifico text-center text-[1.7rem]'>Para las damas</p>
                <p className='elegant'>Vestido mediano o largo, conjunto elegante o falda y blusa formal. </p>
                <p className='elegant'>Los tacones o sandalias de vestir son ideales, pero prioriza tu comodidad.</p>
            </div>
           </div>
        </div>
        </div>
    </div>
  );
}
