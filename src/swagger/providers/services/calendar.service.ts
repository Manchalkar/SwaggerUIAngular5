/* tslint:disable */
import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { BaseService } from '../base-service';
import { ApiConfiguration } from '../api-configuration';
import { StrictHttpResponse } from '../strict-http-response';
import { RequestBuilder } from '../request-builder';
import { Observable } from 'rxjs';
import { map, filter } from 'rxjs/operators';

import { vwCalendarSettings } from '../models/vw-calendar-settings';
import { vwCalendarSubscriptions } from '../models/vw-calendar-subscriptions';
import { vwCalenderInviteeCheckRequest } from '../models/vw-calender-invitee-check-request';
import { vwChannelResponse } from '../models/vw-channel-response';
import { vwMatterEventsProposedTime } from '../models/vw-matter-events-proposed-time';
import { vwPersonsEvents } from '../models/vw-persons-events';
import { vwPostCalendarData } from '../models/vw-post-calendar-data';
import { vwPostCalendarDataExternal } from '../models/vw-post-calendar-data-external';
import { vwUpdateSubscriptionsColor } from '../models/vw-update-subscriptions-color';

@Injectable({
  providedIn: 'root',
})
export class CalendarService extends BaseService {
  constructor(
    config: ApiConfiguration,
    http: HttpClient
  ) {
    super(config, http);
  }

