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
   <div className='w-full h-screen relative overflow-hidden py-[2rem] flex justify-center items-center bg-cover ' style={{ backgroundImage: `url(${background})` }}>
        <div className='w-[50%]  flex justify-center items-center'>
          <div className='w-[65%] h-[60vh] bg-[#869A98]  flex flex-col gap-[2rem] justify-center items-center px-[4rem] py-[2rem]'>
            <p className='text-white pacifico text-[3rem]'>Regalos</p>
            <p className='text-white pacifico text-center text-[1.2rem]'>"Tu presencia es lo más importante para nosotros. Sin embargo, si deseas hacer una contribución para ayudarnos a hacer este día aún más especial, lo agradeceremos profundamente."</p>
            <button onClick={openModal} className='bg-[#C4C599] z-40 text-white px-[2rem] py-[0.5rem] rounded-[10px] font-semibold montserrat'>Aportar algo especial</button>
          </div>
        </div>
        <div className='w-[50%] h-screen'>
        <div className=' h-full flex justify-center items-center'>
            <div className='absolute w-full h-[85vh]  flex  justify-center bg-contain bg-center bg-no-repeat bg-[url("https://firebasestorage.googleapis.com/v0/b/boda-8ade5.appspot.com/o/acf5f505-6bc8-4565-a189-2990c9cd856c.png?alt=media&token=7fd31734-19c6-43ca-acc7-a08d526fec33")]'>
                <div className=' flex flex-col  pt-[7rem] items-center'>
                    <p className='top-[120%] left-[40.5%] text-[5rem] pacifico text-[#4A663E]'>Faltan</p>
                    <div className='flex gap-5'>
                        <div className='text-center border-r-[1px] border-solid border-[#4A663E] pr-[1rem]'>
                            <div className='text-[3.5rem] calendar text-[#8B9360]'>{timeLeft.days}</div>
                            <div className='text-[1.2rem] font-bold calendar text-[#4A663E]'>Días</div>
                        </div>
                        <div className='text-center border-r-[1px] border-solid border-[#4A663E] pr-[1rem]'>
                            <div className='text-[3.5rem] calendar text-[#8B9360]'>{timeLeft.hours.toString().padStart(2, '0')}</div>
                            <div className='text-[1.2rem] font-bold calendar text-[#4A663E]'>Horas</div>
                        </div>
                        <div className='text-center border-r-[1px] border-solid border-[#4A663E] pr-[1rem]'>
                            <div className='text-[3.5rem] calendar text-[#8B9360]'>{timeLeft.minutes.toString().padStart(2, '0')}</div>
                            <div className='text-[1.2rem] font-bold calendar text-[#4A663E]'>Minutos</div>
                        </div>
                        <div className='text-center'>
                            <div className='text-[3.5rem] calendar text-[#8B9360]'>{timeLeft.seconds.toString().padStart(2, '0')}</div>
                            <div className='text-[1.2rem] font-bold calendar text-[#4A663E]'>Segundos</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </div>
    </div>
   </>
);}
