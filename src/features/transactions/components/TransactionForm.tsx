import { FormEvent } from 'react';

import Form from '@/components/Form';
import { Transaction } from '@/types/entities';
import dayjs from 'dayjs';
import BudgetSelect from '@/components/BudgetSelect';

interface FormElements extends HTMLFormControlsCollection {
  name: HTMLInputElement;
  amount: HTMLInputElement;
  date: HTMLInputElement;
  budgetId: HTMLSelectElement;
  typeId: HTMLSelectElement;
}
interface CategoryFormElements extends HTMLFormElement {
  readonly elements: FormElements;
}

interface Props {
  isLoading: boolean;
  initialValue?: Transaction;
  onSubmit: (payload: Transaction) => void;
}

export default function TransactionForm({
  onSubmit,
  isLoading = false,
  initialValue,
}: Props) {
  const handleSubmit = async (event: FormEvent<CategoryFormElements>) => {
    event.preventDefault();

    const { name, amount, date, budgetId, typeId } =
      event.currentTarget.elements;

    const values = {
      name: name.value,
      amount: parseInt(amount.value, 10),
      date: new Date(date.value),
      budgetId: parseInt(budgetId.value, 10),
      typeId: parseInt(typeId.value, 10),
    } as Transaction;

    onSubmit(values);
  };

  return (
    <Form
      isSubmitting={isLoading}
      onSubmit={handleSubmit}
      className="flex flex-col justify-between h-full gap-2 pb-2"
    >
      <div className="flex flex-col gap-2 pb-2">
        <div className="form-control w-full">
          <label className="label">
            <span className="label-text">Name</span>
          </label>
          <input
            type="text"
            placeholder="Type here"
            className="input input-bordered w-full"
            name="name"
            disabled={isLoading}
            defaultValue={initialValue?.name}
          />
        </div>
        <div className="form-control w-full">
          <label className="label">
            <span className="label-text">Amount</span>
          </label>
          <input
            type="number"
            placeholder="Type here"
            className="input input-bordered w-full"
            name="amount"
            disabled={isLoading}
            defaultValue={initialValue?.amount}
          />
        </div>
        <div className="form-control w-full">
          <label className="label">
            <span className="label-text">Date</span>
          </label>
          <input
            type="date"
            placeholder="Type here"
            className="input input-bordered w-full"
            name="date"
            disabled={isLoading}
            defaultValue={dayjs(initialValue?.date || new Date()).format(
              'YYYY-MM-DD'
            )}
          />
        </div>
        <div className="form-control w-full">
          <label className="label">
            <span className="label-text">Budget</span>
          </label>
          <BudgetSelect defaultValue={initialValue?.budgetId} />
        </div>
        <div className="form-control w-full">
          <label className="label">
            <span className="label-text">Type</span>
          </label>
          <select name="typeId" className="select select-bordered w-full">
            <option value={1}>Income</option>
            <option value={2}>Outcome</option>
          </select>
        </div>
      </div>
    </Form>
  );
}
