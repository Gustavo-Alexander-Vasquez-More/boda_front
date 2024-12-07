import React, { useEffect, useState } from 'react';
import background   from '../images/plantilla.png';
export default function seccion_reloj() {
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
    <div className='w-full h-screen relative py-[2rem] flex justify-center items-center bg-cover ' style={{ backgroundImage: `url(${background})` }}>
        <div className='absolute w-full h-full flex justify-center items-center'>
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
);}
