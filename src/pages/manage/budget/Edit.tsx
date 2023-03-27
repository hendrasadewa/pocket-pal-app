import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import { useParams } from 'react-router-dom';

import BudgetForm from '@/features/budget/components/BudgetForm';
import { getBudgetById, updateBudget } from '@/services/budget';
import { Budget } from '@/types/entities';

export default function EditBudgetPage() {
  const queryClient = useQueryClient();
  const { id } = useParams();

  const { data } = useQuery({
    queryKey: ['budget', id],
    queryFn: () => getBudgetById(id),
  });

  const mutation = useMutation({
    mutationFn: updateBudget,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['budget'] });
      window.history.back();
    },
  });

  const handleSubmit = (payload: Budget) => {
    mutation.mutate({
      amount: payload.amount,
      categoryId: payload.categoryId,
      id: id,
      name: payload.name,
      periodId: payload.periodId,
    });
  };

  return (
    <BudgetForm
      mode="edit"
      onSubmit={handleSubmit}
      isLoading={mutation.isLoading}
      initialValue={data?.result}
    />
  );
}
