import React from 'react';
import { WeatherOption } from './components/weather-options/weather-options'

function App() {
  return (
    <div className="App">
      <div className="WeatherOptions">
        <WeatherOption optionType="Weather" />
        <WeatherOption optionType="48HourForecast" />
        <WeatherOption optionType="Precipitation" />
        <WeatherOption optionType="Temperature" />
      </div>
    </div>
  );
}

export default App;
