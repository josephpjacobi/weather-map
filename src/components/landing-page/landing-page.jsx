import React, { useState } from 'react';
import './landing-page.css'
import { WeatherOption } from '../weather-options/weather-options';
import weatherData  from '../../data';

export function LandingPage(props) {
    const { getWeather } = props
    const [city, setCity] = useState('')
    const [weatherOption, setWeatherOption] = useState('value1')
   
  
    const handleSubmit = async (e) => {
      e.preventDefault();
      if (weatherData[city]) {
        await getWeather(weatherData[city]);
      } else console.log("No Results");
    };
  
    const handleChange = (e) => {
      setCity(e.target.value)
    }
  
    const handleWeatherMapChange = (value) => {
      setWeatherOption(value)
    }
  
    return (
      <div>
        <form onSubmit={(e) => handleSubmit(e)}>
          <label>
            Search:
            <input
              type="text"
              value={city}
              onChange={(e) => handleChange(e)}
            ></input>
          </label>
          <div>
            <WeatherOption optionType="Weather" />
            <WeatherOption optionType="48HourForecast" />
            <WeatherOption optionType="Precipitation" />
            <WeatherOption optionType="Temperature" />
          </div>
          <label>
            Weather Options:
            <label>Temperature</label>
            <input
              type="radio"
              value="temperature"
              checked={weatherOption === "temperature"}
              onChange={() => handleWeatherMapChange("temperature")}
            ></input>
            <label>Precipitation</label>
            <input
              type="radio"
              value="precipitation"
              checked={weatherOption === "precipitation"}
              onChange={() => handleWeatherMapChange("precipitation")}
            ></input>
            <label>Cloud Cover</label>
            <input
              type="radio"
              value="cloudCover"
              checked={weatherOption === "cloudCover"}
              onChange={() => handleWeatherMapChange("cloudCover")}
            ></input>
          </label>
          <input type="submit" value="Submit" />
        </form>
      </div>
    );
  }

export default LandingPage;
