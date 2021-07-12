/* tslint:disable */
import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { BaseService } from '../base-service';
import { ApiConfiguration } from '../api-configuration';
import { StrictHttpResponse } from '../strict-http-response';
import { RequestBuilder } from '../request-builder';
import { Observable } from 'rxjs';
import { map, filter } from 'rxjs/operators';

import { client_role_agnostic_param } from '../models/client-role-agnostic-param';
import { vmCorporateUsers } from '../models/vm-corporate-users';
import { vwAddUpdateClientAssociation } from '../models/vw-add-update-client-association';
import { vwCalendarClientSettings } from '../models/vw-calendar-client-settings';
import { vwClient } from '../models/vw-client';
import { vwClientContactdto } from '../models/vw-client-contactdto';
import { vwClientSearch } from '../models/vw-client-search';
import { vwDeactivateArchiveClient } from '../models/vw-deactivate-archive-client';
import { vwEmailForEmailUpdate } from '../models/vw-email-for-email-update';
import { vwEmailForPhonenumberUpdate } from '../models/vw-email-for-phonenumber-update';
import { vwFullClientRequest } from '../models/vw-full-client-request';
import { vwNotificationPreferences } from '../models/vw-notification-preferences';
import { vwReactivateUnarchiveClient } from '../models/vw-reactivate-unarchive-client';

@Injectable({
  providedIn: 'root',
})
export class ClientService extends BaseService {
  constructor(
    config: ApiConfiguration,
    http: HttpClient
  ) {
    super(config, http);
  }

