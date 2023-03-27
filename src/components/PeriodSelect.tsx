import { HTMLAttributes } from 'react';

interface Props extends HTMLAttributes<HTMLSelectElement> {
  options: { id: number; name: string }[];
  isLoading?: boolean;
}

export default function PeriodSelect({
  options,
  isLoading = false,
  ...rest
}: Props) {
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
