import { Link } from 'react-router-dom';
import { Plus } from 'iconoir-react';

import ListItem from '@/components/ListItem';
import ListContainer from '@/components/ListContainer';
import TransactionListItem from './TransactionListItem';
import { Transaction } from '@/types/entities';

interface Props {
  data?: Transaction[];
}

export default function TransactionList({ data = [] }: Props) {
  return (
    <ListContainer>
      <Link to="/transactions/add">
        <ListItem
          title={
            <div className="flex items-center justify-between gap-2">
              <span className="font">Add new Transaction</span>
              <Plus />
            </div>
          }
        />
      </Link>
      {data.map((item) => (
        <TransactionListItem data={item} key={`transaction-${item.id}`} />
      ))}
    </ListContainer>
  );
}
