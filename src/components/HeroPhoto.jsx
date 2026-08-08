import React from 'react';
import heroImage from '../../Trabalhos/img_violada.jpeg';

const HeroPhoto = () => {
  return (
    <div className="hero-photo-container">
      <img 
        src={heroImage} 
        alt="Fábio Borges" 
        className="hero-photo"
      />
    </div>
  );
};

export default HeroPhoto;