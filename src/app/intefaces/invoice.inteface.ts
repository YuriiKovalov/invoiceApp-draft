export interface InvoiceDataModel {
  initiateDateTime: string;
  logoImageUrl: string;
  orgSettings: OrgSettingsModel;
  transaction: TransactionModel;
  pk?: string;
  id: string;
}

export interface OrgSettingsModel {
  id: string;
  yearEndDay: number;
  yearEndMonth: number;
  taxNumber: string | null;
  taxRegistered: boolean;
  taxRate: number;
  invoiceFooter: string | null;
  invoiceAddress: string;
  invoiceTradingName?: null;
  invoicePaymentTerms: string;
  invoiceGroupChargesByDate: boolean;
  logoSecureLink?: null;
  orgId: string;
  orgName: string;
  timeZone: string | null;
}

export interface TransactionModel {
  lines?: TrxLinesModel[];
  ledgerItems?: LedgerItemsModel[];
  invoice: InvoiceModel;
  expense: ExpenseModel;
  linkedCashAccountId?: null;
  amount: number;
  subtotal: number;
  tax: number;
  date: string;
  details: string;
  direction: string;
  id: string;
  party: string;
  ref?: null;
  hasManualLedger: boolean;
  modifiedTransactionLines: boolean;
  type: string;
  taxMode: string;
}

export interface TrxLinesModel {
  accountId: string;
  amount: number;
  description: string;
  id: string;
  taxRate: number;
}

export interface LedgerItemsModel {
  accountId: string;
  credit: number;
  debit: number;
  id: string;
  rule: string;
  transactionId: string;
  date: string;
}

export interface InvoiceModel {
  invoiceLines?: InvoiceLinesModel[];
  dueDate: string;
  date?: string;
  id: string;
  number: string;
  status: string;
  subtotal?: number;
  tax?: number;
  amount?: number;
  billTo: string;
  type: string;
  paidDate?: null;
  paidIntoAccountId?: null;
  jobId: string;
  clientId: string;
  generationStatus: string;
  details: string;
  taxMode: string;
  ref: string | null;
  hasManualLedger: boolean;
  party: string | null;
}

export interface InvoiceLinesModel {
  id: string;
  amount: number;
  description: string;
  taxRate: number;
  quantity: number;
  units: number;
  unitsString: string;
  rate: number;
  accountId: string;
  chargeIds?: (null)[] | null;
  date: string | null;
}

export interface ExpenseModel {
  id: string;
  paidFromType?: null;
  paidFromAccountId?: null;
  whoPaidString?: null;
  needsReimbursed: boolean;
  whoPaidAccountId?: null;
  dueDate?: null;
}
