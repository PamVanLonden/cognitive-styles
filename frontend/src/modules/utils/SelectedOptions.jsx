import React, { useState } from 'react';

// This component will generate the button group
const ButtonGroup = ({ name, onChange }) => {
  // State to keep track of the selected button
  const [selectedValue, setSelectedValue] = useState(null);

  // Function to handle button clicks
  const handleButtonClick = (value) => {
    setSelectedValue(value);
    onChange(name, value); // Pass the selected value back to the parent
  };

  return (
    <div className="buttonGroup">
      <p className="scale">
        {[...Array(9)].map((_, index) => {
          const value = index + 1;
          return (
            <button
              key={value}
              type="button"
              name={name}
              value={value}
              className={selectedValue === value ? 'selected' : ''}
              onClick={() => handleButtonClick(value)}
            >
              {value}
            </button>
          );
        })}
      </p>
    </div>
  );
};

export default ButtonGroup;
