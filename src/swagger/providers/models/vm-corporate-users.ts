/* tslint:disable */
import { ThirdPartyUserPermission } from './third-party-user-permission';
export interface vmCorporateUsers  {
  clientId?: number;
  matterId?: number;
  personId?: number;
  userPermission?: null | Array<ThirdPartyUserPermission>;
}
