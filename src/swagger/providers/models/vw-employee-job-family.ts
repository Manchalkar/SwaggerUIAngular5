/* tslint:disable */
import { vwRateTableJobfamily } from './vw-rate-table-jobfamily';
export interface vwEmployeeJobFamily  {
  baseRate?: null | number;
  id?: number;
  name?: null | string;
  numberOfEmployee?: number;
  rateTableJobfamilies?: null | Array<vwRateTableJobfamily>;
  targetHour?: null | number;
}
