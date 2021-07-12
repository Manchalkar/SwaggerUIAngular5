/* tslint:disable */
import { ClientMatter } from './client-matter';
import { DocumentSignNowInvite } from './document-sign-now-invite';
import { FillableTemplateSupportedFileTypes } from './fillable-template-supported-file-types';
export interface FinalizeCreateDoc  {
  cancelSelected?: boolean;
  clientMatters?: null | Array<ClientMatter>;
  containsESignatureFields?: boolean;
  emailBody?: null | string;
  emailSubject?: null | string;
  endDateTime?: string;
  fileId: number;
  fillableTemplateSupportedFileType: FillableTemplateSupportedFileTypes;
  isDefaultEmail?: boolean;
  matterFolderId?: number;
  name?: null | string;
  performValidation?: boolean;
  previewSelected?: boolean;
  selectedEmployeeId?: number;
  selectedEventId?: number;
  selectedOfficeId?: number;
  sendEmailSelected?: boolean;
  sendforEsignarure?: boolean;
  startDateTime?: string;
  viewModel?: DocumentSignNowInvite;
}