  /**
   * Path part for operation v1ClientGetPotentialClientAssociationsClientIdGet
   */
  static readonly V1ClientGetPotentialClientAssociationsClientIdGetPath = '/v1/Client/GetPotentialClientAssociations/{clientId}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `v1ClientGetPotentialClientAssociationsClientIdGet()` instead.
   *
   * This method doesn't expect any response body
   */
  v1ClientGetPotentialClientAssociationsClientIdGet$Response(params: {
    clientId: number;

  }): Observable<StrictHttpResponse<void>> {

    const rb = new RequestBuilder(this.rootUrl, ClientService.V1ClientGetPotentialClientAssociationsClientIdGetPath, 'get');
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
   * To access the full response (for headers, for example), `v1ClientGetPotentialClientAssociationsClientIdGet$Response()` instead.
   *
   * This method doesn't expect any response body
   */
  v1ClientGetPotentialClientAssociationsClientIdGet(params: {
    clientId: number;

  }): Observable<void> {

    return this.v1ClientGetPotentialClientAssociationsClientIdGet$Response(params).pipe(
      map((r: StrictHttpResponse<void>) => r.body as void)
    );
  }

  /**
   * Path part for operation v1ClientAssociationsClientIdGet
   */
  static readonly V1ClientAssociationsClientIdGetPath = '/v1/Client/Associations/{clientId}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `v1ClientAssociationsClientIdGet()` instead.
   *
   * This method doesn't expect any response body
   */
  v1ClientAssociationsClientIdGet$Response(params: {
    clientId: number;

  }): Observable<StrictHttpResponse<void>> {

    const rb = new RequestBuilder(this.rootUrl, ClientService.V1ClientAssociationsClientIdGetPath, 'get');
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
   * To access the full response (for headers, for example), `v1ClientAssociationsClientIdGet$Response()` instead.
   *
   * This method doesn't expect any response body
   */
  v1ClientAssociationsClientIdGet(params: {
    clientId: number;

  }): Observable<void> {

    return this.v1ClientAssociationsClientIdGet$Response(params).pipe(
      map((r: StrictHttpResponse<void>) => r.body as void)
    );
  }

  /**
   * Path part for operation v1ClientAddOrUpdateClientAssociationClientIdPost
   */
  static readonly V1ClientAddOrUpdateClientAssociationClientIdPostPath = '/v1/Client/AddOrUpdateClientAssociation/{clientId}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `v1ClientAddOrUpdateClientAssociationClientIdPost$Json()` instead.
   *
   * This method sends `application/json` and handles response body of type `application/json`
   */
  v1ClientAddOrUpdateClientAssociationClientIdPost$Json$Response(params: {
    clientId: number;

    body?: vwAddUpdateClientAssociation
  }): Observable<StrictHttpResponse<void>> {

    const rb = new RequestBuilder(this.rootUrl, ClientService.V1ClientAddOrUpdateClientAssociationClientIdPostPath, 'post');
    if (params) {

      rb.path('clientId', params.clientId);

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
   * To access the full response (for headers, for example), `v1ClientAddOrUpdateClientAssociationClientIdPost$Json$Response()` instead.
   *
   * This method sends `application/json` and handles response body of type `application/json`
   */
  v1ClientAddOrUpdateClientAssociationClientIdPost$Json(params: {
    clientId: number;

    body?: vwAddUpdateClientAssociation
  }): Observable<void> {

    return this.v1ClientAddOrUpdateClientAssociationClientIdPost$Json$Response(params).pipe(
      map((r: StrictHttpResponse<void>) => r.body as void)
    );
  }

  /**
   * Path part for operation v1ClientEventsTypesListGet
   */
  static readonly V1ClientEventsTypesListGetPath = '/v1/Client/events/types/list';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `v1ClientEventsTypesListGet()` instead.
   *
   * This method doesn't expect any response body
   */
  v1ClientEventsTypesListGet$Response(params?: {

  }): Observable<StrictHttpResponse<void>> {

    const rb = new RequestBuilder(this.rootUrl, ClientService.V1ClientEventsTypesListGetPath, 'get');
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
   * To access the full response (for headers, for example), `v1ClientEventsTypesListGet$Response()` instead.
   *
   * This method doesn't expect any response body
   */
  v1ClientEventsTypesListGet(params?: {

  }): Observable<void> {

    return this.v1ClientEventsTypesListGet$Response(params).pipe(
      map((r: StrictHttpResponse<void>) => r.body as void)
    );
  }

  /**
   * Path part for operation v1ClientClientClientIdGet
   */
  static readonly V1ClientClientClientIdGetPath = '/v1/Client/client/{clientId}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `v1ClientClientClientIdGet()` instead.
   *
   * This method doesn't expect any response body
   */
  v1ClientClientClientIdGet$Response(params: {
    clientId: number;
    allStatus?: boolean;

  }): Observable<StrictHttpResponse<void>> {

    const rb = new RequestBuilder(this.rootUrl, ClientService.V1ClientClientClientIdGetPath, 'get');
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
   * To access the full response (for headers, for example), `v1ClientClientClientIdGet$Response()` instead.
   *
   * This method doesn't expect any response body
   */
  v1ClientClientClientIdGet(params: {
    clientId: number;
    allStatus?: boolean;

  }): Observable<void> {

    return this.v1ClientClientClientIdGet$Response(params).pipe(
      map((r: StrictHttpResponse<void>) => r.body as void)
    );
  }

  /**
   * Path part for operation v1ClientGetClientCalendarSettingsClientIdGet
   */
  static readonly V1ClientGetClientCalendarSettingsClientIdGetPath = '/v1/Client/GetClientCalendarSettings/{clientId}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `v1ClientGetClientCalendarSettingsClientIdGet()` instead.
   *
   * This method doesn't expect any response body
   */
  v1ClientGetClientCalendarSettingsClientIdGet$Response(params: {
    clientId: number;

  }): Observable<StrictHttpResponse<void>> {

    const rb = new RequestBuilder(this.rootUrl, ClientService.V1ClientGetClientCalendarSettingsClientIdGetPath, 'get');
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
   * To access the full response (for headers, for example), `v1ClientGetClientCalendarSettingsClientIdGet$Response()` instead.
   *
   * This method doesn't expect any response body
   */
  v1ClientGetClientCalendarSettingsClientIdGet(params: {
    clientId: number;

  }): Observable<void> {

    return this.v1ClientGetClientCalendarSettingsClientIdGet$Response(params).pipe(
      map((r: StrictHttpResponse<void>) => r.body as void)
    );
  }

  /**
   * Path part for operation v1ClientAddOrUpdateClientCalendarSettingsPost
   */
  static readonly V1ClientAddOrUpdateClientCalendarSettingsPostPath = '/v1/Client/AddOrUpdateClientCalendarSettings';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `v1ClientAddOrUpdateClientCalendarSettingsPost$Json()` instead.
   *
   * This method sends `application/json` and handles response body of type `application/json`
   */
  v1ClientAddOrUpdateClientCalendarSettingsPost$Json$Response(params?: {

    body?: vwCalendarClientSettings
  }): Observable<StrictHttpResponse<void>> {

    const rb = new RequestBuilder(this.rootUrl, ClientService.V1ClientAddOrUpdateClientCalendarSettingsPostPath, 'post');
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
   * To access the full response (for headers, for example), `v1ClientAddOrUpdateClientCalendarSettingsPost$Json$Response()` instead.
   *
   * This method sends `application/json` and handles response body of type `application/json`
   */
  v1ClientAddOrUpdateClientCalendarSettingsPost$Json(params?: {

    body?: vwCalendarClientSettings
  }): Observable<void> {

    return this.v1ClientAddOrUpdateClientCalendarSettingsPost$Json$Response(params).pipe(
      map((r: StrictHttpResponse<void>) => r.body as void)
    );
  }

  /**
   * Path part for operation v1ClientEventsPersonPersonIdGet
   */
  static readonly V1ClientEventsPersonPersonIdGetPath = '/v1/Client/events/person/{personId}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `v1ClientEventsPersonPersonIdGet()` instead.
   *
   * This method doesn't expect any response body
   */
  v1ClientEventsPersonPersonIdGet$Response(params: {
    personId: number;
    startDate?: string;
    endDate?: string;

  }): Observable<StrictHttpResponse<void>> {

    const rb = new RequestBuilder(this.rootUrl, ClientService.V1ClientEventsPersonPersonIdGetPath, 'get');
    if (params) {

      rb.path('personId', params.personId);
      rb.query('startDate', params.startDate);
      rb.query('endDate', params.endDate);

    }
    return this.http.request(rb.build({
      responseType: 'text',
      accept: '*/*'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return (r as HttpResponse<any>).clone({ body: undefined }) as StrictHttpResponse<void>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `v1ClientEventsPersonPersonIdGet$Response()` instead.
   *
   * This method doesn't expect any response body
   */
  v1ClientEventsPersonPersonIdGet(params: {
    personId: number;
    startDate?: string;
    endDate?: string;

  }): Observable<void> {

    return this.v1ClientEventsPersonPersonIdGet$Response(params).pipe(
      map((r: StrictHttpResponse<void>) => r.body as void)
    );
  }

  /**
   * Path part for operation v1ClientEventsInviteeAcceptstatusInviteeIdAcceptStatusIdPut
   */
  static readonly V1ClientEventsInviteeAcceptstatusInviteeIdAcceptStatusIdPutPath = '/v1/Client/events/invitee/acceptstatus/{inviteeId}/{acceptStatusId}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `v1ClientEventsInviteeAcceptstatusInviteeIdAcceptStatusIdPut()` instead.
   *
   * This method doesn't expect any response body
   */
  v1ClientEventsInviteeAcceptstatusInviteeIdAcceptStatusIdPut$Response(params: {
    inviteeId: number;
    acceptStatusId: number;

  }): Observable<StrictHttpResponse<void>> {

    const rb = new RequestBuilder(this.rootUrl, ClientService.V1ClientEventsInviteeAcceptstatusInviteeIdAcceptStatusIdPutPath, 'put');
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
   * To access the full response (for headers, for example), `v1ClientEventsInviteeAcceptstatusInviteeIdAcceptStatusIdPut$Response()` instead.
   *
   * This method doesn't expect any response body
   */
  v1ClientEventsInviteeAcceptstatusInviteeIdAcceptStatusIdPut(params: {
    inviteeId: number;
    acceptStatusId: number;

  }): Observable<void> {

    return this.v1ClientEventsInviteeAcceptstatusInviteeIdAcceptStatusIdPut$Response(params).pipe(
      map((r: StrictHttpResponse<void>) => r.body as void)
    );
  }

  /**
   * Path part for operation v1ClientTimezonesGet
   */
  static readonly V1ClientTimezonesGetPath = '/v1/Client/timezones';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `v1ClientTimezonesGet()` instead.
   *
   * This method doesn't expect any response body
   */
  v1ClientTimezonesGet$Response(params?: {

  }): Observable<StrictHttpResponse<void>> {

    const rb = new RequestBuilder(this.rootUrl, ClientService.V1ClientTimezonesGetPath, 'get');
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
   * To access the full response (for headers, for example), `v1ClientTimezonesGet$Response()` instead.
   *
   * This method doesn't expect any response body
   */
  v1ClientTimezonesGet(params?: {

  }): Observable<void> {

    return this.v1ClientTimezonesGet$Response(params).pipe(
      map((r: StrictHttpResponse<void>) => r.body as void)
    );
  }

  /**
   * Path part for operation v1ClientSystemtimezonesGet
   */
  static readonly V1ClientSystemtimezonesGetPath = '/v1/Client/systemtimezones';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `v1ClientSystemtimezonesGet()` instead.
   *
   * This method doesn't expect any response body
   */
  v1ClientSystemtimezonesGet$Response(params?: {

  }): Observable<StrictHttpResponse<void>> {

    const rb = new RequestBuilder(this.rootUrl, ClientService.V1ClientSystemtimezonesGetPath, 'get');
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
   * To access the full response (for headers, for example), `v1ClientSystemtimezonesGet$Response()` instead.
   *
   * This method doesn't expect any response body
   */
  v1ClientSystemtimezonesGet(params?: {

  }): Observable<void> {

    return this.v1ClientSystemtimezonesGet$Response(params).pipe(
      map((r: StrictHttpResponse<void>) => r.body as void)
    );
  }

  /**
   * Path part for operation v1ClientGetClientCalendarFilesEventIdGet
   */
  static readonly V1ClientGetClientCalendarFilesEventIdGetPath = '/v1/Client/GetClientCalendarFiles/{eventId}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `v1ClientGetClientCalendarFilesEventIdGet()` instead.
   *
   * This method doesn't expect any response body
   */
  v1ClientGetClientCalendarFilesEventIdGet$Response(params: {
    eventId: number;

  }): Observable<StrictHttpResponse<void>> {

    const rb = new RequestBuilder(this.rootUrl, ClientService.V1ClientGetClientCalendarFilesEventIdGetPath, 'get');
    if (params) {

      rb.path('eventId', params.eventId);

    }
    return this.http.request(rb.build({
      responseType: 'text',
      accept: '*/*'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return (r as HttpResponse<any>).clone({ body: undefined }) as StrictHttpResponse<void>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `v1ClientGetClientCalendarFilesEventIdGet$Response()` instead.
   *
   * This method doesn't expect any response body
   */
  v1ClientGetClientCalendarFilesEventIdGet(params: {
    eventId: number;

  }): Observable<void> {

    return this.v1ClientGetClientCalendarFilesEventIdGet$Response(params).pipe(
      map((r: StrictHttpResponse<void>) => r.body as void)
    );
  }

  /**
   * Path part for operation v1ClientGet
   */
  static readonly V1ClientGetPath = '/v1/Client';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `v1ClientGet()` instead.
   *
   * This method doesn't expect any response body
   */
  v1ClientGet$Response(params?: {

  }): Observable<StrictHttpResponse<void>> {

    const rb = new RequestBuilder(this.rootUrl, ClientService.V1ClientGetPath, 'get');
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
   * To access the full response (for headers, for example), `v1ClientGet$Response()` instead.
   *
   * This method doesn't expect any response body
   */
  v1ClientGet(params?: {

  }): Observable<void> {

    return this.v1ClientGet$Response(params).pipe(
      map((r: StrictHttpResponse<void>) => r.body as void)
    );
  }

  /**
   * Path part for operation v1ClientPost
   */
  static readonly V1ClientPostPath = '/v1/Client';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `v1ClientPost$Json()` instead.
   *
   * This method sends `application/json` and handles response body of type `application/json`
   */
  v1ClientPost$Json$Response(params?: {

    body?: vwClient
  }): Observable<StrictHttpResponse<void>> {

    const rb = new RequestBuilder(this.rootUrl, ClientService.V1ClientPostPath, 'post');
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
   * To access the full response (for headers, for example), `v1ClientPost$Json$Response()` instead.
   *
   * This method sends `application/json` and handles response body of type `application/json`
   */
  v1ClientPost$Json(params?: {

    body?: vwClient
  }): Observable<void> {

    return this.v1ClientPost$Json$Response(params).pipe(
      map((r: StrictHttpResponse<void>) => r.body as void)
    );
  }

  /**
   * Path part for operation v1ClientGetAllClientsHeaderGet
   */
  static readonly V1ClientGetAllClientsHeaderGetPath = '/v1/Client/GetAllClientsHeader';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `v1ClientGetAllClientsHeaderGet()` instead.
   *
   * This method doesn't expect any response body
   */
  v1ClientGetAllClientsHeaderGet$Response(params?: {

  }): Observable<StrictHttpResponse<void>> {

    const rb = new RequestBuilder(this.rootUrl, ClientService.V1ClientGetAllClientsHeaderGetPath, 'get');
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
   * To access the full response (for headers, for example), `v1ClientGetAllClientsHeaderGet$Response()` instead.
   *
   * This method doesn't expect any response body
   */
  v1ClientGetAllClientsHeaderGet(params?: {

  }): Observable<void> {

    return this.v1ClientGetAllClientsHeaderGet$Response(params).pipe(
      map((r: StrictHttpResponse<void>) => r.body as void)
    );
  }

  /**
   * Path part for operation v1ClientGetAllClientsNewGet
   */
  static readonly V1ClientGetAllClientsNewGetPath = '/v1/Client/GetAllClientsNew';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `v1ClientGetAllClientsNewGet()` instead.
   *
   * This method doesn't expect any response body
   */
  v1ClientGetAllClientsNewGet$Response(params?: {

  }): Observable<StrictHttpResponse<void>> {

    const rb = new RequestBuilder(this.rootUrl, ClientService.V1ClientGetAllClientsNewGetPath, 'get');
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
   * To access the full response (for headers, for example), `v1ClientGetAllClientsNewGet$Response()` instead.
   *
   * This method doesn't expect any response body
   */
  v1ClientGetAllClientsNewGet(params?: {

  }): Observable<void> {

    return this.v1ClientGetAllClientsNewGet$Response(params).pipe(
      map((r: StrictHttpResponse<void>) => r.body as void)
    );
  }

  /**
   * Path part for operation v1ClientGetAllClientsNewFromSpGet
   */
  static readonly V1ClientGetAllClientsNewFromSpGetPath = '/v1/Client/GetAllClientsNewFromSp';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `v1ClientGetAllClientsNewFromSpGet()` instead.
   *
   * This method doesn't expect any response body
   */
  v1ClientGetAllClientsNewFromSpGet$Response(params?: {

  }): Observable<StrictHttpResponse<void>> {

    const rb = new RequestBuilder(this.rootUrl, ClientService.V1ClientGetAllClientsNewFromSpGetPath, 'get');
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
   * To access the full response (for headers, for example), `v1ClientGetAllClientsNewFromSpGet$Response()` instead.
   *
   * This method doesn't expect any response body
   */
  v1ClientGetAllClientsNewFromSpGet(params?: {

  }): Observable<void> {

    return this.v1ClientGetAllClientsNewFromSpGet$Response(params).pipe(
      map((r: StrictHttpResponse<void>) => r.body as void)
    );
  }

  /**
   * Path part for operation v1ClientSearchPost
   */
  static readonly V1ClientSearchPostPath = '/v1/Client/search';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `v1ClientSearchPost$Json()` instead.
   *
   * This method sends `application/json` and handles response body of type `application/json`
   */
  v1ClientSearchPost$Json$Response(params?: {

    body?: vwClientSearch
  }): Observable<StrictHttpResponse<void>> {

    const rb = new RequestBuilder(this.rootUrl, ClientService.V1ClientSearchPostPath, 'post');
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
   * To access the full response (for headers, for example), `v1ClientSearchPost$Json$Response()` instead.
   *
   * This method sends `application/json` and handles response body of type `application/json`
   */
  v1ClientSearchPost$Json(params?: {

    body?: vwClientSearch
  }): Observable<void> {

    return this.v1ClientSearchPost$Json$Response(params).pipe(
      map((r: StrictHttpResponse<void>) => r.body as void)
    );
  }

  /**
   * Path part for operation v1ClientSearchClientsByAssociationPersonIdGet
   */
  static readonly V1ClientSearchClientsByAssociationPersonIdGetPath = '/v1/Client/searchClientsByAssociation/{personId}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `v1ClientSearchClientsByAssociationPersonIdGet()` instead.
   *
   * This method doesn't expect any response body
   */
  v1ClientSearchClientsByAssociationPersonIdGet$Response(params: {
    personId: number;

  }): Observable<StrictHttpResponse<void>> {

    const rb = new RequestBuilder(this.rootUrl, ClientService.V1ClientSearchClientsByAssociationPersonIdGetPath, 'get');
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
   * To access the full response (for headers, for example), `v1ClientSearchClientsByAssociationPersonIdGet$Response()` instead.
   *
   * This method doesn't expect any response body
   */
  v1ClientSearchClientsByAssociationPersonIdGet(params: {
    personId: number;

  }): Observable<void> {

    return this.v1ClientSearchClientsByAssociationPersonIdGet$Response(params).pipe(
      map((r: StrictHttpResponse<void>) => r.body as void)
    );
  }

  /**
   * Path part for operation v1ClientBlockedUserClientIdGet
   */
  static readonly V1ClientBlockedUserClientIdGetPath = '/v1/Client/blockedUser/{clientId}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `v1ClientBlockedUserClientIdGet()` instead.
   *
   * This method doesn't expect any response body
   */
  v1ClientBlockedUserClientIdGet$Response(params: {
    clientId: number;

  }): Observable<StrictHttpResponse<void>> {

    const rb = new RequestBuilder(this.rootUrl, ClientService.V1ClientBlockedUserClientIdGetPath, 'get');
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
   * To access the full response (for headers, for example), `v1ClientBlockedUserClientIdGet$Response()` instead.
   *
   * This method doesn't expect any response body
   */
  v1ClientBlockedUserClientIdGet(params: {
    clientId: number;

  }): Observable<void> {

    return this.v1ClientBlockedUserClientIdGet$Response(params).pipe(
      map((r: StrictHttpResponse<void>) => r.body as void)
    );
  }

  /**
   * Path part for operation v1ClientSearchAssociationAssociationTypeIdGet
   */
  static readonly V1ClientSearchAssociationAssociationTypeIdGetPath = '/v1/Client/searchAssociation/{associationTypeId}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `v1ClientSearchAssociationAssociationTypeIdGet()` instead.
   *
   * This method doesn't expect any response body
   */
  v1ClientSearchAssociationAssociationTypeIdGet$Response(params: {
    associationTypeId: number;

  }): Observable<StrictHttpResponse<void>> {

    const rb = new RequestBuilder(this.rootUrl, ClientService.V1ClientSearchAssociationAssociationTypeIdGetPath, 'get');
    if (params) {

      rb.path('associationTypeId', params.associationTypeId);

    }
    return this.http.request(rb.build({
      responseType: 'text',
      accept: '*/*'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return (r as HttpResponse<any>).clone({ body: undefined }) as StrictHttpResponse<void>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `v1ClientSearchAssociationAssociationTypeIdGet$Response()` instead.
   *
   * This method doesn't expect any response body
   */
  v1ClientSearchAssociationAssociationTypeIdGet(params: {
    associationTypeId: number;

  }): Observable<void> {

    return this.v1ClientSearchAssociationAssociationTypeIdGet$Response(params).pipe(
      map((r: StrictHttpResponse<void>) => r.body as void)
    );
  }

  /**
   * Path part for operation v1ClientAssociationsListClientIdGet
   */
  static readonly V1ClientAssociationsListClientIdGetPath = '/v1/Client/associations/list/{clientId}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `v1ClientAssociationsListClientIdGet()` instead.
   *
   * This method doesn't expect any response body
   */
  v1ClientAssociationsListClientIdGet$Response(params: {
    clientId: number;

  }): Observable<StrictHttpResponse<void>> {

    const rb = new RequestBuilder(this.rootUrl, ClientService.V1ClientAssociationsListClientIdGetPath, 'get');
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
   * To access the full response (for headers, for example), `v1ClientAssociationsListClientIdGet$Response()` instead.
   *
   * This method doesn't expect any response body
   */
  v1ClientAssociationsListClientIdGet(params: {
    clientId: number;

  }): Observable<void> {

    return this.v1ClientAssociationsListClientIdGet$Response(params).pipe(
      map((r: StrictHttpResponse<void>) => r.body as void)
    );
  }

  /**
   * Path part for operation v1ClientOfficeIdGet
   */
  static readonly V1ClientOfficeIdGetPath = '/v1/Client/office/{id}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `v1ClientOfficeIdGet()` instead.
   *
   * This method doesn't expect any response body
   */
  v1ClientOfficeIdGet$Response(params: {
    id: number;

  }): Observable<StrictHttpResponse<void>> {

    const rb = new RequestBuilder(this.rootUrl, ClientService.V1ClientOfficeIdGetPath, 'get');
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
   * To access the full response (for headers, for example), `v1ClientOfficeIdGet$Response()` instead.
   *
   * This method doesn't expect any response body
   */
  v1ClientOfficeIdGet(params: {
    id: number;

  }): Observable<void> {

    return this.v1ClientOfficeIdGet$Response(params).pipe(
      map((r: StrictHttpResponse<void>) => r.body as void)
    );
  }

  /**
   * Path part for operation v1ClientOfficeOfficeTypeOfficeIdGet
   */
  static readonly V1ClientOfficeOfficeTypeOfficeIdGetPath = '/v1/Client/office/{officeType}/{officeId}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `v1ClientOfficeOfficeTypeOfficeIdGet()` instead.
   *
   * This method doesn't expect any response body
   */
  v1ClientOfficeOfficeTypeOfficeIdGet$Response(params: {
    officeType: number;
    officeId: number;

  }): Observable<StrictHttpResponse<void>> {

    const rb = new RequestBuilder(this.rootUrl, ClientService.V1ClientOfficeOfficeTypeOfficeIdGetPath, 'get');
    if (params) {

      rb.path('officeType', params.officeType);
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
   * To access the full response (for headers, for example), `v1ClientOfficeOfficeTypeOfficeIdGet$Response()` instead.
   *
   * This method doesn't expect any response body
   */
  v1ClientOfficeOfficeTypeOfficeIdGet(params: {
    officeType: number;
    officeId: number;

  }): Observable<void> {

    return this.v1ClientOfficeOfficeTypeOfficeIdGet$Response(params).pipe(
      map((r: StrictHttpResponse<void>) => r.body as void)
    );
  }

  /**
   * Path part for operation v1ClientHierarchyHierarchyIdGet
   */
  static readonly V1ClientHierarchyHierarchyIdGetPath = '/v1/Client/hierarchy/{hierarchyId}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `v1ClientHierarchyHierarchyIdGet()` instead.
   *
   * This method doesn't expect any response body
   */
  v1ClientHierarchyHierarchyIdGet$Response(params: {
    hierarchyId: number;

  }): Observable<StrictHttpResponse<void>> {

    const rb = new RequestBuilder(this.rootUrl, ClientService.V1ClientHierarchyHierarchyIdGetPath, 'get');
    if (params) {

      rb.path('hierarchyId', params.hierarchyId);

    }
    return this.http.request(rb.build({
      responseType: 'text',
      accept: '*/*'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return (r as HttpResponse<any>).clone({ body: undefined }) as StrictHttpResponse<void>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `v1ClientHierarchyHierarchyIdGet$Response()` instead.
   *
   * This method doesn't expect any response body
   */
  v1ClientHierarchyHierarchyIdGet(params: {
    hierarchyId: number;

  }): Observable<void> {

    return this.v1ClientHierarchyHierarchyIdGet$Response(params).pipe(
      map((r: StrictHttpResponse<void>) => r.body as void)
    );
  }

  /**
   * Path part for operation v1ClientConflictClientIdGet
   */
  static readonly V1ClientConflictClientIdGetPath = '/v1/Client/conflict/{clientId}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `v1ClientConflictClientIdGet()` instead.
   *
   * This method doesn't expect any response body
   */
  v1ClientConflictClientIdGet$Response(params: {
    clientId: number;

  }): Observable<StrictHttpResponse<void>> {

    const rb = new RequestBuilder(this.rootUrl, ClientService.V1ClientConflictClientIdGetPath, 'get');
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
   * To access the full response (for headers, for example), `v1ClientConflictClientIdGet$Response()` instead.
   *
   * This method doesn't expect any response body
   */
  v1ClientConflictClientIdGet(params: {
    clientId: number;

  }): Observable<void> {

    return this.v1ClientConflictClientIdGet$Response(params).pipe(
      map((r: StrictHttpResponse<void>) => r.body as void)
    );
  }

  /**
   * Path part for operation v1ClientClientIdGet
   */
  static readonly V1ClientClientIdGetPath = '/v1/Client/{clientId}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `v1ClientClientIdGet()` instead.
   *
   * This method doesn't expect any response body
   */
  v1ClientClientIdGet$Response(params: {
    clientId: number;
    isPotentialClient?: boolean;

  }): Observable<StrictHttpResponse<void>> {

    const rb = new RequestBuilder(this.rootUrl, ClientService.V1ClientClientIdGetPath, 'get');
    if (params) {

      rb.path('clientId', params.clientId);
      rb.query('isPotentialClient', params.isPotentialClient);

    }
    return this.http.request(rb.build({
      responseType: 'text',
      accept: '*/*'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return (r as HttpResponse<any>).clone({ body: undefined }) as StrictHttpResponse<void>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `v1ClientClientIdGet$Response()` instead.
   *
   * This method doesn't expect any response body
   */
  v1ClientClientIdGet(params: {
    clientId: number;
    isPotentialClient?: boolean;

  }): Observable<void> {

    return this.v1ClientClientIdGet$Response(params).pipe(
      map((r: StrictHttpResponse<void>) => r.body as void)
    );
  }

  /**
   * Path part for operation v1ClientGetClientProfileGet
   */
  static readonly V1ClientGetClientProfileGetPath = '/v1/Client/GetClientProfile';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `v1ClientGetClientProfileGet()` instead.
   *
   * This method doesn't expect any response body
   */
  v1ClientGetClientProfileGet$Response(params?: {

  }): Observable<StrictHttpResponse<void>> {

    const rb = new RequestBuilder(this.rootUrl, ClientService.V1ClientGetClientProfileGetPath, 'get');
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
   * To access the full response (for headers, for example), `v1ClientGetClientProfileGet$Response()` instead.
   *
   * This method doesn't expect any response body
   */
  v1ClientGetClientProfileGet(params?: {

  }): Observable<void> {

    return this.v1ClientGetClientProfileGet$Response(params).pipe(
      map((r: StrictHttpResponse<void>) => r.body as void)
    );
  }

  /**
   * Path part for operation v1ClientGetClientUniqueNumberGet
   */
  static readonly V1ClientGetClientUniqueNumberGetPath = '/v1/Client/GetClientUniqueNumber';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `v1ClientGetClientUniqueNumberGet()` instead.
   *
   * This method doesn't expect any response body
   */
  v1ClientGetClientUniqueNumberGet$Response(params?: {
    tenantId?: number;

  }): Observable<StrictHttpResponse<void>> {

    const rb = new RequestBuilder(this.rootUrl, ClientService.V1ClientGetClientUniqueNumberGetPath, 'get');
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
   * To access the full response (for headers, for example), `v1ClientGetClientUniqueNumberGet$Response()` instead.
   *
   * This method doesn't expect any response body
   */
  v1ClientGetClientUniqueNumberGet(params?: {
    tenantId?: number;

  }): Observable<void> {

    return this.v1ClientGetClientUniqueNumberGet$Response(params).pipe(
      map((r: StrictHttpResponse<void>) => r.body as void)
    );
  }

  /**
   * Path part for operation v1ClientCorporateDefaultPermissionGet
   */
  static readonly V1ClientCorporateDefaultPermissionGetPath = '/v1/Client/corporateDefaultPermission';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `v1ClientCorporateDefaultPermissionGet()` instead.
   *
   * This method doesn't expect any response body
   */
  v1ClientCorporateDefaultPermissionGet$Response(params?: {

  }): Observable<StrictHttpResponse<void>> {

    const rb = new RequestBuilder(this.rootUrl, ClientService.V1ClientCorporateDefaultPermissionGetPath, 'get');
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
   * To access the full response (for headers, for example), `v1ClientCorporateDefaultPermissionGet$Response()` instead.
   *
   * This method doesn't expect any response body
   */
  v1ClientCorporateDefaultPermissionGet(params?: {

  }): Observable<void> {

    return this.v1ClientCorporateDefaultPermissionGet$Response(params).pipe(
      map((r: StrictHttpResponse<void>) => r.body as void)
    );
  }

  /**
   * Path part for operation v1ClientGrantCorporateUsersPost
   */
  static readonly V1ClientGrantCorporateUsersPostPath = '/v1/Client/GrantCorporateUsers';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `v1ClientGrantCorporateUsersPost$Json()` instead.
   *
   * This method sends `application/json` and handles response body of type `application/json`
   */
  v1ClientGrantCorporateUsersPost$Json$Response(params?: {

    body?: vmCorporateUsers
  }): Observable<StrictHttpResponse<void>> {

    const rb = new RequestBuilder(this.rootUrl, ClientService.V1ClientGrantCorporateUsersPostPath, 'post');
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
   * To access the full response (for headers, for example), `v1ClientGrantCorporateUsersPost$Json$Response()` instead.
   *
   * This method sends `application/json` and handles response body of type `application/json`
   */
  v1ClientGrantCorporateUsersPost$Json(params?: {

    body?: vmCorporateUsers
  }): Observable<void> {

    return this.v1ClientGrantCorporateUsersPost$Json$Response(params).pipe(
      map((r: StrictHttpResponse<void>) => r.body as void)
    );
  }

  /**
   * Path part for operation v1ClientCorporateUserPermissionGet
   */
  static readonly V1ClientCorporateUserPermissionGetPath = '/v1/Client/CorporateUserPermission';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `v1ClientCorporateUserPermissionGet()` instead.
   *
   * This method doesn't expect any response body
   */
  v1ClientCorporateUserPermissionGet$Response(params?: {
    personId?: number;
    matterId?: number;

  }): Observable<StrictHttpResponse<void>> {

    const rb = new RequestBuilder(this.rootUrl, ClientService.V1ClientCorporateUserPermissionGetPath, 'get');
    if (params) {

      rb.query('personId', params.personId);
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
   * To access the full response (for headers, for example), `v1ClientCorporateUserPermissionGet$Response()` instead.
   *
   * This method doesn't expect any response body
   */
  v1ClientCorporateUserPermissionGet(params?: {
    personId?: number;
    matterId?: number;

  }): Observable<void> {

    return this.v1ClientCorporateUserPermissionGet$Response(params).pipe(
      map((r: StrictHttpResponse<void>) => r.body as void)
    );
  }

  /**
   * Path part for operation v1ClientCorporateUsersPut
   */
  static readonly V1ClientCorporateUsersPutPath = '/v1/Client/CorporateUsers';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `v1ClientCorporateUsersPut$Json()` instead.
   *
   * This method sends `application/json` and handles response body of type `application/json`
   */
  v1ClientCorporateUsersPut$Json$Response(params?: {

    body?: vmCorporateUsers
  }): Observable<StrictHttpResponse<void>> {

    const rb = new RequestBuilder(this.rootUrl, ClientService.V1ClientCorporateUsersPutPath, 'put');
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
   * To access the full response (for headers, for example), `v1ClientCorporateUsersPut$Json$Response()` instead.
   *
   * This method sends `application/json` and handles response body of type `application/json`
   */
  v1ClientCorporateUsersPut$Json(params?: {

    body?: vmCorporateUsers
  }): Observable<void> {

    return this.v1ClientCorporateUsersPut$Json$Response(params).pipe(
      map((r: StrictHttpResponse<void>) => r.body as void)
    );
  }

  /**
   * Path part for operation v1ClientCorporateGet
   */
  static readonly V1ClientCorporateGetPath = '/v1/Client/corporate';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `v1ClientCorporateGet()` instead.
   *
   * This method doesn't expect any response body
   */
  v1ClientCorporateGet$Response(params?: {
    search?: string;

  }): Observable<StrictHttpResponse<void>> {

    const rb = new RequestBuilder(this.rootUrl, ClientService.V1ClientCorporateGetPath, 'get');
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
   * To access the full response (for headers, for example), `v1ClientCorporateGet$Response()` instead.
   *
   * This method doesn't expect any response body
   */
  v1ClientCorporateGet(params?: {
    search?: string;

  }): Observable<void> {

    return this.v1ClientCorporateGet$Response(params).pipe(
      map((r: StrictHttpResponse<void>) => r.body as void)
    );
  }

  /**
   * Path part for operation v1ClientAssociationTypeClientIdGet
   */
  static readonly V1ClientAssociationTypeClientIdGetPath = '/v1/Client/associationType/{clientId}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `v1ClientAssociationTypeClientIdGet()` instead.
   *
   * This method doesn't expect any response body
   */
  v1ClientAssociationTypeClientIdGet$Response(params: {
    clientId: number;

  }): Observable<StrictHttpResponse<void>> {

    const rb = new RequestBuilder(this.rootUrl, ClientService.V1ClientAssociationTypeClientIdGetPath, 'get');
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
   * To access the full response (for headers, for example), `v1ClientAssociationTypeClientIdGet$Response()` instead.
   *
   * This method doesn't expect any response body
   */
  v1ClientAssociationTypeClientIdGet(params: {
    clientId: number;

  }): Observable<void> {

    return this.v1ClientAssociationTypeClientIdGet$Response(params).pipe(
      map((r: StrictHttpResponse<void>) => r.body as void)
    );
  }

  /**
   * Path part for operation v1ClientEditClientContactPost
   */
  static readonly V1ClientEditClientContactPostPath = '/v1/Client/EditClientContact';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `v1ClientEditClientContactPost$Json()` instead.
   *
   * This method sends `application/json` and handles response body of type `application/json`
   */
  v1ClientEditClientContactPost$Json$Response(params?: {

    body?: vwClientContactdto
  }): Observable<StrictHttpResponse<void>> {

    const rb = new RequestBuilder(this.rootUrl, ClientService.V1ClientEditClientContactPostPath, 'post');
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
   * To access the full response (for headers, for example), `v1ClientEditClientContactPost$Json$Response()` instead.
   *
   * This method sends `application/json` and handles response body of type `application/json`
   */
  v1ClientEditClientContactPost$Json(params?: {

    body?: vwClientContactdto
  }): Observable<void> {

    return this.v1ClientEditClientContactPost$Json$Response(params).pipe(
      map((r: StrictHttpResponse<void>) => r.body as void)
    );
  }

  /**
   * Path part for operation v1ClientDeactivateArchiveDelete
   */
  static readonly V1ClientDeactivateArchiveDeletePath = '/v1/Client/deactivateArchive';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `v1ClientDeactivateArchiveDelete$Json()` instead.
   *
   * This method sends `application/json` and handles response body of type `application/json`
   */
  v1ClientDeactivateArchiveDelete$Json$Response(params?: {

    body?: vwDeactivateArchiveClient
  }): Observable<StrictHttpResponse<void>> {

    const rb = new RequestBuilder(this.rootUrl, ClientService.V1ClientDeactivateArchiveDeletePath, 'delete');
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
   * To access the full response (for headers, for example), `v1ClientDeactivateArchiveDelete$Json$Response()` instead.
   *
   * This method sends `application/json` and handles response body of type `application/json`
   */
  v1ClientDeactivateArchiveDelete$Json(params?: {

    body?: vwDeactivateArchiveClient
  }): Observable<void> {

    return this.v1ClientDeactivateArchiveDelete$Json$Response(params).pipe(
      map((r: StrictHttpResponse<void>) => r.body as void)
    );
  }

  /**
   * Path part for operation v1ClientReactivateUnarchivePut
   */
  static readonly V1ClientReactivateUnarchivePutPath = '/v1/Client/reactivateUnarchive';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `v1ClientReactivateUnarchivePut$Json()` instead.
   *
   * This method sends `application/json` and handles response body of type `application/json`
   */
  v1ClientReactivateUnarchivePut$Json$Response(params?: {

    body?: vwReactivateUnarchiveClient
  }): Observable<StrictHttpResponse<void>> {

    const rb = new RequestBuilder(this.rootUrl, ClientService.V1ClientReactivateUnarchivePutPath, 'put');
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
   * To access the full response (for headers, for example), `v1ClientReactivateUnarchivePut$Json$Response()` instead.
   *
   * This method sends `application/json` and handles response body of type `application/json`
   */
  v1ClientReactivateUnarchivePut$Json(params?: {

    body?: vwReactivateUnarchiveClient
  }): Observable<void> {

    return this.v1ClientReactivateUnarchivePut$Json$Response(params).pipe(
      map((r: StrictHttpResponse<void>) => r.body as void)
    );
  }

  /**
   * Path part for operation v1ClientSendEmailUpdateEmailPut
   */
  static readonly V1ClientSendEmailUpdateEmailPutPath = '/v1/Client/SendEmailUpdateEmail';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `v1ClientSendEmailUpdateEmailPut$Json()` instead.
   *
   * This method sends `application/json` and handles response body of type `application/json`
   */
  v1ClientSendEmailUpdateEmailPut$Json$Response(params?: {

    body?: vwEmailForEmailUpdate
  }): Observable<StrictHttpResponse<void>> {

    const rb = new RequestBuilder(this.rootUrl, ClientService.V1ClientSendEmailUpdateEmailPutPath, 'put');
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
   * To access the full response (for headers, for example), `v1ClientSendEmailUpdateEmailPut$Json$Response()` instead.
   *
   * This method sends `application/json` and handles response body of type `application/json`
   */
  v1ClientSendEmailUpdateEmailPut$Json(params?: {

    body?: vwEmailForEmailUpdate
  }): Observable<void> {

    return this.v1ClientSendEmailUpdateEmailPut$Json$Response(params).pipe(
      map((r: StrictHttpResponse<void>) => r.body as void)
    );
  }

  /**
   * Path part for operation v1ClientSendEmailUpdatePhonenumberPut
   */
  static readonly V1ClientSendEmailUpdatePhonenumberPutPath = '/v1/Client/SendEmailUpdatePhonenumber';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `v1ClientSendEmailUpdatePhonenumberPut$Json()` instead.
   *
   * This method sends `application/json` and handles response body of type `application/json`
   */
  v1ClientSendEmailUpdatePhonenumberPut$Json$Response(params?: {

    body?: vwEmailForPhonenumberUpdate
  }): Observable<StrictHttpResponse<void>> {

    const rb = new RequestBuilder(this.rootUrl, ClientService.V1ClientSendEmailUpdatePhonenumberPutPath, 'put');
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
   * To access the full response (for headers, for example), `v1ClientSendEmailUpdatePhonenumberPut$Json$Response()` instead.
   *
   * This method sends `application/json` and handles response body of type `application/json`
   */
  v1ClientSendEmailUpdatePhonenumberPut$Json(params?: {

    body?: vwEmailForPhonenumberUpdate
  }): Observable<void> {

    return this.v1ClientSendEmailUpdatePhonenumberPut$Json$Response(params).pipe(
      map((r: StrictHttpResponse<void>) => r.body as void)
    );
  }

  /**
   * Path part for operation v1ClientClientEmailInfoClientIdGet
   */
  static readonly V1ClientClientEmailInfoClientIdGetPath = '/v1/Client/ClientEmailInfo/{clientId}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `v1ClientClientEmailInfoClientIdGet()` instead.
   *
   * This method doesn't expect any response body
   */
  v1ClientClientEmailInfoClientIdGet$Response(params: {
    clientId: number;

  }): Observable<StrictHttpResponse<void>> {

    const rb = new RequestBuilder(this.rootUrl, ClientService.V1ClientClientEmailInfoClientIdGetPath, 'get');
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
   * To access the full response (for headers, for example), `v1ClientClientEmailInfoClientIdGet$Response()` instead.
   *
   * This method doesn't expect any response body
   */
  v1ClientClientEmailInfoClientIdGet(params: {
    clientId: number;

  }): Observable<void> {

    return this.v1ClientClientEmailInfoClientIdGet$Response(params).pipe(
      map((r: StrictHttpResponse<void>) => r.body as void)
    );
  }

  /**
   * Path part for operation v1ClientGetClientNotificationPreferencesGet
   */
  static readonly V1ClientGetClientNotificationPreferencesGetPath = '/v1/Client/GetClientNotificationPreferences';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `v1ClientGetClientNotificationPreferencesGet()` instead.
   *
   * This method doesn't expect any response body
   */
  v1ClientGetClientNotificationPreferencesGet$Response(params?: {

  }): Observable<StrictHttpResponse<void>> {

    const rb = new RequestBuilder(this.rootUrl, ClientService.V1ClientGetClientNotificationPreferencesGetPath, 'get');
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
   * To access the full response (for headers, for example), `v1ClientGetClientNotificationPreferencesGet$Response()` instead.
   *
   * This method doesn't expect any response body
   */
  v1ClientGetClientNotificationPreferencesGet(params?: {

  }): Observable<void> {

    return this.v1ClientGetClientNotificationPreferencesGet$Response(params).pipe(
      map((r: StrictHttpResponse<void>) => r.body as void)
    );
  }

  /**
   * Path part for operation v1ClientUpdateClientNotificationPreferencesPost
   */
  static readonly V1ClientUpdateClientNotificationPreferencesPostPath = '/v1/Client/UpdateClientNotificationPreferences';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `v1ClientUpdateClientNotificationPreferencesPost$Json()` instead.
   *
   * This method sends `application/json` and handles response body of type `application/json`
   */
  v1ClientUpdateClientNotificationPreferencesPost$Json$Response(params?: {

    body?: Array<vwNotificationPreferences>
  }): Observable<StrictHttpResponse<void>> {

    const rb = new RequestBuilder(this.rootUrl, ClientService.V1ClientUpdateClientNotificationPreferencesPostPath, 'post');
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
   * To access the full response (for headers, for example), `v1ClientUpdateClientNotificationPreferencesPost$Json$Response()` instead.
   *
   * This method sends `application/json` and handles response body of type `application/json`
   */
  v1ClientUpdateClientNotificationPreferencesPost$Json(params?: {

    body?: Array<vwNotificationPreferences>
  }): Observable<void> {

    return this.v1ClientUpdateClientNotificationPreferencesPost$Json$Response(params).pipe(
      map((r: StrictHttpResponse<void>) => r.body as void)
    );
  }

  /**
   * Path part for operation v1ClientMatterListForAutoPayClientIdGet
   */
  static readonly V1ClientMatterListForAutoPayClientIdGetPath = '/v1/Client/MatterListForAutoPay/{clientId}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `v1ClientMatterListForAutoPayClientIdGet()` instead.
   *
   * This method doesn't expect any response body
   */
  v1ClientMatterListForAutoPayClientIdGet$Response(params: {
    clientId: number;
    paymentMethodId?: number;

  }): Observable<StrictHttpResponse<void>> {

    const rb = new RequestBuilder(this.rootUrl, ClientService.V1ClientMatterListForAutoPayClientIdGetPath, 'get');
    if (params) {

      rb.path('clientId', params.clientId);
      rb.query('paymentMethodId', params.paymentMethodId);

    }
    return this.http.request(rb.build({
      responseType: 'text',
      accept: '*/*'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return (r as HttpResponse<any>).clone({ body: undefined }) as StrictHttpResponse<void>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `v1ClientMatterListForAutoPayClientIdGet$Response()` instead.
   *
   * This method doesn't expect any response body
   */
  v1ClientMatterListForAutoPayClientIdGet(params: {
    clientId: number;
    paymentMethodId?: number;

  }): Observable<void> {

    return this.v1ClientMatterListForAutoPayClientIdGet$Response(params).pipe(
      map((r: StrictHttpResponse<void>) => r.body as void)
    );
  }

  /**
   * Path part for operation v1ClientFullPost
   */
  static readonly V1ClientFullPostPath = '/v1/Client/Full';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `v1ClientFullPost$Json()` instead.
   *
   * This method sends `application/json` and handles response body of type `application/json`
   */
  v1ClientFullPost$Json$Response(params?: {

    body?: vwFullClientRequest
  }): Observable<StrictHttpResponse<void>> {

    const rb = new RequestBuilder(this.rootUrl, ClientService.V1ClientFullPostPath, 'post');
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
   * To access the full response (for headers, for example), `v1ClientFullPost$Json$Response()` instead.
   *
   * This method sends `application/json` and handles response body of type `application/json`
   */
  v1ClientFullPost$Json(params?: {

    body?: vwFullClientRequest
  }): Observable<void> {

    return this.v1ClientFullPost$Json$Response(params).pipe(
      map((r: StrictHttpResponse<void>) => r.body as void)
    );
  }

  /**
   * Path part for operation v1ClientClientBasicInfoClientIdGet
   */
  static readonly V1ClientClientBasicInfoClientIdGetPath = '/v1/Client/ClientBasicInfo/{clientId}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `v1ClientClientBasicInfoClientIdGet()` instead.
   *
   * This method doesn't expect any response body
   */
  v1ClientClientBasicInfoClientIdGet$Response(params: {
    clientId: number;

  }): Observable<StrictHttpResponse<void>> {

    const rb = new RequestBuilder(this.rootUrl, ClientService.V1ClientClientBasicInfoClientIdGetPath, 'get');
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
   * To access the full response (for headers, for example), `v1ClientClientBasicInfoClientIdGet$Response()` instead.
   *
   * This method doesn't expect any response body
   */
  v1ClientClientBasicInfoClientIdGet(params: {
    clientId: number;

  }): Observable<void> {

    return this.v1ClientClientBasicInfoClientIdGet$Response(params).pipe(
      map((r: StrictHttpResponse<void>) => r.body as void)
    );
  }

  /**
   * Path part for operation v1ClientRoleAgnosticIsExistPost
   */
  static readonly V1ClientRoleAgnosticIsExistPostPath = '/v1/Client/Role/Agnostic/IsExist';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `v1ClientRoleAgnosticIsExistPost$Json()` instead.
   *
   * This method sends `application/json` and handles response body of type `application/json`
   */
  v1ClientRoleAgnosticIsExistPost$Json$Response(params?: {

    body?: client_role_agnostic_param
  }): Observable<StrictHttpResponse<void>> {

    const rb = new RequestBuilder(this.rootUrl, ClientService.V1ClientRoleAgnosticIsExistPostPath, 'post');
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
   * To access the full response (for headers, for example), `v1ClientRoleAgnosticIsExistPost$Json$Response()` instead.
   *
   * This method sends `application/json` and handles response body of type `application/json`
   */
  v1ClientRoleAgnosticIsExistPost$Json(params?: {

    body?: client_role_agnostic_param
  }): Observable<void> {

    return this.v1ClientRoleAgnosticIsExistPost$Json$Response(params).pipe(
      map((r: StrictHttpResponse<void>) => r.body as void)
    );
  }

  /**
   * Path part for operation v1ClientRoleAgnosticResultPost
   */
  static readonly V1ClientRoleAgnosticResultPostPath = '/v1/Client/Role/Agnostic/Result';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `v1ClientRoleAgnosticResultPost$Json()` instead.
   *
   * This method sends `application/json` and handles response body of type `application/json`
   */
  v1ClientRoleAgnosticResultPost$Json$Response(params?: {

    body?: client_role_agnostic_param
  }): Observable<StrictHttpResponse<void>> {

    const rb = new RequestBuilder(this.rootUrl, ClientService.V1ClientRoleAgnosticResultPostPath, 'post');
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
   * To access the full response (for headers, for example), `v1ClientRoleAgnosticResultPost$Json$Response()` instead.
   *
   * This method sends `application/json` and handles response body of type `application/json`
   */
  v1ClientRoleAgnosticResultPost$Json(params?: {

    body?: client_role_agnostic_param
  }): Observable<void> {

    return this.v1ClientRoleAgnosticResultPost$Json$Response(params).pipe(
      map((r: StrictHttpResponse<void>) => r.body as void)
    );
  }

  /**
   * Path part for operation v1ClientClientMatterBalanceDetailGet
   */
  static readonly V1ClientClientMatterBalanceDetailGetPath = '/v1/Client/ClientMatterBalanceDetail';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `v1ClientClientMatterBalanceDetailGet()` instead.
   *
   * This method doesn't expect any response body
   */
  v1ClientClientMatterBalanceDetailGet$Response(params?: {
    clientId?: number;
    includePending?: boolean;

  }): Observable<StrictHttpResponse<void>> {

    const rb = new RequestBuilder(this.rootUrl, ClientService.V1ClientClientMatterBalanceDetailGetPath, 'get');
    if (params) {

      rb.query('clientId', params.clientId);
      rb.query('includePending', params.includePending);

    }
    return this.http.request(rb.build({
      responseType: 'text',
      accept: '*/*'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return (r as HttpResponse<any>).clone({ body: undefined }) as StrictHttpResponse<void>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `v1ClientClientMatterBalanceDetailGet$Response()` instead.
   *
   * This method doesn't expect any response body
   */
  v1ClientClientMatterBalanceDetailGet(params?: {
    clientId?: number;
    includePending?: boolean;

  }): Observable<void> {

    return this.v1ClientClientMatterBalanceDetailGet$Response(params).pipe(
      map((r: StrictHttpResponse<void>) => r.body as void)
    );
  }

  /**
   * Path part for operation v1ClientClientMatterNotesDetailGet
   */
  static readonly V1ClientClientMatterNotesDetailGetPath = '/v1/Client/ClientMatterNotesDetail';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `v1ClientClientMatterNotesDetailGet()` instead.
   *
   * This method doesn't expect any response body
   */
  v1ClientClientMatterNotesDetailGet$Response(params?: {
    clientId?: number;

  }): Observable<StrictHttpResponse<void>> {

    const rb = new RequestBuilder(this.rootUrl, ClientService.V1ClientClientMatterNotesDetailGetPath, 'get');
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
   * To access the full response (for headers, for example), `v1ClientClientMatterNotesDetailGet$Response()` instead.
   *
   * This method doesn't expect any response body
   */
  v1ClientClientMatterNotesDetailGet(params?: {
    clientId?: number;

  }): Observable<void> {

    return this.v1ClientClientMatterNotesDetailGet$Response(params).pipe(
      map((r: StrictHttpResponse<void>) => r.body as void)
    );
  }

  /**
   * Path part for operation v1ClientPreventDeactivatingClientClientIdGet
   */
  static readonly V1ClientPreventDeactivatingClientClientIdGetPath = '/v1/Client/PreventDeactivatingClient/{clientId}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `v1ClientPreventDeactivatingClientClientIdGet()` instead.
   *
   * This method doesn't expect any response body
   */
  v1ClientPreventDeactivatingClientClientIdGet$Response(params: {
    clientId: number;

  }): Observable<StrictHttpResponse<void>> {

    const rb = new RequestBuilder(this.rootUrl, ClientService.V1ClientPreventDeactivatingClientClientIdGetPath, 'get');
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
   * To access the full response (for headers, for example), `v1ClientPreventDeactivatingClientClientIdGet$Response()` instead.
   *
   * This method doesn't expect any response body
   */
  v1ClientPreventDeactivatingClientClientIdGet(params: {
    clientId: number;

  }): Observable<void> {

    return this.v1ClientPreventDeactivatingClientClientIdGet$Response(params).pipe(
      map((r: StrictHttpResponse<void>) => r.body as void)
    );
  }

  /**
   * Path part for operation v1ClientUsioAccountStatusClientIdGet
   */
  static readonly V1ClientUsioAccountStatusClientIdGetPath = '/v1/Client/UsioAccountStatus/{clientId}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `v1ClientUsioAccountStatusClientIdGet()` instead.
   *
   * This method doesn't expect any response body
   */
  v1ClientUsioAccountStatusClientIdGet$Response(params: {
    clientId: number;

  }): Observable<StrictHttpResponse<void>> {

    const rb = new RequestBuilder(this.rootUrl, ClientService.V1ClientUsioAccountStatusClientIdGetPath, 'get');
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
   * To access the full response (for headers, for example), `v1ClientUsioAccountStatusClientIdGet$Response()` instead.
   *
   * This method doesn't expect any response body
   */
  v1ClientUsioAccountStatusClientIdGet(params: {
    clientId: number;

  }): Observable<void> {

    return this.v1ClientUsioAccountStatusClientIdGet$Response(params).pipe(
      map((r: StrictHttpResponse<void>) => r.body as void)
    );
  }

  /**
   * Path part for operation v1ClientFixedFeeAddOnsClientIdGet
   */
  static readonly V1ClientFixedFeeAddOnsClientIdGetPath = '/v1/Client/FixedFeeAddOns/{clientId}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `v1ClientFixedFeeAddOnsClientIdGet()` instead.
   *
   * This method doesn't expect any response body
   */
  v1ClientFixedFeeAddOnsClientIdGet$Response(params: {
    clientId: number;
    matterId?: number;

  }): Observable<StrictHttpResponse<void>> {

    const rb = new RequestBuilder(this.rootUrl, ClientService.V1ClientFixedFeeAddOnsClientIdGetPath, 'get');
    if (params) {

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
   * To access the full response (for headers, for example), `v1ClientFixedFeeAddOnsClientIdGet$Response()` instead.
   *
   * This method doesn't expect any response body
   */
  v1ClientFixedFeeAddOnsClientIdGet(params: {
    clientId: number;
    matterId?: number;

  }): Observable<void> {

    return this.v1ClientFixedFeeAddOnsClientIdGet$Response(params).pipe(
      map((r: StrictHttpResponse<void>) => r.body as void)
    );
  }

  /**
   * Path part for operation v1ClientInvoiceClientIdGet
   */
  static readonly V1ClientInvoiceClientIdGetPath = '/v1/Client/Invoice/{clientId}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `v1ClientInvoiceClientIdGet()` instead.
   *
   * This method doesn't expect any response body
   */
  v1ClientInvoiceClientIdGet$Response(params: {
    clientId: number;

  }): Observable<StrictHttpResponse<void>> {

    const rb = new RequestBuilder(this.rootUrl, ClientService.V1ClientInvoiceClientIdGetPath, 'get');
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
   * To access the full response (for headers, for example), `v1ClientInvoiceClientIdGet$Response()` instead.
   *
   * This method doesn't expect any response body
   */
  v1ClientInvoiceClientIdGet(params: {
    clientId: number;

  }): Observable<void> {

    return this.v1ClientInvoiceClientIdGet$Response(params).pipe(
      map((r: StrictHttpResponse<void>) => r.body as void)
    );
  }

  /**
   * Path part for operation v1ClientFixedFeeServicesClientIdGet
   */
  static readonly V1ClientFixedFeeServicesClientIdGetPath = '/v1/Client/FixedFeeServices/{clientId}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `v1ClientFixedFeeServicesClientIdGet()` instead.
   *
   * This method doesn't expect any response body
   */
  v1ClientFixedFeeServicesClientIdGet$Response(params: {
    clientId: number;
    matterId?: number;

  }): Observable<StrictHttpResponse<void>> {

    const rb = new RequestBuilder(this.rootUrl, ClientService.V1ClientFixedFeeServicesClientIdGetPath, 'get');
    if (params) {

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
   * To access the full response (for headers, for example), `v1ClientFixedFeeServicesClientIdGet$Response()` instead.
   *
   * This method doesn't expect any response body
   */
  v1ClientFixedFeeServicesClientIdGet(params: {
    clientId: number;
    matterId?: number;

  }): Observable<void> {

    return this.v1ClientFixedFeeServicesClientIdGet$Response(params).pipe(
      map((r: StrictHttpResponse<void>) => r.body as void)
    );
  }

  /**
   * Path part for operation v1ClientSearchClientsAndMattersByAssociationPersonIdGet
   */
  static readonly V1ClientSearchClientsAndMattersByAssociationPersonIdGetPath = '/v1/Client/SearchClientsAndMattersByAssociation/{personId}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `v1ClientSearchClientsAndMattersByAssociationPersonIdGet()` instead.
   *
   * This method doesn't expect any response body
   */
  v1ClientSearchClientsAndMattersByAssociationPersonIdGet$Response(params: {
    personId: number;

  }): Observable<StrictHttpResponse<void>> {

    const rb = new RequestBuilder(this.rootUrl, ClientService.V1ClientSearchClientsAndMattersByAssociationPersonIdGetPath, 'get');
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
   * To access the full response (for headers, for example), `v1ClientSearchClientsAndMattersByAssociationPersonIdGet$Response()` instead.
   *
   * This method doesn't expect any response body
   */
  v1ClientSearchClientsAndMattersByAssociationPersonIdGet(params: {
    personId: number;

  }): Observable<void> {

    return this.v1ClientSearchClientsAndMattersByAssociationPersonIdGet$Response(params).pipe(
      map((r: StrictHttpResponse<void>) => r.body as void)
    );
  }

  /**
   * Path part for operation v1ClientContingentFeesClientIdGet
   */
  static readonly V1ClientContingentFeesClientIdGetPath = '/v1/Client/ContingentFees/{clientId}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `v1ClientContingentFeesClientIdGet()` instead.
   *
   * This method doesn't expect any response body
   */
  v1ClientContingentFeesClientIdGet$Response(params: {
    clientId: number;

  }): Observable<StrictHttpResponse<void>> {

    const rb = new RequestBuilder(this.rootUrl, ClientService.V1ClientContingentFeesClientIdGetPath, 'get');
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
   * To access the full response (for headers, for example), `v1ClientContingentFeesClientIdGet$Response()` instead.
   *
   * This method doesn't expect any response body
   */
  v1ClientContingentFeesClientIdGet(params: {
    clientId: number;

  }): Observable<void> {

    return this.v1ClientContingentFeesClientIdGet$Response(params).pipe(
      map((r: StrictHttpResponse<void>) => r.body as void)
    );
  }

}
