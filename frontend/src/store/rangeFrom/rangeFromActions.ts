import {ActionCreator} from "redux";

export const SET_RANGE_FROM = 'SET_RANGE_FROM';

export type SetRangeFromAction = {
  type: typeof SET_RANGE_FROM;
  rangeFrom: string;
}

export const setRangeFrom: ActionCreator<SetRangeFromAction> = (rangeFrom) => ({
  type: SET_RANGE_FROM,
  rangeFrom: rangeFrom
})