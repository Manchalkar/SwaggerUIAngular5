/* tslint:disable */
import { vwCreditCardWithAddress } from './vw-credit-card-with-address';
import { vwEcheckWithAddress } from './vw-echeck-with-address';
import { vwTrustPayment } from './vw-trust-payment';
export interface vwTrustPaymentWithPaymentMethod  {
  creditCard?: vwCreditCardWithAddress;
  echeck?: vwEcheckWithAddress;
  payment?: vwTrustPayment;
}
