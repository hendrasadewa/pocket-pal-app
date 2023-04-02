import dayjs from 'dayjs';
import { Calendar } from 'iconoir-react';

interface Props {
  name: string;
  startDate: Date;
  endDate: Date;
}

const DATE_FORMAT = 'DD-MMMM-YYYY';

export default function PeriodCard({ name, startDate, endDate }: Props) {
  return (
    <div className="flex flex-col gap-1 bg-base-100 shadow hover:shadow-md transition-shadow p-2 rounded-xl cursor-pointer">
      <div className="flex items-center gap-2">
        <Calendar />
        <p>{name}</p>
      </div>
      <div className="flex items-center justify-between gap-2">
        <p>from: {dayjs(startDate).format(DATE_FORMAT)}</p>
        <p>to: {dayjs(endDate).format(DATE_FORMAT)}</p>
      </div>
    </div>
  );
}
