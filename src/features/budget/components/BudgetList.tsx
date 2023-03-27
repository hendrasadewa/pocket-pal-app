import { Plus } from 'iconoir-react';
import { Link } from 'react-router-dom';

import ListItem from '@/components/ListItem';
import ListContainer from '@/components/ListContainer';
import { Budget } from '@/types/entities';

import BudgetListItem from './BudgetListItem';

interface Props {
  data?: Budget[];
}

export default function BudgetList({ data = [] }: Props) {
  return (
    <ListContainer>
      {data.map((item) => (
        <BudgetListItem data={item} key={`budget-${item.id}`} />
      ))}
      <Link to="/manage/budget/add">
        <ListItem
          title={
            <div className="flex items-center justify-between gap-2">
              <span className="font">Add new budget</span>
              <Plus />
            </div>
          }
        />
      </Link>
    </ListContainer>
  );
}
