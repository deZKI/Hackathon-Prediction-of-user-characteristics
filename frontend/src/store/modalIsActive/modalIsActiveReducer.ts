import {initialState} from "../reducer";
import {SET_MODAL_IS_ACTIVE, SetModalIsActiveAction} from "./modalIsActiveActions";

export type TModalIsActiveState = {
  modalIsActive: boolean;
}

type ModalIsActiveActions = SetModalIsActiveAction;

export const modalIsActiveReducer = (state = initialState.modalIsActive, action: ModalIsActiveActions): TModalIsActiveState => {
  switch (action.type) {
    case SET_MODAL_IS_ACTIVE:
      return {
        ...state,
        modalIsActive: action.modalIsActive,
      }
    default:
      return state;
  }
}