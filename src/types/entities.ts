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
}
