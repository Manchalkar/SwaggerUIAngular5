/* tslint:disable */
import { vwIdCodeName } from './vw-id-code-name';
import { vwIdName } from './vw-id-name';
export interface vwRateFull  {
  billingTo: vwIdCodeName;
  billingType: vwIdCodeName;
  changeNotes?: null | string;
  code?: null | string;
  createdAt?: null | string;
  createdBy?: null | string;
  customRateAmount?: null | number;
  description: null | string;
  id?: number;
  isCustom?: null | boolean;
  matter?: vwIdName;
  needUpdate?: boolean;
  office?: vwIdName;
  person?: vwIdName;
  rateAmount: null | number;
  status?: null | string;
  tenant?: vwIdName;
}
