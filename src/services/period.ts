import ky from '@/lib/ky';
import { AllPeriodResponse, PeriodResponse } from '@/types/api';

export async function getPeriod(): Promise<AllPeriodResponse> {
  const response = await ky.get('period');

  if (!response.ok) {
    throw new Error(`fetch error: ${response.statusText}`);
  }

  return await response.json();
}

export async function getPeriodById(id?: string): Promise<PeriodResponse> {
  if (!id) {
    throw new Error('id should be provided');
  }
  const response = await ky.get(`period/${id}`);

  if (!response.ok) {
    throw new Error(`fetch error: ${response.statusText}`);
  }

  return await response.json();
}

interface CreatePayload {
  name: string;
  startDate: Date;
  endDate: Date;
}

export async function createPeriod(
  payload: CreatePayload
): Promise<PeriodResponse> {
  const response = await ky.post('period', {
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

export async function updatePeriod(
  payload: EditPayload
): Promise<PeriodResponse> {
  if (!payload.id) {
    throw new Error('id should be provided');
  }
  const response = await ky.patch(`period/${payload.id}`, {
    json: payload,
  });

  if (!response.ok) {
    throw new Error(`fetch error: ${response.statusText}`);
  }

  return await response.json();
}
