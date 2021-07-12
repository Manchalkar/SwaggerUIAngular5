/* tslint:disable */
import { vwIdName } from './vw-id-name';
import { vwMatterPaymentMethodDetails } from './vw-matter-payment-method-details';
export interface vwECheck  {
  accountNumber: null | string;
  addressId?: null | number;
  autoPay?: null | boolean;
  createdAt?: null | string;
  firstName: null | string;
  id?: number;
  isSameAsPrimary?: null | boolean;
  lastName: null | string;
  matterPaymentMethodDetails?: null | Array<vwMatterPaymentMethodDetails>;
  person?: vwIdName;
  routingNumber: null | string;
  state?: null | string;
  suspendAutoPay?: null | boolean;
}
