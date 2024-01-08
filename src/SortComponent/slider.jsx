import React, { useState } from 'react';
import './slider.css'
const CustomSlider = (props) => {
  const [sliderValue, setSliderValue] = useState(props.default);

  const handleChange = (event) => {
    if (event.target.value === '') {
      return;
    }
    const num = parseInt(event.target.value, 10);
    // console.log(num);
    setSliderValue(num);
    console.log(num);
    props.onCountChange(num);
  };

  return (
    <div className="slider-container ml-2 mr-2">
      

      {/* Slider input element */}
      <input
        type="range"
        value={sliderValue}
        min={props.min}
        max={props.max}
        step={props.step}
        onChange={handleChange}
        disabled={props.disable}
      />
      {/* Display the current slider value */}
      <p>{props.title}: {sliderValue}</p>
    </div>
  );
};

export default CustomSlider;
