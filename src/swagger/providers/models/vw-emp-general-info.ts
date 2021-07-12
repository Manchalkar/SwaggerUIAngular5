/* tslint:disable */
import { EmployeeType } from './employee-type';
import { vwIdName } from './vw-id-name';
import { vwIdNameNullable } from './vw-id-name-nullable';
import { vwPersonPhone } from './vw-person-phone';
export interface vwEmpGeneralInfo  {
  approvingManager?: vwIdNameNullable;
  commonName?: null | string;
  doNotSchedule?: null | boolean;
  email?: null | string;
  employeeType?: EmployeeType;
  employmentEndDate?: null | string;
  employmentStartDate?: null | string;
  federalJurisdictions?: null | Array<vwIdName>;
  firstName?: null | string;
  groups?: null | Array<vwIdName>;
  id?: number;
  initialConsultPracticeAreas?: null | Array<vwIdName>;
  isClientAssignment?: null | boolean;
  isEventVisibleToOther?: null | boolean;
  isInitialConsultation?: null | boolean;
  isSkipCalendarIntegration?: null | boolean;
  jobFamily?: null | number;
  jobTitle?: null | string;
  lastName?: null | string;
  maidenName?: null | string;
  middleName?: null | string;
  nickName?: null | string;
  phones?: null | Array<vwPersonPhone>;
  practiceManager?: vwIdNameNullable;
  primaryOffice?: vwIdNameNullable;
  reportingManager?: vwIdNameNullable;
  retainerPracticeAreas?: null | Array<vwIdName>;
  secondaryOffices?: null | Array<vwIdName>;
  states?: null | Array<vwIdName>;
}
