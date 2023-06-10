import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LicensePlateGenerator from './Components/LicensePlateGenerator';
import Footer from './Components/Footer';
import Navigation from './Components/Navigation';
import SpecialLicensePlates from './Components/SpecialLicensePlates';
import ForeignLicensePlates from './Components/ForeignLicensePlates';
import './App.css';

function App() {
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  return (
    <Router>
      <div className={`flex flex-col min-h-screen ${darkMode ? 'dark' : ''}`}>
        <Navigation darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
        <div className="flex flex-col justify-center items-center mt-8 mb-auto">
          <h1
            className={`text-5xl font-bold text-center my-8 ${
              darkMode ? 'text-gray-200' : 'text-gray-800'
            }`}
          >
            Generador
          </h1>
          <Routes>
            <Route
              path="/matriculas-espana"
              element={<LicensePlateGenerator darkMode={darkMode} />}
            />
            <Route
              path="/matriculas-especiales"
              element={<SpecialLicensePlates darkMode={darkMode} />}
            />
            <Route
              path="/matriculas-extranjeras"
              element={<ForeignLicensePlates darkMode={darkMode} />}
            />
          </Routes>
        </div>
        <Footer />
      </div>
    </Router>
  );
}

export default App;