export type CreateDiscountRequest = {
  code_discount: string;
  value_discount: number;
  description: string;
  start_date: string;
  end_date: string;
};

export type UpdateDiscountRequest = {
  code_discount: string;
  value_discount: number;
  description: string;
  start_date: string;
  end_date: string;
};