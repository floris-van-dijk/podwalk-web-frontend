export interface WeatherForecast {
  date: string;
  day: {
    maxtemp_c: number;
    mintemp_c: number;
    avgtemp_c: number;
    condition: {
      text: string;
      icon: string;
    };
    daily_chance_of_rain: number;
  };
}

export interface WeatherState {
  forecast: WeatherForecast[];
  loading: boolean;
  error: string | null;
}
