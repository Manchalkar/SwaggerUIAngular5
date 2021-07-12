/* tslint:disable */
import { vwAddCourt } from './vw-add-court';
export interface ClientMatterDetails  {
  caseNumbers?: null | string;
  contingentCase?: null | boolean;
  customMatterNumber?: null | string;
  isFixedFee?: null | boolean;
  juridictionCounty?: null | string;
  juridictionState?: null | number;
  jurisdictionDetails?: vwAddCourt;
  matterName?: null | string;
  matterNumber?: null | number;
  matterOpenDate?: string;
  matterTypeId: null | number;
  practiceId: null | number;
  primaryLawOffice?: null | number;
  trustExecutionDate?: null | string;
  trustName?: null | string;
}
