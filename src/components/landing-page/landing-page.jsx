import React from 'react';
import { WeatherOption } from './components/weather-options/weather-options'

export function LandingPage() {
    return (
      <div className="LandingPage">
        <div className="WeatherOptions">
          <WeatherOption optionType="Weather" />
          <WeatherOption optionType="48HourForecast" />
          <WeatherOption optionType="Precipitation" />
          <WeatherOption optionType="Temperature" />
        </div>
      </div>
    );
  }
