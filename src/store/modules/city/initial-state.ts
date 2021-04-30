import { CITIES } from '../../../constants/cities';

import { CityState } from './reducer-types';

export const cityReducerInitialState: CityState = {
  cities: CITIES,
  choosedCity: null,
};
