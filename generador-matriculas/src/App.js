import React from 'react';
import LicensePlateGenerator from './Components/LicensePlateGenerator';
import Footer from './Components/Footer';

function App() {
  return (
    <div className="bg-blue-200 min-h-screen flex flex-col justify-between items-center pt-16">
      <div className="flex flex-col justify-center items-center mb-8">
        <h1 className="text-5xl font-bold text-center my-8 text-gray-800">
          Generador de matrículas de España
        </h1>
        <LicensePlateGenerator />
      </div>
      <Footer />
    </div>
  );
}

export default App;