export default function defineDaysInFebruary(year: number): number {
  const ENTRY_YEAR = 2020;
  const yearDifference = year - ENTRY_YEAR;
  const daysInFebruary = yearDifference % 4 === 0 ? 29 : 28;

  return daysInFebruary;
}
