import {ActionCreator} from "redux";
import {ERangeType} from "../../types/customTypes/ERangeType";

export const SET_RANGE_TYPE = 'SET_RANGE_TYPE';

export type SetRangeTypeAction = {
  type: typeof SET_RANGE_TYPE;
  rangeType: ERangeType;
}

export const setRangeType: ActionCreator<SetRangeTypeAction> = (rangeType) => ({
  type: SET_RANGE_TYPE,
  rangeType: rangeType
})