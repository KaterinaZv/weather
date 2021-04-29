import API_ENDPOINTS from "../../../config/api";
import { City } from "../../model/city";
import { WEATHER_ACTIONS } from "./keys";

export const getWeather = (city: City) => ({
  type: WEATHER_ACTIONS.GET_WEATHER,
  payload: {
    request: {
      url: API_ENDPOINTS.GET_CURRENT_WEATHER_BY_CITY_ID,
      params: {
        lat: city.coord.lat,
        lon: city.coord.lon,
        lang: 'ru_RU'
      },
    },
  },
});
