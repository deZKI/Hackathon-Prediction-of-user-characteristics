import stats from '../../assets/data/stats.json';
import convertNumberToMonths from '../conversion/convertNumberToMonths';
import retrieveAndCountAmountFromRange from './retrieveAndCountAmountFromRange';
import defineDaysInEachMonth from '../definition/defineDaysInEachMonth';
import {ERangeType} from "../../types/customTypes/ERangeType";

export default function retrieveDataFromRange(type: ERangeType = ERangeType.months, rangeFrom: string, rangeTo: string) {
  const list = stats.deposits.list.slice(2);
  const yearFrom = parseInt(rangeFrom.split(".")[2], 10);
  const yearTo = parseInt(rangeTo.split(".")[2], 10);
  const monthFrom = parseInt(rangeFrom.split(".")[1], 10);
  const monthTo = parseInt(rangeTo.split(".")[1], 10);
  const dayFrom = parseInt(rangeFrom.split(".")[0], 10);
  const dayTo = parseInt(rangeTo.split(".")[0], 10);

  const limitedRange = [];
  const daysRange: any = [];
  
  const processDays = (year: any, month: any, dayStart: any, dayEnd: any, convertedMonth: any) => {
    for (let day = dayStart; day <= dayEnd; day++) {
      const dayStr = day.toString().padStart(2, '0');

      if (type === ERangeType.weeks || type === ERangeType.days) {
        const amount = retrieveAndCountAmountFromRange(type, list, year, month, dayStr, null);
        daysRange.push({ date: `${dayStr} ${convertedMonth}`, amount });
      }

      if (type === ERangeType.hours) {
        for (let hour = 0; hour < 24; hour++) {
          const hourStr = hour.toString().padStart(2, '0') + ':00';
          const amount = retrieveAndCountAmountFromRange(type, list, year, month, dayStr, hourStr);

          limitedRange.push({ date: hourStr, amount });
        }
      }
    }
  };

  for (let year = yearFrom; year <= yearTo; year++) {
    const startMonth = year === yearFrom ? monthFrom : 1;
    const endMonth = year === yearTo ? monthTo : 12;

    for (let month = startMonth; month <= endMonth; month++) {
      const monthStr = month.toString().padStart(2, '0');
      const convertedMonth = convertNumberToMonths(monthStr);

      if (type === ERangeType.months) {
        const amount = retrieveAndCountAmountFromRange(type, list, year, monthStr, null, null);
        limitedRange.push({ date: `${convertedMonth} ${year}`, amount });
      } else {
        const daysInMonth = defineDaysInEachMonth(year, String(month));
        const startDay = (year === yearFrom && month === monthFrom) ? dayFrom : 1;
        const endDay = (year === yearTo && month === monthTo) ? dayTo : daysInMonth;

        processDays(year, monthStr, startDay, endDay, convertedMonth);
      }
    }
  }

  if (type === ERangeType.weeks && daysRange.length > 0) {
    for (let weekStart = 0; weekStart < daysRange.length; weekStart += 7) {
      const weekRange = daysRange.slice(weekStart, weekStart + 7);
      const beginningOfWeek = weekRange[0].date;
      const endOfWeek = weekRange[weekRange.length - 1].date;
      const amount = weekRange.reduce((sum: any, day: any) => sum + day.amount, 0);

      limitedRange.push({ date: `${beginningOfWeek} - ${endOfWeek}`, amount });
    }
  }

  return limitedRange;
}