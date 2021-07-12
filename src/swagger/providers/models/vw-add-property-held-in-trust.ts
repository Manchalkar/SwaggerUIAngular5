/* tslint:disable */
import { vwPropertyHeldInTrustItem } from './vw-property-held-in-trust-item';
export interface vwAddPropertyHeldInTrust  {
  clientId: number;
  id?: null | number;
  matterId?: number;
  propertyLineItems?: null | Array<vwPropertyHeldInTrustItem>;
  trustName: null | string;
  trustNumber: number;
}
