/* tslint:disable */
import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { BaseService } from '../base-service';
import { ApiConfiguration } from '../api-configuration';
import { StrictHttpResponse } from '../strict-http-response';
import { RequestBuilder } from '../request-builder';
import { Observable } from 'rxjs';
import { map, filter } from 'rxjs/operators';


@Injectable({
  providedIn: 'root',
})
export class NotificationService extends BaseService {
  constructor(
    config: ApiConfiguration,
    http: HttpClient
  ) {
    super(config, http);
  }

  /**
   * Path part for operation v1NotificationGet
   */
  static readonly V1NotificationGetPath = '/v1/Notification';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `v1NotificationGet()` instead.
   *
   * This method doesn't expect any response body
   */
  v1NotificationGet$Response(params?: {
    startDate?: string;
    endDate?: string;
    notificationType?: string;

  }): Observable<StrictHttpResponse<void>> {

    const rb = new RequestBuilder(this.rootUrl, NotificationService.V1NotificationGetPath, 'get');
    if (params) {

      rb.query('startDate', params.startDate);
      rb.query('endDate', params.endDate);
      rb.query('notificationType', params.notificationType);

    }
    return this.http.request(rb.build({
      responseType: 'text',
      accept: '*/*'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return (r as HttpResponse<any>).clone({ body: undefined }) as StrictHttpResponse<void>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `v1NotificationGet$Response()` instead.
   *
   * This method doesn't expect any response body
   */
  v1NotificationGet(params?: {
    startDate?: string;
    endDate?: string;
    notificationType?: string;

  }): Observable<void> {

    return this.v1NotificationGet$Response(params).pipe(
      map((r: StrictHttpResponse<void>) => r.body as void)
    );
  }

  /**
   * Path part for operation v1NotificationAllGet
   */
  static readonly V1NotificationAllGetPath = '/v1/Notification/all';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `v1NotificationAllGet()` instead.
   *
   * This method doesn't expect any response body
   */
  v1NotificationAllGet$Response(params?: {

  }): Observable<StrictHttpResponse<void>> {

    const rb = new RequestBuilder(this.rootUrl, NotificationService.V1NotificationAllGetPath, 'get');
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
   * To access the full response (for headers, for example), `v1NotificationAllGet$Response()` instead.
   *
   * This method doesn't expect any response body
   */
  v1NotificationAllGet(params?: {

  }): Observable<void> {

    return this.v1NotificationAllGet$Response(params).pipe(
      map((r: StrictHttpResponse<void>) => r.body as void)
    );
  }

  /**
   * Path part for operation v1NotificationMarkPersonIdNotificationIdGet
   */
  static readonly V1NotificationMarkPersonIdNotificationIdGetPath = '/v1/Notification/mark/{personId}/{notificationId}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `v1NotificationMarkPersonIdNotificationIdGet()` instead.
   *
   * This method doesn't expect any response body
   */
  v1NotificationMarkPersonIdNotificationIdGet$Response(params: {
    personId: number;
    notificationId: number;
    markAsRead?: boolean;

  }): Observable<StrictHttpResponse<void>> {

    const rb = new RequestBuilder(this.rootUrl, NotificationService.V1NotificationMarkPersonIdNotificationIdGetPath, 'get');
    if (params) {

      rb.path('personId', params.personId);
      rb.path('notificationId', params.notificationId);
      rb.query('markAsRead', params.markAsRead);

    }
    return this.http.request(rb.build({
      responseType: 'text',
      accept: '*/*'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return (r as HttpResponse<any>).clone({ body: undefined }) as StrictHttpResponse<void>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `v1NotificationMarkPersonIdNotificationIdGet$Response()` instead.
   *
   * This method doesn't expect any response body
   */
  v1NotificationMarkPersonIdNotificationIdGet(params: {
    personId: number;
    notificationId: number;
    markAsRead?: boolean;

  }): Observable<void> {

    return this.v1NotificationMarkPersonIdNotificationIdGet$Response(params).pipe(
      map((r: StrictHttpResponse<void>) => r.body as void)
    );
  }

  /**
   * Path part for operation v1NotificationEmailGet
   */
  static readonly V1NotificationEmailGetPath = '/v1/Notification/email';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `v1NotificationEmailGet()` instead.
   *
   * This method doesn't expect any response body
   */
  v1NotificationEmailGet$Response(params?: {

  }): Observable<StrictHttpResponse<void>> {

    const rb = new RequestBuilder(this.rootUrl, NotificationService.V1NotificationEmailGetPath, 'get');
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
   * To access the full response (for headers, for example), `v1NotificationEmailGet$Response()` instead.
   *
   * This method doesn't expect any response body
   */
  v1NotificationEmailGet(params?: {

  }): Observable<void> {

    return this.v1NotificationEmailGet$Response(params).pipe(
      map((r: StrictHttpResponse<void>) => r.body as void)
    );
  }

  /**
   * Path part for operation v1NotificationEmailGroupIdGet
   */
  static readonly V1NotificationEmailGroupIdGetPath = '/v1/Notification/email/{groupId}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `v1NotificationEmailGroupIdGet()` instead.
   *
   * This method doesn't expect any response body
   */
  v1NotificationEmailGroupIdGet$Response(params: {
    groupId: number;

  }): Observable<StrictHttpResponse<void>> {

    const rb = new RequestBuilder(this.rootUrl, NotificationService.V1NotificationEmailGroupIdGetPath, 'get');
    if (params) {

      rb.path('groupId', params.groupId);

    }
    return this.http.request(rb.build({
      responseType: 'text',
      accept: '*/*'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return (r as HttpResponse<any>).clone({ body: undefined }) as StrictHttpResponse<void>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `v1NotificationEmailGroupIdGet$Response()` instead.
   *
   * This method doesn't expect any response body
   */
  v1NotificationEmailGroupIdGet(params: {
    groupId: number;

  }): Observable<void> {

    return this.v1NotificationEmailGroupIdGet$Response(params).pipe(
      map((r: StrictHttpResponse<void>) => r.body as void)
    );
  }

  /**
   * Path part for operation v1NotificationEmailSecurityGroupIdNotificationIdPost
   */
  static readonly V1NotificationEmailSecurityGroupIdNotificationIdPostPath = '/v1/Notification/email/{securityGroupId}/{notificationId}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `v1NotificationEmailSecurityGroupIdNotificationIdPost()` instead.
   *
   * This method doesn't expect any response body
   */
  v1NotificationEmailSecurityGroupIdNotificationIdPost$Response(params: {
    securityGroupId: number;
    notificationId: number;

  }): Observable<StrictHttpResponse<void>> {

    const rb = new RequestBuilder(this.rootUrl, NotificationService.V1NotificationEmailSecurityGroupIdNotificationIdPostPath, 'post');
    if (params) {

      rb.path('securityGroupId', params.securityGroupId);
      rb.path('notificationId', params.notificationId);

    }
    return this.http.request(rb.build({
      responseType: 'text',
      accept: '*/*'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return (r as HttpResponse<any>).clone({ body: undefined }) as StrictHttpResponse<void>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `v1NotificationEmailSecurityGroupIdNotificationIdPost$Response()` instead.
   *
   * This method doesn't expect any response body
   */
  v1NotificationEmailSecurityGroupIdNotificationIdPost(params: {
    securityGroupId: number;
    notificationId: number;

  }): Observable<void> {

    return this.v1NotificationEmailSecurityGroupIdNotificationIdPost$Response(params).pipe(
      map((r: StrictHttpResponse<void>) => r.body as void)
    );
  }

  /**
   * Path part for operation v1NotificationEmailSecurityGroupIdNotificationIdDelete
   */
  static readonly V1NotificationEmailSecurityGroupIdNotificationIdDeletePath = '/v1/Notification/email/{securityGroupId}/{notificationId}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `v1NotificationEmailSecurityGroupIdNotificationIdDelete()` instead.
   *
   * This method doesn't expect any response body
   */
  v1NotificationEmailSecurityGroupIdNotificationIdDelete$Response(params: {
    securityGroupId: number;
    notificationId: number;

  }): Observable<StrictHttpResponse<void>> {

    const rb = new RequestBuilder(this.rootUrl, NotificationService.V1NotificationEmailSecurityGroupIdNotificationIdDeletePath, 'delete');
    if (params) {

      rb.path('securityGroupId', params.securityGroupId);
      rb.path('notificationId', params.notificationId);

    }
    return this.http.request(rb.build({
      responseType: 'text',
      accept: '*/*'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return (r as HttpResponse<any>).clone({ body: undefined }) as StrictHttpResponse<void>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `v1NotificationEmailSecurityGroupIdNotificationIdDelete$Response()` instead.
   *
   * This method doesn't expect any response body
   */
  v1NotificationEmailSecurityGroupIdNotificationIdDelete(params: {
    securityGroupId: number;
    notificationId: number;

  }): Observable<void> {

    return this.v1NotificationEmailSecurityGroupIdNotificationIdDelete$Response(params).pipe(
      map((r: StrictHttpResponse<void>) => r.body as void)
    );
  }

  /**
   * Path part for operation v1NotificationGetUnreadNotificationCountBellIconGet
   */
  static readonly V1NotificationGetUnreadNotificationCountBellIconGetPath = '/v1/Notification/GetUnreadNotificationCountBellIcon';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `v1NotificationGetUnreadNotificationCountBellIconGet()` instead.
   *
   * This method doesn't expect any response body
   */
  v1NotificationGetUnreadNotificationCountBellIconGet$Response(params?: {

  }): Observable<StrictHttpResponse<void>> {

    const rb = new RequestBuilder(this.rootUrl, NotificationService.V1NotificationGetUnreadNotificationCountBellIconGetPath, 'get');
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
   * To access the full response (for headers, for example), `v1NotificationGetUnreadNotificationCountBellIconGet$Response()` instead.
   *
   * This method doesn't expect any response body
   */
  v1NotificationGetUnreadNotificationCountBellIconGet(params?: {

  }): Observable<void> {

    return this.v1NotificationGetUnreadNotificationCountBellIconGet$Response(params).pipe(
      map((r: StrictHttpResponse<void>) => r.body as void)
    );
  }

  /**
   * Path part for operation v1NotificationGetNotificationReadUnreadGet
   */
  static readonly V1NotificationGetNotificationReadUnreadGetPath = '/v1/Notification/GetNotificationReadUnread';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `v1NotificationGetNotificationReadUnreadGet()` instead.
   *
   * This method doesn't expect any response body
   */
  v1NotificationGetNotificationReadUnreadGet$Response(params?: {
    isAll?: boolean;

  }): Observable<StrictHttpResponse<void>> {

    const rb = new RequestBuilder(this.rootUrl, NotificationService.V1NotificationGetNotificationReadUnreadGetPath, 'get');
    if (params) {

      rb.query('isAll', params.isAll);

    }
    return this.http.request(rb.build({
      responseType: 'text',
      accept: '*/*'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return (r as HttpResponse<any>).clone({ body: undefined }) as StrictHttpResponse<void>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `v1NotificationGetNotificationReadUnreadGet$Response()` instead.
   *
   * This method doesn't expect any response body
   */
  v1NotificationGetNotificationReadUnreadGet(params?: {
    isAll?: boolean;

  }): Observable<void> {

    return this.v1NotificationGetNotificationReadUnreadGet$Response(params).pipe(
      map((r: StrictHttpResponse<void>) => r.body as void)
    );
  }

  /**
   * Path part for operation v1NotificationUpdateMarkAsReadPut
   */
  static readonly V1NotificationUpdateMarkAsReadPutPath = '/v1/Notification/UpdateMarkAsRead';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `v1NotificationUpdateMarkAsReadPut$Json()` instead.
   *
   * This method sends `application/json` and handles response body of type `application/json`
   */
  v1NotificationUpdateMarkAsReadPut$Json$Response(params?: {

    body?: Array<number>
  }): Observable<StrictHttpResponse<void>> {

    const rb = new RequestBuilder(this.rootUrl, NotificationService.V1NotificationUpdateMarkAsReadPutPath, 'put');
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
   * To access the full response (for headers, for example), `v1NotificationUpdateMarkAsReadPut$Json$Response()` instead.
   *
   * This method sends `application/json` and handles response body of type `application/json`
   */
  v1NotificationUpdateMarkAsReadPut$Json(params?: {

    body?: Array<number>
  }): Observable<void> {

    return this.v1NotificationUpdateMarkAsReadPut$Json$Response(params).pipe(
      map((r: StrictHttpResponse<void>) => r.body as void)
    );
  }

  /**
   * Path part for operation v1NotificationInappMatterIdGet
   */
  static readonly V1NotificationInappMatterIdGetPath = '/v1/Notification/inapp/{matterId}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `v1NotificationInappMatterIdGet()` instead.
   *
   * This method doesn't expect any response body
   */
  v1NotificationInappMatterIdGet$Response(params: {
    matterId: number;

  }): Observable<StrictHttpResponse<void>> {

    const rb = new RequestBuilder(this.rootUrl, NotificationService.V1NotificationInappMatterIdGetPath, 'get');
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
   * To access the full response (for headers, for example), `v1NotificationInappMatterIdGet$Response()` instead.
   *
   * This method doesn't expect any response body
   */
  v1NotificationInappMatterIdGet(params: {
    matterId: number;

  }): Observable<void> {

    return this.v1NotificationInappMatterIdGet$Response(params).pipe(
      map((r: StrictHttpResponse<void>) => r.body as void)
    );
  }

}
