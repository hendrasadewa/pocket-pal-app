import BudgetForm from '@/features/budget/components/BudgetForm';
import { createBudget } from '@/services/budget';
import { Budget } from '@/types/entities';
import { useMutation, useQueryClient } from '@tanstack/react-query';

export default function AddBudgetPage() {
  const queryClient = useQueryClient();
  const mutation = useMutation({
    mutationFn: createBudget,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['budget'] });
      window.history.back();
    },
  });

  const handleSubmit = (payload: Budget) => {
    mutation.mutate(payload);
  };

  return (
    <BudgetForm
      mode="create"
      onSubmit={handleSubmit}
      isLoading={mutation.isLoading}
    />
  );
}
