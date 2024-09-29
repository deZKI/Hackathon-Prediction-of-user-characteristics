import {initialState} from "../reducer";
import {SET_CHOSEN_USER, SetChosenUserAction} from "./chosenUserActions";

export type TChosenUserState = {
  chosenUser: string;
}

type ChosenUserActions = SetChosenUserAction;

export const chosenUserReducer = (state = initialState.chosenUser, action: ChosenUserActions): TChosenUserState => {
  switch (action.type) {
    case SET_CHOSEN_USER:
      return {
        ...state,
        chosenUser: action.chosenUser,
      }
    default:
      return state;
  }
}