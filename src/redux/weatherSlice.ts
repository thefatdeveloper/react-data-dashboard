import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { WeatherData, WeatherState } from '../types';

export const fetchWeatherData = createAsyncThunk(
  'weather/fetchData',
  async (location: string): Promise<WeatherData> => {
    const response = await axios.get<any>(`https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=&units=metric`);
    return {
      temperature: response.data.main.temp,
      condition: response.data.weather[0].main,
      humidity: response.data.main.humidity,
      windSpeed: response.data.wind.speed,
      description: response.data.weather[0].description,
      cityName: response.data.name
    };
  }
);

const initialState: WeatherState = {
  data: null,
  isLoading: true,
  searchQuery: ''
};

const weatherSlice = createSlice({
  name: 'weather',
  initialState,
  reducers: {
    setSearchQuery(state, action) {
      state.searchQuery = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchWeatherData.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(fetchWeatherData.fulfilled, (state, action) => {
      state.data = action.payload;
      state.isLoading = false;
    });
    builder.addCase(fetchWeatherData.rejected, (state) => {
      state.isLoading = false;
    });
  },
});

export const { setSearchQuery } = weatherSlice.actions;
export default weatherSlice.reducer;
