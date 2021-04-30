import { Action } from '../../types/Action'
import { CITY_ACTIONS } from './keys';

import { City } from './../../model/city';

//https://www.metaweather.com/api/location/search/?query=san

export const chooseCity = (city: City): Action<string, { city: City }> => ({
  type: CITY_ACTIONS.CHOOSE_CITY,
  payload: {
    city
  }
});