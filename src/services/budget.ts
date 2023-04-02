import ky from '@/lib/ky';
import { AllBudgetResponse, BudgetResponse } from '@/types/api';

export async function getBudget(periodId?: string): Promise<AllBudgetResponse> {
  const searchParams = new URLSearchParams();

  if (periodId) {
    searchParams.append('periodId', String(periodId));
  }

  const response = await ky.get('budget', {
    searchParams,
  });

  if (!response.ok) {
    throw new Error(`fetch error: ${response.statusText}`);
  }

  return await response.json();
}

export async function getBudgetById(id?: string): Promise<BudgetResponse> {
  if (!id) {
    throw new Error(`fetch error: id is required`);
  }
  const response = await ky.get(`budget/${id}`);

  if (!response.ok) {
    throw new Error(`fetch error: ${response.statusText}`);
  }

  return await response.json();
}

interface CreatePayload {
  name: string;
  amount: number;
  periodId: number;
  categoryId: number;
}
export async function createBudget(
  payload: CreatePayload
): Promise<BudgetResponse> {
  const response = await ky.post('budget', {
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
export async function updateBudget(
  payload: EditPayload
): Promise<BudgetResponse> {
  if (!payload.id) {
    throw new Error(`fetch error: id is required`);
  }
  const response = await ky.patch(`budget/${payload.id}`, {
    json: payload,
  });

  if (!response.ok) {
    throw new Error(`fetch error: ${response.statusText}`);
  }

  return await response.json();
}
