import ky from '@/lib/ky';
import { AllBudgetResponse, BudgetResponse } from '@/types/api';

export async function getBudget(): Promise<AllBudgetResponse> {
  const response = await ky.get('budget');

  if (!response.ok) {
    throw new Error(`fetch error: ${response.statusText}`);
  }

  return await response.json();
}

export async function getBudgetById(id: number): Promise<BudgetResponse> {
  const response = await ky.get(`budget/${id}`);

  if (!response.ok) {
    throw new Error(`fetch error: ${response.statusText}`);
  }

  return await response.json();
}

export async function createBudget(
  name: string,
  amount: number,
  periodId: number,
  categoryId: number
): Promise<BudgetResponse> {
  const response = await ky.post('budget', {
    json: { name, amount, periodId, categoryId },
  });

  if (!response.ok) {
    throw new Error(`fetch error: ${response.statusText}`);
  }

  return await response.json();
}

export async function updateBudget(
  id: number,
  name: string,
  amount: number,
  periodId: number,
  categoryId: number
): Promise<BudgetResponse> {
  const response = await ky.patch(`budget/${id}`, {
    json: { name, amount, periodId, categoryId },
  });

  if (!response.ok) {
    throw new Error(`fetch error: ${response.statusText}`);
  }

  return await response.json();
}
