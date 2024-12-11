import React from 'react';

export default function modal2({closeModal}) {
  return (
    <div className="fixed inset-0 bg-gray-900 bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white p-6 rounded-lg shadow-xl w-[40%]">
            <h2 className="text-2xl font-semibold text-center mb-4">Cuentas Bancarias</h2>
            <p className="text-center text-gray-600 mb-4">
              Si deseas hacer una contribución, por favor utiliza las siguientes cuentas bancarias o billeteras virtuales:
            </p>
            <div className="space-y-4">
              <div>
                <strong>Cuenta 1:</strong> 123-456-789
                <br />
                <span className="text-sm text-gray-500">Banco XYZ</span>
              </div>
              <div>
                <strong>Cuenta 2:</strong> 987-654-321
                <br />
                <span className="text-sm text-gray-500">Banco ABC</span>
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
