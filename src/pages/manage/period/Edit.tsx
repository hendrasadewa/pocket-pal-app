import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import { useParams } from 'react-router-dom';

import { getPeriodById, updatePeriod } from '@/services/period';
import PeriodForm from '@/features/period/components/PeriodForm';
import { Period } from '@/types/entities';

export default function EditPeriodPage() {
  const queryClient = useQueryClient();
  const { id } = useParams();

  const { data } = useQuery({
    queryKey: ['period', id],
    queryFn: () => getPeriodById(id),
  });

  const mutation = useMutation({
    mutationFn: updatePeriod,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['period'] });
      window.history.back();
    },
  });

  const handleSubmit = (payload: Period) => {
    mutation.mutate({
      id: id,
      name: payload.name,
      startDate: payload.startDate,
      endDate: payload.endDate,
    });
  };

  return (
    <PeriodForm
      initialValue={data?.result}
      isLoading={mutation.isLoading}
      onSubmit={handleSubmit}
    />
  );
}
