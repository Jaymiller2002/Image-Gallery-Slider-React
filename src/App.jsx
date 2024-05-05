const Title = () => {
  return (
    <h1>
      Hello World!
    </h1>
  )
}


import React from 'react';
import About from './About';
import './App.css'; // Assume you have a CSS file for styling
import Image1 from './assets/image1.jpg'
import Image2 from './assets/image2.jpg'
import Image3 from './assets/image3.jpg'
import Image4 from './assets/image4.jpg'
import Image5 from './assets/image5.jpg'
import Image6 from './assets/image6.jpg'
import Image7 from './assets/image7.jpg'
import Image8 from './assets/image8.jpg'
import Image9 from './assets/image9.jpg'
import Image10 from './assets/image10.jpg'
import Image11 from './assets/image11.jpg'

const App = () => {
  const images = [
    Image1,
    Image2,
    Image3,
    Image4,
    Image5,
    Image6,
    Image7,
    Image8,
    Image9,
    Image10,
    Image11
    // Add more image URLs as needed
  ];

  return (
    <div className="app-container">
      <div className="image-slider">
      <About images={images} />
      </div>
    </div>
  );
};

export default App;
