import { Nullable } from '../../../types/generic/Nullable';
import { Action } from '../../types/Action'
import { CITY_ACTIONS } from './keys';

import { City } from './../../model/city';

import API_ENDPOINTS from '../../../config/api';

export const getCityList = (name: string) => ({
  type: CITY_ACTIONS.GET_CITY_BY_NAME,
  payload: {
    request: {
      url: API_ENDPOINTS.SEARCH_LOCATION,
      params: {
        query: name,
      },
    },
  },
});

//https://www.metaweather.com/api/location/search/?query=san

export const chooseCity = (city: City): Action<string, { city: City }> => ({
  type: CITY_ACTIONS.CHOOSE_CITY,
  payload: {
    city
  }
});