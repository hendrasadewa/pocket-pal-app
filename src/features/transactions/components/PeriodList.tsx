import { useQuery } from '@tanstack/react-query';
import { Link } from 'react-router-dom';

import PeriodCard from './PeriodCard';

import { getPeriod } from '@/services/period';

export default function PeriodList() {
  const { isLoading, data } = useQuery({
    queryKey: ['period'],
    queryFn: getPeriod,
  });

  if (isLoading) {
    return <div>loading period...</div>;
  }

  const periods = data?.result || [];

  return (
    <div className="flex flex-col gap-2">
      {periods.map(({ id, name, startDate, endDate }) => (
        <Link to={`/transactions/period/${id}/budget`} key={`period-${id}`}>
          <PeriodCard name={name} startDate={startDate} endDate={endDate} />
        </Link>
      ))}
    </div>
  );
}
