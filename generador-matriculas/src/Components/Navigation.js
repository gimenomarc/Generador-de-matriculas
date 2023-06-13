import React from 'react';
import { Link } from 'react-router-dom';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import Switch from 'react-switch';
import './Navigation.css';

const Navigation = ({ darkMode, toggleDarkMode }) => {

  return (
    <nav className={`${darkMode ? 'bg-menu-dark' : 'bg-menu-light'} transition-colors`}>
      <ul className="flex flex-col sm:flex-row sm:space-x-4 justify-center items-center py-4 sm:py-6">
        <TransitionGroup component={null}>
          <CSSTransition classNames="nav-link" timeout={500}>
            <li className="mb-3 sm:mb-0 sm:mr-6">
              <Link
                to="/validar-matricula"
                className={`nav-link text-white hover:text-gray-300 transition-colors duration-300 ${darkMode ? 'text-gray-200' : ''
                  }`}
              >
                <button className="px-4 py-2 text-sm font-medium text-white bg-blue-600 rounded-md hover:bg-blue-700 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75">
                  Validar Matrícula
                </button>
              </Link>
            </li>
          </CSSTransition>

          <CSSTransition classNames="nav-link" timeout={500}>
            <li className="mb-3 sm:mb-0">
              <Link
                to="/matriculas-espana"
                className={`nav-link text-white hover:text-gray-300 transition-colors duration-300 ${darkMode ? 'text-gray-200' : ''
                  }`}
              >
                <button className="px-4 py-2 text-sm font-medium text-white bg-blue-600 rounded-md hover:bg-blue-700 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75">
                  Matrículas de España
                </button>
              </Link>
            </li>
          </CSSTransition>
          <CSSTransition classNames="nav-link" timeout={500}>
            <li className="mb-3 sm:mb-0 sm:mr-6">
              <Link
                to="/matriculas-especiales"
                className={`nav-link text-white hover:text-gray-300 transition-colors duration-300 ${darkMode ? 'text-gray-200' : ''
                  }`}
              >
                <button className="px-4 py-2 text-sm font-medium text-white bg-blue-600 rounded-md hover:bg-blue-700 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75">
                  Matrículas especiales
                </button>
              </Link>
            </li>
          </CSSTransition>
          <CSSTransition classNames="nav-link" timeout={500}>
            <li className="mb-3 sm:mb-0 sm:mr-6">
              <Link
                to="/matriculas-extranjeras"
                className={`nav-link text-white hover:text-gray-300 transition-colors duration-300 ${darkMode ? 'text-gray-200' : ''
                  }`}
              >
                <button className="px-4 py-2 text-sm font-medium text-white bg-blue-600 rounded-md hover:bg-blue-700 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75">
                  Matrículas extranjeras
                </button>
              </Link>
            </li>
          </CSSTransition>
        </TransitionGroup>
        <li className="flex items-center ml-auto mr-8">
          <label htmlFor="darkModeToggle" className={`mr-2 text-sm font-semibold ${darkMode ? 'text-white' : 'text-black'}`}>
            {darkMode ? 'Light Mode' : 'Dark Mode'}
          </label>

          <Switch
            checked={darkMode}
            onChange={toggleDarkMode}
            onColor="#86d3ff"
            onHandleColor="#2693e6"
            handleDiameter={24}
            uncheckedIcon={false}
            checkedIcon={false}
            boxShadow="0px 1px 5px rgba(0, 0, 0, 0.6)"
            activeBoxShadow="0px 0px 1px 10px rgba(0, 0, 0, 0.2)"
            height={16}
            width={40}
            className="react-switch"
          />
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;