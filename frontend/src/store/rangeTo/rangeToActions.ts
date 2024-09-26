import {ActionCreator} from "redux";

export const SET_RANGE_TO = 'SET_RANGE_TO';

export type SetRangeToAction = {
  type: typeof SET_RANGE_TO;
  rangeTo: string;
}

export const setRangeTo: ActionCreator<SetRangeToAction> = (rangeTo) => ({
  type: SET_RANGE_TO,
  rangeTo: rangeTo
})