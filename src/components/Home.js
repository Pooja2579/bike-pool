import React from 'react';

const Home = () => {
  return (
    <div style={{
      backgroundColor: '#FAFFDB',
      height: '100vh',
      display: 'flex',
      flexDirection: 'column', 
      alignItems: 'center', 
      justifyContent: 'center', 
      textAlign: 'center',
      position: 'relative'
    }}>
      <h2 style={{ fontStyle: 'italic' }}>Ride and share, save the fare!</h2>
      <div style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        position: 'relative',
        width: '100%',
        marginTop: '20px'
      }}>
        <button style={{
          position: 'absolute',
          left: '10%', 
          transform: 'translateY(-50%)',
          padding: '10px 20px',
          backgroundColor: '#4CAF50',
          color: 'white',
          border: 'none',
          borderRadius: '5px',
          cursor: 'pointer'
        }}>
          For Riders
        </button>
        <img 
          src="/images/first.jpg" 
          alt="Bike Pooling"
          style={{
            maxWidth: '50%', 
            height: 'auto',
            backgroundColor: 'transparent'
          }}
        />
        <button style={{
          position: 'absolute',
          right: '10%',
          transform: 'translateY(-50%)',
          padding: '10px 20px',
          backgroundColor: '#008CBA',
          color: 'white',
          border: 'none',
          borderRadius: '5px',
          cursor: 'pointer'
        }}>
          For Patners
        </button>
      </div>
    </div>
  );
};

export default Home;
