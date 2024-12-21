import React, { useRef, useState } from 'react';
import vide from '../images/Pareja caminando playa vacaciones mar gratis - free stock coupl walking beach sea.mp4'
export default function seccion_fiesta({deslizar_retrato}) {

      
  return (
   <>
    
    <div className='w-full h-screen flex relative justify-center items-center bg-cover lg:py-[2rem] px-[1rem] bg-no-repeat '>
      <video className='absolute w-full h-screen object-cover' src={vide} autoPlay muted loop></video>
      <div className='absolute bg-[black] opacity-40 w-full h-full'></div>
      <div className='lg:w-[60%] w-[100%] z-40 h-screen lg:selection:px-[3rem] justify-center items-center  gap-[2rem] overflow-auto flex flex-col'>
        <p className='text-white font-semibold pacifico text-[3rem] lg:text-[4rem] text-center'>Ceremonía y recepción</p>
        <table className="w-full border-collapse bg-[#ffffffc5] border-[white]">
  {/* Encabezado de la Ceremonia Matrimonial */}
  <thead className="w-full">
    <tr className="w-full text-center">
      <th colSpan="2" className="p-4 bg-[#869A98] lg:text-[2rem] text-[1.3rem] text-white border-b border-[white] pacifico">Dirección</th>
    </tr>
  </thead>
  <tbody>
    <tr className="border-b border-[white] px-[1rem]">
      <td className="montserrat font-semibold text-center py-2 lg:text-[1rem] text-[1.1rem] lg:py-4">Stephenson #5478  Quinta la marianita-MORENO BA</td>
    </tr>
  </tbody>
  
  {/* Encabezado de Recepcion */}
  <thead className="w-full">
    <tr className="w-full text-center">
      <th colSpan="2" className="p-4 bg-[#869A98] text-[1.3rem] lg:text-[2rem] pacifico text-white border-b border-[white]">Hora y fecha</th>
    </tr>
  </thead>
  <tbody>
    
    <tr className="text-center w-full flex justify-center ">
      <td className="py-2 lg:py-4 w-full text-[1.1rem] lg:text-[1.2rem] elegant font-semibold">17:00 Hs</td>
      <td className="py-2 lg:py-4 w-full text-[1.1rem] lg:text-[1.2rem] elegant font-semibold">08 . 03 . 2025</td>
    </tr>
  </tbody>
</table>
<p className='text-[0.9rem] text-white font-bold flex gap-2 text-center'>No sabés como llegar?<a target='_blank' href='https://maps.app.goo.gl/um7eoNg8Gn3p5bdS6' className="underline">Abrir google maps</a></p>

      </div>
    </div>
   </>
  );
  
}
