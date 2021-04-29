export const API_KEY = process.env.REACT_APP_WEATHER_API_KEY;

const API_ENDPOINTS = {
  BASE_API_URL: 'https://www.metaweather.com/api/',
  SEARCH_LOCATION: 'location/search',
  GET_CURRENT_WEATHER_BY_CITY_ID: `informers`,
} as const;

export default API_ENDPOINTS;