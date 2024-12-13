import React, { useState, useEffect } from 'react';

export default function SeccionBienvenida({ escuchar }) {
  const [isLoading, setIsLoading] = useState(true); // Controla si se muestra el Splash Screen
  const [isImageLoaded, setIsImageLoaded] = useState(false); // Controla si la imagen ha terminado de cargar

  // Establecer un temporizador para garantizar 2 segundos de Splash Screen
  useEffect(() => {
    const timer = setTimeout(() => {
      if (isImageLoaded) {
        setIsLoading(false);
      }
    }, 2000);

    return () => clearTimeout(timer); // Limpiar el temporizador si el componente se desmonta
  }, [isImageLoaded]);

  // Manejar la carga de la imagen
  const handleImageLoad = () => {
    setIsImageLoaded(true); // Marcar que la imagen ha cargado
    if (!isLoading) {
      setIsLoading(false); // Ocultar el Splash si el tiempo mínimo ya se cumplió
    }
  };

  return (
    <>
      {/* Splash Screen */}
      {isLoading && (
        <div className="w-full h-screen flex flex-col gap-4 items-center justify-center bg-white">
          {/* Corazón animado */}
          <div className="heart"></div>
          {/* Texto debajo del corazón */}
          <p className="text-black text-2xl font-bold mt-4 pacifico">ModerInvitation</p>
        </div>
      )}

      {/* Contenedor principal */}
      <div
        className={`w-full h-screen relative flex items-center justify-center bg-no-repeat bg-cover transition-opacity duration-500 ${
          isLoading ? 'opacity-0' : 'opacity-100'
        }`}
        style={{
          backgroundImage: `url("https://s1.1zoom.me/big0/90/354027-admin.jpg")`,
        }}
      >
        {/* Imagen oculta para detectar la carga */}
        <img
          src="https://s1.1zoom.me/big0/90/354027-admin.jpg"
          alt="background"
          className="hidden"
          onLoad={handleImageLoad}
        />

        {/* Overlay para opacidad */}
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>

        {/* Contenido del texto */}
        <div className="relative flex flex-col items-center px-[1rem] text-center text-white z-10">
          <p className="montserrat text-[2rem] text-center lg:text-[3rem] font-semibold">
            Te invitamos a nuestra boda
          </p>
          <p className="elegant text-[2rem] lg:text-[5rem] font-semibold">
            Sergio & Cristina
          </p>
          <p className="elegant text-[1.5rem] lg:text-[2.5rem] font-semibold">¡Nos casamos!</p>
          <button
            onClick={escuchar}
            className="bg-[black] montserrat rounded-[10px] py-[0.5rem] text-[1rem] lgtext-[1.2rem] mt-[2rem] px-[1rem]"
          >
            Ver la invitación
          </button>
        </div>
      </div>

      {/* Animaciones CSS */}
      <style jsx>{`
        .heart {
          width: 50px;
          height: 50px;
          background-color: red;
          position: relative;
          transform: rotate(-45deg);
          animation: beat 1s infinite;
        }
        .heart::before,
        .heart::after {
          content: '';
          width: 50px;
          height: 50px;
          background-color: red;
          border-radius: 50%;
          position: absolute;
        }
        .heart::before {
          top: -25px;
          left: 0;
        }
        .heart::after {
          left: 25px;
          top: 0;
        }
        @keyframes beat {
          0%,
          100% {
            transform: scale(1) rotate(-45deg);
          }
          50% {
            transform: scale(1.2) rotate(-45deg);
          }
        }
      `}</style>
    </>
  );
}
