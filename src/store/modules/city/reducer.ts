import { cityReducerInitialState } from "./initial-state";

import { Action } from "../../types/Action";

import { CityState } from "./reducer-types";
import { CITY_ACTIONS } from "./keys";

export function cityReducer(state: CityState = cityReducerInitialState, action: Action<string, any>): CityState {
  switch (action.type) {
    case CITY_ACTIONS.CHOOSE_CITY:
      return ({
        ...state,
        choosedCity: action.payload.city,
      })

    default:
      break;
  }

  return state;
}