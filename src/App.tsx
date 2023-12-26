import React from 'react';
import WeatherWidget from './components/WeatherWidget';
import './styles/App.scss';

const App: React.FC = () => {
  return (
    <div className="App">
      <WeatherWidget />
    </div>
  );
}

export default App;
