/* tslint:disable */
export interface vwTrustPayment  {
  amountToPay?: number;
  checkNumber?: null | string;
  clientId?: number;
  confirmationId?: null | string;
  creditCardId?: null | number;
  eCheckId?: null | number;
  gatewayStatusCode?: null | string;
  gatewayStatusMessage?: null | string;
  id?: number;
  isPrimaryRetainerTrust?: null | boolean;
  matterId?: number;
  matterTrustOnlyAccountId?: null | number;
  method?: number;
  postingDate?: string;
  sameDayACH?: null | string;
  scannedCheckImgUrl?: null | string;
  sourceMatterTrustBankAccountId?: null | number;
  targetMatterTrustBankAccountId?: null | number;
}
