import React, {useState} from 'react';
import { WeatherOption } from '../weather-options/weather-options';

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
          <input
            type="text"
            value={zipcode}
            onChange={(e) => handleChange(e)}
          ></input>
        </label>
        <div className="WeatherOptions">
          <WeatherOption optionType="Weather" />
          <WeatherOption optionType="48HourForecast" />
          <WeatherOption optionType="Precipitation" />
          <WeatherOption optionType="Temperature" />
        </div>
        <label>
          Weather Options:
          <label>
          Temperature
          </label>
        <input
          type="radio"
          value="temperature"
          checked={weatherOption === "temperature"}
          onChange={() => handleWeatherMapChange("temperature")}
        ></input>
        <label>
          Precipitation
          </label>
        <input
          type="radio"
          value="precipitation"
          checked={weatherOption === "precipitation"}
          onChange={() => handleWeatherMapChange("precipitation")}
        ></input>
        <label>
          Cloud Cover
          </label>
        <input
          type="radio"
          value="cloudCover"
          checked={weatherOption === "cloudCover"}
          onChange={() => handleWeatherMapChange("cloudCover")}
        ></input>
      </label>
      <input type="submit" value="Submit" />
    </form>
    );
  }
