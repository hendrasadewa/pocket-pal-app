import { useQuery } from '@tanstack/react-query';

import BudgetList from '@/features/budget/components/BudgetList';
import { getBudget } from '@/services/budget';

export default function ManageBudgetPage() {
  const { data } = useQuery({
    queryKey: ['budget'],
    queryFn: getBudget,
  });

  return <BudgetList data={data?.result} />;
}
