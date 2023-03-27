import { FormEvent, useState } from 'react';

import { Budget } from '@/types/entities';
import { createBudget, updateBudget } from '@/services/budget';
import CategorySelect from '@/components/CategorySelect';
import PeriodSelect from '@/components/PeriodSelect';
import Form from '@/components/Form';

interface FormElements extends HTMLFormControlsCollection {
  name: HTMLInputElement;
  amount: HTMLInputElement;
  periodId: HTMLInputElement;
  categoryId: HTMLInputElement;
}
interface CategoryFormElements extends HTMLFormElement {
  readonly elements: FormElements;
}

interface Props {
  mode: 'create' | 'edit';
  isLoading: boolean;
  onSubmit: (values: Budget) => void;
  initialValue?: Budget;
}

export default function BudgetForm({
  initialValue,
  isLoading,
  onSubmit,
}: Props) {
  const handleSubmit = async (event: FormEvent<CategoryFormElements>) => {
    event.preventDefault();

    const { name, amount, periodId, categoryId } = event.currentTarget.elements;

    const values = {
      name: name.value,
      amount: parseInt(amount.value, 10),
      periodId: parseInt(periodId.value, 10),
      categoryId: parseInt(categoryId.value, 10),
    } as Budget;

    onSubmit(values);
  };

  return (
    <Form
      onSubmit={handleSubmit}
      isSubmitting={isLoading}
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
            <span className="label-text">Category</span>
          </label>
          <CategorySelect defaultValue={initialValue?.categoryId} />
        </div>
        <div className="form-control w-full">
          <label className="label">
            <span className="label-text">Period</span>
          </label>
          <PeriodSelect defaultValue={initialValue?.periodId} />
        </div>
      </div>
    </Form>
  );
}
