/* tslint:disable */
import { vwAttorneyViewModel } from './vw-attorney-view-model';
export interface vwMatterAlert  {
  content?: null | string;
  createdAt?: null | string;
  createdBy?: vwAttorneyViewModel;
  effectiveDate?: null | string;
  expirationDate?: null | string;
  id?: number;
  matterId: number;
  priorityId?: null | number;
  status?: null | string;
  statusId?: null | number;
  title: null | string;
}
