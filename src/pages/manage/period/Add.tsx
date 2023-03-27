import { useMutation, useQueryClient } from '@tanstack/react-query';

import PeriodForm from '@/features/period/components/PeriodForm';
import { Period } from '@/types/entities';
import { createPeriod } from '@/services/period';

export default function AddPeriodPage() {
  const queryClient = useQueryClient();

  const mutation = useMutation({
    mutationFn: createPeriod,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['period'] });
      window.history.back();
    },
  });

  const handleSubmit = (payload: Period) => {
    mutation.mutate(payload);
  };
  return <PeriodForm isLoading={mutation.isLoading} onSubmit={handleSubmit} />;
}
