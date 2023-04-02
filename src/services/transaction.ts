import ky from '@/lib/ky';
import { AllTransactionResponse, TransactionResponse } from '@/types/api';

export async function getTransaction(
  periodId?: string,
  budgetId?: string
): Promise<AllTransactionResponse> {
  const searchParams = new URLSearchParams();

  if (periodId) {
    searchParams.append('periodId', periodId);
  }

  if (budgetId) {
    searchParams.append('budgetId', budgetId);
  }

  const response = await ky.get('transaction', { searchParams });

  if (!response.ok) {
    throw new Error(`fetch error: ${response.statusText}`);
  }

  return await response.json();
}

export async function getTransactionById(
  id?: string
): Promise<TransactionResponse> {
  if (!id) {
    throw new Error('id should be provided');
  }

  const response = await ky.get(`transaction/${id}`);

  if (!response.ok) {
    throw new Error(`fetch error: ${response.statusText}`);
  }

  return await response.json();
}

interface CreatePayload {
  name: string;
  amount: number;
  date: Date;
  budgetId: number;
  typeId: number;
}

export async function createTransaction(
  payload: CreatePayload
): Promise<TransactionResponse> {
  const response = await ky.post('transaction', {
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

export async function updateTransaction(
  payload: EditPayload
): Promise<TransactionResponse> {
  if (!payload.id) {
    throw new Error('id should be provided');
  }

  const response = await ky.patch(`transaction/${payload.id}`, {
    json: payload,
  });

  if (!response.ok) {
    throw new Error(`fetch error: ${response.statusText}`);
  }

  return await response.json();
}
