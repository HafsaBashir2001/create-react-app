import React, { useState, useEffect } from 'react';
import giff from './moving.gif'

const VideoLinks = () => {
  const containerStyle = {
    display: 'flex',
    flexDirection: 'row', // Stack elements vertically
    alignItems: 'center',
   
    borderRadius: '20px',
    overflow: 'hidden', // Hide overflowing content
    transition: '0.3s', // Add transition for smooth hover effect
    cursor: 'pointer', // Change cursor to pointer on hover
  };

  const videoStyle = {
    width: '400px',
    height: '300px',
    margin: '40px'
  };
  const backgroundStyle = {
    position: 'absolute',
   
    width: '100%',
    height: '100%',
    objectFit: 'cover',
    zIndex: -1,
  };
  const style = {
    color: 'white',
    fontSize: '35px'
  }

  const handleMouseEnter = (event) => {
    // Expand the hovered video
    event.target.style.transform = 'scale(1.1)';
  };

  const handleMouseLeave = (event) => {
    // Shrink the video back when not hovered
    event.target.style.transform = 'scale(1)';
  };

  const words = ['Dermate', ' Skincare', 'Products Recommendation']; // Words to cycle through
  const [currentWordIndex, setCurrentWordIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentWordIndex((prevIndex) => (prevIndex + 1) % words.length);
    }, 2000); // Change the word every 2 seconds

    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <>
    
      <h1  style={style}>
         <span className="changing-word">{words[currentWordIndex]}</span>
      </h1>
      <div  style={containerStyle}>
      <img src={giff} alt="Background GIF" style={backgroundStyle} />

        {/* Your iframe elements */}
      
      <iframe
        width="400"
        height="300"
        src="https://www.youtube.com/embed/Rc4J0_Xg88w"
        frameBorder="0"
        allow="autoplay; encrypted-media"
        allowFullScreen
        style={videoStyle}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      ></iframe>
      <iframe
        width="400"
        height="300"
        src="https://www.youtube.com/embed/2UKm9YPytZo"
        frameBorder="0"
        allow="autoplay; encrypted-media"
        allowFullScreen
        style={videoStyle}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      ></iframe>
      <iframe
        width="400"
        height="300"
        src="https://www.youtube.com/embed/D97fDV-e1ow"
        frameBorder="0"
        allow="autoplay; encrypted-media"
        allowFullScreen
        style={videoStyle}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      ></iframe>
    </div>
    </>
  );
};

export default VideoLinks;
