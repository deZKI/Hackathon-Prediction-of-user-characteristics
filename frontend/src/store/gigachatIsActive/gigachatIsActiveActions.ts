import {ActionCreator} from "redux";

export const SET_GIGACHAT_IS_ACTIVE = 'SET_GIGACHAT_IS_ACTIVE';

export type SetGigachatIsActiveAction = {
  type: typeof SET_GIGACHAT_IS_ACTIVE;
  gigachatIsActive: boolean;
}

export const setGigachatIsActive: ActionCreator<SetGigachatIsActiveAction> = (gigachatIsActive) => ({
  type: SET_GIGACHAT_IS_ACTIVE,
  gigachatIsActive: gigachatIsActive
})