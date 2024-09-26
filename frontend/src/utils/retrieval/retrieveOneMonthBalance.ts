interface MonthBalance {
  time: string;
  month: string;
  balance: number;
}

export default function retrieveOneMonthBalance(
  months: string[],
  groupedMonthsBalances: MonthBalance[][]
): MonthBalance[][] {
  return groupedMonthsBalances.map(monthBalanceArray => {
    const monthBalances = monthBalanceArray.filter(balance => balance.month === monthBalanceArray[0].month);
    return monthBalances.slice(0, 1);
  });
}
