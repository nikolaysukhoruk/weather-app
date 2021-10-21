import {useEffect, useState} from 'react';
import colors from '../constants/colors';

function useAppState() {
  const [backgroundColor, setBackgroundColor] = useState('rgb(255, 255, 255)');
  const [temperature, setTemperature] = useState(0);
  const [icon, setIcon] = useState('');

  useEffect(() => {
    const roundedTemp = Math.round(temperature);
    if (roundedTemp <= -10) {
      const {x, y, z} = colors.coldWarmGradient[0];
      setBackgroundColor(`rgb(${x},${y},${z})`);
    } else if (roundedTemp >= 30) {
      const {x, y, z} = colors.warmHotGradient[20];
      setBackgroundColor(`rgb(${x},${y},${z})`);
    } else if (roundedTemp > -10 && roundedTemp <= 10) {
      const {x, y, z} = colors.coldWarmGradient[roundedTemp + 10];
      setBackgroundColor(`rgb(${x},${y},${z})`);
    } else if (roundedTemp > 10 && roundedTemp < 30) {
      const {x, y, z} = colors.warmHotGradient[roundedTemp - 10];
      setBackgroundColor(`rgb(${x},${y},${z})`);
    }
  }, [temperature]);


  return {backgroundColor, icon, setIcon, setTemperature, temperature};
}

export default useAppState;
