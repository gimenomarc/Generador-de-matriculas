import React, { useState } from 'react';
import './ValidateLicensePlate.css';

const ValidateLicensePlate = ({ darkMode }) => {
    const [licensePlate, setLicensePlate] = useState('');
    const [isValid, setIsValid] = useState(null);

    const validateLicensePlate = () => {
        fetch(`http://localhost:3001/comprobar-matricula/es/${licensePlate}`)
            .then(response => response.json())
            .then(data => setIsValid(data.esValida))
            .catch(err => console.error(err));
    };

    return (
        <div>
            <h1 className={`text-5xl font-bold text-center my-2 ${darkMode ? 'text-gray-200' : 'text-gray-800'}`}>
                Validar Matrícula
            </h1>
            <div className="flex flex-col items-center mt-8">
                <input
                    type="text"
                    placeholder="Introduzca la matrícula"
                    className={`px-3 py-2 text-lg border rounded ${darkMode ? 'dark-mode' : ''}`}
                    value={licensePlate}
                    onChange={e => setLicensePlate(e.target.value)}
                />
                <button
                    className={`transition duration-300 ease-in-out transform hover:-translate-y-0.5 hover:scale-105 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-4 flex-grow ${darkMode ? 'dark-mode' : ''}`}
                    onClick={validateLicensePlate}
                >
                    Validar
                </button>
                {isValid !== null && (
                    <h2 className={`text-2xl font-semibold mt-10 text-center ${isValid ? 'text-green-600' : 'text-red-600'}`}>
                        {isValid ? 'VALIDA' : 'INVALIDA'}
                    </h2>
                )}
            </div>
        </div>
    );
};

export default ValidateLicensePlate;
