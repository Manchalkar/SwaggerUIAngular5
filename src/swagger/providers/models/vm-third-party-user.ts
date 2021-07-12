/* tslint:disable */
import { ThirdPartyUserPermission } from './third-party-user-permission';
export interface vmThirdPartyUser  {
  cellPhoneNo?: null | string;
  clientId?: number;
  email?: null | string;
  fullName?: null | string;
  matterId?: number;
  personId?: number;
  userPermission?: null | Array<ThirdPartyUserPermission>;
}
