/* tslint:disable */
import { DmsFileStatus } from './dms-file-status';
export interface vwDMSUpload  {
  clientId?: number;
  commaCategories?: null | string;
  containsESignatureFields?: boolean;
  dmsFileStatus?: DmsFileStatus;
  documentName?: null | string;
  folderName?: null | string;
  isClientFolder?: boolean;
  isDraftingTemplate?: boolean;
  isFillableTemplate?: boolean;
  isMatterFolder?: boolean;
  matterId?: number;
  originalFileName?: null | string;
  ownerId?: number;
  quarantinePath?: null | string;
  status?: null | string;
  uniqueFileName?: null | string;
}
