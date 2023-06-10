import React from 'react';
import { Link } from 'react-router-dom';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import './Navigation.css';

const Navigation = ({ darkMode, toggleDarkMode }) => {
  return (
    <nav className={`bg-gray-800 ${darkMode ? 'dark' : ''}`}>
      <ul className="flex flex-col sm:flex-row justify-center items-center py-4 sm:py-6">
        <TransitionGroup component={null}>
          <CSSTransition classNames="nav-link" timeout={500}>
            <li className="mb-3 sm:mb-0 sm:mr-6">
              <Link
                to="/matriculas-espana"
                className={`nav-link text-white hover:text-gray-300 transition-colors duration-300 ${
                  darkMode ? 'text-gray-200' : ''
                }`}
              >
                Matrículas de España
              </Link>
            </li>
          </CSSTransition>
          <CSSTransition classNames="nav-link" timeout={500}>
            <li className="mb-3 sm:mb-0 sm:mr-6">
              <Link
                to="/matriculas-especiales"
                className={`nav-link text-white hover:text-gray-300 transition-colors duration-300 ${
                  darkMode ? 'text-gray-200' : ''
                }`}
              >
                Matrículas especiales
              </Link>
            </li>
          </CSSTransition>
          <CSSTransition classNames="nav-link" timeout={500}>
            <li className="mb-3 sm:mb-0 sm:mr-6">
              <Link
                to="/matriculas-extranjeras"
                className={`nav-link text-white hover:text-gray-300 transition-colors duration-300 ${
                  darkMode ? 'text-gray-200' : ''
                }`}
              >
                Matrículas extranjeras
              </Link>
            </li>
          </CSSTransition>
        </TransitionGroup>
        <li className="flex items-center ml-auto">
          <label htmlFor="darkModeToggle" className="text-white mr-2">
            Dark Mode
          </label>
          <input
            type="checkbox"
            id="darkModeToggle"
            checked={darkMode}
            onChange={toggleDarkMode}
            className="rounded-full appearance-none w-10 h-6 bg-gray-400 focus:outline-none focus:ring-2 focus:ring-gray-800"
          />
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;





