import colors from '../constants/colors';

const getColorByTemperature = (temperature) => {
  if (temperature <= -10) {
    return colors.coldWarmGradient[0];
  } else if (temperature >= 30) {
    return colors.warmHotGradient[20];
  } else if (temperature > -10 && temperature <= 10) {
    return colors.coldWarmGradient[temperature + 10];
  } else if (temperature > 10 && temperature < 30) {
    return colors.warmHotGradient[temperature - 10];
  }
}

export default getColorByTemperature;
