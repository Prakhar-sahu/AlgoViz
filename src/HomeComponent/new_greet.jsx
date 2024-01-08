import React from 'react';
import './new_greet.css'; // Import the corresponding CSS file for styling

const New_greet = () => {
  return (
    <div className="algorithm-wonderland-container">
      <div className="left-content">
        <h1>Welcome to the Wonderland of Algorithms</h1>
        <p>Embark on a journey to visualize the magic of algorithms in a whole new light.</p>
      </div>
      <div className="right-content">
        <img
          src="https://vistapointe.net/images/wonderland--8.jpg"
          alt="Algorithm Wonderland"
          className="algorithm-image"
        />
      </div>
    </div>
  );
};

export default New_greet;
