import { CityState } from '../modules/city/reducer-types';

export type Store = {
  city: CityState;
  weather: any;
};
