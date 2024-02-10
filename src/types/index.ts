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

  
export interface Option {
  label: string;
  value: string;
}

export interface Item {
  id: string;
  name: string;
  // Extend with other fields as necessary
}


// /src/types/index.ts

// Update to match the structure of Rick and Morty characters
export interface Character {
  id: string;
  name: string;
  image: string; // URL to the character's image
}
