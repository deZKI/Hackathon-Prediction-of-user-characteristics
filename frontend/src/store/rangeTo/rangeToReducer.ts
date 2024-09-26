import {initialState} from "../reducer";
import {SET_RANGE_TO, SetRangeToAction} from "./rangeToActions";

export type TRangeToState = {
  rangeTo: string;
}

type RangeToActions = SetRangeToAction;

export const rangeToReducer = (state = initialState.rangeTo, action: RangeToActions): TRangeToState => {
  switch (action.type) {
    case SET_RANGE_TO:
      return {
        ...state,
        rangeTo: action.rangeTo
      }
    default:
      return state;
  }
}