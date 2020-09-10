import React from 'react';

function App() {
  return (
    <div className="App">
      <div className="WeatherOptions">
        <WeatherOption optionType="Weather" />
        <WeatherOption optionType="" />
        <WeatherOption optionType="Weather" />
        <WeatherOption optionType="Weather" />
      </div>
    </div>
  );
}

const WeatherOption = (optionType) => {
  return (
    <div>
      <label htmlFor="">{optionType}</label>
      <input type="checkbox" name={optionType} id={optionType} />
    </div>
  );
}


export default App;
