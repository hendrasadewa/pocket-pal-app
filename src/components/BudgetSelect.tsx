import { getBudget } from '@/services/budget';
import { useQuery } from '@tanstack/react-query';
import { HTMLAttributes } from 'react';

interface Props extends HTMLAttributes<HTMLSelectElement> {}

export default function BudgetSelect({ ...rest }: Props) {
  const { isLoading, data } = useQuery({
    queryKey: ['budget'],
    queryFn: () => getBudget(),
  });

  const options = data?.result || [];

  return (
    <select
      name="budgetId"
      className="select select-bordered w-full"
      disabled={isLoading}
      {...rest}
    >
      {options.map((option) => (
        <option key={`budget-option-${option.id}`} value={option.id}>
          {option.name} - {option.period?.name}
        </option>
      ))}
    </select>
  );
}
