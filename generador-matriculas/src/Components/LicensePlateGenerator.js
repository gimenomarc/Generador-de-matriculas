import React, { useState } from 'react';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import './LicensePlateGenerator.css';

const LicensePlateGenerator = () => {
  const [licensePlates, setLicensePlates] = useState([]);

  const generateLicensePlate = () => {
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

    setLicensePlates((prevLicensePlates) => [...prevLicensePlates, plate]);
  };

  const copyLicensePlate = (licensePlate) => {
    navigator.clipboard.writeText(licensePlate);
  };

  const clearLicensePlates = () => {
    setLicensePlates([]);
  };

  return (
    <div className="flex flex-col items-center mt-8">
      <div className="flex">
        <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-l mt-4 mr-4"
          onClick={generateLicensePlate}
        >
          Generar Matrícula
        </button>
        <button
          className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded-r mt-4"
          onClick={clearLicensePlates}
        >
          Limpiar
        </button>
      </div>
      {licensePlates.length > 0 && (
        <div className="mt-4 w-full">
          <h2 className="text-2xl font-semibold mb-2">Matrículas Generadas</h2>
          <TransitionGroup>
            {licensePlates.map((licensePlate, index) => (
              <CSSTransition
                key={index}
                timeout={500}
                classNames="slide"
              >
                <div className="flex items-center bg-gray-100 rounded py-2 px-4 mb-2">
                  <span className="flex-grow">{licensePlate}</span>
                  <button
                    className="bg-gray-200 hover:bg-gray-300 text-gray-800 font-semibold py-2 px-4 rounded-r"
                    onClick={() => copyLicensePlate(licensePlate)}
                  >
                    Copiar
                  </button>
                </div>
              </CSSTransition>
            ))}
          </TransitionGroup>
        </div>
      )}
    </div>
  );
};

export default LicensePlateGenerator;

