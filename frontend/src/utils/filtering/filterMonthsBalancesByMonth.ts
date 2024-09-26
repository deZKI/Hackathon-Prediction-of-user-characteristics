interface MonthBalance {
  time: string;
  month: string;
  balance: number;
}

export default function filterMonthsBalancesByMonth(
  months: string[],
  sortedMonthsBalances: MonthBalance[]
): MonthBalance[][] {
  return months.map(month => {
    const balances = sortedMonthsBalances.filter(balance => balance.month === month);
    return balances.length > 0 ? balances : [{ time: '0', month, balance: 0 }];
  });
}
