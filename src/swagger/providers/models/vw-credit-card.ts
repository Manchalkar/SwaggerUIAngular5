/* tslint:disable */
import { vwIdName } from './vw-id-name';
import { vwMatterPaymentMethodDetails } from './vw-matter-payment-method-details';
export interface vwCreditCard  {
  addressId?: null | number;
  autoPay?: null | boolean;
  cardNumber: null | string;
  cardType?: null | string;
  companyName?: null | string;
  confirmationId?: null | string;
  createdAt?: null | string;
  cvv: null | string;
  expirationDate: null | string;
  firstName?: null | string;
  id?: number;
  isCompany?: null | boolean;
  isSameAsPrimary?: null | boolean;
  lastName?: null | string;
  matterPaymentMethodDetails?: null | Array<vwMatterPaymentMethodDetails>;
  merchantRef?: null | string;
  person?: vwIdName;
  suspendAutoPay?: null | boolean;
  updateToUSIO?: null | boolean;
}
