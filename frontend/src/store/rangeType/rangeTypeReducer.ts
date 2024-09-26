import {initialState} from "../reducer";
import {SET_RANGE_TYPE, SetRangeTypeAction} from "./rangeTypeActions";
import {ERangeType} from "../../types/customTypes/ERangeType";

export type TRangeTypeState = {
  rangeType: ERangeType;
}

type RangeTypeActions = SetRangeTypeAction;

export const rangeTypeReducer = (state = initialState.rangeType, action: RangeTypeActions): TRangeTypeState => {
  switch (action.type) {
    case SET_RANGE_TYPE:
      return {
        ...state,
        rangeType: action.rangeType
      }
    default:
      return state;
  }
}