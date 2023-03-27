import { useQuery } from '@tanstack/react-query';

import PeriodList from '@/features/period/components/PeriodList';
import { getPeriod } from '@/services/period';

export default function ManagePeriodPage() {
  const { data } = useQuery({
    queryKey: ['period'],
    queryFn: getPeriod,
  });

  return <PeriodList data={data?.result} />;
}
