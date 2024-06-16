import React, { useEffect, useState } from 'react';
import { Link as Anchor, useLocation } from 'react-router-dom';
import CarouselMulti from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import '../fonts/fonts.css'
import ModalDressCode from '../components/modalDressCode';
export default function template() {
const [modal, setModal]=useState(false)
const openModal = () => {
setModal(true);
}
const closeModal=()=>{
  setModal(false)
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
      <video  className='w-full relative h-screen object-cover' muted autoPlay  src="https://firebasestorage.googleapis.com/v0/b/boda-8ade5.appspot.com/o/Gus%20y%20Ari%20(3).mp4?alt=media&token=cd9bd2f7-434a-4955-a058-6b454ac02915" ></video>
    </div>
    <div className='w-full h-screen flex justify-center items-center'>
   <img className='w-full h-screen relative' src="https://firebasestorage.googleapis.com/v0/b/boda-8ade5.appspot.com/o/reloj.jpg?alt=media&token=42f20e32-eacc-4a9a-a653-17633b09704d" alt="" />
   <p className='absolute top-[120%] left-[40.5%] text-[5rem] calendar text-[black]'>Faltan</p>
   <div className='absolute  top-[141%] left-[33%] flex  gap-5 items-center'>
    
      <div className='text-center border-r-[1px] border-solid border-[black] pr-[1rem]'>
        <div className='text-[4rem] calendar'>{timeLeft.days}</div>
        <div className='text-[1.5rem] font-bold calendar'>Días</div>
      </div>
      <div className='text-center border-r-[1px] border-solid border-[black] pr-[1rem]'>
        <div className='text-[4rem] calendar'>{timeLeft.hours.toString().padStart(2, '0')}</div>
        <div className='text-[1.5rem] font-bold calendar'>Horas</div>
      </div>
      <div className='text-center border-r-[1px] border-solid border-[black] pr-[1rem]'>
        <div className='text-[4rem] calendar'>{timeLeft.minutes.toString().padStart(2, '0')}</div>
        <div className='text-[1.5rem] font-bold calendar'>Minutos</div>
      </div>
      <div className='text-center'>
        <div className='text-[4rem] calendar'>{timeLeft.seconds.toString().padStart(2, '0')}</div>
        <div className='text-[1.5rem] font-bold calendar'>Segundos</div>
      </div>
    </div>
   </div>
   <div className='w-full h-screen'>
   <img className='w-full h-screen relative' src="https://firebasestorage.googleapis.com/v0/b/boda-8ade5.appspot.com/o/plantilla.jpg?alt=media&token=4e889593-d03a-4187-9c5e-95691aa65e8f" alt="" />
   <img className='absolute top-[195%] left-[15%] w-[10rem]' src="https://firebasestorage.googleapis.com/v0/b/boda-8ade5.appspot.com/o/3.jpg?alt=media&token=a0e778ad-d008-4495-ad29-58f62340cc00" alt="" />
   <img className='absolute top-[195%]  right-[15%] w-[10rem]' src="https://firebasestorage.googleapis.com/v0/b/boda-8ade5.appspot.com/o/2.jpg?alt=media&token=25bbad8b-97e6-49e7-881c-6e4f36e9fbea" alt="" />
   <img className='absolute top-[220%] left-[6.5%] w-[25rem]' src="https://firebasestorage.googleapis.com/v0/b/boda-8ade5.appspot.com/o/sticker.png?alt=media&token=52e0234c-081d-4208-9034-d8a24d8a57f8" alt="" />
   <img className='absolute top-[220%] right-[6.5%] w-[25rem]' src="https://firebasestorage.googleapis.com/v0/b/boda-8ade5.appspot.com/o/sticker.png?alt=media&token=52e0234c-081d-4208-9034-d8a24d8a57f8" alt="" />
   <p className='text-white calendar absolute top-[219.7%] text-[2.5rem] left-[16%]'>Civil</p>
   <p className='text-white calendar absolute top-[219.7%] text-[2.5rem] left-[76%]'>Fiesta</p>
  
   </div>
   <div className='w-full h-screen'>
   <img className='w-full h-screen relative' src="https://firebasestorage.googleapis.com/v0/b/boda-8ade5.appspot.com/o/plantilla.jpg?alt=media&token=4e889593-d03a-4187-9c5e-95691aa65e8f" alt="" />
    <div className='absolute flex flex-col top-[330%] w-full items-center gap-10 text-center'>
        <p className='text-[2.5rem] text-[#8B9360] font-bold calendar'>Retratos de nuestro amor</p>
        <p className='text-[1.5rem] text-[#8B9360] font-bold calendar'>Un minuto, un segundo, un instante que queda en la eternidad</p>
        
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
    <div className='bg-[white] absolute top-[230%] w-[25%] h-auto  left-[7%]'>
    <div className='w-full h-auto flex py-[1rem] flex-col items-center gap-5'>
      <p className='calendar text-[2.5rem] font-semibold text-center'>Fecha</p>
      <p className='calendar text-[2rem]  text-center'>08 . 11 . 2024</p>
      <p className='calendar text-[2.5rem] font-semibold text-center'>Lugar</p>
      <p className='calendar text-[2rem]  text-center'>Sede Comuna 1-CABA</p>
      <p className='calendar text-[2.5rem] font-semibold text-center'>Dirección</p>
      <p className='calendar text-[2rem]  text-center'>Humberto 1º 250</p>
      <Anchor to={'https://maps.app.goo.gl/GBbe2QardeVUryev8'} className='border-solid border-[gray] hover:bg-[#8B9360] hover:text-white  border-[2px] text-[1.3rem] text-[gray] rounded-[5px] px-[0.5rem] py-[0.3rem]'>Como llegar</Anchor>
    </div>
   </div>
   <div className='bg-[white] absolute top-[230%] w-[25%] h-auto   right-[7%]'>
    <div className='w-full h-auto flex py-[1rem] flex-col items-center gap-5'>
      <p className='calendar text-[2.5rem] font-semibold text-center'>Fecha</p>
      <p className='calendar text-[2rem]  text-center'>09 . 11 . 2024</p>
      <p className='calendar text-[2.5rem] font-semibold text-center'>Lugar</p>
      <p className='calendar text-[2rem]  text-center'>Alex recepciones</p>
      <Anchor to={'https://wa.link/q1q985'} className='border-solid border-[gray] border-[2px] hover:bg-[#8B9360] hover:text-white  text-[gray] rounded-[5px] text-[1.3rem] px-[0.5rem] py-[0.3rem]'>Confirmar asistencia</Anchor>
      <p className='calendar text-[2.5rem] font-semibold text-center'>Dirección</p>
      <p className='calendar text-[2rem]  text-center'>Alsina 2971</p>
     <Anchor to={'https://maps.app.goo.gl/putpEhXUdmejLK1x8'} className='border-solid border-[gray] border-[2px] text-[gray] hover:bg-[#8B9360] hover:text-white  rounded-[5px] text-[1.3rem] px-[0.5rem] py-[0.3rem]'>Como llegar</Anchor>
     
    </div>
   </div>
   <div className='absolute w-full h-auto top-[407%] gap-4 flex flex-col items-center'>
   <p className='text-[3rem]  calendar  text-center pacifico text-[#4A663E]'>Dress Code</p>
  <img className=' w-[25rem] pl-[2rem]' src="https://firebasestorage.googleapis.com/v0/b/boda-8ade5.appspot.com/o/percha.png?alt=media&token=84997594-df1b-4115-8610-3cee7fc6282d" alt="" />
  <p className='text-[1.5rem] calendar'>Una orientacion para tu vestuario</p>
  <Anchor onClick={openModal} className='border-solid border-[gray] border-[2px] text-[gray] hover:bg-[#8B9360] hover:text-white  rounded-[5px] text-[1.3rem] px-[0.5rem] py-[0.3rem]'>Ver más</Anchor>
  </div>
  <img className='absolute top-[307%]  w-full h-[10rem]' src="https://firebasestorage.googleapis.com/v0/b/boda-8ade5.appspot.com/o/e9675110-4400-416c-9351-b3fa86f4b90f.png?alt=media&token=9776d21d-d1f6-48f8-bd84-2c315a65c394" alt="" />
  {modal && <ModalDressCode closeModal={closeModal} />}
  </div>
  );
}
