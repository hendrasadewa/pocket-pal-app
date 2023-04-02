import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import { useParams } from 'react-router-dom';

import { Transaction } from '@/types/entities';
import { getTransactionById, updateTransaction } from '@/services/transaction';
import TransactionForm from '@/features/transactions/components/TransactionForm';

export default function EditTransactionPage() {
  const queryClient = useQueryClient();
  const { transactionId } = useParams();

  const { data } = useQuery({
    queryKey: ['transaction', transactionId],
    queryFn: () => getTransactionById(transactionId),
  });

  const mutation = useMutation({
    mutationFn: updateTransaction,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['transaction'] });
      window.history.back();
    },
  });

  const handleSubmit = (payload: Transaction) => {
    mutation.mutate({
      id: transactionId,
      name: payload.name,
      amount: payload.amount,
      budgetId: payload.budgetId,
      date: payload.date,
      typeId: payload.typeId,
    });
  };

  return (
    <TransactionForm
      initialValue={data?.result}
      isLoading={mutation.isLoading}
      onSubmit={handleSubmit}
    />
  );
}
