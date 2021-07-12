/* tslint:disable */
import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { BaseService } from '../base-service';
import { ApiConfiguration } from '../api-configuration';
import { StrictHttpResponse } from '../strict-http-response';
import { RequestBuilder } from '../request-builder';
import { Observable } from 'rxjs';
import { map, filter } from 'rxjs/operators';

import { DmsFileStatus } from '../models/dms-file-status';
import { vwApproveOrReject } from '../models/vw-approve-or-reject';
import { vwSharedFileType } from '../models/vw-shared-file-type';

@Injectable({
  providedIn: 'root',
})
export class DocumentPortalService extends BaseService {
  constructor(
    config: ApiConfiguration,
    http: HttpClient
  ) {
    super(config, http);
  }

  /**
   * Path part for operation v1DocumentPortalSendDocumentPost
   */
  static readonly V1DocumentPortalSendDocumentPostPath = '/v1/DocumentPortal/SendDocument';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `v1DocumentPortalSendDocumentPost()` instead.
   *
   * This method sends `multipart/form-data` and handles response body of type `multipart/form-data`
   */
  v1DocumentPortalSendDocumentPost$Response(params?: {
    id?: number;
    folderId?: number;
    nameOfFile?: string;
    status?: string;
    isDraftingTemplate?: boolean;
    isFillableTemplate?: boolean;
    containsESignatureFields?: boolean;
    ownerId?: number;
    commaCategories?: string;
    dmsFileStatus?: DmsFileStatus;
    quarantinePath?: string;
    originalFileName?: string;
    coOwnerId?: Array<number>;
    description?: string;
    isFromDmsPortal?: boolean;

    body?: { 'ContentType': string, 'ContentDisposition': string, 'Headers': { [key: string]: Array<string> }, 'Length': number, 'Name': string, 'FileName': string }
  }): Observable<StrictHttpResponse<void>> {

    const rb = new RequestBuilder(this.rootUrl, DocumentPortalService.V1DocumentPortalSendDocumentPostPath, 'post');
    if (params) {

      rb.query('Id', params.id);
      rb.query('FolderId', params.folderId);
      rb.query('NameOfFile', params.nameOfFile);
      rb.query('Status', params.status);
      rb.query('IsDraftingTemplate', params.isDraftingTemplate);
      rb.query('IsFillableTemplate', params.isFillableTemplate);
      rb.query('ContainsESignatureFields', params.containsESignatureFields);
      rb.query('OwnerId', params.ownerId);
      rb.query('CommaCategories', params.commaCategories);
      rb.query('DmsFileStatus', params.dmsFileStatus);
      rb.query('QuarantinePath', params.quarantinePath);
      rb.query('OriginalFileName', params.originalFileName);
      rb.query('CoOwnerId', params.coOwnerId);
      rb.query('Description', params.description);
      rb.query('isFromDmsPortal', params.isFromDmsPortal);

      rb.body(params.body, 'multipart/form-data');
    }
    return this.http.request(rb.build({
      responseType: 'text',
      accept: '*/*'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return (r as HttpResponse<any>).clone({ body: undefined }) as StrictHttpResponse<void>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `v1DocumentPortalSendDocumentPost$Response()` instead.
   *
   * This method sends `multipart/form-data` and handles response body of type `multipart/form-data`
   */
  v1DocumentPortalSendDocumentPost(params?: {
    id?: number;
    folderId?: number;
    nameOfFile?: string;
    status?: string;
    isDraftingTemplate?: boolean;
    isFillableTemplate?: boolean;
    containsESignatureFields?: boolean;
    ownerId?: number;
    commaCategories?: string;
    dmsFileStatus?: DmsFileStatus;
    quarantinePath?: string;
    originalFileName?: string;
    coOwnerId?: Array<number>;
    description?: string;
    isFromDmsPortal?: boolean;

    body?: { 'ContentType': string, 'ContentDisposition': string, 'Headers': { [key: string]: Array<string> }, 'Length': number, 'Name': string, 'FileName': string }
  }): Observable<void> {

    return this.v1DocumentPortalSendDocumentPost$Response(params).pipe(
      map((r: StrictHttpResponse<void>) => r.body as void)
    );
  }

  /**
   * Path part for operation v1DocumentPortalSendDocumentNewPost
   */
  static readonly V1DocumentPortalSendDocumentNewPostPath = '/v1/DocumentPortal/SendDocument_new';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `v1DocumentPortalSendDocumentNewPost()` instead.
   *
   * This method sends `multipart/form-data` and handles response body of type `multipart/form-data`
   */
  v1DocumentPortalSendDocumentNewPost$Response(params?: {
    id?: number;
    folderId?: number;
    nameOfFile?: string;
    status?: string;
    isDraftingTemplate?: boolean;
    isFillableTemplate?: boolean;
    containsESignatureFields?: boolean;
    ownerId?: number;
    commaCategories?: string;
    dmsFileStatus?: DmsFileStatus;
    quarantinePath?: string;
    originalFileName?: string;
    coOwnerId?: Array<number>;
    description?: string;

    body?: { 'ContentType': string, 'ContentDisposition': string, 'Headers': { [key: string]: Array<string> }, 'Length': number, 'Name': string, 'FileName': string }
  }): Observable<StrictHttpResponse<void>> {

    const rb = new RequestBuilder(this.rootUrl, DocumentPortalService.V1DocumentPortalSendDocumentNewPostPath, 'post');
    if (params) {

      rb.query('Id', params.id);
      rb.query('FolderId', params.folderId);
      rb.query('NameOfFile', params.nameOfFile);
      rb.query('Status', params.status);
      rb.query('IsDraftingTemplate', params.isDraftingTemplate);
      rb.query('IsFillableTemplate', params.isFillableTemplate);
      rb.query('ContainsESignatureFields', params.containsESignatureFields);
      rb.query('OwnerId', params.ownerId);
      rb.query('CommaCategories', params.commaCategories);
      rb.query('DmsFileStatus', params.dmsFileStatus);
      rb.query('QuarantinePath', params.quarantinePath);
      rb.query('OriginalFileName', params.originalFileName);
      rb.query('CoOwnerId', params.coOwnerId);
      rb.query('Description', params.description);

      rb.body(params.body, 'multipart/form-data');
    }
    return this.http.request(rb.build({
      responseType: 'text',
      accept: '*/*'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return (r as HttpResponse<any>).clone({ body: undefined }) as StrictHttpResponse<void>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `v1DocumentPortalSendDocumentNewPost$Response()` instead.
   *
   * This method sends `multipart/form-data` and handles response body of type `multipart/form-data`
   */
  v1DocumentPortalSendDocumentNewPost(params?: {
    id?: number;
    folderId?: number;
    nameOfFile?: string;
    status?: string;
    isDraftingTemplate?: boolean;
    isFillableTemplate?: boolean;
    containsESignatureFields?: boolean;
    ownerId?: number;
    commaCategories?: string;
    dmsFileStatus?: DmsFileStatus;
    quarantinePath?: string;
    originalFileName?: string;
    coOwnerId?: Array<number>;
    description?: string;

    body?: { 'ContentType': string, 'ContentDisposition': string, 'Headers': { [key: string]: Array<string> }, 'Length': number, 'Name': string, 'FileName': string }
  }): Observable<void> {

    return this.v1DocumentPortalSendDocumentNewPost$Response(params).pipe(
      map((r: StrictHttpResponse<void>) => r.body as void)
    );
  }

  /**
   * Path part for operation v1DocumentPortalSearchGet
   */
  static readonly V1DocumentPortalSearchGetPath = '/v1/DocumentPortal/Search';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `v1DocumentPortalSearchGet()` instead.
   *
   * This method doesn't expect any response body
   */
  v1DocumentPortalSearchGet$Response(params?: {
    search?: string;

  }): Observable<StrictHttpResponse<void>> {

    const rb = new RequestBuilder(this.rootUrl, DocumentPortalService.V1DocumentPortalSearchGetPath, 'get');
    if (params) {

      rb.query('search', params.search);

    }
    return this.http.request(rb.build({
      responseType: 'text',
      accept: '*/*'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return (r as HttpResponse<any>).clone({ body: undefined }) as StrictHttpResponse<void>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `v1DocumentPortalSearchGet$Response()` instead.
   *
   * This method doesn't expect any response body
   */
  v1DocumentPortalSearchGet(params?: {
    search?: string;

  }): Observable<void> {

    return this.v1DocumentPortalSearchGet$Response(params).pipe(
      map((r: StrictHttpResponse<void>) => r.body as void)
    );
  }

  /**
   * Path part for operation v1DocumentPortalCheckExistingFileGet
   */
  static readonly V1DocumentPortalCheckExistingFileGetPath = '/v1/DocumentPortal/CheckExistingFile';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `v1DocumentPortalCheckExistingFileGet()` instead.
   *
   * This method doesn't expect any response body
   */
  v1DocumentPortalCheckExistingFileGet$Response(params?: {
    id?: number;
    name?: string;
    statusId?: number;
    statusName?: string;

  }): Observable<StrictHttpResponse<void>> {

    const rb = new RequestBuilder(this.rootUrl, DocumentPortalService.V1DocumentPortalCheckExistingFileGetPath, 'get');
    if (params) {

      rb.query('Id', params.id);
      rb.query('Name', params.name);
      rb.query('StatusId', params.statusId);
      rb.query('StatusName', params.statusName);

    }
    return this.http.request(rb.build({
      responseType: 'text',
      accept: '*/*'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return (r as HttpResponse<any>).clone({ body: undefined }) as StrictHttpResponse<void>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `v1DocumentPortalCheckExistingFileGet$Response()` instead.
   *
   * This method doesn't expect any response body
   */
  v1DocumentPortalCheckExistingFileGet(params?: {
    id?: number;
    name?: string;
    statusId?: number;
    statusName?: string;

  }): Observable<void> {

    return this.v1DocumentPortalCheckExistingFileGet$Response(params).pipe(
      map((r: StrictHttpResponse<void>) => r.body as void)
    );
  }

  /**
   * Path part for operation v1DocumentPortalDeleteDocumentDelete
   */
  static readonly V1DocumentPortalDeleteDocumentDeletePath = '/v1/DocumentPortal/DeleteDocument';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `v1DocumentPortalDeleteDocumentDelete()` instead.
   *
   * This method doesn't expect any response body
   */
  v1DocumentPortalDeleteDocumentDelete$Response(params?: {
    personId?: number;
    fileId?: number;
    isMatterFolder?: boolean;

  }): Observable<StrictHttpResponse<void>> {

    const rb = new RequestBuilder(this.rootUrl, DocumentPortalService.V1DocumentPortalDeleteDocumentDeletePath, 'delete');
    if (params) {

      rb.query('personId', params.personId);
      rb.query('fileId', params.fileId);
      rb.query('isMatterFolder', params.isMatterFolder);

    }
    return this.http.request(rb.build({
      responseType: 'text',
      accept: '*/*'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return (r as HttpResponse<any>).clone({ body: undefined }) as StrictHttpResponse<void>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `v1DocumentPortalDeleteDocumentDelete$Response()` instead.
   *
   * This method doesn't expect any response body
   */
  v1DocumentPortalDeleteDocumentDelete(params?: {
    personId?: number;
    fileId?: number;
    isMatterFolder?: boolean;

  }): Observable<void> {

    return this.v1DocumentPortalDeleteDocumentDelete$Response(params).pipe(
      map((r: StrictHttpResponse<void>) => r.body as void)
    );
  }

  /**
   * Path part for operation v1DocumentPortalMattersClientRootFolderExternalUserExternalUserIdGet
   */
  static readonly V1DocumentPortalMattersClientRootFolderExternalUserExternalUserIdGetPath = '/v1/DocumentPortal/Matters/ClientRootFolder/ExternalUser/{externalUserId}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `v1DocumentPortalMattersClientRootFolderExternalUserExternalUserIdGet()` instead.
   *
   * This method doesn't expect any response body
   */
  v1DocumentPortalMattersClientRootFolderExternalUserExternalUserIdGet$Response(params: {
    externalUserId: number;

  }): Observable<StrictHttpResponse<void>> {

    const rb = new RequestBuilder(this.rootUrl, DocumentPortalService.V1DocumentPortalMattersClientRootFolderExternalUserExternalUserIdGetPath, 'get');
    if (params) {

      rb.path('externalUserId', params.externalUserId);

    }
    return this.http.request(rb.build({
      responseType: 'text',
      accept: '*/*'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return (r as HttpResponse<any>).clone({ body: undefined }) as StrictHttpResponse<void>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `v1DocumentPortalMattersClientRootFolderExternalUserExternalUserIdGet$Response()` instead.
   *
   * This method doesn't expect any response body
   */
  v1DocumentPortalMattersClientRootFolderExternalUserExternalUserIdGet(params: {
    externalUserId: number;

  }): Observable<void> {

    return this.v1DocumentPortalMattersClientRootFolderExternalUserExternalUserIdGet$Response(params).pipe(
      map((r: StrictHttpResponse<void>) => r.body as void)
    );
  }

  /**
   * Path part for operation v1DocumentPortalApproveOrRejectDocumentsFileIdPut
   */
  static readonly V1DocumentPortalApproveOrRejectDocumentsFileIdPutPath = '/v1/DocumentPortal/ApproveOrRejectDocuments/{fileId}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `v1DocumentPortalApproveOrRejectDocumentsFileIdPut$Json()` instead.
   *
   * This method sends `application/json` and handles response body of type `application/json`
   */
  v1DocumentPortalApproveOrRejectDocumentsFileIdPut$Json$Response(params: {
    fileId: number;

    body?: vwApproveOrReject
  }): Observable<StrictHttpResponse<void>> {

    const rb = new RequestBuilder(this.rootUrl, DocumentPortalService.V1DocumentPortalApproveOrRejectDocumentsFileIdPutPath, 'put');
    if (params) {

      rb.path('fileId', params.fileId);

      rb.body(params.body, 'application/json');
    }
    return this.http.request(rb.build({
      responseType: 'text',
      accept: '*/*'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return (r as HttpResponse<any>).clone({ body: undefined }) as StrictHttpResponse<void>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `v1DocumentPortalApproveOrRejectDocumentsFileIdPut$Json$Response()` instead.
   *
   * This method sends `application/json` and handles response body of type `application/json`
   */
  v1DocumentPortalApproveOrRejectDocumentsFileIdPut$Json(params: {
    fileId: number;

    body?: vwApproveOrReject
  }): Observable<void> {

    return this.v1DocumentPortalApproveOrRejectDocumentsFileIdPut$Json$Response(params).pipe(
      map((r: StrictHttpResponse<void>) => r.body as void)
    );
  }

  /**
   * Path part for operation v1DocumentPortalFilesHashedFileIdGet
   */
  static readonly V1DocumentPortalFilesHashedFileIdGetPath = '/v1/DocumentPortal/files/{hashedFileId}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `v1DocumentPortalFilesHashedFileIdGet()` instead.
   *
   * This method doesn't expect any response body
   */
  v1DocumentPortalFilesHashedFileIdGet$Response(params: {
    hashedFileId: string;

  }): Observable<StrictHttpResponse<void>> {

    const rb = new RequestBuilder(this.rootUrl, DocumentPortalService.V1DocumentPortalFilesHashedFileIdGetPath, 'get');
    if (params) {

      rb.path('hashedFileId', params.hashedFileId);

    }
    return this.http.request(rb.build({
      responseType: 'text',
      accept: '*/*'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return (r as HttpResponse<any>).clone({ body: undefined }) as StrictHttpResponse<void>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `v1DocumentPortalFilesHashedFileIdGet$Response()` instead.
   *
   * This method doesn't expect any response body
   */
  v1DocumentPortalFilesHashedFileIdGet(params: {
    hashedFileId: string;

  }): Observable<void> {

    return this.v1DocumentPortalFilesHashedFileIdGet$Response(params).pipe(
      map((r: StrictHttpResponse<void>) => r.body as void)
    );
  }

  /**
   * Path part for operation v1DocumentPortalIsDocumentPortalExistPersonIdGet
   */
  static readonly V1DocumentPortalIsDocumentPortalExistPersonIdGetPath = '/v1/DocumentPortal/IsDocumentPortalExist/{personId}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `v1DocumentPortalIsDocumentPortalExistPersonIdGet()` instead.
   *
   * This method doesn't expect any response body
   */
  v1DocumentPortalIsDocumentPortalExistPersonIdGet$Response(params: {
    personId: number;

  }): Observable<StrictHttpResponse<void>> {

    const rb = new RequestBuilder(this.rootUrl, DocumentPortalService.V1DocumentPortalIsDocumentPortalExistPersonIdGetPath, 'get');
    if (params) {

      rb.path('personId', params.personId);

    }
    return this.http.request(rb.build({
      responseType: 'text',
      accept: '*/*'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return (r as HttpResponse<any>).clone({ body: undefined }) as StrictHttpResponse<void>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `v1DocumentPortalIsDocumentPortalExistPersonIdGet$Response()` instead.
   *
   * This method doesn't expect any response body
   */
  v1DocumentPortalIsDocumentPortalExistPersonIdGet(params: {
    personId: number;

  }): Observable<void> {

    return this.v1DocumentPortalIsDocumentPortalExistPersonIdGet$Response(params).pipe(
      map((r: StrictHttpResponse<void>) => r.body as void)
    );
  }

  /**
   * Path part for operation v1DocumentPortalScanClientOrMatterFilesPost
   */
  static readonly V1DocumentPortalScanClientOrMatterFilesPostPath = '/v1/DocumentPortal/Scan/ClientOrMatter/Files';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `v1DocumentPortalScanClientOrMatterFilesPost()` instead.
   *
   * This method sends `multipart/form-data` and handles response body of type `multipart/form-data`
   */
  v1DocumentPortalScanClientOrMatterFilesPost$Response(params?: {
    documentName?: string;
    status?: string;
    dmsFileStatus?: DmsFileStatus;
    quarantinePath?: string;
    originalFileName?: string;

    body?: { 'ContentType': string, 'ContentDisposition': string, 'Headers': { [key: string]: Array<string> }, 'Length': number, 'Name': string, 'FileName': string }
  }): Observable<StrictHttpResponse<void>> {

    const rb = new RequestBuilder(this.rootUrl, DocumentPortalService.V1DocumentPortalScanClientOrMatterFilesPostPath, 'post');
    if (params) {

      rb.query('DocumentName', params.documentName);
      rb.query('Status', params.status);
      rb.query('DMSFileStatus', params.dmsFileStatus);
      rb.query('QuarantinePath', params.quarantinePath);
      rb.query('OriginalFileName', params.originalFileName);

      rb.body(params.body, 'multipart/form-data');
    }
    return this.http.request(rb.build({
      responseType: 'text',
      accept: '*/*'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return (r as HttpResponse<any>).clone({ body: undefined }) as StrictHttpResponse<void>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `v1DocumentPortalScanClientOrMatterFilesPost$Response()` instead.
   *
   * This method sends `multipart/form-data` and handles response body of type `multipart/form-data`
   */
  v1DocumentPortalScanClientOrMatterFilesPost(params?: {
    documentName?: string;
    status?: string;
    dmsFileStatus?: DmsFileStatus;
    quarantinePath?: string;
    originalFileName?: string;

    body?: { 'ContentType': string, 'ContentDisposition': string, 'Headers': { [key: string]: Array<string> }, 'Length': number, 'Name': string, 'FileName': string }
  }): Observable<void> {

    return this.v1DocumentPortalScanClientOrMatterFilesPost$Response(params).pipe(
      map((r: StrictHttpResponse<void>) => r.body as void)
    );
  }

  /**
   * Path part for operation v1DocumentPortalUploadClientOrMatterFilesPost
   */
  static readonly V1DocumentPortalUploadClientOrMatterFilesPostPath = '/v1/DocumentPortal/Upload/ClientOrMatter/Files';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `v1DocumentPortalUploadClientOrMatterFilesPost()` instead.
   *
   * This method doesn't expect any response body
   */
  v1DocumentPortalUploadClientOrMatterFilesPost$Response(params?: {
    documentName?: string;
    folderName?: string;
    status?: string;
    isDraftingTemplate?: boolean;
    isFillableTemplate?: boolean;
    containsESignatureFields?: boolean;
    ownerId?: number;
    commaCategories?: string;
    dmsFileStatus?: DmsFileStatus;
    quarantinePath?: string;
    originalFileName?: string;
    uniqueFileName?: string;
    matterId?: number;
    clientId?: number;
    isMatterFolder?: boolean;
    isClientFolder?: boolean;

  }): Observable<StrictHttpResponse<void>> {

    const rb = new RequestBuilder(this.rootUrl, DocumentPortalService.V1DocumentPortalUploadClientOrMatterFilesPostPath, 'post');
    if (params) {

      rb.query('DocumentName', params.documentName);
      rb.query('FolderName', params.folderName);
      rb.query('Status', params.status);
      rb.query('IsDraftingTemplate', params.isDraftingTemplate);
      rb.query('IsFillableTemplate', params.isFillableTemplate);
      rb.query('ContainsESignatureFields', params.containsESignatureFields);
      rb.query('OwnerId', params.ownerId);
      rb.query('CommaCategories', params.commaCategories);
      rb.query('DMSFileStatus', params.dmsFileStatus);
      rb.query('QuarantinePath', params.quarantinePath);
      rb.query('OriginalFileName', params.originalFileName);
      rb.query('UniqueFileName', params.uniqueFileName);
      rb.query('MatterId', params.matterId);
      rb.query('ClientId', params.clientId);
      rb.query('IsMatterFolder', params.isMatterFolder);
      rb.query('IsClientFolder', params.isClientFolder);

    }
    return this.http.request(rb.build({
      responseType: 'text',
      accept: '*/*'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return (r as HttpResponse<any>).clone({ body: undefined }) as StrictHttpResponse<void>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `v1DocumentPortalUploadClientOrMatterFilesPost$Response()` instead.
   *
   * This method doesn't expect any response body
   */
  v1DocumentPortalUploadClientOrMatterFilesPost(params?: {
    documentName?: string;
    folderName?: string;
    status?: string;
    isDraftingTemplate?: boolean;
    isFillableTemplate?: boolean;
    containsESignatureFields?: boolean;
    ownerId?: number;
    commaCategories?: string;
    dmsFileStatus?: DmsFileStatus;
    quarantinePath?: string;
    originalFileName?: string;
    uniqueFileName?: string;
    matterId?: number;
    clientId?: number;
    isMatterFolder?: boolean;
    isClientFolder?: boolean;

  }): Observable<void> {

    return this.v1DocumentPortalUploadClientOrMatterFilesPost$Response(params).pipe(
      map((r: StrictHttpResponse<void>) => r.body as void)
    );
  }

  /**
   * Path part for operation v1DocumentPortalFilesParentFolderHashedFileIdGet
   */
  static readonly V1DocumentPortalFilesParentFolderHashedFileIdGetPath = '/v1/DocumentPortal/files/ParentFolder/{hashedFileId}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `v1DocumentPortalFilesParentFolderHashedFileIdGet()` instead.
   *
   * This method doesn't expect any response body
   */
  v1DocumentPortalFilesParentFolderHashedFileIdGet$Response(params: {
    hashedFileId: string;

  }): Observable<StrictHttpResponse<void>> {

    const rb = new RequestBuilder(this.rootUrl, DocumentPortalService.V1DocumentPortalFilesParentFolderHashedFileIdGetPath, 'get');
    if (params) {

      rb.path('hashedFileId', params.hashedFileId);

    }
    return this.http.request(rb.build({
      responseType: 'text',
      accept: '*/*'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return (r as HttpResponse<any>).clone({ body: undefined }) as StrictHttpResponse<void>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `v1DocumentPortalFilesParentFolderHashedFileIdGet$Response()` instead.
   *
   * This method doesn't expect any response body
   */
  v1DocumentPortalFilesParentFolderHashedFileIdGet(params: {
    hashedFileId: string;

  }): Observable<void> {

    return this.v1DocumentPortalFilesParentFolderHashedFileIdGet$Response(params).pipe(
      map((r: StrictHttpResponse<void>) => r.body as void)
    );
  }

  /**
   * Path part for operation v1DocumentPortalHasAnySharedDocuemntsClientIdGet
   */
  static readonly V1DocumentPortalHasAnySharedDocuemntsClientIdGetPath = '/v1/DocumentPortal/HasAnySharedDocuemnts/{clientId}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `v1DocumentPortalHasAnySharedDocuemntsClientIdGet()` instead.
   *
   * This method doesn't expect any response body
   */
  v1DocumentPortalHasAnySharedDocuemntsClientIdGet$Response(params: {
    clientId: number;

  }): Observable<StrictHttpResponse<void>> {

    const rb = new RequestBuilder(this.rootUrl, DocumentPortalService.V1DocumentPortalHasAnySharedDocuemntsClientIdGetPath, 'get');
    if (params) {

      rb.path('clientId', params.clientId);

    }
    return this.http.request(rb.build({
      responseType: 'text',
      accept: '*/*'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return (r as HttpResponse<any>).clone({ body: undefined }) as StrictHttpResponse<void>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `v1DocumentPortalHasAnySharedDocuemntsClientIdGet$Response()` instead.
   *
   * This method doesn't expect any response body
   */
  v1DocumentPortalHasAnySharedDocuemntsClientIdGet(params: {
    clientId: number;

  }): Observable<void> {

    return this.v1DocumentPortalHasAnySharedDocuemntsClientIdGet$Response(params).pipe(
      map((r: StrictHttpResponse<void>) => r.body as void)
    );
  }

  /**
   * Path part for operation v1DocumentPortalMatterListClientIdGet
   */
  static readonly V1DocumentPortalMatterListClientIdGetPath = '/v1/DocumentPortal/MatterList/{clientId}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `v1DocumentPortalMatterListClientIdGet()` instead.
   *
   * This method doesn't expect any response body
   */
  v1DocumentPortalMatterListClientIdGet$Response(params: {
    clientId: number;

  }): Observable<StrictHttpResponse<void>> {

    const rb = new RequestBuilder(this.rootUrl, DocumentPortalService.V1DocumentPortalMatterListClientIdGetPath, 'get');
    if (params) {

      rb.path('clientId', params.clientId);

    }
    return this.http.request(rb.build({
      responseType: 'text',
      accept: '*/*'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return (r as HttpResponse<any>).clone({ body: undefined }) as StrictHttpResponse<void>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `v1DocumentPortalMatterListClientIdGet$Response()` instead.
   *
   * This method doesn't expect any response body
   */
  v1DocumentPortalMatterListClientIdGet(params: {
    clientId: number;

  }): Observable<void> {

    return this.v1DocumentPortalMatterListClientIdGet$Response(params).pipe(
      map((r: StrictHttpResponse<void>) => r.body as void)
    );
  }

  /**
   * Path part for operation v1DocumentPortalMarkAsReadDmsFileShareIdGet
   */
  static readonly V1DocumentPortalMarkAsReadDmsFileShareIdGetPath = '/v1/DocumentPortal/MarkAsRead/{dmsFileShareId}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `v1DocumentPortalMarkAsReadDmsFileShareIdGet()` instead.
   *
   * This method doesn't expect any response body
   */
  v1DocumentPortalMarkAsReadDmsFileShareIdGet$Response(params: {
    dmsFileShareId: number;

  }): Observable<StrictHttpResponse<void>> {

    const rb = new RequestBuilder(this.rootUrl, DocumentPortalService.V1DocumentPortalMarkAsReadDmsFileShareIdGetPath, 'get');
    if (params) {

      rb.path('dmsFileShareId', params.dmsFileShareId);

    }
    return this.http.request(rb.build({
      responseType: 'text',
      accept: '*/*'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return (r as HttpResponse<any>).clone({ body: undefined }) as StrictHttpResponse<void>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `v1DocumentPortalMarkAsReadDmsFileShareIdGet$Response()` instead.
   *
   * This method doesn't expect any response body
   */
  v1DocumentPortalMarkAsReadDmsFileShareIdGet(params: {
    dmsFileShareId: number;

  }): Observable<void> {

    return this.v1DocumentPortalMarkAsReadDmsFileShareIdGet$Response(params).pipe(
      map((r: StrictHttpResponse<void>) => r.body as void)
    );
  }

  /**
   * Path part for operation v1DocumentPortalFilesSharedFileTypeClientIdGet
   */
  static readonly V1DocumentPortalFilesSharedFileTypeClientIdGetPath = '/v1/DocumentPortal/Files/{sharedFileType}/{clientId}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `v1DocumentPortalFilesSharedFileTypeClientIdGet()` instead.
   *
   * This method doesn't expect any response body
   */
  v1DocumentPortalFilesSharedFileTypeClientIdGet$Response(params: {
    sharedFileType: vwSharedFileType;
    clientId: number;
    matterId?: number;

  }): Observable<StrictHttpResponse<void>> {

    const rb = new RequestBuilder(this.rootUrl, DocumentPortalService.V1DocumentPortalFilesSharedFileTypeClientIdGetPath, 'get');
    if (params) {

      rb.path('sharedFileType', params.sharedFileType);
      rb.path('clientId', params.clientId);
      rb.query('matterId', params.matterId);

    }
    return this.http.request(rb.build({
      responseType: 'text',
      accept: '*/*'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return (r as HttpResponse<any>).clone({ body: undefined }) as StrictHttpResponse<void>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `v1DocumentPortalFilesSharedFileTypeClientIdGet$Response()` instead.
   *
   * This method doesn't expect any response body
   */
  v1DocumentPortalFilesSharedFileTypeClientIdGet(params: {
    sharedFileType: vwSharedFileType;
    clientId: number;
    matterId?: number;

  }): Observable<void> {

    return this.v1DocumentPortalFilesSharedFileTypeClientIdGet$Response(params).pipe(
      map((r: StrictHttpResponse<void>) => r.body as void)
    );
  }

  /**
   * Path part for operation v1DocumentPortalDashboardAccessGet
   */
  static readonly V1DocumentPortalDashboardAccessGetPath = '/v1/DocumentPortal/DashboardAccess';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `v1DocumentPortalDashboardAccessGet()` instead.
   *
   * This method doesn't expect any response body
   */
  v1DocumentPortalDashboardAccessGet$Response(params?: {
    clientId?: number;

  }): Observable<StrictHttpResponse<void>> {

    const rb = new RequestBuilder(this.rootUrl, DocumentPortalService.V1DocumentPortalDashboardAccessGetPath, 'get');
    if (params) {

      rb.query('clientId', params.clientId);

    }
    return this.http.request(rb.build({
      responseType: 'text',
      accept: '*/*'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return (r as HttpResponse<any>).clone({ body: undefined }) as StrictHttpResponse<void>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `v1DocumentPortalDashboardAccessGet$Response()` instead.
   *
   * This method doesn't expect any response body
   */
  v1DocumentPortalDashboardAccessGet(params?: {
    clientId?: number;

  }): Observable<void> {

    return this.v1DocumentPortalDashboardAccessGet$Response(params).pipe(
      map((r: StrictHttpResponse<void>) => r.body as void)
    );
  }

}
