/* tslint:disable */
import { vwAddress } from './vw-address';
import { vwPersonPhone } from './vw-person-phone';
export interface vwClientContactdto  {
  address?: vwAddress;
  email?: null | string;
  id?: number;
  phones?: null | Array<vwPersonPhone>;
}
