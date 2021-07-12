/* tslint:disable */
import { vwIdCodeName } from './vw-id-code-name';
import { vwIdName } from './vw-id-name';
export interface vwClientPortalTask  {
  createdAt?: null | string;
  description?: null | string;
  dueDate?: null | string;
  id?: number;
  isCreatedByEmployee?: boolean;
  matter?: vwIdName;
  matterId?: number;
  personId?: number;
  taskStatus?: vwIdCodeName;
}
