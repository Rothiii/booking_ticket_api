export type CreateTransactionRequest = {
  code_discount?: number;
  id_ticket: number
  id_user: number
  quantity: number
};

export type TopUpBalanceRequest = {
  id_user: number;
  amount: number;
};