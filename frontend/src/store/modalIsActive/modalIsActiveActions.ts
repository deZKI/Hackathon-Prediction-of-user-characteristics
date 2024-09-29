import {ActionCreator} from "redux";

export const SET_MODAL_IS_ACTIVE = 'SET_MODAL_IS_ACTIVE';

export type SetModalIsActiveAction = {
  type: typeof SET_MODAL_IS_ACTIVE;
  modalIsActive: boolean;
}

export const setModalIsActive: ActionCreator<SetModalIsActiveAction> = (modalIsActive) => ({
  type: SET_MODAL_IS_ACTIVE,
  modalIsActive: modalIsActive
})