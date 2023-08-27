import React from 'react';
import './Styles/documentation.css'; // Import the documentation.css file
import giff from './moving.gif'
import img1 from './ss1.png';
import img2 from './ss2.png';
import img3 from './ss3.png';
import img4 from './ss4.png';
import img5 from './ss5.png';
import img6 from './playstore.png'


const Feature = () => {
  const containerStyle = {
    margin: '20px',
    fontFamily: 'Arial, sans-serif',
  };

  const titleStyle = {
    fontSize: '44px',
    marginBottom: '10px',
    color:'white'
  };

  const sectionTitleStyle = {
    fontSize: '18px',
    marginBottom: '5px',
    color:'white'
  };

  const paragraphStyle = {
    fontSize: '16px',
    marginBottom: '10px',
    color:'white'
  };

  const imageStyle = {
    width: '100%',
    maxWidth: '600px',
    marginBottom: '10px',
  };

  return (
    <div style={containerStyle}>
      <img
  src={giff}
  alt="Hello Future GIF"
  style={{
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    objectFit: 'cover',
    zIndex: -1,
  }}
/>
      <div>
        <h3 style={titleStyle}>Project Overview</h3>
        <div>
        
          <p style={paragraphStyle}>
            The skincare product recommendation application is designed to help users in their skincare routine. The application allows users to upload an image of their skin to detect the acne level and provide personalized product recommendations. It aims to simplify the process of finding suitable skincare products based on individual skin conditions.
          </p>
        </div>
        <div>
          <h4 style={sectionTitleStyle}>Usage</h4>
          <p style={paragraphStyle}>
            To use the application, follow these steps:
          </p>
       <ol style={{ fontSize: '16px', color: '#999', lineHeight: '1.5', paddingLeft: '20px', listStyleType: 'none' }}>
  <li style={{ marginBottom: '10px',color:'white'  }}>
    Upload an image of your skin using the provided image upload feature.
  </li>
  <li style={{ marginBottom: '10px', color:'white' }}>
    The application will analyze the image and detect the acne level based on predefined criteria.
  </li>
  <li style={{ marginBottom: '10px', color:'white' }}>
    Based on the acne level, the application will recommend suitable skincare products.
  </li>
  <li style={{ marginBottom: '10px', color:'white' }}>
    You can view the recommended products and select the ones you prefer.
  </li>
  <li style={{ marginBottom: '10px', color:'white' }}>
    Additionally, the application provides a skincare routine specifically tailored to your skin condition.
  </li>
  <li style={{ marginBottom: '10px', color:'white' }}>
    At the end of the process, you have the option to download a report summarizing the recommended products and skincare routine.
  </li>
</ol>

        </div>
        <div>
          <h4 style={sectionTitleStyle}> <strong>App Preview</strong> </h4>
          <img src={img6} style={{width:'15%'}} alt="" />
          <div style={{ display: 'flex', flexDirection: 'column' }}>
            <div className="container" style={{backgroundColor:'gray', alignItems:'center', justifyContent:'center',borderRadius:'12%'}}>

          
  <div style={{ display: 'flex','justifyContent':'center' }}>
    <img
      style={{
        width: '15.33%',  // Each screenshot occupies 33.33% of the container width
        height: '5%' , // Maintain aspect ratio
     
         // Add some right margin between screenshots
         borderRadius: '9%'
      }}
      src={img1}
      alt="Screenshot 1"
    />

    <img
      style={{
        width: '15.33%', 
        height: '10%' , 
       
        borderRadius: '9%',
        marginRight: '10px',
      }}
      src={img2}
      alt="Screenshot 2"
    />

    <img
      style={{
        width: '15.33%', 
        height: '10%' , 
        borderRadius: '9%',
        
      }}
      src={img3}
      alt="Screenshot 3"
    />
  

  
    <img
      style={{
        width: '15.33%',  // Each screenshot occupies 50% of the container width
           // Maintain aspect ratio
        marginRight: '10px', // Add some right margin between screenshots
        borderRadius: '9%',
       
        height: '10%' , 

      }}
      src={img4}
      alt="Screenshot 4"
    />

    <img
      style={{
        width: '15.33%', 
        height: '10%' , 
   
        borderRadius: '9%'
      }}
      src={img5}
      alt="Screenshot 5"
    />
  </div>
  </div>
</div>

        </div>
        {/* Add more sections and content as needed */}
      </div>
    </div>
  );
};

export default Feature;
