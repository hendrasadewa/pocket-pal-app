import { getBudget } from '@/services/budget';
import { useQuery } from '@tanstack/react-query';

interface Props {
  periodId: string;
}

export default function TotalBudgetByPeriod({ periodId }: Props) {
  const { data } = useQuery({
    queryKey: ['budget', periodId],
    queryFn: () => getBudget(periodId),
  });

  const budgets = data?.result || [];

  const totalBudget = budgets.reduce(
    (prev, current) => prev + current.amount,
    0
  );

  return (
    <div className="stats shadow">
      <div className="stat">
        <div className="stat-title">Total Budgets</div>
        <div className="stat-value">{totalBudget}</div>
        <div className="stat-desc">21% more than last month</div>
      </div>
    </div>
  );
}
