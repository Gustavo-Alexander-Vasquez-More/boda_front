import React, { useEffect, useState } from 'react';
import background   from '../images/plantilla.png';
import Modal2 from './modal2';
export default function seccion_reloj() {
  const [modal, setModal]=useState(false)
  function openModal(){
    setModal(true)
  }
  function closeModal(){
    setModal(false)
  }
    const calculateTimeLeft = () => {
        const targetDate = new Date('2025-03-08T17:30:00');
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
   <>
   {modal === true && (
    <Modal2 closeModal={closeModal}/>
   )}
   <div className='w-full h-[80vh] relative overflow-hidden py-[2rem] flex  gap-4 lg:gap-0 justify-center items-center bg-cover bg-[url("https://images.unsplash.com/photo-1521478706270-f2e33c203d95?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fHJlZ2FsbyUyMGRlJTIwYm9kYXN8ZW58MHx8MHx8fDA%3D")]'>
        <div className='w-full lg:w-[50%]  flex justify-center items-center'>
          <div className='w-[90%] lg:w-[65%] lg:h-[60vh] bg-[#ffffffbc]  flex flex-col gap-[2rem] justify-center items-center px-[1rem] lg:px-[4rem] py-[2rem]'>
            <p className='text-[#4A663E] pacifico text-[3rem]'>Regalos</p>
            <p className='text-[black] pacifico text-center text-[1.5rem] lg:text-[1.5rem]'>"Tu presencia es lo más importante para nosotros. Sin embargo, si deseas hacernos un obsequio puedes hacerlo aquí."</p>
            <button onClick={openModal} className='bg-[#4A663E] z-40 text-white px-[2rem] py-[0.5rem] rounded-[10px] font-semibold montserrat'>Danos tu obsequio</button>
          </div>
        </div>
        
    </div>
   </>
);}
