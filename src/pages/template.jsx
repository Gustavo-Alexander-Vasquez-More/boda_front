import React, { useEffect, useRef, useState } from 'react';
import { Link as Anchor, useLocation } from 'react-router-dom';
import CarouselMulti from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import '../fonts/fonts.css'
import ModalDressCode from '../components/modalDressCode';
import Modal2 from '../components/modal2';
export default function template() {
const [modal, setModal]=useState(false)
const [modal2, setModal2]=useState(false)
const [sound, setSound]=useState(false)
const audioRef = useRef(new Audio('https://firebasestorage.googleapis.com/v0/b/boda-8ade5.appspot.com/o/Y2meta.app%20-%20Luis%20Fonsi%20-%20Llegaste%20T%C3%BA%20(128%20kbps).mp3?alt=media&token=506be528-2309-4339-84de-a96f16e1f160'));

  const escuchar = () => {
    audioRef.current.play();
    setSound(true);
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
const responsive = {
        desktop: {
        breakpoint: { max: 3000, min: 1279 },
        items: 1,
      },
      laptop: {
        breakpoint: { max: 1279, min: 1024 },
        items: 1,
      },
      tablet: {
        breakpoint: { max: 1023, min: 464 },
        items: 1,
      },
      mobile: {
        breakpoint: { max: 463, min: 0 },
        items: 1,
      }};
    const calculateTimeLeft = () => {
        const targetDate = new Date('2024-12-09T10:00:00');
        const now = new Date();
        const difference = targetDate - now;
    
        let timeLeft = {};
    
        if (difference > 0) {
          timeLeft = {
            days: Math.floor(difference / (1000 * 60 * 60 * 24)),
            hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
            minutes: Math.floor((difference / 1000 / 60) % 60),
            seconds: Math.floor((difference / 1000) % 60),
          };
        } else {
          timeLeft = { days: 0, hours: 0, minutes: 0, seconds: 0 };
        }
    
        return timeLeft;
      };
    
      const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());
    
      useEffect(() => {
        const timer = setInterval(() => {
          setTimeLeft(calculateTimeLeft());
        }, 1000);
    
        return () => clearInterval(timer);
      }, []);
    
  return (
    <div className='w-full h-auto'>
    <div className='w-full h-screen'>
      <video  className='w-full relative h-screen object-cover' muted autoPlay  src="https://firebasestorage.googleapis.com/v0/b/boda-8ade5.appspot.com/o/intronueva.mp4?alt=media&token=ae029dbf-b317-4cad-8b2d-91e508bdcb80" ></video>
    </div>
    <div className='w-full h-screen flex justify-center items-center'>
   <img className='w-full h-screen relative' src="https://firebasestorage.googleapis.com/v0/b/boda-8ade5.appspot.com/o/reloj.jpg?alt=media&token=42f20e32-eacc-4a9a-a653-17633b09704d" alt="" />
   <p className='absolute top-[120%] left-[40.5%] text-[5rem] pacifico text-[#4A663E]'>Faltan</p>
   <div className='absolute  top-[141%] left-[33%] flex  gap-5 items-center'>
    
      <div className='text-center border-r-[1px] border-solid border-[black] pr-[1rem]'>
        <div className='text-[4rem] calendar text-[#4A663E]'>{timeLeft.days}</div>
        <div className='text-[1.5rem] font-bold calendar text-[#4A663E]'>Días</div>
      </div>
      <div className='text-center border-r-[1px] border-solid border-[black] pr-[1rem]'>
        <div className='text-[4rem] calendar text-[#4A663E]'>{timeLeft.hours.toString().padStart(2, '0')}</div>
        <div className='text-[1.5rem] font-bold calendar text-[#4A663E]'>Horas</div>
      </div>
      <div className='text-center border-r-[1px] border-solid border-[black] pr-[1rem]'>
        <div className='text-[4rem] calendar text-[#4A663E]'>{timeLeft.minutes.toString().padStart(2, '0')}</div>
        <div className='text-[1.5rem] font-bold calendar text-[#4A663E]'>Minutos</div>
      </div>
      <div className='text-center'>
        <div className='text-[4rem] calendar text-[#4A663E]'>{timeLeft.seconds.toString().padStart(2, '0')}</div>
        <div className='text-[1.5rem] font-bold calendar text-[#4A663E]'>Segundos</div>
      </div>
    </div>
   </div>
   <div className='w-full h-screen'>
   <img className='w-full h-screen relative' src="https://firebasestorage.googleapis.com/v0/b/boda-8ade5.appspot.com/o/plantilla.jpg?alt=media&token=4e889593-d03a-4187-9c5e-95691aa65e8f" alt="" />
   <img className='absolute top-[195%] left-[31%] w-[10rem]' src="https://firebasestorage.googleapis.com/v0/b/boda-8ade5.appspot.com/o/3.jpg?alt=media&token=a0e778ad-d008-4495-ad29-58f62340cc00" alt="" />
   <img className='absolute top-[195%]  right-[31%] w-[10rem]' src="https://firebasestorage.googleapis.com/v0/b/boda-8ade5.appspot.com/o/2.jpg?alt=media&token=25bbad8b-97e6-49e7-881c-6e4f36e9fbea" alt="" />
   <div className='absolute top-[220%] w-full flex justify-center gap-5'>
   <img className='w-[25rem]' src="https://firebasestorage.googleapis.com/v0/b/boda-8ade5.appspot.com/o/sticker.png?alt=media&token=52e0234c-081d-4208-9034-d8a24d8a57f8" alt="" />
   <img className='w-[25rem]' src="https://firebasestorage.googleapis.com/v0/b/boda-8ade5.appspot.com/o/sticker.png?alt=media&token=52e0234c-081d-4208-9034-d8a24d8a57f8" alt="" />
   </div>
   <div className='absolute top-[219.7%] w-full justify-center flex gap-[22rem]'>
   <p className='text-white calendar  text-[2.5rem] '>Civil</p>
   <p className='text-white calendar text-[2.5rem] '>Fiesta</p>
   </div>
  
   </div>
   <div className='w-full h-screen'>
   <img className='w-full h-screen relative' src="https://firebasestorage.googleapis.com/v0/b/boda-8ade5.appspot.com/o/plantilla.jpg?alt=media&token=4e889593-d03a-4187-9c5e-95691aa65e8f" alt="" />
    <div className='absolute flex flex-col top-[330%] w-full items-center gap-10 text-center'>
        <p className='text-[2.5rem] text-[#4A663E] font-bold calendar pacifico'>Retratos de nuestro amor</p>
        <p className='text-[1.5rem] text-[#8B9360]  calendar'>Un minuto, un segundo, un instante que queda en la eternidad</p>
        
        <CarouselMulti responsive={responsive} className=' w-[25%] h-[50vh]' autoPlay  showDots={true}  infinite={true}>
    <img  className='object-cover w-full h-full' src="https://firebasestorage.googleapis.com/v0/b/boda-8ade5.appspot.com/o/1.1.png?alt=media&token=91c33ec9-d78a-4ef6-9f1d-3ffd2ca9ac38" alt="" />
    <img className='object-cover w-full h-full' src="https://firebasestorage.googleapis.com/v0/b/boda-8ade5.appspot.com/o/2.2.png?alt=media&token=4634c5ac-d264-43f7-b734-22001b53bfcd" alt="" />
    <img className='object-cover w-full h-full' src="https://firebasestorage.googleapis.com/v0/b/boda-8ade5.appspot.com/o/4.png?alt=media&token=f69434cc-9624-4468-a313-2ebc4401eb5a" alt="" />
    <img className='object-cover w-full h-full' src="https://firebasestorage.googleapis.com/v0/b/boda-8ade5.appspot.com/o/5.png?alt=media&token=34a93b74-09bb-40ec-9367-795ce92a07e0" alt="" />
    <img className='object-cover w-full h-full' src="https://firebasestorage.googleapis.com/v0/b/boda-8ade5.appspot.com/o/6.png?alt=media&token=0427cc56-e8e2-4943-95a8-13f09af8280f" alt="" />
</CarouselMulti>
        
    </div>
    </div>
    <div className='w-full h-screen'>
   <img className='w-full h-screen relative' src="https://firebasestorage.googleapis.com/v0/b/boda-8ade5.appspot.com/o/plantilla.jpg?alt=media&token=4e889593-d03a-4187-9c5e-95691aa65e8f" alt="" />
    </div>
    <div className='w-full h-screen'>
   <img className='w-full h-screen relative' src="https://firebasestorage.googleapis.com/v0/b/boda-8ade5.appspot.com/o/plantilla.jpg?alt=media&token=4e889593-d03a-4187-9c5e-95691aa65e8f" alt="" />
    </div>
    <div className='w-full absolute h-auto flex justify-center gap-10 top-[230%]'>
    <div className='bg-[white]   w-[25%] h-auto'>
    <div className='w-full h-auto flex py-[1rem] flex-col items-center gap-5'>
      <p className='calendar text-[2.5rem] font-semibold text-center text-[#4A663E]'>Fecha</p>
      <p className='calendar text-[2rem]  text-center text-[#4A663E]'>08 . 11 . 2024</p>
      <p className='calendar text-[2.5rem] font-semibold text-center text-[#4A663E]'>Lugar</p>
      <p className='calendar text-[2rem]  text-center text-[#4A663E]'>Sede Comuna 1-CABA</p>
      <p className='calendar text-[2.5rem] font-semibold text-center text-[#4A663E]'>Dirección</p>
      <p className='calendar text-[2rem]  text-center text-[#4A663E]'>Humberto 1º 250</p>
      <Anchor to={'https://maps.app.goo.gl/GBbe2QardeVUryev8'} className='border-solid border-[gray] hover:bg-[#8B9360] hover:text-white  border-[2px] text-[1.3rem] text-[gray] rounded-[5px] px-[0.5rem] py-[0.3rem]'>Como llegar</Anchor>
    </div>
   </div>
   <div className='bg-[white]   w-[25%] h-auto'>
    <div className='w-full h-auto flex py-[1rem] flex-col items-center gap-5'>
      <p className='calendar text-[2.5rem] font-semibold text-center text-[#4A663E]'>Fecha</p>
      <p className='calendar text-[2rem]  text-center text-[#4A663E]'>09 . 11 . 2024</p>
      <p className='calendar text-[2.5rem] font-semibold text-center text-[#4A663E]'>Lugar</p>
      <p className='calendar text-[2rem]  text-center text-[#4A663E]'>Alex recepciones</p>
      <Anchor to={'https://wa.link/q1q985'} className='border-solid border-[gray] border-[2px] hover:bg-[#8B9360] hover:text-white  text-[gray] rounded-[5px] text-[1.3rem] px-[0.5rem] py-[0.3rem]'>Confirmar asistencia</Anchor>
      <p className='calendar text-[2.5rem] font-semibold text-center text-[#4A663E]'>Dirección</p>
      <p className='calendar text-[2rem]  text-center text-[#4A663E]'>Alsina 2971</p>
     <Anchor to={'https://maps.app.goo.gl/putpEhXUdmejLK1x8'} className='border-solid border-[gray] border-[2px] text-[gray] hover:bg-[#8B9360] hover:text-white  rounded-[5px] text-[1.3rem] px-[0.5rem] py-[0.3rem]'>Como llegar</Anchor>
     
    </div>
   </div>
    </div>
   <div className='absolute w-full h-auto top-[413%] gap-4 flex flex-col items-center'>
   <p className='text-[3rem]  calendar  text-center pacifico text-[#4A663E]'>Dress Code</p>
  <img className=' w-[25rem] pl-[2rem]' src="https://firebasestorage.googleapis.com/v0/b/boda-8ade5.appspot.com/o/percha.png?alt=media&token=84997594-df1b-4115-8610-3cee7fc6282d" alt="" />
  <p className='text-[1.5rem] calendar text-[#8B9360]'>Una orientacion para tu vestuario</p>
  <Anchor onClick={openModal} className='border-solid border-[gray] border-[2px] text-[gray] hover:bg-[#8B9360] hover:text-white  rounded-[5px] text-[1.3rem] px-[0.5rem] py-[0.3rem]'>Ver más</Anchor>
  </div>
  <img className='absolute top-[307%]  w-full h-[10rem]' src="https://firebasestorage.googleapis.com/v0/b/boda-8ade5.appspot.com/o/e9675110-4400-416c-9351-b3fa86f4b90f.png?alt=media&token=9776d21d-d1f6-48f8-bd84-2c315a65c394" alt="" />
  <img className='absolute top-[395%]  w-full h-[10rem]' src="https://firebasestorage.googleapis.com/v0/b/boda-8ade5.appspot.com/o/ab48dc1f-dc37-42e0-8517-e8aa4cd21acf.png?alt=media&token=01b68fb3-77e7-46da-a17d-f64894241c32" alt="" />
  <div className='w-full h-auto absolute top-[475%] flex flex-col items-center'>
  <img className='w-[20rem]' src="https://firebasestorage.googleapis.com/v0/b/boda-8ade5.appspot.com/o/11e1577f-13cc-4ebd-9b7c-612bb9b892dd.png?alt=media&token=a6df4ed6-ec9d-422d-96b6-5e09df27a975" alt="" />
  <div className='flex flex-col gap-4 items-center'>
  <p className='pacifico text-[#4A663E] text-[3rem] '>Regalos</p>
  <p className=' text-[1.5rem] calendar text-[#8B9360]'>Si deseas regalarnos algo más que tu hermosa presencia ...</p>
  <Anchor onClick={openModal2} className='border-solid border-[gray] hover:bg-[#8B9360] hover:text-white  border-[2px] text-[1.3rem] text-[gray] rounded-[5px] px-[0.5rem] py-[0.3rem]'>Ver más</Anchor>
  </div>
  </div>
  {modal && <ModalDressCode closeModal={closeModal} />}
  {modal2 && <Modal2 closeModal2={closeModal2} />}
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
  );
}
