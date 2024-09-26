interface AccountBalance {
  date: string;
  amount: number;
}

interface MonthBalance {
  time: string;
  month: string;
  balance: number;
}

export default function filterAccountsBalancesByMonth(
  months: string[],
  monthsNumbers: string[],
  accountsBalances: AccountBalance[]
): MonthBalance[] {
  return accountsBalances.reduce<MonthBalance[]>((acc, accountBalance) => {
    const date = new Date(accountBalance.date).toLocaleDateString();
    const month = date.split('.')[1];

    months.forEach((_, i) => {
      if (month === monthsNumbers[i]) {
        acc.push({
          time: accountBalance.date,
          month: months[i],
          balance: accountBalance.amount,
        });
      }
    });

    return acc;
  }, []);
}