/* tslint:disable */
import { vwAddressDetails } from './vw-address-details';
import { vwCreditCard } from './vw-credit-card';
export interface vwCreditCardWithAddress  {
  address?: vwAddressDetails;
  creditCard?: vwCreditCard;
}
