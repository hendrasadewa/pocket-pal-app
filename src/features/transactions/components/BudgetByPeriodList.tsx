import { useQuery } from '@tanstack/react-query';
import { Link } from 'react-router-dom';
import { HTMLAttributes } from 'react';

import { getBudget } from '@/services/budget';
import BudgetCard from './BudgetCard';

interface Props extends HTMLAttributes<HTMLDivElement> {
  periodId?: string;
}

export default function BudgetByPeriodList({ periodId, ...rest }: Props) {
  const { isLoading, data } = useQuery({
    queryKey: ['budget', periodId],
    queryFn: () => getBudget(periodId),
  });

  if (isLoading) {
    <div>Loading budgets...</div>;
  }

  const options = data?.result || [];

  if (!options || options.length <= 0) {
    <div>there is no budget allocation in this period</div>;
  }

  return (
    <div className="py-4">
      <h2 className="text-xl font-bold pb-4">Budget</h2>
      <div className="grid gap-3" {...rest}>
        {options.map(({ id, amount, category, period, name }) => (
          <Link
            to={`/transactions/period/${period?.id}/budget/${id}`}
            key={`category-card-${id}`}
          >
            <BudgetCard
              amount={amount}
              categoryName={category?.name || ''}
              emoji={category?.emoji || ''}
              name={name}
              periodName={period?.name || ''}
            />
          </Link>
        ))}
      </div>
    </div>
  );
}
