import { useMutation, useQueryClient } from '@tanstack/react-query';

import { Transaction } from '@/types/entities';
import { createTransaction } from '@/services/transaction';
import TransactionForm from '@/features/transactions/components/TransactionForm';

export default function AddTransactionPage() {
  const queryClient = useQueryClient();

  const mutation = useMutation({
    mutationFn: createTransaction,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['transaction'] });
      window.history.back();
    },
  });

  const handleSubmit = (payload: Transaction) => {
    mutation.mutate(payload);
  };
  return (
    <TransactionForm isLoading={mutation.isLoading} onSubmit={handleSubmit} />
  );
}
