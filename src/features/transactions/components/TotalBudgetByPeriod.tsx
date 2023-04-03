import { getBudget } from '@/services/budget';
import { useQuery } from '@tanstack/react-query';
import numeral from 'numeral';

interface Props {
  periodId?: string;
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
    <div className="stats shadow w-full">
      <div className="stat">
        <div className="stat-title text-center">Total Budget</div>
        <div className="stat-value text-center">
          Rp. {numeral(totalBudget).format('0,0')}
        </div>
        <div className="stat-desc text-center">21% more than last month</div>
      </div>
    </div>
  );
}
