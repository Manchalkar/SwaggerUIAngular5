/* tslint:disable */
import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { BaseService } from '../base-service';
import { ApiConfiguration } from '../api-configuration';
import { StrictHttpResponse } from '../strict-http-response';
import { RequestBuilder } from '../request-builder';
import { Observable } from 'rxjs';
import { map, filter } from 'rxjs/operators';

import { vwUpdateMatterTrustAccount } from '../models/vw-update-matter-trust-account';

@Injectable({
  providedIn: 'root',
})
export class TrustAccountService extends BaseService {
  constructor(
    config: ApiConfiguration,
    http: HttpClient
  ) {
    super(config, http);
  }

  /**
   * Path part for operation v1TrustAccountGetAllTrustAccountsGet
   */
  static readonly V1TrustAccountGetAllTrustAccountsGetPath = '/v1/TrustAccount/GetAllTrustAccounts';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `v1TrustAccountGetAllTrustAccountsGet()` instead.
   *
   * This method doesn't expect any response body
   */
  v1TrustAccountGetAllTrustAccountsGet$Response(params?: {
    matterId?: number;

  }): Observable<StrictHttpResponse<void>> {

    const rb = new RequestBuilder(this.rootUrl, TrustAccountService.V1TrustAccountGetAllTrustAccountsGetPath, 'get');
    if (params) {

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
   * To access the full response (for headers, for example), `v1TrustAccountGetAllTrustAccountsGet$Response()` instead.
   *
   * This method doesn't expect any response body
   */
  v1TrustAccountGetAllTrustAccountsGet(params?: {
    matterId?: number;

  }): Observable<void> {

    return this.v1TrustAccountGetAllTrustAccountsGet$Response(params).pipe(
      map((r: StrictHttpResponse<void>) => r.body as void)
    );
  }

  /**
   * Path part for operation v1TrustAccountGetClientAllTrustAccountsGet
   */
  static readonly V1TrustAccountGetClientAllTrustAccountsGetPath = '/v1/TrustAccount/GetClientAllTrustAccounts';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `v1TrustAccountGetClientAllTrustAccountsGet()` instead.
   *
   * This method doesn't expect any response body
   */
  v1TrustAccountGetClientAllTrustAccountsGet$Response(params?: {
    clientId?: number;

  }): Observable<StrictHttpResponse<void>> {

    const rb = new RequestBuilder(this.rootUrl, TrustAccountService.V1TrustAccountGetClientAllTrustAccountsGetPath, 'get');
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
   * To access the full response (for headers, for example), `v1TrustAccountGetClientAllTrustAccountsGet$Response()` instead.
   *
   * This method doesn't expect any response body
   */
  v1TrustAccountGetClientAllTrustAccountsGet(params?: {
    clientId?: number;

  }): Observable<void> {

    return this.v1TrustAccountGetClientAllTrustAccountsGet$Response(params).pipe(
      map((r: StrictHttpResponse<void>) => r.body as void)
    );
  }

  /**
   * Path part for operation v1TrustAccountGetAllPropertyHeldInTrustGet
   */
  static readonly V1TrustAccountGetAllPropertyHeldInTrustGetPath = '/v1/TrustAccount/GetAllPropertyHeldInTrust';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `v1TrustAccountGetAllPropertyHeldInTrustGet()` instead.
   *
   * This method doesn't expect any response body
   */
  v1TrustAccountGetAllPropertyHeldInTrustGet$Response(params?: {
    matterId?: number;

  }): Observable<StrictHttpResponse<void>> {

    const rb = new RequestBuilder(this.rootUrl, TrustAccountService.V1TrustAccountGetAllPropertyHeldInTrustGetPath, 'get');
    if (params) {

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
   * To access the full response (for headers, for example), `v1TrustAccountGetAllPropertyHeldInTrustGet$Response()` instead.
   *
   * This method doesn't expect any response body
   */
  v1TrustAccountGetAllPropertyHeldInTrustGet(params?: {
    matterId?: number;

  }): Observable<void> {

    return this.v1TrustAccountGetAllPropertyHeldInTrustGet$Response(params).pipe(
      map((r: StrictHttpResponse<void>) => r.body as void)
    );
  }

  /**
   * Path part for operation v1TrustAccountGetMatterTrustAccountInfoGet
   */
  static readonly V1TrustAccountGetMatterTrustAccountInfoGetPath = '/v1/TrustAccount/GetMatterTrustAccountInfo';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `v1TrustAccountGetMatterTrustAccountInfoGet()` instead.
   *
   * This method doesn't expect any response body
   */
  v1TrustAccountGetMatterTrustAccountInfoGet$Response(params?: {
    matterId?: number;
    clientId?: number;

  }): Observable<StrictHttpResponse<void>> {

    const rb = new RequestBuilder(this.rootUrl, TrustAccountService.V1TrustAccountGetMatterTrustAccountInfoGetPath, 'get');
    if (params) {

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
   * To access the full response (for headers, for example), `v1TrustAccountGetMatterTrustAccountInfoGet$Response()` instead.
   *
   * This method doesn't expect any response body
   */
  v1TrustAccountGetMatterTrustAccountInfoGet(params?: {
    matterId?: number;
    clientId?: number;

  }): Observable<void> {

    return this.v1TrustAccountGetMatterTrustAccountInfoGet$Response(params).pipe(
      map((r: StrictHttpResponse<void>) => r.body as void)
    );
  }

  /**
   * Path part for operation v1TrustAccountUpdateMatterTrustAccountPut
   */
  static readonly V1TrustAccountUpdateMatterTrustAccountPutPath = '/v1/TrustAccount/UpdateMatterTrustAccount';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `v1TrustAccountUpdateMatterTrustAccountPut$Json()` instead.
   *
   * This method sends `application/json` and handles response body of type `application/json`
   */
  v1TrustAccountUpdateMatterTrustAccountPut$Json$Response(params?: {

    body?: vwUpdateMatterTrustAccount
  }): Observable<StrictHttpResponse<void>> {

    const rb = new RequestBuilder(this.rootUrl, TrustAccountService.V1TrustAccountUpdateMatterTrustAccountPutPath, 'put');
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
   * To access the full response (for headers, for example), `v1TrustAccountUpdateMatterTrustAccountPut$Json$Response()` instead.
   *
   * This method sends `application/json` and handles response body of type `application/json`
   */
  v1TrustAccountUpdateMatterTrustAccountPut$Json(params?: {

    body?: vwUpdateMatterTrustAccount
  }): Observable<void> {

    return this.v1TrustAccountUpdateMatterTrustAccountPut$Json$Response(params).pipe(
      map((r: StrictHttpResponse<void>) => r.body as void)
    );
  }

  /**
   * Path part for operation v1TrustAccountGetTrustAccountStatusGet
   */
  static readonly V1TrustAccountGetTrustAccountStatusGetPath = '/v1/TrustAccount/GetTrustAccountStatus';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `v1TrustAccountGetTrustAccountStatusGet()` instead.
   *
   * This method doesn't expect any response body
   */
  v1TrustAccountGetTrustAccountStatusGet$Response(params?: {

  }): Observable<StrictHttpResponse<void>> {

    const rb = new RequestBuilder(this.rootUrl, TrustAccountService.V1TrustAccountGetTrustAccountStatusGetPath, 'get');
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
   * To access the full response (for headers, for example), `v1TrustAccountGetTrustAccountStatusGet$Response()` instead.
   *
   * This method doesn't expect any response body
   */
  v1TrustAccountGetTrustAccountStatusGet(params?: {

  }): Observable<void> {

    return this.v1TrustAccountGetTrustAccountStatusGet$Response(params).pipe(
      map((r: StrictHttpResponse<void>) => r.body as void)
    );
  }

  /**
   * Path part for operation v1TrustAccountGetTrustAccountSetupByOfficeGet
   */
  static readonly V1TrustAccountGetTrustAccountSetupByOfficeGetPath = '/v1/TrustAccount/GetTrustAccountSetupByOffice';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `v1TrustAccountGetTrustAccountSetupByOfficeGet()` instead.
   *
   * This method doesn't expect any response body
   */
  v1TrustAccountGetTrustAccountSetupByOfficeGet$Response(params?: {
    trustBanAccountId?: number;
    isCreditCardTrustAccount?: boolean;

  }): Observable<StrictHttpResponse<void>> {

    const rb = new RequestBuilder(this.rootUrl, TrustAccountService.V1TrustAccountGetTrustAccountSetupByOfficeGetPath, 'get');
    if (params) {

      rb.query('trustBanAccountId', params.trustBanAccountId);
      rb.query('isCreditCardTrustAccount', params.isCreditCardTrustAccount);

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
   * To access the full response (for headers, for example), `v1TrustAccountGetTrustAccountSetupByOfficeGet$Response()` instead.
   *
   * This method doesn't expect any response body
   */
  v1TrustAccountGetTrustAccountSetupByOfficeGet(params?: {
    trustBanAccountId?: number;
    isCreditCardTrustAccount?: boolean;

  }): Observable<void> {

    return this.v1TrustAccountGetTrustAccountSetupByOfficeGet$Response(params).pipe(
      map((r: StrictHttpResponse<void>) => r.body as void)
    );
  }

  /**
   * Path part for operation v1TrustAccountGetFirmTrustAccountSettingsGet
   */
  static readonly V1TrustAccountGetFirmTrustAccountSettingsGetPath = '/v1/TrustAccount/GetFirmTrustAccountSettings';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `v1TrustAccountGetFirmTrustAccountSettingsGet()` instead.
   *
   * This method doesn't expect any response body
   */
  v1TrustAccountGetFirmTrustAccountSettingsGet$Response(params?: {

  }): Observable<StrictHttpResponse<void>> {

    const rb = new RequestBuilder(this.rootUrl, TrustAccountService.V1TrustAccountGetFirmTrustAccountSettingsGetPath, 'get');
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
   * To access the full response (for headers, for example), `v1TrustAccountGetFirmTrustAccountSettingsGet$Response()` instead.
   *
   * This method doesn't expect any response body
   */
  v1TrustAccountGetFirmTrustAccountSettingsGet(params?: {

  }): Observable<void> {

    return this.v1TrustAccountGetFirmTrustAccountSettingsGet$Response(params).pipe(
      map((r: StrictHttpResponse<void>) => r.body as void)
    );
  }

  /**
   * Path part for operation v1TrustAccountGetOfficeTrustAccountsGet
   */
  static readonly V1TrustAccountGetOfficeTrustAccountsGetPath = '/v1/TrustAccount/GetOfficeTrustAccounts';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `v1TrustAccountGetOfficeTrustAccountsGet()` instead.
   *
   * This method doesn't expect any response body
   */
  v1TrustAccountGetOfficeTrustAccountsGet$Response(params?: {
    officeId?: number;
    isCreditCardTrustAccount?: boolean;

  }): Observable<StrictHttpResponse<void>> {

    const rb = new RequestBuilder(this.rootUrl, TrustAccountService.V1TrustAccountGetOfficeTrustAccountsGetPath, 'get');
    if (params) {

      rb.query('officeId', params.officeId);
      rb.query('isCreditCardTrustAccount', params.isCreditCardTrustAccount);

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
   * To access the full response (for headers, for example), `v1TrustAccountGetOfficeTrustAccountsGet$Response()` instead.
   *
   * This method doesn't expect any response body
   */
  v1TrustAccountGetOfficeTrustAccountsGet(params?: {
    officeId?: number;
    isCreditCardTrustAccount?: boolean;

  }): Observable<void> {

    return this.v1TrustAccountGetOfficeTrustAccountsGet$Response(params).pipe(
      map((r: StrictHttpResponse<void>) => r.body as void)
    );
  }

  /**
   * Path part for operation v1TrustAccountGetOfficeTrustAccountSettingsGet
   */
  static readonly V1TrustAccountGetOfficeTrustAccountSettingsGetPath = '/v1/TrustAccount/GetOfficeTrustAccountSettings';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `v1TrustAccountGetOfficeTrustAccountSettingsGet()` instead.
   *
   * This method doesn't expect any response body
   */
  v1TrustAccountGetOfficeTrustAccountSettingsGet$Response(params?: {
    officeId?: number;

  }): Observable<StrictHttpResponse<void>> {

    const rb = new RequestBuilder(this.rootUrl, TrustAccountService.V1TrustAccountGetOfficeTrustAccountSettingsGetPath, 'get');
    if (params) {

      rb.query('officeId', params.officeId);

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
   * To access the full response (for headers, for example), `v1TrustAccountGetOfficeTrustAccountSettingsGet$Response()` instead.
   *
   * This method doesn't expect any response body
   */
  v1TrustAccountGetOfficeTrustAccountSettingsGet(params?: {
    officeId?: number;

  }): Observable<void> {

    return this.v1TrustAccountGetOfficeTrustAccountSettingsGet$Response(params).pipe(
      map((r: StrictHttpResponse<void>) => r.body as void)
    );
  }

  /**
   * Path part for operation v1TrustAccountGetPrimaryRetainerTrustBankAccountGet
   */
  static readonly V1TrustAccountGetPrimaryRetainerTrustBankAccountGetPath = '/v1/TrustAccount/GetPrimaryRetainerTrustBankAccount';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `v1TrustAccountGetPrimaryRetainerTrustBankAccountGet()` instead.
   *
   * This method doesn't expect any response body
   */
  v1TrustAccountGetPrimaryRetainerTrustBankAccountGet$Response(params?: {
    matterId?: number;

  }): Observable<StrictHttpResponse<void>> {

    const rb = new RequestBuilder(this.rootUrl, TrustAccountService.V1TrustAccountGetPrimaryRetainerTrustBankAccountGetPath, 'get');
    if (params) {

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
   * To access the full response (for headers, for example), `v1TrustAccountGetPrimaryRetainerTrustBankAccountGet$Response()` instead.
   *
   * This method doesn't expect any response body
   */
  v1TrustAccountGetPrimaryRetainerTrustBankAccountGet(params?: {
    matterId?: number;

  }): Observable<void> {

    return this.v1TrustAccountGetPrimaryRetainerTrustBankAccountGet$Response(params).pipe(
      map((r: StrictHttpResponse<void>) => r.body as void)
    );
  }

  /**
   * Path part for operation v1TrustAccountGetPrimaryRetainerTrustDetailsGet
   */
  static readonly V1TrustAccountGetPrimaryRetainerTrustDetailsGetPath = '/v1/TrustAccount/GetPrimaryRetainerTrustDetails';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `v1TrustAccountGetPrimaryRetainerTrustDetailsGet()` instead.
   *
   * This method doesn't expect any response body
   */
  v1TrustAccountGetPrimaryRetainerTrustDetailsGet$Response(params?: {
    matterId?: number;

  }): Observable<StrictHttpResponse<void>> {

    const rb = new RequestBuilder(this.rootUrl, TrustAccountService.V1TrustAccountGetPrimaryRetainerTrustDetailsGetPath, 'get');
    if (params) {

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
   * To access the full response (for headers, for example), `v1TrustAccountGetPrimaryRetainerTrustDetailsGet$Response()` instead.
   *
   * This method doesn't expect any response body
   */
  v1TrustAccountGetPrimaryRetainerTrustDetailsGet(params?: {
    matterId?: number;

  }): Observable<void> {

    return this.v1TrustAccountGetPrimaryRetainerTrustDetailsGet$Response(params).pipe(
      map((r: StrictHttpResponse<void>) => r.body as void)
    );
  }

  /**
   * Path part for operation v1TrustAccountGetClientPrimaryRetainerTrustDetailsGet
   */
  static readonly V1TrustAccountGetClientPrimaryRetainerTrustDetailsGetPath = '/v1/TrustAccount/GetClientPrimaryRetainerTrustDetails';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `v1TrustAccountGetClientPrimaryRetainerTrustDetailsGet()` instead.
   *
   * This method doesn't expect any response body
   */
  v1TrustAccountGetClientPrimaryRetainerTrustDetailsGet$Response(params?: {
    clientId?: number;

  }): Observable<StrictHttpResponse<void>> {

    const rb = new RequestBuilder(this.rootUrl, TrustAccountService.V1TrustAccountGetClientPrimaryRetainerTrustDetailsGetPath, 'get');
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
   * To access the full response (for headers, for example), `v1TrustAccountGetClientPrimaryRetainerTrustDetailsGet$Response()` instead.
   *
   * This method doesn't expect any response body
   */
  v1TrustAccountGetClientPrimaryRetainerTrustDetailsGet(params?: {
    clientId?: number;

  }): Observable<void> {

    return this.v1TrustAccountGetClientPrimaryRetainerTrustDetailsGet$Response(params).pipe(
      map((r: StrictHttpResponse<void>) => r.body as void)
    );
  }

  /**
   * Path part for operation v1TrustAccountTrustTransactionHistoryMatterIdGet
   */
  static readonly V1TrustAccountTrustTransactionHistoryMatterIdGetPath = '/v1/TrustAccount/TrustTransactionHistory/{matterId}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `v1TrustAccountTrustTransactionHistoryMatterIdGet()` instead.
   *
   * This method doesn't expect any response body
   */
  v1TrustAccountTrustTransactionHistoryMatterIdGet$Response(params: {
    matterId: number;

  }): Observable<StrictHttpResponse<void>> {

    const rb = new RequestBuilder(this.rootUrl, TrustAccountService.V1TrustAccountTrustTransactionHistoryMatterIdGetPath, 'get');
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
   * To access the full response (for headers, for example), `v1TrustAccountTrustTransactionHistoryMatterIdGet$Response()` instead.
   *
   * This method doesn't expect any response body
   */
  v1TrustAccountTrustTransactionHistoryMatterIdGet(params: {
    matterId: number;

  }): Observable<void> {

    return this.v1TrustAccountTrustTransactionHistoryMatterIdGet$Response(params).pipe(
      map((r: StrictHttpResponse<void>) => r.body as void)
    );
  }

  /**
   * Path part for operation v1TrustAccountGetMatterTrustDetailsGet
   */
  static readonly V1TrustAccountGetMatterTrustDetailsGetPath = '/v1/TrustAccount/GetMatterTrustDetails';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `v1TrustAccountGetMatterTrustDetailsGet()` instead.
   *
   * This method doesn't expect any response body
   */
  v1TrustAccountGetMatterTrustDetailsGet$Response(params?: {
    matterId?: number;

  }): Observable<StrictHttpResponse<void>> {

    const rb = new RequestBuilder(this.rootUrl, TrustAccountService.V1TrustAccountGetMatterTrustDetailsGetPath, 'get');
    if (params) {

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
   * To access the full response (for headers, for example), `v1TrustAccountGetMatterTrustDetailsGet$Response()` instead.
   *
   * This method doesn't expect any response body
   */
  v1TrustAccountGetMatterTrustDetailsGet(params?: {
    matterId?: number;

  }): Observable<void> {

    return this.v1TrustAccountGetMatterTrustDetailsGet$Response(params).pipe(
      map((r: StrictHttpResponse<void>) => r.body as void)
    );
  }

  /**
   * Path part for operation v1TrustAccountGetMatterTrustBalanceDetailsIdGet
   */
  static readonly V1TrustAccountGetMatterTrustBalanceDetailsIdGetPath = '/v1/TrustAccount/GetMatterTrustBalanceDetails/{Id}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `v1TrustAccountGetMatterTrustBalanceDetailsIdGet()` instead.
   *
   * This method doesn't expect any response body
   */
  v1TrustAccountGetMatterTrustBalanceDetailsIdGet$Response(params: {
    id: number;

  }): Observable<StrictHttpResponse<void>> {

    const rb = new RequestBuilder(this.rootUrl, TrustAccountService.V1TrustAccountGetMatterTrustBalanceDetailsIdGetPath, 'get');
    if (params) {

      rb.path('Id', params.id);

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
   * To access the full response (for headers, for example), `v1TrustAccountGetMatterTrustBalanceDetailsIdGet$Response()` instead.
   *
   * This method doesn't expect any response body
   */
  v1TrustAccountGetMatterTrustBalanceDetailsIdGet(params: {
    id: number;

  }): Observable<void> {

    return this.v1TrustAccountGetMatterTrustBalanceDetailsIdGet$Response(params).pipe(
      map((r: StrictHttpResponse<void>) => r.body as void)
    );
  }

  /**
   * Path part for operation v1TrustAccountGetMatterListTrustBalanceDetailsPost
   */
  static readonly V1TrustAccountGetMatterListTrustBalanceDetailsPostPath = '/v1/TrustAccount/GetMatterListTrustBalanceDetails';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `v1TrustAccountGetMatterListTrustBalanceDetailsPost$Json()` instead.
   *
   * This method sends `application/json` and handles response body of type `application/json`
   */
  v1TrustAccountGetMatterListTrustBalanceDetailsPost$Json$Response(params?: {

    body?: Array<number>
  }): Observable<StrictHttpResponse<void>> {

    const rb = new RequestBuilder(this.rootUrl, TrustAccountService.V1TrustAccountGetMatterListTrustBalanceDetailsPostPath, 'post');
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
   * To access the full response (for headers, for example), `v1TrustAccountGetMatterListTrustBalanceDetailsPost$Json$Response()` instead.
   *
   * This method sends `application/json` and handles response body of type `application/json`
   */
  v1TrustAccountGetMatterListTrustBalanceDetailsPost$Json(params?: {

    body?: Array<number>
  }): Observable<void> {

    return this.v1TrustAccountGetMatterListTrustBalanceDetailsPost$Json$Response(params).pipe(
      map((r: StrictHttpResponse<void>) => r.body as void)
    );
  }

  /**
   * Path part for operation v1TrustAccountGetTrustAccountingSummaryClientIdGet
   */
  static readonly V1TrustAccountGetTrustAccountingSummaryClientIdGetPath = '/v1/TrustAccount/GetTrustAccountingSummary/{clientId}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `v1TrustAccountGetTrustAccountingSummaryClientIdGet()` instead.
   *
   * This method doesn't expect any response body
   */
  v1TrustAccountGetTrustAccountingSummaryClientIdGet$Response(params: {
    clientId: number;
    matterId?: number;

  }): Observable<StrictHttpResponse<void>> {

    const rb = new RequestBuilder(this.rootUrl, TrustAccountService.V1TrustAccountGetTrustAccountingSummaryClientIdGetPath, 'get');
    if (params) {

      rb.path('clientId', params.clientId);
      rb.query('MatterId', params.matterId);

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
   * To access the full response (for headers, for example), `v1TrustAccountGetTrustAccountingSummaryClientIdGet$Response()` instead.
   *
   * This method doesn't expect any response body
   */
  v1TrustAccountGetTrustAccountingSummaryClientIdGet(params: {
    clientId: number;
    matterId?: number;

  }): Observable<void> {

    return this.v1TrustAccountGetTrustAccountingSummaryClientIdGet$Response(params).pipe(
      map((r: StrictHttpResponse<void>) => r.body as void)
    );
  }

  /**
   * Path part for operation v1TrustAccountGetIsOperatingAccountClientIdGet
   */
  static readonly V1TrustAccountGetIsOperatingAccountClientIdGetPath = '/v1/TrustAccount/GetIsOperatingAccount/{clientId}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `v1TrustAccountGetIsOperatingAccountClientIdGet()` instead.
   *
   * This method doesn't expect any response body
   */
  v1TrustAccountGetIsOperatingAccountClientIdGet$Response(params: {
    clientId: number;

  }): Observable<StrictHttpResponse<void>> {

    const rb = new RequestBuilder(this.rootUrl, TrustAccountService.V1TrustAccountGetIsOperatingAccountClientIdGetPath, 'get');
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
   * To access the full response (for headers, for example), `v1TrustAccountGetIsOperatingAccountClientIdGet$Response()` instead.
   *
   * This method doesn't expect any response body
   */
  v1TrustAccountGetIsOperatingAccountClientIdGet(params: {
    clientId: number;

  }): Observable<void> {

    return this.v1TrustAccountGetIsOperatingAccountClientIdGet$Response(params).pipe(
      map((r: StrictHttpResponse<void>) => r.body as void)
    );
  }

}
