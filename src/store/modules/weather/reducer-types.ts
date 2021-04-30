import { Nullable } from './../../../types/generic/Nullable';
import { Fact, Forecast } from "../../model/weather";

export type WeatherState = {
  weather: Nullable<{
    fact: Fact;
    forecast: Forecast;
  }>
}