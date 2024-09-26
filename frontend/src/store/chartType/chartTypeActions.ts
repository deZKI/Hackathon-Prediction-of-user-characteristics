import {ActionCreator} from "redux";
import {EChartType} from "../../types/customTypes/EChartType";

export const SET_CHART_TYPE = 'SET_CHART_TYPE';

export type SetChartTypeAction = {
  type: typeof SET_CHART_TYPE;
  chartType: EChartType;
}

export const setChartType: ActionCreator<SetChartTypeAction> = (chartType) => ({
  type: SET_CHART_TYPE,
  chartType: chartType
})