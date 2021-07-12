/* tslint:disable */
import { vmContingentFeeCode } from './vm-contingent-fee-code';
import { vwAddressDetails } from './vw-address-details';
import { vwBillingSettings } from './vw-billing-settings';
import { vwCreditCardCreateClient } from './vw-credit-card-create-client';
import { vwECheckCreateClient } from './vw-e-check-create-client';
import { vwFixedFeeAddOn } from './vw-fixed-fee-add-on';
import { vwFixedFeeServices } from './vw-fixed-fee-services';
import { vwRateFull } from './vw-rate-full';
import { vwRateTableClientRetain } from './vw-rate-table-client-retain';
export interface vwFullClientBilling  {
  billingAddress?: vwAddressDetails;
  clientSettings?: vwBillingSettings;
  contingentFeeCodes?: null | Array<vmContingentFeeCode>;
  creditCards?: null | Array<vwCreditCardCreateClient>;
  echecks?: null | Array<vwECheckCreateClient>;
  fixedFeeServices?: null | Array<vwFixedFeeServices>;
  invoiceAddress?: vwAddressDetails;
  isInvoiceSameAsPrimary?: null | boolean;
  rateTables?: null | Array<vwRateTableClientRetain>;
  rates?: null | Array<vwRateFull>;
  settings?: vwBillingSettings;
  vwFixedFeeAddOns?: null | Array<vwFixedFeeAddOn>;
}
