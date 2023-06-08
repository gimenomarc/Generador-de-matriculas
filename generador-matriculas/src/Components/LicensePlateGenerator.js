import React, { useState } from 'react';

const LicensePlateGenerator = () => {
  const [licensePlate, setLicensePlate] = useState('');

  const generateLicensePlate = () => {

    // Lógica para generar una matrícula aleatoria
    const letters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const numbers = '0123456789';

    let plate = '';
    for (let i = 0; i < 4; i++) {
      const randomDigit = numbers[Math.floor(Math.random() * numbers.length)];
      plate += randomDigit;
    }

    for (let i = 0; i < 3; i++) {
      const randomLetter = letters[Math.floor(Math.random() * letters.length)];
      plate += randomLetter;
    }

    setLicensePlate(plate);
  };

  const copyLicensePlate = () => {
    navigator.clipboard.writeText(licensePlate);
  };

  return (
    <div className="flex flex-col items-center">
      <button
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-4"
        onClick={generateLicensePlate}
      >
        Generar Matrícula
      </button>
      {licensePlate && (
        <div className="mt-4 flex items-center">
          <h2 className="text-2xl font-semibold mr-2">
            Matrícula Generada: {licensePlate}
          </h2>
          <button
            className="bg-gray-200 hover:bg-gray-300 text-gray-800 font-semibold py-2 px-4 rounded"
            onClick={copyLicensePlate}
          >
            Copiar
          </button>
        </div>
      )}
    </div>
  );
};

export default LicensePlateGenerator;

