// Navbar.js
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaHome, FaInfoCircle, FaEnvelope, FaSignInAlt } from 'react-icons/fa';
import LoginModal from './LoginModal'; // Import the LoginModal component

const Navbar = () => {
  const [hoverIndex, setHoverIndex] = useState(null);
  const [isLoginModalOpen, setLoginModalOpen] = useState(false); // State for modal visibility

  const navbarStyle = {
    backgroundColor: '#D9D9D9',
    padding: '10px',
    display: 'flex',
    justifyContent: 'center',
    transition: 'background-color 0.3s ease',
    ...(hoverIndex !== null && { backgroundColor: '#bfbfbf' }),
  };

  const linkStyle = (index) => ({
    margin: '0 20px',
    textDecoration: 'none',
    color: hoverIndex === index ? '#007BFF' : 'black', // Set color based on hoverIndex
    transition: 'transform 0.2s, color 0.2s',
    transform: hoverIndex === index ? 'scale(1.2)' : 'scale(1)',
  });

  const iconStyle = (index) => ({
    filter: hoverIndex === index ? 'drop-shadow(0px 0px 5px rgba(0, 0, 0, 0.2))' : 'none',
  });

  const openLoginModal = (e) => {
    e.preventDefault();
    setLoginModalOpen(true);
  };

  return (
    <>
      <nav style={navbarStyle}>
        <Link 
          to="/" 
          style={linkStyle(0)}
          onMouseEnter={() => setHoverIndex(0)}
          onMouseLeave={() => setHoverIndex(null)}
        >
          <FaHome style={iconStyle(0)} />
        </Link>
        <Link 
          to="/about" 
          style={linkStyle(1)}
          onMouseEnter={() => setHoverIndex(1)}
          onMouseLeave={() => setHoverIndex(null)}
        >
          <FaInfoCircle style={iconStyle(1)} />
        </Link>
        <Link 
          to="/contact" 
          style={linkStyle(2)}
          onMouseEnter={() => setHoverIndex(2)}
          onMouseLeave={() => setHoverIndex(null)}
        >
          <FaEnvelope style={iconStyle(2)} />
        </Link>
        <Link 
          to="/login" 
          style={linkStyle(3)}
          onMouseEnter={() => setHoverIndex(3)}
          onMouseLeave={() => setHoverIndex(null)}
          onClick={openLoginModal} // Open modal on click
        >
          <FaSignInAlt style={iconStyle(3)} />
        </Link>
      </nav>
      <LoginModal 
        isOpen={isLoginModalOpen} 
        onRequestClose={() => setLoginModalOpen(false)} 
      />
    </>
  );
};

export default Navbar;
