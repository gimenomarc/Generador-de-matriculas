import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LicensePlateGenerator from './Components/LicensePlateGenerator';
import Footer from './Components/Footer';
import Navigation from './Components/Navigation';
import SpecialLicensePlates from './Components/SpecialLicensePlates';
import ForeignLicensePlates from './Components/ForeignLicensePlates';
import './App.css';

function App() {
  return (
    <Router>
      <div className="bg-blue-200 flex flex-col min-h-screen">
        <Navigation />
        <div className="flex flex-col justify-center items-center mt-8 mb-auto">
          <h1 className="text-5xl font-bold text-center my-8 text-gray-800">
            Generador de matrículas
          </h1>
          <Routes>
            <Route path="/matriculas-espana" element={<LicensePlateGenerator />} />
            <Route path="/matriculas-especiales" element={<SpecialLicensePlates />} />
            <Route path="/matriculas-extranjeras" element={<ForeignLicensePlates />} />
          </Routes>
        </div>
        <Footer />
      </div>
    </Router>
  );
}

export default App;