  /**
   * Path part for operation v1CalendarEventsPersonPersonIdGet
   */
  static readonly V1CalendarEventsPersonPersonIdGetPath = '/v1/Calendar/events/person/{personId}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `v1CalendarEventsPersonPersonIdGet()` instead.
   *
   * This method doesn't expect any response body
   */
  v1CalendarEventsPersonPersonIdGet$Response(params: {
    personId: number;
    startDate?: string;
    endDate?: string;
    personEmail?: string;

  }): Observable<StrictHttpResponse<void>> {

    const rb = new RequestBuilder(this.rootUrl, CalendarService.V1CalendarEventsPersonPersonIdGetPath, 'get');
    if (params) {

      rb.path('personId', params.personId);
      rb.query('startDate', params.startDate);
      rb.query('endDate', params.endDate);
      rb.query('personEmail', params.personEmail);

    }
    return this.http.request(rb.build({
      responseType: 'text',
      accept: '*/*'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return (r as HttpResponse<any>).clone({ body: undefined }) as StrictHttpResponse<void>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `v1CalendarEventsPersonPersonIdGet$Response()` instead.
   *
   * This method doesn't expect any response body
   */
  v1CalendarEventsPersonPersonIdGet(params: {
    personId: number;
    startDate?: string;
    endDate?: string;
    personEmail?: string;

  }): Observable<void> {

    return this.v1CalendarEventsPersonPersonIdGet$Response(params).pipe(
      map((r: StrictHttpResponse<void>) => r.body as void)
    );
  }

  /**
   * Path part for operation v1CalendarPersonsEventsPost
   */
  static readonly V1CalendarPersonsEventsPostPath = '/v1/Calendar/persons/events';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `v1CalendarPersonsEventsPost$Json()` instead.
   *
   * This method sends `application/json` and handles response body of type `application/json`
   */
  v1CalendarPersonsEventsPost$Json$Response(params?: {

    body?: vwPersonsEvents
  }): Observable<StrictHttpResponse<void>> {

    const rb = new RequestBuilder(this.rootUrl, CalendarService.V1CalendarPersonsEventsPostPath, 'post');
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
   * To access the full response (for headers, for example), `v1CalendarPersonsEventsPost$Json$Response()` instead.
   *
   * This method sends `application/json` and handles response body of type `application/json`
   */
  v1CalendarPersonsEventsPost$Json(params?: {

    body?: vwPersonsEvents
  }): Observable<void> {

    return this.v1CalendarPersonsEventsPost$Json$Response(params).pipe(
      map((r: StrictHttpResponse<void>) => r.body as void)
    );
  }

  /**
   * Path part for operation v1CalendarPersonsAvailabilityPost
   */
  static readonly V1CalendarPersonsAvailabilityPostPath = '/v1/Calendar/persons/availability';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `v1CalendarPersonsAvailabilityPost$Json()` instead.
   *
   * This method sends `application/json` and handles response body of type `application/json`
   */
  v1CalendarPersonsAvailabilityPost$Json$Response(params?: {

    body?: vwPersonsEvents
  }): Observable<StrictHttpResponse<void>> {

    const rb = new RequestBuilder(this.rootUrl, CalendarService.V1CalendarPersonsAvailabilityPostPath, 'post');
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
   * To access the full response (for headers, for example), `v1CalendarPersonsAvailabilityPost$Json$Response()` instead.
   *
   * This method sends `application/json` and handles response body of type `application/json`
   */
  v1CalendarPersonsAvailabilityPost$Json(params?: {

    body?: vwPersonsEvents
  }): Observable<void> {

    return this.v1CalendarPersonsAvailabilityPost$Json$Response(params).pipe(
      map((r: StrictHttpResponse<void>) => r.body as void)
    );
  }

  /**
   * Path part for operation v1CalendarEventsMatterEventIdGet
   */
  static readonly V1CalendarEventsMatterEventIdGetPath = '/v1/Calendar/events/{matterEventId}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `v1CalendarEventsMatterEventIdGet()` instead.
   *
   * This method doesn't expect any response body
   */
  v1CalendarEventsMatterEventIdGet$Response(params: {
    matterEventId: number;

  }): Observable<StrictHttpResponse<void>> {

    const rb = new RequestBuilder(this.rootUrl, CalendarService.V1CalendarEventsMatterEventIdGetPath, 'get');
    if (params) {

      rb.path('matterEventId', params.matterEventId);

    }
    return this.http.request(rb.build({
      responseType: 'text',
      accept: '*/*'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return (r as HttpResponse<any>).clone({ body: undefined }) as StrictHttpResponse<void>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `v1CalendarEventsMatterEventIdGet$Response()` instead.
   *
   * This method doesn't expect any response body
   */
  v1CalendarEventsMatterEventIdGet(params: {
    matterEventId: number;

  }): Observable<void> {

    return this.v1CalendarEventsMatterEventIdGet$Response(params).pipe(
      map((r: StrictHttpResponse<void>) => r.body as void)
    );
  }

  /**
   * Path part for operation v1CalendarUploadCalendarIdGet
   */
  static readonly V1CalendarUploadCalendarIdGetPath = '/v1/Calendar/upload/{calendarId}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `v1CalendarUploadCalendarIdGet()` instead.
   *
   * This method doesn't expect any response body
   */
  v1CalendarUploadCalendarIdGet$Response(params: {
    calendarId: number;

  }): Observable<StrictHttpResponse<void>> {

    const rb = new RequestBuilder(this.rootUrl, CalendarService.V1CalendarUploadCalendarIdGetPath, 'get');
    if (params) {

      rb.path('calendarId', params.calendarId);

    }
    return this.http.request(rb.build({
      responseType: 'text',
      accept: '*/*'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return (r as HttpResponse<any>).clone({ body: undefined }) as StrictHttpResponse<void>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `v1CalendarUploadCalendarIdGet$Response()` instead.
   *
   * This method doesn't expect any response body
   */
  v1CalendarUploadCalendarIdGet(params: {
    calendarId: number;

  }): Observable<void> {

    return this.v1CalendarUploadCalendarIdGet$Response(params).pipe(
      map((r: StrictHttpResponse<void>) => r.body as void)
    );
  }

  /**
   * Path part for operation v1CalendarUploadCalendarIdPost
   */
  static readonly V1CalendarUploadCalendarIdPostPath = '/v1/Calendar/upload/{calendarId}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `v1CalendarUploadCalendarIdPost()` instead.
   *
   * This method sends `multipart/form-data` and handles response body of type `multipart/form-data`
   */
  v1CalendarUploadCalendarIdPost$Response(params: {
    calendarId: number;

    body?: { 'ContentType': string, 'ContentDisposition': string, 'Headers': { [key: string]: Array<string> }, 'Length': number, 'Name': string, 'FileName': string }
  }): Observable<StrictHttpResponse<void>> {

    const rb = new RequestBuilder(this.rootUrl, CalendarService.V1CalendarUploadCalendarIdPostPath, 'post');
    if (params) {

      rb.path('calendarId', params.calendarId);

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
   * To access the full response (for headers, for example), `v1CalendarUploadCalendarIdPost$Response()` instead.
   *
   * This method sends `multipart/form-data` and handles response body of type `multipart/form-data`
   */
  v1CalendarUploadCalendarIdPost(params: {
    calendarId: number;

    body?: { 'ContentType': string, 'ContentDisposition': string, 'Headers': { [key: string]: Array<string> }, 'Length': number, 'Name': string, 'FileName': string }
  }): Observable<void> {

    return this.v1CalendarUploadCalendarIdPost$Response(params).pipe(
      map((r: StrictHttpResponse<void>) => r.body as void)
    );
  }

  /**
   * Path part for operation v1CalendarSettingsPersonIdGet
   */
  static readonly V1CalendarSettingsPersonIdGetPath = '/v1/Calendar/settings/{personId}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `v1CalendarSettingsPersonIdGet()` instead.
   *
   * This method doesn't expect any response body
   */
  v1CalendarSettingsPersonIdGet$Response(params: {
    personId: number;

  }): Observable<StrictHttpResponse<void>> {

    const rb = new RequestBuilder(this.rootUrl, CalendarService.V1CalendarSettingsPersonIdGetPath, 'get');
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
   * To access the full response (for headers, for example), `v1CalendarSettingsPersonIdGet$Response()` instead.
   *
   * This method doesn't expect any response body
   */
  v1CalendarSettingsPersonIdGet(params: {
    personId: number;

  }): Observable<void> {

    return this.v1CalendarSettingsPersonIdGet$Response(params).pipe(
      map((r: StrictHttpResponse<void>) => r.body as void)
    );
  }

  /**
   * Path part for operation v1CalendarSettingsCalendarViewPut
   */
  static readonly V1CalendarSettingsCalendarViewPutPath = '/v1/Calendar/settings/CalendarView';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `v1CalendarSettingsCalendarViewPut()` instead.
   *
   * This method doesn't expect any response body
   */
  v1CalendarSettingsCalendarViewPut$Response(params?: {
    personId?: number;
    calendarView?: number;

  }): Observable<StrictHttpResponse<void>> {

    const rb = new RequestBuilder(this.rootUrl, CalendarService.V1CalendarSettingsCalendarViewPutPath, 'put');
    if (params) {

      rb.query('personId', params.personId);
      rb.query('CalendarView', params.calendarView);

    }
    return this.http.request(rb.build({
      responseType: 'text',
      accept: '*/*'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return (r as HttpResponse<any>).clone({ body: undefined }) as StrictHttpResponse<void>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `v1CalendarSettingsCalendarViewPut$Response()` instead.
   *
   * This method doesn't expect any response body
   */
  v1CalendarSettingsCalendarViewPut(params?: {
    personId?: number;
    calendarView?: number;

  }): Observable<void> {

    return this.v1CalendarSettingsCalendarViewPut$Response(params).pipe(
      map((r: StrictHttpResponse<void>) => r.body as void)
    );
  }

  /**
   * Path part for operation v1CalendarSettingsIgnoretimezonecheckPut
   */
  static readonly V1CalendarSettingsIgnoretimezonecheckPutPath = '/v1/Calendar/settings/ignoretimezonecheck';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `v1CalendarSettingsIgnoretimezonecheckPut()` instead.
   *
   * This method doesn't expect any response body
   */
  v1CalendarSettingsIgnoretimezonecheckPut$Response(params?: {
    personId?: number;
    ignoreTimezoneCheck?: boolean;

  }): Observable<StrictHttpResponse<void>> {

    const rb = new RequestBuilder(this.rootUrl, CalendarService.V1CalendarSettingsIgnoretimezonecheckPutPath, 'put');
    if (params) {

      rb.query('personId', params.personId);
      rb.query('ignoreTimezoneCheck', params.ignoreTimezoneCheck);

    }
    return this.http.request(rb.build({
      responseType: 'text',
      accept: '*/*'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return (r as HttpResponse<any>).clone({ body: undefined }) as StrictHttpResponse<void>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `v1CalendarSettingsIgnoretimezonecheckPut$Response()` instead.
   *
   * This method doesn't expect any response body
   */
  v1CalendarSettingsIgnoretimezonecheckPut(params?: {
    personId?: number;
    ignoreTimezoneCheck?: boolean;

  }): Observable<void> {

    return this.v1CalendarSettingsIgnoretimezonecheckPut$Response(params).pipe(
      map((r: StrictHttpResponse<void>) => r.body as void)
    );
  }

  /**
   * Path part for operation v1CalendarInviteesVerifyPost
   */
  static readonly V1CalendarInviteesVerifyPostPath = '/v1/Calendar/invitees/verify';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `v1CalendarInviteesVerifyPost$Json()` instead.
   *
   * This method sends `application/json` and handles response body of type `application/json`
   */
  v1CalendarInviteesVerifyPost$Json$Response(params?: {

    body?: vwCalenderInviteeCheckRequest
  }): Observable<StrictHttpResponse<void>> {

    const rb = new RequestBuilder(this.rootUrl, CalendarService.V1CalendarInviteesVerifyPostPath, 'post');
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
   * To access the full response (for headers, for example), `v1CalendarInviteesVerifyPost$Json$Response()` instead.
   *
   * This method sends `application/json` and handles response body of type `application/json`
   */
  v1CalendarInviteesVerifyPost$Json(params?: {

    body?: vwCalenderInviteeCheckRequest
  }): Observable<void> {

    return this.v1CalendarInviteesVerifyPost$Json$Response(params).pipe(
      map((r: StrictHttpResponse<void>) => r.body as void)
    );
  }

  /**
   * Path part for operation v1CalendarSettingsPost
   */
  static readonly V1CalendarSettingsPostPath = '/v1/Calendar/settings';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `v1CalendarSettingsPost$Json()` instead.
   *
   * This method sends `application/json` and handles response body of type `application/json`
   */
  v1CalendarSettingsPost$Json$Response(params?: {

    body?: vwCalendarSettings
  }): Observable<StrictHttpResponse<void>> {

    const rb = new RequestBuilder(this.rootUrl, CalendarService.V1CalendarSettingsPostPath, 'post');
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
   * To access the full response (for headers, for example), `v1CalendarSettingsPost$Json$Response()` instead.
   *
   * This method sends `application/json` and handles response body of type `application/json`
   */
  v1CalendarSettingsPost$Json(params?: {

    body?: vwCalendarSettings
  }): Observable<void> {

    return this.v1CalendarSettingsPost$Json$Response(params).pipe(
      map((r: StrictHttpResponse<void>) => r.body as void)
    );
  }

  /**
   * Path part for operation v1CalendarSubscriptionsGet
   */
  static readonly V1CalendarSubscriptionsGetPath = '/v1/Calendar/subscriptions';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `v1CalendarSubscriptionsGet()` instead.
   *
   * This method doesn't expect any response body
   */
  v1CalendarSubscriptionsGet$Response(params?: {

  }): Observable<StrictHttpResponse<void>> {

    const rb = new RequestBuilder(this.rootUrl, CalendarService.V1CalendarSubscriptionsGetPath, 'get');
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
   * To access the full response (for headers, for example), `v1CalendarSubscriptionsGet$Response()` instead.
   *
   * This method doesn't expect any response body
   */
  v1CalendarSubscriptionsGet(params?: {

  }): Observable<void> {

    return this.v1CalendarSubscriptionsGet$Response(params).pipe(
      map((r: StrictHttpResponse<void>) => r.body as void)
    );
  }

  /**
   * Path part for operation v1CalendarSubscriptionsPost
   */
  static readonly V1CalendarSubscriptionsPostPath = '/v1/Calendar/subscriptions';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `v1CalendarSubscriptionsPost$Json()` instead.
   *
   * This method sends `application/json` and handles response body of type `application/json`
   */
  v1CalendarSubscriptionsPost$Json$Response(params?: {

    body?: vwCalendarSubscriptions
  }): Observable<StrictHttpResponse<void>> {

    const rb = new RequestBuilder(this.rootUrl, CalendarService.V1CalendarSubscriptionsPostPath, 'post');
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
   * To access the full response (for headers, for example), `v1CalendarSubscriptionsPost$Json$Response()` instead.
   *
   * This method sends `application/json` and handles response body of type `application/json`
   */
  v1CalendarSubscriptionsPost$Json(params?: {

    body?: vwCalendarSubscriptions
  }): Observable<void> {

    return this.v1CalendarSubscriptionsPost$Json$Response(params).pipe(
      map((r: StrictHttpResponse<void>) => r.body as void)
    );
  }

  /**
   * Path part for operation v1CalendarSubscriptionsColorPut
   */
  static readonly V1CalendarSubscriptionsColorPutPath = '/v1/Calendar/subscriptions/color';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `v1CalendarSubscriptionsColorPut$Json()` instead.
   *
   * This method sends `application/json` and handles response body of type `application/json`
   */
  v1CalendarSubscriptionsColorPut$Json$Response(params?: {

    body?: vwUpdateSubscriptionsColor
  }): Observable<StrictHttpResponse<void>> {

    const rb = new RequestBuilder(this.rootUrl, CalendarService.V1CalendarSubscriptionsColorPutPath, 'put');
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
   * To access the full response (for headers, for example), `v1CalendarSubscriptionsColorPut$Json$Response()` instead.
   *
   * This method sends `application/json` and handles response body of type `application/json`
   */
  v1CalendarSubscriptionsColorPut$Json(params?: {

    body?: vwUpdateSubscriptionsColor
  }): Observable<void> {

    return this.v1CalendarSubscriptionsColorPut$Json$Response(params).pipe(
      map((r: StrictHttpResponse<void>) => r.body as void)
    );
  }

  /**
   * Path part for operation v1CalendarSubscriptionsIdDelete
   */
  static readonly V1CalendarSubscriptionsIdDeletePath = '/v1/Calendar/subscriptions/{id}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `v1CalendarSubscriptionsIdDelete()` instead.
   *
   * This method doesn't expect any response body
   */
  v1CalendarSubscriptionsIdDelete$Response(params: {
    id: number;

  }): Observable<StrictHttpResponse<void>> {

    const rb = new RequestBuilder(this.rootUrl, CalendarService.V1CalendarSubscriptionsIdDeletePath, 'delete');
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
   * To access the full response (for headers, for example), `v1CalendarSubscriptionsIdDelete$Response()` instead.
   *
   * This method doesn't expect any response body
   */
  v1CalendarSubscriptionsIdDelete(params: {
    id: number;

  }): Observable<void> {

    return this.v1CalendarSubscriptionsIdDelete$Response(params).pipe(
      map((r: StrictHttpResponse<void>) => r.body as void)
    );
  }

  /**
   * Path part for operation v1CalendarAuthGet
   */
  static readonly V1CalendarAuthGetPath = '/v1/Calendar/Auth';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `v1CalendarAuthGet()` instead.
   *
   * This method doesn't expect any response body
   */
  v1CalendarAuthGet$Response(params?: {
    callbackUrl?: string;

  }): Observable<StrictHttpResponse<void>> {

    const rb = new RequestBuilder(this.rootUrl, CalendarService.V1CalendarAuthGetPath, 'get');
    if (params) {

      rb.query('CallbackUrl', params.callbackUrl);

    }
    return this.http.request(rb.build({
      responseType: 'text',
      accept: '*/*'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return (r as HttpResponse<any>).clone({ body: undefined }) as StrictHttpResponse<void>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `v1CalendarAuthGet$Response()` instead.
   *
   * This method doesn't expect any response body
   */
  v1CalendarAuthGet(params?: {
    callbackUrl?: string;

  }): Observable<void> {

    return this.v1CalendarAuthGet$Response(params).pipe(
      map((r: StrictHttpResponse<void>) => r.body as void)
    );
  }

  /**
   * Path part for operation v1CalendarAuthExternalGet
   */
  static readonly V1CalendarAuthExternalGetPath = '/v1/Calendar/AuthExternal';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `v1CalendarAuthExternalGet()` instead.
   *
   * This method doesn't expect any response body
   */
  v1CalendarAuthExternalGet$Response(params?: {
    callbackUrl?: string;

  }): Observable<StrictHttpResponse<void>> {

    const rb = new RequestBuilder(this.rootUrl, CalendarService.V1CalendarAuthExternalGetPath, 'get');
    if (params) {

      rb.query('CallbackUrl', params.callbackUrl);

    }
    return this.http.request(rb.build({
      responseType: 'text',
      accept: '*/*'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return (r as HttpResponse<any>).clone({ body: undefined }) as StrictHttpResponse<void>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `v1CalendarAuthExternalGet$Response()` instead.
   *
   * This method doesn't expect any response body
   */
  v1CalendarAuthExternalGet(params?: {
    callbackUrl?: string;

  }): Observable<void> {

    return this.v1CalendarAuthExternalGet$Response(params).pipe(
      map((r: StrictHttpResponse<void>) => r.body as void)
    );
  }

  /**
   * Path part for operation v1CalendarPersonIdGet
   */
  static readonly V1CalendarPersonIdGetPath = '/v1/Calendar/{personId}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `v1CalendarPersonIdGet()` instead.
   *
   * This method doesn't expect any response body
   */
  v1CalendarPersonIdGet$Response(params: {
    personId: number;
    uid?: string;

  }): Observable<StrictHttpResponse<void>> {

    const rb = new RequestBuilder(this.rootUrl, CalendarService.V1CalendarPersonIdGetPath, 'get');
    if (params) {

      rb.path('personId', params.personId);
      rb.query('UID', params.uid);

    }
    return this.http.request(rb.build({
      responseType: 'text',
      accept: '*/*'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return (r as HttpResponse<any>).clone({ body: undefined }) as StrictHttpResponse<void>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `v1CalendarPersonIdGet$Response()` instead.
   *
   * This method doesn't expect any response body
   */
  v1CalendarPersonIdGet(params: {
    personId: number;
    uid?: string;

  }): Observable<void> {

    return this.v1CalendarPersonIdGet$Response(params).pipe(
      map((r: StrictHttpResponse<void>) => r.body as void)
    );
  }

  /**
   * Path part for operation v1CalendarCalendarExternalPersonIdGet
   */
  static readonly V1CalendarCalendarExternalPersonIdGetPath = '/v1/Calendar/CalendarExternal/{personId}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `v1CalendarCalendarExternalPersonIdGet()` instead.
   *
   * This method doesn't expect any response body
   */
  v1CalendarCalendarExternalPersonIdGet$Response(params: {
    personId: number;
    uid?: string;
    connString?: string;

  }): Observable<StrictHttpResponse<void>> {

    const rb = new RequestBuilder(this.rootUrl, CalendarService.V1CalendarCalendarExternalPersonIdGetPath, 'get');
    if (params) {

      rb.path('personId', params.personId);
      rb.query('UID', params.uid);
      rb.query('connString', params.connString);

    }
    return this.http.request(rb.build({
      responseType: 'text',
      accept: '*/*'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return (r as HttpResponse<any>).clone({ body: undefined }) as StrictHttpResponse<void>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `v1CalendarCalendarExternalPersonIdGet$Response()` instead.
   *
   * This method doesn't expect any response body
   */
  v1CalendarCalendarExternalPersonIdGet(params: {
    personId: number;
    uid?: string;
    connString?: string;

  }): Observable<void> {

    return this.v1CalendarCalendarExternalPersonIdGet$Response(params).pipe(
      map((r: StrictHttpResponse<void>) => r.body as void)
    );
  }

  /**
   * Path part for operation v1CalendarChannelCallbackPost
   */
  static readonly V1CalendarChannelCallbackPostPath = '/v1/Calendar/ChannelCallback';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `v1CalendarChannelCallbackPost$Json()` instead.
   *
   * This method sends `application/json` and handles response body of type `application/json`
   */
  v1CalendarChannelCallbackPost$Json$Response(params?: {
    conn?: string;

    body?: vwChannelResponse
  }): Observable<StrictHttpResponse<void>> {

    const rb = new RequestBuilder(this.rootUrl, CalendarService.V1CalendarChannelCallbackPostPath, 'post');
    if (params) {

      rb.query('conn', params.conn);

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
   * To access the full response (for headers, for example), `v1CalendarChannelCallbackPost$Json$Response()` instead.
   *
   * This method sends `application/json` and handles response body of type `application/json`
   */
  v1CalendarChannelCallbackPost$Json(params?: {
    conn?: string;

    body?: vwChannelResponse
  }): Observable<void> {

    return this.v1CalendarChannelCallbackPost$Json$Response(params).pipe(
      map((r: StrictHttpResponse<void>) => r.body as void)
    );
  }

  /**
   * Path part for operation v1CalendarConfigurePost
   */
  static readonly V1CalendarConfigurePostPath = '/v1/Calendar/configure';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `v1CalendarConfigurePost$Json()` instead.
   *
   * This method sends `application/json` and handles response body of type `application/json`
   */
  v1CalendarConfigurePost$Json$Response(params?: {

    body?: vwPostCalendarData
  }): Observable<StrictHttpResponse<void>> {

    const rb = new RequestBuilder(this.rootUrl, CalendarService.V1CalendarConfigurePostPath, 'post');
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
   * To access the full response (for headers, for example), `v1CalendarConfigurePost$Json$Response()` instead.
   *
   * This method sends `application/json` and handles response body of type `application/json`
   */
  v1CalendarConfigurePost$Json(params?: {

    body?: vwPostCalendarData
  }): Observable<void> {

    return this.v1CalendarConfigurePost$Json$Response(params).pipe(
      map((r: StrictHttpResponse<void>) => r.body as void)
    );
  }

  /**
   * Path part for operation v1CalendarConfigureExternalPost
   */
  static readonly V1CalendarConfigureExternalPostPath = '/v1/Calendar/configureExternal';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `v1CalendarConfigureExternalPost$Json()` instead.
   *
   * This method sends `application/json` and handles response body of type `application/json`
   */
  v1CalendarConfigureExternalPost$Json$Response(params?: {

    body?: vwPostCalendarDataExternal
  }): Observable<StrictHttpResponse<void>> {

    const rb = new RequestBuilder(this.rootUrl, CalendarService.V1CalendarConfigureExternalPostPath, 'post');
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
   * To access the full response (for headers, for example), `v1CalendarConfigureExternalPost$Json$Response()` instead.
   *
   * This method sends `application/json` and handles response body of type `application/json`
   */
  v1CalendarConfigureExternalPost$Json(params?: {

    body?: vwPostCalendarDataExternal
  }): Observable<void> {

    return this.v1CalendarConfigureExternalPost$Json$Response(params).pipe(
      map((r: StrictHttpResponse<void>) => r.body as void)
    );
  }

  /**
   * Path part for operation v1CalendarRevokeIdDelete
   */
  static readonly V1CalendarRevokeIdDeletePath = '/v1/Calendar/revoke/{id}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `v1CalendarRevokeIdDelete()` instead.
   *
   * This method doesn't expect any response body
   */
  v1CalendarRevokeIdDelete$Response(params: {
    id: number;
    profileId?: string;

  }): Observable<StrictHttpResponse<void>> {

    const rb = new RequestBuilder(this.rootUrl, CalendarService.V1CalendarRevokeIdDeletePath, 'delete');
    if (params) {

      rb.path('id', params.id);
      rb.query('profileId', params.profileId);

    }
    return this.http.request(rb.build({
      responseType: 'text',
      accept: '*/*'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return (r as HttpResponse<any>).clone({ body: undefined }) as StrictHttpResponse<void>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `v1CalendarRevokeIdDelete$Response()` instead.
   *
   * This method doesn't expect any response body
   */
  v1CalendarRevokeIdDelete(params: {
    id: number;
    profileId?: string;

  }): Observable<void> {

    return this.v1CalendarRevokeIdDelete$Response(params).pipe(
      map((r: StrictHttpResponse<void>) => r.body as void)
    );
  }

  /**
   * Path part for operation v1CalendarRevokeExistingPlatformsPost
   */
  static readonly V1CalendarRevokeExistingPlatformsPostPath = '/v1/Calendar/revoke/existing/platforms';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `v1CalendarRevokeExistingPlatformsPost$Json()` instead.
   *
   * This method sends `application/json` and handles response body of type `application/json`
   */
  v1CalendarRevokeExistingPlatformsPost$Json$Response(params?: {

    body?: Array<string>
  }): Observable<StrictHttpResponse<void>> {

    const rb = new RequestBuilder(this.rootUrl, CalendarService.V1CalendarRevokeExistingPlatformsPostPath, 'post');
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
   * To access the full response (for headers, for example), `v1CalendarRevokeExistingPlatformsPost$Json$Response()` instead.
   *
   * This method sends `application/json` and handles response body of type `application/json`
   */
  v1CalendarRevokeExistingPlatformsPost$Json(params?: {

    body?: Array<string>
  }): Observable<void> {

    return this.v1CalendarRevokeExistingPlatformsPost$Json$Response(params).pipe(
      map((r: StrictHttpResponse<void>) => r.body as void)
    );
  }

  /**
   * Path part for operation v1CalendarEventsAddproposedtimePost
   */
  static readonly V1CalendarEventsAddproposedtimePostPath = '/v1/Calendar/events/addproposedtime';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `v1CalendarEventsAddproposedtimePost$Json()` instead.
   *
   * This method sends `application/json` and handles response body of type `application/json`
   */
  v1CalendarEventsAddproposedtimePost$Json$Response(params?: {

    body?: vwMatterEventsProposedTime
  }): Observable<StrictHttpResponse<void>> {

    const rb = new RequestBuilder(this.rootUrl, CalendarService.V1CalendarEventsAddproposedtimePostPath, 'post');
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
   * To access the full response (for headers, for example), `v1CalendarEventsAddproposedtimePost$Json$Response()` instead.
   *
   * This method sends `application/json` and handles response body of type `application/json`
   */
  v1CalendarEventsAddproposedtimePost$Json(params?: {

    body?: vwMatterEventsProposedTime
  }): Observable<void> {

    return this.v1CalendarEventsAddproposedtimePost$Json$Response(params).pipe(
      map((r: StrictHttpResponse<void>) => r.body as void)
    );
  }

  /**
   * Path part for operation v1CalendarEventsProposedtimeListGet
   */
  static readonly V1CalendarEventsProposedtimeListGetPath = '/v1/Calendar/events/proposedtime/list';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `v1CalendarEventsProposedtimeListGet()` instead.
   *
   * This method doesn't expect any response body
   */
  v1CalendarEventsProposedtimeListGet$Response(params?: {
    eventId?: number;

  }): Observable<StrictHttpResponse<void>> {

    const rb = new RequestBuilder(this.rootUrl, CalendarService.V1CalendarEventsProposedtimeListGetPath, 'get');
    if (params) {

      rb.query('eventId', params.eventId);

    }
    return this.http.request(rb.build({
      responseType: 'text',
      accept: '*/*'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return (r as HttpResponse<any>).clone({ body: undefined }) as StrictHttpResponse<void>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `v1CalendarEventsProposedtimeListGet$Response()` instead.
   *
   * This method doesn't expect any response body
   */
  v1CalendarEventsProposedtimeListGet(params?: {
    eventId?: number;

  }): Observable<void> {

    return this.v1CalendarEventsProposedtimeListGet$Response(params).pipe(
      map((r: StrictHttpResponse<void>) => r.body as void)
    );
  }

  /**
   * Path part for operation v1CalendarEventsProposedtimeIdGet
   */
  static readonly V1CalendarEventsProposedtimeIdGetPath = '/v1/Calendar/events/proposedtime/{id}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `v1CalendarEventsProposedtimeIdGet()` instead.
   *
   * This method doesn't expect any response body
   */
  v1CalendarEventsProposedtimeIdGet$Response(params: {
    id: number;

  }): Observable<StrictHttpResponse<void>> {

    const rb = new RequestBuilder(this.rootUrl, CalendarService.V1CalendarEventsProposedtimeIdGetPath, 'get');
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
   * To access the full response (for headers, for example), `v1CalendarEventsProposedtimeIdGet$Response()` instead.
   *
   * This method doesn't expect any response body
   */
  v1CalendarEventsProposedtimeIdGet(params: {
    id: number;

  }): Observable<void> {

    return this.v1CalendarEventsProposedtimeIdGet$Response(params).pipe(
      map((r: StrictHttpResponse<void>) => r.body as void)
    );
  }

  /**
   * Path part for operation v1CalendarEventsProposedtimeIdDelete
   */
  static readonly V1CalendarEventsProposedtimeIdDeletePath = '/v1/Calendar/events/proposedtime/{id}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `v1CalendarEventsProposedtimeIdDelete()` instead.
   *
   * This method doesn't expect any response body
   */
  v1CalendarEventsProposedtimeIdDelete$Response(params: {
    id: number;

  }): Observable<StrictHttpResponse<void>> {

    const rb = new RequestBuilder(this.rootUrl, CalendarService.V1CalendarEventsProposedtimeIdDeletePath, 'delete');
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
   * To access the full response (for headers, for example), `v1CalendarEventsProposedtimeIdDelete$Response()` instead.
   *
   * This method doesn't expect any response body
   */
  v1CalendarEventsProposedtimeIdDelete(params: {
    id: number;

  }): Observable<void> {

    return this.v1CalendarEventsProposedtimeIdDelete$Response(params).pipe(
      map((r: StrictHttpResponse<void>) => r.body as void)
    );
  }

  /**
   * Path part for operation v1CalendarNotificationEventSpecificGet
   */
  static readonly V1CalendarNotificationEventSpecificGetPath = '/v1/Calendar/NotificationEventSpecific';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `v1CalendarNotificationEventSpecificGet()` instead.
   *
   * This method doesn't expect any response body
   */
  v1CalendarNotificationEventSpecificGet$Response(params?: {
    utcDate?: string;

  }): Observable<StrictHttpResponse<void>> {

    const rb = new RequestBuilder(this.rootUrl, CalendarService.V1CalendarNotificationEventSpecificGetPath, 'get');
    if (params) {

      rb.query('utcDate', params.utcDate);

    }
    return this.http.request(rb.build({
      responseType: 'text',
      accept: '*/*'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return (r as HttpResponse<any>).clone({ body: undefined }) as StrictHttpResponse<void>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `v1CalendarNotificationEventSpecificGet$Response()` instead.
   *
   * This method doesn't expect any response body
   */
  v1CalendarNotificationEventSpecificGet(params?: {
    utcDate?: string;

  }): Observable<void> {

    return this.v1CalendarNotificationEventSpecificGet$Response(params).pipe(
      map((r: StrictHttpResponse<void>) => r.body as void)
    );
  }

  /**
   * Path part for operation v1CalendarManageConsultationEventGet
   */
  static readonly V1CalendarManageConsultationEventGetPath = '/v1/Calendar/ManageConsultationEvent';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `v1CalendarManageConsultationEventGet()` instead.
   *
   * This method doesn't expect any response body
   */
  v1CalendarManageConsultationEventGet$Response(params?: {
    utcDate?: string;

  }): Observable<StrictHttpResponse<void>> {

    const rb = new RequestBuilder(this.rootUrl, CalendarService.V1CalendarManageConsultationEventGetPath, 'get');
    if (params) {

      rb.query('utcDate', params.utcDate);

    }
    return this.http.request(rb.build({
      responseType: 'text',
      accept: '*/*'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return (r as HttpResponse<any>).clone({ body: undefined }) as StrictHttpResponse<void>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `v1CalendarManageConsultationEventGet$Response()` instead.
   *
   * This method doesn't expect any response body
   */
  v1CalendarManageConsultationEventGet(params?: {
    utcDate?: string;

  }): Observable<void> {

    return this.v1CalendarManageConsultationEventGet$Response(params).pipe(
      map((r: StrictHttpResponse<void>) => r.body as void)
    );
  }

  /**
   * Path part for operation v1CalendarUpcomingEventsClientIdGet
   */
  static readonly V1CalendarUpcomingEventsClientIdGetPath = '/v1/Calendar/UpcomingEvents/{clientId}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `v1CalendarUpcomingEventsClientIdGet()` instead.
   *
   * This method doesn't expect any response body
   */
  v1CalendarUpcomingEventsClientIdGet$Response(params: {
    clientId: number;

  }): Observable<StrictHttpResponse<void>> {

    const rb = new RequestBuilder(this.rootUrl, CalendarService.V1CalendarUpcomingEventsClientIdGetPath, 'get');
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
   * To access the full response (for headers, for example), `v1CalendarUpcomingEventsClientIdGet$Response()` instead.
   *
   * This method doesn't expect any response body
   */
  v1CalendarUpcomingEventsClientIdGet(params: {
    clientId: number;

  }): Observable<void> {

    return this.v1CalendarUpcomingEventsClientIdGet$Response(params).pipe(
      map((r: StrictHttpResponse<void>) => r.body as void)
    );
  }

}
