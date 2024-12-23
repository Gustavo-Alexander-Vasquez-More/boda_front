import React from 'react';
import traje from '../images/traje.png'
import vestido from '../images/vestido.png'
export default function seccion_dress_code({deslizar_reloj}) {
  return (
    <div className='w-full lg:h-screen h-auto flex flex-col py-[1rem] justify-center items-center bg-no-repeat bg-cover relative  bg-[url("https://png.pngtree.com/background/20230611/original/pngtree-wedding-ceremony-set-up-for-a-wedding-in-the-woods-picture-image_3154319.jpg")]'>
      
        <div className='w-full z-50 flex justify-center  items-center'>
            <div className='w-[90%] lg:w-[60%] px-[2rem] py-[2rem] text-center bg-[#ffffffc6]'>
              <p className='pacifico text-[1.3rem] lg:text-[2rem]'>Dios nos dio la oportunidad de conocernos y ahora nos da la oportunidad que después de 12 años de estar juntos , de vivir experiencias estamos listos para para dar este paso y seguir caminando juntos de la mano, ante adversidades siempre prevaleció nuestro amor, hoy comprendemos que fueron pruebas en nuestras vidas. 
Queremos unir nuestras vidas delante de Dios y deseamos que seas testigo de este día tan especial para nosotros.
</p>
            </div>
        </div>
            <button  className=' rounded-full p-2 flex flex-col items-center lg:hidden'>
          <svg class="w-8 h-8 text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 9-7 7-7-7"/>
          </svg>
          <p className='text-[0.8rem] text-white font-semibold'>Sigue bajando</p>
      </button>
    </div>
  );
}
