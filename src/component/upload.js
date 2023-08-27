import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import giff from './moving.gif'
import './Styles/CombinationProducts.css'
import './Styles/Loader.css'
import foamingcleanser from '../assets/FoamingCleanser.jpeg'
import { ThreeCircles } from 'react-loader-spinner'
import Firstpage from './FirstPage';
import PopupComponent from './Popup';
import { Choices } from './TypeChoice';
import VideoLinks from './Videolinks';
import ReactDOM from 'react-dom';
import Report from './Report';
import RoutineDry from './RoutineDry';
import FeedbackAnalytics from './Analytics';
import Footer from './footer';

const FileUpload = () => {
  const [file, setFile] = useState(null);
  const [fileUrl, setFileUrl] = useState(null);
  const [skinType, setSkinType] = useState(null);
  const [acne, setAcne] = useState(null);
  const [loading, setLoading] = useState(false);
  const [products, setProducts] = useState(false);
  const [showQuiz, setShowQuiz] = useState(false);
  const [showVisually, setShowVisually] = useState(false);
  const [showConcerns, setShowConcerns] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");
  const [probabilities, setProbabilities] = useState(null);
  const [skinConcerns, setSkinConcerns] = useState([]);
  const [recommendedProducts, setRecommendedProducts] = useState([]);

  const navigate = useNavigate();


  const containerStyle = {
    margin: '20px',
    fontFamily: 'Arial, sans-serif',
  };

  const handleUploadAndPredict = async (event) => {
    event.preventDefault();

    const formData = new FormData();
    formData.append('file', file);

    try {
      const uploadResponse = await fetch('/upload', {
        method: 'POST',
        body: formData,
      });
      const uploadData = await uploadResponse.json();
      setFileUrl(uploadData.file_url);
      document.getElementById('message').innerHTML = 'File uploaded successfully';
      console.log('File uploaded successfully', uploadData);

      const predictResponse = await fetch('http://localhost:5000/predict', {
        method: 'POST',
        body: formData,
      });
      const predictData = await predictResponse.json();

      setLoading(true);
      setTimeout(() => {
        setLoading(false);
        if ('error' in predictData) {
          setErrorMsg(predictData.error);
        } else {
          setSkinType(predictData.skin_type);
          setAcne(predictData.acne_type);
          setProbabilities(predictData.probabilities);
        }
      }, 5000);
    } catch (error) {
      console.error(error);
    }
    return { fileUrl, setFileUrl };
  };




  const handleChange = (event) => {
    setFile(event.target.files[0]);
  };




  { skinType === 'Dry' && <RoutineDry fileUrl={fileUrl} /> }


  const recommendProducts = async () => {
    try {
      const response = await fetch('/recommend', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ skinConcerns }),
      });
      const data = await response.json();
      setRecommendedProducts(data.products);
    } catch (error) {
      console.error(error);
    }
  };
  let highestProbabilitySkinType = '';
  if (probabilities) {
    const maxProbabilityIndex = probabilities.indexOf(Math.max(...probabilities));
    if (maxProbabilityIndex === 0) {
      highestProbabilitySkinType = 'Dry';
    } else if (maxProbabilityIndex === 1) {
      highestProbabilitySkinType = 'Combination';
    } else if (maxProbabilityIndex === 2) {
      highestProbabilitySkinType = 'Oily';
    }
  }
 
  

  return (
    <>
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
      
      <div className="container w-100 m-5">
        <div class=" ">
        
          <div className="px-5 mx-5 " >

            <Choices setShowQuiz={setShowQuiz} setShowVisually={setShowVisually} setShowConcerns={setShowConcerns} />
          </div>
        </div>
      </div>


     

      <Firstpage showQuiz={showQuiz} showVisually={showVisually} showConcerns={showConcerns} />
      
     

      {/*  */}
      <VideoLinks />

     
    
        

     

      <div id='uploads' style={{ textAlign: 'center', marginTop: '10px' }} className="container my-10">
        <form style={{ color:'black'}} className='text-center' onSubmit={handleUploadAndPredict} >
          <input type='file' style={{ display: 'block', margin: '0 auto', width: '500px', color: '#fff' }} className='form-control' onChange={handleChange} />
          <button type='submit' style={{ display: 'block', margin: '10px auto' }} className="btn btn-success mb-3">Upload</button>
         
          

          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <div className='card text-center' style={{ width: '18rem', marginTop: '10px' }} id="message">
              {fileUrl ? <img src={fileUrl} className='card-img-top text-center' alt="" /> : null}
            </div>
          </div>



          <div style={{background:'transparent'}} className=' text-center  '>
            <h5 style={{ marginTop: '30px', fontWeight: 'bolder', fontSize: "34px" }} className='card-title'>Generated Skin type and acne detection</h5>
            <div className='loader' style={{ display: loading ? '' : 'none' }}>
              <ThreeCircles
                height="100"
                width="100"
                color="#4fa94d"
                wrapperStyle={{}}
                wrapperClass=""
                visible={true}
                ariaLabel="three-circles-rotating"
                outerCircleColor=""
                innerCircleColor=""
                middleCircleColor=""
              /></div>
           

           <p style={{ fontWeight: "bold", fontSize: "22px" }} className='card-text'>
  Your Skin Type:
</p>
{probabilities && (
  <div className="probabilities" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
    <p style={{ fontSize: '22px' }}>
      {probabilities[0] === Math.max(...probabilities) ? (
        <span style={{ color: 'red' }}>Dry: {(probabilities[0] * 100).toFixed(2)}%</span>
      ) : (
        <span>Dry: {(probabilities[0] * 100).toFixed(2)}%</span>
      )}
    </p>
    <p style={{ fontSize: '22px' }}>
      {probabilities[1] === Math.max(...probabilities) ? (
        <span style={{ color: 'red' }}>Combination: {(probabilities[1] * 100).toFixed(2)}%</span>
      ) : (
        <span>Combination: {(probabilities[1] * 100).toFixed(2)}%</span>
      )}
    </p>
    <p style={{ fontSize: '22px' }}>
      {probabilities[2] === Math.max(...probabilities) ? (
        <span style={{ color: 'red' }}>Oily: {(probabilities[2] * 100).toFixed(2)}%</span>
      ) : (
        <span>Oily: {(probabilities[2] * 100).toFixed(2)}%</span>
      )}
    </p>
  </div>
)}

            <p style={{ fontWeight: "bold", fontSize: "22px" }} className='card-text'>Your Acne level: {acne}</p>







            {errorMsg && <p className="text-danger">{errorMsg}</p>}


            <div className="container" style={{ display: products ? '' : 'none' }}>

              {recommendedProducts.length > 0 && (
                <div className="recommended-products">
                  <h5>Recommended Products:</h5>
                  <ul>
                    {recommendedProducts.map((product, index) => (
                      <li key={index}>{product}</li>
                    ))}
                  </ul>
                </div>
              )}

            </div>


          </div>


          <div className='my-5 '>
          {!products && (
          <Link
            to={
              highestProbabilitySkinType === 'Combination'
                ? '/combination'
                : highestProbabilitySkinType === 'Dry'
                ? '/dry'
                : highestProbabilitySkinType === 'Oily'
                ? '/oily'
                : ''
            }
                className='card-link mx-5 btn-primary'
                style={{
                  textDecoration: 'none',
                  color: 'black',
                  backgroundColor: 'gray',
                  border: '2px solid black',
                  padding: '12px',
                  fontWeight: 'bold',
                  cursor: 'pointer',
                }}
                onClick={recommendProducts} // Call the recommendProducts function
              >
                Product Recommendation
              </Link>

            )}
           
          
          </div>
        </form>
      </div>
    
       <Footer/>
       </div>
    </>
  );

};



export default FileUpload;
