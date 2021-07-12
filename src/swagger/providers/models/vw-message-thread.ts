/* tslint:disable */
import { vwMessage } from './vw-message';
export interface vwMessageThread  {
  id?: number;
  matterId?: number;
  messages?: null | Array<vwMessage>;
  subject?: null | string;
}
