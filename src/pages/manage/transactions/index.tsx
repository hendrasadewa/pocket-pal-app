import TransactionList from '@/features/transactions/components/TransactionList';
import { getTransaction } from '@/services/transaction';
import { useQuery } from '@tanstack/react-query';

export default function ManageTransactionPage() {
  const { data } = useQuery({
    queryKey: ['transaction'],
    queryFn: getTransaction,
  });

  return (
    <>
      <TransactionList data={data?.result} />
    </>
  );
}
