/* tslint:disable */
import { vwCreditCardWithAddress } from './vw-credit-card-with-address';
import { vwEcheckWithAddress } from './vw-echeck-with-address';
import { vwPayment } from './vw-payment';
export interface vwPaymentWithMethods  {
  creditCard?: vwCreditCardWithAddress;
  echeck?: vwEcheckWithAddress;
  payment?: vwPayment;
}
