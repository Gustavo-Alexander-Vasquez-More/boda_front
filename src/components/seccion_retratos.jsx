import React from 'react';
import CarouselMulti from "react-multi-carousel";
import background   from '../images/plantilla.png';
import "react-multi-carousel/lib/styles.css";
export default function seccion_retratos({deslizar_dress}) {
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
    
  return (
    <div className='w-full lg:h-[85vh] py-[1rem] flex justify-center items-center bg-cover px-[1rem]' style={{ backgroundImage: `url(${background})` }}>
        <div className=' flex flex-col w-full items-center gap-[2rem] lg:gap-[4rem] text-center'>
        <div className='flex lg:flex-row flex-col items-center text-center text-[3rem] lg:text-[5rem] lg:gap-3'>
        <p className=' text-[#4A663E] font-bold calendar pacifico'>Sergio</p>
        <p className=' text-[#4A663E] font-bold calendar pacifico'>& </p>
        <p className=' text-[#4A663E] font-bold calendar pacifico'>Cristina</p>
        </div>
        
        <CarouselMulti responsive={responsive} className="lg:w-[30%] w-[90%] h-[35vh] lg:h-[45vh]" autoPlay infinite={true}>
    
    <img className="object-contain w-full h-full " src="https://firebasestorage.googleapis.com/v0/b/boda-8ade5.appspot.com/o/fotos%20carrousel%20sergio%20y%20cristina%2FIMG-20241201-WA0012.jpg?alt=media&token=dff93569-2bae-4476-91dd-c7af9279e30b" alt="image not found" />
    <img className="object-contain w-full h-full " src="https://firebasestorage.googleapis.com/v0/b/boda-8ade5.appspot.com/o/fotos%20carrousel%20sergio%20y%20cristina%2FIMG-20241201-WA0014.jpg?alt=media&token=ff4ed7b9-8441-43f8-99ec-ace0ca2dbf02" alt="image not found" />
    <img className="object-contain w-full h-full " src="https://firebasestorage.googleapis.com/v0/b/boda-8ade5.appspot.com/o/fotos%20carrousel%20sergio%20y%20cristina%2FIMG-20241201-WA0015.jpg?alt=media&token=2ca20571-6c9b-4f92-9bbc-1b3cfe232502" alt="image not found" />
    <img className="object-contain w-full h-full " src="https://firebasestorage.googleapis.com/v0/b/boda-8ade5.appspot.com/o/fotos%20carrousel%20sergio%20y%20cristina%2FIMG-20241201-WA0017.jpg?alt=media&token=65400935-6872-4474-bf53-74ec6fe05beb" alt="image not found" />
    <img className="object-contain w-full h-full " src="https://firebasestorage.googleapis.com/v0/b/boda-8ade5.appspot.com/o/fotos%20carrousel%20sergio%20y%20cristina%2FIMG-20241201-WA0021.jpg?alt=media&token=40db93d7-a31f-4ec3-961c-4d0572d9bb83" alt="image not found" />
    <img className="object-contain w-full h-full " src="https://firebasestorage.googleapis.com/v0/b/boda-8ade5.appspot.com/o/fotos%20carrousel%20sergio%20y%20cristina%2FIMG-20241201-WA0027.jpg?alt=media&token=e3d119ee-d050-4885-9495-740d1a9e5c06" alt="image not found" />
    <img className="object-contain w-full h-full " src="https://firebasestorage.googleapis.com/v0/b/boda-8ade5.appspot.com/o/fotos%20carrousel%20sergio%20y%20cristina%2FIMG-20241201-WA0028.jpg?alt=media&token=c19d378d-d2c8-407b-800f-9b9404f86264" alt="image not found" />
    <img className="object-contain w-full h-full " src="https://firebasestorage.googleapis.com/v0/b/boda-8ade5.appspot.com/o/fotos%20carrousel%20sergio%20y%20cristina%2Ffotex1.jpg?alt=media&token=7d12cb15-c3ae-4715-8351-4e3d19f56b0b" alt="image not found" />
    <img className="object-contain w-full h-full " src="https://firebasestorage.googleapis.com/v0/b/boda-8ade5.appspot.com/o/fotos%20carrousel%20sergio%20y%20cristina%2Ffotex2.jpg?alt=media&token=bd8a087c-6a4a-4623-bf4c-b4d73ed86648" alt="image not found" />
</CarouselMulti>
<button  className=' rounded-full p-2 flex flex-col items-center lg:hidden'>
          <svg class="w-8 h-8 text-black" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 9-7 7-7-7"/>
          </svg>
          <p className='text-[1rem] font-bold'>Sigue bajando</p>
      </button>
    </div>
    </div>
  );
}
