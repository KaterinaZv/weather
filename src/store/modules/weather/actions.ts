import { AxiosAction } from './../../types/Action';
import API_ENDPOINTS from "../../../config/api";
import { City } from "../../model/city";
import { WEATHER_ACTIONS } from "./keys";

export const getWeather = (city: City): AxiosAction<typeof WEATHER_ACTIONS.GET_WEATHER, {}> => ({
  type: WEATHER_ACTIONS.GET_WEATHER,
  payload: {
    request: {
      url: API_ENDPOINTS.GET_FORECAST,

      params: {
        lat: city.coord.lat,
        lon: city.coord.lon,
      },
    },
  },
});
