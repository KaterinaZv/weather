import { Reducer, combineReducers } from 'redux';

import { Store } from './types/Store';

import { cityReducer } from './modules/city/reducer';
import { weatherReducer } from './modules/weather/reducer';

export default function createReducers(): Reducer<Store, any> {
  const reducers = {
    city: cityReducer,
    weather: weatherReducer,
  } as const;

  return combineReducers<Store>({ ...reducers });
}
