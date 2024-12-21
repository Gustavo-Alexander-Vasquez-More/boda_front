import React, { useRef, useState } from 'react';
import background   from '../images/plantilla.png';
export default function confirmacion() {
      const [showForm, setShowForm] = useState(false);
      const [nombre, setNombre]=useState()
      const inputNombre=useRef()
      const captureNombre=()=>{
        setNombre(inputNombre.current.value)
        }
        async function enviar(event) {
          event.preventDefault(); // Evitar que la página se recargue
      
          try {
            if (!nombre) {
              alert('Por favor, complete su nombre para poder proceder a la confirmación de su asistencia.');
            } else {
              const encodedMessage = encodeURIComponent(`Hola Sergio y Cristina, muchas gracias por la invitación, quería confirmarles mi asistencia para este día tan importante que vamos a festejar juntos!.\nAtentamente: ${nombre}`);
              
              const whatsappUrl = `https://api.whatsapp.com/send?phone=541131190960&text=${encodedMessage}`;
              window.open(whatsappUrl, '_blank');
            }
          } catch (error) {
            console.log(error);
          }
        }
      
  return (
 <>
    {showForm && (
          <div className="fixed inset-0  bg-black bg-opacity-75 flex justify-center items-center z-50">
              <div className="bg-white p-8 rounded-lg shadow-lg w-[90%] max-w-[500px]">
                  <h2 className="text-2xl font-bold mb-2 text-center">Confirmá tu asistencia</h2>
                  <form >
                      <div className="mb-4">
                          <label className="block text-sm font-medium text-gray-700">Nombre completo</label>
                          <input ref={inputNombre} onChange={captureNombre} type="text" className="w-full border border-gray-300 rounded px-3 py-2" required/>
                      </div>
                     <p className='py-[1rem] text-[0.9rem]'>No sabés como llegar al lugar? <a className='font-semibold underline' target='_blank' href='https://maps.app.goo.gl/um7eoNg8Gn3p5bdS6'>Abrir con google maps</a></p>
                      <div className="flex justify-between">
                          <button  onClick={enviar} className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600">Enviar</button>
                          <button type="button" onClick={() => setShowForm(false)} className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600">Cancelar</button>
                      </div>
                  </form>
              </div>
    
          </div>
          )}
    <div className='flex flex-col h-[70vh] items-center gap-5 bg-cover justify-center w-full ' style={{ backgroundImage: `url(${background})` }}>
      
 <div className='flex flex-col gap-4 items-center z-40 text-center px-[1rem]'>
<p className='text-[1.5rem] lg:text-[2rem] text-center text-[black]  pacifico'>Es importante que nos confirmes tu asistencia con 1 mes de anticipación.</p>
<button onClick={()=>setShowForm(true)} className='bg-[#4A663E] montserrat font-semibold rounded-[10px] py-[0.5rem] lg:text-[1.2rem] mt-[2rem] px-[1rem] text-white'>Confirmá tu asistencia aquí!</button>
<p className='pacifico text-[3rem] text-[#4A663E]'>Te esperamos!</p>

</div> 
    </div>
 </>
  );
}
