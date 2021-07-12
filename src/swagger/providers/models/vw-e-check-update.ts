/* tslint:disable */
import { vwAddressDetails } from './vw-address-details';
import { vwIdName } from './vw-id-name';
import { vwMatterPaymentMethodDetails } from './vw-matter-payment-method-details';
export interface vwECheckUpdate  {
  accountNumber: null | string;
  addressDetails?: vwAddressDetails;
  addressId?: null | number;
  autoPay?: null | boolean;
  createdAt?: null | string;
  firstName: null | string;
  id?: number;
  isDeleted?: null | boolean;
  isEdited?: null | boolean;
  isSameAsPrimary?: null | boolean;
  lastName: null | string;
  matterPaymentMethodDetails?: null | Array<vwMatterPaymentMethodDetails>;
  person?: vwIdName;
  routingNumber: null | string;
  state?: null | string;
  suspendAutoPay?: null | boolean;
}
