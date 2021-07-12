/* tslint:disable */
import { vwIdName } from './vw-id-name';
export interface vwPerson  {
  AddressId?: null | number;
  CellPhone?: null | string;
  CommonName?: null | string;
  CompanyName?: null | string;
  Email?: null | string;
  EmploymentEndDate?: null | string;
  EmploymentStartDate?: null | string;
  Fax?: null | string;
  FirstName?: null | string;
  Id?: number;
  IndividualCompanyName?: null | string;
  IsCompany?: null | boolean;
  JobTitle?: null | string;
  LastName?: null | string;
  MaidenName?: null | string;
  MiddleName?: null | string;
  NickName?: null | string;
  OfficeId?: null | number;
  PreferredContactMethod?: null | string;
  PrimaryContactId?: null | number;
  PrimaryPhone?: null | string;
  Role?: null | string;
  Salutation?: null | string;
  Suffix?: null | string;
  TenantId?: null | number;
  customUniqueNumber?: null | string;
  empTimezone?: null | string;
  groups?: null | Array<vwIdName>;
  isArchived?: boolean;
  isDaylightSaving?: boolean;
  isSkipCalendarIntegration?: null | boolean;
  isVisible?: boolean;
  password?: null | string;
  uniqueNumber?: null | number;
  userName?: null | string;
}
