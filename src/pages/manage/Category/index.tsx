import { useQuery } from '@tanstack/react-query';

import CategoryList from '@/features/category/components/CategoryList';
import { getCategory } from '@/services/category';

export default function ManageCategoryPage() {
  const { data } = useQuery({
    queryKey: ['category'],
    queryFn: getCategory,
  });

  return <CategoryList data={data?.result} />;
}
