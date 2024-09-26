import filterAccountsBalanceByMonth from "../filtering/filterAccountsBalancesByMonth";
import filterMonthsBalancesByMonth from "../filtering/filterMonthsBalancesByMonth";
import sortMonthsBalancesByMonth from "./sortMonthsBalancesByMonth";
import retrieveOneMonthBalance from "../retrieval/retrieveOneMonthBalance";
import retrieveDataFromRange from "../retrieval/retrieveNecessaryData";
import fillBalancesByMonth from "../filling/fillBalancesByMonth";
import {ERangeType} from "../../types/customTypes/ERangeType";

export default function sortAccountsBalancesByMonth(
  months: string[],
  monthsNumbers: string[],
  rangeType: ERangeType,
  rangeFrom: string,
  rangeTo: string
): number[] {
  const data = retrieveDataFromRange(rangeType, rangeFrom, rangeTo);
  const monthsBalances = filterAccountsBalanceByMonth(months, monthsNumbers, data);
  const sortedMonthsBalances = sortMonthsBalancesByMonth(months, monthsBalances);
  const groupedMonthsBalances = filterMonthsBalancesByMonth(months, sortedMonthsBalances);
  const groupedMonthsBalancesWithOneValue = retrieveOneMonthBalance(months, groupedMonthsBalances);

  return fillBalancesByMonth(months, groupedMonthsBalancesWithOneValue);
};