import React, { useState } from 'react';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import './SpecialLicensePlates.css';
import copiadoImage from '../Assets/copiado.png';

const SpecialLicensePlates = () => {
  const [licensePlates, setLicensePlates] = useState([]);
  const [copiedIndex, setCopiedIndex] = useState(null);

  const generateSpecialLicensePlate = () => {
    const letters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const numbers = '0123456789';

    let plate = '';
    plate += 'ESP';

    for (let i = 0; i < 3; i++) {
      const randomDigit = numbers[Math.floor(Math.random() * numbers.length)];
      plate += randomDigit;
    }

    for (let i = 0; i < 3; i++) {
      const randomLetter = letters[Math.floor(Math.random() * letters.length)];
      plate += randomLetter;
    }

    setLicensePlates((prevLicensePlates) => [plate, ...prevLicensePlates]);
  };

  const copyLicensePlate = (licensePlate, index) => {
    navigator.clipboard.writeText(licensePlate);
    setCopiedIndex(index);
  };

  const clearLicensePlates = () => {
    setLicensePlates([]);
    setCopiedIndex(null);
  };

  return (
    <div>
      <h1 className="text-5xl font-bold text-center my-2 text-gray-800">
        Matrículas especiales
      </h1>
      <div className="flex flex-col items-center mt-8">
        <div className="flex">
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-l mt-4 mr-4 flex-grow"
            onClick={generateSpecialLicensePlate}
          >
            Generar
          </button>
          <button
            className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded-r mt-4 flex-grow"
            onClick={clearLicensePlates}
          >
            Limpiar
          </button>
        </div>
        {licensePlates.length > 0 && (
          <div className="mt-4 w-full">
            <h2 className="text-2xl font-semibold mb-2 mt-10 text-center">Matrículas Generadas</h2>
            <TransitionGroup>
              {licensePlates.map((licensePlate, index) => (
                <CSSTransition key={index} timeout={500} classNames="slide">
                  <div className="flex items-center bg-gray-100 rounded py-2 px-4 mb-2">
                    <span className="flex-grow">{licensePlate}</span>
                    <button
                      className={`bg-gray-200 hover:bg-gray-300 text-gray-800 font-semibold py-2 px-4 rounded-r button-copied ${copiedIndex === index ? 'copied' : ''
                        }`}
                      onClick={() => copyLicensePlate(licensePlate, index)}
                    >
                      {copiedIndex === index ? (
                        <img src={copiadoImage} alt="Copiado" className="w-4 h-4" />
                      ) : (
                        'Copiar'
                      )}
                    </button>
                  </div>
                </CSSTransition>
              ))}
            </TransitionGroup>
          </div>
        )}
      </div>
    </div>
  );
};

export default SpecialLicensePlates;
