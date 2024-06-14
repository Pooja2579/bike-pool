import React from 'react';

const Contact = () => {
  return (
    <div style={{
      backgroundColor: '#FAFFDB',
      height: '100vh',
      display: 'flex',
      flexDirection: 'column', 
      alignItems: 'center', 
      textAlign: 'center',
      position: 'relative',
      overflow: 'hidden'
    }}>
      <div style={{
        position: 'absolute',
        top: '35%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        backgroundColor: '#D9D9D9',
        borderRadius: '50%',
        padding: '80px',
        maxWidth: '90%',
        boxShadow: '0 0 20px rgba(0, 0, 0, 0.3)',
        boxSizing: 'border-box'
      }}>
        <h2 style={{ fontStyle: 'italic' }}>Need Instant Help!</h2>
        <input type="email" placeholder="Your Email" style={{ width: '100%', marginBottom: '10px' }} />
        <textarea placeholder="Your Message" rows="4" style={{ width: '100%', marginBottom: '10px' }}></textarea>
        <button style={{ padding: '10px 20px', borderRadius: '5px', backgroundColor: '#4CAF50', color: '#fff', border: 'none', cursor: 'pointer' }}>Submit</button>
      </div>

      <footer style={{ backgroundColor: '#D9D9D9', width: '100%', padding: '20px 0', position: 'absolute', bottom: 0 }}>
        <a href="https://www.facebook.com"><i className="fab fa-facebook" style={{ fontSize: '24px', margin: '0 20px', color: '#333' }}></i></a>
        <a href="https://www.linkedin.com"><i className="fab fa-linkedin" style={{ fontSize: '24px', margin: '0 20px', color: '#333' }}></i></a>
        <a href="https://twitter.com"><i className="fab fa-twitter" style={{ fontSize: '24px', margin: '0 20px', color: '#333' }}></i></a>
        <a href="https://www.instagram.com"><i className="fab fa-instagram" style={{ fontSize: '24px', margin: '0 20px', color: '#333' }}></i></a>
      </footer>
    </div>
  );
};

export default Contact;
