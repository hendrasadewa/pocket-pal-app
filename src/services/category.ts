import ky from '@/lib/ky';
import { AllCategoryResponse, CategoryResponse } from '@/types/api';

export async function getCategory(): Promise<AllCategoryResponse> {
  const response = await ky.get('category', { cache: 'no-store' });

  if (!response.ok) {
    throw new Error(`fetch error: ${response.statusText}`);
  }

  return await response.json();
}

export async function getCategoryById(id?: string): Promise<CategoryResponse> {
  if (!id) {
    throw new Error('id should be provided');
  }

  const response = await ky.get(`category/${id}`);

  if (!response.ok) {
    throw new Error(`fetch error: ${response.statusText}`);
  }

  return await response.json();
}

interface CreatePayload {
  name: string;
  emoji: string;
}

export async function createCategory(
  payload: CreatePayload
): Promise<CategoryResponse> {
  const response = await ky.post('category', {
    json: payload,
  });

  if (!response.ok) {
    throw new Error(`fetch error: ${response.statusText}`);
  }

  return await response.json();
}

interface EditPayload extends CreatePayload {
  id?: string;
}

export async function updateCategory(
  payload: EditPayload
): Promise<CategoryResponse> {
  if (!payload.id) {
    throw new Error('id should be provided');
  }

  const response = await ky.patch(`category/${payload.id}`, {
    json: payload,
  });

  if (!response.ok) {
    throw new Error(`fetch error: ${response.statusText}`);
  }

  return await response.json();
}
