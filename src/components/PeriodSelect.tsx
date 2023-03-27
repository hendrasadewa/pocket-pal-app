import { getPeriod } from '@/services/period';
import { useQuery } from '@tanstack/react-query';
import { HTMLAttributes } from 'react';

interface Props extends HTMLAttributes<HTMLSelectElement> {}

export default function PeriodSelect({ ...rest }: Props) {
  const { isLoading, data } = useQuery({
    queryKey: ['period'],
    queryFn: getPeriod,
  });

  const options = data?.result || [];

  return (
    <select
      name="periodId"
      className="select w-full"
      disabled={isLoading}
      {...rest}
    >
      {options.map((option) => (
        <option key={`category-option-${option.id}`} value={option.id}>
          {option.name}
        </option>
      ))}
    </select>
  );
}
