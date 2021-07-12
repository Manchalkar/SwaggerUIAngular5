/* tslint:disable */
import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { BaseService } from '../base-service';
import { ApiConfiguration } from '../api-configuration';
import { StrictHttpResponse } from '../strict-http-response';
import { RequestBuilder } from '../request-builder';
import { Observable } from 'rxjs';
import { map, filter } from 'rxjs/operators';

import { BaseFolder } from '../models/base-folder';
import { DmsFileDetails } from '../models/dms-file-details';
import { DmsFileStatus } from '../models/dms-file-status';
import { DocType } from '../models/doc-type';
import { DocumentSignNowInvite } from '../models/document-sign-now-invite';
import { FileBumpVersionResult } from '../models/file-bump-version-result';
import { FinalizeCreateDoc } from '../models/finalize-create-doc';
import { GrantEmployeeShareRight } from '../models/grant-employee-share-right';
import { InitDocument } from '../models/init-document';
import { InitDocumentResult } from '../models/init-document-result';
import { PracticeAreaFolderOut } from '../models/practice-area-folder-out';
import { PracticeAreasFolderOut } from '../models/practice-areas-folder-out';
import { RevokeShareRights } from '../models/revoke-share-rights';
import { ShareRights } from '../models/share-rights';
import { UserContactPreferences } from '../models/user-contact-preferences';
import { clsGrantDocumentAccess } from '../models/cls-grant-document-access';
import { clsRevokeShareAccess } from '../models/cls-revoke-share-access';
import { vmGetDocumentAccessDetailsInfo } from '../models/vm-get-document-access-details-info';
import { vmValidateEmailAddressInfo } from '../models/vm-validate-email-address-info';
import { vwBulkDownload } from '../models/vw-bulk-download';
import { vwDMSFileProperties } from '../models/vw-dms-file-properties';
import { vwDMSShare } from '../models/vw-dms-share';
import { vwDMSViewersHistory } from '../models/vw-dms-viewers-history';
import { vwDocumentPortalAccountParam } from '../models/vw-document-portal-account-param';
import { vwIdName } from '../models/vw-id-name';
import { vwRevertFile } from '../models/vw-revert-file';

@Injectable({
  providedIn: 'root',
})
export class DmsService extends BaseService {
  constructor(
    config: ApiConfiguration,
    http: HttpClient
  ) {
    super(config, http);
  }

