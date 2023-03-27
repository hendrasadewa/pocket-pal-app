import ky from '@/lib/ky';
import { AllPeriodResponse, PeriodResponse } from '@/types/api';

export async function getPeriod(): Promise<AllPeriodResponse> {
  const response = await ky.get('period', { cache: 'no-store' });

  if (!response.ok) {
    throw new Error(`fetch error: ${response.statusText}`);
  }

  return await response.json();
}

export async function getPeriodById(id: number): Promise<PeriodResponse> {
  const response = await ky.get(`period/${id}`, { cache: 'no-store' });

  if (!response.ok) {
    throw new Error(`fetch error: ${response.statusText}`);
  }

  return await response.json();
}

export async function createPeriod(
  name: string,
  startDate: Date,
  endDate: Date
): Promise<PeriodResponse> {
  const response = await ky.post('period', {
    json: { name, startDate, endDate },
  });

  if (!response.ok) {
    throw new Error(`fetch error: ${response.statusText}`);
  }

  return await response.json();
}

export async function updatePeriod(
  id: number,
  name: string,
  startDate: Date,
  endDate: Date
): Promise<PeriodResponse> {
  const response = await ky.patch(`period/${id}`, {
    json: { name, startDate, endDate },
  });

  if (!response.ok) {
    throw new Error(`fetch error: ${response.statusText}`);
  }

  return await response.json();
}
