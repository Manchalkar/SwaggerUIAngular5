/* tslint:disable */
import { DocumentSignNowMailTo } from './document-sign-now-mail-to';
export interface DocumentSignNowInvite  {
  documentId?: number;
  from?: null | string;
  isForceProceed?: boolean;
  isOutforSignature?: null | boolean;
  message?: null | string;
  subject?: null | string;
  to?: null | Array<DocumentSignNowMailTo>;
}
