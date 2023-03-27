import { Budget, Category, Period } from './entities';

// base type def
export interface CursorPagination {
  perPage: number;
  lastId: number;
  total: number;
}

export interface OffsetPagination {
  page: number;
  perPage: number;
  total: number;
}

export interface BaseResponse<T> {
  error?: unknown;
  result?: T;
  message: string;
  pagination: CursorPagination | OffsetPagination;
}

// response mapper
export type AllPeriodResponse = BaseResponse<Period[]>;
export type PeriodResponse = BaseResponse<Period>;
export type AllCategoryResponse = BaseResponse<Category[]>;
export type CategoryResponse = BaseResponse<Category>;
export type AllBudgetResponse = BaseResponse<Budget[]>;
export type BudgetResponse = BaseResponse<Budget>;
