import { Emoji, EmojiStyle } from 'emoji-picker-react';
import numeral from 'numeral';
import { HTMLAttributes } from 'react';

interface Props extends HTMLAttributes<HTMLDivElement> {
  emoji: string;
  name: string;
  amount: number;
  categoryName: string;
  periodName: string;
}

export default function BudgetCard({
  emoji,
  name,
  amount,
  categoryName,
  periodName,
  ...rest
}: Props) {
  return (
    <div
      className="flex gap-4 bg-base-100 shadow hover:shadow-md transition-shadow p-2 rounded-xl items-center cursor-pointer"
      {...rest}
    >
      <figure className="w-12 p-1 rounded">
        <Emoji unified={emoji || ''} emojiStyle={EmojiStyle.APPLE} size={32} />
      </figure>
      <div className="flex flex-col items-start justify-center gap-1 w-full">
        <div className="flex items-center justify-between w-full">
          <p className="font-bold">{name}</p>
          <p className="text-sm">{periodName}</p>
        </div>
        <div className="flex items-center justify-between w-full">
          <p>Rp. {numeral(amount).format('0,0')}</p>
          <p className="badge badge-primary text-sm">{categoryName}</p>
        </div>
      </div>
    </div>
  );
}
