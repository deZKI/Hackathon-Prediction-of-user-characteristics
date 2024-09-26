import {initialState} from "../reducer";
import {SET_DROPDOWN_IS_OPEN, SetDropdownIsOpenAction} from "./dropdownIsOpenActions";

export type TDropdownIsOpenState = {
  dropdownIsOpen: false;
}

type DropdownIsOpenActions = SetDropdownIsOpenAction;

export const dropdownIsOpenReducer = (state = initialState.dropdownIsOpen, action: DropdownIsOpenActions): TDropdownIsOpenState => {
  switch (action.type) {
    case SET_DROPDOWN_IS_OPEN:
      return {
        ...state,
        dropdownIsOpen: action.dropdownIsOpen,
      }
    default:
      return state;
  }
}