  /**
   * Path part for operation v1DmsPracticeAreasFoldersGet
   */
  static readonly V1DmsPracticeAreasFoldersGetPath = '/v1/DMS/practiceAreas/folders';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `v1DmsPracticeAreasFoldersGet$Plain()` instead.
   *
   * This method doesn't expect any response body
   */
  v1DmsPracticeAreasFoldersGet$Plain$Response(params?: {

  }): Observable<StrictHttpResponse<Array<PracticeAreasFolderOut>>> {

    const rb = new RequestBuilder(this.rootUrl, DmsService.V1DmsPracticeAreasFoldersGetPath, 'get');
    if (params) {


    }
    return this.http.request(rb.build({
      responseType: 'text',
      accept: 'text/plain'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<Array<PracticeAreasFolderOut>>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `v1DmsPracticeAreasFoldersGet$Plain$Response()` instead.
   *
   * This method doesn't expect any response body
   */
  v1DmsPracticeAreasFoldersGet$Plain(params?: {

  }): Observable<Array<PracticeAreasFolderOut>> {

    return this.v1DmsPracticeAreasFoldersGet$Plain$Response(params).pipe(
      map((r: StrictHttpResponse<Array<PracticeAreasFolderOut>>) => r.body as Array<PracticeAreasFolderOut>)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `v1DmsPracticeAreasFoldersGet$Json()` instead.
   *
   * This method doesn't expect any response body
   */
  v1DmsPracticeAreasFoldersGet$Json$Response(params?: {

  }): Observable<StrictHttpResponse<Array<PracticeAreasFolderOut>>> {

    const rb = new RequestBuilder(this.rootUrl, DmsService.V1DmsPracticeAreasFoldersGetPath, 'get');
    if (params) {


    }
    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'application/json'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<Array<PracticeAreasFolderOut>>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `v1DmsPracticeAreasFoldersGet$Json$Response()` instead.
   *
   * This method doesn't expect any response body
   */
  v1DmsPracticeAreasFoldersGet$Json(params?: {

  }): Observable<Array<PracticeAreasFolderOut>> {

    return this.v1DmsPracticeAreasFoldersGet$Json$Response(params).pipe(
      map((r: StrictHttpResponse<Array<PracticeAreasFolderOut>>) => r.body as Array<PracticeAreasFolderOut>)
    );
  }

  /**
   * Path part for operation v1DmsPracticeAreasFoldersaggregateGet
   */
  static readonly V1DmsPracticeAreasFoldersaggregateGetPath = '/v1/DMS/practiceAreas/foldersaggregate';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `v1DmsPracticeAreasFoldersaggregateGet$Plain()` instead.
   *
   * This method doesn't expect any response body
   */
  v1DmsPracticeAreasFoldersaggregateGet$Plain$Response(params?: {

  }): Observable<StrictHttpResponse<Array<PracticeAreasFolderOut>>> {

    const rb = new RequestBuilder(this.rootUrl, DmsService.V1DmsPracticeAreasFoldersaggregateGetPath, 'get');
    if (params) {


    }
    return this.http.request(rb.build({
      responseType: 'text',
      accept: 'text/plain'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<Array<PracticeAreasFolderOut>>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `v1DmsPracticeAreasFoldersaggregateGet$Plain$Response()` instead.
   *
   * This method doesn't expect any response body
   */
  v1DmsPracticeAreasFoldersaggregateGet$Plain(params?: {

  }): Observable<Array<PracticeAreasFolderOut>> {

    return this.v1DmsPracticeAreasFoldersaggregateGet$Plain$Response(params).pipe(
      map((r: StrictHttpResponse<Array<PracticeAreasFolderOut>>) => r.body as Array<PracticeAreasFolderOut>)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `v1DmsPracticeAreasFoldersaggregateGet$Json()` instead.
   *
   * This method doesn't expect any response body
   */
  v1DmsPracticeAreasFoldersaggregateGet$Json$Response(params?: {

  }): Observable<StrictHttpResponse<Array<PracticeAreasFolderOut>>> {

    const rb = new RequestBuilder(this.rootUrl, DmsService.V1DmsPracticeAreasFoldersaggregateGetPath, 'get');
    if (params) {


    }
    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'application/json'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<Array<PracticeAreasFolderOut>>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `v1DmsPracticeAreasFoldersaggregateGet$Json$Response()` instead.
   *
   * This method doesn't expect any response body
   */
  v1DmsPracticeAreasFoldersaggregateGet$Json(params?: {

  }): Observable<Array<PracticeAreasFolderOut>> {

    return this.v1DmsPracticeAreasFoldersaggregateGet$Json$Response(params).pipe(
      map((r: StrictHttpResponse<Array<PracticeAreasFolderOut>>) => r.body as Array<PracticeAreasFolderOut>)
    );
  }

  /**
   * Path part for operation v1DmsPracticeareaFileIsFileExistGet
   */
  static readonly V1DmsPracticeareaFileIsFileExistGetPath = '/v1/DMS/practiceareaFile/IsFileExist';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `v1DmsPracticeareaFileIsFileExistGet()` instead.
   *
   * This method doesn't expect any response body
   */
  v1DmsPracticeareaFileIsFileExistGet$Response(params?: {
    folderId?: number;
    fileName?: string;

  }): Observable<StrictHttpResponse<void>> {

    const rb = new RequestBuilder(this.rootUrl, DmsService.V1DmsPracticeareaFileIsFileExistGetPath, 'get');
    if (params) {

      rb.query('FolderId', params.folderId);
      rb.query('fileName', params.fileName);

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
   * To access the full response (for headers, for example), `v1DmsPracticeareaFileIsFileExistGet$Response()` instead.
   *
   * This method doesn't expect any response body
   */
  v1DmsPracticeareaFileIsFileExistGet(params?: {
    folderId?: number;
    fileName?: string;

  }): Observable<void> {

    return this.v1DmsPracticeareaFileIsFileExistGet$Response(params).pipe(
      map((r: StrictHttpResponse<void>) => r.body as void)
    );
  }

  /**
   * Path part for operation v1DmsPracticeAreaFileReplacePost
   */
  static readonly V1DmsPracticeAreaFileReplacePostPath = '/v1/DMS/PracticeAreaFile/Replace';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `v1DmsPracticeAreaFileReplacePost()` instead.
   *
   * This method sends `multipart/form-data` and handles response body of type `multipart/form-data`
   */
  v1DmsPracticeAreaFileReplacePost$Response(params?: {
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

    const rb = new RequestBuilder(this.rootUrl, DmsService.V1DmsPracticeAreaFileReplacePostPath, 'post');
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
   * To access the full response (for headers, for example), `v1DmsPracticeAreaFileReplacePost$Response()` instead.
   *
   * This method sends `multipart/form-data` and handles response body of type `multipart/form-data`
   */
  v1DmsPracticeAreaFileReplacePost(params?: {
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

    return this.v1DmsPracticeAreaFileReplacePost$Response(params).pipe(
      map((r: StrictHttpResponse<void>) => r.body as void)
    );
  }

  /**
   * Path part for operation v1DmsDocumentGetSigningStatusDocumentIdGet
   */
  static readonly V1DmsDocumentGetSigningStatusDocumentIdGetPath = '/v1/DMS/document/GetSigningStatus/{documentId}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `v1DmsDocumentGetSigningStatusDocumentIdGet()` instead.
   *
   * This method doesn't expect any response body
   */
  v1DmsDocumentGetSigningStatusDocumentIdGet$Response(params: {
    documentId: number;

  }): Observable<StrictHttpResponse<void>> {

    const rb = new RequestBuilder(this.rootUrl, DmsService.V1DmsDocumentGetSigningStatusDocumentIdGetPath, 'get');
    if (params) {

      rb.path('documentId', params.documentId);

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
   * To access the full response (for headers, for example), `v1DmsDocumentGetSigningStatusDocumentIdGet$Response()` instead.
   *
   * This method doesn't expect any response body
   */
  v1DmsDocumentGetSigningStatusDocumentIdGet(params: {
    documentId: number;

  }): Observable<void> {

    return this.v1DmsDocumentGetSigningStatusDocumentIdGet$Response(params).pipe(
      map((r: StrictHttpResponse<void>) => r.body as void)
    );
  }

  /**
   * Path part for operation v1DmsDocumentSignersGet
   */
  static readonly V1DmsDocumentSignersGetPath = '/v1/DMS/document/Signers';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `v1DmsDocumentSignersGet()` instead.
   *
   * This method doesn't expect any response body
   */
  v1DmsDocumentSignersGet$Response(params?: {

  }): Observable<StrictHttpResponse<void>> {

    const rb = new RequestBuilder(this.rootUrl, DmsService.V1DmsDocumentSignersGetPath, 'get');
    if (params) {


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
   * To access the full response (for headers, for example), `v1DmsDocumentSignersGet$Response()` instead.
   *
   * This method doesn't expect any response body
   */
  v1DmsDocumentSignersGet(params?: {

  }): Observable<void> {

    return this.v1DmsDocumentSignersGet$Response(params).pipe(
      map((r: StrictHttpResponse<void>) => r.body as void)
    );
  }

  /**
   * Path part for operation v1DmsDocumentSendforSignaturePost
   */
  static readonly V1DmsDocumentSendforSignaturePostPath = '/v1/DMS/document/SendforSignature';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `v1DmsDocumentSendforSignaturePost$Json()` instead.
   *
   * This method sends `application/json` and handles response body of type `application/json`
   */
  v1DmsDocumentSendforSignaturePost$Json$Response(params?: {

    body?: DocumentSignNowInvite
  }): Observable<StrictHttpResponse<void>> {

    const rb = new RequestBuilder(this.rootUrl, DmsService.V1DmsDocumentSendforSignaturePostPath, 'post');
    if (params) {


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
   * To access the full response (for headers, for example), `v1DmsDocumentSendforSignaturePost$Json$Response()` instead.
   *
   * This method sends `application/json` and handles response body of type `application/json`
   */
  v1DmsDocumentSendforSignaturePost$Json(params?: {

    body?: DocumentSignNowInvite
  }): Observable<void> {

    return this.v1DmsDocumentSendforSignaturePost$Json$Response(params).pipe(
      map((r: StrictHttpResponse<void>) => r.body as void)
    );
  }

  /**
   * Path part for operation v1DmsCreatePracticeAreaFolderGet
   */
  static readonly V1DmsCreatePracticeAreaFolderGetPath = '/v1/DMS/CreatePracticeAreaFolder';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `v1DmsCreatePracticeAreaFolderGet()` instead.
   *
   * This method doesn't expect any response body
   */
  v1DmsCreatePracticeAreaFolderGet$Response(params?: {
    matterId?: number;
    clientId?: number;
    practiceAreaId?: number;

  }): Observable<StrictHttpResponse<void>> {

    const rb = new RequestBuilder(this.rootUrl, DmsService.V1DmsCreatePracticeAreaFolderGetPath, 'get');
    if (params) {

      rb.query('matterId', params.matterId);
      rb.query('clientId', params.clientId);
      rb.query('practiceAreaId', params.practiceAreaId);

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
   * To access the full response (for headers, for example), `v1DmsCreatePracticeAreaFolderGet$Response()` instead.
   *
   * This method doesn't expect any response body
   */
  v1DmsCreatePracticeAreaFolderGet(params?: {
    matterId?: number;
    clientId?: number;
    practiceAreaId?: number;

  }): Observable<void> {

    return this.v1DmsCreatePracticeAreaFolderGet$Response(params).pipe(
      map((r: StrictHttpResponse<void>) => r.body as void)
    );
  }

  /**
   * Path part for operation v1DmsUpdateFileNameAndOriginalFileNameGet
   */
  static readonly V1DmsUpdateFileNameAndOriginalFileNameGetPath = '/v1/DMS/UpdateFileNameAndOriginalFileName';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `v1DmsUpdateFileNameAndOriginalFileNameGet()` instead.
   *
   * This method doesn't expect any response body
   */
  v1DmsUpdateFileNameAndOriginalFileNameGet$Response(params?: {

  }): Observable<StrictHttpResponse<void>> {

    const rb = new RequestBuilder(this.rootUrl, DmsService.V1DmsUpdateFileNameAndOriginalFileNameGetPath, 'get');
    if (params) {


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
   * To access the full response (for headers, for example), `v1DmsUpdateFileNameAndOriginalFileNameGet$Response()` instead.
   *
   * This method doesn't expect any response body
   */
  v1DmsUpdateFileNameAndOriginalFileNameGet(params?: {

  }): Observable<void> {

    return this.v1DmsUpdateFileNameAndOriginalFileNameGet$Response(params).pipe(
      map((r: StrictHttpResponse<void>) => r.body as void)
    );
  }

  /**
   * Path part for operation v1DmsMoveAndUpdateFileSizeGet
   */
  static readonly V1DmsMoveAndUpdateFileSizeGetPath = '/v1/DMS/MoveAndUpdateFileSize';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `v1DmsMoveAndUpdateFileSizeGet()` instead.
   *
   * This method doesn't expect any response body
   */
  v1DmsMoveAndUpdateFileSizeGet$Response(params?: {

  }): Observable<StrictHttpResponse<void>> {

    const rb = new RequestBuilder(this.rootUrl, DmsService.V1DmsMoveAndUpdateFileSizeGetPath, 'get');
    if (params) {


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
   * To access the full response (for headers, for example), `v1DmsMoveAndUpdateFileSizeGet$Response()` instead.
   *
   * This method doesn't expect any response body
   */
  v1DmsMoveAndUpdateFileSizeGet(params?: {

  }): Observable<void> {

    return this.v1DmsMoveAndUpdateFileSizeGet$Response(params).pipe(
      map((r: StrictHttpResponse<void>) => r.body as void)
    );
  }

  /**
   * Path part for operation v1DmsTestPost
   */
  static readonly V1DmsTestPostPath = '/v1/DMS/Test';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `v1DmsTestPost()` instead.
   *
   * This method doesn't expect any response body
   */
  v1DmsTestPost$Response(params?: {

  }): Observable<StrictHttpResponse<void>> {

    const rb = new RequestBuilder(this.rootUrl, DmsService.V1DmsTestPostPath, 'post');
    if (params) {


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
   * To access the full response (for headers, for example), `v1DmsTestPost$Response()` instead.
   *
   * This method doesn't expect any response body
   */
  v1DmsTestPost(params?: {

  }): Observable<void> {

    return this.v1DmsTestPost$Response(params).pipe(
      map((r: StrictHttpResponse<void>) => r.body as void)
    );
  }

  /**
   * Path part for operation v1DmsDocumentSignerEmailExistPost
   */
  static readonly V1DmsDocumentSignerEmailExistPostPath = '/v1/DMS/document/SignerEmailExist';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `v1DmsDocumentSignerEmailExistPost$Json()` instead.
   *
   * This method sends `application/json` and handles response body of type `application/json`
   */
  v1DmsDocumentSignerEmailExistPost$Json$Response(params?: {

    body?: DocumentSignNowInvite
  }): Observable<StrictHttpResponse<void>> {

    const rb = new RequestBuilder(this.rootUrl, DmsService.V1DmsDocumentSignerEmailExistPostPath, 'post');
    if (params) {


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
   * To access the full response (for headers, for example), `v1DmsDocumentSignerEmailExistPost$Json$Response()` instead.
   *
   * This method sends `application/json` and handles response body of type `application/json`
   */
  v1DmsDocumentSignerEmailExistPost$Json(params?: {

    body?: DocumentSignNowInvite
  }): Observable<void> {

    return this.v1DmsDocumentSignerEmailExistPost$Json$Response(params).pipe(
      map((r: StrictHttpResponse<void>) => r.body as void)
    );
  }

  /**
   * Path part for operation v1DmsSignaturehistoryIdGet
   */
  static readonly V1DmsSignaturehistoryIdGetPath = '/v1/DMS/signaturehistory/{id}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `v1DmsSignaturehistoryIdGet()` instead.
   *
   * This method doesn't expect any response body
   */
  v1DmsSignaturehistoryIdGet$Response(params: {
    id: number;

  }): Observable<StrictHttpResponse<void>> {

    const rb = new RequestBuilder(this.rootUrl, DmsService.V1DmsSignaturehistoryIdGetPath, 'get');
    if (params) {

      rb.path('id', params.id);

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
   * To access the full response (for headers, for example), `v1DmsSignaturehistoryIdGet$Response()` instead.
   *
   * This method doesn't expect any response body
   */
  v1DmsSignaturehistoryIdGet(params: {
    id: number;

  }): Observable<void> {

    return this.v1DmsSignaturehistoryIdGet$Response(params).pipe(
      map((r: StrictHttpResponse<void>) => r.body as void)
    );
  }

  /**
   * Path part for operation v1DmsResendsignatureIdPut
   */
  static readonly V1DmsResendsignatureIdPutPath = '/v1/DMS/resendsignature/{id}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `v1DmsResendsignatureIdPut()` instead.
   *
   * This method doesn't expect any response body
   */
  v1DmsResendsignatureIdPut$Response(params: {
    id: number;

  }): Observable<StrictHttpResponse<void>> {

    const rb = new RequestBuilder(this.rootUrl, DmsService.V1DmsResendsignatureIdPutPath, 'put');
    if (params) {

      rb.path('id', params.id);

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
   * To access the full response (for headers, for example), `v1DmsResendsignatureIdPut$Response()` instead.
   *
   * This method doesn't expect any response body
   */
  v1DmsResendsignatureIdPut(params: {
    id: number;

  }): Observable<void> {

    return this.v1DmsResendsignatureIdPut$Response(params).pipe(
      map((r: StrictHttpResponse<void>) => r.body as void)
    );
  }

  /**
   * Path part for operation v1DmsESignatureSynchronizeTestIdGet
   */
  static readonly V1DmsESignatureSynchronizeTestIdGetPath = '/v1/DMS/ESignatureSynchronizeTest/{id}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `v1DmsESignatureSynchronizeTestIdGet()` instead.
   *
   * This method doesn't expect any response body
   */
  v1DmsESignatureSynchronizeTestIdGet$Response(params: {
    tid?: number;
    id: number;

  }): Observable<StrictHttpResponse<void>> {

    const rb = new RequestBuilder(this.rootUrl, DmsService.V1DmsESignatureSynchronizeTestIdGetPath, 'get');
    if (params) {

      rb.query('tid', params.tid);
      rb.path('id', params.id);

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
   * To access the full response (for headers, for example), `v1DmsESignatureSynchronizeTestIdGet$Response()` instead.
   *
   * This method doesn't expect any response body
   */
  v1DmsESignatureSynchronizeTestIdGet(params: {
    tid?: number;
    id: number;

  }): Observable<void> {

    return this.v1DmsESignatureSynchronizeTestIdGet$Response(params).pipe(
      map((r: StrictHttpResponse<void>) => r.body as void)
    );
  }

  /**
   * Path part for operation v1DmsSignIdGet
   */
  static readonly V1DmsSignIdGetPath = '/v1/DMS/sign/{id}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `v1DmsSignIdGet()` instead.
   *
   * This method doesn't expect any response body
   */
  v1DmsSignIdGet$Response(params: {
    id: string;

  }): Observable<StrictHttpResponse<void>> {

    const rb = new RequestBuilder(this.rootUrl, DmsService.V1DmsSignIdGetPath, 'get');
    if (params) {

      rb.path('id', params.id);

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
   * To access the full response (for headers, for example), `v1DmsSignIdGet$Response()` instead.
   *
   * This method doesn't expect any response body
   */
  v1DmsSignIdGet(params: {
    id: string;

  }): Observable<void> {

    return this.v1DmsSignIdGet$Response(params).pipe(
      map((r: StrictHttpResponse<void>) => r.body as void)
    );
  }

  /**
   * Path part for operation v1DmsMattersPracticeAreaClientIdGet
   */
  static readonly V1DmsMattersPracticeAreaClientIdGetPath = '/v1/DMS/MattersPracticeArea/{clientId}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `v1DmsMattersPracticeAreaClientIdGet()` instead.
   *
   * This method doesn't expect any response body
   */
  v1DmsMattersPracticeAreaClientIdGet$Response(params: {
    clientId: number;

  }): Observable<StrictHttpResponse<void>> {

    const rb = new RequestBuilder(this.rootUrl, DmsService.V1DmsMattersPracticeAreaClientIdGetPath, 'get');
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
   * To access the full response (for headers, for example), `v1DmsMattersPracticeAreaClientIdGet$Response()` instead.
   *
   * This method doesn't expect any response body
   */
  v1DmsMattersPracticeAreaClientIdGet(params: {
    clientId: number;

  }): Observable<void> {

    return this.v1DmsMattersPracticeAreaClientIdGet$Response(params).pipe(
      map((r: StrictHttpResponse<void>) => r.body as void)
    );
  }

  /**
   * Path part for operation v1DmsFilesDmsfileIdShareLinkGet
   */
  static readonly V1DmsFilesDmsfileIdShareLinkGetPath = '/v1/DMS/files/{dmsfileId}/shareLink';

  /**
   * The link is a relative path with a hashed code
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `v1DmsFilesDmsfileIdShareLinkGet()` instead.
   *
   * This method doesn't expect any response body
   */
  v1DmsFilesDmsfileIdShareLinkGet$Response(params: {
    dmsfileId: number;

  }): Observable<StrictHttpResponse<void>> {

    const rb = new RequestBuilder(this.rootUrl, DmsService.V1DmsFilesDmsfileIdShareLinkGetPath, 'get');
    if (params) {

      rb.path('dmsfileId', params.dmsfileId);

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
   * The link is a relative path with a hashed code
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `v1DmsFilesDmsfileIdShareLinkGet$Response()` instead.
   *
   * This method doesn't expect any response body
   */
  v1DmsFilesDmsfileIdShareLinkGet(params: {
    dmsfileId: number;

  }): Observable<void> {

    return this.v1DmsFilesDmsfileIdShareLinkGet$Response(params).pipe(
      map((r: StrictHttpResponse<void>) => r.body as void)
    );
  }

  /**
   * Path part for operation v1DmsFilesShareLinksGet
   */
  static readonly V1DmsFilesShareLinksGetPath = '/v1/DMS/files/shareLinks';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `v1DmsFilesShareLinksGet()` instead.
   *
   * This method doesn't expect any response body
   */
  v1DmsFilesShareLinksGet$Response(params?: {
    fileIds?: string;

  }): Observable<StrictHttpResponse<void>> {

    const rb = new RequestBuilder(this.rootUrl, DmsService.V1DmsFilesShareLinksGetPath, 'get');
    if (params) {

      rb.query('fileIds', params.fileIds);

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
   * To access the full response (for headers, for example), `v1DmsFilesShareLinksGet$Response()` instead.
   *
   * This method doesn't expect any response body
   */
  v1DmsFilesShareLinksGet(params?: {
    fileIds?: string;

  }): Observable<void> {

    return this.v1DmsFilesShareLinksGet$Response(params).pipe(
      map((r: StrictHttpResponse<void>) => r.body as void)
    );
  }

  /**
   * Path part for operation v1DmsFilesSharedHashedIdGet
   */
  static readonly V1DmsFilesSharedHashedIdGetPath = '/v1/DMS/files/shared/{hashedId}';

  /**
   * The link expires after 4 hours. 
   * Set readWrite param True to get a signed URL for writing files on client.
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `v1DmsFilesSharedHashedIdGet$Plain()` instead.
   *
   * This method doesn't expect any response body
   */
  v1DmsFilesSharedHashedIdGet$Plain$Response(params: {
    hashedId: string;
    readWrite?: boolean;

  }): Observable<StrictHttpResponse<DmsFileDetails>> {

    const rb = new RequestBuilder(this.rootUrl, DmsService.V1DmsFilesSharedHashedIdGetPath, 'get');
    if (params) {

      rb.path('hashedId', params.hashedId);
      rb.query('readWrite', params.readWrite);

    }
    return this.http.request(rb.build({
      responseType: 'text',
      accept: 'text/plain'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<DmsFileDetails>;
      })
    );
  }

  /**
   * The link expires after 4 hours. 
   * Set readWrite param True to get a signed URL for writing files on client.
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `v1DmsFilesSharedHashedIdGet$Plain$Response()` instead.
   *
   * This method doesn't expect any response body
   */
  v1DmsFilesSharedHashedIdGet$Plain(params: {
    hashedId: string;
    readWrite?: boolean;

  }): Observable<DmsFileDetails> {

    return this.v1DmsFilesSharedHashedIdGet$Plain$Response(params).pipe(
      map((r: StrictHttpResponse<DmsFileDetails>) => r.body as DmsFileDetails)
    );
  }

  /**
   * The link expires after 4 hours. 
   * Set readWrite param True to get a signed URL for writing files on client.
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `v1DmsFilesSharedHashedIdGet$Json()` instead.
   *
   * This method doesn't expect any response body
   */
  v1DmsFilesSharedHashedIdGet$Json$Response(params: {
    hashedId: string;
    readWrite?: boolean;

  }): Observable<StrictHttpResponse<DmsFileDetails>> {

    const rb = new RequestBuilder(this.rootUrl, DmsService.V1DmsFilesSharedHashedIdGetPath, 'get');
    if (params) {

      rb.path('hashedId', params.hashedId);
      rb.query('readWrite', params.readWrite);

    }
    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'application/json'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<DmsFileDetails>;
      })
    );
  }

  /**
   * The link expires after 4 hours. 
   * Set readWrite param True to get a signed URL for writing files on client.
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `v1DmsFilesSharedHashedIdGet$Json$Response()` instead.
   *
   * This method doesn't expect any response body
   */
  v1DmsFilesSharedHashedIdGet$Json(params: {
    hashedId: string;
    readWrite?: boolean;

  }): Observable<DmsFileDetails> {

    return this.v1DmsFilesSharedHashedIdGet$Json$Response(params).pipe(
      map((r: StrictHttpResponse<DmsFileDetails>) => r.body as DmsFileDetails)
    );
  }

  /**
   * Path part for operation v1DmsFilesHashedFileIdVersionsUploadTokenGet
   */
  static readonly V1DmsFilesHashedFileIdVersionsUploadTokenGetPath = '/v1/DMS/files/{hashedFileId}/versions/uploadToken';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `v1DmsFilesHashedFileIdVersionsUploadTokenGet()` instead.
   *
   * This method doesn't expect any response body
   */
  v1DmsFilesHashedFileIdVersionsUploadTokenGet$Response(params: {
    hashedFileId: string;

  }): Observable<StrictHttpResponse<void>> {

    const rb = new RequestBuilder(this.rootUrl, DmsService.V1DmsFilesHashedFileIdVersionsUploadTokenGetPath, 'get');
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
   * To access the full response (for headers, for example), `v1DmsFilesHashedFileIdVersionsUploadTokenGet$Response()` instead.
   *
   * This method doesn't expect any response body
   */
  v1DmsFilesHashedFileIdVersionsUploadTokenGet(params: {
    hashedFileId: string;

  }): Observable<void> {

    return this.v1DmsFilesHashedFileIdVersionsUploadTokenGet$Response(params).pipe(
      map((r: StrictHttpResponse<void>) => r.body as void)
    );
  }

  /**
   * Path part for operation v1DmsFilesHashedFileIdVersionsUploadSuccessPost
   */
  static readonly V1DmsFilesHashedFileIdVersionsUploadSuccessPostPath = '/v1/DMS/files/{hashedFileId}/versions/uploadSuccess';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `v1DmsFilesHashedFileIdVersionsUploadSuccessPost$Json()` instead.
   *
   * This method sends `application/json` and handles response body of type `application/json`
   */
  v1DmsFilesHashedFileIdVersionsUploadSuccessPost$Json$Response(params: {
    hashedFileId: string;

    body?: FileBumpVersionResult
  }): Observable<StrictHttpResponse<void>> {

    const rb = new RequestBuilder(this.rootUrl, DmsService.V1DmsFilesHashedFileIdVersionsUploadSuccessPostPath, 'post');
    if (params) {

      rb.path('hashedFileId', params.hashedFileId);

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
   * To access the full response (for headers, for example), `v1DmsFilesHashedFileIdVersionsUploadSuccessPost$Json$Response()` instead.
   *
   * This method sends `application/json` and handles response body of type `application/json`
   */
  v1DmsFilesHashedFileIdVersionsUploadSuccessPost$Json(params: {
    hashedFileId: string;

    body?: FileBumpVersionResult
  }): Observable<void> {

    return this.v1DmsFilesHashedFileIdVersionsUploadSuccessPost$Json$Response(params).pipe(
      map((r: StrictHttpResponse<void>) => r.body as void)
    );
  }

  /**
   * Path part for operation v1DmsFileDownloadClientfileDmsfileIdGet
   */
  static readonly V1DmsFileDownloadClientfileDmsfileIdGetPath = '/v1/DMS/file/Download/clientfile/{dmsfileId}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `v1DmsFileDownloadClientfileDmsfileIdGet()` instead.
   *
   * This method doesn't expect any response body
   */
  v1DmsFileDownloadClientfileDmsfileIdGet$Response(params: {
    dmsfileId: number;

  }): Observable<StrictHttpResponse<void>> {

    const rb = new RequestBuilder(this.rootUrl, DmsService.V1DmsFileDownloadClientfileDmsfileIdGetPath, 'get');
    if (params) {

      rb.path('dmsfileId', params.dmsfileId);

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
   * To access the full response (for headers, for example), `v1DmsFileDownloadClientfileDmsfileIdGet$Response()` instead.
   *
   * This method doesn't expect any response body
   */
  v1DmsFileDownloadClientfileDmsfileIdGet(params: {
    dmsfileId: number;

  }): Observable<void> {

    return this.v1DmsFileDownloadClientfileDmsfileIdGet$Response(params).pipe(
      map((r: StrictHttpResponse<void>) => r.body as void)
    );
  }

  /**
   * Path part for operation v1DmsFileDeleteIdDelete
   */
  static readonly V1DmsFileDeleteIdDeletePath = '/v1/DMS/file/delete/{id}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `v1DmsFileDeleteIdDelete()` instead.
   *
   * This method doesn't expect any response body
   */
  v1DmsFileDeleteIdDelete$Response(params: {
    id: number;

  }): Observable<StrictHttpResponse<void>> {

    const rb = new RequestBuilder(this.rootUrl, DmsService.V1DmsFileDeleteIdDeletePath, 'delete');
    if (params) {

      rb.path('id', params.id);

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
   * To access the full response (for headers, for example), `v1DmsFileDeleteIdDelete$Response()` instead.
   *
   * This method doesn't expect any response body
   */
  v1DmsFileDeleteIdDelete(params: {
    id: number;

  }): Observable<void> {

    return this.v1DmsFileDeleteIdDelete$Response(params).pipe(
      map((r: StrictHttpResponse<void>) => r.body as void)
    );
  }

  /**
   * Path part for operation v1DmsDocumentShareAccessExpireEmailGet
   */
  static readonly V1DmsDocumentShareAccessExpireEmailGetPath = '/v1/DMS/DocumentShareAccessExpireEmail';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `v1DmsDocumentShareAccessExpireEmailGet()` instead.
   *
   * This method doesn't expect any response body
   */
  v1DmsDocumentShareAccessExpireEmailGet$Response(params?: {
    dateTime?: string;

  }): Observable<StrictHttpResponse<void>> {

    const rb = new RequestBuilder(this.rootUrl, DmsService.V1DmsDocumentShareAccessExpireEmailGetPath, 'get');
    if (params) {

      rb.query('dateTime', params.dateTime);

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
   * To access the full response (for headers, for example), `v1DmsDocumentShareAccessExpireEmailGet$Response()` instead.
   *
   * This method doesn't expect any response body
   */
  v1DmsDocumentShareAccessExpireEmailGet(params?: {
    dateTime?: string;

  }): Observable<void> {

    return this.v1DmsDocumentShareAccessExpireEmailGet$Response(params).pipe(
      map((r: StrictHttpResponse<void>) => r.body as void)
    );
  }

  /**
   * Path part for operation v1DmsFileRevertVersionPut
   */
  static readonly V1DmsFileRevertVersionPutPath = '/v1/DMS/file/revert/version';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `v1DmsFileRevertVersionPut$Json()` instead.
   *
   * This method sends `application/json` and handles response body of type `application/json`
   */
  v1DmsFileRevertVersionPut$Json$Response(params?: {

    body?: vwRevertFile
  }): Observable<StrictHttpResponse<void>> {

    const rb = new RequestBuilder(this.rootUrl, DmsService.V1DmsFileRevertVersionPutPath, 'put');
    if (params) {


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
   * To access the full response (for headers, for example), `v1DmsFileRevertVersionPut$Json$Response()` instead.
   *
   * This method sends `application/json` and handles response body of type `application/json`
   */
  v1DmsFileRevertVersionPut$Json(params?: {

    body?: vwRevertFile
  }): Observable<void> {

    return this.v1DmsFileRevertVersionPut$Json$Response(params).pipe(
      map((r: StrictHttpResponse<void>) => r.body as void)
    );
  }

  /**
   * Path part for operation v1DmsFileIsFileExistGet
   */
  static readonly V1DmsFileIsFileExistGetPath = '/v1/DMS/file/IsFileExist';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `v1DmsFileIsFileExistGet()` instead.
   *
   * This method doesn't expect any response body
   */
  v1DmsFileIsFileExistGet$Response(params?: {
    folderId?: number;
    fileName?: string;

  }): Observable<StrictHttpResponse<void>> {

    const rb = new RequestBuilder(this.rootUrl, DmsService.V1DmsFileIsFileExistGetPath, 'get');
    if (params) {

      rb.query('FolderId', params.folderId);
      rb.query('fileName', params.fileName);

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
   * To access the full response (for headers, for example), `v1DmsFileIsFileExistGet$Response()` instead.
   *
   * This method doesn't expect any response body
   */
  v1DmsFileIsFileExistGet(params?: {
    folderId?: number;
    fileName?: string;

  }): Observable<void> {

    return this.v1DmsFileIsFileExistGet$Response(params).pipe(
      map((r: StrictHttpResponse<void>) => r.body as void)
    );
  }

  /**
   * Path part for operation v1DmsCheckImageFileUploadPost
   */
  static readonly V1DmsCheckImageFileUploadPostPath = '/v1/DMS/checkImageFile/upload';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `v1DmsCheckImageFileUploadPost()` instead.
   *
   * This method sends `multipart/form-data` and handles response body of type `multipart/form-data`
   */
  v1DmsCheckImageFileUploadPost$Response(params?: {

    body?: { 'ContentType': string, 'ContentDisposition': string, 'Headers': { [key: string]: Array<string> }, 'Length': number, 'Name': string, 'FileName': string }
  }): Observable<StrictHttpResponse<void>> {

    const rb = new RequestBuilder(this.rootUrl, DmsService.V1DmsCheckImageFileUploadPostPath, 'post');
    if (params) {


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
   * To access the full response (for headers, for example), `v1DmsCheckImageFileUploadPost$Response()` instead.
   *
   * This method sends `multipart/form-data` and handles response body of type `multipart/form-data`
   */
  v1DmsCheckImageFileUploadPost(params?: {

    body?: { 'ContentType': string, 'ContentDisposition': string, 'Headers': { [key: string]: Array<string> }, 'Length': number, 'Name': string, 'FileName': string }
  }): Observable<void> {

    return this.v1DmsCheckImageFileUploadPost$Response(params).pipe(
      map((r: StrictHttpResponse<void>) => r.body as void)
    );
  }

  /**
   * Path part for operation v1DmsCheckImageFileDownloadGet
   */
  static readonly V1DmsCheckImageFileDownloadGetPath = '/v1/DMS/checkImageFile/download';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `v1DmsCheckImageFileDownloadGet()` instead.
   *
   * This method doesn't expect any response body
   */
  v1DmsCheckImageFileDownloadGet$Response(params?: {
    checkImageUrl?: string;

  }): Observable<StrictHttpResponse<void>> {

    const rb = new RequestBuilder(this.rootUrl, DmsService.V1DmsCheckImageFileDownloadGetPath, 'get');
    if (params) {

      rb.query('checkImageURL', params.checkImageUrl);

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
   * To access the full response (for headers, for example), `v1DmsCheckImageFileDownloadGet$Response()` instead.
   *
   * This method doesn't expect any response body
   */
  v1DmsCheckImageFileDownloadGet(params?: {
    checkImageUrl?: string;

  }): Observable<void> {

    return this.v1DmsCheckImageFileDownloadGet$Response(params).pipe(
      map((r: StrictHttpResponse<void>) => r.body as void)
    );
  }

  /**
   * Path part for operation v1DmsLogoDownloadGet
   */
  static readonly V1DmsLogoDownloadGetPath = '/v1/DMS/logo/download';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `v1DmsLogoDownloadGet()` instead.
   *
   * This method doesn't expect any response body
   */
  v1DmsLogoDownloadGet$Response(params?: {
    logoUrl?: string;

  }): Observable<StrictHttpResponse<void>> {

    const rb = new RequestBuilder(this.rootUrl, DmsService.V1DmsLogoDownloadGetPath, 'get');
    if (params) {

      rb.query('logoUrl', params.logoUrl);

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
   * To access the full response (for headers, for example), `v1DmsLogoDownloadGet$Response()` instead.
   *
   * This method doesn't expect any response body
   */
  v1DmsLogoDownloadGet(params?: {
    logoUrl?: string;

  }): Observable<void> {

    return this.v1DmsLogoDownloadGet$Response(params).pipe(
      map((r: StrictHttpResponse<void>) => r.body as void)
    );
  }

  /**
   * Path part for operation v1DmsDesktopUpdateFileContentPost
   */
  static readonly V1DmsDesktopUpdateFileContentPostPath = '/v1/DMS/Desktop/Update/FileContent';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `v1DmsDesktopUpdateFileContentPost()` instead.
   *
   * This method sends `multipart/form-data` and handles response body of type `multipart/form-data`
   */
  v1DmsDesktopUpdateFileContentPost$Response(params?: {
    id?: number;
    folderId?: number;
    nameOfFile?: string;
    ownerId?: number;
    isAfter5Mins?: boolean;
    documentSigningStatus?: number;

    body?: { 'ContentType': string, 'ContentDisposition': string, 'Headers': { [key: string]: Array<string> }, 'Length': number, 'Name': string, 'FileName': string }
  }): Observable<StrictHttpResponse<void>> {

    const rb = new RequestBuilder(this.rootUrl, DmsService.V1DmsDesktopUpdateFileContentPostPath, 'post');
    if (params) {

      rb.query('Id', params.id);
      rb.query('FolderId', params.folderId);
      rb.query('NameOfFile', params.nameOfFile);
      rb.query('OwnerId', params.ownerId);
      rb.query('IsAfter5Mins', params.isAfter5Mins);
      rb.query('DocumentSigningStatus', params.documentSigningStatus);

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
   * To access the full response (for headers, for example), `v1DmsDesktopUpdateFileContentPost$Response()` instead.
   *
   * This method sends `multipart/form-data` and handles response body of type `multipart/form-data`
   */
  v1DmsDesktopUpdateFileContentPost(params?: {
    id?: number;
    folderId?: number;
    nameOfFile?: string;
    ownerId?: number;
    isAfter5Mins?: boolean;
    documentSigningStatus?: number;

    body?: { 'ContentType': string, 'ContentDisposition': string, 'Headers': { [key: string]: Array<string> }, 'Length': number, 'Name': string, 'FileName': string }
  }): Observable<void> {

    return this.v1DmsDesktopUpdateFileContentPost$Response(params).pipe(
      map((r: StrictHttpResponse<void>) => r.body as void)
    );
  }

  /**
   * Path part for operation v1DmsCategoryInsertPost
   */
  static readonly V1DmsCategoryInsertPostPath = '/v1/DMS/category/insert';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `v1DmsCategoryInsertPost$Json()` instead.
   *
   * This method sends `application/json` and handles response body of type `application/json`
   */
  v1DmsCategoryInsertPost$Json$Response(params?: {

    body?: vwIdName
  }): Observable<StrictHttpResponse<void>> {

    const rb = new RequestBuilder(this.rootUrl, DmsService.V1DmsCategoryInsertPostPath, 'post');
    if (params) {


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
   * To access the full response (for headers, for example), `v1DmsCategoryInsertPost$Json$Response()` instead.
   *
   * This method sends `application/json` and handles response body of type `application/json`
   */
  v1DmsCategoryInsertPost$Json(params?: {

    body?: vwIdName
  }): Observable<void> {

    return this.v1DmsCategoryInsertPost$Json$Response(params).pipe(
      map((r: StrictHttpResponse<void>) => r.body as void)
    );
  }

  /**
   * Path part for operation v1DmsCategoryUpdatePut
   */
  static readonly V1DmsCategoryUpdatePutPath = '/v1/DMS/category/update';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `v1DmsCategoryUpdatePut$Json()` instead.
   *
   * This method sends `application/json` and handles response body of type `application/json`
   */
  v1DmsCategoryUpdatePut$Json$Response(params?: {

    body?: vwIdName
  }): Observable<StrictHttpResponse<void>> {

    const rb = new RequestBuilder(this.rootUrl, DmsService.V1DmsCategoryUpdatePutPath, 'put');
    if (params) {


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
   * To access the full response (for headers, for example), `v1DmsCategoryUpdatePut$Json$Response()` instead.
   *
   * This method sends `application/json` and handles response body of type `application/json`
   */
  v1DmsCategoryUpdatePut$Json(params?: {

    body?: vwIdName
  }): Observable<void> {

    return this.v1DmsCategoryUpdatePut$Json$Response(params).pipe(
      map((r: StrictHttpResponse<void>) => r.body as void)
    );
  }

  /**
   * Path part for operation v1DmsCategoryDeleteIdDelete
   */
  static readonly V1DmsCategoryDeleteIdDeletePath = '/v1/DMS/category/delete/{id}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `v1DmsCategoryDeleteIdDelete()` instead.
   *
   * This method doesn't expect any response body
   */
  v1DmsCategoryDeleteIdDelete$Response(params: {
    id: number;

  }): Observable<StrictHttpResponse<void>> {

    const rb = new RequestBuilder(this.rootUrl, DmsService.V1DmsCategoryDeleteIdDeletePath, 'delete');
    if (params) {

      rb.path('id', params.id);

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
   * To access the full response (for headers, for example), `v1DmsCategoryDeleteIdDelete$Response()` instead.
   *
   * This method doesn't expect any response body
   */
  v1DmsCategoryDeleteIdDelete(params: {
    id: number;

  }): Observable<void> {

    return this.v1DmsCategoryDeleteIdDelete$Response(params).pipe(
      map((r: StrictHttpResponse<void>) => r.body as void)
    );
  }

  /**
   * Path part for operation v1DmsCategoryIdGet
   */
  static readonly V1DmsCategoryIdGetPath = '/v1/DMS/category/{id}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `v1DmsCategoryIdGet()` instead.
   *
   * This method doesn't expect any response body
   */
  v1DmsCategoryIdGet$Response(params: {
    id: number;

  }): Observable<StrictHttpResponse<void>> {

    const rb = new RequestBuilder(this.rootUrl, DmsService.V1DmsCategoryIdGetPath, 'get');
    if (params) {

      rb.path('id', params.id);

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
   * To access the full response (for headers, for example), `v1DmsCategoryIdGet$Response()` instead.
   *
   * This method doesn't expect any response body
   */
  v1DmsCategoryIdGet(params: {
    id: number;

  }): Observable<void> {

    return this.v1DmsCategoryIdGet$Response(params).pipe(
      map((r: StrictHttpResponse<void>) => r.body as void)
    );
  }

  /**
   * Path part for operation v1DmsFileIdGet
   */
  static readonly V1DmsFileIdGetPath = '/v1/DMS/File/{id}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `v1DmsFileIdGet()` instead.
   *
   * This method doesn't expect any response body
   */
  v1DmsFileIdGet$Response(params: {
    id: number;

  }): Observable<StrictHttpResponse<void>> {

    const rb = new RequestBuilder(this.rootUrl, DmsService.V1DmsFileIdGetPath, 'get');
    if (params) {

      rb.path('id', params.id);

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
   * To access the full response (for headers, for example), `v1DmsFileIdGet$Response()` instead.
   *
   * This method doesn't expect any response body
   */
  v1DmsFileIdGet(params: {
    id: number;

  }): Observable<void> {

    return this.v1DmsFileIdGet$Response(params).pipe(
      map((r: StrictHttpResponse<void>) => r.body as void)
    );
  }

  /**
   * Path part for operation v1DmsDocsInitFromTemplatePost
   */
  static readonly V1DmsDocsInitFromTemplatePostPath = '/v1/DMS/docs/initFromTemplate';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `v1DmsDocsInitFromTemplatePost$Json$Plain()` instead.
   *
   * This method sends `application/json` and handles response body of type `application/json`
   */
  v1DmsDocsInitFromTemplatePost$Json$Plain$Response(params?: {

    body?: InitDocument
  }): Observable<StrictHttpResponse<InitDocumentResult>> {

    const rb = new RequestBuilder(this.rootUrl, DmsService.V1DmsDocsInitFromTemplatePostPath, 'post');
    if (params) {


      rb.body(params.body, 'application/json');
    }
    return this.http.request(rb.build({
      responseType: 'text',
      accept: 'text/plain'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<InitDocumentResult>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `v1DmsDocsInitFromTemplatePost$Json$Plain$Response()` instead.
   *
   * This method sends `application/json` and handles response body of type `application/json`
   */
  v1DmsDocsInitFromTemplatePost$Json$Plain(params?: {

    body?: InitDocument
  }): Observable<InitDocumentResult> {

    return this.v1DmsDocsInitFromTemplatePost$Json$Plain$Response(params).pipe(
      map((r: StrictHttpResponse<InitDocumentResult>) => r.body as InitDocumentResult)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `v1DmsDocsInitFromTemplatePost$Json$Json()` instead.
   *
   * This method sends `application/json` and handles response body of type `application/json`
   */
  v1DmsDocsInitFromTemplatePost$Json$Json$Response(params?: {

    body?: InitDocument
  }): Observable<StrictHttpResponse<InitDocumentResult>> {

    const rb = new RequestBuilder(this.rootUrl, DmsService.V1DmsDocsInitFromTemplatePostPath, 'post');
    if (params) {


      rb.body(params.body, 'application/json');
    }
    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'application/json'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<InitDocumentResult>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `v1DmsDocsInitFromTemplatePost$Json$Json$Response()` instead.
   *
   * This method sends `application/json` and handles response body of type `application/json`
   */
  v1DmsDocsInitFromTemplatePost$Json$Json(params?: {

    body?: InitDocument
  }): Observable<InitDocumentResult> {

    return this.v1DmsDocsInitFromTemplatePost$Json$Json$Response(params).pipe(
      map((r: StrictHttpResponse<InitDocumentResult>) => r.body as InitDocumentResult)
    );
  }

  /**
   * Path part for operation v1DmsDocFinalizeDocPost
   */
  static readonly V1DmsDocFinalizeDocPostPath = '/v1/DMS/doc/finalizeDoc';

  /**
   * Set Cancel or Preview flags if needed
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `v1DmsDocFinalizeDocPost$Json()` instead.
   *
   * This method sends `application/json` and handles response body of type `application/json`
   */
  v1DmsDocFinalizeDocPost$Json$Response(params?: {

    body?: FinalizeCreateDoc
  }): Observable<StrictHttpResponse<void>> {

    const rb = new RequestBuilder(this.rootUrl, DmsService.V1DmsDocFinalizeDocPostPath, 'post');
    if (params) {


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
   * Set Cancel or Preview flags if needed
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `v1DmsDocFinalizeDocPost$Json$Response()` instead.
   *
   * This method sends `application/json` and handles response body of type `application/json`
   */
  v1DmsDocFinalizeDocPost$Json(params?: {

    body?: FinalizeCreateDoc
  }): Observable<void> {

    return this.v1DmsDocFinalizeDocPost$Json$Response(params).pipe(
      map((r: StrictHttpResponse<void>) => r.body as void)
    );
  }

  /**
   * Path part for operation v1DmsClientsContactPreferencesGet
   */
  static readonly V1DmsClientsContactPreferencesGetPath = '/v1/DMS/clients/contactPreferences';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `v1DmsClientsContactPreferencesGet$Plain()` instead.
   *
   * This method doesn't expect any response body
   */
  v1DmsClientsContactPreferencesGet$Plain$Response(params?: {

    /**
     * list of client IDs
     */
    clientId?: Array<number>;

  }): Observable<StrictHttpResponse<Array<UserContactPreferences>>> {

    const rb = new RequestBuilder(this.rootUrl, DmsService.V1DmsClientsContactPreferencesGetPath, 'get');
    if (params) {

      rb.query('clientId', params.clientId);

    }
    return this.http.request(rb.build({
      responseType: 'text',
      accept: 'text/plain'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<Array<UserContactPreferences>>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `v1DmsClientsContactPreferencesGet$Plain$Response()` instead.
   *
   * This method doesn't expect any response body
   */
  v1DmsClientsContactPreferencesGet$Plain(params?: {

    /**
     * list of client IDs
     */
    clientId?: Array<number>;

  }): Observable<Array<UserContactPreferences>> {

    return this.v1DmsClientsContactPreferencesGet$Plain$Response(params).pipe(
      map((r: StrictHttpResponse<Array<UserContactPreferences>>) => r.body as Array<UserContactPreferences>)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `v1DmsClientsContactPreferencesGet$Json()` instead.
   *
   * This method doesn't expect any response body
   */
  v1DmsClientsContactPreferencesGet$Json$Response(params?: {

    /**
     * list of client IDs
     */
    clientId?: Array<number>;

  }): Observable<StrictHttpResponse<Array<UserContactPreferences>>> {

    const rb = new RequestBuilder(this.rootUrl, DmsService.V1DmsClientsContactPreferencesGetPath, 'get');
    if (params) {

      rb.query('clientId', params.clientId);

    }
    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'application/json'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<Array<UserContactPreferences>>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `v1DmsClientsContactPreferencesGet$Json$Response()` instead.
   *
   * This method doesn't expect any response body
   */
  v1DmsClientsContactPreferencesGet$Json(params?: {

    /**
     * list of client IDs
     */
    clientId?: Array<number>;

  }): Observable<Array<UserContactPreferences>> {

    return this.v1DmsClientsContactPreferencesGet$Json$Response(params).pipe(
      map((r: StrictHttpResponse<Array<UserContactPreferences>>) => r.body as Array<UserContactPreferences>)
    );
  }

  /**
   * Path part for operation v1DmsEmployeesGet
   */
  static readonly V1DmsEmployeesGetPath = '/v1/DMS/employees';

  /**
   * The currect design requires only the employee name and id
   * Desgin spec: https://codal.invisionapp.com/share/83VLC0B6Q4Y#/screens/402102057
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `v1DmsEmployeesGet()` instead.
   *
   * This method doesn't expect any response body
   */
  v1DmsEmployeesGet$Response(params?: {

  }): Observable<StrictHttpResponse<void>> {

    const rb = new RequestBuilder(this.rootUrl, DmsService.V1DmsEmployeesGetPath, 'get');
    if (params) {


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
   * The currect design requires only the employee name and id
   * Desgin spec: https://codal.invisionapp.com/share/83VLC0B6Q4Y#/screens/402102057
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `v1DmsEmployeesGet$Response()` instead.
   *
   * This method doesn't expect any response body
   */
  v1DmsEmployeesGet(params?: {

  }): Observable<void> {

    return this.v1DmsEmployeesGet$Response(params).pipe(
      map((r: StrictHttpResponse<void>) => r.body as void)
    );
  }

  /**
   * Path part for operation v1DmsOfficesGet
   */
  static readonly V1DmsOfficesGetPath = '/v1/DMS/offices';

  /**
   * The currect design requires only the office name and id
   * Desgin spec: https://codal.invisionapp.com/share/83VLC0B6Q4Y#/screens/402102057
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `v1DmsOfficesGet()` instead.
   *
   * This method doesn't expect any response body
   */
  v1DmsOfficesGet$Response(params?: {

  }): Observable<StrictHttpResponse<void>> {

    const rb = new RequestBuilder(this.rootUrl, DmsService.V1DmsOfficesGetPath, 'get');
    if (params) {


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
   * The currect design requires only the office name and id
   * Desgin spec: https://codal.invisionapp.com/share/83VLC0B6Q4Y#/screens/402102057
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `v1DmsOfficesGet$Response()` instead.
   *
   * This method doesn't expect any response body
   */
  v1DmsOfficesGet(params?: {

  }): Observable<void> {

    return this.v1DmsOfficesGet$Response(params).pipe(
      map((r: StrictHttpResponse<void>) => r.body as void)
    );
  }

  /**
   * Path part for operation v1DmsEventsGet
   */
  static readonly V1DmsEventsGetPath = '/v1/DMS/events';

  /**
   * The current design requires optional end datetime. Also start time is optional. If no start time is selected
   * send 00:00 for start time.
   * Desgin spec: https://codal.invisionapp.com/share/83VLC0B6Q4Y#/screens/409503322
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `v1DmsEventsGet()` instead.
   *
   * This method doesn't expect any response body
   */
  v1DmsEventsGet$Response(params?: {
    startDateTime?: string;
    endDateTime?: string;

  }): Observable<StrictHttpResponse<void>> {

    const rb = new RequestBuilder(this.rootUrl, DmsService.V1DmsEventsGetPath, 'get');
    if (params) {

      rb.query('startDateTime', params.startDateTime);
      rb.query('endDateTime', params.endDateTime);

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
   * The current design requires optional end datetime. Also start time is optional. If no start time is selected
   * send 00:00 for start time.
   * Desgin spec: https://codal.invisionapp.com/share/83VLC0B6Q4Y#/screens/409503322
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `v1DmsEventsGet$Response()` instead.
   *
   * This method doesn't expect any response body
   */
  v1DmsEventsGet(params?: {
    startDateTime?: string;
    endDateTime?: string;

  }): Observable<void> {

    return this.v1DmsEventsGet$Response(params).pipe(
      map((r: StrictHttpResponse<void>) => r.body as void)
    );
  }

  /**
   * Path part for operation v1DmsGetClientsGet
   */
  static readonly V1DmsGetClientsGetPath = '/v1/DMS/GetClients';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `v1DmsGetClientsGet()` instead.
   *
   * This method doesn't expect any response body
   */
  v1DmsGetClientsGet$Response(params?: {

  }): Observable<StrictHttpResponse<void>> {

    const rb = new RequestBuilder(this.rootUrl, DmsService.V1DmsGetClientsGetPath, 'get');
    if (params) {


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
   * To access the full response (for headers, for example), `v1DmsGetClientsGet$Response()` instead.
   *
   * This method doesn't expect any response body
   */
  v1DmsGetClientsGet(params?: {

  }): Observable<void> {

    return this.v1DmsGetClientsGet$Response(params).pipe(
      map((r: StrictHttpResponse<void>) => r.body as void)
    );
  }

  /**
   * Path part for operation v1DmsGetIndividualCorporateClientsGet
   */
  static readonly V1DmsGetIndividualCorporateClientsGetPath = '/v1/DMS/GetIndividualCorporateClients';

  /**
   * The currect design requires only the Id, client name and email
   * Req Spec : https://cpmg.atlassian.net/browse/LEX-654
   * Desgin spec: https://codal.invisionapp.com/share/83VLC0B6Q4Y#/screens/401509807
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `v1DmsGetIndividualCorporateClientsGet()` instead.
   *
   * This method doesn't expect any response body
   */
  v1DmsGetIndividualCorporateClientsGet$Response(params?: {

  }): Observable<StrictHttpResponse<void>> {

    const rb = new RequestBuilder(this.rootUrl, DmsService.V1DmsGetIndividualCorporateClientsGetPath, 'get');
    if (params) {


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
   * The currect design requires only the Id, client name and email
   * Req Spec : https://cpmg.atlassian.net/browse/LEX-654
   * Desgin spec: https://codal.invisionapp.com/share/83VLC0B6Q4Y#/screens/401509807
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `v1DmsGetIndividualCorporateClientsGet$Response()` instead.
   *
   * This method doesn't expect any response body
   */
  v1DmsGetIndividualCorporateClientsGet(params?: {

  }): Observable<void> {

    return this.v1DmsGetIndividualCorporateClientsGet$Response(params).pipe(
      map((r: StrictHttpResponse<void>) => r.body as void)
    );
  }

  /**
   * Path part for operation v1DmsAssociationsClientIdGet
   */
  static readonly V1DmsAssociationsClientIdGetPath = '/v1/DMS/Associations/{clientId}';

  /**
   * The currect design requires only the Id, CompanyName and emailId
   * Req Spec : https://cpmg.atlassian.net/browse/LEX-654
   * Desgin spec: https://codal.invisionapp.com/share/83VLC0B6Q4Y#/screens/401509806
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `v1DmsAssociationsClientIdGet()` instead.
   *
   * This method doesn't expect any response body
   */
  v1DmsAssociationsClientIdGet$Response(params: {
    clientId: number;

  }): Observable<StrictHttpResponse<void>> {

    const rb = new RequestBuilder(this.rootUrl, DmsService.V1DmsAssociationsClientIdGetPath, 'get');
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
   * The currect design requires only the Id, CompanyName and emailId
   * Req Spec : https://cpmg.atlassian.net/browse/LEX-654
   * Desgin spec: https://codal.invisionapp.com/share/83VLC0B6Q4Y#/screens/401509806
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `v1DmsAssociationsClientIdGet$Response()` instead.
   *
   * This method doesn't expect any response body
   */
  v1DmsAssociationsClientIdGet(params: {
    clientId: number;

  }): Observable<void> {

    return this.v1DmsAssociationsClientIdGet$Response(params).pipe(
      map((r: StrictHttpResponse<void>) => r.body as void)
    );
  }

  /**
   * Path part for operation v1DmsEmailCheckDuplicateEmailGet
   */
  static readonly V1DmsEmailCheckDuplicateEmailGetPath = '/v1/DMS/email/CheckDuplicateEmail';

  /**
   * The currect design requires only the Id, CompanyName and emailId
   * Req Spec : https://cpmg.atlassian.net/browse/LEX-655
   * Desgin spec: https://codal.invisionapp.com/share/83VLC0B6Q4Y#/screens/401509808
   * Desgin spec: https://codal.invisionapp.com/share/83VLC0B6Q4Y#/screens/402499317
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `v1DmsEmailCheckDuplicateEmailGet()` instead.
   *
   * This method doesn't expect any response body
   */
  v1DmsEmailCheckDuplicateEmailGet$Response(params?: {
    email?: string;

  }): Observable<StrictHttpResponse<void>> {

    const rb = new RequestBuilder(this.rootUrl, DmsService.V1DmsEmailCheckDuplicateEmailGetPath, 'get');
    if (params) {

      rb.query('email', params.email);

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
   * The currect design requires only the Id, CompanyName and emailId
   * Req Spec : https://cpmg.atlassian.net/browse/LEX-655
   * Desgin spec: https://codal.invisionapp.com/share/83VLC0B6Q4Y#/screens/401509808
   * Desgin spec: https://codal.invisionapp.com/share/83VLC0B6Q4Y#/screens/402499317
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `v1DmsEmailCheckDuplicateEmailGet$Response()` instead.
   *
   * This method doesn't expect any response body
   */
  v1DmsEmailCheckDuplicateEmailGet(params?: {
    email?: string;

  }): Observable<void> {

    return this.v1DmsEmailCheckDuplicateEmailGet$Response(params).pipe(
      map((r: StrictHttpResponse<void>) => r.body as void)
    );
  }

  /**
   * Path part for operation v1DmsClientClientIdGet
   */
  static readonly V1DmsClientClientIdGetPath = '/v1/DMS/client/{clientId}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `v1DmsClientClientIdGet()` instead.
   *
   * This method doesn't expect any response body
   */
  v1DmsClientClientIdGet$Response(params: {
    clientId: number;

  }): Observable<StrictHttpResponse<void>> {

    const rb = new RequestBuilder(this.rootUrl, DmsService.V1DmsClientClientIdGetPath, 'get');
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
   * To access the full response (for headers, for example), `v1DmsClientClientIdGet$Response()` instead.
   *
   * This method doesn't expect any response body
   */
  v1DmsClientClientIdGet(params: {
    clientId: number;

  }): Observable<void> {

    return this.v1DmsClientClientIdGet$Response(params).pipe(
      map((r: StrictHttpResponse<void>) => r.body as void)
    );
  }

  /**
   * Path part for operation v1DmsGetFolderIdAndPracticeAreaMatterIdGet
   */
  static readonly V1DmsGetFolderIdAndPracticeAreaMatterIdGetPath = '/v1/DMS/GetFolderIdAndPracticeArea/{MatterId}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `v1DmsGetFolderIdAndPracticeAreaMatterIdGet()` instead.
   *
   * This method doesn't expect any response body
   */
  v1DmsGetFolderIdAndPracticeAreaMatterIdGet$Response(params: {
    matterId: number;

  }): Observable<StrictHttpResponse<void>> {

    const rb = new RequestBuilder(this.rootUrl, DmsService.V1DmsGetFolderIdAndPracticeAreaMatterIdGetPath, 'get');
    if (params) {

      rb.path('MatterId', params.matterId);

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
   * To access the full response (for headers, for example), `v1DmsGetFolderIdAndPracticeAreaMatterIdGet$Response()` instead.
   *
   * This method doesn't expect any response body
   */
  v1DmsGetFolderIdAndPracticeAreaMatterIdGet(params: {
    matterId: number;

  }): Observable<void> {

    return this.v1DmsGetFolderIdAndPracticeAreaMatterIdGet$Response(params).pipe(
      map((r: StrictHttpResponse<void>) => r.body as void)
    );
  }

  /**
   * Path part for operation v1DmsMattersClientIdGet
   */
  static readonly V1DmsMattersClientIdGetPath = '/v1/DMS/Matters/{clientId}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `v1DmsMattersClientIdGet()` instead.
   *
   * This method doesn't expect any response body
   */
  v1DmsMattersClientIdGet$Response(params: {
    clientId: number;

  }): Observable<StrictHttpResponse<void>> {

    const rb = new RequestBuilder(this.rootUrl, DmsService.V1DmsMattersClientIdGetPath, 'get');
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
   * To access the full response (for headers, for example), `v1DmsMattersClientIdGet$Response()` instead.
   *
   * This method doesn't expect any response body
   */
  v1DmsMattersClientIdGet(params: {
    clientId: number;

  }): Observable<void> {

    return this.v1DmsMattersClientIdGet$Response(params).pipe(
      map((r: StrictHttpResponse<void>) => r.body as void)
    );
  }

  /**
   * Path part for operation v1DmsExpirationDateEndDateTimeGet
   */
  static readonly V1DmsExpirationDateEndDateTimeGetPath = '/v1/DMS/expirationDate/{endDateTime}';

  /**
   * The currect design requires only the Id, CompanyName and emailId
   * Req Spec : https://cpmg.atlassian.net/browse/LEX-659
   * Desgin spec: https://codal.invisionapp.com/share/83VLC0B6Q4Y#/screens/401509805
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `v1DmsExpirationDateEndDateTimeGet()` instead.
   *
   * This method doesn't expect any response body
   */
  v1DmsExpirationDateEndDateTimeGet$Response(params: {
    endDateTime: string;

  }): Observable<StrictHttpResponse<void>> {

    const rb = new RequestBuilder(this.rootUrl, DmsService.V1DmsExpirationDateEndDateTimeGetPath, 'get');
    if (params) {

      rb.path('endDateTime', params.endDateTime);

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
   * The currect design requires only the Id, CompanyName and emailId
   * Req Spec : https://cpmg.atlassian.net/browse/LEX-659
   * Desgin spec: https://codal.invisionapp.com/share/83VLC0B6Q4Y#/screens/401509805
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `v1DmsExpirationDateEndDateTimeGet$Response()` instead.
   *
   * This method doesn't expect any response body
   */
  v1DmsExpirationDateEndDateTimeGet(params: {
    endDateTime: string;

  }): Observable<void> {

    return this.v1DmsExpirationDateEndDateTimeGet$Response(params).pipe(
      map((r: StrictHttpResponse<void>) => r.body as void)
    );
  }

  /**
   * Path part for operation v1DmsCheckMatterFolderExistsClientIdClientIdMatterIdMatterIdPracticeAreaIdPracticeAreaIdFolderNameFolderNameGet
   */
  static readonly V1DmsCheckMatterFolderExistsClientIdClientIdMatterIdMatterIdPracticeAreaIdPracticeAreaIdFolderNameFolderNameGetPath = '/v1/DMS/CheckMatterFolderExists/clientId/{ClientId}/matterId/{MatterId}/practiceAreaId/{PracticeAreaId}/folderName/{folderName}';

  /**
   * The currect design requires only the Id, CompanyName and emailId
   * Req Spec : https://cpmg.atlassian.net/browse/LEX-912
   * Desgin spec: https://codal.invisionapp.com/share/83VLC0B6Q4Y#/screens/402102057
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `v1DmsCheckMatterFolderExistsClientIdClientIdMatterIdMatterIdPracticeAreaIdPracticeAreaIdFolderNameFolderNameGet()` instead.
   *
   * This method doesn't expect any response body
   */
  v1DmsCheckMatterFolderExistsClientIdClientIdMatterIdMatterIdPracticeAreaIdPracticeAreaIdFolderNameFolderNameGet$Response(params: {
    clientId: number;
    matterId: number;
    practiceAreaId: number;
    folderName: string;

  }): Observable<StrictHttpResponse<void>> {

    const rb = new RequestBuilder(this.rootUrl, DmsService.V1DmsCheckMatterFolderExistsClientIdClientIdMatterIdMatterIdPracticeAreaIdPracticeAreaIdFolderNameFolderNameGetPath, 'get');
    if (params) {

      rb.path('clientId', params.clientId);
      rb.path('matterId', params.matterId);
      rb.path('practiceAreaId', params.practiceAreaId);
      rb.path('folderName', params.folderName);

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
   * The currect design requires only the Id, CompanyName and emailId
   * Req Spec : https://cpmg.atlassian.net/browse/LEX-912
   * Desgin spec: https://codal.invisionapp.com/share/83VLC0B6Q4Y#/screens/402102057
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `v1DmsCheckMatterFolderExistsClientIdClientIdMatterIdMatterIdPracticeAreaIdPracticeAreaIdFolderNameFolderNameGet$Response()` instead.
   *
   * This method doesn't expect any response body
   */
  v1DmsCheckMatterFolderExistsClientIdClientIdMatterIdMatterIdPracticeAreaIdPracticeAreaIdFolderNameFolderNameGet(params: {
    clientId: number;
    matterId: number;
    practiceAreaId: number;
    folderName: string;

  }): Observable<void> {

    return this.v1DmsCheckMatterFolderExistsClientIdClientIdMatterIdMatterIdPracticeAreaIdPracticeAreaIdFolderNameFolderNameGet$Response(params).pipe(
      map((r: StrictHttpResponse<void>) => r.body as void)
    );
  }

  /**
   * Path part for operation v1DmsCreateexistingclientandmatterfolderGet
   */
  static readonly V1DmsCreateexistingclientandmatterfolderGetPath = '/v1/DMS/createexistingclientandmatterfolder';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `v1DmsCreateexistingclientandmatterfolderGet()` instead.
   *
   * This method doesn't expect any response body
   */
  v1DmsCreateexistingclientandmatterfolderGet$Response(params?: {

  }): Observable<StrictHttpResponse<void>> {

    const rb = new RequestBuilder(this.rootUrl, DmsService.V1DmsCreateexistingclientandmatterfolderGetPath, 'get');
    if (params) {


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
   * To access the full response (for headers, for example), `v1DmsCreateexistingclientandmatterfolderGet$Response()` instead.
   *
   * This method doesn't expect any response body
   */
  v1DmsCreateexistingclientandmatterfolderGet(params?: {

  }): Observable<void> {

    return this.v1DmsCreateexistingclientandmatterfolderGet$Response(params).pipe(
      map((r: StrictHttpResponse<void>) => r.body as void)
    );
  }

  /**
   * Path part for operation v1DmsUpdateFileSizeGet
   */
  static readonly V1DmsUpdateFileSizeGetPath = '/v1/DMS/Update/FileSize';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `v1DmsUpdateFileSizeGet()` instead.
   *
   * This method doesn't expect any response body
   */
  v1DmsUpdateFileSizeGet$Response(params?: {

  }): Observable<StrictHttpResponse<void>> {

    const rb = new RequestBuilder(this.rootUrl, DmsService.V1DmsUpdateFileSizeGetPath, 'get');
    if (params) {


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
   * To access the full response (for headers, for example), `v1DmsUpdateFileSizeGet$Response()` instead.
   *
   * This method doesn't expect any response body
   */
  v1DmsUpdateFileSizeGet(params?: {

  }): Observable<void> {

    return this.v1DmsUpdateFileSizeGet$Response(params).pipe(
      map((r: StrictHttpResponse<void>) => r.body as void)
    );
  }

  /**
   * Path part for operation v1DmsMoveUnMoveFileToFolderGet
   */
  static readonly V1DmsMoveUnMoveFileToFolderGetPath = '/v1/DMS/MoveUnMoveFileToFolder';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `v1DmsMoveUnMoveFileToFolderGet()` instead.
   *
   * This method doesn't expect any response body
   */
  v1DmsMoveUnMoveFileToFolderGet$Response(params?: {

  }): Observable<StrictHttpResponse<void>> {

    const rb = new RequestBuilder(this.rootUrl, DmsService.V1DmsMoveUnMoveFileToFolderGetPath, 'get');
    if (params) {


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
   * To access the full response (for headers, for example), `v1DmsMoveUnMoveFileToFolderGet$Response()` instead.
   *
   * This method doesn't expect any response body
   */
  v1DmsMoveUnMoveFileToFolderGet(params?: {

  }): Observable<void> {

    return this.v1DmsMoveUnMoveFileToFolderGet$Response(params).pipe(
      map((r: StrictHttpResponse<void>) => r.body as void)
    );
  }

  /**
   * Path part for operation v1DmsCanRevokeAccessToMatterMatterIdGet
   */
  static readonly V1DmsCanRevokeAccessToMatterMatterIdGetPath = '/v1/DMS/canRevokeAccessToMatter/{matterId}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `v1DmsCanRevokeAccessToMatterMatterIdGet()` instead.
   *
   * This method doesn't expect any response body
   */
  v1DmsCanRevokeAccessToMatterMatterIdGet$Response(params: {
    matterId: number;

  }): Observable<StrictHttpResponse<void>> {

    const rb = new RequestBuilder(this.rootUrl, DmsService.V1DmsCanRevokeAccessToMatterMatterIdGetPath, 'get');
    if (params) {

      rb.path('matterId', params.matterId);

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
   * To access the full response (for headers, for example), `v1DmsCanRevokeAccessToMatterMatterIdGet$Response()` instead.
   *
   * This method doesn't expect any response body
   */
  v1DmsCanRevokeAccessToMatterMatterIdGet(params: {
    matterId: number;

  }): Observable<void> {

    return this.v1DmsCanRevokeAccessToMatterMatterIdGet$Response(params).pipe(
      map((r: StrictHttpResponse<void>) => r.body as void)
    );
  }

  /**
   * Path part for operation v1DmsCanRevokeAccessToClientClientIdGet
   */
  static readonly V1DmsCanRevokeAccessToClientClientIdGetPath = '/v1/DMS/canRevokeAccessToClient/{clientId}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `v1DmsCanRevokeAccessToClientClientIdGet()` instead.
   *
   * This method doesn't expect any response body
   */
  v1DmsCanRevokeAccessToClientClientIdGet$Response(params: {
    clientId: number;

  }): Observable<StrictHttpResponse<void>> {

    const rb = new RequestBuilder(this.rootUrl, DmsService.V1DmsCanRevokeAccessToClientClientIdGetPath, 'get');
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
   * To access the full response (for headers, for example), `v1DmsCanRevokeAccessToClientClientIdGet$Response()` instead.
   *
   * This method doesn't expect any response body
   */
  v1DmsCanRevokeAccessToClientClientIdGet(params: {
    clientId: number;

  }): Observable<void> {

    return this.v1DmsCanRevokeAccessToClientClientIdGet$Response(params).pipe(
      map((r: StrictHttpResponse<void>) => r.body as void)
    );
  }

  /**
   * Path part for operation v1DmsCanRevokeAccessFilesGet
   */
  static readonly V1DmsCanRevokeAccessFilesGetPath = '/v1/DMS/canRevokeAccessFiles';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `v1DmsCanRevokeAccessFilesGet()` instead.
   *
   * This method doesn't expect any response body
   */
  v1DmsCanRevokeAccessFilesGet$Response(params?: {
    fileIds?: Array<number>;

  }): Observable<StrictHttpResponse<void>> {

    const rb = new RequestBuilder(this.rootUrl, DmsService.V1DmsCanRevokeAccessFilesGetPath, 'get');
    if (params) {

      rb.query('fileIds', params.fileIds);

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
   * To access the full response (for headers, for example), `v1DmsCanRevokeAccessFilesGet$Response()` instead.
   *
   * This method doesn't expect any response body
   */
  v1DmsCanRevokeAccessFilesGet(params?: {
    fileIds?: Array<number>;

  }): Observable<void> {

    return this.v1DmsCanRevokeAccessFilesGet$Response(params).pipe(
      map((r: StrictHttpResponse<void>) => r.body as void)
    );
  }

  /**
   * Path part for operation v1DmsCanRevokeAccessFoldersGet
   */
  static readonly V1DmsCanRevokeAccessFoldersGetPath = '/v1/DMS/canRevokeAccessFolders';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `v1DmsCanRevokeAccessFoldersGet()` instead.
   *
   * This method doesn't expect any response body
   */
  v1DmsCanRevokeAccessFoldersGet$Response(params?: {
    folderIds?: Array<number>;

  }): Observable<StrictHttpResponse<void>> {

    const rb = new RequestBuilder(this.rootUrl, DmsService.V1DmsCanRevokeAccessFoldersGetPath, 'get');
    if (params) {

      rb.query('folderIds', params.folderIds);

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
   * To access the full response (for headers, for example), `v1DmsCanRevokeAccessFoldersGet$Response()` instead.
   *
   * This method doesn't expect any response body
   */
  v1DmsCanRevokeAccessFoldersGet(params?: {
    folderIds?: Array<number>;

  }): Observable<void> {

    return this.v1DmsCanRevokeAccessFoldersGet$Response(params).pipe(
      map((r: StrictHttpResponse<void>) => r.body as void)
    );
  }

  /**
   * Path part for operation v1DmsSharedFileClientDetailsByFileIdsGet
   */
  static readonly V1DmsSharedFileClientDetailsByFileIdsGetPath = '/v1/DMS/sharedFileClientDetailsByFileIds';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `v1DmsSharedFileClientDetailsByFileIdsGet()` instead.
   *
   * This method doesn't expect any response body
   */
  v1DmsSharedFileClientDetailsByFileIdsGet$Response(params?: {
    fileIds?: Array<number>;

  }): Observable<StrictHttpResponse<void>> {

    const rb = new RequestBuilder(this.rootUrl, DmsService.V1DmsSharedFileClientDetailsByFileIdsGetPath, 'get');
    if (params) {

      rb.query('fileIds', params.fileIds);

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
   * To access the full response (for headers, for example), `v1DmsSharedFileClientDetailsByFileIdsGet$Response()` instead.
   *
   * This method doesn't expect any response body
   */
  v1DmsSharedFileClientDetailsByFileIdsGet(params?: {
    fileIds?: Array<number>;

  }): Observable<void> {

    return this.v1DmsSharedFileClientDetailsByFileIdsGet$Response(params).pipe(
      map((r: StrictHttpResponse<void>) => r.body as void)
    );
  }

  /**
   * Path part for operation v1DmsSharedFileClientDetailsByFolderIdsGet
   */
  static readonly V1DmsSharedFileClientDetailsByFolderIdsGetPath = '/v1/DMS/sharedFileClientDetailsByFolderIds';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `v1DmsSharedFileClientDetailsByFolderIdsGet()` instead.
   *
   * This method doesn't expect any response body
   */
  v1DmsSharedFileClientDetailsByFolderIdsGet$Response(params?: {
    folderIds?: Array<number>;

  }): Observable<StrictHttpResponse<void>> {

    const rb = new RequestBuilder(this.rootUrl, DmsService.V1DmsSharedFileClientDetailsByFolderIdsGetPath, 'get');
    if (params) {

      rb.query('folderIds', params.folderIds);

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
   * To access the full response (for headers, for example), `v1DmsSharedFileClientDetailsByFolderIdsGet$Response()` instead.
   *
   * This method doesn't expect any response body
   */
  v1DmsSharedFileClientDetailsByFolderIdsGet(params?: {
    folderIds?: Array<number>;

  }): Observable<void> {

    return this.v1DmsSharedFileClientDetailsByFolderIdsGet$Response(params).pipe(
      map((r: StrictHttpResponse<void>) => r.body as void)
    );
  }

  /**
   * Path part for operation v1DmsSharedFilesClientsDetailsGet
   */
  static readonly V1DmsSharedFilesClientsDetailsGetPath = '/v1/DMS/sharedFilesClientsDetails';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `v1DmsSharedFilesClientsDetailsGet$Json()` instead.
   *
   * This method sends `application/json` and handles response body of type `application/json`
   */
  v1DmsSharedFilesClientsDetailsGet$Json$Response(params?: {

    body?: vwDMSShare
  }): Observable<StrictHttpResponse<void>> {

    const rb = new RequestBuilder(this.rootUrl, DmsService.V1DmsSharedFilesClientsDetailsGetPath, 'get');
    if (params) {


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
   * To access the full response (for headers, for example), `v1DmsSharedFilesClientsDetailsGet$Json$Response()` instead.
   *
   * This method sends `application/json` and handles response body of type `application/json`
   */
  v1DmsSharedFilesClientsDetailsGet$Json(params?: {

    body?: vwDMSShare
  }): Observable<void> {

    return this.v1DmsSharedFilesClientsDetailsGet$Json$Response(params).pipe(
      map((r: StrictHttpResponse<void>) => r.body as void)
    );
  }

  /**
   * Path part for operation v1DmsCountSelectedFilesGet
   */
  static readonly V1DmsCountSelectedFilesGetPath = '/v1/DMS/countSelectedFiles';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `v1DmsCountSelectedFilesGet$Json()` instead.
   *
   * This method sends `application/json` and handles response body of type `application/json`
   */
  v1DmsCountSelectedFilesGet$Json$Response(params?: {

    body?: vwDMSShare
  }): Observable<StrictHttpResponse<void>> {

    const rb = new RequestBuilder(this.rootUrl, DmsService.V1DmsCountSelectedFilesGetPath, 'get');
    if (params) {


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
   * To access the full response (for headers, for example), `v1DmsCountSelectedFilesGet$Json$Response()` instead.
   *
   * This method sends `application/json` and handles response body of type `application/json`
   */
  v1DmsCountSelectedFilesGet$Json(params?: {

    body?: vwDMSShare
  }): Observable<void> {

    return this.v1DmsCountSelectedFilesGet$Json$Response(params).pipe(
      map((r: StrictHttpResponse<void>) => r.body as void)
    );
  }

  /**
   * Path part for operation v1DmsRevokeShareAccessPut
   */
  static readonly V1DmsRevokeShareAccessPutPath = '/v1/DMS/revokeShareAccess';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `v1DmsRevokeShareAccessPut$Json()` instead.
   *
   * This method sends `application/json` and handles response body of type `application/json`
   */
  v1DmsRevokeShareAccessPut$Json$Response(params?: {

    body?: clsRevokeShareAccess
  }): Observable<StrictHttpResponse<void>> {

    const rb = new RequestBuilder(this.rootUrl, DmsService.V1DmsRevokeShareAccessPutPath, 'put');
    if (params) {


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
   * To access the full response (for headers, for example), `v1DmsRevokeShareAccessPut$Json$Response()` instead.
   *
   * This method sends `application/json` and handles response body of type `application/json`
   */
  v1DmsRevokeShareAccessPut$Json(params?: {

    body?: clsRevokeShareAccess
  }): Observable<void> {

    return this.v1DmsRevokeShareAccessPut$Json$Response(params).pipe(
      map((r: StrictHttpResponse<void>) => r.body as void)
    );
  }

  /**
   * Path part for operation v1DmsListOfFileIdsByFolderIdsGet
   */
  static readonly V1DmsListOfFileIdsByFolderIdsGetPath = '/v1/DMS/listOfFileIdsByFolderIds';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `v1DmsListOfFileIdsByFolderIdsGet()` instead.
   *
   * This method doesn't expect any response body
   */
  v1DmsListOfFileIdsByFolderIdsGet$Response(params?: {
    folderIds?: Array<number>;

  }): Observable<StrictHttpResponse<void>> {

    const rb = new RequestBuilder(this.rootUrl, DmsService.V1DmsListOfFileIdsByFolderIdsGetPath, 'get');
    if (params) {

      rb.query('folderIds', params.folderIds);

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
   * To access the full response (for headers, for example), `v1DmsListOfFileIdsByFolderIdsGet$Response()` instead.
   *
   * This method doesn't expect any response body
   */
  v1DmsListOfFileIdsByFolderIdsGet(params?: {
    folderIds?: Array<number>;

  }): Observable<void> {

    return this.v1DmsListOfFileIdsByFolderIdsGet$Response(params).pipe(
      map((r: StrictHttpResponse<void>) => r.body as void)
    );
  }

  /**
   * Path part for operation v1DmsGrantShareAccessBulkPut
   */
  static readonly V1DmsGrantShareAccessBulkPutPath = '/v1/DMS/grantShareAccessBulk';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `v1DmsGrantShareAccessBulkPut$Json()` instead.
   *
   * This method sends `application/json` and handles response body of type `application/json`
   */
  v1DmsGrantShareAccessBulkPut$Json$Response(params?: {

    body?: clsGrantDocumentAccess
  }): Observable<StrictHttpResponse<void>> {

    const rb = new RequestBuilder(this.rootUrl, DmsService.V1DmsGrantShareAccessBulkPutPath, 'put');
    if (params) {


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
   * To access the full response (for headers, for example), `v1DmsGrantShareAccessBulkPut$Json$Response()` instead.
   *
   * This method sends `application/json` and handles response body of type `application/json`
   */
  v1DmsGrantShareAccessBulkPut$Json(params?: {

    body?: clsGrantDocumentAccess
  }): Observable<void> {

    return this.v1DmsGrantShareAccessBulkPut$Json$Response(params).pipe(
      map((r: StrictHttpResponse<void>) => r.body as void)
    );
  }

  /**
   * Path part for operation v1DmsPersonPersonIdCanGrantShareRightsGet
   */
  static readonly V1DmsPersonPersonIdCanGrantShareRightsGetPath = '/v1/DMS/person/{personId}/canGrantShareRights';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `v1DmsPersonPersonIdCanGrantShareRightsGet()` instead.
   *
   * This method doesn't expect any response body
   */
  v1DmsPersonPersonIdCanGrantShareRightsGet$Response(params: {
    personId: number;
    docType?: DocType;
    matterId?: number;
    clientId?: number;

  }): Observable<StrictHttpResponse<void>> {

    const rb = new RequestBuilder(this.rootUrl, DmsService.V1DmsPersonPersonIdCanGrantShareRightsGetPath, 'get');
    if (params) {

      rb.path('personId', params.personId);
      rb.query('docType', params.docType);
      rb.query('matterId', params.matterId);
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
   * To access the full response (for headers, for example), `v1DmsPersonPersonIdCanGrantShareRightsGet$Response()` instead.
   *
   * This method doesn't expect any response body
   */
  v1DmsPersonPersonIdCanGrantShareRightsGet(params: {
    personId: number;
    docType?: DocType;
    matterId?: number;
    clientId?: number;

  }): Observable<void> {

    return this.v1DmsPersonPersonIdCanGrantShareRightsGet$Response(params).pipe(
      map((r: StrictHttpResponse<void>) => r.body as void)
    );
  }

  /**
   * Path part for operation v1DmsDocumentSharedetailsPost
   */
  static readonly V1DmsDocumentSharedetailsPostPath = '/v1/DMS/document/sharedetails';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `v1DmsDocumentSharedetailsPost$Json()` instead.
   *
   * This method sends `application/json` and handles response body of type `application/json`
   */
  v1DmsDocumentSharedetailsPost$Json$Response(params?: {

    body?: vmGetDocumentAccessDetailsInfo
  }): Observable<StrictHttpResponse<void>> {

    const rb = new RequestBuilder(this.rootUrl, DmsService.V1DmsDocumentSharedetailsPostPath, 'post');
    if (params) {


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
   * To access the full response (for headers, for example), `v1DmsDocumentSharedetailsPost$Json$Response()` instead.
   *
   * This method sends `application/json` and handles response body of type `application/json`
   */
  v1DmsDocumentSharedetailsPost$Json(params?: {

    body?: vmGetDocumentAccessDetailsInfo
  }): Observable<void> {

    return this.v1DmsDocumentSharedetailsPost$Json$Response(params).pipe(
      map((r: StrictHttpResponse<void>) => r.body as void)
    );
  }

  /**
   * Path part for operation v1DmsEmployeesFoldersFolderIdRevokeShareRightsPatch
   */
  static readonly V1DmsEmployeesFoldersFolderIdRevokeShareRightsPatchPath = '/v1/DMS/employees/folders/{folderId}/revokeShareRights';

  /**
   * Design: https://codal.invisionapp.com/share/83VLC0B6Q4Y#/screens/401133675
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `v1DmsEmployeesFoldersFolderIdRevokeShareRightsPatch$Json()` instead.
   *
   * This method sends `application/json` and handles response body of type `application/json`
   */
  v1DmsEmployeesFoldersFolderIdRevokeShareRightsPatch$Json$Response(params: {
    folderId: number;

    body?: RevokeShareRights
  }): Observable<StrictHttpResponse<void>> {

    const rb = new RequestBuilder(this.rootUrl, DmsService.V1DmsEmployeesFoldersFolderIdRevokeShareRightsPatchPath, 'patch');
    if (params) {

      rb.path('folderId', params.folderId);

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
   * Design: https://codal.invisionapp.com/share/83VLC0B6Q4Y#/screens/401133675
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `v1DmsEmployeesFoldersFolderIdRevokeShareRightsPatch$Json$Response()` instead.
   *
   * This method sends `application/json` and handles response body of type `application/json`
   */
  v1DmsEmployeesFoldersFolderIdRevokeShareRightsPatch$Json(params: {
    folderId: number;

    body?: RevokeShareRights
  }): Observable<void> {

    return this.v1DmsEmployeesFoldersFolderIdRevokeShareRightsPatch$Json$Response(params).pipe(
      map((r: StrictHttpResponse<void>) => r.body as void)
    );
  }

  /**
   * Path part for operation v1DmsEmployeesFoldersShareRightsPost
   */
  static readonly V1DmsEmployeesFoldersShareRightsPostPath = '/v1/DMS/employees/folders/shareRights';

  /**
   * Design: https://codal.invisionapp.com/share/83VLC0B6Q4Y#/screens/401133675
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `v1DmsEmployeesFoldersShareRightsPost$Json()` instead.
   *
   * This method sends `application/json` and handles response body of type `application/json`
   */
  v1DmsEmployeesFoldersShareRightsPost$Json$Response(params?: {

    body?: GrantEmployeeShareRight
  }): Observable<StrictHttpResponse<void>> {

    const rb = new RequestBuilder(this.rootUrl, DmsService.V1DmsEmployeesFoldersShareRightsPostPath, 'post');
    if (params) {


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
   * Design: https://codal.invisionapp.com/share/83VLC0B6Q4Y#/screens/401133675
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `v1DmsEmployeesFoldersShareRightsPost$Json$Response()` instead.
   *
   * This method sends `application/json` and handles response body of type `application/json`
   */
  v1DmsEmployeesFoldersShareRightsPost$Json(params?: {

    body?: GrantEmployeeShareRight
  }): Observable<void> {

    return this.v1DmsEmployeesFoldersShareRightsPost$Json$Response(params).pipe(
      map((r: StrictHttpResponse<void>) => r.body as void)
    );
  }

  /**
   * Path part for operation v1DmsEmployeesFoldersFolderIdShareRightsGet
   */
  static readonly V1DmsEmployeesFoldersFolderIdShareRightsGetPath = '/v1/DMS/employees/folders/{folderId}/shareRights';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `v1DmsEmployeesFoldersFolderIdShareRightsGet$Plain()` instead.
   *
   * This method doesn't expect any response body
   */
  v1DmsEmployeesFoldersFolderIdShareRightsGet$Plain$Response(params: {
    folderId: number;

  }): Observable<StrictHttpResponse<ShareRights>> {

    const rb = new RequestBuilder(this.rootUrl, DmsService.V1DmsEmployeesFoldersFolderIdShareRightsGetPath, 'get');
    if (params) {

      rb.path('folderId', params.folderId);

    }
    return this.http.request(rb.build({
      responseType: 'text',
      accept: 'text/plain'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<ShareRights>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `v1DmsEmployeesFoldersFolderIdShareRightsGet$Plain$Response()` instead.
   *
   * This method doesn't expect any response body
   */
  v1DmsEmployeesFoldersFolderIdShareRightsGet$Plain(params: {
    folderId: number;

  }): Observable<ShareRights> {

    return this.v1DmsEmployeesFoldersFolderIdShareRightsGet$Plain$Response(params).pipe(
      map((r: StrictHttpResponse<ShareRights>) => r.body as ShareRights)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `v1DmsEmployeesFoldersFolderIdShareRightsGet$Json()` instead.
   *
   * This method doesn't expect any response body
   */
  v1DmsEmployeesFoldersFolderIdShareRightsGet$Json$Response(params: {
    folderId: number;

  }): Observable<StrictHttpResponse<ShareRights>> {

    const rb = new RequestBuilder(this.rootUrl, DmsService.V1DmsEmployeesFoldersFolderIdShareRightsGetPath, 'get');
    if (params) {

      rb.path('folderId', params.folderId);

    }
    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'application/json'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<ShareRights>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `v1DmsEmployeesFoldersFolderIdShareRightsGet$Json$Response()` instead.
   *
   * This method doesn't expect any response body
   */
  v1DmsEmployeesFoldersFolderIdShareRightsGet$Json(params: {
    folderId: number;

  }): Observable<ShareRights> {

    return this.v1DmsEmployeesFoldersFolderIdShareRightsGet$Json$Response(params).pipe(
      map((r: StrictHttpResponse<ShareRights>) => r.body as ShareRights)
    );
  }

  /**
   * Path part for operation v1DmsDocumentFileIdPersonIdRevokeShareRightsDelete
   */
  static readonly V1DmsDocumentFileIdPersonIdRevokeShareRightsDeletePath = '/v1/DMS/document/{fileId}/{personId}/revokeShareRights';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `v1DmsDocumentFileIdPersonIdRevokeShareRightsDelete()` instead.
   *
   * This method doesn't expect any response body
   */
  v1DmsDocumentFileIdPersonIdRevokeShareRightsDelete$Response(params: {
    personId: number;
    fileId: number;

  }): Observable<StrictHttpResponse<void>> {

    const rb = new RequestBuilder(this.rootUrl, DmsService.V1DmsDocumentFileIdPersonIdRevokeShareRightsDeletePath, 'delete');
    if (params) {

      rb.path('personId', params.personId);
      rb.path('fileId', params.fileId);

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
   * To access the full response (for headers, for example), `v1DmsDocumentFileIdPersonIdRevokeShareRightsDelete$Response()` instead.
   *
   * This method doesn't expect any response body
   */
  v1DmsDocumentFileIdPersonIdRevokeShareRightsDelete(params: {
    personId: number;
    fileId: number;

  }): Observable<void> {

    return this.v1DmsDocumentFileIdPersonIdRevokeShareRightsDelete$Response(params).pipe(
      map((r: StrictHttpResponse<void>) => r.body as void)
    );
  }

  /**
   * Path part for operation v1DmsDocumentportalSharedFolderAndDocumentPersonIdFolderIdGet
   */
  static readonly V1DmsDocumentportalSharedFolderAndDocumentPersonIdFolderIdGetPath = '/v1/DMS/documentportal/sharedFolderAndDocument/{personId}/{folderId}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `v1DmsDocumentportalSharedFolderAndDocumentPersonIdFolderIdGet()` instead.
   *
   * This method doesn't expect any response body
   */
  v1DmsDocumentportalSharedFolderAndDocumentPersonIdFolderIdGet$Response(params: {
    personId: number;
    folderId: number;

  }): Observable<StrictHttpResponse<void>> {

    const rb = new RequestBuilder(this.rootUrl, DmsService.V1DmsDocumentportalSharedFolderAndDocumentPersonIdFolderIdGetPath, 'get');
    if (params) {

      rb.path('personId', params.personId);
      rb.path('folderId', params.folderId);

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
   * To access the full response (for headers, for example), `v1DmsDocumentportalSharedFolderAndDocumentPersonIdFolderIdGet$Response()` instead.
   *
   * This method doesn't expect any response body
   */
  v1DmsDocumentportalSharedFolderAndDocumentPersonIdFolderIdGet(params: {
    personId: number;
    folderId: number;

  }): Observable<void> {

    return this.v1DmsDocumentportalSharedFolderAndDocumentPersonIdFolderIdGet$Response(params).pipe(
      map((r: StrictHttpResponse<void>) => r.body as void)
    );
  }

  /**
   * Path part for operation v1DmsPortalAccountGet
   */
  static readonly V1DmsPortalAccountGetPath = '/v1/DMS/PortalAccount';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `v1DmsPortalAccountGet()` instead.
   *
   * This method doesn't expect any response body
   */
  v1DmsPortalAccountGet$Response(params?: {

  }): Observable<StrictHttpResponse<void>> {

    const rb = new RequestBuilder(this.rootUrl, DmsService.V1DmsPortalAccountGetPath, 'get');
    if (params) {


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
   * To access the full response (for headers, for example), `v1DmsPortalAccountGet$Response()` instead.
   *
   * This method doesn't expect any response body
   */
  v1DmsPortalAccountGet(params?: {

  }): Observable<void> {

    return this.v1DmsPortalAccountGet$Response(params).pipe(
      map((r: StrictHttpResponse<void>) => r.body as void)
    );
  }

  /**
   * Path part for operation v1DmsActiveOrDeactivePortalGet
   */
  static readonly V1DmsActiveOrDeactivePortalGetPath = '/v1/DMS/ActiveOrDeactivePortal';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `v1DmsActiveOrDeactivePortalGet()` instead.
   *
   * This method doesn't expect any response body
   */
  v1DmsActiveOrDeactivePortalGet$Response(params?: {
    id?: number;
    isActivated?: boolean;

  }): Observable<StrictHttpResponse<void>> {

    const rb = new RequestBuilder(this.rootUrl, DmsService.V1DmsActiveOrDeactivePortalGetPath, 'get');
    if (params) {

      rb.query('id', params.id);
      rb.query('isActivated', params.isActivated);

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
   * To access the full response (for headers, for example), `v1DmsActiveOrDeactivePortalGet$Response()` instead.
   *
   * This method doesn't expect any response body
   */
  v1DmsActiveOrDeactivePortalGet(params?: {
    id?: number;
    isActivated?: boolean;

  }): Observable<void> {

    return this.v1DmsActiveOrDeactivePortalGet$Response(params).pipe(
      map((r: StrictHttpResponse<void>) => r.body as void)
    );
  }

  /**
   * Path part for operation v1DmsDeleteDocumentportalIdDelete
   */
  static readonly V1DmsDeleteDocumentportalIdDeletePath = '/v1/DMS/delete/documentportal/{id}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `v1DmsDeleteDocumentportalIdDelete()` instead.
   *
   * This method doesn't expect any response body
   */
  v1DmsDeleteDocumentportalIdDelete$Response(params: {
    id: number;

  }): Observable<StrictHttpResponse<void>> {

    const rb = new RequestBuilder(this.rootUrl, DmsService.V1DmsDeleteDocumentportalIdDeletePath, 'delete');
    if (params) {

      rb.path('id', params.id);

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
   * To access the full response (for headers, for example), `v1DmsDeleteDocumentportalIdDelete$Response()` instead.
   *
   * This method doesn't expect any response body
   */
  v1DmsDeleteDocumentportalIdDelete(params: {
    id: number;

  }): Observable<void> {

    return this.v1DmsDeleteDocumentportalIdDelete$Response(params).pipe(
      map((r: StrictHttpResponse<void>) => r.body as void)
    );
  }

  /**
   * Path part for operation v1DmsCreateDocumentportalPost
   */
  static readonly V1DmsCreateDocumentportalPostPath = '/v1/DMS/create/documentportal';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `v1DmsCreateDocumentportalPost$Json()` instead.
   *
   * This method sends `application/json` and handles response body of type `application/json`
   */
  v1DmsCreateDocumentportalPost$Json$Response(params?: {

    body?: vwDocumentPortalAccountParam
  }): Observable<StrictHttpResponse<void>> {

    const rb = new RequestBuilder(this.rootUrl, DmsService.V1DmsCreateDocumentportalPostPath, 'post');
    if (params) {


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
   * To access the full response (for headers, for example), `v1DmsCreateDocumentportalPost$Json$Response()` instead.
   *
   * This method sends `application/json` and handles response body of type `application/json`
   */
  v1DmsCreateDocumentportalPost$Json(params?: {

    body?: vwDocumentPortalAccountParam
  }): Observable<void> {

    return this.v1DmsCreateDocumentportalPost$Json$Response(params).pipe(
      map((r: StrictHttpResponse<void>) => r.body as void)
    );
  }

  /**
   * Path part for operation v1DmsUpdateDocumentportalPost
   */
  static readonly V1DmsUpdateDocumentportalPostPath = '/v1/DMS/update/documentportal';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `v1DmsUpdateDocumentportalPost$Json()` instead.
   *
   * This method sends `application/json` and handles response body of type `application/json`
   */
  v1DmsUpdateDocumentportalPost$Json$Response(params?: {

    body?: vwDocumentPortalAccountParam
  }): Observable<StrictHttpResponse<void>> {

    const rb = new RequestBuilder(this.rootUrl, DmsService.V1DmsUpdateDocumentportalPostPath, 'post');
    if (params) {


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
   * To access the full response (for headers, for example), `v1DmsUpdateDocumentportalPost$Json$Response()` instead.
   *
   * This method sends `application/json` and handles response body of type `application/json`
   */
  v1DmsUpdateDocumentportalPost$Json(params?: {

    body?: vwDocumentPortalAccountParam
  }): Observable<void> {

    return this.v1DmsUpdateDocumentportalPost$Json$Response(params).pipe(
      map((r: StrictHttpResponse<void>) => r.body as void)
    );
  }

  /**
   * Path part for operation v1DmsResendInvitationEmailPersonIdGet
   */
  static readonly V1DmsResendInvitationEmailPersonIdGetPath = '/v1/DMS/ResendInvitationEmail/{personId}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `v1DmsResendInvitationEmailPersonIdGet()` instead.
   *
   * This method doesn't expect any response body
   */
  v1DmsResendInvitationEmailPersonIdGet$Response(params: {
    personId: number;

  }): Observable<StrictHttpResponse<void>> {

    const rb = new RequestBuilder(this.rootUrl, DmsService.V1DmsResendInvitationEmailPersonIdGetPath, 'get');
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
   * To access the full response (for headers, for example), `v1DmsResendInvitationEmailPersonIdGet$Response()` instead.
   *
   * This method doesn't expect any response body
   */
  v1DmsResendInvitationEmailPersonIdGet(params: {
    personId: number;

  }): Observable<void> {

    return this.v1DmsResendInvitationEmailPersonIdGet$Response(params).pipe(
      map((r: StrictHttpResponse<void>) => r.body as void)
    );
  }

  /**
   * Path part for operation v1DmsGetSharedDocumentPersonIdGet
   */
  static readonly V1DmsGetSharedDocumentPersonIdGetPath = '/v1/DMS/GetSharedDocument/{personId}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `v1DmsGetSharedDocumentPersonIdGet()` instead.
   *
   * This method doesn't expect any response body
   */
  v1DmsGetSharedDocumentPersonIdGet$Response(params: {
    personId: number;

  }): Observable<StrictHttpResponse<void>> {

    const rb = new RequestBuilder(this.rootUrl, DmsService.V1DmsGetSharedDocumentPersonIdGetPath, 'get');
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
   * To access the full response (for headers, for example), `v1DmsGetSharedDocumentPersonIdGet$Response()` instead.
   *
   * This method doesn't expect any response body
   */
  v1DmsGetSharedDocumentPersonIdGet(params: {
    personId: number;

  }): Observable<void> {

    return this.v1DmsGetSharedDocumentPersonIdGet$Response(params).pipe(
      map((r: StrictHttpResponse<void>) => r.body as void)
    );
  }

  /**
   * Path part for operation v1DmsUsersExternalValidateemailPost
   */
  static readonly V1DmsUsersExternalValidateemailPostPath = '/v1/DMS/users/external/validateemail';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `v1DmsUsersExternalValidateemailPost$Json()` instead.
   *
   * This method sends `application/json` and handles response body of type `application/json`
   */
  v1DmsUsersExternalValidateemailPost$Json$Response(params?: {

    body?: vmValidateEmailAddressInfo
  }): Observable<StrictHttpResponse<void>> {

    const rb = new RequestBuilder(this.rootUrl, DmsService.V1DmsUsersExternalValidateemailPostPath, 'post');
    if (params) {


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
   * To access the full response (for headers, for example), `v1DmsUsersExternalValidateemailPost$Json$Response()` instead.
   *
   * This method sends `application/json` and handles response body of type `application/json`
   */
  v1DmsUsersExternalValidateemailPost$Json(params?: {

    body?: vmValidateEmailAddressInfo
  }): Observable<void> {

    return this.v1DmsUsersExternalValidateemailPost$Json$Response(params).pipe(
      map((r: StrictHttpResponse<void>) => r.body as void)
    );
  }

  /**
   * Path part for operation v1DmsAddAccessDocumentportalPost
   */
  static readonly V1DmsAddAccessDocumentportalPostPath = '/v1/DMS/AddAccess/documentportal';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `v1DmsAddAccessDocumentportalPost$Json()` instead.
   *
   * This method sends `application/json` and handles response body of type `application/json`
   */
  v1DmsAddAccessDocumentportalPost$Json$Response(params?: {
    isFromDmsPortal?: boolean;

    body?: vwDMSShare
  }): Observable<StrictHttpResponse<void>> {

    const rb = new RequestBuilder(this.rootUrl, DmsService.V1DmsAddAccessDocumentportalPostPath, 'post');
    if (params) {

      rb.query('IsFromDMSPortal', params.isFromDmsPortal);

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
   * To access the full response (for headers, for example), `v1DmsAddAccessDocumentportalPost$Json$Response()` instead.
   *
   * This method sends `application/json` and handles response body of type `application/json`
   */
  v1DmsAddAccessDocumentportalPost$Json(params?: {
    isFromDmsPortal?: boolean;

    body?: vwDMSShare
  }): Observable<void> {

    return this.v1DmsAddAccessDocumentportalPost$Json$Response(params).pipe(
      map((r: StrictHttpResponse<void>) => r.body as void)
    );
  }

  /**
   * Path part for operation v1DmsSearchGet
   */
  static readonly V1DmsSearchGetPath = '/v1/DMS/search';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `v1DmsSearchGet()` instead.
   *
   * This method doesn't expect any response body
   */
  v1DmsSearchGet$Response(params?: {
    search?: string;
    pageIndex?: number;
    pageSize?: number;

  }): Observable<StrictHttpResponse<void>> {

    const rb = new RequestBuilder(this.rootUrl, DmsService.V1DmsSearchGetPath, 'get');
    if (params) {

      rb.query('search', params.search);
      rb.query('pageIndex', params.pageIndex);
      rb.query('pageSize', params.pageSize);

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
   * To access the full response (for headers, for example), `v1DmsSearchGet$Response()` instead.
   *
   * This method doesn't expect any response body
   */
  v1DmsSearchGet(params?: {
    search?: string;
    pageIndex?: number;
    pageSize?: number;

  }): Observable<void> {

    return this.v1DmsSearchGet$Response(params).pipe(
      map((r: StrictHttpResponse<void>) => r.body as void)
    );
  }

  /**
   * Path part for operation v1DmsFolderCreateFolderNameGet
   */
  static readonly V1DmsFolderCreateFolderNameGetPath = '/v1/DMS/folder/create/{folderName}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `v1DmsFolderCreateFolderNameGet()` instead.
   *
   * This method doesn't expect any response body
   */
  v1DmsFolderCreateFolderNameGet$Response(params: {
    folderName: string;
    isSystem?: boolean;
    currentFolderFullPath?: string;

  }): Observable<StrictHttpResponse<void>> {

    const rb = new RequestBuilder(this.rootUrl, DmsService.V1DmsFolderCreateFolderNameGetPath, 'get');
    if (params) {

      rb.path('folderName', params.folderName);
      rb.query('isSystem', params.isSystem);
      rb.query('currentFolderFullPath', params.currentFolderFullPath);

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
   * To access the full response (for headers, for example), `v1DmsFolderCreateFolderNameGet$Response()` instead.
   *
   * This method doesn't expect any response body
   */
  v1DmsFolderCreateFolderNameGet(params: {
    folderName: string;
    isSystem?: boolean;
    currentFolderFullPath?: string;

  }): Observable<void> {

    return this.v1DmsFolderCreateFolderNameGet$Response(params).pipe(
      map((r: StrictHttpResponse<void>) => r.body as void)
    );
  }

  /**
   * Path part for operation v1DmsFolderListGet
   */
  static readonly V1DmsFolderListGetPath = '/v1/DMS/folder/list';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `v1DmsFolderListGet()` instead.
   *
   * This method doesn't expect any response body
   */
  v1DmsFolderListGet$Response(params?: {
    page?: number;
    pageSize?: number;
    includeFiles?: boolean;
    getAllSubfolders?: boolean;

  }): Observable<StrictHttpResponse<void>> {

    const rb = new RequestBuilder(this.rootUrl, DmsService.V1DmsFolderListGetPath, 'get');
    if (params) {

      rb.query('page', params.page);
      rb.query('pageSize', params.pageSize);
      rb.query('includeFiles', params.includeFiles);
      rb.query('getAllSubfolders', params.getAllSubfolders);

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
   * To access the full response (for headers, for example), `v1DmsFolderListGet$Response()` instead.
   *
   * This method doesn't expect any response body
   */
  v1DmsFolderListGet(params?: {
    page?: number;
    pageSize?: number;
    includeFiles?: boolean;
    getAllSubfolders?: boolean;

  }): Observable<void> {

    return this.v1DmsFolderListGet$Response(params).pipe(
      map((r: StrictHttpResponse<void>) => r.body as void)
    );
  }

  /**
   * Path part for operation v1DmsFoldersFolderIdContentGet
   */
  static readonly V1DmsFoldersFolderIdContentGetPath = '/v1/DMS/folders/{folderId}/content';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `v1DmsFoldersFolderIdContentGet()` instead.
   *
   * This method doesn't expect any response body
   */
  v1DmsFoldersFolderIdContentGet$Response(params: {
    folderId: number;

  }): Observable<StrictHttpResponse<void>> {

    const rb = new RequestBuilder(this.rootUrl, DmsService.V1DmsFoldersFolderIdContentGetPath, 'get');
    if (params) {

      rb.path('folderId', params.folderId);

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
   * To access the full response (for headers, for example), `v1DmsFoldersFolderIdContentGet$Response()` instead.
   *
   * This method doesn't expect any response body
   */
  v1DmsFoldersFolderIdContentGet(params: {
    folderId: number;

  }): Observable<void> {

    return this.v1DmsFoldersFolderIdContentGet$Response(params).pipe(
      map((r: StrictHttpResponse<void>) => r.body as void)
    );
  }

  /**
   * Path part for operation v1DmsFolderMatterMatterIdGet
   */
  static readonly V1DmsFolderMatterMatterIdGetPath = '/v1/DMS/folder/matter/{matterId}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `v1DmsFolderMatterMatterIdGet()` instead.
   *
   * This method doesn't expect any response body
   */
  v1DmsFolderMatterMatterIdGet$Response(params: {
    matterId: number;

  }): Observable<StrictHttpResponse<void>> {

    const rb = new RequestBuilder(this.rootUrl, DmsService.V1DmsFolderMatterMatterIdGetPath, 'get');
    if (params) {

      rb.path('matterId', params.matterId);

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
   * To access the full response (for headers, for example), `v1DmsFolderMatterMatterIdGet$Response()` instead.
   *
   * This method doesn't expect any response body
   */
  v1DmsFolderMatterMatterIdGet(params: {
    matterId: number;

  }): Observable<void> {

    return this.v1DmsFolderMatterMatterIdGet$Response(params).pipe(
      map((r: StrictHttpResponse<void>) => r.body as void)
    );
  }

  /**
   * Path part for operation v1DmsFolderRenameSourceNameTargetNameGet
   */
  static readonly V1DmsFolderRenameSourceNameTargetNameGetPath = '/v1/DMS/folder/rename/{sourceName}/{targetName}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `v1DmsFolderRenameSourceNameTargetNameGet()` instead.
   *
   * This method doesn't expect any response body
   */
  v1DmsFolderRenameSourceNameTargetNameGet$Response(params: {
    sourceName: string;
    targetName: string;
    currentFolderFullPath?: string;

  }): Observable<StrictHttpResponse<void>> {

    const rb = new RequestBuilder(this.rootUrl, DmsService.V1DmsFolderRenameSourceNameTargetNameGetPath, 'get');
    if (params) {

      rb.path('sourceName', params.sourceName);
      rb.path('targetName', params.targetName);
      rb.query('currentFolderFullPath', params.currentFolderFullPath);

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
   * To access the full response (for headers, for example), `v1DmsFolderRenameSourceNameTargetNameGet$Response()` instead.
   *
   * This method doesn't expect any response body
   */
  v1DmsFolderRenameSourceNameTargetNameGet(params: {
    sourceName: string;
    targetName: string;
    currentFolderFullPath?: string;

  }): Observable<void> {

    return this.v1DmsFolderRenameSourceNameTargetNameGet$Response(params).pipe(
      map((r: StrictHttpResponse<void>) => r.body as void)
    );
  }

  /**
   * Path part for operation v1DmsFolderMoveGet
   */
  static readonly V1DmsFolderMoveGetPath = '/v1/DMS/folder/move';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `v1DmsFolderMoveGet()` instead.
   *
   * This method doesn't expect any response body
   */
  v1DmsFolderMoveGet$Response(params?: {
    sourceFullPath?: string;
    targetFullPath?: string;

  }): Observable<StrictHttpResponse<void>> {

    const rb = new RequestBuilder(this.rootUrl, DmsService.V1DmsFolderMoveGetPath, 'get');
    if (params) {

      rb.query('sourceFullPath', params.sourceFullPath);
      rb.query('targetFullPath', params.targetFullPath);

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
   * To access the full response (for headers, for example), `v1DmsFolderMoveGet$Response()` instead.
   *
   * This method doesn't expect any response body
   */
  v1DmsFolderMoveGet(params?: {
    sourceFullPath?: string;
    targetFullPath?: string;

  }): Observable<void> {

    return this.v1DmsFolderMoveGet$Response(params).pipe(
      map((r: StrictHttpResponse<void>) => r.body as void)
    );
  }

  /**
   * Path part for operation v1DmsFolderArchiveFolderIdGet
   */
  static readonly V1DmsFolderArchiveFolderIdGetPath = '/v1/DMS/folder/archive/{folderId}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `v1DmsFolderArchiveFolderIdGet()` instead.
   *
   * This method doesn't expect any response body
   */
  v1DmsFolderArchiveFolderIdGet$Response(params: {
    folderId: number;

  }): Observable<StrictHttpResponse<void>> {

    const rb = new RequestBuilder(this.rootUrl, DmsService.V1DmsFolderArchiveFolderIdGetPath, 'get');
    if (params) {

      rb.path('folderId', params.folderId);

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
   * To access the full response (for headers, for example), `v1DmsFolderArchiveFolderIdGet$Response()` instead.
   *
   * This method doesn't expect any response body
   */
  v1DmsFolderArchiveFolderIdGet(params: {
    folderId: number;

  }): Observable<void> {

    return this.v1DmsFolderArchiveFolderIdGet$Response(params).pipe(
      map((r: StrictHttpResponse<void>) => r.body as void)
    );
  }

  /**
   * Path part for operation v1DmsFolderArchivePost
   */
  static readonly V1DmsFolderArchivePostPath = '/v1/DMS/folder/archive';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `v1DmsFolderArchivePost$Json()` instead.
   *
   * This method sends `application/json` and handles response body of type `application/json`
   */
  v1DmsFolderArchivePost$Json$Response(params?: {

    body?: Array<number>
  }): Observable<StrictHttpResponse<void>> {

    const rb = new RequestBuilder(this.rootUrl, DmsService.V1DmsFolderArchivePostPath, 'post');
    if (params) {


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
   * To access the full response (for headers, for example), `v1DmsFolderArchivePost$Json$Response()` instead.
   *
   * This method sends `application/json` and handles response body of type `application/json`
   */
  v1DmsFolderArchivePost$Json(params?: {

    body?: Array<number>
  }): Observable<void> {

    return this.v1DmsFolderArchivePost$Json$Response(params).pipe(
      map((r: StrictHttpResponse<void>) => r.body as void)
    );
  }

  /**
   * Path part for operation v1DmsFolderUnarchiveFolderIdGet
   */
  static readonly V1DmsFolderUnarchiveFolderIdGetPath = '/v1/DMS/folder/unarchive/{folderId}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `v1DmsFolderUnarchiveFolderIdGet()` instead.
   *
   * This method doesn't expect any response body
   */
  v1DmsFolderUnarchiveFolderIdGet$Response(params: {
    folderId: number;

  }): Observable<StrictHttpResponse<void>> {

    const rb = new RequestBuilder(this.rootUrl, DmsService.V1DmsFolderUnarchiveFolderIdGetPath, 'get');
    if (params) {

      rb.path('folderId', params.folderId);

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
   * To access the full response (for headers, for example), `v1DmsFolderUnarchiveFolderIdGet$Response()` instead.
   *
   * This method doesn't expect any response body
   */
  v1DmsFolderUnarchiveFolderIdGet(params: {
    folderId: number;

  }): Observable<void> {

    return this.v1DmsFolderUnarchiveFolderIdGet$Response(params).pipe(
      map((r: StrictHttpResponse<void>) => r.body as void)
    );
  }

  /**
   * Path part for operation v1DmsFolderUnarchivePost
   */
  static readonly V1DmsFolderUnarchivePostPath = '/v1/DMS/folder/unarchive';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `v1DmsFolderUnarchivePost$Json()` instead.
   *
   * This method sends `application/json` and handles response body of type `application/json`
   */
  v1DmsFolderUnarchivePost$Json$Response(params?: {

    body?: Array<number>
  }): Observable<StrictHttpResponse<void>> {

    const rb = new RequestBuilder(this.rootUrl, DmsService.V1DmsFolderUnarchivePostPath, 'post');
    if (params) {


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
   * To access the full response (for headers, for example), `v1DmsFolderUnarchivePost$Json$Response()` instead.
   *
   * This method sends `application/json` and handles response body of type `application/json`
   */
  v1DmsFolderUnarchivePost$Json(params?: {

    body?: Array<number>
  }): Observable<void> {

    return this.v1DmsFolderUnarchivePost$Json$Response(params).pipe(
      map((r: StrictHttpResponse<void>) => r.body as void)
    );
  }

  /**
   * Path part for operation v1DmsFolderZipDmsFolderIdGet
   */
  static readonly V1DmsFolderZipDmsFolderIdGetPath = '/v1/DMS/folder/zip/{dmsFolderId}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `v1DmsFolderZipDmsFolderIdGet()` instead.
   *
   * This method doesn't expect any response body
   */
  v1DmsFolderZipDmsFolderIdGet$Response(params: {
    dmsFolderId: number;

  }): Observable<StrictHttpResponse<void>> {

    const rb = new RequestBuilder(this.rootUrl, DmsService.V1DmsFolderZipDmsFolderIdGetPath, 'get');
    if (params) {

      rb.path('dmsFolderId', params.dmsFolderId);

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
   * To access the full response (for headers, for example), `v1DmsFolderZipDmsFolderIdGet$Response()` instead.
   *
   * This method doesn't expect any response body
   */
  v1DmsFolderZipDmsFolderIdGet(params: {
    dmsFolderId: number;

  }): Observable<void> {

    return this.v1DmsFolderZipDmsFolderIdGet$Response(params).pipe(
      map((r: StrictHttpResponse<void>) => r.body as void)
    );
  }

  /**
   * Path part for operation v1DmsFoldersMattersMatterIdGet
   */
  static readonly V1DmsFoldersMattersMatterIdGetPath = '/v1/DMS/folders/matters/{matterId}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `v1DmsFoldersMattersMatterIdGet$Plain()` instead.
   *
   * This method doesn't expect any response body
   */
  v1DmsFoldersMattersMatterIdGet$Plain$Response(params: {
    matterId: number;

  }): Observable<StrictHttpResponse<Array<BaseFolder>>> {

    const rb = new RequestBuilder(this.rootUrl, DmsService.V1DmsFoldersMattersMatterIdGetPath, 'get');
    if (params) {

      rb.path('matterId', params.matterId);

    }
    return this.http.request(rb.build({
      responseType: 'text',
      accept: 'text/plain'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<Array<BaseFolder>>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `v1DmsFoldersMattersMatterIdGet$Plain$Response()` instead.
   *
   * This method doesn't expect any response body
   */
  v1DmsFoldersMattersMatterIdGet$Plain(params: {
    matterId: number;

  }): Observable<Array<BaseFolder>> {

    return this.v1DmsFoldersMattersMatterIdGet$Plain$Response(params).pipe(
      map((r: StrictHttpResponse<Array<BaseFolder>>) => r.body as Array<BaseFolder>)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `v1DmsFoldersMattersMatterIdGet$Json()` instead.
   *
   * This method doesn't expect any response body
   */
  v1DmsFoldersMattersMatterIdGet$Json$Response(params: {
    matterId: number;

  }): Observable<StrictHttpResponse<Array<BaseFolder>>> {

    const rb = new RequestBuilder(this.rootUrl, DmsService.V1DmsFoldersMattersMatterIdGetPath, 'get');
    if (params) {

      rb.path('matterId', params.matterId);

    }
    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'application/json'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<Array<BaseFolder>>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `v1DmsFoldersMattersMatterIdGet$Json$Response()` instead.
   *
   * This method doesn't expect any response body
   */
  v1DmsFoldersMattersMatterIdGet$Json(params: {
    matterId: number;

  }): Observable<Array<BaseFolder>> {

    return this.v1DmsFoldersMattersMatterIdGet$Json$Response(params).pipe(
      map((r: StrictHttpResponse<Array<BaseFolder>>) => r.body as Array<BaseFolder>)
    );
  }

  /**
   * Path part for operation v1DmsFoldersPracticeAreaPracticeAreaIdGet
   */
  static readonly V1DmsFoldersPracticeAreaPracticeAreaIdGetPath = '/v1/DMS/folders/practiceArea/{practiceAreaId}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `v1DmsFoldersPracticeAreaPracticeAreaIdGet$Plain()` instead.
   *
   * This method doesn't expect any response body
   */
  v1DmsFoldersPracticeAreaPracticeAreaIdGet$Plain$Response(params: {
    practiceAreaId: number;

  }): Observable<StrictHttpResponse<Array<PracticeAreaFolderOut>>> {

    const rb = new RequestBuilder(this.rootUrl, DmsService.V1DmsFoldersPracticeAreaPracticeAreaIdGetPath, 'get');
    if (params) {

      rb.path('practiceAreaId', params.practiceAreaId);

    }
    return this.http.request(rb.build({
      responseType: 'text',
      accept: 'text/plain'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<Array<PracticeAreaFolderOut>>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `v1DmsFoldersPracticeAreaPracticeAreaIdGet$Plain$Response()` instead.
   *
   * This method doesn't expect any response body
   */
  v1DmsFoldersPracticeAreaPracticeAreaIdGet$Plain(params: {
    practiceAreaId: number;

  }): Observable<Array<PracticeAreaFolderOut>> {

    return this.v1DmsFoldersPracticeAreaPracticeAreaIdGet$Plain$Response(params).pipe(
      map((r: StrictHttpResponse<Array<PracticeAreaFolderOut>>) => r.body as Array<PracticeAreaFolderOut>)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `v1DmsFoldersPracticeAreaPracticeAreaIdGet$Json()` instead.
   *
   * This method doesn't expect any response body
   */
  v1DmsFoldersPracticeAreaPracticeAreaIdGet$Json$Response(params: {
    practiceAreaId: number;

  }): Observable<StrictHttpResponse<Array<PracticeAreaFolderOut>>> {

    const rb = new RequestBuilder(this.rootUrl, DmsService.V1DmsFoldersPracticeAreaPracticeAreaIdGetPath, 'get');
    if (params) {

      rb.path('practiceAreaId', params.practiceAreaId);

    }
    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'application/json'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<Array<PracticeAreaFolderOut>>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `v1DmsFoldersPracticeAreaPracticeAreaIdGet$Json$Response()` instead.
   *
   * This method doesn't expect any response body
   */
  v1DmsFoldersPracticeAreaPracticeAreaIdGet$Json(params: {
    practiceAreaId: number;

  }): Observable<Array<PracticeAreaFolderOut>> {

    return this.v1DmsFoldersPracticeAreaPracticeAreaIdGet$Json$Response(params).pipe(
      map((r: StrictHttpResponse<Array<PracticeAreaFolderOut>>) => r.body as Array<PracticeAreaFolderOut>)
    );
  }

  /**
   * Path part for operation v1DmsTenantFolderGet
   */
  static readonly V1DmsTenantFolderGetPath = '/v1/DMS/TenantFolder';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `v1DmsTenantFolderGet()` instead.
   *
   * This method doesn't expect any response body
   */
  v1DmsTenantFolderGet$Response(params?: {

  }): Observable<StrictHttpResponse<void>> {

    const rb = new RequestBuilder(this.rootUrl, DmsService.V1DmsTenantFolderGetPath, 'get');
    if (params) {


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
   * To access the full response (for headers, for example), `v1DmsTenantFolderGet$Response()` instead.
   *
   * This method doesn't expect any response body
   */
  v1DmsTenantFolderGet(params?: {

  }): Observable<void> {

    return this.v1DmsTenantFolderGet$Response(params).pipe(
      map((r: StrictHttpResponse<void>) => r.body as void)
    );
  }

  /**
   * Path part for operation v1DmsTenantFolderPersonIdGet
   */
  static readonly V1DmsTenantFolderPersonIdGetPath = '/v1/DMS/TenantFolder/{personId}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `v1DmsTenantFolderPersonIdGet()` instead.
   *
   * This method doesn't expect any response body
   */
  v1DmsTenantFolderPersonIdGet$Response(params: {
    personId: number;

  }): Observable<StrictHttpResponse<void>> {

    const rb = new RequestBuilder(this.rootUrl, DmsService.V1DmsTenantFolderPersonIdGetPath, 'get');
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
   * To access the full response (for headers, for example), `v1DmsTenantFolderPersonIdGet$Response()` instead.
   *
   * This method doesn't expect any response body
   */
  v1DmsTenantFolderPersonIdGet(params: {
    personId: number;

  }): Observable<void> {

    return this.v1DmsTenantFolderPersonIdGet$Response(params).pipe(
      map((r: StrictHttpResponse<void>) => r.body as void)
    );
  }

  /**
   * Path part for operation v1DmsFoldersFolderIdCanBulkShareGet
   */
  static readonly V1DmsFoldersFolderIdCanBulkShareGetPath = '/v1/DMS/folders/{folderId}/CanBulkShare';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `v1DmsFoldersFolderIdCanBulkShareGet()` instead.
   *
   * This method doesn't expect any response body
   */
  v1DmsFoldersFolderIdCanBulkShareGet$Response(params: {
    folderId: number;

  }): Observable<StrictHttpResponse<void>> {

    const rb = new RequestBuilder(this.rootUrl, DmsService.V1DmsFoldersFolderIdCanBulkShareGetPath, 'get');
    if (params) {

      rb.path('folderId', params.folderId);

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
   * To access the full response (for headers, for example), `v1DmsFoldersFolderIdCanBulkShareGet$Response()` instead.
   *
   * This method doesn't expect any response body
   */
  v1DmsFoldersFolderIdCanBulkShareGet(params: {
    folderId: number;

  }): Observable<void> {

    return this.v1DmsFoldersFolderIdCanBulkShareGet$Response(params).pipe(
      map((r: StrictHttpResponse<void>) => r.body as void)
    );
  }

  /**
   * Path part for operation v1DmsMattersMatterIdFoldersSystemFolderIdGet
   */
  static readonly V1DmsMattersMatterIdFoldersSystemFolderIdGetPath = '/v1/DMS/matters/{matterId}/folders/{systemFolderId}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `v1DmsMattersMatterIdFoldersSystemFolderIdGet()` instead.
   *
   * This method doesn't expect any response body
   */
  v1DmsMattersMatterIdFoldersSystemFolderIdGet$Response(params: {
    matterId: number;
    systemFolderId: number;

  }): Observable<StrictHttpResponse<void>> {

    const rb = new RequestBuilder(this.rootUrl, DmsService.V1DmsMattersMatterIdFoldersSystemFolderIdGetPath, 'get');
    if (params) {

      rb.path('matterId', params.matterId);
      rb.path('systemFolderId', params.systemFolderId);

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
   * To access the full response (for headers, for example), `v1DmsMattersMatterIdFoldersSystemFolderIdGet$Response()` instead.
   *
   * This method doesn't expect any response body
   */
  v1DmsMattersMatterIdFoldersSystemFolderIdGet(params: {
    matterId: number;
    systemFolderId: number;

  }): Observable<void> {

    return this.v1DmsMattersMatterIdFoldersSystemFolderIdGet$Response(params).pipe(
      map((r: StrictHttpResponse<void>) => r.body as void)
    );
  }

  /**
   * Path part for operation v1DmsMattersFoldersGet
   */
  static readonly V1DmsMattersFoldersGetPath = '/v1/DMS/matters/folders';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `v1DmsMattersFoldersGet()` instead.
   *
   * This method doesn't expect any response body
   */
  v1DmsMattersFoldersGet$Response(params?: {
    matterId?: number;
    systemFolderName?: string;

  }): Observable<StrictHttpResponse<void>> {

    const rb = new RequestBuilder(this.rootUrl, DmsService.V1DmsMattersFoldersGetPath, 'get');
    if (params) {

      rb.query('matterId', params.matterId);
      rb.query('systemFolderName', params.systemFolderName);

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
   * To access the full response (for headers, for example), `v1DmsMattersFoldersGet$Response()` instead.
   *
   * This method doesn't expect any response body
   */
  v1DmsMattersFoldersGet(params?: {
    matterId?: number;
    systemFolderName?: string;

  }): Observable<void> {

    return this.v1DmsMattersFoldersGet$Response(params).pipe(
      map((r: StrictHttpResponse<void>) => r.body as void)
    );
  }

  /**
   * Path part for operation v1DmsDeleteMatterFolderMatterIdDelete
   */
  static readonly V1DmsDeleteMatterFolderMatterIdDeletePath = '/v1/DMS/delete/MatterFolder/{matterId}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `v1DmsDeleteMatterFolderMatterIdDelete()` instead.
   *
   * This method doesn't expect any response body
   */
  v1DmsDeleteMatterFolderMatterIdDelete$Response(params: {
    matterId: number;

  }): Observable<StrictHttpResponse<void>> {

    const rb = new RequestBuilder(this.rootUrl, DmsService.V1DmsDeleteMatterFolderMatterIdDeletePath, 'delete');
    if (params) {

      rb.path('matterId', params.matterId);

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
   * To access the full response (for headers, for example), `v1DmsDeleteMatterFolderMatterIdDelete$Response()` instead.
   *
   * This method doesn't expect any response body
   */
  v1DmsDeleteMatterFolderMatterIdDelete(params: {
    matterId: number;

  }): Observable<void> {

    return this.v1DmsDeleteMatterFolderMatterIdDelete$Response(params).pipe(
      map((r: StrictHttpResponse<void>) => r.body as void)
    );
  }

  /**
   * Path part for operation v1DmsFolderDocumentPortalSearchListGet
   */
  static readonly V1DmsFolderDocumentPortalSearchListGetPath = '/v1/DMS/folder/DocumentPortal/Search/list';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `v1DmsFolderDocumentPortalSearchListGet()` instead.
   *
   * This method doesn't expect any response body
   */
  v1DmsFolderDocumentPortalSearchListGet$Response(params?: {

  }): Observable<StrictHttpResponse<void>> {

    const rb = new RequestBuilder(this.rootUrl, DmsService.V1DmsFolderDocumentPortalSearchListGetPath, 'get');
    if (params) {


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
   * To access the full response (for headers, for example), `v1DmsFolderDocumentPortalSearchListGet$Response()` instead.
   *
   * This method doesn't expect any response body
   */
  v1DmsFolderDocumentPortalSearchListGet(params?: {

  }): Observable<void> {

    return this.v1DmsFolderDocumentPortalSearchListGet$Response(params).pipe(
      map((r: StrictHttpResponse<void>) => r.body as void)
    );
  }

  /**
   * Path part for operation v1DmsFolderDisbursementReceiptMatterMatterIdGet
   */
  static readonly V1DmsFolderDisbursementReceiptMatterMatterIdGetPath = '/v1/DMS/folder/DisbursementReceipt/matter/{matterId}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `v1DmsFolderDisbursementReceiptMatterMatterIdGet()` instead.
   *
   * This method doesn't expect any response body
   */
  v1DmsFolderDisbursementReceiptMatterMatterIdGet$Response(params: {
    matterId: number;

  }): Observable<StrictHttpResponse<void>> {

    const rb = new RequestBuilder(this.rootUrl, DmsService.V1DmsFolderDisbursementReceiptMatterMatterIdGetPath, 'get');
    if (params) {

      rb.path('matterId', params.matterId);

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
   * To access the full response (for headers, for example), `v1DmsFolderDisbursementReceiptMatterMatterIdGet$Response()` instead.
   *
   * This method doesn't expect any response body
   */
  v1DmsFolderDisbursementReceiptMatterMatterIdGet(params: {
    matterId: number;

  }): Observable<void> {

    return this.v1DmsFolderDisbursementReceiptMatterMatterIdGet$Response(params).pipe(
      map((r: StrictHttpResponse<void>) => r.body as void)
    );
  }

  /**
   * Path part for operation v1DmsDeleteClientFolderClientIdDelete
   */
  static readonly V1DmsDeleteClientFolderClientIdDeletePath = '/v1/DMS/delete/ClientFolder/{clientId}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `v1DmsDeleteClientFolderClientIdDelete()` instead.
   *
   * This method doesn't expect any response body
   */
  v1DmsDeleteClientFolderClientIdDelete$Response(params: {
    clientId: number;

  }): Observable<StrictHttpResponse<void>> {

    const rb = new RequestBuilder(this.rootUrl, DmsService.V1DmsDeleteClientFolderClientIdDeletePath, 'delete');
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
   * To access the full response (for headers, for example), `v1DmsDeleteClientFolderClientIdDelete$Response()` instead.
   *
   * This method doesn't expect any response body
   */
  v1DmsDeleteClientFolderClientIdDelete(params: {
    clientId: number;

  }): Observable<void> {

    return this.v1DmsDeleteClientFolderClientIdDelete$Response(params).pipe(
      map((r: StrictHttpResponse<void>) => r.body as void)
    );
  }

  /**
   * Path part for operation v1DmsGetFolderDetailFolderIdGet
   */
  static readonly V1DmsGetFolderDetailFolderIdGetPath = '/v1/DMS/GetFolderDetail/{folderId}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `v1DmsGetFolderDetailFolderIdGet()` instead.
   *
   * This method doesn't expect any response body
   */
  v1DmsGetFolderDetailFolderIdGet$Response(params: {
    folderId: number;

  }): Observable<StrictHttpResponse<void>> {

    const rb = new RequestBuilder(this.rootUrl, DmsService.V1DmsGetFolderDetailFolderIdGetPath, 'get');
    if (params) {

      rb.path('folderId', params.folderId);

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
   * To access the full response (for headers, for example), `v1DmsGetFolderDetailFolderIdGet$Response()` instead.
   *
   * This method doesn't expect any response body
   */
  v1DmsGetFolderDetailFolderIdGet(params: {
    folderId: number;

  }): Observable<void> {

    return this.v1DmsGetFolderDetailFolderIdGet$Response(params).pipe(
      map((r: StrictHttpResponse<void>) => r.body as void)
    );
  }

  /**
   * Path part for operation v1DmsFolderSubFoldersFolderIdGet
   */
  static readonly V1DmsFolderSubFoldersFolderIdGetPath = '/v1/DMS/Folder/SubFolders/{folderId}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `v1DmsFolderSubFoldersFolderIdGet()` instead.
   *
   * This method doesn't expect any response body
   */
  v1DmsFolderSubFoldersFolderIdGet$Response(params: {
    folderId: number;

  }): Observable<StrictHttpResponse<void>> {

    const rb = new RequestBuilder(this.rootUrl, DmsService.V1DmsFolderSubFoldersFolderIdGetPath, 'get');
    if (params) {

      rb.path('folderId', params.folderId);

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
   * To access the full response (for headers, for example), `v1DmsFolderSubFoldersFolderIdGet$Response()` instead.
   *
   * This method doesn't expect any response body
   */
  v1DmsFolderSubFoldersFolderIdGet(params: {
    folderId: number;

  }): Observable<void> {

    return this.v1DmsFolderSubFoldersFolderIdGet$Response(params).pipe(
      map((r: StrictHttpResponse<void>) => r.body as void)
    );
  }

  /**
   * Path part for operation v1DmsBulkDownloadPost
   */
  static readonly V1DmsBulkDownloadPostPath = '/v1/DMS/bulkDownload';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `v1DmsBulkDownloadPost$Json()` instead.
   *
   * This method sends `application/json` and handles response body of type `application/json`
   */
  v1DmsBulkDownloadPost$Json$Response(params?: {

    body?: vwBulkDownload
  }): Observable<StrictHttpResponse<void>> {

    const rb = new RequestBuilder(this.rootUrl, DmsService.V1DmsBulkDownloadPostPath, 'post');
    if (params) {


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
   * To access the full response (for headers, for example), `v1DmsBulkDownloadPost$Json$Response()` instead.
   *
   * This method sends `application/json` and handles response body of type `application/json`
   */
  v1DmsBulkDownloadPost$Json(params?: {

    body?: vwBulkDownload
  }): Observable<void> {

    return this.v1DmsBulkDownloadPost$Json$Response(params).pipe(
      map((r: StrictHttpResponse<void>) => r.body as void)
    );
  }

  /**
   * Path part for operation v1DmsFileListFolderIdGet
   */
  static readonly V1DmsFileListFolderIdGetPath = '/v1/DMS/file/list/{folderId}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `v1DmsFileListFolderIdGet()` instead.
   *
   * This method doesn't expect any response body
   */
  v1DmsFileListFolderIdGet$Response(params: {
    folderId: number;
    page?: number;
    pageSize?: number;

  }): Observable<StrictHttpResponse<void>> {

    const rb = new RequestBuilder(this.rootUrl, DmsService.V1DmsFileListFolderIdGetPath, 'get');
    if (params) {

      rb.path('folderId', params.folderId);
      rb.query('page', params.page);
      rb.query('pageSize', params.pageSize);

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
   * To access the full response (for headers, for example), `v1DmsFileListFolderIdGet$Response()` instead.
   *
   * This method doesn't expect any response body
   */
  v1DmsFileListFolderIdGet(params: {
    folderId: number;
    page?: number;
    pageSize?: number;

  }): Observable<void> {

    return this.v1DmsFileListFolderIdGet$Response(params).pipe(
      map((r: StrictHttpResponse<void>) => r.body as void)
    );
  }

  /**
   * Path part for operation v1DmsFileRenameSourceNameTargetNameGet
   */
  static readonly V1DmsFileRenameSourceNameTargetNameGetPath = '/v1/DMS/file/rename/{sourceName}/{targetName}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `v1DmsFileRenameSourceNameTargetNameGet()` instead.
   *
   * This method doesn't expect any response body
   */
  v1DmsFileRenameSourceNameTargetNameGet$Response(params: {
    sourceName: string;
    targetName: string;
    currentFolderFullPath?: string;

  }): Observable<StrictHttpResponse<void>> {

    const rb = new RequestBuilder(this.rootUrl, DmsService.V1DmsFileRenameSourceNameTargetNameGetPath, 'get');
    if (params) {

      rb.path('sourceName', params.sourceName);
      rb.path('targetName', params.targetName);
      rb.query('currentFolderFullPath', params.currentFolderFullPath);

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
   * To access the full response (for headers, for example), `v1DmsFileRenameSourceNameTargetNameGet$Response()` instead.
   *
   * This method doesn't expect any response body
   */
  v1DmsFileRenameSourceNameTargetNameGet(params: {
    sourceName: string;
    targetName: string;
    currentFolderFullPath?: string;

  }): Observable<void> {

    return this.v1DmsFileRenameSourceNameTargetNameGet$Response(params).pipe(
      map((r: StrictHttpResponse<void>) => r.body as void)
    );
  }

  /**
   * Path part for operation v1DmsFileMoveGet
   */
  static readonly V1DmsFileMoveGetPath = '/v1/DMS/file/move';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `v1DmsFileMoveGet()` instead.
   *
   * This method doesn't expect any response body
   */
  v1DmsFileMoveGet$Response(params?: {
    sourceFullPath?: string;
    targetFullPath?: string;
    isForApproveDocument?: boolean;

  }): Observable<StrictHttpResponse<void>> {

    const rb = new RequestBuilder(this.rootUrl, DmsService.V1DmsFileMoveGetPath, 'get');
    if (params) {

      rb.query('sourceFullPath', params.sourceFullPath);
      rb.query('targetFullPath', params.targetFullPath);
      rb.query('isForApproveDocument', params.isForApproveDocument);

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
   * To access the full response (for headers, for example), `v1DmsFileMoveGet$Response()` instead.
   *
   * This method doesn't expect any response body
   */
  v1DmsFileMoveGet(params?: {
    sourceFullPath?: string;
    targetFullPath?: string;
    isForApproveDocument?: boolean;

  }): Observable<void> {

    return this.v1DmsFileMoveGet$Response(params).pipe(
      map((r: StrictHttpResponse<void>) => r.body as void)
    );
  }

  /**
   * Path part for operation v1DmsFileCheckinDmsFileIdGet
   */
  static readonly V1DmsFileCheckinDmsFileIdGetPath = '/v1/DMS/file/checkin/{dmsFileId}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `v1DmsFileCheckinDmsFileIdGet()` instead.
   *
   * This method doesn't expect any response body
   */
  v1DmsFileCheckinDmsFileIdGet$Response(params: {
    dmsFileId: number;

  }): Observable<StrictHttpResponse<void>> {

    const rb = new RequestBuilder(this.rootUrl, DmsService.V1DmsFileCheckinDmsFileIdGetPath, 'get');
    if (params) {

      rb.path('dmsFileId', params.dmsFileId);

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
   * To access the full response (for headers, for example), `v1DmsFileCheckinDmsFileIdGet$Response()` instead.
   *
   * This method doesn't expect any response body
   */
  v1DmsFileCheckinDmsFileIdGet(params: {
    dmsFileId: number;

  }): Observable<void> {

    return this.v1DmsFileCheckinDmsFileIdGet$Response(params).pipe(
      map((r: StrictHttpResponse<void>) => r.body as void)
    );
  }

  /**
   * Path part for operation v1DmsFileForcecheckinDmsFileIdGet
   */
  static readonly V1DmsFileForcecheckinDmsFileIdGetPath = '/v1/DMS/file/forcecheckin/{dmsFileId}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `v1DmsFileForcecheckinDmsFileIdGet()` instead.
   *
   * This method doesn't expect any response body
   */
  v1DmsFileForcecheckinDmsFileIdGet$Response(params: {
    dmsFileId: number;

  }): Observable<StrictHttpResponse<void>> {

    const rb = new RequestBuilder(this.rootUrl, DmsService.V1DmsFileForcecheckinDmsFileIdGetPath, 'get');
    if (params) {

      rb.path('dmsFileId', params.dmsFileId);

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
   * To access the full response (for headers, for example), `v1DmsFileForcecheckinDmsFileIdGet$Response()` instead.
   *
   * This method doesn't expect any response body
   */
  v1DmsFileForcecheckinDmsFileIdGet(params: {
    dmsFileId: number;

  }): Observable<void> {

    return this.v1DmsFileForcecheckinDmsFileIdGet$Response(params).pipe(
      map((r: StrictHttpResponse<void>) => r.body as void)
    );
  }

  /**
   * Path part for operation v1DmsFilesFileIdCheckoutPost
   */
  static readonly V1DmsFilesFileIdCheckoutPostPath = '/v1/DMS/files/{fileId}/checkout';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `v1DmsFilesFileIdCheckoutPost()` instead.
   *
   * This method doesn't expect any response body
   */
  v1DmsFilesFileIdCheckoutPost$Response(params: {
    fileId: number;

  }): Observable<StrictHttpResponse<void>> {

    const rb = new RequestBuilder(this.rootUrl, DmsService.V1DmsFilesFileIdCheckoutPostPath, 'post');
    if (params) {

      rb.path('fileId', params.fileId);

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
   * To access the full response (for headers, for example), `v1DmsFilesFileIdCheckoutPost$Response()` instead.
   *
   * This method doesn't expect any response body
   */
  v1DmsFilesFileIdCheckoutPost(params: {
    fileId: number;

  }): Observable<void> {

    return this.v1DmsFilesFileIdCheckoutPost$Response(params).pipe(
      map((r: StrictHttpResponse<void>) => r.body as void)
    );
  }

  /**
   * Path part for operation v1DmsFilesFileIdCheckinPost
   */
  static readonly V1DmsFilesFileIdCheckinPostPath = '/v1/DMS/files/{fileId}/checkin';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `v1DmsFilesFileIdCheckinPost()` instead.
   *
   * This method doesn't expect any response body
   */
  v1DmsFilesFileIdCheckinPost$Response(params: {
    fileId: number;
    isFromDesktopApp?: boolean;

  }): Observable<StrictHttpResponse<void>> {

    const rb = new RequestBuilder(this.rootUrl, DmsService.V1DmsFilesFileIdCheckinPostPath, 'post');
    if (params) {

      rb.path('fileId', params.fileId);
      rb.query('isFromDesktopApp', params.isFromDesktopApp);

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
   * To access the full response (for headers, for example), `v1DmsFilesFileIdCheckinPost$Response()` instead.
   *
   * This method doesn't expect any response body
   */
  v1DmsFilesFileIdCheckinPost(params: {
    fileId: number;
    isFromDesktopApp?: boolean;

  }): Observable<void> {

    return this.v1DmsFilesFileIdCheckinPost$Response(params).pipe(
      map((r: StrictHttpResponse<void>) => r.body as void)
    );
  }

  /**
   * Path part for operation v1DmsFileCheckoutDmsFileIdGet
   */
  static readonly V1DmsFileCheckoutDmsFileIdGetPath = '/v1/DMS/file/checkout/{dmsFileId}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `v1DmsFileCheckoutDmsFileIdGet()` instead.
   *
   * This method doesn't expect any response body
   */
  v1DmsFileCheckoutDmsFileIdGet$Response(params: {
    dmsFileId: number;

  }): Observable<StrictHttpResponse<void>> {

    const rb = new RequestBuilder(this.rootUrl, DmsService.V1DmsFileCheckoutDmsFileIdGetPath, 'get');
    if (params) {

      rb.path('dmsFileId', params.dmsFileId);

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
   * To access the full response (for headers, for example), `v1DmsFileCheckoutDmsFileIdGet$Response()` instead.
   *
   * This method doesn't expect any response body
   */
  v1DmsFileCheckoutDmsFileIdGet(params: {
    dmsFileId: number;

  }): Observable<void> {

    return this.v1DmsFileCheckoutDmsFileIdGet$Response(params).pipe(
      map((r: StrictHttpResponse<void>) => r.body as void)
    );
  }

  /**
   * Path part for operation v1DmsFileCheckoutOverridePost
   */
  static readonly V1DmsFileCheckoutOverridePostPath = '/v1/DMS/file/checkout/override';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `v1DmsFileCheckoutOverridePost$Json()` instead.
   *
   * This method sends `application/json` and handles response body of type `application/json`
   */
  v1DmsFileCheckoutOverridePost$Json$Response(params?: {

    body?: Array<number>
  }): Observable<StrictHttpResponse<void>> {

    const rb = new RequestBuilder(this.rootUrl, DmsService.V1DmsFileCheckoutOverridePostPath, 'post');
    if (params) {


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
   * To access the full response (for headers, for example), `v1DmsFileCheckoutOverridePost$Json$Response()` instead.
   *
   * This method sends `application/json` and handles response body of type `application/json`
   */
  v1DmsFileCheckoutOverridePost$Json(params?: {

    body?: Array<number>
  }): Observable<void> {

    return this.v1DmsFileCheckoutOverridePost$Json$Response(params).pipe(
      map((r: StrictHttpResponse<void>) => r.body as void)
    );
  }

  /**
   * Path part for operation v1DmsFileCheckoutAvailablePost
   */
  static readonly V1DmsFileCheckoutAvailablePostPath = '/v1/DMS/file/checkout/available';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `v1DmsFileCheckoutAvailablePost$Json()` instead.
   *
   * This method sends `application/json` and handles response body of type `application/json`
   */
  v1DmsFileCheckoutAvailablePost$Json$Response(params?: {

    body?: Array<number>
  }): Observable<StrictHttpResponse<void>> {

    const rb = new RequestBuilder(this.rootUrl, DmsService.V1DmsFileCheckoutAvailablePostPath, 'post');
    if (params) {


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
   * To access the full response (for headers, for example), `v1DmsFileCheckoutAvailablePost$Json$Response()` instead.
   *
   * This method sends `application/json` and handles response body of type `application/json`
   */
  v1DmsFileCheckoutAvailablePost$Json(params?: {

    body?: Array<number>
  }): Observable<void> {

    return this.v1DmsFileCheckoutAvailablePost$Json$Response(params).pipe(
      map((r: StrictHttpResponse<void>) => r.body as void)
    );
  }

  /**
   * Path part for operation v1DmsFileCheckoutAllAftercheckinPost
   */
  static readonly V1DmsFileCheckoutAllAftercheckinPostPath = '/v1/DMS/file/checkout/all/aftercheckin';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `v1DmsFileCheckoutAllAftercheckinPost$Json()` instead.
   *
   * This method sends `application/json` and handles response body of type `application/json`
   */
  v1DmsFileCheckoutAllAftercheckinPost$Json$Response(params?: {

    body?: Array<number>
  }): Observable<StrictHttpResponse<void>> {

    const rb = new RequestBuilder(this.rootUrl, DmsService.V1DmsFileCheckoutAllAftercheckinPostPath, 'post');
    if (params) {


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
   * To access the full response (for headers, for example), `v1DmsFileCheckoutAllAftercheckinPost$Json$Response()` instead.
   *
   * This method sends `application/json` and handles response body of type `application/json`
   */
  v1DmsFileCheckoutAllAftercheckinPost$Json(params?: {

    body?: Array<number>
  }): Observable<void> {

    return this.v1DmsFileCheckoutAllAftercheckinPost$Json$Response(params).pipe(
      map((r: StrictHttpResponse<void>) => r.body as void)
    );
  }

  /**
   * Path part for operation v1DmsFileCheckoutMultiplePost
   */
  static readonly V1DmsFileCheckoutMultiplePostPath = '/v1/DMS/file/checkout/multiple';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `v1DmsFileCheckoutMultiplePost$Json()` instead.
   *
   * This method sends `application/json` and handles response body of type `application/json`
   */
  v1DmsFileCheckoutMultiplePost$Json$Response(params?: {

    body?: Array<number>
  }): Observable<StrictHttpResponse<void>> {

    const rb = new RequestBuilder(this.rootUrl, DmsService.V1DmsFileCheckoutMultiplePostPath, 'post');
    if (params) {


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
   * To access the full response (for headers, for example), `v1DmsFileCheckoutMultiplePost$Json$Response()` instead.
   *
   * This method sends `application/json` and handles response body of type `application/json`
   */
  v1DmsFileCheckoutMultiplePost$Json(params?: {

    body?: Array<number>
  }): Observable<void> {

    return this.v1DmsFileCheckoutMultiplePost$Json$Response(params).pipe(
      map((r: StrictHttpResponse<void>) => r.body as void)
    );
  }

  /**
   * Path part for operation v1DmsFileVersionHistoryDmsFileIdGet
   */
  static readonly V1DmsFileVersionHistoryDmsFileIdGetPath = '/v1/DMS/file/version/history/{dmsFileId}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `v1DmsFileVersionHistoryDmsFileIdGet()` instead.
   *
   * This method doesn't expect any response body
   */
  v1DmsFileVersionHistoryDmsFileIdGet$Response(params: {
    dmsFileId: number;

  }): Observable<StrictHttpResponse<void>> {

    const rb = new RequestBuilder(this.rootUrl, DmsService.V1DmsFileVersionHistoryDmsFileIdGetPath, 'get');
    if (params) {

      rb.path('dmsFileId', params.dmsFileId);

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
   * To access the full response (for headers, for example), `v1DmsFileVersionHistoryDmsFileIdGet$Response()` instead.
   *
   * This method doesn't expect any response body
   */
  v1DmsFileVersionHistoryDmsFileIdGet(params: {
    dmsFileId: number;

  }): Observable<void> {

    return this.v1DmsFileVersionHistoryDmsFileIdGet$Response(params).pipe(
      map((r: StrictHttpResponse<void>) => r.body as void)
    );
  }

  /**
   * Path part for operation v1DmsFileCheckoutHistoryDmsFileIdGet
   */
  static readonly V1DmsFileCheckoutHistoryDmsFileIdGetPath = '/v1/DMS/file/checkout/history/{dmsFileId}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `v1DmsFileCheckoutHistoryDmsFileIdGet()` instead.
   *
   * This method doesn't expect any response body
   */
  v1DmsFileCheckoutHistoryDmsFileIdGet$Response(params: {
    dmsFileId: number;

  }): Observable<StrictHttpResponse<void>> {

    const rb = new RequestBuilder(this.rootUrl, DmsService.V1DmsFileCheckoutHistoryDmsFileIdGetPath, 'get');
    if (params) {

      rb.path('dmsFileId', params.dmsFileId);

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
   * To access the full response (for headers, for example), `v1DmsFileCheckoutHistoryDmsFileIdGet$Response()` instead.
   *
   * This method doesn't expect any response body
   */
  v1DmsFileCheckoutHistoryDmsFileIdGet(params: {
    dmsFileId: number;

  }): Observable<void> {

    return this.v1DmsFileCheckoutHistoryDmsFileIdGet$Response(params).pipe(
      map((r: StrictHttpResponse<void>) => r.body as void)
    );
  }

  /**
   * Path part for operation v1DmsFileArchiveFileIdGet
   */
  static readonly V1DmsFileArchiveFileIdGetPath = '/v1/DMS/file/archive/{fileId}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `v1DmsFileArchiveFileIdGet()` instead.
   *
   * This method doesn't expect any response body
   */
  v1DmsFileArchiveFileIdGet$Response(params: {
    fileId: number;

  }): Observable<StrictHttpResponse<void>> {

    const rb = new RequestBuilder(this.rootUrl, DmsService.V1DmsFileArchiveFileIdGetPath, 'get');
    if (params) {

      rb.path('fileId', params.fileId);

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
   * To access the full response (for headers, for example), `v1DmsFileArchiveFileIdGet$Response()` instead.
   *
   * This method doesn't expect any response body
   */
  v1DmsFileArchiveFileIdGet(params: {
    fileId: number;

  }): Observable<void> {

    return this.v1DmsFileArchiveFileIdGet$Response(params).pipe(
      map((r: StrictHttpResponse<void>) => r.body as void)
    );
  }

  /**
   * Path part for operation v1DmsFileArchivePost
   */
  static readonly V1DmsFileArchivePostPath = '/v1/DMS/file/archive';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `v1DmsFileArchivePost$Json()` instead.
   *
   * This method sends `application/json` and handles response body of type `application/json`
   */
  v1DmsFileArchivePost$Json$Response(params?: {

    body?: Array<number>
  }): Observable<StrictHttpResponse<void>> {

    const rb = new RequestBuilder(this.rootUrl, DmsService.V1DmsFileArchivePostPath, 'post');
    if (params) {


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
   * To access the full response (for headers, for example), `v1DmsFileArchivePost$Json$Response()` instead.
   *
   * This method sends `application/json` and handles response body of type `application/json`
   */
  v1DmsFileArchivePost$Json(params?: {

    body?: Array<number>
  }): Observable<void> {

    return this.v1DmsFileArchivePost$Json$Response(params).pipe(
      map((r: StrictHttpResponse<void>) => r.body as void)
    );
  }

  /**
   * Path part for operation v1DmsFileUnarchiveFileIdGet
   */
  static readonly V1DmsFileUnarchiveFileIdGetPath = '/v1/DMS/file/unarchive/{fileId}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `v1DmsFileUnarchiveFileIdGet()` instead.
   *
   * This method doesn't expect any response body
   */
  v1DmsFileUnarchiveFileIdGet$Response(params: {
    fileId: number;

  }): Observable<StrictHttpResponse<void>> {

    const rb = new RequestBuilder(this.rootUrl, DmsService.V1DmsFileUnarchiveFileIdGetPath, 'get');
    if (params) {

      rb.path('fileId', params.fileId);

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
   * To access the full response (for headers, for example), `v1DmsFileUnarchiveFileIdGet$Response()` instead.
   *
   * This method doesn't expect any response body
   */
  v1DmsFileUnarchiveFileIdGet(params: {
    fileId: number;

  }): Observable<void> {

    return this.v1DmsFileUnarchiveFileIdGet$Response(params).pipe(
      map((r: StrictHttpResponse<void>) => r.body as void)
    );
  }

  /**
   * Path part for operation v1DmsFileUnarchivePost
   */
  static readonly V1DmsFileUnarchivePostPath = '/v1/DMS/file/unarchive';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `v1DmsFileUnarchivePost$Json()` instead.
   *
   * This method sends `application/json` and handles response body of type `application/json`
   */
  v1DmsFileUnarchivePost$Json$Response(params?: {

    body?: Array<number>
  }): Observable<StrictHttpResponse<void>> {

    const rb = new RequestBuilder(this.rootUrl, DmsService.V1DmsFileUnarchivePostPath, 'post');
    if (params) {


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
   * To access the full response (for headers, for example), `v1DmsFileUnarchivePost$Json$Response()` instead.
   *
   * This method sends `application/json` and handles response body of type `application/json`
   */
  v1DmsFileUnarchivePost$Json(params?: {

    body?: Array<number>
  }): Observable<void> {

    return this.v1DmsFileUnarchivePost$Json$Response(params).pipe(
      map((r: StrictHttpResponse<void>) => r.body as void)
    );
  }

  /**
   * Path part for operation v1DmsFileUploadPost
   */
  static readonly V1DmsFileUploadPostPath = '/v1/DMS/file/upload';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `v1DmsFileUploadPost()` instead.
   *
   * This method sends `multipart/form-data` and handles response body of type `multipart/form-data`
   */
  v1DmsFileUploadPost$Response(params?: {
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

    const rb = new RequestBuilder(this.rootUrl, DmsService.V1DmsFileUploadPostPath, 'post');
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
   * To access the full response (for headers, for example), `v1DmsFileUploadPost$Response()` instead.
   *
   * This method sends `multipart/form-data` and handles response body of type `multipart/form-data`
   */
  v1DmsFileUploadPost(params?: {
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

    return this.v1DmsFileUploadPost$Response(params).pipe(
      map((r: StrictHttpResponse<void>) => r.body as void)
    );
  }

  /**
   * Path part for operation v1DmsFileUploadWithSignPost
   */
  static readonly V1DmsFileUploadWithSignPostPath = '/v1/DMS/file/uploadWithSign';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `v1DmsFileUploadWithSignPost()` instead.
   *
   * This method sends `multipart/form-data` and handles response body of type `multipart/form-data`
   */
  v1DmsFileUploadWithSignPost$Response(params?: {
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

    const rb = new RequestBuilder(this.rootUrl, DmsService.V1DmsFileUploadWithSignPostPath, 'post');
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
   * To access the full response (for headers, for example), `v1DmsFileUploadWithSignPost$Response()` instead.
   *
   * This method sends `multipart/form-data` and handles response body of type `multipart/form-data`
   */
  v1DmsFileUploadWithSignPost(params?: {
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

    return this.v1DmsFileUploadWithSignPost$Response(params).pipe(
      map((r: StrictHttpResponse<void>) => r.body as void)
    );
  }

  /**
   * Path part for operation v1DmsFileUploadStreamPost
   */
  static readonly V1DmsFileUploadStreamPostPath = '/v1/DMS/file/upload/stream';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `v1DmsFileUploadStreamPost()` instead.
   *
   * This method sends `multipart/form-data` and handles response body of type `multipart/form-data`
   */
  v1DmsFileUploadStreamPost$Response(params?: {

    body?: { 'Id': number, 'FolderId': number, 'NameOfFile': string, 'Status': string, 'IsDraftingTemplate': boolean, 'IsFillableTemplate': boolean, 'ContainsESignatureFields': boolean, 'OwnerId': number, 'CommaCategories': string, 'DmsFileStatus': DmsFileStatus, 'QuarantinePath': string, 'OriginalFileName': string, 'CoOwnerId': Array<number>, 'Description': string }
  }): Observable<StrictHttpResponse<void>> {

    const rb = new RequestBuilder(this.rootUrl, DmsService.V1DmsFileUploadStreamPostPath, 'post');
    if (params) {


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
   * To access the full response (for headers, for example), `v1DmsFileUploadStreamPost$Response()` instead.
   *
   * This method sends `multipart/form-data` and handles response body of type `multipart/form-data`
   */
  v1DmsFileUploadStreamPost(params?: {

    body?: { 'Id': number, 'FolderId': number, 'NameOfFile': string, 'Status': string, 'IsDraftingTemplate': boolean, 'IsFillableTemplate': boolean, 'ContainsESignatureFields': boolean, 'OwnerId': number, 'CommaCategories': string, 'DmsFileStatus': DmsFileStatus, 'QuarantinePath': string, 'OriginalFileName': string, 'CoOwnerId': Array<number>, 'Description': string }
  }): Observable<void> {

    return this.v1DmsFileUploadStreamPost$Response(params).pipe(
      map((r: StrictHttpResponse<void>) => r.body as void)
    );
  }

  /**
   * Path part for operation v1DmsFileCategoriesGet
   */
  static readonly V1DmsFileCategoriesGetPath = '/v1/DMS/file/categories';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `v1DmsFileCategoriesGet()` instead.
   *
   * This method doesn't expect any response body
   */
  v1DmsFileCategoriesGet$Response(params?: {

  }): Observable<StrictHttpResponse<void>> {

    const rb = new RequestBuilder(this.rootUrl, DmsService.V1DmsFileCategoriesGetPath, 'get');
    if (params) {


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
   * To access the full response (for headers, for example), `v1DmsFileCategoriesGet$Response()` instead.
   *
   * This method doesn't expect any response body
   */
  v1DmsFileCategoriesGet(params?: {

  }): Observable<void> {

    return this.v1DmsFileCategoriesGet$Response(params).pipe(
      map((r: StrictHttpResponse<void>) => r.body as void)
    );
  }

  /**
   * Path part for operation v1DmsFileRecentGet
   */
  static readonly V1DmsFileRecentGetPath = '/v1/DMS/file/recent';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `v1DmsFileRecentGet()` instead.
   *
   * This method doesn't expect any response body
   */
  v1DmsFileRecentGet$Response(params?: {

  }): Observable<StrictHttpResponse<void>> {

    const rb = new RequestBuilder(this.rootUrl, DmsService.V1DmsFileRecentGetPath, 'get');
    if (params) {


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
   * To access the full response (for headers, for example), `v1DmsFileRecentGet$Response()` instead.
   *
   * This method doesn't expect any response body
   */
  v1DmsFileRecentGet(params?: {

  }): Observable<void> {

    return this.v1DmsFileRecentGet$Response(params).pipe(
      map((r: StrictHttpResponse<void>) => r.body as void)
    );
  }

  /**
   * Path part for operation v1DmsFileRecentMattterMatterIdGet
   */
  static readonly V1DmsFileRecentMattterMatterIdGetPath = '/v1/DMS/file/recent/mattter/{matterId}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `v1DmsFileRecentMattterMatterIdGet()` instead.
   *
   * This method doesn't expect any response body
   */
  v1DmsFileRecentMattterMatterIdGet$Response(params: {
    matterId: number;

  }): Observable<StrictHttpResponse<void>> {

    const rb = new RequestBuilder(this.rootUrl, DmsService.V1DmsFileRecentMattterMatterIdGetPath, 'get');
    if (params) {

      rb.path('matterId', params.matterId);

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
   * To access the full response (for headers, for example), `v1DmsFileRecentMattterMatterIdGet$Response()` instead.
   *
   * This method doesn't expect any response body
   */
  v1DmsFileRecentMattterMatterIdGet(params: {
    matterId: number;

  }): Observable<void> {

    return this.v1DmsFileRecentMattterMatterIdGet$Response(params).pipe(
      map((r: StrictHttpResponse<void>) => r.body as void)
    );
  }

  /**
   * Path part for operation v1DmsFileReplacePost
   */
  static readonly V1DmsFileReplacePostPath = '/v1/DMS/file/replace';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `v1DmsFileReplacePost()` instead.
   *
   * This method sends `multipart/form-data` and handles response body of type `multipart/form-data`
   */
  v1DmsFileReplacePost$Response(params?: {
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

    const rb = new RequestBuilder(this.rootUrl, DmsService.V1DmsFileReplacePostPath, 'post');
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
   * To access the full response (for headers, for example), `v1DmsFileReplacePost$Response()` instead.
   *
   * This method sends `multipart/form-data` and handles response body of type `multipart/form-data`
   */
  v1DmsFileReplacePost(params?: {
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

    return this.v1DmsFileReplacePost$Response(params).pipe(
      map((r: StrictHttpResponse<void>) => r.body as void)
    );
  }

  /**
   * Path part for operation v1DmsFilePropertiesDmsFileIdGet
   */
  static readonly V1DmsFilePropertiesDmsFileIdGetPath = '/v1/DMS/file/properties/{dmsFileId}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `v1DmsFilePropertiesDmsFileIdGet()` instead.
   *
   * This method doesn't expect any response body
   */
  v1DmsFilePropertiesDmsFileIdGet$Response(params: {
    dmsFileId: number;

  }): Observable<StrictHttpResponse<void>> {

    const rb = new RequestBuilder(this.rootUrl, DmsService.V1DmsFilePropertiesDmsFileIdGetPath, 'get');
    if (params) {

      rb.path('dmsFileId', params.dmsFileId);

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
   * To access the full response (for headers, for example), `v1DmsFilePropertiesDmsFileIdGet$Response()` instead.
   *
   * This method doesn't expect any response body
   */
  v1DmsFilePropertiesDmsFileIdGet(params: {
    dmsFileId: number;

  }): Observable<void> {

    return this.v1DmsFilePropertiesDmsFileIdGet$Response(params).pipe(
      map((r: StrictHttpResponse<void>) => r.body as void)
    );
  }

  /**
   * Path part for operation v1DmsFilePropertiesPut
   */
  static readonly V1DmsFilePropertiesPutPath = '/v1/DMS/file/properties';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `v1DmsFilePropertiesPut$Json()` instead.
   *
   * This method sends `application/json` and handles response body of type `application/json`
   */
  v1DmsFilePropertiesPut$Json$Response(params?: {

    body?: vwDMSFileProperties
  }): Observable<StrictHttpResponse<void>> {

    const rb = new RequestBuilder(this.rootUrl, DmsService.V1DmsFilePropertiesPutPath, 'put');
    if (params) {


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
   * To access the full response (for headers, for example), `v1DmsFilePropertiesPut$Json$Response()` instead.
   *
   * This method sends `application/json` and handles response body of type `application/json`
   */
  v1DmsFilePropertiesPut$Json(params?: {

    body?: vwDMSFileProperties
  }): Observable<void> {

    return this.v1DmsFilePropertiesPut$Json$Response(params).pipe(
      map((r: StrictHttpResponse<void>) => r.body as void)
    );
  }

  /**
   * Path part for operation v1DmsFileDownloadLatestDmsfileIdGet
   */
  static readonly V1DmsFileDownloadLatestDmsfileIdGetPath = '/v1/DMS/file/download/latest/{dmsfileId}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `v1DmsFileDownloadLatestDmsfileIdGet()` instead.
   *
   * This method doesn't expect any response body
   */
  v1DmsFileDownloadLatestDmsfileIdGet$Response(params: {
    dmsfileId: number;

  }): Observable<StrictHttpResponse<void>> {

    const rb = new RequestBuilder(this.rootUrl, DmsService.V1DmsFileDownloadLatestDmsfileIdGetPath, 'get');
    if (params) {

      rb.path('dmsfileId', params.dmsfileId);

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
   * To access the full response (for headers, for example), `v1DmsFileDownloadLatestDmsfileIdGet$Response()` instead.
   *
   * This method doesn't expect any response body
   */
  v1DmsFileDownloadLatestDmsfileIdGet(params: {
    dmsfileId: number;

  }): Observable<void> {

    return this.v1DmsFileDownloadLatestDmsfileIdGet$Response(params).pipe(
      map((r: StrictHttpResponse<void>) => r.body as void)
    );
  }

  /**
   * Path part for operation v1DmsFileDownloadVersionGet
   */
  static readonly V1DmsFileDownloadVersionGetPath = '/v1/DMS/file/download/version';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `v1DmsFileDownloadVersionGet()` instead.
   *
   * This method doesn't expect any response body
   */
  v1DmsFileDownloadVersionGet$Response(params?: {
    fileFullPath?: string;

  }): Observable<StrictHttpResponse<void>> {

    const rb = new RequestBuilder(this.rootUrl, DmsService.V1DmsFileDownloadVersionGetPath, 'get');
    if (params) {

      rb.query('fileFullPath', params.fileFullPath);

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
   * To access the full response (for headers, for example), `v1DmsFileDownloadVersionGet$Response()` instead.
   *
   * This method doesn't expect any response body
   */
  v1DmsFileDownloadVersionGet(params?: {
    fileFullPath?: string;

  }): Observable<void> {

    return this.v1DmsFileDownloadVersionGet$Response(params).pipe(
      map((r: StrictHttpResponse<void>) => r.body as void)
    );
  }

  /**
   * Path part for operation v1DmsFileViewerHistoryFileIdGet
   */
  static readonly V1DmsFileViewerHistoryFileIdGetPath = '/v1/DMS/file/viewer/history/{FileId}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `v1DmsFileViewerHistoryFileIdGet()` instead.
   *
   * This method doesn't expect any response body
   */
  v1DmsFileViewerHistoryFileIdGet$Response(params: {
    fileId: number;

  }): Observable<StrictHttpResponse<void>> {

    const rb = new RequestBuilder(this.rootUrl, DmsService.V1DmsFileViewerHistoryFileIdGetPath, 'get');
    if (params) {

      rb.path('FileId', params.fileId);

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
   * To access the full response (for headers, for example), `v1DmsFileViewerHistoryFileIdGet$Response()` instead.
   *
   * This method doesn't expect any response body
   */
  v1DmsFileViewerHistoryFileIdGet(params: {
    fileId: number;

  }): Observable<void> {

    return this.v1DmsFileViewerHistoryFileIdGet$Response(params).pipe(
      map((r: StrictHttpResponse<void>) => r.body as void)
    );
  }

  /**
   * Path part for operation v1DmsFileViewerHistoryPost
   */
  static readonly V1DmsFileViewerHistoryPostPath = '/v1/DMS/file/viewer/history';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `v1DmsFileViewerHistoryPost$Json()` instead.
   *
   * This method sends `application/json` and handles response body of type `application/json`
   */
  v1DmsFileViewerHistoryPost$Json$Response(params?: {

    body?: vwDMSViewersHistory
  }): Observable<StrictHttpResponse<void>> {

    const rb = new RequestBuilder(this.rootUrl, DmsService.V1DmsFileViewerHistoryPostPath, 'post');
    if (params) {


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
   * To access the full response (for headers, for example), `v1DmsFileViewerHistoryPost$Json$Response()` instead.
   *
   * This method sends `application/json` and handles response body of type `application/json`
   */
  v1DmsFileViewerHistoryPost$Json(params?: {

    body?: vwDMSViewersHistory
  }): Observable<void> {

    return this.v1DmsFileViewerHistoryPost$Json$Response(params).pipe(
      map((r: StrictHttpResponse<void>) => r.body as void)
    );
  }

}
