import React from 'react';
export default function seccion_bienvenida({escuchar, quitar}) {
  return (
    <div className='w-full h-screen relative flex items-center justify-center bg-no-repeat bg-cover bg-[url("https://s1.1zoom.me/big0/90/354027-admin.jpg")]'>
  {/* Overlay para opacidad */}
  <div className="absolute inset-0 bg-black bg-opacity-50"></div>

  {/* Contenido del texto */}
  <div className='relative flex flex-col items-center text-white z-10'>
  <p className='montserrat text-[3rem] font-semibold'>Te invitamos a nuestra boda</p>
    <p className='elegant text-[5rem] font-semibold'>Sergio & Cristina</p>
    <p className='elegant text-[2.5rem] font-semibold'>¡Nos casamos!</p>
    <button onClick={escuchar} className='bg-[black] montserrat rounded-[10px] py-[0.5rem] text-[1.2rem] mt-[2rem] px-[1rem]'>Escuchar canción</button>
  </div>
</div>

  );
}
