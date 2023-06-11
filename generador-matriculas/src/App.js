import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
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
    if (darkMode) {
      document.body.classList.add('dark');
    } else {
      document.body.classList.remove('dark');
    }
  };


  return (
    <Router>
      <div className={`flex flex-col min-h-screen ${darkMode ? 'bg-dark transition-colors' : 'bg-light transition-colors'}`}>
        <Navigation darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
        <div className="flex flex-col justify-center items-center mt-8 mb-auto">
          <Routes>
            <Route
              path="/"
              element={<Navigate to="/matriculas-espana" replace />}
            />
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
