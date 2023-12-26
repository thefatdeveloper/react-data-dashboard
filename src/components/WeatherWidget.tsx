import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { RootState, AppDispatch } from '../redux/store';
import { fetchWeatherData } from '../redux/weatherSlice';
import '../styles/WeatherWidget.scss';

const WeatherWidget: React.FC = () => {
  const dispatch = useDispatch<AppDispatch>();
  const { data: weatherData, isLoading } = useSelector((state: RootState) => state.weather);
  const [localSearchQuery, setLocalSearchQuery] = useState('');

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setLocalSearchQuery(e.target.value);
  };

  const handleSearchSubmit = () => {
    dispatch(fetchWeatherData(localSearchQuery));
  };

  // Optionally, fetch weather data for a default location on component mount
  useEffect(() => {
    dispatch(fetchWeatherData('Bengaluru'));
  }, [dispatch]);

  if (isLoading) {
    return <div className="weather-widget loading">Loading...</div>;
  }

  return (
    <div className="weather-widget">
      <input
        type="text"
        value={localSearchQuery}
        onChange={handleSearchChange}
        placeholder="Enter a city"
      />
      <button onClick={handleSearchSubmit}>Search</button>
      <h2>Weather in Your City </h2>
      {weatherData && (
        <div>
          <p>City: {weatherData.cityName}</p>
          <p className="temp">{weatherData.temperature}°C</p>
          <p>{weatherData.condition}</p>
          <p>Humidity: {weatherData.humidity}%</p>
          <p>Wind Speed: {weatherData.windSpeed} m/s</p>
          <p className="description">{weatherData.description}</p>
        </div>
      )}
    </div>
  );
};

export default WeatherWidget;
