import defineDaysInFebruary from "./defineDaysInFebruary";

export default function defineDaysInEachMonth(year: number, month: string) {
  switch (month) {
    case '01':
      return 31;
    case '02':
      return defineDaysInFebruary(year);
    case '03':
      return 31;
    case '04':
      return 30
    case '05':
      return 31
    case '06':
      return 30
    case '07':
      return 31
    case '08':
      return 31
    case '09':
      return 30
    case '10':
      return 31
    case '11':
      return 30
    case '12':
      return 31
  }
}
