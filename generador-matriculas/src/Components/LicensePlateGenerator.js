import React, { useState } from 'react';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import { HiClipboardCopy } from 'react-icons/hi';
import './LicensePlateGenerator.css'

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

    setLicensePlates([plate, ...licensePlates]);
  };

  const copyLicensePlate = (plate) => {
    navigator.clipboard.writeText(plate);
  };

  return (
    <div className="flex flex-col items-center">
      <button
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-4"
        onClick={generateLicensePlate}
      >
        Generar Matrícula
      </button>
      {licensePlates.length > 0 && (
        <div className="mt-4 w-full">
          <h2 className="text-2xl font-semibold mb-2">Matrículas Generadas</h2>
          <TransitionGroup component={null}>
            {licensePlates.map((licensePlate, index) => (
              <CSSTransition key={index} timeout={500} classNames="slide">
                <div className="flex items-center bg-gray-200 rounded py-2 px-4 mb-2 license-plate-item">
                  <span className="flex-grow">{licensePlate}</span>
                  <HiClipboardCopy
                    className="cursor-pointer ml-2 copy-icon text-blue-500"
                    onClick={() => copyLicensePlate(licensePlate)}
                  />
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