/* tslint:disable */
import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { BaseService } from '../base-service';
import { ApiConfiguration } from '../api-configuration';
import { StrictHttpResponse } from '../strict-http-response';
import { RequestBuilder } from '../request-builder';
import { Observable } from 'rxjs';
import { map, filter } from 'rxjs/operators';

import { vwApplyAutoPayForMatter } from '../models/vw-apply-auto-pay-for-matter';
import { vwAssignReassignAttorneyEmailForMatter } from '../models/vw-assign-reassign-attorney-email-for-matter';
import { vwBillNowModel } from '../models/vw-bill-now-model';
import { vwCancelBillNow } from '../models/vw-cancel-bill-now';
import { vwChargeBackModel } from '../models/vw-charge-back-model';
import { vwClientAutopayEmail } from '../models/vw-client-autopay-email';
import { vwMatterAlert } from '../models/vw-matter-alert';
import { vwMatterAssociation } from '../models/vw-matter-association';
import { vwMatterBasics } from '../models/vw-matter-basics';
import { vwMatterCloseEmail } from '../models/vw-matter-close-email';
import { vwMatterEvents } from '../models/vw-matter-events';
import { vwMatterIdsForEvents } from '../models/vw-matter-ids-for-events';
import { vwMatterSearch } from '../models/vw-matter-search';
import { vwMatterWriteOff } from '../models/vw-matter-write-off';
import { vwRefundConsultationFeeBalance } from '../models/vw-refund-consultation-fee-balance';
import { vwRefundMatterBalance } from '../models/vw-refund-matter-balance';
import { vwRefundTrustBalance } from '../models/vw-refund-trust-balance';
import { vwReverseCheckPaymentModel } from '../models/vw-reverse-check-payment-model';
import { vwSaveReassignedTrustBank } from '../models/vw-save-reassigned-trust-bank';
import { vwUpdateMatterAssociation } from '../models/vw-update-matter-association';
import { vwUpsertMatterPaymentMethods } from '../models/vw-upsert-matter-payment-methods';

@Injectable({
  providedIn: 'root',
})
export class MatterService extends BaseService {
  constructor(
    config: ApiConfiguration,
    http: HttpClient
  ) {
    super(config, http);
  }

