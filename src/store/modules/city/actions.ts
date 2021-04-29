import { Nullable } from '../../../types/generic/Nullable';
import { Action } from '../../types/Action'
import { CITY_ACTIONS } from './keys';

import { City } from './../../model/city';

import { CITIES } from '../../../constants/cities';

export const getCity = (name: string): Action<string, { query: string; city: Nullable<City> }> => {
  const city = CITIES.find(city => city.name.toLocaleLowerCase() === name.toLocaleLowerCase()) || null;

  return ({
    type: CITY_ACTIONS.GET_CITY_BY_NAME,
    payload: {
      query: name,
      city,
    },
  })
};

export const chooseCity = (city: City): Action<string, { city: City }> => ({
  type: CITY_ACTIONS.CHOOSE_CITY,
  payload: {
    city
  }
})