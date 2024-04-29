import React from 'react';

export default function Footer() {
  return (
    <footer style={footerStyle}>
        <p>💪Powered By AKASHDEEP</p>
      <p style={textStyle}>© 2024 PolyglotCode. All rights reserved</p>
    </footer>
  );
}

const footerStyle = {
  background: '#333',
  color: '#fff',
  textAlign: 'center',
  padding: '1rem',
  position: 'relative',
  left: '0',
  bottom: '0',
  width: '100%'
  
};

const textStyle = {
  fontSize: '0.8rem'
};
