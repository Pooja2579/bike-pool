import React from 'react';

const About = () => {
  return (
    <div style={{
      backgroundColor: '#FAFFDB',
      height: '100vh',
      display: 'flex',
      flexDirection: 'column', 
      alignItems: 'center', 
      textAlign: 'center'
    }}>
      <h2 style={{ fontStyle: 'italic' }}>About Us!</h2>
      <p>🌍 Eco Rides: Cut traffic, reduce pollution, and save the planet by sharing bike rides with our easy-to-use app.</p>
        <br></br>

<p>💸 Save More: Share rides, split costs, and enjoy cheaper, greener travel every day.</p>
<br></br>

<p>🚴 Ride Smart: Secure rides with phone number verification and real-time navigation. Book from home and ride with ease!</p>
<br></br>

<p><b>Join us! Bike Pooling: Ride Together, Save Together!</b></p>
    </div>
  );
};

export default About;
