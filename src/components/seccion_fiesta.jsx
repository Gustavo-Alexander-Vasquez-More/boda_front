import React, { useRef, useState } from 'react';
import vide from '../images/Pareja caminando playa vacaciones mar gratis - free stock coupl walking beach sea.mp4'
export default function seccion_fiesta() {
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
    <div className='w-full h-screen flex relative justify-center items-center bg-cover py-[2rem] bg-no-repeat '>
      <video className='absolute w-full h-screen object-cover' src={vide} autoPlay muted loop></video>
      <div className='absolute bg-[black] opacity-40 w-full h-full'></div>
      <div className='w-[60%] z-40 h-screen px-[3rem] justify-center items-center  gap-[2rem] overflow-auto flex flex-col'>
        <p className='text-white font-semibold pacifico text-[4rem] text-center'>- Cronograma -</p>
        <table className="w-full border-collapse bg-[#ffffffc5] border-[white]">
  {/* Encabezado de la Ceremonia Matrimonial */}
  <thead className="w-full">
    <tr className="w-full text-center">
      <th colSpan="2" className="p-4 bg-[#4A663E] text-[2rem] text-white border-b border-[white] pacifico">Lugar</th>
    </tr>
  </thead>
  <tbody>
    <tr className="border-b border-[white]">
      <td className="montserrat font-semibold text-center py-4">Stephenson #5478  Quinta la marianita-MORENO BA</td>
    </tr>
  </tbody>
  
  {/* Encabezado de Recepcion */}
  <thead className="w-full">
    <tr className="w-full text-center">
      <th colSpan="2" className="p-4 bg-[#4A663E] text-[2rem] pacifico text-white border-b border-[white]">Recepción</th>
    </tr>
  </thead>
  <tbody>
    <tr className="border-b border-[white] w-full flex justify-center text-center">
      <td className="p-4 font-bold pacifico text-[1.2rem] w-full">Horario</td>
      <td className="p-4 font-bold pacifico text-[1.2rem] w-full">Fecha</td>
    </tr>
    <tr className="text-center w-full flex justify-center ">
      <td className="py-4 w-full text-[1.2rem] elegant font-semibold">17:00 Hs</td>
      <td className="py-4 w-full text-[1.2rem] elegant font-semibold">08 . 03 . 2025</td>
    </tr>
  </tbody>
</table>

<div className='flex flex-col gap-4 items-center '>
<button onClick={()=>setShowForm(true)} className='bg-[#4A663E] montserrat rounded-[10px] py-[0.5rem] text-[1.2rem] mt-[2rem] px-[1rem] text-white'>Confirmá tu asistencia!</button>
<p className='text-[0.9rem] text-white font-bold'>Es importante que nos confirmes tu asistencia con 1 mes y medio de anticipación.</p>
<p className='text-[0.8rem] text-white font-bold flex gap-2 text-center'>No sabés como llegar?<a target='_blank' href='https://maps.app.goo.gl/um7eoNg8Gn3p5bdS6' className="underline">Abrir google maps</a></p>
</div>
      </div>
    </div>
   </>
  );
  
}
