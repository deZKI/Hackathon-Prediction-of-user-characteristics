interface MonthBalance {
  time: string;
  month: string;
  balance: number;
}

export default function sortMonthsBalancesByMonth(
  months: string[],
  monthsBalances: MonthBalance[]
): MonthBalance[] {
  return monthsBalances.sort((a, b) => {
    return new Date(a.time).getTime() - new Date(b.time).getTime();
  });
}