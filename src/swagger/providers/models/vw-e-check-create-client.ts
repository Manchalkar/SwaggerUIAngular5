/* tslint:disable */
import { vwAddressDetailsPaymentMethod } from './vw-address-details-payment-method';
import { vwIdName } from './vw-id-name';
export interface vwECheckCreateClient  {
  accountNumber: null | string;
  address?: vwAddressDetailsPaymentMethod;
  addressId?: null | number;
  autoPay?: null | boolean;
  firstName: null | string;
  id?: number;
  isDelete?: null | boolean;
  isSameAsPrimary?: null | boolean;
  lastName: null | string;
  needUpdate?: boolean;
  person?: vwIdName;
  routingNumber: null | string;
  state?: null | string;
  suspendAutoPay?: null | boolean;
}
