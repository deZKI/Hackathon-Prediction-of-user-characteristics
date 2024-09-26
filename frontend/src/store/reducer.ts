import {SET_GIGACHAT_IS_ACTIVE, SetGigachatIsActiveAction} from "./gigachatIsActive/gigachatIsActiveActions";
import {gigachatIsActiveReducer, TGigachatIsActiveState} from "./gigachatIsActive/gigachatIsActiveReducer";
import {SET_DROPDOWN_IS_OPEN, SetDropdownIsOpenAction} from "./dropdownIsOpen/dropdownIsOpenActions";
import {TDropdownIsOpenState, dropdownIsOpenReducer} from "./dropdownIsOpen/dropdownIsOpenReducer";
import {SET_CHART_TYPE, SetChartTypeAction} from "./chartType/chartTypeActions";
import {chartTypeReducer, TChartTypeState} from "./chartType/chartTypeReducer";
import {SET_RANGE_TYPE, SetRangeTypeAction} from "./rangeType/rangeTypeActions";
import {rangeTypeReducer, TRangeTypeState} from "./rangeType/rangeTypeReducer";
import {SET_RANGE_FROM, SetRangeFromAction} from "./rangeFrom/rangeFromActions";
import {rangeFromReducer, TRangeFromState} from "./rangeFrom/rangeFromReducer";
import {SET_RANGE_TO, SetRangeToAction} from "./rangeTo/rangeToActions";
import {rangeToReducer, TRangeToState} from "./rangeTo/rangeToReducer";
import {EChartType} from "../types/customTypes/EChartType";
import {ERangeType} from "../types/customTypes/ERangeType";

export type TInitialState = {
  gigachatIsActive: TGigachatIsActiveState;
  dropdownIsOpen: TDropdownIsOpenState;
  chartType: TChartTypeState;
  rangeType: TRangeTypeState;
  rangeFrom: TRangeFromState;
  rangeTo: TRangeToState;
}

export const initialState: TInitialState = {
  gigachatIsActive: {
    gigachatIsActive: false,
  },
  dropdownIsOpen: {
    dropdownIsOpen: false,
  },
  chartType: {
    chartType: EChartType.bar,
  },
  rangeType: {
    rangeType: ERangeType.months
  },
  rangeFrom: {
    rangeFrom: "01.04.2023",
  },
  rangeTo: {
    rangeTo: "31.01.2024"
  },
}

type Actions = SetGigachatIsActiveAction
  | SetDropdownIsOpenAction
  | SetChartTypeAction
  | SetRangeTypeAction
  | SetRangeFromAction
  | SetRangeToAction;

export const rootReducer = (state = initialState, action: Actions): TInitialState => {
  switch (action.type) {
    case SET_GIGACHAT_IS_ACTIVE:
      return {
        ...state,
        gigachatIsActive: gigachatIsActiveReducer(state.gigachatIsActive, action)
      }
    case SET_DROPDOWN_IS_OPEN:
      return {
        ...state,
        dropdownIsOpen: dropdownIsOpenReducer(state.dropdownIsOpen, action)
      }
    case SET_CHART_TYPE:
      return {
        ...state,
        chartType: chartTypeReducer(state.chartType, action)
      }
    case SET_RANGE_TYPE:
      return {
        ...state,
        rangeType: rangeTypeReducer(state.rangeType, action)
      }
    case SET_RANGE_FROM:
      return {
        ...state,
        rangeFrom: rangeFromReducer(state.rangeFrom, action)
      }
    case SET_RANGE_TO:
      return {
        ...state,
        rangeTo: rangeToReducer(state.rangeTo, action)
      }
    default:
      return state;
  }
}