import React from 'react';

export default function modal2({closeModal}) {
  return (
    <div className="fixed inset-0 bg-gray-900 bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white p-6 rounded-lg shadow-xl w-[90%] lg:w-[40%]">
            <h2 className="text-2xl font-semibold text-center mb-4 pacifico">Regalanos algo especial</h2>
            <p className="text-center text-gray-600 mb-4">
              Si deseas hacer una contribución:
            </p>
            <div className="space-y-4">
              <div>
                <strong>CVU:</strong> 0000003100033803384059
                <br />
                <strong>Alias:</strong> cara.corner.colmo.mp
                <br />
                <span className="text-sm  font-semibold">Cristina Isabel Sanchez Meza</span>
                <br />
                <span className="text-sm text-gray-500 underline">Mercado Pago</span>


                
              </div>
              
            </div>

            {/* Botón para cerrar el modal */}
            <div className="mt-6 text-center">
              <button
                onClick={closeModal}
                className="bg-gray-500 text-white py-2 px-4 rounded-lg hover:bg-gray-700 transition"
              >
                Cerrar
              </button>
            </div>
          </div>
        </div>
  
  );
}
