import dayjs from 'dayjs';
import { Calendar, EditPencil, Plus } from 'iconoir-react';
import { Link } from 'react-router-dom';

import ListItem from '@/components/ListItem';
import ListContainer from '@/components/ListContainer';
import { Period } from '@/types/entities';

interface Props {
  data?: Period[];
}

export default function PeriodList({ data = [] }: Props) {
  return (
    <ListContainer>
      {data.map(({ id, name, startDate, endDate }) => (
        <ListItem
          title={
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <Calendar />
                <span className="font-bold">{name}</span>
              </div>
              <Link to={`/manage/period/${id}/edit`}>
                <EditPencil />
              </Link>
            </div>
          }
          descriptions={
            <>
              <span>from {dayjs(startDate).format('DD MMM YYYY')}</span>
              <span>to {dayjs(endDate).format('DD MMM YYYY')}</span>
            </>
          }
          key={`period-${id}`}
        />
      ))}
      <Link to="/manage/period/add">
        <ListItem
          title={
            <div className="flex items-center justify-between gap-2">
              <span className="font">Add new Period</span>
              <Plus />
            </div>
          }
        />
      </Link>
    </ListContainer>
  );
}
