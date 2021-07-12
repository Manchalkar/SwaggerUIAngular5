/* tslint:disable */
import { vwIdCodeName } from './vw-id-code-name';
import { vwIdName } from './vw-id-name';
export interface DisbursementRate  {
  billType: vwIdCodeName;
  changeNotes?: null | string;
  code?: null | string;
  createdAt?: null | string;
  createdBy?: null | string;
  customRate?: null | number;
  description: null | string;
  id?: number;
  isBillableToClient: null | boolean;
  isCustom?: null | boolean;
  isNew?: boolean;
  matter?: vwIdName;
  office?: vwIdName;
  person?: vwIdName;
  rate?: null | number;
  status?: null | string;
  tenant?: vwIdName;
  type: vwIdCodeName;
}
