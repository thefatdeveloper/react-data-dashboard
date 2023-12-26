export interface WeatherData {
  temperature: number;
  condition: string;
  humidity: number;
  windSpeed: number;
  description: string;
  cityName:string;
}
  
export interface WeatherState {
  data: WeatherData | null;
  isLoading: boolean;
  searchQuery: string;
}

  