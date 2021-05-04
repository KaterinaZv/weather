import { CityState } from '../modules/city/reducer-types';
import { WeatherState } from '../modules/weather/reducer-types';

export type Store = {
  city: CityState;
  weather: WeatherState;
};
