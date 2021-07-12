/* tslint:disable */
import { ClientAssociationSecurityGroup } from './client-association-security-group';
import { ExternalUser } from './external-user';
export interface clsGrantDocumentAccess  {
  clientAssociationIds?: null | Array<ClientAssociationSecurityGroup>;
  clientIds?: null | Array<number>;
  expirationDate?: null | string;
  externalUsers?: null | Array<ExternalUser>;
  fileIds?: null | Array<number>;
  folderId?: null | Array<number>;
}
