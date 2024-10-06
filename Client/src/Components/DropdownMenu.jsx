import React, { useState } from 'react';

function DropdownMenu() {
  // State to hold the selected option
  const [selectedOption, setSelectedOption] = useState('');

  // Function to handle the change event when a new option is selected
  const handleChange = (event) => {
    setSelectedOption(event.target.value); // Update state with the selected option
  };

  return (
    <div>
      {/* Change text color to white */}
      <h2 style={{ color: 'white' }}>Choose Your Model</h2>
      
      {/* Dropdown menu */}
      <select value={selectedOption} onChange={handleChange} style={{ color: 'black' }}>
        {/* Change default option color to white */}
        <option value="" style={{ color: 'black' }}>Select Your Model</option>
        <option value="model1">EfficientNetB0</option>
        <option value="model2">NASNETMobile</option>
        <option value="model3">MobileNet</option>
      </select>

      {/* Display the selected option */}
      {selectedOption && (
        <div>
          <h3 style={{ color: 'white' }}>You selected: {selectedOption}</h3>
        </div>
      )}
    </div>
  );
}

export default DropdownMenu;
