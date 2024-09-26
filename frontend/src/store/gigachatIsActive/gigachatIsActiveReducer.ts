import {initialState} from "../reducer";
import {SET_GIGACHAT_IS_ACTIVE, SetGigachatIsActiveAction} from "./gigachatIsActiveActions";

export type TGigachatIsActiveState = {
  gigachatIsActive: boolean;
}

type GigachatIsActiveActions = SetGigachatIsActiveAction;

export const gigachatIsActiveReducer = (state = initialState.gigachatIsActive, action: GigachatIsActiveActions): TGigachatIsActiveState => {
  switch (action.type) {
    case SET_GIGACHAT_IS_ACTIVE:
      return {
        ...state,
        gigachatIsActive: action.gigachatIsActive,
      }
    default:
      return state;
  }
}