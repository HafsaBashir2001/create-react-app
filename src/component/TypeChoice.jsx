import React, { useState } from 'react';
import { SkincareQuiz } from './Quiz';
import SkinType from './VisuallySkintype';
import FileUpload, { handleSelfieClick } from './upload';
import { Carousel } from 'react-bootstrap';
import img from './Styles/skinquiz.jpg'
import backgroundPic from '../assets/Apic.jpeg';
import { height } from '@mui/system';


export function Choices({setShowQuiz,setShowVisually,setShowConcerns}) {
    // const [showQuiz, setShowQuiz] = useState(false);
    // const [showVisually, setShowVisually] = useState(false);
    const [takeSelfie, setTakeSelfie] = useState(false);


    // const handleQuizClick = () => {
    //     setShowQuiz(true);
    //     setShowVisually(false);
    // };
    // const handleVisuallyClick = () => {
    //     setShowVisually(true);
    //     setShowQuiz(false);
    // };
   
    function scrollToUploads() {
        const uploadElement = document.getElementById("uploads");
        const yOffset = -100; // adjust this value as needed to position the element
        const y = uploadElement.getBoundingClientRect().top + window.pageYOffset + yOffset;
        window.scrollTo({ top: y, behavior: "smooth" });
      }
      



    return (
        <>
         <Carousel className="carousel-container w-100">
      <Carousel.Item>
        <img
          className="d-block w-70"
          src={backgroundPic}
          alt="First slide"
         
          style={{  width: '60vh' , height:'75vh' ,borderRadius: "50%"}}
        />
       
        <Carousel.Caption style={{ textAlign: "right" }}>
         <p style={{ color:"white", fontSize:"20px", margin:"90px", fontWeight:"bold", textAlign:"right"}}>Understanding the user's skin type (e.g. oily, dry, combination, sensitive) is crucial in recommending products that will work well for their skin and not cause any adverse reactions. For better recommendation lets analyze through taking selfie</p>
         
          <button href= "#uploads" className="btn btn-primary mb-2" style={{ width: "75%" }} data-toggle="tooltip" title="Take a selfie and our model will predict your skin type and recommend a product based on your concerns" onClick={scrollToUploads}>Take Selfie</button>
         

        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-70"
          src={img}
          alt="Second slide"
          style={{  width: '60vh' , height:'75vh' ,borderRadius: "50%"}}
          
        />
        <Carousel.Caption style={{ textAlign: "right" }}>


        <p style={{ color:"white", fontSize:"20px", margin:"90px", fontWeight:"bold", textAlign:"right"}}>Taking into account the user's personal preferences (e.g. fragrance-free, vegan, cruelty-free) will help you narrow down product options that align with their values.</p>
          
          <button className="btn btn-success mb-2" style={{ width: "75%" }} data-toggle="tooltip" title="Fill out the questionnaire to tell us about your skin concerns" onClick={()=>{
              setShowQuiz(true);
              setShowVisually(false);
          }}>SkinCare Quiz</button>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-70"
          src={img}
          alt="Third slide"
          style={{  width: '60vh' , height:'75vh' ,borderRadius: "50%"}}
        />
        <Carousel.Caption style={{ textAlign: "right" }}>
        <p style={{ color:"white", fontSize:"20px", margin:"90px", fontWeight:"bold", textAlign:"right"}}>Understanding the user's current skincare routine and any products they are already using can help you recommend complementary products or identify potential conflicts with new products.</p>
        
          <button className="btn btn-secondary mb-2" style={{ width: "75%" }} data-toggle="tooltip" title="Check visually to see which face matches your skin concerns " onClick={()=>{
              setShowVisually(true);
              setShowQuiz(false);
          }}>Check SkinType Visually</button>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-70"
          src={img}
          alt="Fourth slide"
          style={{  width: '60vh' , height:'75vh' ,borderRadius: "50%"}}
        />
        <Carousel.Caption style={{ textAlign: "right" }}>
        <p style={{ color:"white", fontSize:"20px", margin:"90px", fontWeight:"bold", textAlign:"right"}}>Identifying the user's specific skin concerns (e.g. acne, hyperpigmentation, fine lines and wrinkles, uneven texture) will help you recommend products that target those issues and provide optimal results.</p>
         
          <button className="btn btn-secondary mb-2" style={{ width: "75%" }} data-toggle="tooltip" title="Mark your skin concerns " onClick={()=>{
              setShowVisually(false);
              setShowQuiz(false);
              setShowConcerns(true);
          }}>Skin Concerns</button>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
        </>
      );
      

} 
