import React, { useState } from 'react';

export default function IngredientChecker() {
  const [text, setText] = useState('');
  const [result, setResult] = useState('');

  const AcneIngredients = [
    'alcohol',
    'silicones',
    'silicone',
    'perfume',
    'Mineral oil',
    'acetylated lanolin',
    'acetylated lanolin alcohol',
    'algae extract',
    'algin',
    'beeswax',
    'bismuth',
    'cetearyl alcohol + ceteareth 20',
    'cetyl acetate',
    'chlorella',
    'chondrus crispus (aka irish moss or carageenan moss)',
    'coal tar',
    'cocoa butter',
    'coconut alkanes',
    'coconut butter',
    'coconut oil',
    'cocos nucifera oil',
    'colloidal sulfur',
    'cotton awws oil',
    'cotton seed oil',
    'corn oil',
    'd & c red # 17',
    'd & c red # 21',
    'd & c red # 3',
    'd & c red # 30',
    'd & c red # 36',
    'decyl oleate',
    'dioctyl succinate',
    'disodium monooleamido',
    'ethoxylated lanolin',
    'ethylhexyl palmitate',
    'glyceryl stearate se',
    'glyceryl-3 diisostearate',
    'hexadecyl alcohol',
    'hydrogenated vegetable oil',
    'isocetyl alcohol',
    'isocetyl stearate',
    'isodecyl oleate',
    'isopropyl isostearate',
    'isopropyl linolate',
    'isopropyl myristate',
    'isopropyl palmitate',
    'isostearyl isostearate',
    'isostearyl neopentanoate',
    'jojoba wax',
    'kelp',
    'laminaria digitata extract',
    'laminaria saccharina extract (laminaria saccharine)',
    'laureth-23',
    'laureth-4',
    'lauric acid',
    'mango butter',
    'mink oil',
    'myristic acid',
    'myristyl lactate',
    'myristyl myristate',
    'octyl palmitate',
    'octyl stearate',
    'oleth-3',
    'oleyl alcohol',
    'parkii',
    'peg 2- sulfosuccinate',
    'peg 200 dilaurate',
    'peg 8 stearate',
    'pg monostearate',
    'ppg 2 myristyl propionate',
    'plankton',
    'polyglyceryl-3 diisostearate',
    'potassium chloride',
    'propylene glycol monostearate',
    'red algae',
    'seaweed',
    'shark liver oil',
    'shea',
    'shea butter',
    'sodium laureth sulfate',
    'sodium lauryl sulfate',
    'solulan 16',
    'sorbitan oleate',
    'soybean oil',
    'spirulina',
    'steareth 10',
    'stearic acid tea',
    'stearyl heptanoate',
    'sulfated castor oil',
    'sulfated jojoba oil',
    'talc',
    'wheat germ glyceride',
    'wheat germ oil',
    'xylene',
    'isotretinoin',
    'tretinoin',
    'adapalene',
    'benzoyl peroxide',
    
    'alpha hydroxy acids'];

  const handleInputChange = (event) => {
    setText(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (AcneIngredients.includes(text.toLowerCase())) {
      setResult(`${text} may cause acne. To treat acne, consider using topical treatments containing salicylic acid or benzoyl peroxide. Also, maintain a consistent skincare routine and keep your skin clean.`);
  } else {
    setResult(`${text} is not recognized as an acne-causing ingredient. If you have acne, consider using topical treatments containing salicylic acid or benzoyl peroxide. Also, maintain a consistent skincare routine and keep your skin clean.`);
  }
  };

  return (
    <div className="container" style={{ position: 'relative', overflow: 'hidden' }}>
      <div className="background" style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', zIndex: -1 }}>
        <video autoPlay loop muted className="bg-video" style={{ width: '100%', height: '100%', objectFit: 'cover' }}>
          <source src="https://i.gifer.com/QWc9.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
      <div className="detail">
        
        <h3 style={{ marginTop: '100px', color: 'white' }}>Let's Analyze the Ingredients</h3>
        <p style={{ color: 'white' }}>
          If you have acne-prone skin, it's important to check the ingredients of the products you use. Some ingredients
          can clog your pores and worsen acne. Don't rely solely on labels like "noncomedogenic" or "oil-free" as they
          are not regulated. Always check the ingredient list before using any products on your face or hair.
        </p>
      </div>

      <h3 style={{ color: 'white' , fontSize: '33px'}} className="my-3">
        Enter Ingredient Name
      </h3>

      <form onSubmit={handleSubmit}>
        <input
          className="form-control form-control-lg my-3"
          type="text"
          value={text}
          onChange={handleInputChange}
          placeholder="Enter ingredient name"
        />
        <button className="btn btn-primary" type="submit">
          Check
        </button>
        <p>{result}</p>
      </form>
    </div>
  );
}
