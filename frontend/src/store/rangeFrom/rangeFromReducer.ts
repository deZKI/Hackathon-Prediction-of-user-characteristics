import {initialState} from "../reducer";
import {SET_RANGE_FROM, SetRangeFromAction} from "./rangeFromActions";

export type TRangeFromState = {
  rangeFrom: string;
}

type RangeFromActions = SetRangeFromAction;

export const rangeFromReducer = (state = initialState.rangeFrom, action: RangeFromActions): TRangeFromState => {
  switch (action.type) {
    case SET_RANGE_FROM:
      return {
        ...state,
        rangeFrom: action.rangeFrom
      }
    default:
      return state;
  }
}