/* tslint:disable */
import { vwIdName } from './vw-id-name';
import { vwInvoicedPayment } from './vw-invoiced-payment';
export interface vwPayment  {
  amountToPay?: number;
  chargeBackPaymentId?: null | number;
  chargeBackReason?: null | string;
  checkNumber?: null | string;
  clientId?: number;
  confirmationId?: null | string;
  creditCardId?: null | number;
  disableDuplicateCheck?: null | boolean;
  eCheckId?: null | number;
  gatewayStatusCode?: null | string;
  gatewayStatusMessage?: null | string;
  id?: number;
  initialConsultation?: null | boolean;
  invoiceId?: null | number;
  invoicePayment?: null | Array<vwInvoicedPayment>;
  isAutoPay?: null | boolean;
  isEquivalentOppositeTransaction?: null | boolean;
  isPaymentForSettlement?: null | boolean;
  isPrimaryRetainerTrust?: null | boolean;
  matterId?: null | number;
  method?: number;
  methodType?: null | string;
  operatingBankAccountId?: null | number;
  paymentDate?: null | string;
  postedBy?: vwIdName;
  postingDate?: null | string;
  receiptFileUrl?: null | string;
  reversePaymentId?: null | number;
  reversePaymentReason?: null | string;
  sameDayACH?: null | string;
  scannedCheckImgUrl?: null | string;
  status?: null | string;
}
