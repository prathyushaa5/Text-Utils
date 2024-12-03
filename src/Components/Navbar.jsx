import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom

export default function Navbar(props) {
  return (
    <nav className={`bg-${props.color}-900 w-full text-${props.color === "gray" ? "white" : "gray"}-900`}>
      <div className="flex items-center justify-between h-16 px-4">
        {/* Logo */}
        <div className="flex-shrink-0">
          <Link to="/" className="text-xl font-bold">
            {props.title}
          </Link>
        </div>

        {/* Menu Links */}
        <div className="space-x-4">
          <Link to="/" className="hover:text-gray-300">
            Home
          </Link>

          {/* Updated About link to use React Router */}
          <Link to="/about" className="hover:text-gray-300">
            About
          </Link>

          

          {/* Toggle Mode Button */}
          <button
            className="px-6 py-2 bg-gray-500 font-medium rounded-lg shadow-md hover:bg-gray-600 focus:outline-none focus:ring-2 focus:ring-gray-300"
            onClick={props.toggleMode}
          >
            {props.option}
          </button>
        </div>
      </div>
    </nav>
  );
}

Navbar.propTypes = {
  title: PropTypes.string,
  color: PropTypes.string,
  toggleMode: PropTypes.func,
  option: PropTypes.string
};

Navbar.defaultProps = {
  title: 'Title',
  color: 'blue', // Add a default color if not provided
  toggleMode: () => {},
  option: 'Switch Mode'
};
