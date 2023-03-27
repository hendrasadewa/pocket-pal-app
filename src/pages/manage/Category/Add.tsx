import { useMutation, useQueryClient } from '@tanstack/react-query';

import { Category } from '@/types/entities';
import { CategoryForm } from '@/features/category/components/CategoryForm';
import { createCategory } from '@/services/category';

export default function AddCategoryPage() {
  const queryClient = useQueryClient();

  const mutation = useMutation({
    mutationFn: createCategory,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['category'] });
      window.history.back();
    },
  });

  const handleSubmit = (payload: Category) => {
    mutation.mutate(payload);
  };

  return (
    <CategoryForm isLoading={mutation.isLoading} onSubmit={handleSubmit} />
  );
}
