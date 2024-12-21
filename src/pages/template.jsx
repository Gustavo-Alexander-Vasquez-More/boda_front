import React, { useEffect, useRef, useState } from 'react';
import '../fonts/fonts.css'
import Seccion_bienvenida from '../components/seccion_bienvenida';
import Seccion_reloj from '../components/seccion_reloj';
import Seccion_fiesta from '../components/seccion_fiesta';
import Seccion_retratos from '../components/seccion_retratos';
import ModalDressCode from '../components/modalDressCode';
import Modal2 from '../components/modal2';
import Seccion_padres from '../components/seccion_padres';
import Seccion_dress_code from '../components/seccion_dress_code';
import { animateScroll as scroll } from 'react-scroll';
import Confirmacion from '../components/confirmacion';
import Footer from '../components/footer';
export default function template() {
const [modal, setModal]=useState(false)
const [modal2, setModal2]=useState(false)
const [sound, setSound]=useState(false)
 const [scrolly, setScrolly]=useState(false)
const audioRef = useRef(new Audio('https://firebasestorage.googleapis.com/v0/b/boda-8ade5.appspot.com/o/Aleluya%20cover%20-%20Leonard%20Cohen%20%20(%20Elver%20Saxofonista)%20-%20Elver%20%20Saxofonista%2012%20(youtube).mp3?alt=media&token=bb5039c7-9418-42ed-9929-4dcb8385048e'));


const escuchar = () => {
  setScrolly(true)
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
const deslizar_crono = () => {
  // Desplazamiento suave hacia 101vh usando animateScroll
  scroll.scrollTo(window.innerHeight * 2.00, {
    duration: 800, // Duración del desplazamiento en milisegundos
    delay: 0, // Retraso antes de que comience el desplazamiento
    smooth: 'easeInOutQuart', // Tipo de suavizado
  });
  
};
const deslizar_retrato = () => {
  // Desplazamiento suave hacia 101vh usando animateScroll
  scroll.scrollTo(window.innerHeight * 3.00, {
    duration: 800, // Duración del desplazamiento en milisegundos
    delay: 0, // Retraso antes de que comience el desplazamiento
    smooth: 'easeInOutQuart', // Tipo de suavizado
  });
  
};
const deslizar_dress = () => {
  // Desplazamiento suave hacia 101vh usando animateScroll
  scroll.scrollTo(window.innerHeight * 2.00, {
    duration: 800, // Duración del desplazamiento en milisegundos
    delay: 0, // Retraso antes de que comience el desplazamiento
    smooth: 'easeInOutQuart', // Tipo de suavizado
  });
  
};
const deslizar_reloj = () => {
  // Desplazamiento suave hacia 101vh usando animateScroll
  scroll.scrollTo(window.innerHeight * 5.00, {
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
useEffect(() => {
 
  if (scrolly === false &&  window.scrollY === 0 ) {
    // Bloquear el scroll
    document.body.style.overflow = 'hidden';
  } if(scrolly === false && window.scrollY != 0) {
    // Desbloquear el scroll
    document.body.style.overflow = 'auto';
  }if(scrolly === true ) {
    // Desbloquear el scroll
    document.body.style.overflow = 'auto';
  }
}, [scrolly]);
return (
<>
{modal && <ModalDressCode closeModal={closeModal}/>}
  {modal2 && <Modal2 closeModal2={closeModal2} />}
{/* ESTO ES PARA PC */}
  <div className='w-full h-auto flex flex-col '>
    <Seccion_bienvenida  escuchar={escuchar} quitar={quitar}/>
    <Seccion_retratos deslizar_dress={deslizar_dress}/>
    <Seccion_dress_code deslizar_reloj={deslizar_reloj}/>
    <Seccion_padres deslizar_crono={deslizar_crono}/>
    <Seccion_fiesta deslizar_retrato={deslizar_retrato}/>
    <Seccion_reloj/>
    <Confirmacion/>
   <Footer/>
  </div>
  </>
  );
}
