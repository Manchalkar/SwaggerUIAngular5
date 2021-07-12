/* tslint:disable */
import { vwCreditCardUpdate } from './vw-credit-card-update';
import { vwECheckUpdate } from './vw-e-check-update';
export interface vwUpdatePaymentMethods  {
  autoPayMethodId?: null | number;
  creditCards?: null | Array<vwCreditCardUpdate>;
  eChecks?: null | Array<vwECheckUpdate>;
}
