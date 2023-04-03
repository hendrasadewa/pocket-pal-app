export interface Period {
  id: number;
  name: string;
  startDate: Date;
  endDate: Date;
}

export interface Category {
  id: number;
  name: string;
  emoji: string;
}

export interface Budget {
  id: number;
  name: string;
  amount: number;
  category?: Category;
  categoryId: number;
  period?: Period;
  periodId: number;
  transaction?: Transaction[];
}

interface TransactionType {
  id: number;
  name: string;
}

export interface Transaction {
  id: number;
  name: string;
  amount: number;
  date: Date;
  budget?: Budget;
  budgetId: number;
  type?: TransactionType;
  typeId: number;
}
