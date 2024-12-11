import React from 'react';
import background from '../images/plantilla.png'
import marco from '../images/marco.png'
export default function seccion_padres() {
  return (
    <div className='w-full h-screen relative  gap-4 flex-col flex justify-center items-center bg-cover' style={{ backgroundImage: `url(${background})` }}>
        
        <img src={marco} className='absolute w-[48%]' alt="" />
        <div className='text-[3.5rem] text-[#4A663E] text-center pacifico font-semibold flex flex-col'>
        <p className=''>Con la bendición de</p>
        <p >Nuestros padres</p>
        </div>
        <div className='flex text-center gap-5 elegant'>
            <div >
                <p>Marco Tomás torres</p>
                <p>Magdalena Torre Contreras</p>
            </div>
            <div>
                <p>Marco Tomás torres</p>
                <p>Magdalena Torre Contreras</p>
            </div>
        </div>
    </div>
  );
}
