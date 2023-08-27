import React, { Component } from 'react';

class SkinConcernForm extends Component {
  state = {
    skinType: '',
    wrinkles: false,
    blemishes: false,
    scars: false,
    recommendedProducts: [],
  };

  handleInputChange = (event) => {
    const target = event.target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const name = target.name;

    this.setState({
      [name]: value,
    });
  };
  
  handleSubmit = (event) => {
    event.preventDefault();
  
    // Convert the form data to a query string
    const formData = new FormData(event.target);
    const queryString = new URLSearchParams(formData).toString();
  
    // Call the API to get the recommended products
    fetch(`/api/products?${queryString}`)
      .then((response) => response.json())
      .then((data) => {
        console.log(data.products);
        this.setState({
          recommendedProducts: data.products,
        });
      })
      .catch((error) => console.error(error));
  };

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <div style={{ marginBottom: '10px' }}>
            <label style={{ marginRight: '10px' }}>
              <input
                type="radio"
                name="skinType"
                value="oily"
                checked={this.state.skinType === 'oily'}
                onChange={this.handleInputChange}
              />
              <span style={{ marginLeft: '5px' }}>Oily</span>
            </label>
            <label style={{ marginRight: '10px' }}>
              <input
                type="radio"
                name="skinType"
                value="dry"
                checked={this.state.skinType === 'dry'}
                onChange={this.handleInputChange}
              />
              <span style={{ marginLeft: '5px' }}>Dry</span>
            </label>
            <label>
              <input
                type="radio"
                name="skinType"
                value="normal"
                checked={this.state.skinType === 'normal'}
                onChange={this.handleInputChange}
              />
              <span style={{ marginLeft: '5px' }}>Normal</span>
            </label>
          </div>
          <div style={{ marginBottom: '10px' }}>
            <label style={{ marginRight: '10px' }}>
              <input
                type="checkbox"
                name="wrinkles"
                checked={this.state.wrinkles}
                onChange={this.handleInputChange}
              />
              <span style={{ marginLeft: '5px' }}>Wrinkles</span>
            </label>
            <label style={{ marginRight: '10px' }}>
              <input
                type="checkbox"
                name="blemishes"
                checked={this.state.blemishes}
                onChange={this.handleInputChange}
              />
              <span style={{ marginLeft: '5px' }}>Blemishes</span>
            </label>
            <label style={{ marginRight: '10px' }}>
              <input
                type="checkbox"
                name="scars"
                checked={this.state.scars}
                onChange={this.handleInputChange}
              />
              <span style={{ marginLeft: '5px' }}>Scars</span>
            </label>
          </div>
          <button
            style={{
              backgroundColor: '#4CAF50',
              color: 'white',
              padding: '10px 20px',
              border: 'none',
              borderRadius: '5px',
            }}
            type="submit"
          >
            Submit
          </button>
        </form>
        {this.state.recommendedProducts.length > 0 && (
          <div style={{ marginTop: '20px' }}>
            <h2 style={{ marginBottom: '10px', color: 'Black' }}>
              Following Ingredients must be in your skincare ingredients
            </h2>
            <ul style={{ listStyleType: 'disc', marginLeft: '20px' }}>
              {this.state.recommendedProducts.map((product, index) => (
                <li key={index} style={{ color: 'white', listStyle: 'none' }}>
                  {product}
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    );
  }  
}

export default SkinConcernForm;
