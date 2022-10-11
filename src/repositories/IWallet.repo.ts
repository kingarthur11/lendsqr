
export interface IWalletDTO {
  id: number;
  user_id: number;
  wallet_no: number;
  ledger_balance: number;
  available_balance: number;
  creditor_wallet_no: number;
  debitor_wallet_no: number;
  debitor_id: number;
  creditor_id: number;
  amount: number;
  createdAt?: Date;
  updatedAt?: Date;
}