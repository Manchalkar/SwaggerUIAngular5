/* tslint:disable */
import { vwAttorneyOffice } from './vw-attorney-office';
import { vwPersonPhone } from './vw-person-phone';
export interface vwAttorneyViewModel  {
  clientName?: null | string;
  company?: null | string;
  conflictObject?: null | string;
  doNotContact?: null | boolean;
  doNotContactReason?: null | string;
  email?: null | string;
  firstName?: null | string;
  id?: number;
  isCompany?: null | boolean;
  isPrimary?: boolean;
  jobTitle?: null | string;
  lastName?: null | string;
  marketingEmail?: null | boolean;
  marketingSMS?: null | boolean;
  matterName?: null | string;
  notifyEmail?: null | boolean;
  notifySMS?: null | boolean;
  office?: vwAttorneyOffice;
  phones?: null | Array<vwPersonPhone>;
  preferredContactMethod?: null | string;
  sort?: number;
  status?: null | string;
  type?: null | string;
}
