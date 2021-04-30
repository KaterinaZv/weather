export type Forecast = {
  date: string;
  date_ts: number;
  moon_code: number;
  moon_text: string;
  sunrise: string;
  sunset: string;
  week: number;
};

export type Fact = {
  condition: string;
  daytime: string;
  feels_like: number;
  humidity: number;
  icon: string;
  obs_time: number;
  polar: false;
  pressure_mm: number;
  pressure_pa: number;
  season: string;
  temp: number;
  wind_dir: string;
  wind_gust: number;
  wind_speed: number;
};
