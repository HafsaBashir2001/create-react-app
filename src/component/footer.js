import React from 'react';
import img from './Styles/logo.png'

const Footer = () => {
  const footerStyles = {
    backgroundColor: 'transparent',
    position: 'relative',
    color: '#555',
    overflow: 'hidden',
    paddingTop: '100px', // Add padding to the top
    paddingLeft: '15px', // Add padding to the left
  };

  const videoStyles = {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    objectFit: 'cover',
    zIndex: -1,
  };
  const logoStyles = {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '25%',
  };

  return (
    <footer style={footerStyles}>
      {/* Video Background */}
      <video autoPlay loop muted playsInline style={videoStyles}>
        <source src="https://i.gifer.com/QWc9.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
   
       {/* Logo */}
       <img src={img} alt="Logo" style={logoStyles} />
      {/* Footer Content */}
      <div style={{ padding: '20px 0', textAlign: 'center', fontSize: '17px', color:'white' }}>

        <p>
          IMPORTANT NOTE:<br />
          Dermate does not provide an online consultation service.<br />
          If you have any concerns with your skin or its treatment, see a dermatologist for advice.
        </p>
        <p>
          Sponsors Donate Website terms FAQ Advertising policy Privacy policy Image licence Newsletter Volunteer Submit a photo
        </p>
        <p>
          © 2023 Dermate Skincare product recommendation. <br />
          © Fatima jinnah Women university rawalpindi <br />
          © BCS 2019-23
        </p>
      </div>
    </footer>
  );
};

export default Footer;
