import React, { useState } from 'react';
import  LandingPage  from './components/landing-page/landing-page';
import  ResultsPage  from "./components/results-page/results-page";

function App() {
  const [searchResults, setSearchResults] = useState({present: false})

  return (
    <div className="App">
      {searchResults.present ? <ResultsPage /> : <LandingPage /> }
    </div>
  );
}
export default App;
