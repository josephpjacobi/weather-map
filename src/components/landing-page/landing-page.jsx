import React, {useState} from 'react';
import { WeatherOption } from '../weather-options/weather-options';
import './landing-page.css';

export function LandingPage() {
    const [zipcode, setZipCode] = useState('')
    const [weatherOption, setWeatherOption] = useState('value1')
  
    const handleSubmit = (e) => {
      console.log(zipcode);
      console.log(weatherOption);
      e.preventDefault();
    }
  
    const handleChange = (e) => {
      setZipCode(e.target.value)
    }
  
    const handleWeatherMapChange = (value) => {
      setWeatherOption(value)
    }
  
    return (
      <form onSubmit={(e) => handleSubmit(e)}>
        <label>
          Search:
          <input className="search-text-box"
            type="text"
            value={zipcode}
            onChange={(e) => handleChange(e)}
          ></input>
        </label>
        <div className="weather-options-container">
          <WeatherOption optionType="Weather" />
          <WeatherOption optionType="48HourForecast" />
          <WeatherOption optionType="Precipitation" />
          <WeatherOption optionType="Temperature" />
        </div>
        <label className="weather-options-label">
          Weather Options:
          <label className="temperature-label">
          Temperature
          </label>
        <input className="temperature-radio-button"
          type="radio"
          value="temperature"
          checked={weatherOption === "temperature"}
          onChange={() => handleWeatherMapChange("temperature")}
        ></input>
        <label>
          Precipitation
          </label>
        <input className="precipitation-radio-button"
          type="radio"
          value="precipitation"
          checked={weatherOption === "precipitation"}
          onChange={() => handleWeatherMapChange("precipitation")}
        ></input>
        <label>
          Cloud Cover
          </label>
        <input className="cloud-cover-radio-button"
          type="radio"
          value="cloudCover"
          checked={weatherOption === "cloudCover"}
          onChange={() => handleWeatherMapChange("cloudCover")}
        ></input>
      </label>
      <input className="submit-button"
      type="submit" value="Submit" />
    </form>
    );
  }

export default LandingPage;
