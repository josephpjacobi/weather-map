import React from 'react';

function ResultsPage(props) {
  const { results } = props
  
  const Results = () => {
    return (
      <div>
        <h1>RESULTS PAGE!</h1>
        <ul>
          <li>Forecast: {results.main}</li>
          <li>Temp: {results.temp}</li>
          <li>Description: {results.description}</li>
        </ul>
      </div>
    );
  }

  return (
    <Results />
  )
}

export default ResultsPage;