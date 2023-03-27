import ky from '@/lib/ky';
import { AllCategoryResponse, CategoryResponse } from '@/types/api';

export async function getCategory(): Promise<AllCategoryResponse> {
  const response = await ky.get('category', { cache: 'no-store' });

  if (!response.ok) {
    throw new Error(`fetch error: ${response.statusText}`);
  }

  return await response.json();
}

export async function getCategoryById(id: number): Promise<CategoryResponse> {
  const response = await ky.get(`category/${id}`);

  if (!response.ok) {
    throw new Error(`fetch error: ${response.statusText}`);
  }

  return await response.json();
}

export async function createCategory(
  name: string,
  emoji: string
): Promise<CategoryResponse> {
  const response = await ky.post('category', {
    json: { name, emoji },
  });

  if (!response.ok) {
    throw new Error(`fetch error: ${response.statusText}`);
  }

  return await response.json();
}

export async function updateCategory(
  id: number,
  name: string,
  emoji: string
): Promise<CategoryResponse> {
  const response = await ky.patch(`category/${id}`, {
    json: { name, emoji },
  });

  if (!response.ok) {
    throw new Error(`fetch error: ${response.statusText}`);
  }

  return await response.json();
}
