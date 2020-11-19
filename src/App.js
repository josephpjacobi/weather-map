import React, { useState } from 'react';
import  LandingPage  from './components/landing-page/landing-page';
import  ResultsPage  from "./components/results-page/results-page";
import './App.css'

function App() {
  const [searchResults, setSearchResults] = useState({present: false})

  const getWeather = (weatherObject) => {
    setSearchResults(
      {
        present: true,
        results: weatherObject
      })
  }

  return (
    <div className="App">
      {searchResults.present ? <ResultsPage results={searchResults.results} /> : <LandingPage getWeather={getWeather} /> }
    </div>
  );
}
export default App;
