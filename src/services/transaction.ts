import ky from '@/lib/ky';
import { AllTransactionResponse, TransactionResponse } from '@/types/api';

export async function getTransaction(): Promise<AllTransactionResponse> {
  const response = await ky.get('transaction');

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
