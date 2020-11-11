import React, { useState } from 'react';
import { WeatherOption } from './components/weather-options/weather-options'

function App() {
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
    <div className="App">
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
          <input
            type="radio"
            value="value1"
            checked={weatherOption === "value1"}
            onChange={() => handleWeatherMapChange("value1")}
          ></input>
          <input
            type="radio"
            value="value2"
            checked={weatherOption === "value2"}
            onChange={() => handleWeatherMapChange("value2")}
          ></input>
          <input
            type="radio"
            value="value2"
            checked={weatherOption === "value3"}
            onChange={() => handleWeatherMapChange("value3")}
          ></input>
        </label>
        <input type="submit" value="Submit" />
      </form>
    </div>
  );
}

export default App;
