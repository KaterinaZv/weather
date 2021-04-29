const API_ENDPOINTS = {
  BASE_API_URL: 'https://api.openweathermap.org/data/2.5/',
  GET_CURRENT_WEATHER_BY_CITY_ID: (cityId: string, apiKey: string) => `weather?id=${cityId}&appid=${apiKey}`,
} as const;

export default API_ENDPOINTS;