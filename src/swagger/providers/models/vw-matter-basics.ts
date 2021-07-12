/* tslint:disable */
import { vwAddCourt } from './vw-add-court';
export interface vwMatterBasics  {
  caseNumbers?: null | string;
  casePhaseId?: null | number;
  clientId?: null | number;
  closeDate?: null | string;
  contingentCase?: null | boolean;
  id?: number;
  isFixedFee?: null | boolean;
  isPlaintiff?: null | boolean;
  isWorkComplete?: null | boolean;
  jurisdictionCounty?: null | string;
  jurisdictionDetails?: vwAddCourt;
  jurisdictionStateId?: null | number;
  matterTypeId: null | number;
  name?: null | string;
  officeId?: null | number;
  openDate?: null | string;
  statusId?: null | number;
  trustExecutionDate?: null | string;
  trustName?: null | string;
}
