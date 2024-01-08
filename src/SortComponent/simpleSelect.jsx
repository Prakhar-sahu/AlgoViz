import React from 'react';
import './simpleselect.css'
const SimpleSelect = (props) => {
  const [selectedOption, setSelectedOption] = React.useState(0);

  const handleChange = (event) => {
    const selectedValue = parseInt(event.target.value, 10);
    setSelectedOption(selectedValue);
    props.onAlgoChanged(props.pos, selectedValue);
  };

  return (
    <div className="ml-2 mr-2">
      <label htmlFor={`algoSelect-${props.pos}`}>Algorithm</label>
      <select
        id={`algoSelect-${props.pos}`}
        value={selectedOption}
        onChange={handleChange}
      >
        <option value={0}>Bubble Sort</option>
        <option value={1}>Selection Sort</option>
        <option value={2}>Insertion Sort</option>
        <option value={3}>Quick Sort</option>
      </select>
    </div>
  );
};

export default SimpleSelect;
