import { Action } from '../../types/Action';
import { weatherStoreInitialState } from './initial-state';
import { WEATHER_ACTIONS } from './keys';

import { WeatherState } from './reducer-types';

export function weatherReducer(state = weatherStoreInitialState, action: Action<string, any>): WeatherState {
  switch (action.type) {
    case WEATHER_ACTIONS.GET_WEATHER_SUCCESS:
      return {
        ...state,
        weather: action.payload.data,
      };

    default:
      return state;
  }
}
