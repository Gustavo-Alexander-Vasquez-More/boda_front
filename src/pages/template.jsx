import React, { useEffect, useRef, useState } from 'react';
import { Link as Anchor, useLocation } from 'react-router-dom';

import '../fonts/fonts.css'
import Seccion_bienvenida from '../components/seccion_bienvenida';
import Seccion_reloj from '../components/seccion_reloj';
import Seccion_fiesta from '../components/seccion_fiesta';
import Seccion_retratos from '../components/seccion_retratos';
import ModalDressCode from '../components/modalDressCode';
import Modal2 from '../components/modal2';
import { animateScroll as scroll } from 'react-scroll';
import Swal from 'sweetalert2';
export default function template() {
const [modal, setModal]=useState(false)
const [modal2, setModal2]=useState(false)
const [sound, setSound]=useState(false)
const audioRef = useRef(new Audio('https://firebasestorage.googleapis.com/v0/b/boda-8ade5.appspot.com/o/Aleluya%20cover%20-%20Leonard%20Cohen%20%20(%20Elver%20Saxofonista)%20-%20Elver%20%20Saxofonista%2012%20(youtube).mp3?alt=media&token=bb5039c7-9418-42ed-9929-4dcb8385048e'));


const escuchar = () => {
  // Ajusta el volumen directamente aquí (valor entre 0 y 1)
  audioRef.current.volume = 0.3; // 30% de volumen
  audioRef.current.play();
  setSound(true);

  // Desplazamiento suave hacia 101vh usando animateScroll
  scroll.scrollTo(window.innerHeight * 1.00, {
    duration: 800, // Duración del desplazamiento en milisegundos
    delay: 0, // Retraso antes de que comience el desplazamiento
    smooth: 'easeInOutQuart', // Tipo de suavizado
  });
  
};
  const quitar = () => {
    audioRef.current.pause();
    setSound(false);
  };
const openModal = () => {
setModal(true);
}
const closeModal=()=>{
  setModal(false)
}
const openModal2 = () => {
  setModal2(true);
  }
  const closeModal2=()=>{
    setModal2(false)
  }

    
return (
<>
{modal && <ModalDressCode closeModal={closeModal}/>}
  {modal2 && <Modal2 closeModal2={closeModal2} />}
 {/* {sound === false && (
   <div className=''>
   <button onClick={escuchar}>
   <svg class="w-10 h-10 bg-[#9494946c] py-[0.2rem] px-[0.2rem] rounded-full text-[gray] fixed top-4 right-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
 <path fill-rule="evenodd" d="M18.458 3.11A1 1 0 0 1 19 4v16a1 1 0 0 1-1.581.814L12 16.944V7.056l5.419-3.87a1 1 0 0 1 1.039-.076ZM22 12c0 1.48-.804 2.773-2 3.465v-6.93c1.196.692 2 1.984 2 3.465ZM10 8H4a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h6V8Zm0 9H5v3a1 1 0 0 0 1 1h3a1 1 0 0 0 1-1v-3Z" clip-rule="evenodd"/>
</svg>

   </button>
 </div>
 )}
  {sound === true && (
    <div className=''>
    <button onClick={quitar}>
    <svg class="w-10 h-10 bg-[#9494946c] py-[0.2rem] px-[0.2rem] rounded-full text-[gray] fixed top-4 right-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
  <path d="M5.707 4.293a1 1 0 0 0-1.414 1.414l14 14a1 1 0 0 0 1.414-1.414l-.004-.005C21.57 16.498 22 13.938 22 12a9.972 9.972 0 0 0-2.929-7.071 1 1 0 1 0-1.414 1.414A7.972 7.972 0 0 1 20 12c0 1.752-.403 3.636-1.712 4.873l-1.433-1.433C17.616 14.37 18 13.107 18 12c0-1.678-.69-3.197-1.8-4.285a1 1 0 1 0-1.4 1.428A3.985 3.985 0 0 1 16 12c0 .606-.195 1.335-.59 1.996L13 11.586V6.135c0-1.696-1.978-2.622-3.28-1.536L7.698 6.284l-1.99-1.991ZM4 8h.586L13 16.414v1.451c0 1.696-1.978 2.622-3.28 1.536L5.638 16H4a2 2 0 0 1-2-2v-4a2 2 0 0 1 2-2Z"/>
</svg>
</button>
  </div>
  )} */}
  {/* ESTO ES PARA PC */}
  <div className='w-full h-auto lg:flex lg:flex-col hidden'>
    <Seccion_bienvenida  escuchar={escuchar} quitar={quitar}/>
    <Seccion_fiesta/>
    <Seccion_retratos/>
    <Seccion_reloj/>
   
   
    {/* <div className='w-full h-screen'>
   <img className='w-full h-screen relative' src="https://firebasestorage.googleapis.com/v0/b/boda-8ade5.appspot.com/o/plantilla.jpg?alt=media&token=4e889593-d03a-4187-9c5e-95691aa65e8f" alt="" />
    </div> */}
    {/* <div className='w-full h-screen'>
   <img className='w-full h-screen relative' src="https://firebasestorage.googleapis.com/v0/b/boda-8ade5.appspot.com/o/plantilla.jpg?alt=media&token=4e889593-d03a-4187-9c5e-95691aa65e8f" alt="" />
    </div> */}
    {/* <div className='w-full absolute h-auto flex justify-center gap-10 top-[230%]'>
  </div> */}
   {/* <div className='absolute w-full h-auto 2xl:top-[413%] lg:top-[420%] gap-4 flex flex-col items-center'>
   <p className='text-[3rem]  calendar  text-center pacifico text-[#4A663E]'>Dress Code</p>
  <img className=' w-[25rem] pl-[2rem]' src="https://firebasestorage.googleapis.com/v0/b/boda-8ade5.appspot.com/o/percha.png?alt=media&token=84997594-df1b-4115-8610-3cee7fc6282d" alt="" />
  <p className='text-[1.5rem] calendar text-[#8B9360]'>Una orientación para tu vestuario</p>
  <Anchor onClick={openModal} className='border-solid border-[gray] border-[2px] text-[gray] hover:bg-[#8B9360] hover:text-white  rounded-[5px] text-[1.3rem] px-[2rem] py-[0.3rem]'>Ver más</Anchor>
  </div> */}
  {/* <img className='absolute top-[307%]  w-full h-[10rem]' src="https://firebasestorage.googleapis.com/v0/b/boda-8ade5.appspot.com/o/e9675110-4400-416c-9351-b3fa86f4b90f.png?alt=media&token=9776d21d-d1f6-48f8-bd84-2c315a65c394" alt="" />
  <img className='absolute top-[395%]  w-full h-[10rem]' src="https://firebasestorage.googleapis.com/v0/b/boda-8ade5.appspot.com/o/ab48dc1f-dc37-42e0-8517-e8aa4cd21acf.png?alt=media&token=01b68fb3-77e7-46da-a17d-f64894241c32" alt="" />
  <div className='w-full h-auto absolute 2xl:top-[475%] lg:top-[490%] flex flex-col items-center'>
  <p className='pacifico text-[#4A663E] text-[3rem] '>Regalos</p>
  <div className='flex flex-col gap-4 items-center'>
  <img className='w-[20rem]' src="https://firebasestorage.googleapis.com/v0/b/boda-8ade5.appspot.com/o/11e1577f-13cc-4ebd-9b7c-612bb9b892dd.png?alt=media&token=a6df4ed6-ec9d-422d-96b6-5e09df27a975" alt="" />
  <p className=' text-[1.5rem] calendar text-[#8B9360]'>Si deseás regalarnos algo más que tu hermosa presencia ...</p>
  <Anchor onClick={openModal2} className='border-solid border-[gray] hover:bg-[#8B9360] hover:text-white  border-[2px] text-[1.3rem] text-[gray] rounded-[5px] px-[2rem] py-[0.3rem]'>Ver más</Anchor>
  </div>
  </div> */}
</div>
  {/* CELULAR
  <div className='w-full h-screen lg:hidden flex justify-center'>
  <img  src="https://firebasestorage.googleapis.com/v0/b/boda-8ade5.appspot.com/o/template11.jpg?alt=media&token=8d59a4fd-7146-4c68-8261-c8d2aae26642" alt="" />
  <img className='absolute w-[12rem] top-[9%] animate-fade-up animate-once' src="https://firebasestorage.googleapis.com/v0/b/boda-8ade5.appspot.com/o/fotex.png?alt=media&token=723dbb16-3684-4677-ba28-f4c985c573e2" alt="" />
  <div className='flex w-full justify-center absolute top-[59%] gap-5 items-center animate-fade-up animate-once'>
    <div className='border-solid border-[1.5px] border-[#6E7849] w-[20%] '></div>
    <p className='sans text-[#6E7849] font-semibold'>15.11.24</p>
    <div className='border-solid border-[1.5px] border-[#6E7849] w-[20%]'></div>
  </div>
  <div className='flex w-full justify-center absolute top-[80%] gap-5 items-center animate-fade-up animate-once'>
    <div className='border-solid border-[1.5px] border-[#6E7849] w-[72%] '></div>
  </div>
  <div className='flex w-full justify-center gap-2 absolute top-[65%] animate-fade-up animate-once items-center'>
    <p className='calendar text-[3rem]'>Gus</p>
    <p className='sans text-[2rem] text-white bg-[#6E7849] rounded-full px-[0.7rem]'>&</p>
    <p className='calendar text-[3rem]'>Ari</p>
  </div>
  <div className='flex flex-col items-center absolute animate-fade-up animate-once top-[87%] text-[#848F60] calendar text-[1rem]'>
  <p>“ El amor es una palabra,</p>
  <p>hasta que alguien llega para darle sentido”</p>
  </div>
  {sound === false && (
   <div className=''>
   <button onClick={escuchar}>
   <svg class="w-10 h-10 bg-[#9494946c] py-[0.2rem] px-[0.2rem] rounded-full text-[gray] fixed top-4 right-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
 <path fill-rule="evenodd" d="M18.458 3.11A1 1 0 0 1 19 4v16a1 1 0 0 1-1.581.814L12 16.944V7.056l5.419-3.87a1 1 0 0 1 1.039-.076ZM22 12c0 1.48-.804 2.773-2 3.465v-6.93c1.196.692 2 1.984 2 3.465ZM10 8H4a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h6V8Zm0 9H5v3a1 1 0 0 0 1 1h3a1 1 0 0 0 1-1v-3Z" clip-rule="evenodd"/>
</svg>

   </button>
 </div>
 )}
  {sound === true && (
    <div className=''>
    <button onClick={quitar}>
    <svg class="w-10 h-10 bg-[#9494946c] py-[0.2rem] px-[0.2rem] rounded-full text-[gray] fixed top-4 right-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
  <path d="M5.707 4.293a1 1 0 0 0-1.414 1.414l14 14a1 1 0 0 0 1.414-1.414l-.004-.005C21.57 16.498 22 13.938 22 12a9.972 9.972 0 0 0-2.929-7.071 1 1 0 1 0-1.414 1.414A7.972 7.972 0 0 1 20 12c0 1.752-.403 3.636-1.712 4.873l-1.433-1.433C17.616 14.37 18 13.107 18 12c0-1.678-.69-3.197-1.8-4.285a1 1 0 1 0-1.4 1.428A3.985 3.985 0 0 1 16 12c0 .606-.195 1.335-.59 1.996L13 11.586V6.135c0-1.696-1.978-2.622-3.28-1.536L7.698 6.284l-1.99-1.991ZM4 8h.586L13 16.414v1.451c0 1.696-1.978 2.622-3.28 1.536L5.638 16H4a2 2 0 0 1-2-2v-4a2 2 0 0 1 2-2Z"/>
</svg>
</button>
  </div>
  )}
  </div>
 
  <div className='w-full h-screen lg:hidden flex justify-center bg-[#FDFAF5]'>
    <div className='w-full absolute items-center flex flex-col  h-[65%]'>
    <div className='w-full h-auto flex py-[1rem] flex-col gap-3 items-center lg:gap-2 2xl:gap-5'>
      <p className='calendar 2xl:text-[2.5rem] text-[2rem] lg:text-[2.3rem] font-semibold text-center text-[#4A663E]'>Fecha</p>
      <p className='calendar text-[1.7rem] lg:text-[2rem]  text-center text-[#4A663E]'>15 . 11 . 2024</p>
      <p className='calendar 2xl:text-[2.5rem] text-[2rem] lg:text-[2.3rem] font-semibold text-center text-[#4A663E]'>Dirección</p>
      <p className='calendar text-[1.7rem] lg:text-[2rem]  text-center text-[#4A663E]'>Uruguay 753-CABA</p>
      <p className='calendar 2xl:text-[2.5rem] text-[2rem] lg:text-[2.3rem] font-semibold text-center text-[#4A663E]'>Horario</p>
      <p className='calendar text-[1.7rem] lg:text-[2rem]  text-center text-[#4A663E]'>9:30 Hrs</p>
      <Anchor  to={'https://maps.app.goo.gl/LPEkdE7BXMei7e6E6'} className='border-solid z-50 border-[gray] hover:bg-[#8B9360] hover:text-white  border-[2px] text-[1.3rem] text-[gray] rounded-[5px] px-[0.5rem] py-[0.3rem]'>Como llegar</Anchor>
    </div>
   
    </div>
    <div className='w-full h-screen absolute'>
    <div className='w-full h-[35%]  flex flex-col items-center absolute bottom-0'>
      <img className='w-[10.5rem]' src="https://firebasestorage.googleapis.com/v0/b/boda-8ade5.appspot.com/o/2.jpg?alt=media&token=25bbad8b-97e6-49e7-881c-6e4f36e9fbea" alt="" />
    <div className='flex justify-center top-[76%] h-auto items-center bg-cover w-full absolute bg-[url("https://firebasestorage.googleapis.com/v0/b/boda-8ade5.appspot.com/o/sticker.png?alt=media&token=52e0234c-081d-4208-9034-d8a24d8a57f8")]'>
    <p className='calendar text-[white] text-[2rem]'>Fiesta</p>
    </div>
    </div>
    </div>
    </div>
  <div className='w-full h-screen lg:hidden  relative bg-[#FDFAF5]'>
  <div className='w-full absolute items-center flex flex-col  h-[65%]'>
    <div className='w-full h-auto flex py-[1rem] flex-col items-center gap-3 lg:gap-2 2xl:gap-5'>
        <p className='calendar 2xl:text-[2.5rem] text-[2rem] lg:text-[2.3rem] font-semibold text-center text-[#4A663E]'>Fecha</p>
        <p className='calendar text-[1.7rem] lg:text-[2rem]  text-center text-[#4A663E]'>16 . 11 . 2024</p>
        <p className='calendar 2xl:text-[2.5rem] text-[2rem] lg:text-[2.3rem] font-semibold text-center text-[#4A663E]'>Dirección</p>
        <p className='calendar text-[1.7rem] lg:text-[2rem]  text-center text-[#4A663E]'>Av. Brasil 726-CABA</p>
        <p className='calendar 2xl:text-[2.5rem] text-[2rem] lg:text-[2.3rem] font-semibold text-center text-[#4A663E]'>Horario</p>
        <p className='calendar text-[1.7rem] lg:text-[2rem]  text-center text-[#4A663E]'>19:30 Hrs</p>
        <Anchor to={'https://maps.app.goo.gl/jpyn5nzieWpRmgSL9'} className='z-50 border-solid border-[gray] border-[2px] text-[gray] hover:bg-[#8B9360] hover:text-white  rounded-[5px] text-[1.3rem] px-[1rem] py-[0.3rem]'>Como llegar</Anchor>
      </div>
  </div>
  <img className='w-full h-[6rem] top-[68%] absolute' src="https://firebasestorage.googleapis.com/v0/b/boda-8ade5.appspot.com/o/raya_mobile.png?alt=media&token=b45e1f39-b8c7-42f2-95f1-ad37f7315842" alt="" />
  <div className='w-full h-auto px-[1rem] gap-2 flex flex-col absolute top-[82%] items-center'>
  <p className='text-[1.5rem] text-[#4A663E] font-bold calendar pacifico'>Retratos de nuestro amor</p>
  <p className='text-[1rem] text-[#8B9360]  calendar text-center'>Un minuto, un segundo, un instante que queda en la eternidad</p>
  </div>
  </div>
  <div className='w-full h-screen relative lg:hidden flex flex-col items-center bg-[#FDFAF5]'>
  <CarouselMulti responsive={responsive} className=' w-[90%] h-[50vh]' autoPlay infinite={true}>
    <img  className='object-cover w-full h-full' src="https://firebasestorage.googleapis.com/v0/b/boda-8ade5.appspot.com/o/1.1.png?alt=media&token=91c33ec9-d78a-4ef6-9f1d-3ffd2ca9ac38" alt="" />
    <img className='object-cover w-full h-full' src="https://firebasestorage.googleapis.com/v0/b/boda-8ade5.appspot.com/o/2.2.png?alt=media&token=4634c5ac-d264-43f7-b734-22001b53bfcd" alt="" />
    <img className='object-cover w-full h-full' src="https://firebasestorage.googleapis.com/v0/b/boda-8ade5.appspot.com/o/4.png?alt=media&token=f69434cc-9624-4468-a313-2ebc4401eb5a" alt="" />
    <img className='object-cover w-full h-full' src="https://firebasestorage.googleapis.com/v0/b/boda-8ade5.appspot.com/o/5.png?alt=media&token=34a93b74-09bb-40ec-9367-795ce92a07e0" alt="" />
    <img className='object-cover w-full h-full' src="https://firebasestorage.googleapis.com/v0/b/boda-8ade5.appspot.com/o/6.png?alt=media&token=0427cc56-e8e2-4943-95a8-13f09af8280f" alt="" />
</CarouselMulti>
  <div className='w-full h-[50vh]'>
    <img className='w-full h-[4rem]' src="https://firebasestorage.googleapis.com/v0/b/boda-8ade5.appspot.com/o/ab48dc1f-dc37-42e0-8517-e8aa4cd21acf.png?alt=media&token=01b68fb3-77e7-46da-a17d-f64894241c32" alt="" />
  </div>
  <div className='w-full z-50 absolute top-[58.5%] flex flex-col items-center'>
    <p className='text-[2rem]  calendar  text-center pacifico text-[#4A663E]'>Dress code</p>
    <img className='w-[17rem] pl-[2rem]' src="https://firebasestorage.googleapis.com/v0/b/boda-8ade5.appspot.com/o/percha.png?alt=media&token=84997594-df1b-4115-8610-3cee7fc6282d" alt="" />
  <p className='text-[1rem] calendar text-[#8B9360]'>Una orientación para tu vestuario</p>
  <Anchor onClick={openModal} className='border-solid border-[gray] border-[2px] mt-[1rem] text-[1.2rem] text-[gray] hover:bg-[#8B9360] hover:text-white  rounded-[5px]  px-[0.5rem] py-[0.3rem]'>Ver más</Anchor>
  </div>
  
    </div>
    <div className='w-full h-screen relative lg:hidden flex flex-col items-center bg-[#FDFAF5]'>
  
  <div className='w-full z-50 absolute flex flex-col items-center'>
    <p className='text-[2rem]  calendar  text-center pacifico text-[#4A663E]'>Regalos</p>
    <img className='w-[14rem]' src="https://firebasestorage.googleapis.com/v0/b/boda-8ade5.appspot.com/o/11e1577f-13cc-4ebd-9b7c-612bb9b892dd.png?alt=media&token=a6df4ed6-ec9d-422d-96b6-5e09df27a975" alt="" />
    <p className=' text-[1rem] text-center calendar text-[#8B9360]'>Si deseás regalarnos algo más que tu hermosa presencia ...</p>
    <Anchor onClick={openModal2} className='border-solid z-50 border-[gray] border-[2px] mt-[1rem] text-[1.2rem]  text-[gray] hover:bg-[#8B9360] hover:text-white  rounded-[5px]  px-[0.5rem] py-[0.3rem]'>Ver más</Anchor>
  </div>
  <div className='w-full h-screen  flex items-end'>
    <div className='w-full h-[50vh] bottom-0 flex items-end'>
      <footer className='w-full py-[3rem] flex text-white flex-col gap-5 justify-center bg-[#4A663E] items-center'>
        <p className='font-semibold'>Desarrollado por Gustavo Vásquez</p>
        <div className='w-full gap-5 flex justify-center items-center'>
        <p className='font-semibold'>📞 Contacto</p>
        <a href="">1162206510</a>
        </div>
        <div className='w-full gap-5 flex justify-center items-center'>
        <Anchor to={'https://www.facebook.com/gustavoalex.vasquezmore/'} className='w-[1.5rem] rounded-full bg-white'><img src="https://firebasestorage.googleapis.com/v0/b/boda-8ade5.appspot.com/o/face.png?alt=media&token=f51c364e-7d5c-4260-998c-7f5abb985310" alt="" /></Anchor>
        <Anchor to={'https://www.instagram.com/alexmoreok/'} className='w-[1.5rem] rounded-full bg-white'><img src="https://firebasestorage.googleapis.com/v0/b/boda-8ade5.appspot.com/o/insta.png?alt=media&token=01c7cae8-0f51-47b0-9065-81fcf59f5514" alt="" /></Anchor>
        <Anchor to={'https://wa.link/bhai5g'} className='w-[1.5rem]'><img src="https://firebasestorage.googleapis.com/v0/b/boda-8ade5.appspot.com/o/whats.png?alt=media&token=db137e7d-ea22-4328-9d49-a54232d20790" alt="" /></Anchor>
        </div>
        <p >Todos los derechos reservados®</p>
      </footer>
    </div>
  </div>
  </div>

    {modal && <ModalDressCode closeModal={closeModal} />}
    {modal2 && <Modal2 closeModal2={closeModal2} />} */}
  </>
  );
}
