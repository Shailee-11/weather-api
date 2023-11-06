import React from 'react';

const OverLay = ({ name, temp, main, description, onClose }) => {
  return (
    <div className="overlay">
      <div className="overlay-content">
        <h2>{name}</h2>
        <p>Temperature: {temp}°C</p>
        <p>Main: {main}</p>
        <p>Description: {description}</p>
        <button onClick={onClose}>Close</button>
      </div>
    </div>
  );
};
//hello
export default OverLay;
