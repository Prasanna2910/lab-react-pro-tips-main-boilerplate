import React from 'react';
import '../App.css';
import { Link } from 'react-router-dom';

function Navbar() {
  const flexStyle = {
    display: 'flex',
    justifyContent: 'space-between',
    backgroundColor: 'black',
    color: 'white',
    padding: '5px',
  };
  const linkStyle = {
    textDecoration: 'none',
    color: 'white',
  };
  return (
    <div>
      <nav style={flexStyle}>
        <div>
          <h1>
            <Link to="/" style={linkStyle}>
              kalvium ♥️{' '}
            </Link>
          </h1>
        </div>
        <div style={flexStyle} className="justify-contact-reg">
          <div>
            <h4>
              <Link style={linkStyle} to="/contact">
                Contact
              </Link>
            </h4>
          </div>
          <div>
            <h4>
              <Link style={linkStyle} to="/register">
                Register-Form
              </Link>
            </h4>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