  /**
   * Path part for operation v1MatterResponsibleattorneySearchGet
   */
  static readonly V1MatterResponsibleattorneySearchGetPath = '/v1/Matter/responsibleattorney/search';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `v1MatterResponsibleattorneySearchGet()` instead.
   *
   * This method doesn't expect any response body
   */
  v1MatterResponsibleattorneySearchGet$Response(params?: {
    search?: string;

  }): Observable<StrictHttpResponse<void>> {

    const rb = new RequestBuilder(this.rootUrl, MatterService.V1MatterResponsibleattorneySearchGetPath, 'get');
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
   * To access the full response (for headers, for example), `v1MatterResponsibleattorneySearchGet$Response()` instead.
   *
   * This method doesn't expect any response body
   */
  v1MatterResponsibleattorneySearchGet(params?: {
    search?: string;

  }): Observable<void> {

    return this.v1MatterResponsibleattorneySearchGet$Response(params).pipe(
      map((r: StrictHttpResponse<void>) => r.body as void)
    );
  }

  /**
   * Path part for operation v1MatterResponsibleattorneyListMatterIdGet
   */
  static readonly V1MatterResponsibleattorneyListMatterIdGetPath = '/v1/Matter/responsibleattorney/list/{matterId}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `v1MatterResponsibleattorneyListMatterIdGet()` instead.
   *
   * This method doesn't expect any response body
   */
  v1MatterResponsibleattorneyListMatterIdGet$Response(params: {
    matterId: number;

  }): Observable<StrictHttpResponse<void>> {

    const rb = new RequestBuilder(this.rootUrl, MatterService.V1MatterResponsibleattorneyListMatterIdGetPath, 'get');
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
   * To access the full response (for headers, for example), `v1MatterResponsibleattorneyListMatterIdGet$Response()` instead.
   *
   * This method doesn't expect any response body
   */
  v1MatterResponsibleattorneyListMatterIdGet(params: {
    matterId: number;

  }): Observable<void> {

    return this.v1MatterResponsibleattorneyListMatterIdGet$Response(params).pipe(
      map((r: StrictHttpResponse<void>) => r.body as void)
    );
  }

  /**
   * Path part for operation v1MatterBillingattorneyAssociationsListGet
   */
  static readonly V1MatterBillingattorneyAssociationsListGetPath = '/v1/Matter/billingattorney/associations/list';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `v1MatterBillingattorneyAssociationsListGet()` instead.
   *
   * This method doesn't expect any response body
   */
  v1MatterBillingattorneyAssociationsListGet$Response(params?: {

  }): Observable<StrictHttpResponse<void>> {

    const rb = new RequestBuilder(this.rootUrl, MatterService.V1MatterBillingattorneyAssociationsListGetPath, 'get');
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
   * To access the full response (for headers, for example), `v1MatterBillingattorneyAssociationsListGet$Response()` instead.
   *
   * This method doesn't expect any response body
   */
  v1MatterBillingattorneyAssociationsListGet(params?: {

  }): Observable<void> {

    return this.v1MatterBillingattorneyAssociationsListGet$Response(params).pipe(
      map((r: StrictHttpResponse<void>) => r.body as void)
    );
  }

  /**
   * Path part for operation v1MatterBillingattorneySearchGet
   */
  static readonly V1MatterBillingattorneySearchGetPath = '/v1/Matter/billingattorney/search';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `v1MatterBillingattorneySearchGet()` instead.
   *
   * This method doesn't expect any response body
   */
  v1MatterBillingattorneySearchGet$Response(params?: {
    search?: string;

  }): Observable<StrictHttpResponse<void>> {

    const rb = new RequestBuilder(this.rootUrl, MatterService.V1MatterBillingattorneySearchGetPath, 'get');
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
   * To access the full response (for headers, for example), `v1MatterBillingattorneySearchGet$Response()` instead.
   *
   * This method doesn't expect any response body
   */
  v1MatterBillingattorneySearchGet(params?: {
    search?: string;

  }): Observable<void> {

    return this.v1MatterBillingattorneySearchGet$Response(params).pipe(
      map((r: StrictHttpResponse<void>) => r.body as void)
    );
  }

  /**
   * Path part for operation v1MatterBillingattorneyListMatterIdGet
   */
  static readonly V1MatterBillingattorneyListMatterIdGetPath = '/v1/Matter/billingattorney/list/{matterId}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `v1MatterBillingattorneyListMatterIdGet()` instead.
   *
   * This method doesn't expect any response body
   */
  v1MatterBillingattorneyListMatterIdGet$Response(params: {
    matterId: number;

  }): Observable<StrictHttpResponse<void>> {

    const rb = new RequestBuilder(this.rootUrl, MatterService.V1MatterBillingattorneyListMatterIdGetPath, 'get');
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
   * To access the full response (for headers, for example), `v1MatterBillingattorneyListMatterIdGet$Response()` instead.
   *
   * This method doesn't expect any response body
   */
  v1MatterBillingattorneyListMatterIdGet(params: {
    matterId: number;

  }): Observable<void> {

    return this.v1MatterBillingattorneyListMatterIdGet$Response(params).pipe(
      map((r: StrictHttpResponse<void>) => r.body as void)
    );
  }

  /**
   * Path part for operation v1MatterOriginatingattorneyAssociationsListGet
   */
  static readonly V1MatterOriginatingattorneyAssociationsListGetPath = '/v1/Matter/originatingattorney/associations/list';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `v1MatterOriginatingattorneyAssociationsListGet()` instead.
   *
   * This method doesn't expect any response body
   */
  v1MatterOriginatingattorneyAssociationsListGet$Response(params?: {

  }): Observable<StrictHttpResponse<void>> {

    const rb = new RequestBuilder(this.rootUrl, MatterService.V1MatterOriginatingattorneyAssociationsListGetPath, 'get');
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
   * To access the full response (for headers, for example), `v1MatterOriginatingattorneyAssociationsListGet$Response()` instead.
   *
   * This method doesn't expect any response body
   */
  v1MatterOriginatingattorneyAssociationsListGet(params?: {

  }): Observable<void> {

    return this.v1MatterOriginatingattorneyAssociationsListGet$Response(params).pipe(
      map((r: StrictHttpResponse<void>) => r.body as void)
    );
  }

  /**
   * Path part for operation v1MatterOriginatingattorneySearchGet
   */
  static readonly V1MatterOriginatingattorneySearchGetPath = '/v1/Matter/originatingattorney/search';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `v1MatterOriginatingattorneySearchGet()` instead.
   *
   * This method doesn't expect any response body
   */
  v1MatterOriginatingattorneySearchGet$Response(params?: {
    search?: string;

  }): Observable<StrictHttpResponse<void>> {

    const rb = new RequestBuilder(this.rootUrl, MatterService.V1MatterOriginatingattorneySearchGetPath, 'get');
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
   * To access the full response (for headers, for example), `v1MatterOriginatingattorneySearchGet$Response()` instead.
   *
   * This method doesn't expect any response body
   */
  v1MatterOriginatingattorneySearchGet(params?: {
    search?: string;

  }): Observable<void> {

    return this.v1MatterOriginatingattorneySearchGet$Response(params).pipe(
      map((r: StrictHttpResponse<void>) => r.body as void)
    );
  }

  /**
   * Path part for operation v1MatterOriginatingattorneyListMatterIdGet
   */
  static readonly V1MatterOriginatingattorneyListMatterIdGetPath = '/v1/Matter/originatingattorney/list/{matterId}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `v1MatterOriginatingattorneyListMatterIdGet()` instead.
   *
   * This method doesn't expect any response body
   */
  v1MatterOriginatingattorneyListMatterIdGet$Response(params: {
    matterId: number;

  }): Observable<StrictHttpResponse<void>> {

    const rb = new RequestBuilder(this.rootUrl, MatterService.V1MatterOriginatingattorneyListMatterIdGetPath, 'get');
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
   * To access the full response (for headers, for example), `v1MatterOriginatingattorneyListMatterIdGet$Response()` instead.
   *
   * This method doesn't expect any response body
   */
  v1MatterOriginatingattorneyListMatterIdGet(params: {
    matterId: number;

  }): Observable<void> {

    return this.v1MatterOriginatingattorneyListMatterIdGet$Response(params).pipe(
      map((r: StrictHttpResponse<void>) => r.body as void)
    );
  }

  /**
   * Path part for operation v1MatterOpposingpartyAssociationsListGet
   */
  static readonly V1MatterOpposingpartyAssociationsListGetPath = '/v1/Matter/opposingparty/associations/list';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `v1MatterOpposingpartyAssociationsListGet()` instead.
   *
   * This method doesn't expect any response body
   */
  v1MatterOpposingpartyAssociationsListGet$Response(params?: {

  }): Observable<StrictHttpResponse<void>> {

    const rb = new RequestBuilder(this.rootUrl, MatterService.V1MatterOpposingpartyAssociationsListGetPath, 'get');
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
   * To access the full response (for headers, for example), `v1MatterOpposingpartyAssociationsListGet$Response()` instead.
   *
   * This method doesn't expect any response body
   */
  v1MatterOpposingpartyAssociationsListGet(params?: {

  }): Observable<void> {

    return this.v1MatterOpposingpartyAssociationsListGet$Response(params).pipe(
      map((r: StrictHttpResponse<void>) => r.body as void)
    );
  }

  /**
   * Path part for operation v1MatterOpposingpartySearchGet
   */
  static readonly V1MatterOpposingpartySearchGetPath = '/v1/Matter/opposingparty/search';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `v1MatterOpposingpartySearchGet()` instead.
   *
   * This method doesn't expect any response body
   */
  v1MatterOpposingpartySearchGet$Response(params?: {
    search?: string;
    matterId?: number;

  }): Observable<StrictHttpResponse<void>> {

    const rb = new RequestBuilder(this.rootUrl, MatterService.V1MatterOpposingpartySearchGetPath, 'get');
    if (params) {

      rb.query('search', params.search);
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
   * To access the full response (for headers, for example), `v1MatterOpposingpartySearchGet$Response()` instead.
   *
   * This method doesn't expect any response body
   */
  v1MatterOpposingpartySearchGet(params?: {
    search?: string;
    matterId?: number;

  }): Observable<void> {

    return this.v1MatterOpposingpartySearchGet$Response(params).pipe(
      map((r: StrictHttpResponse<void>) => r.body as void)
    );
  }

  /**
   * Path part for operation v1MatterOpposingpartyListMatterIdGet
   */
  static readonly V1MatterOpposingpartyListMatterIdGetPath = '/v1/Matter/opposingparty/list/{matterId}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `v1MatterOpposingpartyListMatterIdGet()` instead.
   *
   * This method doesn't expect any response body
   */
  v1MatterOpposingpartyListMatterIdGet$Response(params: {
    matterId: number;

  }): Observable<StrictHttpResponse<void>> {

    const rb = new RequestBuilder(this.rootUrl, MatterService.V1MatterOpposingpartyListMatterIdGetPath, 'get');
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
   * To access the full response (for headers, for example), `v1MatterOpposingpartyListMatterIdGet$Response()` instead.
   *
   * This method doesn't expect any response body
   */
  v1MatterOpposingpartyListMatterIdGet(params: {
    matterId: number;

  }): Observable<void> {

    return this.v1MatterOpposingpartyListMatterIdGet$Response(params).pipe(
      map((r: StrictHttpResponse<void>) => r.body as void)
    );
  }

  /**
   * Path part for operation v1MatterExpertwitnessAssociationsListGet
   */
  static readonly V1MatterExpertwitnessAssociationsListGetPath = '/v1/Matter/expertwitness/associations/list';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `v1MatterExpertwitnessAssociationsListGet()` instead.
   *
   * This method doesn't expect any response body
   */
  v1MatterExpertwitnessAssociationsListGet$Response(params?: {

  }): Observable<StrictHttpResponse<void>> {

    const rb = new RequestBuilder(this.rootUrl, MatterService.V1MatterExpertwitnessAssociationsListGetPath, 'get');
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
   * To access the full response (for headers, for example), `v1MatterExpertwitnessAssociationsListGet$Response()` instead.
   *
   * This method doesn't expect any response body
   */
  v1MatterExpertwitnessAssociationsListGet(params?: {

  }): Observable<void> {

    return this.v1MatterExpertwitnessAssociationsListGet$Response(params).pipe(
      map((r: StrictHttpResponse<void>) => r.body as void)
    );
  }

  /**
   * Path part for operation v1MatterExpertwitnessSearchGet
   */
  static readonly V1MatterExpertwitnessSearchGetPath = '/v1/Matter/expertwitness/search';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `v1MatterExpertwitnessSearchGet()` instead.
   *
   * This method doesn't expect any response body
   */
  v1MatterExpertwitnessSearchGet$Response(params?: {
    search?: string;

  }): Observable<StrictHttpResponse<void>> {

    const rb = new RequestBuilder(this.rootUrl, MatterService.V1MatterExpertwitnessSearchGetPath, 'get');
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
   * To access the full response (for headers, for example), `v1MatterExpertwitnessSearchGet$Response()` instead.
   *
   * This method doesn't expect any response body
   */
  v1MatterExpertwitnessSearchGet(params?: {
    search?: string;

  }): Observable<void> {

    return this.v1MatterExpertwitnessSearchGet$Response(params).pipe(
      map((r: StrictHttpResponse<void>) => r.body as void)
    );
  }

  /**
   * Path part for operation v1MatterExpertwitnessListMatterIdGet
   */
  static readonly V1MatterExpertwitnessListMatterIdGetPath = '/v1/Matter/expertwitness/list/{matterId}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `v1MatterExpertwitnessListMatterIdGet()` instead.
   *
   * This method doesn't expect any response body
   */
  v1MatterExpertwitnessListMatterIdGet$Response(params: {
    matterId: number;

  }): Observable<StrictHttpResponse<void>> {

    const rb = new RequestBuilder(this.rootUrl, MatterService.V1MatterExpertwitnessListMatterIdGetPath, 'get');
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
   * To access the full response (for headers, for example), `v1MatterExpertwitnessListMatterIdGet$Response()` instead.
   *
   * This method doesn't expect any response body
   */
  v1MatterExpertwitnessListMatterIdGet(params: {
    matterId: number;

  }): Observable<void> {

    return this.v1MatterExpertwitnessListMatterIdGet$Response(params).pipe(
      map((r: StrictHttpResponse<void>) => r.body as void)
    );
  }

  /**
   * Path part for operation v1MatterOfficeSearchGet
   */
  static readonly V1MatterOfficeSearchGetPath = '/v1/Matter/office/search';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `v1MatterOfficeSearchGet()` instead.
   *
   * This method doesn't expect any response body
   */
  v1MatterOfficeSearchGet$Response(params?: {
    search?: string;

  }): Observable<StrictHttpResponse<void>> {

    const rb = new RequestBuilder(this.rootUrl, MatterService.V1MatterOfficeSearchGetPath, 'get');
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
   * To access the full response (for headers, for example), `v1MatterOfficeSearchGet$Response()` instead.
   *
   * This method doesn't expect any response body
   */
  v1MatterOfficeSearchGet(params?: {
    search?: string;

  }): Observable<void> {

    return this.v1MatterOfficeSearchGet$Response(params).pipe(
      map((r: StrictHttpResponse<void>) => r.body as void)
    );
  }

  /**
   * Path part for operation v1MatterPersonAssociatePost
   */
  static readonly V1MatterPersonAssociatePostPath = '/v1/Matter/person/associate';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `v1MatterPersonAssociatePost$Json()` instead.
   *
   * This method sends `application/json` and handles response body of type `application/json`
   */
  v1MatterPersonAssociatePost$Json$Response(params?: {

    body?: vwMatterAssociation
  }): Observable<StrictHttpResponse<void>> {

    const rb = new RequestBuilder(this.rootUrl, MatterService.V1MatterPersonAssociatePostPath, 'post');
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
   * To access the full response (for headers, for example), `v1MatterPersonAssociatePost$Json$Response()` instead.
   *
   * This method sends `application/json` and handles response body of type `application/json`
   */
  v1MatterPersonAssociatePost$Json(params?: {

    body?: vwMatterAssociation
  }): Observable<void> {

    return this.v1MatterPersonAssociatePost$Json$Response(params).pipe(
      map((r: StrictHttpResponse<void>) => r.body as void)
    );
  }

  /**
   * Path part for operation v1MatterPersonDisassociateDelete
   */
  static readonly V1MatterPersonDisassociateDeletePath = '/v1/Matter/person/disassociate';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `v1MatterPersonDisassociateDelete$Json()` instead.
   *
   * This method sends `application/json` and handles response body of type `application/json`
   */
  v1MatterPersonDisassociateDelete$Json$Response(params?: {

    body?: vwMatterAssociation
  }): Observable<StrictHttpResponse<void>> {

    const rb = new RequestBuilder(this.rootUrl, MatterService.V1MatterPersonDisassociateDeletePath, 'delete');
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
   * To access the full response (for headers, for example), `v1MatterPersonDisassociateDelete$Json$Response()` instead.
   *
   * This method sends `application/json` and handles response body of type `application/json`
   */
  v1MatterPersonDisassociateDelete$Json(params?: {

    body?: vwMatterAssociation
  }): Observable<void> {

    return this.v1MatterPersonDisassociateDelete$Json$Response(params).pipe(
      map((r: StrictHttpResponse<void>) => r.body as void)
    );
  }

  /**
   * Path part for operation v1MatterUpdateAssociationForPcPost
   */
  static readonly V1MatterUpdateAssociationForPcPostPath = '/v1/Matter/UpdateAssociationForPC';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `v1MatterUpdateAssociationForPcPost()` instead.
   *
   * This method doesn't expect any response body
   */
  v1MatterUpdateAssociationForPcPost$Response(params?: {
    associationId?: number;
    oldAssociationTypeId?: number;
    newAssociationTypeId?: number;
    matterId?: number;
    clientId?: number;
    personId?: number;

  }): Observable<StrictHttpResponse<void>> {

    const rb = new RequestBuilder(this.rootUrl, MatterService.V1MatterUpdateAssociationForPcPostPath, 'post');
    if (params) {

      rb.query('associationId', params.associationId);
      rb.query('oldAssociationTypeId', params.oldAssociationTypeId);
      rb.query('newAssociationTypeId', params.newAssociationTypeId);
      rb.query('matterId', params.matterId);
      rb.query('clientId', params.clientId);
      rb.query('personId', params.personId);

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
   * To access the full response (for headers, for example), `v1MatterUpdateAssociationForPcPost$Response()` instead.
   *
   * This method doesn't expect any response body
   */
  v1MatterUpdateAssociationForPcPost(params?: {
    associationId?: number;
    oldAssociationTypeId?: number;
    newAssociationTypeId?: number;
    matterId?: number;
    clientId?: number;
    personId?: number;

  }): Observable<void> {

    return this.v1MatterUpdateAssociationForPcPost$Response(params).pipe(
      map((r: StrictHttpResponse<void>) => r.body as void)
    );
  }

  /**
   * Path part for operation v1MatterAccessiblematterClientClientIdGet
   */
  static readonly V1MatterAccessiblematterClientClientIdGetPath = '/v1/Matter/accessiblematter/client/{clientId}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `v1MatterAccessiblematterClientClientIdGet()` instead.
   *
   * This method doesn't expect any response body
   */
  v1MatterAccessiblematterClientClientIdGet$Response(params: {
    clientId: number;
    allStatus?: boolean;

  }): Observable<StrictHttpResponse<void>> {

    const rb = new RequestBuilder(this.rootUrl, MatterService.V1MatterAccessiblematterClientClientIdGetPath, 'get');
    if (params) {

      rb.path('clientId', params.clientId);
      rb.query('allStatus', params.allStatus);

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
   * To access the full response (for headers, for example), `v1MatterAccessiblematterClientClientIdGet$Response()` instead.
   *
   * This method doesn't expect any response body
   */
  v1MatterAccessiblematterClientClientIdGet(params: {
    clientId: number;
    allStatus?: boolean;

  }): Observable<void> {

    return this.v1MatterAccessiblematterClientClientIdGet$Response(params).pipe(
      map((r: StrictHttpResponse<void>) => r.body as void)
    );
  }

  /**
   * Path part for operation v1MatterGetassociationsMatterIdGet
   */
  static readonly V1MatterGetassociationsMatterIdGetPath = '/v1/Matter/getassociations/{matterId}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `v1MatterGetassociationsMatterIdGet()` instead.
   *
   * This method doesn't expect any response body
   */
  v1MatterGetassociationsMatterIdGet$Response(params: {
    matterid: number;
    association?: string;

  }): Observable<StrictHttpResponse<void>> {

    const rb = new RequestBuilder(this.rootUrl, MatterService.V1MatterGetassociationsMatterIdGetPath, 'get');
    if (params) {

      rb.path('matterid', params.matterid);
      rb.query('association', params.association);

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
   * To access the full response (for headers, for example), `v1MatterGetassociationsMatterIdGet$Response()` instead.
   *
   * This method doesn't expect any response body
   */
  v1MatterGetassociationsMatterIdGet(params: {
    matterid: number;
    association?: string;

  }): Observable<void> {

    return this.v1MatterGetassociationsMatterIdGet$Response(params).pipe(
      map((r: StrictHttpResponse<void>) => r.body as void)
    );
  }

  /**
   * Path part for operation v1MatterInvoicesMatterIdGet
   */
  static readonly V1MatterInvoicesMatterIdGetPath = '/v1/Matter/invoices/{matterId}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `v1MatterInvoicesMatterIdGet()` instead.
   *
   * This method doesn't expect any response body
   */
  v1MatterInvoicesMatterIdGet$Response(params: {
    matterId: number;

  }): Observable<StrictHttpResponse<void>> {

    const rb = new RequestBuilder(this.rootUrl, MatterService.V1MatterInvoicesMatterIdGetPath, 'get');
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
   * To access the full response (for headers, for example), `v1MatterInvoicesMatterIdGet$Response()` instead.
   *
   * This method doesn't expect any response body
   */
  v1MatterInvoicesMatterIdGet(params: {
    matterId: number;

  }): Observable<void> {

    return this.v1MatterInvoicesMatterIdGet$Response(params).pipe(
      map((r: StrictHttpResponse<void>) => r.body as void)
    );
  }

  /**
   * Path part for operation v1MatterTransactionMatterIdGet
   */
  static readonly V1MatterTransactionMatterIdGetPath = '/v1/Matter/transaction/{matterId}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `v1MatterTransactionMatterIdGet()` instead.
   *
   * This method doesn't expect any response body
   */
  v1MatterTransactionMatterIdGet$Response(params: {
    matterId: number;

  }): Observable<StrictHttpResponse<void>> {

    const rb = new RequestBuilder(this.rootUrl, MatterService.V1MatterTransactionMatterIdGetPath, 'get');
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
   * To access the full response (for headers, for example), `v1MatterTransactionMatterIdGet$Response()` instead.
   *
   * This method doesn't expect any response body
   */
  v1MatterTransactionMatterIdGet(params: {
    matterId: number;

  }): Observable<void> {

    return this.v1MatterTransactionMatterIdGet$Response(params).pipe(
      map((r: StrictHttpResponse<void>) => r.body as void)
    );
  }

  /**
   * Path part for operation v1MatterWriteoffPut
   */
  static readonly V1MatterWriteoffPutPath = '/v1/Matter/writeoff';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `v1MatterWriteoffPut$Json()` instead.
   *
   * This method sends `application/json` and handles response body of type `application/json`
   */
  v1MatterWriteoffPut$Json$Response(params?: {

    body?: vwMatterWriteOff
  }): Observable<StrictHttpResponse<void>> {

    const rb = new RequestBuilder(this.rootUrl, MatterService.V1MatterWriteoffPutPath, 'put');
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
   * To access the full response (for headers, for example), `v1MatterWriteoffPut$Json$Response()` instead.
   *
   * This method sends `application/json` and handles response body of type `application/json`
   */
  v1MatterWriteoffPut$Json(params?: {

    body?: vwMatterWriteOff
  }): Observable<void> {

    return this.v1MatterWriteoffPut$Json$Response(params).pipe(
      map((r: StrictHttpResponse<void>) => r.body as void)
    );
  }

  /**
   * Path part for operation v1MatterWriteoffPost
   */
  static readonly V1MatterWriteoffPostPath = '/v1/Matter/writeoff';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `v1MatterWriteoffPost$Json()` instead.
   *
   * This method sends `application/json` and handles response body of type `application/json`
   */
  v1MatterWriteoffPost$Json$Response(params?: {

    body?: vwMatterWriteOff
  }): Observable<StrictHttpResponse<void>> {

    const rb = new RequestBuilder(this.rootUrl, MatterService.V1MatterWriteoffPostPath, 'post');
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
   * To access the full response (for headers, for example), `v1MatterWriteoffPost$Json$Response()` instead.
   *
   * This method sends `application/json` and handles response body of type `application/json`
   */
  v1MatterWriteoffPost$Json(params?: {

    body?: vwMatterWriteOff
  }): Observable<void> {

    return this.v1MatterWriteoffPost$Json$Response(params).pipe(
      map((r: StrictHttpResponse<void>) => r.body as void)
    );
  }

  /**
   * Path part for operation v1MatterWriteoffMatterIdGet
   */
  static readonly V1MatterWriteoffMatterIdGetPath = '/v1/Matter/writeoff/{matterId}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `v1MatterWriteoffMatterIdGet()` instead.
   *
   * This method doesn't expect any response body
   */
  v1MatterWriteoffMatterIdGet$Response(params: {
    matterId: number;

  }): Observable<StrictHttpResponse<void>> {

    const rb = new RequestBuilder(this.rootUrl, MatterService.V1MatterWriteoffMatterIdGetPath, 'get');
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
   * To access the full response (for headers, for example), `v1MatterWriteoffMatterIdGet$Response()` instead.
   *
   * This method doesn't expect any response body
   */
  v1MatterWriteoffMatterIdGet(params: {
    matterId: number;

  }): Observable<void> {

    return this.v1MatterWriteoffMatterIdGet$Response(params).pipe(
      map((r: StrictHttpResponse<void>) => r.body as void)
    );
  }

  /**
   * Path part for operation v1MatterWriteoffIdDelete
   */
  static readonly V1MatterWriteoffIdDeletePath = '/v1/Matter/writeoff/{id}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `v1MatterWriteoffIdDelete()` instead.
   *
   * This method doesn't expect any response body
   */
  v1MatterWriteoffIdDelete$Response(params: {
    id: number;

  }): Observable<StrictHttpResponse<void>> {

    const rb = new RequestBuilder(this.rootUrl, MatterService.V1MatterWriteoffIdDeletePath, 'delete');
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
   * To access the full response (for headers, for example), `v1MatterWriteoffIdDelete$Response()` instead.
   *
   * This method doesn't expect any response body
   */
  v1MatterWriteoffIdDelete(params: {
    id: number;

  }): Observable<void> {

    return this.v1MatterWriteoffIdDelete$Response(params).pipe(
      map((r: StrictHttpResponse<void>) => r.body as void)
    );
  }

  /**
   * Path part for operation v1MatterUnbilleditemsMatteridGet
   */
  static readonly V1MatterUnbilleditemsMatteridGetPath = '/v1/Matter/unbilleditems/{matterid}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `v1MatterUnbilleditemsMatteridGet()` instead.
   *
   * This method doesn't expect any response body
   */
  v1MatterUnbilleditemsMatteridGet$Response(params: {
    matterid: number;
    reverseBill?: boolean;
    isWorkComplete?: boolean;
    needPendingApproval?: boolean;

  }): Observable<StrictHttpResponse<void>> {

    const rb = new RequestBuilder(this.rootUrl, MatterService.V1MatterUnbilleditemsMatteridGetPath, 'get');
    if (params) {

      rb.path('matterid', params.matterid);
      rb.query('reverseBill', params.reverseBill);
      rb.query('isWorkComplete', params.isWorkComplete);
      rb.query('needPendingApproval', params.needPendingApproval);

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
   * To access the full response (for headers, for example), `v1MatterUnbilleditemsMatteridGet$Response()` instead.
   *
   * This method doesn't expect any response body
   */
  v1MatterUnbilleditemsMatteridGet(params: {
    matterid: number;
    reverseBill?: boolean;
    isWorkComplete?: boolean;
    needPendingApproval?: boolean;

  }): Observable<void> {

    return this.v1MatterUnbilleditemsMatteridGet$Response(params).pipe(
      map((r: StrictHttpResponse<void>) => r.body as void)
    );
  }

  /**
   * Path part for operation v1MatterCancelBillnowPost
   */
  static readonly V1MatterCancelBillnowPostPath = '/v1/Matter/cancelBillnow';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `v1MatterCancelBillnowPost$Json()` instead.
   *
   * This method sends `application/json` and handles response body of type `application/json`
   */
  v1MatterCancelBillnowPost$Json$Response(params?: {

    body?: vwCancelBillNow
  }): Observable<StrictHttpResponse<void>> {

    const rb = new RequestBuilder(this.rootUrl, MatterService.V1MatterCancelBillnowPostPath, 'post');
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
   * To access the full response (for headers, for example), `v1MatterCancelBillnowPost$Json$Response()` instead.
   *
   * This method sends `application/json` and handles response body of type `application/json`
   */
  v1MatterCancelBillnowPost$Json(params?: {

    body?: vwCancelBillNow
  }): Observable<void> {

    return this.v1MatterCancelBillnowPost$Json$Response(params).pipe(
      map((r: StrictHttpResponse<void>) => r.body as void)
    );
  }

  /**
   * Path part for operation v1MatterUnbilleditemsBillToClientPost
   */
  static readonly V1MatterUnbilleditemsBillToClientPostPath = '/v1/Matter/unbilleditems/billToClient';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `v1MatterUnbilleditemsBillToClientPost$Json()` instead.
   *
   * This method sends `application/json` and handles response body of type `application/json`
   */
  v1MatterUnbilleditemsBillToClientPost$Json$Response(params?: {

    body?: vwBillNowModel
  }): Observable<StrictHttpResponse<void>> {

    const rb = new RequestBuilder(this.rootUrl, MatterService.V1MatterUnbilleditemsBillToClientPostPath, 'post');
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
   * To access the full response (for headers, for example), `v1MatterUnbilleditemsBillToClientPost$Json$Response()` instead.
   *
   * This method sends `application/json` and handles response body of type `application/json`
   */
  v1MatterUnbilleditemsBillToClientPost$Json(params?: {

    body?: vwBillNowModel
  }): Observable<void> {

    return this.v1MatterUnbilleditemsBillToClientPost$Json$Response(params).pipe(
      map((r: StrictHttpResponse<void>) => r.body as void)
    );
  }

  /**
   * Path part for operation v1MatterCheckMatterHasUnBilledItemsMatteridGet
   */
  static readonly V1MatterCheckMatterHasUnBilledItemsMatteridGetPath = '/v1/Matter/CheckMatterHasUnBilledItems/{matterid}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `v1MatterCheckMatterHasUnBilledItemsMatteridGet()` instead.
   *
   * This method doesn't expect any response body
   */
  v1MatterCheckMatterHasUnBilledItemsMatteridGet$Response(params: {
    matterid: number;

  }): Observable<StrictHttpResponse<void>> {

    const rb = new RequestBuilder(this.rootUrl, MatterService.V1MatterCheckMatterHasUnBilledItemsMatteridGetPath, 'get');
    if (params) {

      rb.path('matterid', params.matterid);

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
   * To access the full response (for headers, for example), `v1MatterCheckMatterHasUnBilledItemsMatteridGet$Response()` instead.
   *
   * This method doesn't expect any response body
   */
  v1MatterCheckMatterHasUnBilledItemsMatteridGet(params: {
    matterid: number;

  }): Observable<void> {

    return this.v1MatterCheckMatterHasUnBilledItemsMatteridGet$Response(params).pipe(
      map((r: StrictHttpResponse<void>) => r.body as void)
    );
  }

  /**
   * Path part for operation v1MatterPaymentMethodsPut
   */
  static readonly V1MatterPaymentMethodsPutPath = '/v1/Matter/paymentMethods';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `v1MatterPaymentMethodsPut$Json()` instead.
   *
   * This method sends `application/json` and handles response body of type `application/json`
   */
  v1MatterPaymentMethodsPut$Json$Response(params?: {

    body?: Array<vwUpsertMatterPaymentMethods>
  }): Observable<StrictHttpResponse<void>> {

    const rb = new RequestBuilder(this.rootUrl, MatterService.V1MatterPaymentMethodsPutPath, 'put');
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
   * To access the full response (for headers, for example), `v1MatterPaymentMethodsPut$Json$Response()` instead.
   *
   * This method sends `application/json` and handles response body of type `application/json`
   */
  v1MatterPaymentMethodsPut$Json(params?: {

    body?: Array<vwUpsertMatterPaymentMethods>
  }): Observable<void> {

    return this.v1MatterPaymentMethodsPut$Json$Response(params).pipe(
      map((r: StrictHttpResponse<void>) => r.body as void)
    );
  }

  /**
   * Path part for operation v1MatterPaymentMethodsPost
   */
  static readonly V1MatterPaymentMethodsPostPath = '/v1/Matter/paymentMethods';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `v1MatterPaymentMethodsPost$Json()` instead.
   *
   * This method sends `application/json` and handles response body of type `application/json`
   */
  v1MatterPaymentMethodsPost$Json$Response(params?: {

    body?: Array<vwUpsertMatterPaymentMethods>
  }): Observable<StrictHttpResponse<void>> {

    const rb = new RequestBuilder(this.rootUrl, MatterService.V1MatterPaymentMethodsPostPath, 'post');
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
   * To access the full response (for headers, for example), `v1MatterPaymentMethodsPost$Json$Response()` instead.
   *
   * This method sends `application/json` and handles response body of type `application/json`
   */
  v1MatterPaymentMethodsPost$Json(params?: {

    body?: Array<vwUpsertMatterPaymentMethods>
  }): Observable<void> {

    return this.v1MatterPaymentMethodsPost$Json$Response(params).pipe(
      map((r: StrictHttpResponse<void>) => r.body as void)
    );
  }

  /**
   * Path part for operation v1MatterPaymentMethodsbymatterMatterIdGet
   */
  static readonly V1MatterPaymentMethodsbymatterMatterIdGetPath = '/v1/Matter/paymentMethodsbymatter/{matterId}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `v1MatterPaymentMethodsbymatterMatterIdGet()` instead.
   *
   * This method doesn't expect any response body
   */
  v1MatterPaymentMethodsbymatterMatterIdGet$Response(params: {
    matterId: number;

  }): Observable<StrictHttpResponse<void>> {

    const rb = new RequestBuilder(this.rootUrl, MatterService.V1MatterPaymentMethodsbymatterMatterIdGetPath, 'get');
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
   * To access the full response (for headers, for example), `v1MatterPaymentMethodsbymatterMatterIdGet$Response()` instead.
   *
   * This method doesn't expect any response body
   */
  v1MatterPaymentMethodsbymatterMatterIdGet(params: {
    matterId: number;

  }): Observable<void> {

    return this.v1MatterPaymentMethodsbymatterMatterIdGet$Response(params).pipe(
      map((r: StrictHttpResponse<void>) => r.body as void)
    );
  }

  /**
   * Path part for operation v1MatterPaymentMethodsbyIdMatterIdPaymentMethodIdDelete
   */
  static readonly V1MatterPaymentMethodsbyIdMatterIdPaymentMethodIdDeletePath = '/v1/Matter/paymentMethodsbyId/{matterId}/{paymentMethodId}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `v1MatterPaymentMethodsbyIdMatterIdPaymentMethodIdDelete()` instead.
   *
   * This method doesn't expect any response body
   */
  v1MatterPaymentMethodsbyIdMatterIdPaymentMethodIdDelete$Response(params: {
    matterId: number;
    paymentMethodId: number;

  }): Observable<StrictHttpResponse<void>> {

    const rb = new RequestBuilder(this.rootUrl, MatterService.V1MatterPaymentMethodsbyIdMatterIdPaymentMethodIdDeletePath, 'delete');
    if (params) {

      rb.path('matterId', params.matterId);
      rb.path('paymentMethodId', params.paymentMethodId);

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
   * To access the full response (for headers, for example), `v1MatterPaymentMethodsbyIdMatterIdPaymentMethodIdDelete$Response()` instead.
   *
   * This method doesn't expect any response body
   */
  v1MatterPaymentMethodsbyIdMatterIdPaymentMethodIdDelete(params: {
    matterId: number;
    paymentMethodId: number;

  }): Observable<void> {

    return this.v1MatterPaymentMethodsbyIdMatterIdPaymentMethodIdDelete$Response(params).pipe(
      map((r: StrictHttpResponse<void>) => r.body as void)
    );
  }

  /**
   * Path part for operation v1MatterLedgerHistoryMatterIdGet
   */
  static readonly V1MatterLedgerHistoryMatterIdGetPath = '/v1/Matter/ledgerHistory/{matterId}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `v1MatterLedgerHistoryMatterIdGet()` instead.
   *
   * This method doesn't expect any response body
   */
  v1MatterLedgerHistoryMatterIdGet$Response(params: {
    matterId: number;
    clientId?: number;

  }): Observable<StrictHttpResponse<void>> {

    const rb = new RequestBuilder(this.rootUrl, MatterService.V1MatterLedgerHistoryMatterIdGetPath, 'get');
    if (params) {

      rb.path('matterId', params.matterId);
      rb.query('ClientId', params.clientId);

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
   * To access the full response (for headers, for example), `v1MatterLedgerHistoryMatterIdGet$Response()` instead.
   *
   * This method doesn't expect any response body
   */
  v1MatterLedgerHistoryMatterIdGet(params: {
    matterId: number;
    clientId?: number;

  }): Observable<void> {

    return this.v1MatterLedgerHistoryMatterIdGet$Response(params).pipe(
      map((r: StrictHttpResponse<void>) => r.body as void)
    );
  }

  /**
   * Path part for operation v1MatterUnpaidInvoicesMatterIdGet
   */
  static readonly V1MatterUnpaidInvoicesMatterIdGetPath = '/v1/Matter/UnpaidInvoices/{matterId}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `v1MatterUnpaidInvoicesMatterIdGet()` instead.
   *
   * This method doesn't expect any response body
   */
  v1MatterUnpaidInvoicesMatterIdGet$Response(params: {
    matterId: number;

  }): Observable<StrictHttpResponse<void>> {

    const rb = new RequestBuilder(this.rootUrl, MatterService.V1MatterUnpaidInvoicesMatterIdGetPath, 'get');
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
   * To access the full response (for headers, for example), `v1MatterUnpaidInvoicesMatterIdGet$Response()` instead.
   *
   * This method doesn't expect any response body
   */
  v1MatterUnpaidInvoicesMatterIdGet(params: {
    matterId: number;

  }): Observable<void> {

    return this.v1MatterUnpaidInvoicesMatterIdGet$Response(params).pipe(
      map((r: StrictHttpResponse<void>) => r.body as void)
    );
  }

  /**
   * Path part for operation v1MatterIssueChargebackPost
   */
  static readonly V1MatterIssueChargebackPostPath = '/v1/Matter/issueChargeback';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `v1MatterIssueChargebackPost$Json()` instead.
   *
   * This method sends `application/json` and handles response body of type `application/json`
   */
  v1MatterIssueChargebackPost$Json$Response(params?: {

    body?: vwChargeBackModel
  }): Observable<StrictHttpResponse<void>> {

    const rb = new RequestBuilder(this.rootUrl, MatterService.V1MatterIssueChargebackPostPath, 'post');
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
   * To access the full response (for headers, for example), `v1MatterIssueChargebackPost$Json$Response()` instead.
   *
   * This method sends `application/json` and handles response body of type `application/json`
   */
  v1MatterIssueChargebackPost$Json(params?: {

    body?: vwChargeBackModel
  }): Observable<void> {

    return this.v1MatterIssueChargebackPost$Json$Response(params).pipe(
      map((r: StrictHttpResponse<void>) => r.body as void)
    );
  }

  /**
   * Path part for operation v1MatterReverseCheckPaymentPost
   */
  static readonly V1MatterReverseCheckPaymentPostPath = '/v1/Matter/ReverseCheckPayment';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `v1MatterReverseCheckPaymentPost$Json()` instead.
   *
   * This method sends `application/json` and handles response body of type `application/json`
   */
  v1MatterReverseCheckPaymentPost$Json$Response(params?: {

    body?: vwReverseCheckPaymentModel
  }): Observable<StrictHttpResponse<void>> {

    const rb = new RequestBuilder(this.rootUrl, MatterService.V1MatterReverseCheckPaymentPostPath, 'post');
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
   * To access the full response (for headers, for example), `v1MatterReverseCheckPaymentPost$Json$Response()` instead.
   *
   * This method sends `application/json` and handles response body of type `application/json`
   */
  v1MatterReverseCheckPaymentPost$Json(params?: {

    body?: vwReverseCheckPaymentModel
  }): Observable<void> {

    return this.v1MatterReverseCheckPaymentPost$Json$Response(params).pipe(
      map((r: StrictHttpResponse<void>) => r.body as void)
    );
  }

  /**
   * Path part for operation v1MatterSendAssignReassignEmailToAttorneyPost
   */
  static readonly V1MatterSendAssignReassignEmailToAttorneyPostPath = '/v1/Matter/SendAssignReassignEmailToAttorney';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `v1MatterSendAssignReassignEmailToAttorneyPost$Json()` instead.
   *
   * This method sends `application/json` and handles response body of type `application/json`
   */
  v1MatterSendAssignReassignEmailToAttorneyPost$Json$Response(params?: {

    body?: vwAssignReassignAttorneyEmailForMatter
  }): Observable<StrictHttpResponse<void>> {

    const rb = new RequestBuilder(this.rootUrl, MatterService.V1MatterSendAssignReassignEmailToAttorneyPostPath, 'post');
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
   * To access the full response (for headers, for example), `v1MatterSendAssignReassignEmailToAttorneyPost$Json$Response()` instead.
   *
   * This method sends `application/json` and handles response body of type `application/json`
   */
  v1MatterSendAssignReassignEmailToAttorneyPost$Json(params?: {

    body?: vwAssignReassignAttorneyEmailForMatter
  }): Observable<void> {

    return this.v1MatterSendAssignReassignEmailToAttorneyPost$Json$Response(params).pipe(
      map((r: StrictHttpResponse<void>) => r.body as void)
    );
  }

  /**
   * Path part for operation v1MatterSendMatterCloseEmailToAttorneyPost
   */
  static readonly V1MatterSendMatterCloseEmailToAttorneyPostPath = '/v1/Matter/SendMatterCloseEmailToAttorney';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `v1MatterSendMatterCloseEmailToAttorneyPost$Json()` instead.
   *
   * This method sends `application/json` and handles response body of type `application/json`
   */
  v1MatterSendMatterCloseEmailToAttorneyPost$Json$Response(params?: {

    body?: vwMatterCloseEmail
  }): Observable<StrictHttpResponse<void>> {

    const rb = new RequestBuilder(this.rootUrl, MatterService.V1MatterSendMatterCloseEmailToAttorneyPostPath, 'post');
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
   * To access the full response (for headers, for example), `v1MatterSendMatterCloseEmailToAttorneyPost$Json$Response()` instead.
   *
   * This method sends `application/json` and handles response body of type `application/json`
   */
  v1MatterSendMatterCloseEmailToAttorneyPost$Json(params?: {

    body?: vwMatterCloseEmail
  }): Observable<void> {

    return this.v1MatterSendMatterCloseEmailToAttorneyPost$Json$Response(params).pipe(
      map((r: StrictHttpResponse<void>) => r.body as void)
    );
  }

  /**
   * Path part for operation v1MatterSendMatterReopenEmailToAttorneyPost
   */
  static readonly V1MatterSendMatterReopenEmailToAttorneyPostPath = '/v1/Matter/SendMatterReopenEmailToAttorney';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `v1MatterSendMatterReopenEmailToAttorneyPost$Json()` instead.
   *
   * This method sends `application/json` and handles response body of type `application/json`
   */
  v1MatterSendMatterReopenEmailToAttorneyPost$Json$Response(params?: {

    body?: vwMatterCloseEmail
  }): Observable<StrictHttpResponse<void>> {

    const rb = new RequestBuilder(this.rootUrl, MatterService.V1MatterSendMatterReopenEmailToAttorneyPostPath, 'post');
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
   * To access the full response (for headers, for example), `v1MatterSendMatterReopenEmailToAttorneyPost$Json$Response()` instead.
   *
   * This method sends `application/json` and handles response body of type `application/json`
   */
  v1MatterSendMatterReopenEmailToAttorneyPost$Json(params?: {

    body?: vwMatterCloseEmail
  }): Observable<void> {

    return this.v1MatterSendMatterReopenEmailToAttorneyPost$Json$Response(params).pipe(
      map((r: StrictHttpResponse<void>) => r.body as void)
    );
  }

  /**
   * Path part for operation v1MatterSendEmailForClientAutoPayPost
   */
  static readonly V1MatterSendEmailForClientAutoPayPostPath = '/v1/Matter/SendEmailForClientAutoPay';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `v1MatterSendEmailForClientAutoPayPost$Json()` instead.
   *
   * This method sends `application/json` and handles response body of type `application/json`
   */
  v1MatterSendEmailForClientAutoPayPost$Json$Response(params?: {

    body?: vwClientAutopayEmail
  }): Observable<StrictHttpResponse<void>> {

    const rb = new RequestBuilder(this.rootUrl, MatterService.V1MatterSendEmailForClientAutoPayPostPath, 'post');
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
   * To access the full response (for headers, for example), `v1MatterSendEmailForClientAutoPayPost$Json$Response()` instead.
   *
   * This method sends `application/json` and handles response body of type `application/json`
   */
  v1MatterSendEmailForClientAutoPayPost$Json(params?: {

    body?: vwClientAutopayEmail
  }): Observable<void> {

    return this.v1MatterSendEmailForClientAutoPayPost$Json$Response(params).pipe(
      map((r: StrictHttpResponse<void>) => r.body as void)
    );
  }

  /**
   * Path part for operation v1MatterBulkCloseMatterPost
   */
  static readonly V1MatterBulkCloseMatterPostPath = '/v1/Matter/BulkCloseMatter';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `v1MatterBulkCloseMatterPost$Json()` instead.
   *
   * This method sends `application/json` and handles response body of type `application/json`
   */
  v1MatterBulkCloseMatterPost$Json$Response(params?: {

  
  /**
   * The matter ids.
   */
  body?: Array<number>
  }): Observable<StrictHttpResponse<void>> {

    const rb = new RequestBuilder(this.rootUrl, MatterService.V1MatterBulkCloseMatterPostPath, 'post');
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
   * To access the full response (for headers, for example), `v1MatterBulkCloseMatterPost$Json$Response()` instead.
   *
   * This method sends `application/json` and handles response body of type `application/json`
   */
  v1MatterBulkCloseMatterPost$Json(params?: {

  
  /**
   * The matter ids.
   */
  body?: Array<number>
  }): Observable<void> {

    return this.v1MatterBulkCloseMatterPost$Json$Response(params).pipe(
      map((r: StrictHttpResponse<void>) => r.body as void)
    );
  }

  /**
   * Path part for operation v1MatterReopenMatterIdPost
   */
  static readonly V1MatterReopenMatterIdPostPath = '/v1/Matter/reopen/{matterId}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `v1MatterReopenMatterIdPost()` instead.
   *
   * This method doesn't expect any response body
   */
  v1MatterReopenMatterIdPost$Response(params: {

    /**
     * The matter id.
     */
    matterId: number;

  }): Observable<StrictHttpResponse<void>> {

    const rb = new RequestBuilder(this.rootUrl, MatterService.V1MatterReopenMatterIdPostPath, 'post');
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
   * To access the full response (for headers, for example), `v1MatterReopenMatterIdPost$Response()` instead.
   *
   * This method doesn't expect any response body
   */
  v1MatterReopenMatterIdPost(params: {

    /**
     * The matter id.
     */
    matterId: number;

  }): Observable<void> {

    return this.v1MatterReopenMatterIdPost$Response(params).pipe(
      map((r: StrictHttpResponse<void>) => r.body as void)
    );
  }

  /**
   * Path part for operation v1MatterCheckSufficientRefundAmtPost
   */
  static readonly V1MatterCheckSufficientRefundAmtPostPath = '/v1/Matter/CheckSufficientRefundAmt';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `v1MatterCheckSufficientRefundAmtPost$Json()` instead.
   *
   * This method sends `application/json` and handles response body of type `application/json`
   */
  v1MatterCheckSufficientRefundAmtPost$Json$Response(params?: {

    body?: vwRefundMatterBalance
  }): Observable<StrictHttpResponse<void>> {

    const rb = new RequestBuilder(this.rootUrl, MatterService.V1MatterCheckSufficientRefundAmtPostPath, 'post');
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
   * To access the full response (for headers, for example), `v1MatterCheckSufficientRefundAmtPost$Json$Response()` instead.
   *
   * This method sends `application/json` and handles response body of type `application/json`
   */
  v1MatterCheckSufficientRefundAmtPost$Json(params?: {

    body?: vwRefundMatterBalance
  }): Observable<void> {

    return this.v1MatterCheckSufficientRefundAmtPost$Json$Response(params).pipe(
      map((r: StrictHttpResponse<void>) => r.body as void)
    );
  }

  /**
   * Path part for operation v1MatterCheckSufficientTrustRefundBalancePost
   */
  static readonly V1MatterCheckSufficientTrustRefundBalancePostPath = '/v1/Matter/CheckSufficientTrustRefundBalance';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `v1MatterCheckSufficientTrustRefundBalancePost$Json()` instead.
   *
   * This method sends `application/json` and handles response body of type `application/json`
   */
  v1MatterCheckSufficientTrustRefundBalancePost$Json$Response(params?: {

    body?: vwRefundTrustBalance
  }): Observable<StrictHttpResponse<void>> {

    const rb = new RequestBuilder(this.rootUrl, MatterService.V1MatterCheckSufficientTrustRefundBalancePostPath, 'post');
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
   * To access the full response (for headers, for example), `v1MatterCheckSufficientTrustRefundBalancePost$Json$Response()` instead.
   *
   * This method sends `application/json` and handles response body of type `application/json`
   */
  v1MatterCheckSufficientTrustRefundBalancePost$Json(params?: {

    body?: vwRefundTrustBalance
  }): Observable<void> {

    return this.v1MatterCheckSufficientTrustRefundBalancePost$Json$Response(params).pipe(
      map((r: StrictHttpResponse<void>) => r.body as void)
    );
  }

  /**
   * Path part for operation v1MatterCheckSufficientConsultationRefundBalancePost
   */
  static readonly V1MatterCheckSufficientConsultationRefundBalancePostPath = '/v1/Matter/CheckSufficientConsultationRefundBalance';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `v1MatterCheckSufficientConsultationRefundBalancePost$Json()` instead.
   *
   * This method sends `application/json` and handles response body of type `application/json`
   */
  v1MatterCheckSufficientConsultationRefundBalancePost$Json$Response(params?: {

    body?: vwRefundConsultationFeeBalance
  }): Observable<StrictHttpResponse<void>> {

    const rb = new RequestBuilder(this.rootUrl, MatterService.V1MatterCheckSufficientConsultationRefundBalancePostPath, 'post');
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
   * To access the full response (for headers, for example), `v1MatterCheckSufficientConsultationRefundBalancePost$Json$Response()` instead.
   *
   * This method sends `application/json` and handles response body of type `application/json`
   */
  v1MatterCheckSufficientConsultationRefundBalancePost$Json(params?: {

    body?: vwRefundConsultationFeeBalance
  }): Observable<void> {

    return this.v1MatterCheckSufficientConsultationRefundBalancePost$Json$Response(params).pipe(
      map((r: StrictHttpResponse<void>) => r.body as void)
    );
  }

  /**
   * Path part for operation v1MatterLatestmatternumberGet
   */
  static readonly V1MatterLatestmatternumberGetPath = '/v1/Matter/latestmatternumber';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `v1MatterLatestmatternumberGet()` instead.
   *
   * This method doesn't expect any response body
   */
  v1MatterLatestmatternumberGet$Response(params?: {
    tenantId?: number;

  }): Observable<StrictHttpResponse<void>> {

    const rb = new RequestBuilder(this.rootUrl, MatterService.V1MatterLatestmatternumberGetPath, 'get');
    if (params) {

      rb.query('tenantId', params.tenantId);

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
   * To access the full response (for headers, for example), `v1MatterLatestmatternumberGet$Response()` instead.
   *
   * This method doesn't expect any response body
   */
  v1MatterLatestmatternumberGet(params?: {
    tenantId?: number;

  }): Observable<void> {

    return this.v1MatterLatestmatternumberGet$Response(params).pipe(
      map((r: StrictHttpResponse<void>) => r.body as void)
    );
  }

  /**
   * Path part for operation v1MatterApplyAutoPayForMattersPost
   */
  static readonly V1MatterApplyAutoPayForMattersPostPath = '/v1/Matter/ApplyAutoPayForMatters';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `v1MatterApplyAutoPayForMattersPost$Json()` instead.
   *
   * This method sends `application/json` and handles response body of type `application/json`
   */
  v1MatterApplyAutoPayForMattersPost$Json$Response(params?: {

    body?: vwApplyAutoPayForMatter
  }): Observable<StrictHttpResponse<void>> {

    const rb = new RequestBuilder(this.rootUrl, MatterService.V1MatterApplyAutoPayForMattersPostPath, 'post');
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
   * To access the full response (for headers, for example), `v1MatterApplyAutoPayForMattersPost$Json$Response()` instead.
   *
   * This method sends `application/json` and handles response body of type `application/json`
   */
  v1MatterApplyAutoPayForMattersPost$Json(params?: {

    body?: vwApplyAutoPayForMatter
  }): Observable<void> {

    return this.v1MatterApplyAutoPayForMattersPost$Json$Response(params).pipe(
      map((r: StrictHttpResponse<void>) => r.body as void)
    );
  }

  /**
   * Path part for operation v1MatterAssociationsMatterIdGet
   */
  static readonly V1MatterAssociationsMatterIdGetPath = '/v1/Matter/associations/{matterId}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `v1MatterAssociationsMatterIdGet()` instead.
   *
   * This method doesn't expect any response body
   */
  v1MatterAssociationsMatterIdGet$Response(params: {
    matterId: number;

  }): Observable<StrictHttpResponse<void>> {

    const rb = new RequestBuilder(this.rootUrl, MatterService.V1MatterAssociationsMatterIdGetPath, 'get');
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
   * To access the full response (for headers, for example), `v1MatterAssociationsMatterIdGet$Response()` instead.
   *
   * This method doesn't expect any response body
   */
  v1MatterAssociationsMatterIdGet(params: {
    matterId: number;

  }): Observable<void> {

    return this.v1MatterAssociationsMatterIdGet$Response(params).pipe(
      map((r: StrictHttpResponse<void>) => r.body as void)
    );
  }

  /**
   * Path part for operation v1MatterAssignedMatterBankAccountIdGet
   */
  static readonly V1MatterAssignedMatterBankAccountIdGetPath = '/v1/Matter/assignedMatter/{bankAccountId}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `v1MatterAssignedMatterBankAccountIdGet()` instead.
   *
   * This method doesn't expect any response body
   */
  v1MatterAssignedMatterBankAccountIdGet$Response(params: {
    bankAccountId: number;

  }): Observable<StrictHttpResponse<void>> {

    const rb = new RequestBuilder(this.rootUrl, MatterService.V1MatterAssignedMatterBankAccountIdGetPath, 'get');
    if (params) {

      rb.path('bankAccountId', params.bankAccountId);

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
   * To access the full response (for headers, for example), `v1MatterAssignedMatterBankAccountIdGet$Response()` instead.
   *
   * This method doesn't expect any response body
   */
  v1MatterAssignedMatterBankAccountIdGet(params: {
    bankAccountId: number;

  }): Observable<void> {

    return this.v1MatterAssignedMatterBankAccountIdGet$Response(params).pipe(
      map((r: StrictHttpResponse<void>) => r.body as void)
    );
  }

  /**
   * Path part for operation v1MatterBilledwidgetMatterIdGet
   */
  static readonly V1MatterBilledwidgetMatterIdGetPath = '/v1/Matter/billedwidget/{matterId}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `v1MatterBilledwidgetMatterIdGet()` instead.
   *
   * This method doesn't expect any response body
   */
  v1MatterBilledwidgetMatterIdGet$Response(params: {
    matterId: number;

  }): Observable<StrictHttpResponse<void>> {

    const rb = new RequestBuilder(this.rootUrl, MatterService.V1MatterBilledwidgetMatterIdGetPath, 'get');
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
   * To access the full response (for headers, for example), `v1MatterBilledwidgetMatterIdGet$Response()` instead.
   *
   * This method doesn't expect any response body
   */
  v1MatterBilledwidgetMatterIdGet(params: {
    matterId: number;

  }): Observable<void> {

    return this.v1MatterBilledwidgetMatterIdGet$Response(params).pipe(
      map((r: StrictHttpResponse<void>) => r.body as void)
    );
  }

  /**
   * Path part for operation v1MatterContactWriteoffContactIdGet
   */
  static readonly V1MatterContactWriteoffContactIdGetPath = '/v1/Matter/contact/writeoff/{contactId}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `v1MatterContactWriteoffContactIdGet()` instead.
   *
   * This method doesn't expect any response body
   */
  v1MatterContactWriteoffContactIdGet$Response(params: {
    contactId: number;

  }): Observable<StrictHttpResponse<void>> {

    const rb = new RequestBuilder(this.rootUrl, MatterService.V1MatterContactWriteoffContactIdGetPath, 'get');
    if (params) {

      rb.path('contactId', params.contactId);

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
   * To access the full response (for headers, for example), `v1MatterContactWriteoffContactIdGet$Response()` instead.
   *
   * This method doesn't expect any response body
   */
  v1MatterContactWriteoffContactIdGet(params: {
    contactId: number;

  }): Observable<void> {

    return this.v1MatterContactWriteoffContactIdGet$Response(params).pipe(
      map((r: StrictHttpResponse<void>) => r.body as void)
    );
  }

  /**
   * Path part for operation v1MatterEventsMeetingtypesListGet
   */
  static readonly V1MatterEventsMeetingtypesListGetPath = '/v1/Matter/events/meetingtypes/list';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `v1MatterEventsMeetingtypesListGet()` instead.
   *
   * This method doesn't expect any response body
   */
  v1MatterEventsMeetingtypesListGet$Response(params?: {

  }): Observable<StrictHttpResponse<void>> {

    const rb = new RequestBuilder(this.rootUrl, MatterService.V1MatterEventsMeetingtypesListGetPath, 'get');
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
   * To access the full response (for headers, for example), `v1MatterEventsMeetingtypesListGet$Response()` instead.
   *
   * This method doesn't expect any response body
   */
  v1MatterEventsMeetingtypesListGet(params?: {

  }): Observable<void> {

    return this.v1MatterEventsMeetingtypesListGet$Response(params).pipe(
      map((r: StrictHttpResponse<void>) => r.body as void)
    );
  }

  /**
   * Path part for operation v1MatterReassignPost
   */
  static readonly V1MatterReassignPostPath = '/v1/Matter/reassign';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `v1MatterReassignPost$Json()` instead.
   *
   * This method sends `application/json` and handles response body of type `application/json`
   */
  v1MatterReassignPost$Json$Response(params?: {

    body?: vwSaveReassignedTrustBank
  }): Observable<StrictHttpResponse<void>> {

    const rb = new RequestBuilder(this.rootUrl, MatterService.V1MatterReassignPostPath, 'post');
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
   * To access the full response (for headers, for example), `v1MatterReassignPost$Json$Response()` instead.
   *
   * This method sends `application/json` and handles response body of type `application/json`
   */
  v1MatterReassignPost$Json(params?: {

    body?: vwSaveReassignedTrustBank
  }): Observable<void> {

    return this.v1MatterReassignPost$Json$Response(params).pipe(
      map((r: StrictHttpResponse<void>) => r.body as void)
    );
  }

  /**
   * Path part for operation v1MatterUniqueMatterNumberExistUniqueNumberGet
   */
  static readonly V1MatterUniqueMatterNumberExistUniqueNumberGetPath = '/v1/Matter/UniqueMatterNumberExist/{UniqueNumber}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `v1MatterUniqueMatterNumberExistUniqueNumberGet()` instead.
   *
   * This method doesn't expect any response body
   */
  v1MatterUniqueMatterNumberExistUniqueNumberGet$Response(params: {
    uniqueNumber: string;

  }): Observable<StrictHttpResponse<void>> {

    const rb = new RequestBuilder(this.rootUrl, MatterService.V1MatterUniqueMatterNumberExistUniqueNumberGetPath, 'get');
    if (params) {

      rb.path('UniqueNumber', params.uniqueNumber);

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
   * To access the full response (for headers, for example), `v1MatterUniqueMatterNumberExistUniqueNumberGet$Response()` instead.
   *
   * This method doesn't expect any response body
   */
  v1MatterUniqueMatterNumberExistUniqueNumberGet(params: {
    uniqueNumber: string;

  }): Observable<void> {

    return this.v1MatterUniqueMatterNumberExistUniqueNumberGet$Response(params).pipe(
      map((r: StrictHttpResponse<void>) => r.body as void)
    );
  }

  /**
   * Path part for operation v1MatterEventsConsultationStatusListGet
   */
  static readonly V1MatterEventsConsultationStatusListGetPath = '/v1/Matter/events/ConsultationStatus/list';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `v1MatterEventsConsultationStatusListGet()` instead.
   *
   * This method doesn't expect any response body
   */
  v1MatterEventsConsultationStatusListGet$Response(params?: {

  }): Observable<StrictHttpResponse<void>> {

    const rb = new RequestBuilder(this.rootUrl, MatterService.V1MatterEventsConsultationStatusListGetPath, 'get');
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
   * To access the full response (for headers, for example), `v1MatterEventsConsultationStatusListGet$Response()` instead.
   *
   * This method doesn't expect any response body
   */
  v1MatterEventsConsultationStatusListGet(params?: {

  }): Observable<void> {

    return this.v1MatterEventsConsultationStatusListGet$Response(params).pipe(
      map((r: StrictHttpResponse<void>) => r.body as void)
    );
  }

  /**
   * Path part for operation v1MatterGetMatterAsssociationsMatterIdGet
   */
  static readonly V1MatterGetMatterAsssociationsMatterIdGetPath = '/v1/Matter/GetMatterAsssociations/{matterId}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `v1MatterGetMatterAsssociationsMatterIdGet()` instead.
   *
   * This method doesn't expect any response body
   */
  v1MatterGetMatterAsssociationsMatterIdGet$Response(params: {
    matterId: number;

  }): Observable<StrictHttpResponse<void>> {

    const rb = new RequestBuilder(this.rootUrl, MatterService.V1MatterGetMatterAsssociationsMatterIdGetPath, 'get');
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
   * To access the full response (for headers, for example), `v1MatterGetMatterAsssociationsMatterIdGet$Response()` instead.
   *
   * This method doesn't expect any response body
   */
  v1MatterGetMatterAsssociationsMatterIdGet(params: {
    matterId: number;

  }): Observable<void> {

    return this.v1MatterGetMatterAsssociationsMatterIdGet$Response(params).pipe(
      map((r: StrictHttpResponse<void>) => r.body as void)
    );
  }

  /**
   * Path part for operation v1MatterGetMattetLawOfficeTimingMatterIdGet
   */
  static readonly V1MatterGetMattetLawOfficeTimingMatterIdGetPath = '/v1/Matter/GetMattetLawOfficeTiming/{matterId}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `v1MatterGetMattetLawOfficeTimingMatterIdGet()` instead.
   *
   * This method doesn't expect any response body
   */
  v1MatterGetMattetLawOfficeTimingMatterIdGet$Response(params: {
    matterId: number;

  }): Observable<StrictHttpResponse<void>> {

    const rb = new RequestBuilder(this.rootUrl, MatterService.V1MatterGetMattetLawOfficeTimingMatterIdGetPath, 'get');
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
   * To access the full response (for headers, for example), `v1MatterGetMattetLawOfficeTimingMatterIdGet$Response()` instead.
   *
   * This method doesn't expect any response body
   */
  v1MatterGetMattetLawOfficeTimingMatterIdGet(params: {
    matterId: number;

  }): Observable<void> {

    return this.v1MatterGetMattetLawOfficeTimingMatterIdGet$Response(params).pipe(
      map((r: StrictHttpResponse<void>) => r.body as void)
    );
  }

  /**
   * Path part for operation v1MatterMatterIdGetOfficeContactInfoGet
   */
  static readonly V1MatterMatterIdGetOfficeContactInfoGetPath = '/v1/Matter/{matterId}/get-office-contact-info';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `v1MatterMatterIdGetOfficeContactInfoGet()` instead.
   *
   * This method doesn't expect any response body
   */
  v1MatterMatterIdGetOfficeContactInfoGet$Response(params: {
    matterId: number;

  }): Observable<StrictHttpResponse<void>> {

    const rb = new RequestBuilder(this.rootUrl, MatterService.V1MatterMatterIdGetOfficeContactInfoGetPath, 'get');
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
   * To access the full response (for headers, for example), `v1MatterMatterIdGetOfficeContactInfoGet$Response()` instead.
   *
   * This method doesn't expect any response body
   */
  v1MatterMatterIdGetOfficeContactInfoGet(params: {
    matterId: number;

  }): Observable<void> {

    return this.v1MatterMatterIdGetOfficeContactInfoGet$Response(params).pipe(
      map((r: StrictHttpResponse<void>) => r.body as void)
    );
  }

  /**
   * Path part for operation v1MatterGetmatterdetailsCpMatterIdGet
   */
  static readonly V1MatterGetmatterdetailsCpMatterIdGetPath = '/v1/Matter/getmatterdetailsCp/{matterId}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `v1MatterGetmatterdetailsCpMatterIdGet()` instead.
   *
   * This method doesn't expect any response body
   */
  v1MatterGetmatterdetailsCpMatterIdGet$Response(params: {
    matterId: number;

  }): Observable<StrictHttpResponse<void>> {

    const rb = new RequestBuilder(this.rootUrl, MatterService.V1MatterGetmatterdetailsCpMatterIdGetPath, 'get');
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
   * To access the full response (for headers, for example), `v1MatterGetmatterdetailsCpMatterIdGet$Response()` instead.
   *
   * This method doesn't expect any response body
   */
  v1MatterGetmatterdetailsCpMatterIdGet(params: {
    matterId: number;

  }): Observable<void> {

    return this.v1MatterGetmatterdetailsCpMatterIdGet$Response(params).pipe(
      map((r: StrictHttpResponse<void>) => r.body as void)
    );
  }

  /**
   * Path part for operation v1MatterBillingSummaryCpMatterIdGet
   */
  static readonly V1MatterBillingSummaryCpMatterIdGetPath = '/v1/Matter/billingSummaryCp/{matterId}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `v1MatterBillingSummaryCpMatterIdGet()` instead.
   *
   * This method doesn't expect any response body
   */
  v1MatterBillingSummaryCpMatterIdGet$Response(params: {
    matterId: number;

  }): Observable<StrictHttpResponse<void>> {

    const rb = new RequestBuilder(this.rootUrl, MatterService.V1MatterBillingSummaryCpMatterIdGetPath, 'get');
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
   * To access the full response (for headers, for example), `v1MatterBillingSummaryCpMatterIdGet$Response()` instead.
   *
   * This method doesn't expect any response body
   */
  v1MatterBillingSummaryCpMatterIdGet(params: {
    matterId: number;

  }): Observable<void> {

    return this.v1MatterBillingSummaryCpMatterIdGet$Response(params).pipe(
      map((r: StrictHttpResponse<void>) => r.body as void)
    );
  }

  /**
   * Path part for operation v1MatterEventsSummaryCpMatterIdGet
   */
  static readonly V1MatterEventsSummaryCpMatterIdGetPath = '/v1/Matter/eventsSummaryCp/{matterId}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `v1MatterEventsSummaryCpMatterIdGet()` instead.
   *
   * This method doesn't expect any response body
   */
  v1MatterEventsSummaryCpMatterIdGet$Response(params: {
    matterId: number;
    isAllSelected?: boolean;

  }): Observable<StrictHttpResponse<void>> {

    const rb = new RequestBuilder(this.rootUrl, MatterService.V1MatterEventsSummaryCpMatterIdGetPath, 'get');
    if (params) {

      rb.path('matterId', params.matterId);
      rb.query('isAllSelected', params.isAllSelected);

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
   * To access the full response (for headers, for example), `v1MatterEventsSummaryCpMatterIdGet$Response()` instead.
   *
   * This method doesn't expect any response body
   */
  v1MatterEventsSummaryCpMatterIdGet(params: {
    matterId: number;
    isAllSelected?: boolean;

  }): Observable<void> {

    return this.v1MatterEventsSummaryCpMatterIdGet$Response(params).pipe(
      map((r: StrictHttpResponse<void>) => r.body as void)
    );
  }

  /**
   * Path part for operation v1MatterMatterIdGet
   */
  static readonly V1MatterMatterIdGetPath = '/v1/Matter/{matterId}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `v1MatterMatterIdGet()` instead.
   *
   * This method doesn't expect any response body
   */
  v1MatterMatterIdGet$Response(params: {
    matterId: number;

  }): Observable<StrictHttpResponse<void>> {

    const rb = new RequestBuilder(this.rootUrl, MatterService.V1MatterMatterIdGetPath, 'get');
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
   * To access the full response (for headers, for example), `v1MatterMatterIdGet$Response()` instead.
   *
   * This method doesn't expect any response body
   */
  v1MatterMatterIdGet(params: {
    matterId: number;

  }): Observable<void> {

    return this.v1MatterMatterIdGet$Response(params).pipe(
      map((r: StrictHttpResponse<void>) => r.body as void)
    );
  }

  /**
   * Path part for operation v1MatterAssociationPut
   */
  static readonly V1MatterAssociationPutPath = '/v1/Matter/association';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `v1MatterAssociationPut$Json()` instead.
   *
   * This method sends `application/json` and handles response body of type `application/json`
   */
  v1MatterAssociationPut$Json$Response(params?: {

    body?: vwUpdateMatterAssociation
  }): Observable<StrictHttpResponse<void>> {

    const rb = new RequestBuilder(this.rootUrl, MatterService.V1MatterAssociationPutPath, 'put');
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
   * To access the full response (for headers, for example), `v1MatterAssociationPut$Json$Response()` instead.
   *
   * This method sends `application/json` and handles response body of type `application/json`
   */
  v1MatterAssociationPut$Json(params?: {

    body?: vwUpdateMatterAssociation
  }): Observable<void> {

    return this.v1MatterAssociationPut$Json$Response(params).pipe(
      map((r: StrictHttpResponse<void>) => r.body as void)
    );
  }

  /**
   * Path part for operation v1MatterAssociationPost
   */
  static readonly V1MatterAssociationPostPath = '/v1/Matter/association';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `v1MatterAssociationPost$Json()` instead.
   *
   * This method sends `application/json` and handles response body of type `application/json`
   */
  v1MatterAssociationPost$Json$Response(params?: {

    body?: vwMatterAssociation
  }): Observable<StrictHttpResponse<void>> {

    const rb = new RequestBuilder(this.rootUrl, MatterService.V1MatterAssociationPostPath, 'post');
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
   * To access the full response (for headers, for example), `v1MatterAssociationPost$Json$Response()` instead.
   *
   * This method sends `application/json` and handles response body of type `application/json`
   */
  v1MatterAssociationPost$Json(params?: {

    body?: vwMatterAssociation
  }): Observable<void> {

    return this.v1MatterAssociationPost$Json$Response(params).pipe(
      map((r: StrictHttpResponse<void>) => r.body as void)
    );
  }

  /**
   * Path part for operation v1MatterAssociationMatterAssociationIdDelete
   */
  static readonly V1MatterAssociationMatterAssociationIdDeletePath = '/v1/Matter/association/{matterAssociationId}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `v1MatterAssociationMatterAssociationIdDelete()` instead.
   *
   * This method doesn't expect any response body
   */
  v1MatterAssociationMatterAssociationIdDelete$Response(params: {
    matterAssociationId: number;

  }): Observable<StrictHttpResponse<void>> {

    const rb = new RequestBuilder(this.rootUrl, MatterService.V1MatterAssociationMatterAssociationIdDeletePath, 'delete');
    if (params) {

      rb.path('matterAssociationId', params.matterAssociationId);

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
   * To access the full response (for headers, for example), `v1MatterAssociationMatterAssociationIdDelete$Response()` instead.
   *
   * This method doesn't expect any response body
   */
  v1MatterAssociationMatterAssociationIdDelete(params: {
    matterAssociationId: number;

  }): Observable<void> {

    return this.v1MatterAssociationMatterAssociationIdDelete$Response(params).pipe(
      map((r: StrictHttpResponse<void>) => r.body as void)
    );
  }

  /**
   * Path part for operation getMatterActivityHistory
   */
  static readonly GetMatterActivityHistoryPath = '/v1/Matter/{matterId}/History';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `getMatterActivityHistory()` instead.
   *
   * This method doesn't expect any response body
   */
  getMatterActivityHistory$Response(params: {
    matterId: number;
    activityType?: number;
    date?: string;

  }): Observable<StrictHttpResponse<void>> {

    const rb = new RequestBuilder(this.rootUrl, MatterService.GetMatterActivityHistoryPath, 'get');
    if (params) {

      rb.path('matterId', params.matterId);
      rb.query('activityType', params.activityType);
      rb.query('date', params.date);

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
   * To access the full response (for headers, for example), `getMatterActivityHistory$Response()` instead.
   *
   * This method doesn't expect any response body
   */
  getMatterActivityHistory(params: {
    matterId: number;
    activityType?: number;
    date?: string;

  }): Observable<void> {

    return this.getMatterActivityHistory$Response(params).pipe(
      map((r: StrictHttpResponse<void>) => r.body as void)
    );
  }

  /**
   * Path part for operation getMatterActivityType
   */
  static readonly GetMatterActivityTypePath = '/v1/Matter/ActivityType';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `getMatterActivityType()` instead.
   *
   * This method doesn't expect any response body
   */
  getMatterActivityType$Response(params?: {

  }): Observable<StrictHttpResponse<void>> {

    const rb = new RequestBuilder(this.rootUrl, MatterService.GetMatterActivityTypePath, 'get');
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
   * To access the full response (for headers, for example), `getMatterActivityType$Response()` instead.
   *
   * This method doesn't expect any response body
   */
  getMatterActivityType(params?: {

  }): Observable<void> {

    return this.getMatterActivityType$Response(params).pipe(
      map((r: StrictHttpResponse<void>) => r.body as void)
    );
  }

  /**
   * Path part for operation v1MatterAssociationMatterIdGet
   */
  static readonly V1MatterAssociationMatterIdGetPath = '/v1/Matter/association/{matterId}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `v1MatterAssociationMatterIdGet()` instead.
   *
   * This method doesn't expect any response body
   */
  v1MatterAssociationMatterIdGet$Response(params: {
    matterId: number;

  }): Observable<StrictHttpResponse<void>> {

    const rb = new RequestBuilder(this.rootUrl, MatterService.V1MatterAssociationMatterIdGetPath, 'get');
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
   * To access the full response (for headers, for example), `v1MatterAssociationMatterIdGet$Response()` instead.
   *
   * This method doesn't expect any response body
   */
  v1MatterAssociationMatterIdGet(params: {
    matterId: number;

  }): Observable<void> {

    return this.v1MatterAssociationMatterIdGet$Response(params).pipe(
      map((r: StrictHttpResponse<void>) => r.body as void)
    );
  }

  /**
   * Path part for operation v1MatterHierarchyMatterIdGet
   */
  static readonly V1MatterHierarchyMatterIdGetPath = '/v1/Matter/hierarchy/{matterId}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `v1MatterHierarchyMatterIdGet()` instead.
   *
   * This method doesn't expect any response body
   */
  v1MatterHierarchyMatterIdGet$Response(params: {
    matterId: number;

  }): Observable<StrictHttpResponse<void>> {

    const rb = new RequestBuilder(this.rootUrl, MatterService.V1MatterHierarchyMatterIdGetPath, 'get');
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
   * To access the full response (for headers, for example), `v1MatterHierarchyMatterIdGet$Response()` instead.
   *
   * This method doesn't expect any response body
   */
  v1MatterHierarchyMatterIdGet(params: {
    matterId: number;

  }): Observable<void> {

    return this.v1MatterHierarchyMatterIdGet$Response(params).pipe(
      map((r: StrictHttpResponse<void>) => r.body as void)
    );
  }

  /**
   * Path part for operation v1MatterSearchPost
   */
  static readonly V1MatterSearchPostPath = '/v1/Matter/search';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `v1MatterSearchPost$Json()` instead.
   *
   * This method sends `application/json` and handles response body of type `application/json`
   */
  v1MatterSearchPost$Json$Response(params?: {

    body?: vwMatterSearch
  }): Observable<StrictHttpResponse<void>> {

    const rb = new RequestBuilder(this.rootUrl, MatterService.V1MatterSearchPostPath, 'post');
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
   * To access the full response (for headers, for example), `v1MatterSearchPost$Json$Response()` instead.
   *
   * This method sends `application/json` and handles response body of type `application/json`
   */
  v1MatterSearchPost$Json(params?: {

    body?: vwMatterSearch
  }): Observable<void> {

    return this.v1MatterSearchPost$Json$Response(params).pipe(
      map((r: StrictHttpResponse<void>) => r.body as void)
    );
  }

  /**
   * Path part for operation v1MatterOpenClientClientIdGet
   */
  static readonly V1MatterOpenClientClientIdGetPath = '/v1/Matter/open/client/{clientId}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `v1MatterOpenClientClientIdGet()` instead.
   *
   * This method doesn't expect any response body
   */
  v1MatterOpenClientClientIdGet$Response(params: {
    clientId: number;

  }): Observable<StrictHttpResponse<void>> {

    const rb = new RequestBuilder(this.rootUrl, MatterService.V1MatterOpenClientClientIdGetPath, 'get');
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
   * To access the full response (for headers, for example), `v1MatterOpenClientClientIdGet$Response()` instead.
   *
   * This method doesn't expect any response body
   */
  v1MatterOpenClientClientIdGet(params: {
    clientId: number;

  }): Observable<void> {

    return this.v1MatterOpenClientClientIdGet$Response(params).pipe(
      map((r: StrictHttpResponse<void>) => r.body as void)
    );
  }

  /**
   * Path part for operation v1MatterBasicsPut
   */
  static readonly V1MatterBasicsPutPath = '/v1/Matter/basics';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `v1MatterBasicsPut$Json()` instead.
   *
   * This method sends `application/json` and handles response body of type `application/json`
   */
  v1MatterBasicsPut$Json$Response(params?: {

    body?: vwMatterBasics
  }): Observable<StrictHttpResponse<void>> {

    const rb = new RequestBuilder(this.rootUrl, MatterService.V1MatterBasicsPutPath, 'put');
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
   * To access the full response (for headers, for example), `v1MatterBasicsPut$Json$Response()` instead.
   *
   * This method sends `application/json` and handles response body of type `application/json`
   */
  v1MatterBasicsPut$Json(params?: {

    body?: vwMatterBasics
  }): Observable<void> {

    return this.v1MatterBasicsPut$Json$Response(params).pipe(
      map((r: StrictHttpResponse<void>) => r.body as void)
    );
  }

  /**
   * Path part for operation v1MatterTypesGet
   */
  static readonly V1MatterTypesGetPath = '/v1/Matter/types';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `v1MatterTypesGet()` instead.
   *
   * This method doesn't expect any response body
   */
  v1MatterTypesGet$Response(params?: {

  }): Observable<StrictHttpResponse<void>> {

    const rb = new RequestBuilder(this.rootUrl, MatterService.V1MatterTypesGetPath, 'get');
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
   * To access the full response (for headers, for example), `v1MatterTypesGet$Response()` instead.
   *
   * This method doesn't expect any response body
   */
  v1MatterTypesGet(params?: {

  }): Observable<void> {

    return this.v1MatterTypesGet$Response(params).pipe(
      map((r: StrictHttpResponse<void>) => r.body as void)
    );
  }

  /**
   * Path part for operation v1MatterTypesPracticeIdGet
   */
  static readonly V1MatterTypesPracticeIdGetPath = '/v1/Matter/types/{practiceId}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `v1MatterTypesPracticeIdGet()` instead.
   *
   * This method doesn't expect any response body
   */
  v1MatterTypesPracticeIdGet$Response(params: {
    practiceId: number;

  }): Observable<StrictHttpResponse<void>> {

    const rb = new RequestBuilder(this.rootUrl, MatterService.V1MatterTypesPracticeIdGetPath, 'get');
    if (params) {

      rb.path('practiceId', params.practiceId);

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
   * To access the full response (for headers, for example), `v1MatterTypesPracticeIdGet$Response()` instead.
   *
   * This method doesn't expect any response body
   */
  v1MatterTypesPracticeIdGet(params: {
    practiceId: number;

  }): Observable<void> {

    return this.v1MatterTypesPracticeIdGet$Response(params).pipe(
      map((r: StrictHttpResponse<void>) => r.body as void)
    );
  }

  /**
   * Path part for operation v1MatterStatusesGet
   */
  static readonly V1MatterStatusesGetPath = '/v1/Matter/statuses';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `v1MatterStatusesGet()` instead.
   *
   * This method doesn't expect any response body
   */
  v1MatterStatusesGet$Response(params?: {

  }): Observable<StrictHttpResponse<void>> {

    const rb = new RequestBuilder(this.rootUrl, MatterService.V1MatterStatusesGetPath, 'get');
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
   * To access the full response (for headers, for example), `v1MatterStatusesGet$Response()` instead.
   *
   * This method doesn't expect any response body
   */
  v1MatterStatusesGet(params?: {

  }): Observable<void> {

    return this.v1MatterStatusesGet$Response(params).pipe(
      map((r: StrictHttpResponse<void>) => r.body as void)
    );
  }

  /**
   * Path part for operation v1MatterEventsTypesListGet
   */
  static readonly V1MatterEventsTypesListGetPath = '/v1/Matter/events/types/list';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `v1MatterEventsTypesListGet()` instead.
   *
   * This method doesn't expect any response body
   */
  v1MatterEventsTypesListGet$Response(params?: {

  }): Observable<StrictHttpResponse<void>> {

    const rb = new RequestBuilder(this.rootUrl, MatterService.V1MatterEventsTypesListGetPath, 'get');
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
   * To access the full response (for headers, for example), `v1MatterEventsTypesListGet$Response()` instead.
   *
   * This method doesn't expect any response body
   */
  v1MatterEventsTypesListGet(params?: {

  }): Observable<void> {

    return this.v1MatterEventsTypesListGet$Response(params).pipe(
      map((r: StrictHttpResponse<void>) => r.body as void)
    );
  }

  /**
   * Path part for operation v1MatterEventsStatusesListGet
   */
  static readonly V1MatterEventsStatusesListGetPath = '/v1/Matter/events/statuses/list';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `v1MatterEventsStatusesListGet()` instead.
   *
   * This method doesn't expect any response body
   */
  v1MatterEventsStatusesListGet$Response(params?: {

  }): Observable<StrictHttpResponse<void>> {

    const rb = new RequestBuilder(this.rootUrl, MatterService.V1MatterEventsStatusesListGetPath, 'get');
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
   * To access the full response (for headers, for example), `v1MatterEventsStatusesListGet$Response()` instead.
   *
   * This method doesn't expect any response body
   */
  v1MatterEventsStatusesListGet(params?: {

  }): Observable<void> {

    return this.v1MatterEventsStatusesListGet$Response(params).pipe(
      map((r: StrictHttpResponse<void>) => r.body as void)
    );
  }

  /**
   * Path part for operation v1MatterEventsAcceptstatusesListGet
   */
  static readonly V1MatterEventsAcceptstatusesListGetPath = '/v1/Matter/events/acceptstatuses/list';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `v1MatterEventsAcceptstatusesListGet()` instead.
   *
   * This method doesn't expect any response body
   */
  v1MatterEventsAcceptstatusesListGet$Response(params?: {

  }): Observable<StrictHttpResponse<void>> {

    const rb = new RequestBuilder(this.rootUrl, MatterService.V1MatterEventsAcceptstatusesListGetPath, 'get');
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
   * To access the full response (for headers, for example), `v1MatterEventsAcceptstatusesListGet$Response()` instead.
   *
   * This method doesn't expect any response body
   */
  v1MatterEventsAcceptstatusesListGet(params?: {

  }): Observable<void> {

    return this.v1MatterEventsAcceptstatusesListGet$Response(params).pipe(
      map((r: StrictHttpResponse<void>) => r.body as void)
    );
  }

  /**
   * Path part for operation v1MatterEventsPrivacyListGet
   */
  static readonly V1MatterEventsPrivacyListGetPath = '/v1/Matter/events/privacy/list';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `v1MatterEventsPrivacyListGet()` instead.
   *
   * This method doesn't expect any response body
   */
  v1MatterEventsPrivacyListGet$Response(params?: {

  }): Observable<StrictHttpResponse<void>> {

    const rb = new RequestBuilder(this.rootUrl, MatterService.V1MatterEventsPrivacyListGetPath, 'get');
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
   * To access the full response (for headers, for example), `v1MatterEventsPrivacyListGet$Response()` instead.
   *
   * This method doesn't expect any response body
   */
  v1MatterEventsPrivacyListGet(params?: {

  }): Observable<void> {

    return this.v1MatterEventsPrivacyListGet$Response(params).pipe(
      map((r: StrictHttpResponse<void>) => r.body as void)
    );
  }

  /**
   * Path part for operation v1MatterEventsInviteetypesListGet
   */
  static readonly V1MatterEventsInviteetypesListGetPath = '/v1/Matter/events/inviteetypes/list';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `v1MatterEventsInviteetypesListGet()` instead.
   *
   * This method doesn't expect any response body
   */
  v1MatterEventsInviteetypesListGet$Response(params?: {

  }): Observable<StrictHttpResponse<void>> {

    const rb = new RequestBuilder(this.rootUrl, MatterService.V1MatterEventsInviteetypesListGetPath, 'get');
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
   * To access the full response (for headers, for example), `v1MatterEventsInviteetypesListGet$Response()` instead.
   *
   * This method doesn't expect any response body
   */
  v1MatterEventsInviteetypesListGet(params?: {

  }): Observable<void> {

    return this.v1MatterEventsInviteetypesListGet$Response(params).pipe(
      map((r: StrictHttpResponse<void>) => r.body as void)
    );
  }

  /**
   * Path part for operation v1MatterEventsRecurringtypesListGet
   */
  static readonly V1MatterEventsRecurringtypesListGetPath = '/v1/Matter/events/recurringtypes/list';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `v1MatterEventsRecurringtypesListGet()` instead.
   *
   * This method doesn't expect any response body
   */
  v1MatterEventsRecurringtypesListGet$Response(params?: {

  }): Observable<StrictHttpResponse<void>> {

    const rb = new RequestBuilder(this.rootUrl, MatterService.V1MatterEventsRecurringtypesListGetPath, 'get');
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
   * To access the full response (for headers, for example), `v1MatterEventsRecurringtypesListGet$Response()` instead.
   *
   * This method doesn't expect any response body
   */
  v1MatterEventsRecurringtypesListGet(params?: {

  }): Observable<void> {

    return this.v1MatterEventsRecurringtypesListGet$Response(params).pipe(
      map((r: StrictHttpResponse<void>) => r.body as void)
    );
  }

  /**
   * Path part for operation v1MatterEventsInviteeAcceptstatusInviteeIdGet
   */
  static readonly V1MatterEventsInviteeAcceptstatusInviteeIdGetPath = '/v1/Matter/events/invitee/acceptstatus/{inviteeId}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `v1MatterEventsInviteeAcceptstatusInviteeIdGet()` instead.
   *
   * This method doesn't expect any response body
   */
  v1MatterEventsInviteeAcceptstatusInviteeIdGet$Response(params: {
    inviteeId: number;

  }): Observable<StrictHttpResponse<void>> {

    const rb = new RequestBuilder(this.rootUrl, MatterService.V1MatterEventsInviteeAcceptstatusInviteeIdGetPath, 'get');
    if (params) {

      rb.path('inviteeId', params.inviteeId);

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
   * To access the full response (for headers, for example), `v1MatterEventsInviteeAcceptstatusInviteeIdGet$Response()` instead.
   *
   * This method doesn't expect any response body
   */
  v1MatterEventsInviteeAcceptstatusInviteeIdGet(params: {
    inviteeId: number;

  }): Observable<void> {

    return this.v1MatterEventsInviteeAcceptstatusInviteeIdGet$Response(params).pipe(
      map((r: StrictHttpResponse<void>) => r.body as void)
    );
  }

  /**
   * Path part for operation v1MatterEventsInviteeAcceptstatusInviteeIdAcceptStatusIdPut
   */
  static readonly V1MatterEventsInviteeAcceptstatusInviteeIdAcceptStatusIdPutPath = '/v1/Matter/events/invitee/acceptstatus/{inviteeId}/{acceptStatusId}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `v1MatterEventsInviteeAcceptstatusInviteeIdAcceptStatusIdPut()` instead.
   *
   * This method doesn't expect any response body
   */
  v1MatterEventsInviteeAcceptstatusInviteeIdAcceptStatusIdPut$Response(params: {
    inviteeId: number;
    acceptStatusId: number;

  }): Observable<StrictHttpResponse<void>> {

    const rb = new RequestBuilder(this.rootUrl, MatterService.V1MatterEventsInviteeAcceptstatusInviteeIdAcceptStatusIdPutPath, 'put');
    if (params) {

      rb.path('inviteeId', params.inviteeId);
      rb.path('acceptStatusId', params.acceptStatusId);

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
   * To access the full response (for headers, for example), `v1MatterEventsInviteeAcceptstatusInviteeIdAcceptStatusIdPut$Response()` instead.
   *
   * This method doesn't expect any response body
   */
  v1MatterEventsInviteeAcceptstatusInviteeIdAcceptStatusIdPut(params: {
    inviteeId: number;
    acceptStatusId: number;

  }): Observable<void> {

    return this.v1MatterEventsInviteeAcceptstatusInviteeIdAcceptStatusIdPut$Response(params).pipe(
      map((r: StrictHttpResponse<void>) => r.body as void)
    );
  }

  /**
   * Path part for operation v1MatterEventsPut
   */
  static readonly V1MatterEventsPutPath = '/v1/Matter/events';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `v1MatterEventsPut$Json()` instead.
   *
   * This method sends `application/json` and handles response body of type `application/json`
   */
  v1MatterEventsPut$Json$Response(params?: {

    body?: vwMatterEvents
  }): Observable<StrictHttpResponse<void>> {

    const rb = new RequestBuilder(this.rootUrl, MatterService.V1MatterEventsPutPath, 'put');
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
   * To access the full response (for headers, for example), `v1MatterEventsPut$Json$Response()` instead.
   *
   * This method sends `application/json` and handles response body of type `application/json`
   */
  v1MatterEventsPut$Json(params?: {

    body?: vwMatterEvents
  }): Observable<void> {

    return this.v1MatterEventsPut$Json$Response(params).pipe(
      map((r: StrictHttpResponse<void>) => r.body as void)
    );
  }

  /**
   * Path part for operation v1MatterEventsPost
   */
  static readonly V1MatterEventsPostPath = '/v1/Matter/events';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `v1MatterEventsPost$Json()` instead.
   *
   * This method sends `application/json` and handles response body of type `application/json`
   */
  v1MatterEventsPost$Json$Response(params?: {

    body?: vwMatterEvents
  }): Observable<StrictHttpResponse<void>> {

    const rb = new RequestBuilder(this.rootUrl, MatterService.V1MatterEventsPostPath, 'post');
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
   * To access the full response (for headers, for example), `v1MatterEventsPost$Json$Response()` instead.
   *
   * This method sends `application/json` and handles response body of type `application/json`
   */
  v1MatterEventsPost$Json(params?: {

    body?: vwMatterEvents
  }): Observable<void> {

    return this.v1MatterEventsPost$Json$Response(params).pipe(
      map((r: StrictHttpResponse<void>) => r.body as void)
    );
  }

  /**
   * Path part for operation v1MatterEventsDelete
   */
  static readonly V1MatterEventsDeletePath = '/v1/Matter/events';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `v1MatterEventsDelete()` instead.
   *
   * This method doesn't expect any response body
   */
  v1MatterEventsDelete$Response(params?: {
    matterEventId?: number;
    isEventCancelled?: boolean;
    notes?: string;

  }): Observable<StrictHttpResponse<void>> {

    const rb = new RequestBuilder(this.rootUrl, MatterService.V1MatterEventsDeletePath, 'delete');
    if (params) {

      rb.query('matterEventId', params.matterEventId);
      rb.query('isEventCancelled', params.isEventCancelled);
      rb.query('notes', params.notes);

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
   * To access the full response (for headers, for example), `v1MatterEventsDelete$Response()` instead.
   *
   * This method doesn't expect any response body
   */
  v1MatterEventsDelete(params?: {
    matterEventId?: number;
    isEventCancelled?: boolean;
    notes?: string;

  }): Observable<void> {

    return this.v1MatterEventsDelete$Response(params).pipe(
      map((r: StrictHttpResponse<void>) => r.body as void)
    );
  }

  /**
   * Path part for operation v1MatterEventsListMatterIdGet
   */
  static readonly V1MatterEventsListMatterIdGetPath = '/v1/Matter/events/list/{matterId}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `v1MatterEventsListMatterIdGet()` instead.
   *
   * This method doesn't expect any response body
   */
  v1MatterEventsListMatterIdGet$Response(params: {
    matterId: number;
    isAllSelected?: boolean;

  }): Observable<StrictHttpResponse<void>> {

    const rb = new RequestBuilder(this.rootUrl, MatterService.V1MatterEventsListMatterIdGetPath, 'get');
    if (params) {

      rb.path('matterId', params.matterId);
      rb.query('isAllSelected', params.isAllSelected);

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
   * To access the full response (for headers, for example), `v1MatterEventsListMatterIdGet$Response()` instead.
   *
   * This method doesn't expect any response body
   */
  v1MatterEventsListMatterIdGet(params: {
    matterId: number;
    isAllSelected?: boolean;

  }): Observable<void> {

    return this.v1MatterEventsListMatterIdGet$Response(params).pipe(
      map((r: StrictHttpResponse<void>) => r.body as void)
    );
  }

  /**
   * Path part for operation v1MatterEventsListMultiplePost
   */
  static readonly V1MatterEventsListMultiplePostPath = '/v1/Matter/events/list/multiple';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `v1MatterEventsListMultiplePost$Json()` instead.
   *
   * This method sends `application/json` and handles response body of type `application/json`
   */
  v1MatterEventsListMultiplePost$Json$Response(params?: {

    body?: vwMatterIdsForEvents
  }): Observable<StrictHttpResponse<void>> {

    const rb = new RequestBuilder(this.rootUrl, MatterService.V1MatterEventsListMultiplePostPath, 'post');
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
   * To access the full response (for headers, for example), `v1MatterEventsListMultiplePost$Json$Response()` instead.
   *
   * This method sends `application/json` and handles response body of type `application/json`
   */
  v1MatterEventsListMultiplePost$Json(params?: {

    body?: vwMatterIdsForEvents
  }): Observable<void> {

    return this.v1MatterEventsListMultiplePost$Json$Response(params).pipe(
      map((r: StrictHttpResponse<void>) => r.body as void)
    );
  }

  /**
   * Path part for operation v1MatterBlockUsersMatterIdGet
   */
  static readonly V1MatterBlockUsersMatterIdGetPath = '/v1/Matter/blockUsers/{matterId}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `v1MatterBlockUsersMatterIdGet()` instead.
   *
   * This method doesn't expect any response body
   */
  v1MatterBlockUsersMatterIdGet$Response(params: {
    matterId: number;

  }): Observable<StrictHttpResponse<void>> {

    const rb = new RequestBuilder(this.rootUrl, MatterService.V1MatterBlockUsersMatterIdGetPath, 'get');
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
   * To access the full response (for headers, for example), `v1MatterBlockUsersMatterIdGet$Response()` instead.
   *
   * This method doesn't expect any response body
   */
  v1MatterBlockUsersMatterIdGet(params: {
    matterId: number;

  }): Observable<void> {

    return this.v1MatterBlockUsersMatterIdGet$Response(params).pipe(
      map((r: StrictHttpResponse<void>) => r.body as void)
    );
  }

  /**
   * Path part for operation v1MatterBlockUsersMatterMatterIdClientIdGet
   */
  static readonly V1MatterBlockUsersMatterMatterIdClientIdGetPath = '/v1/Matter/blockUsersMatter/{matterId}/{clientId}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `v1MatterBlockUsersMatterMatterIdClientIdGet()` instead.
   *
   * This method doesn't expect any response body
   */
  v1MatterBlockUsersMatterMatterIdClientIdGet$Response(params: {
    matterId: number;
    clientId: number;

  }): Observable<StrictHttpResponse<void>> {

    const rb = new RequestBuilder(this.rootUrl, MatterService.V1MatterBlockUsersMatterMatterIdClientIdGetPath, 'get');
    if (params) {

      rb.path('matterId', params.matterId);
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
   * To access the full response (for headers, for example), `v1MatterBlockUsersMatterMatterIdClientIdGet$Response()` instead.
   *
   * This method doesn't expect any response body
   */
  v1MatterBlockUsersMatterMatterIdClientIdGet(params: {
    matterId: number;
    clientId: number;

  }): Observable<void> {

    return this.v1MatterBlockUsersMatterMatterIdClientIdGet$Response(params).pipe(
      map((r: StrictHttpResponse<void>) => r.body as void)
    );
  }

  /**
   * Path part for operation v1MatterConflictMatterIdGet
   */
  static readonly V1MatterConflictMatterIdGetPath = '/v1/Matter/conflict/{matterId}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `v1MatterConflictMatterIdGet()` instead.
   *
   * This method doesn't expect any response body
   */
  v1MatterConflictMatterIdGet$Response(params: {
    matterId: number;

  }): Observable<StrictHttpResponse<void>> {

    const rb = new RequestBuilder(this.rootUrl, MatterService.V1MatterConflictMatterIdGetPath, 'get');
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
   * To access the full response (for headers, for example), `v1MatterConflictMatterIdGet$Response()` instead.
   *
   * This method doesn't expect any response body
   */
  v1MatterConflictMatterIdGet(params: {
    matterId: number;

  }): Observable<void> {

    return this.v1MatterConflictMatterIdGet$Response(params).pipe(
      map((r: StrictHttpResponse<void>) => r.body as void)
    );
  }

  /**
   * Path part for operation v1MatterByuserGet
   */
  static readonly V1MatterByuserGetPath = '/v1/Matter/byuser';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `v1MatterByuserGet()` instead.
   *
   * This method doesn't expect any response body
   */
  v1MatterByuserGet$Response(params?: {

  }): Observable<StrictHttpResponse<void>> {

    const rb = new RequestBuilder(this.rootUrl, MatterService.V1MatterByuserGetPath, 'get');
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
   * To access the full response (for headers, for example), `v1MatterByuserGet$Response()` instead.
   *
   * This method doesn't expect any response body
   */
  v1MatterByuserGet(params?: {

  }): Observable<void> {

    return this.v1MatterByuserGet$Response(params).pipe(
      map((r: StrictHttpResponse<void>) => r.body as void)
    );
  }

  /**
   * Path part for operation v1MatterByofficeOfficeIdGet
   */
  static readonly V1MatterByofficeOfficeIdGetPath = '/v1/Matter/byoffice/{officeId}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `v1MatterByofficeOfficeIdGet()` instead.
   *
   * This method doesn't expect any response body
   */
  v1MatterByofficeOfficeIdGet$Response(params: {
    officeId: number;

  }): Observable<StrictHttpResponse<void>> {

    const rb = new RequestBuilder(this.rootUrl, MatterService.V1MatterByofficeOfficeIdGetPath, 'get');
    if (params) {

      rb.path('officeId', params.officeId);

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
   * To access the full response (for headers, for example), `v1MatterByofficeOfficeIdGet$Response()` instead.
   *
   * This method doesn't expect any response body
   */
  v1MatterByofficeOfficeIdGet(params: {
    officeId: number;

  }): Observable<void> {

    return this.v1MatterByofficeOfficeIdGet$Response(params).pipe(
      map((r: StrictHttpResponse<void>) => r.body as void)
    );
  }

  /**
   * Path part for operation v1MatterAlertSearchMatterIdGet
   */
  static readonly V1MatterAlertSearchMatterIdGetPath = '/v1/Matter/alert/search/{matterId}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `v1MatterAlertSearchMatterIdGet()` instead.
   *
   * This method doesn't expect any response body
   */
  v1MatterAlertSearchMatterIdGet$Response(params: {
    matterId: number;
    search?: string;

  }): Observable<StrictHttpResponse<void>> {

    const rb = new RequestBuilder(this.rootUrl, MatterService.V1MatterAlertSearchMatterIdGetPath, 'get');
    if (params) {

      rb.path('matterId', params.matterId);
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
   * To access the full response (for headers, for example), `v1MatterAlertSearchMatterIdGet$Response()` instead.
   *
   * This method doesn't expect any response body
   */
  v1MatterAlertSearchMatterIdGet(params: {
    matterId: number;
    search?: string;

  }): Observable<void> {

    return this.v1MatterAlertSearchMatterIdGet$Response(params).pipe(
      map((r: StrictHttpResponse<void>) => r.body as void)
    );
  }

  /**
   * Path part for operation v1MatterAlertStatusesGet
   */
  static readonly V1MatterAlertStatusesGetPath = '/v1/Matter/alert/statuses';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `v1MatterAlertStatusesGet()` instead.
   *
   * This method doesn't expect any response body
   */
  v1MatterAlertStatusesGet$Response(params?: {

  }): Observable<StrictHttpResponse<void>> {

    const rb = new RequestBuilder(this.rootUrl, MatterService.V1MatterAlertStatusesGetPath, 'get');
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
   * To access the full response (for headers, for example), `v1MatterAlertStatusesGet$Response()` instead.
   *
   * This method doesn't expect any response body
   */
  v1MatterAlertStatusesGet(params?: {

  }): Observable<void> {

    return this.v1MatterAlertStatusesGet$Response(params).pipe(
      map((r: StrictHttpResponse<void>) => r.body as void)
    );
  }

  /**
   * Path part for operation v1MatterAlertPrioritisGet
   */
  static readonly V1MatterAlertPrioritisGetPath = '/v1/Matter/alert/prioritis';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `v1MatterAlertPrioritisGet()` instead.
   *
   * This method doesn't expect any response body
   */
  v1MatterAlertPrioritisGet$Response(params?: {

  }): Observable<StrictHttpResponse<void>> {

    const rb = new RequestBuilder(this.rootUrl, MatterService.V1MatterAlertPrioritisGetPath, 'get');
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
   * To access the full response (for headers, for example), `v1MatterAlertPrioritisGet$Response()` instead.
   *
   * This method doesn't expect any response body
   */
  v1MatterAlertPrioritisGet(params?: {

  }): Observable<void> {

    return this.v1MatterAlertPrioritisGet$Response(params).pipe(
      map((r: StrictHttpResponse<void>) => r.body as void)
    );
  }

  /**
   * Path part for operation v1MatterAlertListMatterIdGet
   */
  static readonly V1MatterAlertListMatterIdGetPath = '/v1/Matter/alert/list/{matterId}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `v1MatterAlertListMatterIdGet()` instead.
   *
   * This method doesn't expect any response body
   */
  v1MatterAlertListMatterIdGet$Response(params: {
    matterId: number;

  }): Observable<StrictHttpResponse<void>> {

    const rb = new RequestBuilder(this.rootUrl, MatterService.V1MatterAlertListMatterIdGetPath, 'get');
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
   * To access the full response (for headers, for example), `v1MatterAlertListMatterIdGet$Response()` instead.
   *
   * This method doesn't expect any response body
   */
  v1MatterAlertListMatterIdGet(params: {
    matterId: number;

  }): Observable<void> {

    return this.v1MatterAlertListMatterIdGet$Response(params).pipe(
      map((r: StrictHttpResponse<void>) => r.body as void)
    );
  }

  /**
   * Path part for operation v1MatterAlertAddPost
   */
  static readonly V1MatterAlertAddPostPath = '/v1/Matter/alert/add';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `v1MatterAlertAddPost$Json()` instead.
   *
   * This method sends `application/json` and handles response body of type `application/json`
   */
  v1MatterAlertAddPost$Json$Response(params?: {

    body?: vwMatterAlert
  }): Observable<StrictHttpResponse<void>> {

    const rb = new RequestBuilder(this.rootUrl, MatterService.V1MatterAlertAddPostPath, 'post');
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
   * To access the full response (for headers, for example), `v1MatterAlertAddPost$Json$Response()` instead.
   *
   * This method sends `application/json` and handles response body of type `application/json`
   */
  v1MatterAlertAddPost$Json(params?: {

    body?: vwMatterAlert
  }): Observable<void> {

    return this.v1MatterAlertAddPost$Json$Response(params).pipe(
      map((r: StrictHttpResponse<void>) => r.body as void)
    );
  }

  /**
   * Path part for operation v1MatterAlertUpdatePut
   */
  static readonly V1MatterAlertUpdatePutPath = '/v1/Matter/alert/update';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `v1MatterAlertUpdatePut$Json()` instead.
   *
   * This method sends `application/json` and handles response body of type `application/json`
   */
  v1MatterAlertUpdatePut$Json$Response(params?: {

    body?: vwMatterAlert
  }): Observable<StrictHttpResponse<void>> {

    const rb = new RequestBuilder(this.rootUrl, MatterService.V1MatterAlertUpdatePutPath, 'put');
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
   * To access the full response (for headers, for example), `v1MatterAlertUpdatePut$Json$Response()` instead.
   *
   * This method sends `application/json` and handles response body of type `application/json`
   */
  v1MatterAlertUpdatePut$Json(params?: {

    body?: vwMatterAlert
  }): Observable<void> {

    return this.v1MatterAlertUpdatePut$Json$Response(params).pipe(
      map((r: StrictHttpResponse<void>) => r.body as void)
    );
  }

  /**
   * Path part for operation v1MatterAlertDeleteMatterAlertIdDelete
   */
  static readonly V1MatterAlertDeleteMatterAlertIdDeletePath = '/v1/Matter/alert/delete/{matterAlertId}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `v1MatterAlertDeleteMatterAlertIdDelete()` instead.
   *
   * This method doesn't expect any response body
   */
  v1MatterAlertDeleteMatterAlertIdDelete$Response(params: {
    matterAlertId: number;

  }): Observable<StrictHttpResponse<void>> {

    const rb = new RequestBuilder(this.rootUrl, MatterService.V1MatterAlertDeleteMatterAlertIdDeletePath, 'delete');
    if (params) {

      rb.path('matterAlertId', params.matterAlertId);

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
   * To access the full response (for headers, for example), `v1MatterAlertDeleteMatterAlertIdDelete$Response()` instead.
   *
   * This method doesn't expect any response body
   */
  v1MatterAlertDeleteMatterAlertIdDelete(params: {
    matterAlertId: number;

  }): Observable<void> {

    return this.v1MatterAlertDeleteMatterAlertIdDelete$Response(params).pipe(
      map((r: StrictHttpResponse<void>) => r.body as void)
    );
  }

  /**
   * Path part for operation v1MatterContactAssociationsListGet
   */
  static readonly V1MatterContactAssociationsListGetPath = '/v1/Matter/contact/associations/list';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `v1MatterContactAssociationsListGet()` instead.
   *
   * This method doesn't expect any response body
   */
  v1MatterContactAssociationsListGet$Response(params?: {

  }): Observable<StrictHttpResponse<void>> {

    const rb = new RequestBuilder(this.rootUrl, MatterService.V1MatterContactAssociationsListGetPath, 'get');
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
   * To access the full response (for headers, for example), `v1MatterContactAssociationsListGet$Response()` instead.
   *
   * This method doesn't expect any response body
   */
  v1MatterContactAssociationsListGet(params?: {

  }): Observable<void> {

    return this.v1MatterContactAssociationsListGet$Response(params).pipe(
      map((r: StrictHttpResponse<void>) => r.body as void)
    );
  }

  /**
   * Path part for operation v1MatterContactSearchGet
   */
  static readonly V1MatterContactSearchGetPath = '/v1/Matter/contact/search';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `v1MatterContactSearchGet()` instead.
   *
   * This method doesn't expect any response body
   */
  v1MatterContactSearchGet$Response(params?: {
    search?: string;

  }): Observable<StrictHttpResponse<void>> {

    const rb = new RequestBuilder(this.rootUrl, MatterService.V1MatterContactSearchGetPath, 'get');
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
   * To access the full response (for headers, for example), `v1MatterContactSearchGet$Response()` instead.
   *
   * This method doesn't expect any response body
   */
  v1MatterContactSearchGet(params?: {
    search?: string;

  }): Observable<void> {

    return this.v1MatterContactSearchGet$Response(params).pipe(
      map((r: StrictHttpResponse<void>) => r.body as void)
    );
  }

  /**
   * Path part for operation v1MatterContactListMatterIdGet
   */
  static readonly V1MatterContactListMatterIdGetPath = '/v1/Matter/contact/list/{matterId}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `v1MatterContactListMatterIdGet()` instead.
   *
   * This method doesn't expect any response body
   */
  v1MatterContactListMatterIdGet$Response(params: {
    matterId: number;

  }): Observable<StrictHttpResponse<void>> {

    const rb = new RequestBuilder(this.rootUrl, MatterService.V1MatterContactListMatterIdGetPath, 'get');
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
   * To access the full response (for headers, for example), `v1MatterContactListMatterIdGet$Response()` instead.
   *
   * This method doesn't expect any response body
   */
  v1MatterContactListMatterIdGet(params: {
    matterId: number;

  }): Observable<void> {

    return this.v1MatterContactListMatterIdGet$Response(params).pipe(
      map((r: StrictHttpResponse<void>) => r.body as void)
    );
  }

  /**
   * Path part for operation v1MatterPracticesListMatterIdGet
   */
  static readonly V1MatterPracticesListMatterIdGetPath = '/v1/Matter/practices/list/{matterId}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `v1MatterPracticesListMatterIdGet()` instead.
   *
   * This method doesn't expect any response body
   */
  v1MatterPracticesListMatterIdGet$Response(params: {
    matterId: number;

  }): Observable<StrictHttpResponse<void>> {

    const rb = new RequestBuilder(this.rootUrl, MatterService.V1MatterPracticesListMatterIdGetPath, 'get');
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
   * To access the full response (for headers, for example), `v1MatterPracticesListMatterIdGet$Response()` instead.
   *
   * This method doesn't expect any response body
   */
  v1MatterPracticesListMatterIdGet(params: {
    matterId: number;

  }): Observable<void> {

    return this.v1MatterPracticesListMatterIdGet$Response(params).pipe(
      map((r: StrictHttpResponse<void>) => r.body as void)
    );
  }

  /**
   * Path part for operation v1MatterPracticesAssociateMatterIdPracticeIdPost
   */
  static readonly V1MatterPracticesAssociateMatterIdPracticeIdPostPath = '/v1/Matter/practices/associate/{matterId}/{practiceId}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `v1MatterPracticesAssociateMatterIdPracticeIdPost()` instead.
   *
   * This method doesn't expect any response body
   */
  v1MatterPracticesAssociateMatterIdPracticeIdPost$Response(params: {
    matterId: number;
    practiceId: number;

  }): Observable<StrictHttpResponse<void>> {

    const rb = new RequestBuilder(this.rootUrl, MatterService.V1MatterPracticesAssociateMatterIdPracticeIdPostPath, 'post');
    if (params) {

      rb.path('matterId', params.matterId);
      rb.path('practiceId', params.practiceId);

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
   * To access the full response (for headers, for example), `v1MatterPracticesAssociateMatterIdPracticeIdPost$Response()` instead.
   *
   * This method doesn't expect any response body
   */
  v1MatterPracticesAssociateMatterIdPracticeIdPost(params: {
    matterId: number;
    practiceId: number;

  }): Observable<void> {

    return this.v1MatterPracticesAssociateMatterIdPracticeIdPost$Response(params).pipe(
      map((r: StrictHttpResponse<void>) => r.body as void)
    );
  }

  /**
   * Path part for operation v1MatterPracticesDisassociateMatterIdPracticeIdDelete
   */
  static readonly V1MatterPracticesDisassociateMatterIdPracticeIdDeletePath = '/v1/Matter/practices/disassociate/{matterId}/{practiceId}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `v1MatterPracticesDisassociateMatterIdPracticeIdDelete()` instead.
   *
   * This method doesn't expect any response body
   */
  v1MatterPracticesDisassociateMatterIdPracticeIdDelete$Response(params: {
    matterId: number;
    practiceId: number;

  }): Observable<StrictHttpResponse<void>> {

    const rb = new RequestBuilder(this.rootUrl, MatterService.V1MatterPracticesDisassociateMatterIdPracticeIdDeletePath, 'delete');
    if (params) {

      rb.path('matterId', params.matterId);
      rb.path('practiceId', params.practiceId);

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
   * To access the full response (for headers, for example), `v1MatterPracticesDisassociateMatterIdPracticeIdDelete$Response()` instead.
   *
   * This method doesn't expect any response body
   */
  v1MatterPracticesDisassociateMatterIdPracticeIdDelete(params: {
    matterId: number;
    practiceId: number;

  }): Observable<void> {

    return this.v1MatterPracticesDisassociateMatterIdPracticeIdDelete$Response(params).pipe(
      map((r: StrictHttpResponse<void>) => r.body as void)
    );
  }

  /**
   * Path part for operation v1MatterOpposingcounselAssociationsListGet
   */
  static readonly V1MatterOpposingcounselAssociationsListGetPath = '/v1/Matter/opposingcounsel/associations/list';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `v1MatterOpposingcounselAssociationsListGet()` instead.
   *
   * This method doesn't expect any response body
   */
  v1MatterOpposingcounselAssociationsListGet$Response(params?: {

  }): Observable<StrictHttpResponse<void>> {

    const rb = new RequestBuilder(this.rootUrl, MatterService.V1MatterOpposingcounselAssociationsListGetPath, 'get');
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
   * To access the full response (for headers, for example), `v1MatterOpposingcounselAssociationsListGet$Response()` instead.
   *
   * This method doesn't expect any response body
   */
  v1MatterOpposingcounselAssociationsListGet(params?: {

  }): Observable<void> {

    return this.v1MatterOpposingcounselAssociationsListGet$Response(params).pipe(
      map((r: StrictHttpResponse<void>) => r.body as void)
    );
  }

  /**
   * Path part for operation v1MatterOpposingcounselSearchGet
   */
  static readonly V1MatterOpposingcounselSearchGetPath = '/v1/Matter/opposingcounsel/search';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `v1MatterOpposingcounselSearchGet()` instead.
   *
   * This method doesn't expect any response body
   */
  v1MatterOpposingcounselSearchGet$Response(params?: {
    search?: string;

  }): Observable<StrictHttpResponse<void>> {

    const rb = new RequestBuilder(this.rootUrl, MatterService.V1MatterOpposingcounselSearchGetPath, 'get');
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
   * To access the full response (for headers, for example), `v1MatterOpposingcounselSearchGet$Response()` instead.
   *
   * This method doesn't expect any response body
   */
  v1MatterOpposingcounselSearchGet(params?: {
    search?: string;

  }): Observable<void> {

    return this.v1MatterOpposingcounselSearchGet$Response(params).pipe(
      map((r: StrictHttpResponse<void>) => r.body as void)
    );
  }

  /**
   * Path part for operation v1MatterOpposingcounselListMatterIdGet
   */
  static readonly V1MatterOpposingcounselListMatterIdGetPath = '/v1/Matter/opposingcounsel/list/{matterId}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `v1MatterOpposingcounselListMatterIdGet()` instead.
   *
   * This method doesn't expect any response body
   */
  v1MatterOpposingcounselListMatterIdGet$Response(params: {
    matterId: number;

  }): Observable<StrictHttpResponse<void>> {

    const rb = new RequestBuilder(this.rootUrl, MatterService.V1MatterOpposingcounselListMatterIdGetPath, 'get');
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
   * To access the full response (for headers, for example), `v1MatterOpposingcounselListMatterIdGet$Response()` instead.
   *
   * This method doesn't expect any response body
   */
  v1MatterOpposingcounselListMatterIdGet(params: {
    matterId: number;

  }): Observable<void> {

    return this.v1MatterOpposingcounselListMatterIdGet$Response(params).pipe(
      map((r: StrictHttpResponse<void>) => r.body as void)
    );
  }

  /**
   * Path part for operation v1MatterLienholderAssociationsListGet
   */
  static readonly V1MatterLienholderAssociationsListGetPath = '/v1/Matter/lienholder/associations/list';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `v1MatterLienholderAssociationsListGet()` instead.
   *
   * This method doesn't expect any response body
   */
  v1MatterLienholderAssociationsListGet$Response(params?: {

  }): Observable<StrictHttpResponse<void>> {

    const rb = new RequestBuilder(this.rootUrl, MatterService.V1MatterLienholderAssociationsListGetPath, 'get');
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
   * To access the full response (for headers, for example), `v1MatterLienholderAssociationsListGet$Response()` instead.
   *
   * This method doesn't expect any response body
   */
  v1MatterLienholderAssociationsListGet(params?: {

  }): Observable<void> {

    return this.v1MatterLienholderAssociationsListGet$Response(params).pipe(
      map((r: StrictHttpResponse<void>) => r.body as void)
    );
  }

  /**
   * Path part for operation v1MatterLienholderListMatterIdGet
   */
  static readonly V1MatterLienholderListMatterIdGetPath = '/v1/Matter/lienholder/list/{matterId}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `v1MatterLienholderListMatterIdGet()` instead.
   *
   * This method doesn't expect any response body
   */
  v1MatterLienholderListMatterIdGet$Response(params: {
    matterId: number;

  }): Observable<StrictHttpResponse<void>> {

    const rb = new RequestBuilder(this.rootUrl, MatterService.V1MatterLienholderListMatterIdGetPath, 'get');
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
   * To access the full response (for headers, for example), `v1MatterLienholderListMatterIdGet$Response()` instead.
   *
   * This method doesn't expect any response body
   */
  v1MatterLienholderListMatterIdGet(params: {
    matterId: number;

  }): Observable<void> {

    return this.v1MatterLienholderListMatterIdGet$Response(params).pipe(
      map((r: StrictHttpResponse<void>) => r.body as void)
    );
  }

  /**
   * Path part for operation v1MatterResponsibleattorneyAssociationsListGet
   */
  static readonly V1MatterResponsibleattorneyAssociationsListGetPath = '/v1/Matter/responsibleattorney/associations/list';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `v1MatterResponsibleattorneyAssociationsListGet()` instead.
   *
   * This method doesn't expect any response body
   */
  v1MatterResponsibleattorneyAssociationsListGet$Response(params?: {

  }): Observable<StrictHttpResponse<void>> {

    const rb = new RequestBuilder(this.rootUrl, MatterService.V1MatterResponsibleattorneyAssociationsListGetPath, 'get');
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
   * To access the full response (for headers, for example), `v1MatterResponsibleattorneyAssociationsListGet$Response()` instead.
   *
   * This method doesn't expect any response body
   */
  v1MatterResponsibleattorneyAssociationsListGet(params?: {

  }): Observable<void> {

    return this.v1MatterResponsibleattorneyAssociationsListGet$Response(params).pipe(
      map((r: StrictHttpResponse<void>) => r.body as void)
    );
  }

}
