/* tslint:disable */
import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { BaseService } from '../base-service';
import { ApiConfiguration } from '../api-configuration';
import { StrictHttpResponse } from '../strict-http-response';
import { RequestBuilder } from '../request-builder';
import { Observable } from 'rxjs';
import { map, filter } from 'rxjs/operators';

import { vwMessage } from '../models/vw-message';
import { vwMessageThread } from '../models/vw-message-thread';

@Injectable({
  providedIn: 'root',
})
export class MessageService extends BaseService {
  constructor(
    config: ApiConfiguration,
    http: HttpClient
  ) {
    super(config, http);
  }

  /**
   * Path part for operation v1MessageIsUnReadMessageOrEnabledGet
   */
  static readonly V1MessageIsUnReadMessageOrEnabledGetPath = '/v1/message/isUnReadMessageOrEnabled';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `v1MessageIsUnReadMessageOrEnabledGet()` instead.
   *
   * This method doesn't expect any response body
   */
  v1MessageIsUnReadMessageOrEnabledGet$Response(params?: {

  }): Observable<StrictHttpResponse<void>> {

    const rb = new RequestBuilder(this.rootUrl, MessageService.V1MessageIsUnReadMessageOrEnabledGetPath, 'get');
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
   * To access the full response (for headers, for example), `v1MessageIsUnReadMessageOrEnabledGet$Response()` instead.
   *
   * This method doesn't expect any response body
   */
  v1MessageIsUnReadMessageOrEnabledGet(params?: {

  }): Observable<void> {

    return this.v1MessageIsUnReadMessageOrEnabledGet$Response(params).pipe(
      map((r: StrictHttpResponse<void>) => r.body as void)
    );
  }

  /**
   * Path part for operation v1MessageRecentThreadsGet
   */
  static readonly V1MessageRecentThreadsGetPath = '/v1/message/recentThreads';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `v1MessageRecentThreadsGet()` instead.
   *
   * This method doesn't expect any response body
   */
  v1MessageRecentThreadsGet$Response(params?: {

  }): Observable<StrictHttpResponse<void>> {

    const rb = new RequestBuilder(this.rootUrl, MessageService.V1MessageRecentThreadsGetPath, 'get');
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
   * To access the full response (for headers, for example), `v1MessageRecentThreadsGet$Response()` instead.
   *
   * This method doesn't expect any response body
   */
  v1MessageRecentThreadsGet(params?: {

  }): Observable<void> {

    return this.v1MessageRecentThreadsGet$Response(params).pipe(
      map((r: StrictHttpResponse<void>) => r.body as void)
    );
  }

  /**
   * Path part for operation v1MessageSummaryGet
   */
  static readonly V1MessageSummaryGetPath = '/v1/message/summary';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `v1MessageSummaryGet()` instead.
   *
   * This method doesn't expect any response body
   */
  v1MessageSummaryGet$Response(params?: {

  }): Observable<StrictHttpResponse<void>> {

    const rb = new RequestBuilder(this.rootUrl, MessageService.V1MessageSummaryGetPath, 'get');
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
   * To access the full response (for headers, for example), `v1MessageSummaryGet$Response()` instead.
   *
   * This method doesn't expect any response body
   */
  v1MessageSummaryGet(params?: {

  }): Observable<void> {

    return this.v1MessageSummaryGet$Response(params).pipe(
      map((r: StrictHttpResponse<void>) => r.body as void)
    );
  }

  /**
   * Path part for operation v1MessageStartClientThreadPost
   */
  static readonly V1MessageStartClientThreadPostPath = '/v1/message/start-client-thread';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `v1MessageStartClientThreadPost$Json()` instead.
   *
   * This method sends `application/json` and handles response body of type `application/json`
   */
  v1MessageStartClientThreadPost$Json$Response(params?: {

    body?: vwMessageThread
  }): Observable<StrictHttpResponse<void>> {

    const rb = new RequestBuilder(this.rootUrl, MessageService.V1MessageStartClientThreadPostPath, 'post');
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
   * To access the full response (for headers, for example), `v1MessageStartClientThreadPost$Json$Response()` instead.
   *
   * This method sends `application/json` and handles response body of type `application/json`
   */
  v1MessageStartClientThreadPost$Json(params?: {

    body?: vwMessageThread
  }): Observable<void> {

    return this.v1MessageStartClientThreadPost$Json$Response(params).pipe(
      map((r: StrictHttpResponse<void>) => r.body as void)
    );
  }

  /**
   * Path part for operation v1MessageThreadThreadIdGet
   */
  static readonly V1MessageThreadThreadIdGetPath = '/v1/message/thread/{threadId}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `v1MessageThreadThreadIdGet()` instead.
   *
   * This method doesn't expect any response body
   */
  v1MessageThreadThreadIdGet$Response(params: {
    threadId: number;

  }): Observable<StrictHttpResponse<void>> {

    const rb = new RequestBuilder(this.rootUrl, MessageService.V1MessageThreadThreadIdGetPath, 'get');
    if (params) {

      rb.path('threadId', params.threadId);

    }
    return this.http.request(rb.build({
      responseType: 'text',
      accept: '*/*'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return (r as HttpResponse<any>).clone({ body: undefined }) as StrictHttpResponse<void>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `v1MessageThreadThreadIdGet$Response()` instead.
   *
   * This method doesn't expect any response body
   */
  v1MessageThreadThreadIdGet(params: {
    threadId: number;

  }): Observable<void> {

    return this.v1MessageThreadThreadIdGet$Response(params).pipe(
      map((r: StrictHttpResponse<void>) => r.body as void)
    );
  }

  /**
   * Path part for operation v1MessageThreadThreadIdPostThreadMessagePost
   */
  static readonly V1MessageThreadThreadIdPostThreadMessagePostPath = '/v1/message/thread/{threadId}/post-thread-message';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `v1MessageThreadThreadIdPostThreadMessagePost$Json()` instead.
   *
   * This method sends `application/json` and handles response body of type `application/json`
   */
  v1MessageThreadThreadIdPostThreadMessagePost$Json$Response(params: {
    threadId: number;

    body?: vwMessage
  }): Observable<StrictHttpResponse<void>> {

    const rb = new RequestBuilder(this.rootUrl, MessageService.V1MessageThreadThreadIdPostThreadMessagePostPath, 'post');
    if (params) {

      rb.path('threadId', params.threadId);

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
   * To access the full response (for headers, for example), `v1MessageThreadThreadIdPostThreadMessagePost$Json$Response()` instead.
   *
   * This method sends `application/json` and handles response body of type `application/json`
   */
  v1MessageThreadThreadIdPostThreadMessagePost$Json(params: {
    threadId: number;

    body?: vwMessage
  }): Observable<void> {

    return this.v1MessageThreadThreadIdPostThreadMessagePost$Json$Response(params).pipe(
      map((r: StrictHttpResponse<void>) => r.body as void)
    );
  }

  /**
   * Path part for operation v1MessageThreadThreadIdMarkAsReadPut
   */
  static readonly V1MessageThreadThreadIdMarkAsReadPutPath = '/v1/message/thread/{threadId}/mark-as-read';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `v1MessageThreadThreadIdMarkAsReadPut()` instead.
   *
   * This method doesn't expect any response body
   */
  v1MessageThreadThreadIdMarkAsReadPut$Response(params: {
    threadId: number;

  }): Observable<StrictHttpResponse<void>> {

    const rb = new RequestBuilder(this.rootUrl, MessageService.V1MessageThreadThreadIdMarkAsReadPutPath, 'put');
    if (params) {

      rb.path('threadId', params.threadId);

    }
    return this.http.request(rb.build({
      responseType: 'text',
      accept: '*/*'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return (r as HttpResponse<any>).clone({ body: undefined }) as StrictHttpResponse<void>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `v1MessageThreadThreadIdMarkAsReadPut$Response()` instead.
   *
   * This method doesn't expect any response body
   */
  v1MessageThreadThreadIdMarkAsReadPut(params: {
    threadId: number;

  }): Observable<void> {

    return this.v1MessageThreadThreadIdMarkAsReadPut$Response(params).pipe(
      map((r: StrictHttpResponse<void>) => r.body as void)
    );
  }

  /**
   * Path part for operation v1MessageContactInfoMatterIdGet
   */
  static readonly V1MessageContactInfoMatterIdGetPath = '/v1/message/contactInfo/{matterId}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `v1MessageContactInfoMatterIdGet()` instead.
   *
   * This method doesn't expect any response body
   */
  v1MessageContactInfoMatterIdGet$Response(params: {
    matterId: number;

  }): Observable<StrictHttpResponse<void>> {

    const rb = new RequestBuilder(this.rootUrl, MessageService.V1MessageContactInfoMatterIdGetPath, 'get');
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
   * To access the full response (for headers, for example), `v1MessageContactInfoMatterIdGet$Response()` instead.
   *
   * This method doesn't expect any response body
   */
  v1MessageContactInfoMatterIdGet(params: {
    matterId: number;

  }): Observable<void> {

    return this.v1MessageContactInfoMatterIdGet$Response(params).pipe(
      map((r: StrictHttpResponse<void>) => r.body as void)
    );
  }

}
