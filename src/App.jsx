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

const App = () => {
  const images = [
    'image1.jpg',
    'image2.jpg',
    'image3.jpg',
    'image4.jpg',
    'image5.jpg',
    'image6.jpg',
    'image7.jpg',
    'image8.jpg',
    'image9.jpg',
    'image10.jpg',
    'image11.jpg',
    // Add more image URLs as needed
  ];

  return (
    <div className="app-container">
      <h1>Image Gallery Slider</h1>
      <About images={images} />
    </div>
  );
};

export default App;
