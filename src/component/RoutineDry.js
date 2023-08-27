import React, { useEffect, useState } from 'react';
import { PDFDownloadLink, Document, Page, Text, StyleSheet } from '@react-pdf/renderer';
import jsPDF from 'jspdf';
import giff from './moving.gif'
import './Styles/Routine_Dry.css';

const RoutineDry = ({ fileUrl }) => {
const [recommendedProducts, setRecommendedProducts] = useState([]);
const [selectedProducts, setSelectedProducts] = useState([]);
const [moisturizers, setMoisturizers] = useState([]);
const [cleansers, setCleansers] = useState([]);
const [eyeCreams, setEyeCreams] = useState([]);
const [sunscreen, setSunscreen] = useState([]);
const [activeCategory, setActiveCategory] = useState('');

useEffect(() => {
fetch('/api/products/Dry')
.then((response) => response.json())
.then((data) => {
setRecommendedProducts(data);
// Split the recommended products into different labels
const moisturizerProducts = data.filter((product) => product.label === 'face-moisturisers');
const cleanserProducts = data.filter((product) => product.label === 'cleanser');
const eyeCreamProducts = data.filter((product) => product.label === 'eye-cream');
const sunscreenProducts = data.filter((product) => product.label === 'sunscreen');
setMoisturizers(moisturizerProducts);
setCleansers(cleanserProducts);
setEyeCreams(eyeCreamProducts);
setSunscreen(sunscreenProducts);
})
.catch((error) => {
console.error('Error:', error);
});
}, []);

const handleProductSelection = (product) => {
  if (selectedProducts.includes(product)) {
    setSelectedProducts(selectedProducts.filter((item) => item !== product));
  } else {
    setSelectedProducts([...selectedProducts, product]);
    window.open(product.url, '_blank'); // Open the product URL in a new tab
  }
};
const containerStyle = {
  margin: '20px',
  fontFamily: 'Arial, sans-serif',
};

 // Function to handle category selection
//  const handleCategorySelection = (category) => {
//   if (activeCategory === category) {
//     // If the clicked category is already active, deselect it
//     setActiveCategory('');
//   } else {
//     // Otherwise, set the clicked category as active
//     setActiveCategory(category);
//   }
// };


const handleDownloadPDF = () => {
    const doc = new jsPDF();
    doc.setFontSize(20);
    doc.text('Dermate Skincare Product Recommendation', 20, 20);

    selectedProducts.forEach((product, index) => {
      const text = `${index + 1}. ${product.name}`;
      const label = `Label: ${product.label}`;
      const url = `URL: ${product.url}`;
      const ingredients = `Ingredients: ${product.ingredients}`;
      const concerns = `Concerns: ${product.concerns}`;

      doc.setFontSize(14);
      doc.text(text, 20, 40 + index * 60);
      doc.setFontSize(12);
      doc.text(label, 20, 50 + index * 60);
      doc.text(url, 20, 60 + index * 60);
      doc.text(ingredients, 20, 70 + index * 60);
      doc.text(concerns, 20, 80 + index * 60);
    });

    doc.save('routine_products.pdf');
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
<div className="routine-dry-container">
<h2>Dry Skin Care Routine</h2>
<p>Follow these steps to take care of your dry skin:</p>
<div className="user-image-container">
    {fileUrl && <img src={fileUrl} alt="User Upload" className="user-image" />}
  </div>

  <div className="routine-step">
    <h3>Step 1: Cleansing</h3>
    <p>Start by cleansing your face with a gentle, hydrating cleanser that doesn't strip away natural oils. Avoid harsh cleansers or those containing alcohol.</p>
  </div>

  <div className="routine-step">
    <h3>Step 2: Toning</h3>
    <p>Use an alcohol-free toner to balance your skin's pH levels and provide additional hydration. Look for toners with ingredients like rose water or hyaluronic acid.</p>
  </div>

  <div className="routine-step">
    <h3>Step 3: Moisturizing</h3>
    <p>Moisturize your skin with a rich, emollient moisturizer specifically designed for dry skin. Look for ingredients like hyaluronic acid, ceramides, and natural oils to replenish moisture and improve skin barrier function.</p>
  </div>

  <div className="routine-step">
    <h3>Step 4: Sun Protection</h3>
    <p>Don't forget to apply sunscreen with at least SPF 30 before going outside. Look for sunscreens that offer broad-spectrum protection and are formulated for dry skin to avoid further dehydration.</p>
  </div>

  <div className="container" style={{display:'flex'}}>

       <div className="moisturizer">
             <h4>face Moisturizer</h4>
        {/* Display the recommended products */}
        {moisturizers.map((product, index) => (
          <tr style={{ textAlign: 'left'}} key={index}>
            <td style={{ border: '1px solid black', padding: '5px' }}>
              <label>
                {/* <input
                  type="checkbox"
                  checked={selectedProducts.includes(product)}
                  onChange={() => handleProductSelection(product)}
                /> */}
                <a
                  href={product.url}
                  target="_blank"
                  style={{textDecoration: 'none'}}
                  rel="noopener noreferrer"
                  onClick={(e) => {
                    e.stopPropagation(); // Prevent the checkbox from being toggled when the product name is clicked
                  }}
                >
                  {product.name}
                </a>
              </label>
            </td>
          </tr>
        ))}
        </div>
        <div className="sunscreen">

        
     {/* Sunscreen */}
<div className="recommended-products">
  <h4>Sunscreen</h4>
  {/* <h3
    style={{ color: 'red', fontSize: '20px', cursor: 'pointer',
  
   }}
    // onClick={() => handleCategorySelection('sunscreen')}
  > */}
    {/* Sunscreen
  </h3> */}
   {sunscreen.map((product, index) => (
          <tr style={{ textAlign: 'left'}} key={index}>
            <td style={{ border: '1px solid black', padding: '5px' }}>
              <label>
                {/* <input
                  type="checkbox"
                  checked={selectedProducts.includes(product)}
                  onChange={() => handleProductSelection(product)}
                /> */}
                <a
                  href={product.url}
                  target="_blank"
                  style={{textDecoration: 'none'}}
                  rel="noopener noreferrer"
                  onClick={(e) => {
                    e.stopPropagation(); // Prevent the checkbox from being toggled when the product name is clicked
                  }}
                >
                  {product.name}
                </a>
              </label>
            </td>
          </tr>
        ))}
</div>
</div>

<div className="eyecream">



{/* Eye Creams */}
<div className="recommended-products">
  <h4>Eye Creams</h4>
  {/* <h3
    style={{ color: 'purple', fontSize: '20px', cursor: 'pointer' }}
    // onClick={() => handleCategorySelection('eyeCreams')}
  >
    Eye Creams
  </h3> */}
  {eyeCreams.map((product, index) => (
          <tr style={{ textAlign: 'left'}} key={index}>
            <td style={{ border: '1px solid black', padding: '5px' }}>
              <label>
                {/* <input
                  type="checkbox"
                  checked={selectedProducts.includes(product)}
                  onChange={() => handleProductSelection(product)}
                /> */}
                <a
                  href={product.url}
                  target="_blank"
                  style={{textDecoration: 'none'}}
                  rel="noopener noreferrer"
                  onClick={(e) => {
                    e.stopPropagation(); // Prevent the checkbox from being toggled when the product name is clicked
                  }}
                >
                  {product.name}
                </a>
              </label>
            </td>
          </tr>
        ))}
</div>
</div>

<div className="cleanser">


{/* Cleansers */}
<div className="recommended-products">
  <h4>Cleansers</h4>
  {/* <h3
    style={{ color: 'green', fontSize: '20px', cursor: 'pointer' }}
    // onClick={() => handleCategorySelection('cleansers')}
  >
    Cleansers
  </h3> */}
  {cleansers.map((product, index) => (
          <tr style={{ textAlign: 'left'}} key={index}>
            <td style={{ border: '1px solid black', padding: '5px' }}>
              <label>
                {/* <input
                  type="checkbox"
                  checked={selectedProducts.includes(product)}
                  onChange={() => handleProductSelection(product)}
                /> */}
                <a
                  href={product.url}
                  target="_blank"
                  style={{textDecoration: 'none'}}
                  rel="noopener noreferrer"
                  onClick={(e) => {
                    e.stopPropagation(); // Prevent the checkbox from being toggled when the product name is clicked
                  }}
                >
                  {product.name}
                </a>
              </label>
            </td>
          </tr>
        ))}
</div>
</div>

</div>

  {/* Download button for selected products */}
  {selectedProducts.length > 0 && (
    <div className="download-pdf">
      <button onClick={handleDownloadPDF}>Download PDF</button>
    </div>
  )}
</div>
</div>
);
};

export default RoutineDry;