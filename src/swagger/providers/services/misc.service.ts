/* tslint:disable */
import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { BaseService } from '../base-service';
import { ApiConfiguration } from '../api-configuration';
import { StrictHttpResponse } from '../strict-http-response';
import { RequestBuilder } from '../request-builder';
import { Observable } from 'rxjs';
import { map, filter } from 'rxjs/operators';

import { EmailCheckType } from '../models/email-check-type';
import { vwAddressDetails } from '../models/vw-address-details';
import { vwIdCodeName } from '../models/vw-id-code-name';
import { vwTimezoneName } from '../models/vw-timezone-name';

@Injectable({
  providedIn: 'root',
})
export class MiscService extends BaseService {
  constructor(
    config: ApiConfiguration,
    http: HttpClient
  ) {
    super(config, http);
  }

  /**
   * Path part for operation v1MiscStatesGet
   */
  static readonly V1MiscStatesGetPath = '/v1/Misc/states';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `v1MiscStatesGet()` instead.
   *
   * This method doesn't expect any response body
   */
  v1MiscStatesGet$Response(params?: {

  }): Observable<StrictHttpResponse<void>> {

    const rb = new RequestBuilder(this.rootUrl, MiscService.V1MiscStatesGetPath, 'get');
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
   * To access the full response (for headers, for example), `v1MiscStatesGet$Response()` instead.
   *
   * This method doesn't expect any response body
   */
  v1MiscStatesGet(params?: {

  }): Observable<void> {

    return this.v1MiscStatesGet$Response(params).pipe(
      map((r: StrictHttpResponse<void>) => r.body as void)
    );
  }

  /**
   * Path part for operation v1MiscEmailCheckGet
   */
  static readonly V1MiscEmailCheckGetPath = '/v1/Misc/email/check';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `v1MiscEmailCheckGet()` instead.
   *
   * This method doesn't expect any response body
   */
  v1MiscEmailCheckGet$Response(params?: {
    email?: string;
    id?: number;
    checkType?: EmailCheckType;

  }): Observable<StrictHttpResponse<void>> {

    const rb = new RequestBuilder(this.rootUrl, MiscService.V1MiscEmailCheckGetPath, 'get');
    if (params) {

      rb.query('email', params.email);
      rb.query('id', params.id);
      rb.query('checkType', params.checkType);

    }
    return this.http.request(rb.build({
      responseType: 'text',
      accept: '*/*'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return (r as HttpResponse<any>).clone({ body: undefined }) as StrictHttpResponse<void>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `v1MiscEmailCheckGet$Response()` instead.
   *
   * This method doesn't expect any response body
   */
  v1MiscEmailCheckGet(params?: {
    email?: string;
    id?: number;
    checkType?: EmailCheckType;

  }): Observable<void> {

    return this.v1MiscEmailCheckGet$Response(params).pipe(
      map((r: StrictHttpResponse<void>) => r.body as void)
    );
  }

  /**
   * Path part for operation v1MiscCountryGet
   */
  static readonly V1MiscCountryGetPath = '/v1/Misc/country';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `v1MiscCountryGet()` instead.
   *
   * This method doesn't expect any response body
   */
  v1MiscCountryGet$Response(params?: {

  }): Observable<StrictHttpResponse<void>> {

    const rb = new RequestBuilder(this.rootUrl, MiscService.V1MiscCountryGetPath, 'get');
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
   * To access the full response (for headers, for example), `v1MiscCountryGet$Response()` instead.
   *
   * This method doesn't expect any response body
   */
  v1MiscCountryGet(params?: {

  }): Observable<void> {

    return this.v1MiscCountryGet$Response(params).pipe(
      map((r: StrictHttpResponse<void>) => r.body as void)
    );
  }

  /**
   * Path part for operation v1MiscOfficesGet
   */
  static readonly V1MiscOfficesGetPath = '/v1/Misc/offices';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `v1MiscOfficesGet()` instead.
   *
   * This method doesn't expect any response body
   */
  v1MiscOfficesGet$Response(params?: {
    isAccountStatusNeeded?: boolean;

  }): Observable<StrictHttpResponse<void>> {

    const rb = new RequestBuilder(this.rootUrl, MiscService.V1MiscOfficesGetPath, 'get');
    if (params) {

      rb.query('isAccountStatusNeeded', params.isAccountStatusNeeded);

    }
    return this.http.request(rb.build({
      responseType: 'text',
      accept: '*/*'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return (r as HttpResponse<any>).clone({ body: undefined }) as StrictHttpResponse<void>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `v1MiscOfficesGet$Response()` instead.
   *
   * This method doesn't expect any response body
   */
  v1MiscOfficesGet(params?: {
    isAccountStatusNeeded?: boolean;

  }): Observable<void> {

    return this.v1MiscOfficesGet$Response(params).pipe(
      map((r: StrictHttpResponse<void>) => r.body as void)
    );
  }

  /**
   * Path part for operation v1MiscJurisdictionOfficesPracticeIdGet
   */
  static readonly V1MiscJurisdictionOfficesPracticeIdGetPath = '/v1/Misc/jurisdiction/offices/{practiceId}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `v1MiscJurisdictionOfficesPracticeIdGet()` instead.
   *
   * This method doesn't expect any response body
   */
  v1MiscJurisdictionOfficesPracticeIdGet$Response(params: {
    practiceId: number;
    stateId?: number;
    checkInitialConsultation?: boolean;
    isAccountStatusNeeded?: boolean;

  }): Observable<StrictHttpResponse<void>> {

    const rb = new RequestBuilder(this.rootUrl, MiscService.V1MiscJurisdictionOfficesPracticeIdGetPath, 'get');
    if (params) {

      rb.path('practiceId', params.practiceId);
      rb.query('stateId', params.stateId);
      rb.query('CheckInitialConsultation', params.checkInitialConsultation);
      rb.query('IsAccountStatusNeeded', params.isAccountStatusNeeded);

    }
    return this.http.request(rb.build({
      responseType: 'text',
      accept: '*/*'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return (r as HttpResponse<any>).clone({ body: undefined }) as StrictHttpResponse<void>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `v1MiscJurisdictionOfficesPracticeIdGet$Response()` instead.
   *
   * This method doesn't expect any response body
   */
  v1MiscJurisdictionOfficesPracticeIdGet(params: {
    practiceId: number;
    stateId?: number;
    checkInitialConsultation?: boolean;
    isAccountStatusNeeded?: boolean;

  }): Observable<void> {

    return this.v1MiscJurisdictionOfficesPracticeIdGet$Response(params).pipe(
      map((r: StrictHttpResponse<void>) => r.body as void)
    );
  }

  /**
   * Path part for operation v1MiscPracticesGet
   */
  static readonly V1MiscPracticesGetPath = '/v1/Misc/practices';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `v1MiscPracticesGet()` instead.
   *
   * This method doesn't expect any response body
   */
  v1MiscPracticesGet$Response(params?: {

  }): Observable<StrictHttpResponse<void>> {

    const rb = new RequestBuilder(this.rootUrl, MiscService.V1MiscPracticesGetPath, 'get');
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
   * To access the full response (for headers, for example), `v1MiscPracticesGet$Response()` instead.
   *
   * This method doesn't expect any response body
   */
  v1MiscPracticesGet(params?: {

  }): Observable<void> {

    return this.v1MiscPracticesGet$Response(params).pipe(
      map((r: StrictHttpResponse<void>) => r.body as void)
    );
  }

  /**
   * Path part for operation v1MiscGroupsGet
   */
  static readonly V1MiscGroupsGetPath = '/v1/Misc/groups';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `v1MiscGroupsGet()` instead.
   *
   * This method doesn't expect any response body
   */
  v1MiscGroupsGet$Response(params?: {

  }): Observable<StrictHttpResponse<void>> {

    const rb = new RequestBuilder(this.rootUrl, MiscService.V1MiscGroupsGetPath, 'get');
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
   * To access the full response (for headers, for example), `v1MiscGroupsGet$Response()` instead.
   *
   * This method doesn't expect any response body
   */
  v1MiscGroupsGet(params?: {

  }): Observable<void> {

    return this.v1MiscGroupsGet$Response(params).pipe(
      map((r: StrictHttpResponse<void>) => r.body as void)
    );
  }

  /**
   * Path part for operation v1MiscEmployeesGet
   */
  static readonly V1MiscEmployeesGetPath = '/v1/Misc/employees';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `v1MiscEmployeesGet()` instead.
   *
   * This method doesn't expect any response body
   */
  v1MiscEmployeesGet$Response(params?: {

  }): Observable<StrictHttpResponse<void>> {

    const rb = new RequestBuilder(this.rootUrl, MiscService.V1MiscEmployeesGetPath, 'get');
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
   * To access the full response (for headers, for example), `v1MiscEmployeesGet$Response()` instead.
   *
   * This method doesn't expect any response body
   */
  v1MiscEmployeesGet(params?: {

  }): Observable<void> {

    return this.v1MiscEmployeesGet$Response(params).pipe(
      map((r: StrictHttpResponse<void>) => r.body as void)
    );
  }

  /**
   * Path part for operation v1MiscEmployeesActiveGet
   */
  static readonly V1MiscEmployeesActiveGetPath = '/v1/Misc/employees/active';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `v1MiscEmployeesActiveGet()` instead.
   *
   * This method doesn't expect any response body
   */
  v1MiscEmployeesActiveGet$Response(params?: {

  }): Observable<StrictHttpResponse<void>> {

    const rb = new RequestBuilder(this.rootUrl, MiscService.V1MiscEmployeesActiveGetPath, 'get');
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
   * To access the full response (for headers, for example), `v1MiscEmployeesActiveGet$Response()` instead.
   *
   * This method doesn't expect any response body
   */
  v1MiscEmployeesActiveGet(params?: {

  }): Observable<void> {

    return this.v1MiscEmployeesActiveGet$Response(params).pipe(
      map((r: StrictHttpResponse<void>) => r.body as void)
    );
  }

  /**
   * Path part for operation v1MiscAttornysGet
   */
  static readonly V1MiscAttornysGetPath = '/v1/Misc/attornys';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `v1MiscAttornysGet()` instead.
   *
   * This method doesn't expect any response body
   */
  v1MiscAttornysGet$Response(params?: {

  }): Observable<StrictHttpResponse<void>> {

    const rb = new RequestBuilder(this.rootUrl, MiscService.V1MiscAttornysGetPath, 'get');
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
   * To access the full response (for headers, for example), `v1MiscAttornysGet$Response()` instead.
   *
   * This method doesn't expect any response body
   */
  v1MiscAttornysGet(params?: {

  }): Observable<void> {

    return this.v1MiscAttornysGet$Response(params).pipe(
      map((r: StrictHttpResponse<void>) => r.body as void)
    );
  }

  /**
   * Path part for operation v1MiscClientassociationtypeGet
   */
  static readonly V1MiscClientassociationtypeGetPath = '/v1/Misc/clientassociationtype';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `v1MiscClientassociationtypeGet()` instead.
   *
   * This method doesn't expect any response body
   */
  v1MiscClientassociationtypeGet$Response(params?: {

  }): Observable<StrictHttpResponse<void>> {

    const rb = new RequestBuilder(this.rootUrl, MiscService.V1MiscClientassociationtypeGetPath, 'get');
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
   * To access the full response (for headers, for example), `v1MiscClientassociationtypeGet$Response()` instead.
   *
   * This method doesn't expect any response body
   */
  v1MiscClientassociationtypeGet(params?: {

  }): Observable<void> {

    return this.v1MiscClientassociationtypeGet$Response(params).pipe(
      map((r: StrictHttpResponse<void>) => r.body as void)
    );
  }

  /**
   * Path part for operation v1MiscCorporatecontactassociationsGet
   */
  static readonly V1MiscCorporatecontactassociationsGetPath = '/v1/Misc/corporatecontactassociations';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `v1MiscCorporatecontactassociationsGet()` instead.
   *
   * This method doesn't expect any response body
   */
  v1MiscCorporatecontactassociationsGet$Response(params?: {

  }): Observable<StrictHttpResponse<void>> {

    const rb = new RequestBuilder(this.rootUrl, MiscService.V1MiscCorporatecontactassociationsGetPath, 'get');
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
   * To access the full response (for headers, for example), `v1MiscCorporatecontactassociationsGet$Response()` instead.
   *
   * This method doesn't expect any response body
   */
  v1MiscCorporatecontactassociationsGet(params?: {

  }): Observable<void> {

    return this.v1MiscCorporatecontactassociationsGet$Response(params).pipe(
      map((r: StrictHttpResponse<void>) => r.body as void)
    );
  }

  /**
   * Path part for operation v1MiscClientsGet
   */
  static readonly V1MiscClientsGetPath = '/v1/Misc/clients';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `v1MiscClientsGet()` instead.
   *
   * This method doesn't expect any response body
   */
  v1MiscClientsGet$Response(params?: {

  }): Observable<StrictHttpResponse<void>> {

    const rb = new RequestBuilder(this.rootUrl, MiscService.V1MiscClientsGetPath, 'get');
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
   * To access the full response (for headers, for example), `v1MiscClientsGet$Response()` instead.
   *
   * This method doesn't expect any response body
   */
  v1MiscClientsGet(params?: {

  }): Observable<void> {

    return this.v1MiscClientsGet$Response(params).pipe(
      map((r: StrictHttpResponse<void>) => r.body as void)
    );
  }

  /**
   * Path part for operation v1MiscFileextensionsGet
   */
  static readonly V1MiscFileextensionsGetPath = '/v1/Misc/fileextensions';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `v1MiscFileextensionsGet()` instead.
   *
   * This method doesn't expect any response body
   */
  v1MiscFileextensionsGet$Response(params?: {

  }): Observable<StrictHttpResponse<void>> {

    const rb = new RequestBuilder(this.rootUrl, MiscService.V1MiscFileextensionsGetPath, 'get');
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
   * To access the full response (for headers, for example), `v1MiscFileextensionsGet$Response()` instead.
   *
   * This method doesn't expect any response body
   */
  v1MiscFileextensionsGet(params?: {

  }): Observable<void> {

    return this.v1MiscFileextensionsGet$Response(params).pipe(
      map((r: StrictHttpResponse<void>) => r.body as void)
    );
  }

  /**
   * Path part for operation v1MiscTimezonesGet
   */
  static readonly V1MiscTimezonesGetPath = '/v1/Misc/timezones';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `v1MiscTimezonesGet()` instead.
   *
   * This method doesn't expect any response body
   */
  v1MiscTimezonesGet$Response(params?: {

  }): Observable<StrictHttpResponse<void>> {

    const rb = new RequestBuilder(this.rootUrl, MiscService.V1MiscTimezonesGetPath, 'get');
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
   * To access the full response (for headers, for example), `v1MiscTimezonesGet$Response()` instead.
   *
   * This method doesn't expect any response body
   */
  v1MiscTimezonesGet(params?: {

  }): Observable<void> {

    return this.v1MiscTimezonesGet$Response(params).pipe(
      map((r: StrictHttpResponse<void>) => r.body as void)
    );
  }

  /**
   * Path part for operation v1MiscClientsSearchGet
   */
  static readonly V1MiscClientsSearchGetPath = '/v1/Misc/clients/search';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `v1MiscClientsSearchGet()` instead.
   *
   * This method doesn't expect any response body
   */
  v1MiscClientsSearchGet$Response(params?: {
    search?: string;
    searchType?: number;

  }): Observable<StrictHttpResponse<void>> {

    const rb = new RequestBuilder(this.rootUrl, MiscService.V1MiscClientsSearchGetPath, 'get');
    if (params) {

      rb.query('search', params.search);
      rb.query('searchType', params.searchType);

    }
    return this.http.request(rb.build({
      responseType: 'text',
      accept: '*/*'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return (r as HttpResponse<any>).clone({ body: undefined }) as StrictHttpResponse<void>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `v1MiscClientsSearchGet$Response()` instead.
   *
   * This method doesn't expect any response body
   */
  v1MiscClientsSearchGet(params?: {
    search?: string;
    searchType?: number;

  }): Observable<void> {

    return this.v1MiscClientsSearchGet$Response(params).pipe(
      map((r: StrictHttpResponse<void>) => r.body as void)
    );
  }

  /**
   * Path part for operation v1MiscInviteesSearchGet
   */
  static readonly V1MiscInviteesSearchGetPath = '/v1/Misc/invitees/search';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `v1MiscInviteesSearchGet()` instead.
   *
   * This method doesn't expect any response body
   */
  v1MiscInviteesSearchGet$Response(params?: {
    calendarClientId?: number;
    search?: string;
    isAll?: boolean;
    isEmployee?: boolean;
    isClient?: boolean;
    isPotentialClient?: boolean;
    isAssociations?: boolean;

  }): Observable<StrictHttpResponse<void>> {

    const rb = new RequestBuilder(this.rootUrl, MiscService.V1MiscInviteesSearchGetPath, 'get');
    if (params) {

      rb.query('calendarClientId', params.calendarClientId);
      rb.query('search', params.search);
      rb.query('isAll', params.isAll);
      rb.query('isEmployee', params.isEmployee);
      rb.query('isClient', params.isClient);
      rb.query('isPotentialClient', params.isPotentialClient);
      rb.query('isAssociations', params.isAssociations);

    }
    return this.http.request(rb.build({
      responseType: 'text',
      accept: '*/*'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return (r as HttpResponse<any>).clone({ body: undefined }) as StrictHttpResponse<void>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `v1MiscInviteesSearchGet$Response()` instead.
   *
   * This method doesn't expect any response body
   */
  v1MiscInviteesSearchGet(params?: {
    calendarClientId?: number;
    search?: string;
    isAll?: boolean;
    isEmployee?: boolean;
    isClient?: boolean;
    isPotentialClient?: boolean;
    isAssociations?: boolean;

  }): Observable<void> {

    return this.v1MiscInviteesSearchGet$Response(params).pipe(
      map((r: StrictHttpResponse<void>) => r.body as void)
    );
  }

  /**
   * Path part for operation v1MiscInviteesMatterSearchGet
   */
  static readonly V1MiscInviteesMatterSearchGetPath = '/v1/Misc/invitees/matter/search';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `v1MiscInviteesMatterSearchGet()` instead.
   *
   * This method doesn't expect any response body
   */
  v1MiscInviteesMatterSearchGet$Response(params?: {
    calendarClientId?: number;
    search?: string;
    isAll?: boolean;
    isEmployee?: boolean;
    isClient?: boolean;
    isPotentialClient?: boolean;
    isAssociations?: boolean;
    isMatter?: boolean;
    pageNumber?: number;

  }): Observable<StrictHttpResponse<void>> {

    const rb = new RequestBuilder(this.rootUrl, MiscService.V1MiscInviteesMatterSearchGetPath, 'get');
    if (params) {

      rb.query('calendarClientId', params.calendarClientId);
      rb.query('search', params.search);
      rb.query('isAll', params.isAll);
      rb.query('isEmployee', params.isEmployee);
      rb.query('isClient', params.isClient);
      rb.query('isPotentialClient', params.isPotentialClient);
      rb.query('isAssociations', params.isAssociations);
      rb.query('isMatter', params.isMatter);
      rb.query('pageNumber', params.pageNumber);

    }
    return this.http.request(rb.build({
      responseType: 'text',
      accept: '*/*'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return (r as HttpResponse<any>).clone({ body: undefined }) as StrictHttpResponse<void>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `v1MiscInviteesMatterSearchGet$Response()` instead.
   *
   * This method doesn't expect any response body
   */
  v1MiscInviteesMatterSearchGet(params?: {
    calendarClientId?: number;
    search?: string;
    isAll?: boolean;
    isEmployee?: boolean;
    isClient?: boolean;
    isPotentialClient?: boolean;
    isAssociations?: boolean;
    isMatter?: boolean;
    pageNumber?: number;

  }): Observable<void> {

    return this.v1MiscInviteesMatterSearchGet$Response(params).pipe(
      map((r: StrictHttpResponse<void>) => r.body as void)
    );
  }

  /**
   * Path part for operation v1MiscInviteesSearchallGet
   */
  static readonly V1MiscInviteesSearchallGetPath = '/v1/Misc/invitees/searchall';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `v1MiscInviteesSearchallGet()` instead.
   *
   * This method doesn't expect any response body
   */
  v1MiscInviteesSearchallGet$Response(params?: {
    calendarClientId?: number;
    search?: string;

  }): Observable<StrictHttpResponse<void>> {

    const rb = new RequestBuilder(this.rootUrl, MiscService.V1MiscInviteesSearchallGetPath, 'get');
    if (params) {

      rb.query('calendarClientId', params.calendarClientId);
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
   * To access the full response (for headers, for example), `v1MiscInviteesSearchallGet$Response()` instead.
   *
   * This method doesn't expect any response body
   */
  v1MiscInviteesSearchallGet(params?: {
    calendarClientId?: number;
    search?: string;

  }): Observable<void> {

    return this.v1MiscInviteesSearchallGet$Response(params).pipe(
      map((r: StrictHttpResponse<void>) => r.body as void)
    );
  }

  /**
   * Path part for operation v1MiscLookUpGet
   */
  static readonly V1MiscLookUpGetPath = '/v1/Misc/lookUp';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `v1MiscLookUpGet()` instead.
   *
   * This method doesn't expect any response body
   */
  v1MiscLookUpGet$Response(params?: {
    categoryCode?: string;

  }): Observable<StrictHttpResponse<void>> {

    const rb = new RequestBuilder(this.rootUrl, MiscService.V1MiscLookUpGetPath, 'get');
    if (params) {

      rb.query('categoryCode', params.categoryCode);

    }
    return this.http.request(rb.build({
      responseType: 'text',
      accept: '*/*'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return (r as HttpResponse<any>).clone({ body: undefined }) as StrictHttpResponse<void>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `v1MiscLookUpGet$Response()` instead.
   *
   * This method doesn't expect any response body
   */
  v1MiscLookUpGet(params?: {
    categoryCode?: string;

  }): Observable<void> {

    return this.v1MiscLookUpGet$Response(params).pipe(
      map((r: StrictHttpResponse<void>) => r.body as void)
    );
  }

  /**
   * Path part for operation v1MiscSearchGlobalGet
   */
  static readonly V1MiscSearchGlobalGetPath = '/v1/Misc/search/global';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `v1MiscSearchGlobalGet()` instead.
   *
   * This method doesn't expect any response body
   */
  v1MiscSearchGlobalGet$Response(params?: {
    searchString?: string;
    isAll?: boolean;
    isMatter?: boolean;
    isClient?: boolean;
    isEmployee?: boolean;
    isContact?: boolean;
    isOffice?: boolean;
    isDocument?: boolean;
    pageIndex?: number;
    pageSize?: number;
    searchFilterStr?: string;
    isClientContext?: boolean;
    isMatterContext?: boolean;
    clientId?: number;
    matterId?: number;

  }): Observable<StrictHttpResponse<void>> {

    const rb = new RequestBuilder(this.rootUrl, MiscService.V1MiscSearchGlobalGetPath, 'get');
    if (params) {

      rb.query('searchString', params.searchString);
      rb.query('isAll', params.isAll);
      rb.query('isMatter', params.isMatter);
      rb.query('isClient', params.isClient);
      rb.query('isEmployee', params.isEmployee);
      rb.query('isContact', params.isContact);
      rb.query('isOffice', params.isOffice);
      rb.query('isDocument', params.isDocument);
      rb.query('pageIndex', params.pageIndex);
      rb.query('pageSize', params.pageSize);
      rb.query('searchFilterStr', params.searchFilterStr);
      rb.query('isClientContext', params.isClientContext);
      rb.query('isMatterContext', params.isMatterContext);
      rb.query('clientId', params.clientId);
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
   * To access the full response (for headers, for example), `v1MiscSearchGlobalGet$Response()` instead.
   *
   * This method doesn't expect any response body
   */
  v1MiscSearchGlobalGet(params?: {
    searchString?: string;
    isAll?: boolean;
    isMatter?: boolean;
    isClient?: boolean;
    isEmployee?: boolean;
    isContact?: boolean;
    isOffice?: boolean;
    isDocument?: boolean;
    pageIndex?: number;
    pageSize?: number;
    searchFilterStr?: string;
    isClientContext?: boolean;
    isMatterContext?: boolean;
    clientId?: number;
    matterId?: number;

  }): Observable<void> {

    return this.v1MiscSearchGlobalGet$Response(params).pipe(
      map((r: StrictHttpResponse<void>) => r.body as void)
    );
  }

  /**
   * Path part for operation v1MiscRoutingInfoGet
   */
  static readonly V1MiscRoutingInfoGetPath = '/v1/Misc/routingInfo';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `v1MiscRoutingInfoGet()` instead.
   *
   * This method doesn't expect any response body
   */
  v1MiscRoutingInfoGet$Response(params?: {
    routingNumber?: string;

  }): Observable<StrictHttpResponse<void>> {

    const rb = new RequestBuilder(this.rootUrl, MiscService.V1MiscRoutingInfoGetPath, 'get');
    if (params) {

      rb.query('routingNumber', params.routingNumber);

    }
    return this.http.request(rb.build({
      responseType: 'text',
      accept: '*/*'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return (r as HttpResponse<any>).clone({ body: undefined }) as StrictHttpResponse<void>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `v1MiscRoutingInfoGet$Response()` instead.
   *
   * This method doesn't expect any response body
   */
  v1MiscRoutingInfoGet(params?: {
    routingNumber?: string;

  }): Observable<void> {

    return this.v1MiscRoutingInfoGet$Response(params).pipe(
      map((r: StrictHttpResponse<void>) => r.body as void)
    );
  }

  /**
   * Path part for operation v1MiscAddresssTimezonePost
   */
  static readonly V1MiscAddresssTimezonePostPath = '/v1/Misc/addresss/timezone';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `v1MiscAddresssTimezonePost$Json()` instead.
   *
   * This method sends `application/json` and handles response body of type `application/json`
   */
  v1MiscAddresssTimezonePost$Json$Response(params?: {

    body?: vwAddressDetails
  }): Observable<StrictHttpResponse<void>> {

    const rb = new RequestBuilder(this.rootUrl, MiscService.V1MiscAddresssTimezonePostPath, 'post');
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
   * To access the full response (for headers, for example), `v1MiscAddresssTimezonePost$Json$Response()` instead.
   *
   * This method sends `application/json` and handles response body of type `application/json`
   */
  v1MiscAddresssTimezonePost$Json(params?: {

    body?: vwAddressDetails
  }): Observable<void> {

    return this.v1MiscAddresssTimezonePost$Json$Response(params).pipe(
      map((r: StrictHttpResponse<void>) => r.body as void)
    );
  }

  /**
   * Path part for operation v1MiscDoNotContactReasonCodesGet
   */
  static readonly V1MiscDoNotContactReasonCodesGetPath = '/v1/Misc/doNotContact/ReasonCodes';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `v1MiscDoNotContactReasonCodesGet()` instead.
   *
   * This method doesn't expect any response body
   */
  v1MiscDoNotContactReasonCodesGet$Response(params?: {

  }): Observable<StrictHttpResponse<void>> {

    const rb = new RequestBuilder(this.rootUrl, MiscService.V1MiscDoNotContactReasonCodesGetPath, 'get');
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
   * To access the full response (for headers, for example), `v1MiscDoNotContactReasonCodesGet$Response()` instead.
   *
   * This method doesn't expect any response body
   */
  v1MiscDoNotContactReasonCodesGet(params?: {

  }): Observable<void> {

    return this.v1MiscDoNotContactReasonCodesGet$Response(params).pipe(
      map((r: StrictHttpResponse<void>) => r.body as void)
    );
  }

  /**
   * Path part for operation v1MiscDoNotContactReasonCodesPut
   */
  static readonly V1MiscDoNotContactReasonCodesPutPath = '/v1/Misc/doNotContact/ReasonCodes';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `v1MiscDoNotContactReasonCodesPut$Json()` instead.
   *
   * This method sends `application/json` and handles response body of type `application/json`
   */
  v1MiscDoNotContactReasonCodesPut$Json$Response(params?: {

    body?: vwIdCodeName
  }): Observable<StrictHttpResponse<void>> {

    const rb = new RequestBuilder(this.rootUrl, MiscService.V1MiscDoNotContactReasonCodesPutPath, 'put');
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
   * To access the full response (for headers, for example), `v1MiscDoNotContactReasonCodesPut$Json$Response()` instead.
   *
   * This method sends `application/json` and handles response body of type `application/json`
   */
  v1MiscDoNotContactReasonCodesPut$Json(params?: {

    body?: vwIdCodeName
  }): Observable<void> {

    return this.v1MiscDoNotContactReasonCodesPut$Json$Response(params).pipe(
      map((r: StrictHttpResponse<void>) => r.body as void)
    );
  }

  /**
   * Path part for operation v1MiscDoNotContactReasonCodesPost
   */
  static readonly V1MiscDoNotContactReasonCodesPostPath = '/v1/Misc/doNotContact/ReasonCodes';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `v1MiscDoNotContactReasonCodesPost$Json()` instead.
   *
   * This method sends `application/json` and handles response body of type `application/json`
   */
  v1MiscDoNotContactReasonCodesPost$Json$Response(params?: {

    body?: vwIdCodeName
  }): Observable<StrictHttpResponse<void>> {

    const rb = new RequestBuilder(this.rootUrl, MiscService.V1MiscDoNotContactReasonCodesPostPath, 'post');
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
   * To access the full response (for headers, for example), `v1MiscDoNotContactReasonCodesPost$Json$Response()` instead.
   *
   * This method sends `application/json` and handles response body of type `application/json`
   */
  v1MiscDoNotContactReasonCodesPost$Json(params?: {

    body?: vwIdCodeName
  }): Observable<void> {

    return this.v1MiscDoNotContactReasonCodesPost$Json$Response(params).pipe(
      map((r: StrictHttpResponse<void>) => r.body as void)
    );
  }

  /**
   * Path part for operation v1MiscDoNotContactReasonCodesIdDelete
   */
  static readonly V1MiscDoNotContactReasonCodesIdDeletePath = '/v1/Misc/doNotContact/ReasonCodes/{id}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `v1MiscDoNotContactReasonCodesIdDelete()` instead.
   *
   * This method doesn't expect any response body
   */
  v1MiscDoNotContactReasonCodesIdDelete$Response(params: {
    id: number;

  }): Observable<StrictHttpResponse<void>> {

    const rb = new RequestBuilder(this.rootUrl, MiscService.V1MiscDoNotContactReasonCodesIdDeletePath, 'delete');
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
   * To access the full response (for headers, for example), `v1MiscDoNotContactReasonCodesIdDelete$Response()` instead.
   *
   * This method doesn't expect any response body
   */
  v1MiscDoNotContactReasonCodesIdDelete(params: {
    id: number;

  }): Observable<void> {

    return this.v1MiscDoNotContactReasonCodesIdDelete$Response(params).pipe(
      map((r: StrictHttpResponse<void>) => r.body as void)
    );
  }

  /**
   * Path part for operation v1MiscTierIdGet
   */
  static readonly V1MiscTierIdGetPath = '/v1/Misc/tier/{id}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `v1MiscTierIdGet()` instead.
   *
   * This method doesn't expect any response body
   */
  v1MiscTierIdGet$Response(params: {
    id: number;

  }): Observable<StrictHttpResponse<void>> {

    const rb = new RequestBuilder(this.rootUrl, MiscService.V1MiscTierIdGetPath, 'get');
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
   * To access the full response (for headers, for example), `v1MiscTierIdGet$Response()` instead.
   *
   * This method doesn't expect any response body
   */
  v1MiscTierIdGet(params: {
    id: number;

  }): Observable<void> {

    return this.v1MiscTierIdGet$Response(params).pipe(
      map((r: StrictHttpResponse<void>) => r.body as void)
    );
  }

  /**
   * Path part for operation v1MiscSystemtimezonesGet
   */
  static readonly V1MiscSystemtimezonesGetPath = '/v1/Misc/systemtimezones';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `v1MiscSystemtimezonesGet()` instead.
   *
   * This method doesn't expect any response body
   */
  v1MiscSystemtimezonesGet$Response(params?: {

  }): Observable<StrictHttpResponse<void>> {

    const rb = new RequestBuilder(this.rootUrl, MiscService.V1MiscSystemtimezonesGetPath, 'get');
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
   * To access the full response (for headers, for example), `v1MiscSystemtimezonesGet$Response()` instead.
   *
   * This method doesn't expect any response body
   */
  v1MiscSystemtimezonesGet(params?: {

  }): Observable<void> {

    return this.v1MiscSystemtimezonesGet$Response(params).pipe(
      map((r: StrictHttpResponse<void>) => r.body as void)
    );
  }

  /**
   * Path part for operation v1MiscGetTimezoneNamePost
   */
  static readonly V1MiscGetTimezoneNamePostPath = '/v1/Misc/GetTimezoneName';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `v1MiscGetTimezoneNamePost$Json()` instead.
   *
   * This method sends `application/json` and handles response body of type `application/json`
   */
  v1MiscGetTimezoneNamePost$Json$Response(params?: {

    body?: vwTimezoneName
  }): Observable<StrictHttpResponse<void>> {

    const rb = new RequestBuilder(this.rootUrl, MiscService.V1MiscGetTimezoneNamePostPath, 'post');
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
   * To access the full response (for headers, for example), `v1MiscGetTimezoneNamePost$Json$Response()` instead.
   *
   * This method sends `application/json` and handles response body of type `application/json`
   */
  v1MiscGetTimezoneNamePost$Json(params?: {

    body?: vwTimezoneName
  }): Observable<void> {

    return this.v1MiscGetTimezoneNamePost$Json$Response(params).pipe(
      map((r: StrictHttpResponse<void>) => r.body as void)
    );
  }

}
