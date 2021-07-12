/* tslint:disable */
import { vwAddressDetailsPaymentMethod } from './vw-address-details-payment-method';
import { vwIdName } from './vw-id-name';
export interface vwCreditCardCreateClient  {
  address?: vwAddressDetailsPaymentMethod;
  addressId?: null | number;
  autoPay?: null | boolean;
  cardNumber: null | string;
  cardType?: null | string;
  companyName?: null | string;
  confirmationId?: null | string;
  cvv: null | string;
  expirationDate: null | string;
  firstName?: null | string;
  id?: number;
  isCompany?: null | boolean;
  isDelete?: null | boolean;
  isSameAsPrimary?: null | boolean;
  lastName?: null | string;
  needUpdate?: boolean;
  person?: vwIdName;
  suspendAutoPay?: null | boolean;
  updateToUSIO?: null | boolean;
}
