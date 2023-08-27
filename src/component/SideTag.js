import React, { useState } from 'react';
import img1 from './Styles/instagram.png'

const SideTag = () => {
  const [fixed, setFixed] = useState(false);

  const handleScroll = () => {
    if (window.pageYOffset > 0) {
      setFixed(true);
    } else {
      setFixed(false);
    }
  };

  React.useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div
      style={{
        position: fixed ? 'fixed' : 'absolute',
      
        
        left :0,
        padding: '10px',
        
        display: 'flex',
        flexDirection: 'column',
        
        zIndex: 999,
        bottom: 0
        
      }}
    >
      <a href="https://www.instagram.com">
        <img
          src={img1}
          alt="Instagram logo"
          style={{
            width: '30px',
            height: '30px',
            marginBottom: '10px'
          }}
        />
      </a>
      <a href="https://www.youtube.com/@dermate-skincare">
        <img
          src="https://cdn4.iconfinder.com/data/icons/social-messaging-ui-color-shapes-2-free/128/social-youtube-square2-512.png"
          alt="YouTube logo"
          style={{
            width: '30px',
            height: '30px',
            marginBottom: '10px'
          }}
        />
      </a>
    </div>
  );
};







export default SideTag;
