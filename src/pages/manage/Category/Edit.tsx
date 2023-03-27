import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import { useParams } from 'react-router-dom';

import { Category } from '@/types/entities';
import { CategoryForm } from '@/features/category/components/CategoryForm';
import { getCategoryById, updateCategory } from '@/services/category';

export default function EditCategoryPage() {
  const queryClient = useQueryClient();
  const { id } = useParams();

  const { data } = useQuery({
    queryKey: ['category', id],
    queryFn: () => getCategoryById(id),
  });

  const mutation = useMutation({
    mutationFn: updateCategory,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['category'] });
      window.history.back();
    },
  });

  const handleSubmit = (payload: Category) => {
    mutation.mutate({
      id,
      name: payload.name,
      emoji: payload.emoji,
    });
  };

  return (
    <CategoryForm
      initialValue={data?.result}
      isLoading={mutation.isLoading}
      onSubmit={handleSubmit}
    />
  );
}
