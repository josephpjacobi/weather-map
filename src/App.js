import React from 'react';

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

const WeatherOption = (props) => {
  return (
    <div>
      <label htmlFor="">{props.optionType}</label>
      <input type="checkbox" name={props.optionType} id={props.optionType} />
    </div>
  );
}


export default App;
