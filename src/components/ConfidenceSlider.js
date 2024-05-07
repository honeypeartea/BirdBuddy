import React, { useState } from 'react';

function ConfidenceSlider({ onChange }) {
    const [confidenceLevel, setConfidenceLevel] = useState(3);  // Default value is set to 3

    const handleSliderChange = (event) => {
        const newValue = parseInt(event.target.value, 10);
        setConfidenceLevel(newValue);
        onChange(newValue);  // Call the passed onChange function to lift the state up if needed
    };

    return (
        <div className="confidence-slider-container">
            <label htmlFor="confidence-slider">Confidence Level: {confidenceLevel}</label>
            <input
                type="range"
                id="confidence-slider"
                min="1"
                max="5"
                value={confidenceLevel}
                onChange={handleSliderChange}
            />
        </div>
    );
}

export default ConfidenceSlider;
