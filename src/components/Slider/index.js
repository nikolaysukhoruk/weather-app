import React from 'react';
import {Slider} from '@mui/material';
import './styles.css'

function CustomSlider({temperature, onTemperatureChangeHandler}) {
  return (
    <div className="slider-container">
      <Slider
        onChange={(event, value) => onTemperatureChangeHandler(value)}
        defaultValue={10}
        min={-10}
        max={30}
        value={temperature}
        aria-label="Default"
        valueLabelDisplay="auto"
      />
    </div>
  );
}

export default CustomSlider;
