import { Emoji, EmojiStyle } from 'emoji-picker-react';
import { EditPencil } from 'iconoir-react';
import numeral from 'numeral';
import { Link } from 'react-router-dom';
import dayjs from 'dayjs';

import { Transaction } from '@/types/entities';

interface Props {
  data: Transaction;
}

export default function TransactionListItem({ data }: Props) {
  const { budget, date, name, amount, id } = data;
  return (
    <div className="flex items-center justify-between p-2">
      <div className="flex items-center gap-2">
        <div className="bg-primary-content p-1 rounded w-8 h-8">
          <Emoji
            unified={budget?.category?.emoji || ''}
            emojiStyle={EmojiStyle.APPLE}
            size={24}
          />
        </div>
        <div className="flex flex-col items-start justify-center">
          <p className="font-bold truncate w-32">{name}</p>
          <p>{dayjs(date).format('DD MMM YYYY')}</p>
        </div>
      </div>
      <div className="flex items-center justify-end gap-2 ">
        <p className="min-w-[100px]">Rp. {numeral(amount).format('0,0')}</p>
        <Link to={`/transactions/${id}/edit`}>
          <EditPencil />
        </Link>
      </div>
    </div>
  );
}
