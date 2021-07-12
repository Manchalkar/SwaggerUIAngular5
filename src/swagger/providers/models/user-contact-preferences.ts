/* tslint:disable */
import { vwPersonPhone } from './vw-person-phone';
export interface UserContactPreferences  {
  doNotContact?: boolean;
  doNotContactReason?: null | string;
  email?: null | string;
  fullName?: null | string;
  notifyByEmail?: boolean;
  notifyBySMS?: boolean;
  personId?: number;
  phoneNumber?: null | Array<vwPersonPhone>;
}
