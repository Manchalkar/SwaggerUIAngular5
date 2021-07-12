/* tslint:disable */
import { ClientAttorneyDetails } from './client-attorney-details';
import { ClientBasicDetails } from './client-basic-details';
import { ClientMatterContactDetails } from './client-matter-contact-details';
import { ClientMatterDetails } from './client-matter-details';
import { DisbursementRate } from './disbursement-rate';
import { vwAddPropertyHeldInTrust } from './vw-add-property-held-in-trust';
import { vwBlock } from './vw-block';
import { vwContactFormBuilder } from './vw-contact-form-builder';
import { vwCreateClientTrustAccount } from './vw-create-client-trust-account';
import { vwDMSUpload } from './vw-dms-upload';
import { vwFullClientBilling } from './vw-full-client-billing';
import { vwMatterEvents } from './vw-matter-events';
import { vwNote } from './vw-note';
import { vwTrustName } from './vw-trust-name';
export interface vwFullClientRequest  {
  attorneyDetails?: ClientAttorneyDetails;
  basicDetails?: ClientBasicDetails;
  billingDetails?: vwFullClientBilling;
  blockEmployees?: null | Array<vwBlock>;
  clientAssociations?: null | Array<ClientMatterContactDetails>;
  customUniqueNumber?: null | string;
  id?: null | number;
  isDraft?: null | boolean;
  matterAssociations?: null | Array<ClientMatterContactDetails>;
  matterDetails?: ClientMatterDetails;
  matterEvents?: null | Array<vwMatterEvents>;
  matterNotes?: null | Array<vwNote>;
  matterPropertyHeldInTrusts?: null | Array<vwAddPropertyHeldInTrust>;
  matterTrustAccount?: vwCreateClientTrustAccount;
  matterTrustOnlyAccounts?: null | Array<vwTrustName>;
  personFormBuilder?: vwContactFormBuilder;
  uniqueNumber?: null | number;
  uploadDocuments?: null | Array<vwDMSUpload>;
  vwDisbursementRate?: null | Array<DisbursementRate>;
}
