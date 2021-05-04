import { Nullable } from './../../../types/generic/Nullable';
import { Weather } from '../../model/weather';

export type WeatherState = {
  weather: Nullable<Weather>;
};
