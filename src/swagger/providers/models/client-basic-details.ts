/* tslint:disable */
import { ClientCorporateContactDetails } from './client-corporate-contact-details';
export interface ClientBasicDetails  {
  cellPhoneNumber?: null | string;
  companyName?: null | string;
  consultLawOffice?: null | number;
  contactType: null | string;
  corporateContacts?: null | Array<ClientCorporateContactDetails>;
  doNotContact?: null | boolean;
  doNotContactReason?: null | string;
  doNotContactReasonOther?: null | string;
  email?: null | string;
  firstName?: null | string;
  formerName?: null | string;
  gender?: null | string;
  initialConsultDate?: null | string;
  initialContactDate: null | string;
  lastName?: null | string;
  middleName?: null | string;
  notifyEmailCase?: null | boolean;
  notifyEmailMarketing?: null | boolean;
  notifySMSCase?: null | boolean;
  notifySMSMarketing?: null | boolean;
  preferredContactMethod?: null | string;
  primaryAddress: null | string;
  primaryAddress2?: null | string;
  primaryCity: null | string;
  primaryLawOffice?: null | number;
  primaryPhoneNumber?: null | string;
  primaryState: null | string;
  primaryZipCode: null | string;
  salutation?: null | string;
  suffix?: null | string;
}
