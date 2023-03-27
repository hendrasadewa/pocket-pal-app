import { FormEvent, useState } from 'react';
import dayjs from 'dayjs';

import { createPeriod, updatePeriod } from '@/services/period';
import { Period } from '@/types/entities';
import Form from '@/components/Form';

interface FormElements extends HTMLFormControlsCollection {
  periodName: HTMLInputElement;
  startDate: HTMLInputElement;
  endDate: HTMLInputElement;
}
interface PeriodFormElements extends HTMLFormElement {
  readonly elements: FormElements;
}

interface Props {
  onSubmit: (payload: Period) => void;
  isLoading: boolean;
  initialValue?: Period;
}

export default function PeriodForm({
  onSubmit,
  isLoading,
  initialValue,
}: Props) {
  const handleSubmit = async (event: FormEvent<PeriodFormElements>) => {
    event.preventDefault();

    const { periodName, startDate, endDate } = event.currentTarget.elements;

    const values = {
      name: periodName.value,
      startDate: new Date(startDate.value),
      endDate: new Date(endDate.value),
    } as Period;

    onSubmit(values);
  };

  return (
    <Form
      onSubmit={handleSubmit}
      isSubmitting={isLoading}
      className="flex flex-col justify-between h-full gap-2 pb-2"
    >
      <div className="flex flex-col gap-2">
        <div className="form-control w-full">
          <label className="label">
            <span className="label-text">Name</span>
          </label>
          <input
            type="text"
            placeholder="Type here"
            className="input input-bordered w-full"
            name="periodName"
            defaultValue={initialValue?.name}
          />
        </div>
        <div className="form-control w-full">
          <label className="label">
            <span className="label-text">Start Date</span>
          </label>
          <input
            type="date"
            name="startDate"
            defaultValue={dayjs(initialValue?.startDate).format('YYYY-MM-DD')}
            className="input input-bordered w-full"
          />
        </div>
        <div className="form-control w-full">
          <label className="label">
            <span className="label-text">End Date</span>
          </label>
          <input
            type="date"
            name="endDate"
            defaultValue={dayjs(initialValue?.endDate).format('YYYY-MM-DD')}
            className="input input-bordered w-full"
          />
        </div>
      </div>
    </Form>
  );
}
