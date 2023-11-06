import React, { useState } from 'react';
import SearchBar from './components/SearchBar';
import Overlay from './components/OverLay';

const App = () => {
  const [searchResults, setSearchResults] = useState(null);
  const [showOverlay, setShowOverlay] = useState(false);

  const handleSearch = async (city) => {
    const apiKey = '840de593b7028de6e424162454790fe5';
    const url = `https://api.openweathermap.org/data/2.5/weather?q=[CITY_NAME]&units=metric&appid=[apiKey]`;

    try {
      const response = await fetch(url);
      const data = await response.json();
      setSearchResults(data);
      setShowOverlay(true);
    } catch (error) {
      console.error('Error fetching weather data:', error);
    }
  };

  const handleCloseOverlay = () => {
    setShowOverlay(false);
  };

  return (
    <div className="app">
      <SearchBar onSearch={handleSearch} />
      {showOverlay && (
        <Overlay data={searchResults} onClose={handleCloseOverlay} />
      )}
    </div>
  );
};

export default App;
