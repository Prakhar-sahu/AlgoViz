import React from 'react';
import './label.css';

const SwitchLabels = (props) => {
  const [checked, setChecked] = React.useState(false);

  const handleChange = () => {
    const newChecked = !checked;
    setChecked(newChecked);
    props.onDoubleChange(newChecked);
  };

  return (
    <div className="switch-label-container">
      <label className="switch-label-text">
        Duo
        <input
          type="checkbox"
          checked={checked}
          onChange={handleChange}
          disabled={props.disable}
          className="switch-checkbox"
        />
        <span className="checkmark"></span>
      </label>
    </div>
  );
};

export default SwitchLabels;
