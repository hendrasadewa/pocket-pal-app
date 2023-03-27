import { getCategory } from '@/services/category';
import { useQuery } from '@tanstack/react-query';
import { HTMLAttributes } from 'react';

interface Props extends HTMLAttributes<HTMLSelectElement> {}

export default function CategorySelect({ ...rest }: Props) {
  const { isLoading, data } = useQuery({
    queryKey: ['category'],
    queryFn: getCategory,
  });

  const options = data?.result || [];

  return (
    <select
      name="categoryId"
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
