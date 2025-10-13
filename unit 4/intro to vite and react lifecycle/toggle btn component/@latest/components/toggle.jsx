import React, { useState } from 'react';

function ToggleButton({ label = '' }) {
  // Track ON/OFF state
  const [isOn, setIsOn] = useState(false);

  // Toggle state function
  const handleToggle = () => setIsOn(!isOn);

  // Dynamic styles for ON/OFF text
  const textStyle = {
    color: isOn ? 'green' : 'red',
    fontWeight: 'bold',
    marginLeft: '8px',
  };

  return (
    <div>
      <button onClick={handleToggle}>
        {isOn ? 'ON' : 'OFF'}
      </button>
      {label && (
        <span style={textStyle}>{label}</span>
      )}
    </div>
  );
}

export default ToggleButton;
