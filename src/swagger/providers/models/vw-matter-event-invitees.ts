/* tslint:disable */
import { vwFullPerson } from './vw-full-person';
import { vwIdCodeName } from './vw-id-code-name';
export interface vwMatterEventInvitees  {
  acceptStatus?: vwIdCodeName;
  displayName?: null | string;
  displayRedirect?: null | string;
  displayRole?: null | string;
  doNotContact?: boolean;
  doNotSchedule?: boolean;
  id?: number;
  inviteeType?: vwIdCodeName;
  isHost?: null | boolean;
  isOptional?: null | boolean;
  isOrganiser?: null | boolean;
  isRequired?: null | boolean;
  matterEventId?: number;
  meetingTypeId?: null | number;
  person?: vwFullPerson;
  personEmail?: null | string;
  personPhoto?: null | string;
  role?: null | string;
}
