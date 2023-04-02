import { Link, useParams } from 'react-router-dom';
import { Plus } from 'iconoir-react';
import { useQuery } from '@tanstack/react-query';

import ListItem from '@/components/ListItem';
import ListContainer from '@/components/ListContainer';
import { getTransaction } from '@/services/transaction';

import TransactionListItem from './TransactionListItem';

export default function TransactionList() {
  const { periodId, budgetId } = useParams();

  const { data: transactionResponse } = useQuery({
    queryKey: ['transaction', periodId, budgetId],
    queryFn: () => getTransaction(periodId, budgetId),
  });

  const transactions = transactionResponse?.result || [];

  return (
    <ListContainer>
      <Link to="/transactions/period">
        <ListItem
          title={
            <div className="flex items-center justify-between gap-2">
              <span className="font">Add new Transaction</span>
              <Plus />
            </div>
          }
        />
      </Link>
      {transactions.map((item) => (
        <TransactionListItem data={item} key={`transaction-${item.id}`} />
      ))}
    </ListContainer>
  );
}
