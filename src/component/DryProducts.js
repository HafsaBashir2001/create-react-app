import React, { useState, useEffect } from 'react';
import Modal from 'react-modal';
import RoutineDry from './RoutineDry';
import { useNavigate } from 'react-router-dom';
import useFileUrl from './upload';
import { Link } from 'react-router-dom';



const DryProducts = ({ skinType }) => {
  const [recommendedProducts, setRecommendedProducts] = useState([]);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [isProductDetailsModalOpen, setIsProductDetailsModalOpen] = useState(false);
  const [selectedConcerns, setSelectedConcerns] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [showRoutine, setShowRoutine] = useState(false);

 
  const navigate = useNavigate();
  const { fileUrl } = useFileUrl();

  useEffect(() => {
    fetch(`/api/products/${skinType}`)
      .then((response) => response.json())
      .then((data) => {
        setRecommendedProducts(data);
      })
      .catch((error) => {
        console.error('Error:', error);
      });
  }, [skinType]);

  const handleProductClick = (product) => {
    setSelectedProduct(product);
    setIsProductDetailsModalOpen(true);
  };

  const handleConcernChange = (concern) => {
    if (selectedConcerns.includes(concern)) {
      setSelectedConcerns(selectedConcerns.filter((item) => item !== concern));
    } else {
      setSelectedConcerns([...selectedConcerns, concern]);
    }
  };

  


  const filterProducts = () => {
    let filteredProducts = recommendedProducts;

    if (selectedConcerns.length > 0) {
      filteredProducts = filteredProducts.filter(
        (product) =>
          selectedConcerns.includes(product.concern) ||
          selectedConcerns.includes(product.concern2) ||
          selectedConcerns.includes(product.concern3)
      );
    }

  

    return filteredProducts;
  };
const handleSkincareRoutineClick = () => {
  if (skinType === 'Oily') {
    navigate('/routineoily');
  } else if (skinType === 'Dry') {
    navigate('/routinedry');
  } else if (skinType === 'Combination') {
    navigate('/routinecombination');
  }
  setShowRoutine(!showRoutine);
  
};



  


  return (
    <div className="heading">
      <h3 className="text-center" style={{ color: 'white' }}>
        SkinCare Products for Dry Skin
      </h3>
      <br />
      <div
        className="combinationProducts"
        style={{
          display: 'flex',
          flexWrap: 'wrap',
          justifyContent: 'center',
          gap: '20px',
          color: 'black',
        }}
      >
        <div>
        
          <div style={{
            display: 'flex'
          }}>
            <h5 style={{marginRight:'36px'}}>  <strong>Skin Concerns:</strong> </h5>
            <label>
              <input
                type="checkbox"
                checked={selectedConcerns.includes('Fine Lines and Wrinkles')}
                onChange={() => handleConcernChange('Fine Lines and Wrinkles')}
              />
              Fine Lines and Wrinkles
            </label>
            <label>
              <input
                type="checkbox"
                checked={selectedConcerns.includes('Dryness')}
                onChange={() => handleConcernChange('Dryness')}
              />
              Dryness
            </label>
            <label>
              <input
                type="checkbox"
                checked={selectedConcerns.includes('Pigmentation')}
                onChange={() => handleConcernChange('Pigmentation')}
              />
              Pigmentation
            </label>
            <label>
              <input
                type="checkbox"
                checked={selectedConcerns.includes('Uneven Skin Tone')}
                onChange={() => handleConcernChange('Uneven Skin Tone')}
              />
              Uneven Skin Tone
            </label>
            <label>
              <input
                type="checkbox"
                checked={selectedConcerns.includes('Blackheads and Whiteheads')}
               
                onChange={() => handleConcernChange('Blackheads and Whiteheads')}
                />
                Blackheads and Whiteheads
              </label>
              <label>
                <input
                  type="checkbox"
                  checked={selectedConcerns.includes('Acne or Blemishes')}
                  onChange={() => handleConcernChange('Acne or Blemishes')}
                />
                Acne or Blemishes
              </label>
              <label>
                <input
                  type="checkbox"
                  checked={selectedConcerns.includes('Anti-Pollution')}
                  onChange={() => handleConcernChange('Anti-Pollution')}
                />
                Anti-Pollution
              </label>
              <label>
                <input
                  type="checkbox"
                  checked={selectedConcerns.includes('Dullness')}
                  onChange={() => handleConcernChange('Dullness')}
                />
                Dullness
              </label>
            </div>
          
          </div>
  
          {filterProducts().map((product, index) => (
            <div
              key={index}
              style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                background: 'none',
                border: 'none',
                margin: '20px',
                backgroundColor: 'white',
                color: 'black',
                borderRadius: '20%',
                padding: '29px'
              }}
            >
              <h4 style={{ color: 'black' }}>{product.name}</h4>
              <p style={{ color: 'black' }}>Skin Concern: {product.concern}</p>
              {product.concern2 && (
                <p style={{ color: 'black' }}>More Skin Concern: {product.concern2}</p>
              )}
              {!product.concern2 && (
                <p style={{ color: 'black' }}>This is a good product for general skincare.</p>
              )}
              {product.concern3 && (
                <p style={{ color: 'black' }}>More Skin Concern: {product.concern3}</p>
              )}
              {!product.concern3 && <p style={{ color: 'black' }}>Well Moisturize skin</p>}
              <img
                src={product.image}
                alt={product.name}
                style={{
                  width: '150px',
                  height: '150px',
                  objectFit: 'cover',
                  marginBottom: '10px',
                  cursor: 'pointer',
                  color: 'black',
                
                }}
                onClick={() => handleProductClick(product)}
              />
            </div>
          ))}
  
          {selectedProduct && (
            <Modal
              isOpen={isProductDetailsModalOpen}
              onRequestClose={() => setIsProductDetailsModalOpen(false)}
              style={{
                overlay: {
                  backgroundColor: 'rgba(0, 0, 0, 0.5)',
                },
                content: {
                  maxWidth: '800px',
                  borderRadius: '20%',
                  padding: '29px',
                  margin: 'auto',
                },
              }}
            >
              <h2>{selectedProduct.name}</h2>
              <p style={{fontSize:'22px'}} ><strong>Brand:</strong>  {selectedProduct.brand}</p>
              <p style={{fontSize:'22px'}}><strong>SPF: </strong> {selectedProduct.spf}</p>
              <p style={{fontSize:'22px'}}><strong> Concern:</strong> {selectedProduct.concern}</p>
              {selectedProduct.concern2 && (
                <p style={{fontSize:'22px'}}> Skin Concern: {selectedProduct.concern2}</p>
              )}
              {selectedProduct.concern3 && (
                <p style={{fontSize:'22px'}}>More Skin Concern: {selectedProduct.concern3}</p>
              )}
              {!selectedProduct.concern2 && !selectedProduct.concern3 && (
                <p style={{fontSize:'22px'}}>This is a good product for general skincare.</p>
              )}
              <p style={{fontSize:'22px'}}><strong> key_ingredient:</strong> {selectedProduct.key_ingredient}</p>
              <p style={{fontSize:'22px'}}><strong>Formulation:</strong>  {selectedProduct.formulation}</p>
              <button style={{fontSize:'22px'}} onClick={() => setIsProductDetailsModalOpen(false)}>Close</button>
            </Modal>
          )}
        </div>
        <div className="routine-link-container">
       <button onClick={handleSkincareRoutineClick} style={{
  textDecoration: 'none',
  color: 'black',
  backgroundColor: 'gray',
  border: '2px solid black',
  padding: '12px',
  fontWeight: 'bold',
}}
  
       > 
       Skincare Routine

       </button>
       
      </div>

      </div>




    );
  };
  
  export default DryProducts;
    