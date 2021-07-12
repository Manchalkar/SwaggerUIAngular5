/* tslint:disable */
import { UserRole } from './user-role';
import { vwIdNameEmail } from './vw-id-name-email';
export interface vwNote  {
  applicableDate?: null | string;
  content?: null | string;
  createdBy?: vwIdNameEmail;
  id?: number;
  isVisibleToClient?: boolean;
  lastUpdated?: string;
  lastUpdater?: vwIdNameEmail;
  name: null | string;
  noteType?: null | string;
  rivisionNumber?: null | number;
  usersRole?: UserRole;
}
