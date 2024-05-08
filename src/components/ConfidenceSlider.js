import React, { useState } from 'react';
import Slider from '@mui/material/Slider';
import Box from '@mui/material/Box';  // Importing Box for easier style management

function ConfidenceSlider({ onChange }) {
    const [confidenceLevel, setConfidenceLevel] = useState(3);  // Default value is set to 3

    const handleSliderChange = (event, newValue) => {
        setConfidenceLevel(newValue);
        onChange(newValue);  // Call the passed onChange function to lift the state up if needed
    };

    return (
        <Box sx={{ width: 300, margin: '20px auto', textAlign: 'center' }}>
            <Slider
                aria-label="Confidence Level"
                defaultValue={3}
                value={confidenceLevel}
                onChange={handleSliderChange}
                step={1}
                marks
                min={1}
                max={5}
                valueLabelDisplay="auto"  // Automatically shows the value label
            />
            <label htmlFor="confidence-slider" style={{ display: 'block', marginTop: '20px' }}>
                Confidence Level: {confidenceLevel}
            </label>
        </Box>
    );
}

export default ConfidenceSlider;
