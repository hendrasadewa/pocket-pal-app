import { FormEvent, useState } from 'react';

import Form from '@/components/Form';
import EmojiSelect from '@/components/EmojiSelect';
import { Category } from '@/types/entities';

interface FormElements extends HTMLFormControlsCollection {
  categoryName: HTMLInputElement;
}
interface CategoryFormElements extends HTMLFormElement {
  readonly elements: FormElements;
}

interface Props {
  isLoading: boolean;
  initialValue?: Category;
  onSubmit: (payload: Category) => void;
}

export function CategoryForm({
  onSubmit,
  isLoading = false,
  initialValue,
}: Props) {
  const [emoji, setEmoji] = useState<string>(initialValue?.emoji || '');

  const handleSubmit = async (event: FormEvent<CategoryFormElements>) => {
    event.preventDefault();

    const { categoryName } = event.currentTarget.elements;

    const values = {
      emoji,
      name: categoryName.value,
    } as Category;

    onSubmit(values);
  };

  const onSelectEmoji = (emoji: string) => {
    setEmoji(emoji);
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
            <span className="label-text">Category Name</span>
          </label>
          <input
            type="text"
            placeholder="Type here"
            className="input input-bordered w-full"
            name="categoryName"
            disabled={isLoading}
            defaultValue={initialValue?.name}
          />
        </div>
        <EmojiSelect onSelected={onSelectEmoji} />
      </div>
    </Form>
  );
}
