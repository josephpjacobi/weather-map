import React, { useState } from 'react';

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

  const handleWeatherMapOptionChange = (value) => {
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
        <label>
          Weather Options:
          <label>
            Temperature
            </label>
          <input
            type="radio"
            value="temperature"
            checked={weatherOption === 'temperature'}
            onChange={() => handleWeatherMapOptionChange('temperature')}
          >
          </input>
          <label>
            Precipitation
            </label>
          <input
            type="radio"
            value="precipitation"
            checked={weatherOption === 'precipitation'}
            onChange={() => handleWeatherMapOptionChange('precipitation')}
          >
          </input>
          <label>
            Temperature
            </label>
          <input
            type="radio"
            value="cloudCover"
            checked={weatherOption === 'cloudCover'}
            onChange={() => handleWeatherMapOptionChange('cloudCover')}
          >
          </input>
        </label>
        <input type="submit" value="Submit" />
      </form>
      {/* <div className="WeatherOptions">
        <WeatherOption optionType="Weather" />
        <WeatherOption optionType="48HourForecast" />
        <WeatherOption optionType="Precipitation" />
        <WeatherOption optionType="Temperature" />
      </div> */}
    </div>
  );
}

export default App;
