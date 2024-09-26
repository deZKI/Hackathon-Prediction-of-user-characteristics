interface MonthBalance {
  time: string;
  month: string;
  balance: number;
}

export default function fillBalancesByMonth(
  months: string[],
  groupedMonthBalances: MonthBalance[][]
): number[] {
  return months.map(month => {
    const balance = groupedMonthBalances.flat().find(b => b.month === month);
    return balance ? balance.balance : 0;
  });
}
