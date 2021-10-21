import {useEffect, useState} from 'react';
import getColorByTemperature from '../utils/temperatureUtils';

function useAppState() {
  const [backgroundColor, setBackgroundColor] = useState('rgb(255, 255, 255)');
  const [temperature, setTemperature] = useState(0);
  const [icon, setIcon] = useState('');

  useEffect(() => {
    const roundedTemp = Math.round(temperature);
    const {x, y, z} = getColorByTemperature(roundedTemp);

    setBackgroundColor(`rgb(${x},${y},${z})`);
  }, [temperature]);


  return {backgroundColor, icon, setIcon, setTemperature, temperature};
}

export default useAppState;
