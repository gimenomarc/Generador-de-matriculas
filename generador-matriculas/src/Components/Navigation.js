import React from 'react';
import { Link } from 'react-router-dom';

const Navigation = () => {
  return (
    <nav className="bg-gray-800 w-full">
      <ul className="flex justify-center py-4">
        <li className="mr-6">
          <Link to="/matriculas-espana" className="text-white hover:text-gray-300">
            Matrículas de España
          </Link>
        </li>
        <li className="mr-6">
          <Link to="/matriculas-especiales" className="text-white hover:text-gray-300">
            Matrículas especiales
          </Link>
        </li>
        <li className="mr-6">
          <Link to="/matriculas-extranjeras" className="text-white hover:text-gray-300">
            Matrículas extranjeras
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;
