import {initialState} from "../reducer";
import {SET_CHART_TYPE, SetChartTypeAction} from "./chartTypeActions";
import {EChartType} from "../../types/customTypes/EChartType";

export type TChartTypeState = {
  chartType: EChartType;
}

type ChartTypeActions = SetChartTypeAction;

export const chartTypeReducer = (state = initialState.chartType, action: ChartTypeActions): TChartTypeState => {
  switch (action.type) {
    case SET_CHART_TYPE:
      return {
        ...state,
        chartType: action.chartType,
      }
    default:
      return state;
  }
}