import { Nullable } from '../../../types/generic/Nullable';

import { City } from '../../model/city';

export type CityState = {
  cities: City[];
  choosedCity: Nullable<City>;
}