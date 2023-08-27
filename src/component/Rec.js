import React, { useState } from 'react';
import SkinConcernForm from './Form';
import ProductList from './list';


const Recommend = () => {
  const [recommendedProducts, setRecommendedProducts] = useState([]);

  const handleFormSubmit = (products) => {
    setRecommendedProducts(products);
  };

  return (
    <div>
      <h1 style={{color:"white"}}>Ingredients according to your skin concerns</h1>
      <SkinConcernForm onFormSubmit={handleFormSubmit} />
      
      {recommendedProducts.length > 0 && (
        <div>
          <h2  style={{color:"white"}} > Following Ingredients must in your skincare ingredients</h2>
          <ProductList products={recommendedProducts} />
       
        </div>
      )}
    </div>
  );
};

export default Recommend;
