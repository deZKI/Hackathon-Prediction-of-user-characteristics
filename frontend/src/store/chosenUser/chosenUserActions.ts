import {ActionCreator} from "redux";

export const SET_CHOSEN_USER = 'SET_CHOSEN_USER';

export type SetChosenUserAction = {
  type: typeof SET_CHOSEN_USER;
  chosenUser: string;
}

export const setChosenUser: ActionCreator<SetChosenUserAction> = (chosenUser) => ({
  type: SET_CHOSEN_USER,
  chosenUser: chosenUser
})