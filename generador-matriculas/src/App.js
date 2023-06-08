import React from 'react';
import LicensePlateGenerator from './Components/LicensePlateGenerator'

function App() {
  return (
    <div className="bg-blue-200 min-h-screen flex flex-col justify-center items-center">
      <h1 className="text-3xl font-bold text-center my-8 text-gray-800">
        Generador de matrículas de España
      </h1>
      <LicensePlateGenerator />
      <footer className="mt-8 text-gray-500">
        <p className="text-sm">
          Created by{' '}
          <a
            href="https://github.com/gimenomarc"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-500"
          >
            Marc Gimeno
          </a>
        </p>
      </footer>
    </div>
  );
}

export default App;