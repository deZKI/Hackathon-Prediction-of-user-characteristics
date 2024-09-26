import {ActionCreator} from "redux";

export const SET_DROPDOWN_IS_OPEN = 'SET_DROPDOWN_IS_OPEN';

export type SetDropdownIsOpenAction = {
  type: typeof SET_DROPDOWN_IS_OPEN;
  dropdownIsOpen: false;
}

export const setDropdownIsOpen: ActionCreator<SetDropdownIsOpenAction> = (dropdownIsOpen) => ({
  type: SET_DROPDOWN_IS_OPEN,
  dropdownIsOpen: dropdownIsOpen
})