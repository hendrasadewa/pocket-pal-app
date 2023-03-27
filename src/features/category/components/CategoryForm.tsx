import { FormEvent, useState } from 'react';

import { createCategory, updateCategory } from '@/services/category';
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
  mode: 'create' | 'edit';
  id?: number;
  initialValue?: Category;
}

export function CategoryForm({ mode, id, initialValue }: Props) {
  const [emoji, setEmoji] = useState<string>(initialValue?.emoji || '');
  const [isSubmitting, setSubmitting] = useState(false);

  const handleSubmit = async (event: FormEvent<CategoryFormElements>) => {
    event.preventDefault();
    setSubmitting(true);

    const { categoryName } = event.currentTarget.elements;
    if (mode === 'create') {
      await createCategory(categoryName.value, emoji);
    } else if (id && mode === 'edit') {
      await updateCategory(id, categoryName.value, emoji);
    }

    setSubmitting(false);
    window.history.back();
  };

  return (
    <Form
      isSubmitting={isSubmitting}
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
            disabled={isSubmitting}
            defaultValue={initialValue?.name}
          />
        </div>
        <EmojiSelect onSelected={(emoji: string) => setEmoji(emoji)} />
      </div>
    </Form>
  );
}
