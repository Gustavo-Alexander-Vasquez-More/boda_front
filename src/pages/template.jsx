import React, { useEffect, useState } from 'react';
import { Link as Anchor, useLocation } from 'react-router-dom';
import CarouselMulti from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import '../fonts/fonts.css'
export default function template() {

const responsive = {
        desktop: {
        breakpoint: { max: 3000, min: 1279 },
        items: 3,
      },
      laptop: {
        breakpoint: { max: 1279, min: 1024 },
        items: 4,
      },
      tablet: {
        breakpoint: { max: 1023, min: 464 },
        items: 2,
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
   <img className='w-full h-screen relative' src="https://firebasestorage.googleapis.com/v0/b/boda-8ade5.appspot.com/o/Gus%20y%20Ari%20(2).jpg?alt=media&token=f3303993-41e0-49f7-ab98-d082f0e5edc8" alt="" />
   <div className='absolute top-[257%] left-[17%]'>
   <Anchor to={'https://wa.link/ehnn6s'} className='bg-[red] px-[0.7rem] py-[0.5rem] text-center text-white font-semibold rounded-[10px]'>Confirmar asistencia</Anchor>
   </div>
   <div className='absolute top-[257%] left-[74%]'>
   <Anchor to={'https://api.whatsapp.com/send?phone=541134167740&text=Hola%20Ari%20y%20Gus!%2C%20muchas%20gracias%20por%20invitarme%20a%20su%20fiesta%20de%20boda%20%E2%9D%A4%EF%B8%8F%2C%20quiero%20confirmar%20mi%20asistencia%20para%20poder%20celebrar%20junto%20a%20ustedes%20este%20d%C3%ADa%20tan%20especial!'} className='bg-[red] px-[0.7rem] py-[0.5rem] text-center text-white font-semibold rounded-[10px]'>Confirmar asistencia</Anchor>
   </div>
   <div className='absolute top-[280%] left-[13%]'>
   <iframe
      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3283.3419036483197!2d-58.369287899999996!3d-34.6207992!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95a334d305c0ad6f%3A0xfec98c7efe5dbb7e!2sHumberto%201%C2%BA%20250%2C%20C1103ACF%20Cdad.%20Aut%C3%B3noma%20de%20Buenos%20Aires!5e0!3m2!1ses-419!2sar!4v1718249950321!5m2!1ses-419!2sar"
      width="300"
      height="150"
      style={{ border: 0 }}
      allowFullScreen=""
      loading="lazy"
      referrerPolicy="no-referrer-when-downgrade"
    ></iframe>
   </div>
   <div className='absolute top-[280%] left-[70%]'>
   <iframe
      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3283.6699493765086!2d-58.41076272439287!3d-34.61250657295106!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95bccaf1ad164bd1%3A0x3a0c6f38e41ddcfd!2sAdolfo%20Alsina%202971%2C%20C1207AAC%20Cdad.%20Aut%C3%B3noma%20de%20Buenos%20Aires!5e0!3m2!1ses-419!2sar!4v1718250224826!5m2!1ses-419!2sar"
      width="300"
      height="150"
      style={{ border: 0 }}
      allowFullScreen=""
      loading="lazy"
      referrerPolicy="no-referrer-when-downgrade"
    ></iframe>
   </div>
   </div>
   <div className='w-full h-screen'>
   <img className='w-full h-screen relative' src="https://firebasestorage.googleapis.com/v0/b/boda-8ade5.appspot.com/o/Gus%20y%20Ari%20(3).jpg?alt=media&token=16e05cc0-2ffd-444c-8bed-48e9a52f4ca9" alt="" />
    <div className='absolute flex flex-col top-[312%] left-[30%] text-center'>
        <p className='text-[2.5rem] text-[gray] font-bold'>Retratos de nuestro amor</p>
        <p className='text-[1.5rem] text-[#831d1d] font-bold'>Un minuto, un segundo, un instante que queda en la eternidad</p>
    </div>
    
    <CarouselMulti responsive={responsive} className='flex items-center z-10 justify-center  absolute top-[-65%]'  infinite={true}>
 <div className='bg-[red] w-full h-[45vh]'>
   <img  className='w-full' src="https://img.freepik.com/foto-gratis/pareja-joven-juntos-caminando-parque-otono_1303-26190.jpg" alt="" />
 </div>
 <div className='bg-[red] w-full h-[40vh]'>
    <img className='w-full' src="https://images.ecestaticos.com/zRfC-onWw6Scca5K5PxNKW7Chzw=/240x0:2121x1410/1200x899/filters:fill(white):format(jpg)/f.elconfidencial.com%2Foriginal%2F12c%2F7ae%2F61c%2F12c7ae61c0b2e76905bdffa3bf6cbad1.jpg" alt="" />
 </div>
 <div className='bg-[red] w-full h-[40vh]'>
    <img className='w-full' src="https://media.istockphoto.com/id/1365865879/es/foto/cara-feliz-en-la-playa.jpg?s=612x612&w=0&k=20&c=Xrsq6Z373Na_P4ocnvQVKhncRNhuJdA2zr-9JDyLvaQ=" alt="" />
 </div>
 
</CarouselMulti>
    
    </div>
    <div className='w-full h-screen'>
   <img className='w-full h-screen relative' src="https://firebasestorage.googleapis.com/v0/b/boda-8ade5.appspot.com/o/Gus%20y%20Ari%20(3).jpg?alt=media&token=16e05cc0-2ffd-444c-8bed-48e9a52f4ca9" alt="" />
    </div>

    </div>
  );
}
