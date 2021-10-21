import React from 'react';
import useAppState from './hooks/useAppState';
import LocationAccessDialog from './components/LocationAccessDialog';
import WeatherApi from './api/weatherApi';
import './App.css';

function App() {
  const {backgroundColor, icon, setIcon, setTemperature} = useAppState();

  const accessLocationHandler = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(({coords}) => {
        WeatherApi.getWeather(coords.latitude, coords.longitude)
          .then(({data}) => {
            setTemperature(data.main.temp);
            setIcon(`http://openweathermap.org/img/w/${data.weather[0].icon}.png`)
          })
          .catch(alert);
      }, (err) => {
        alert(err.message);
      })
    } else {
      alert('This browser does not support this feature');
    }
  }

  return (
    <div className="container" style={{backgroundColor}}>
      {
         icon ? <img id="wicon" src={icon} alt="Weather icon" /> : <LocationAccessDialog onAccessLocation={accessLocationHandler} />
      }
    </div>
  );
}

export default App;
