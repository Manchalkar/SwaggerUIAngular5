/* tslint:disable */
import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { BaseService } from '../base-service';
import { ApiConfiguration } from '../api-configuration';
import { StrictHttpResponse } from '../strict-http-response';
import { RequestBuilder } from '../request-builder';
import { Observable } from 'rxjs';
import { map, filter } from 'rxjs/operators';

import { vwClientPortalTask } from '../models/vw-client-portal-task';

@Injectable({
  providedIn: 'root',
})
export class TaskService extends BaseService {
  constructor(
    config: ApiConfiguration,
    http: HttpClient
  ) {
    super(config, http);
  }

  /**
   * Path part for operation v1TaskAllTaskClientIdGet
   */
  static readonly V1TaskAllTaskClientIdGetPath = '/v1/Task/allTask/{clientId}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `v1TaskAllTaskClientIdGet()` instead.
   *
   * This method doesn't expect any response body
   */
  v1TaskAllTaskClientIdGet$Response(params: {
    clientId: number;

  }): Observable<StrictHttpResponse<void>> {

    const rb = new RequestBuilder(this.rootUrl, TaskService.V1TaskAllTaskClientIdGetPath, 'get');
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
   * To access the full response (for headers, for example), `v1TaskAllTaskClientIdGet$Response()` instead.
   *
   * This method doesn't expect any response body
   */
  v1TaskAllTaskClientIdGet(params: {
    clientId: number;

  }): Observable<void> {

    return this.v1TaskAllTaskClientIdGet$Response(params).pipe(
      map((r: StrictHttpResponse<void>) => r.body as void)
    );
  }

  /**
   * Path part for operation v1TaskStatusListGet
   */
  static readonly V1TaskStatusListGetPath = '/v1/Task/status/list';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `v1TaskStatusListGet()` instead.
   *
   * This method doesn't expect any response body
   */
  v1TaskStatusListGet$Response(params?: {

  }): Observable<StrictHttpResponse<void>> {

    const rb = new RequestBuilder(this.rootUrl, TaskService.V1TaskStatusListGetPath, 'get');
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
   * To access the full response (for headers, for example), `v1TaskStatusListGet$Response()` instead.
   *
   * This method doesn't expect any response body
   */
  v1TaskStatusListGet(params?: {

  }): Observable<void> {

    return this.v1TaskStatusListGet$Response(params).pipe(
      map((r: StrictHttpResponse<void>) => r.body as void)
    );
  }

  /**
   * Path part for operation v1TaskGetIdGet
   */
  static readonly V1TaskGetIdGetPath = '/v1/Task/get/{Id}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `v1TaskGetIdGet()` instead.
   *
   * This method doesn't expect any response body
   */
  v1TaskGetIdGet$Response(params: {
    id: number;

  }): Observable<StrictHttpResponse<void>> {

    const rb = new RequestBuilder(this.rootUrl, TaskService.V1TaskGetIdGetPath, 'get');
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
   * To access the full response (for headers, for example), `v1TaskGetIdGet$Response()` instead.
   *
   * This method doesn't expect any response body
   */
  v1TaskGetIdGet(params: {
    id: number;

  }): Observable<void> {

    return this.v1TaskGetIdGet$Response(params).pipe(
      map((r: StrictHttpResponse<void>) => r.body as void)
    );
  }

  /**
   * Path part for operation v1TaskCreatePost
   */
  static readonly V1TaskCreatePostPath = '/v1/Task/create';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `v1TaskCreatePost$Json()` instead.
   *
   * This method sends `application/json` and handles response body of type `application/json`
   */
  v1TaskCreatePost$Json$Response(params?: {

    body?: vwClientPortalTask
  }): Observable<StrictHttpResponse<void>> {

    const rb = new RequestBuilder(this.rootUrl, TaskService.V1TaskCreatePostPath, 'post');
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
   * To access the full response (for headers, for example), `v1TaskCreatePost$Json$Response()` instead.
   *
   * This method sends `application/json` and handles response body of type `application/json`
   */
  v1TaskCreatePost$Json(params?: {

    body?: vwClientPortalTask
  }): Observable<void> {

    return this.v1TaskCreatePost$Json$Response(params).pipe(
      map((r: StrictHttpResponse<void>) => r.body as void)
    );
  }

  /**
   * Path part for operation v1TaskUpdatePut
   */
  static readonly V1TaskUpdatePutPath = '/v1/Task/update';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `v1TaskUpdatePut$Json()` instead.
   *
   * This method sends `application/json` and handles response body of type `application/json`
   */
  v1TaskUpdatePut$Json$Response(params?: {

    body?: vwClientPortalTask
  }): Observable<StrictHttpResponse<void>> {

    const rb = new RequestBuilder(this.rootUrl, TaskService.V1TaskUpdatePutPath, 'put');
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
   * To access the full response (for headers, for example), `v1TaskUpdatePut$Json$Response()` instead.
   *
   * This method sends `application/json` and handles response body of type `application/json`
   */
  v1TaskUpdatePut$Json(params?: {

    body?: vwClientPortalTask
  }): Observable<void> {

    return this.v1TaskUpdatePut$Json$Response(params).pipe(
      map((r: StrictHttpResponse<void>) => r.body as void)
    );
  }

  /**
   * Path part for operation v1TaskDelete
   */
  static readonly V1TaskDeletePath = '/v1/Task';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `v1TaskDelete()` instead.
   *
   * This method doesn't expect any response body
   */
  v1TaskDelete$Response(params?: {
    id?: number;

  }): Observable<StrictHttpResponse<void>> {

    const rb = new RequestBuilder(this.rootUrl, TaskService.V1TaskDeletePath, 'delete');
    if (params) {

      rb.query('Id', params.id);

    }
    return this.http.request(rb.build({
      responseType: 'text',
      accept: '*/*'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return (r as HttpResponse<any>).clone({ body: undefined }) as StrictHttpResponse<void>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `v1TaskDelete$Response()` instead.
   *
   * This method doesn't expect any response body
   */
  v1TaskDelete(params?: {
    id?: number;

  }): Observable<void> {

    return this.v1TaskDelete$Response(params).pipe(
      map((r: StrictHttpResponse<void>) => r.body as void)
    );
  }

  /**
   * Path part for operation v1TaskUpdateStatusPut
   */
  static readonly V1TaskUpdateStatusPutPath = '/v1/Task/update/status';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `v1TaskUpdateStatusPut()` instead.
   *
   * This method doesn't expect any response body
   */
  v1TaskUpdateStatusPut$Response(params?: {
    id?: number;
    statusId?: number;

  }): Observable<StrictHttpResponse<void>> {

    const rb = new RequestBuilder(this.rootUrl, TaskService.V1TaskUpdateStatusPutPath, 'put');
    if (params) {

      rb.query('Id', params.id);
      rb.query('StatusId', params.statusId);

    }
    return this.http.request(rb.build({
      responseType: 'text',
      accept: '*/*'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return (r as HttpResponse<any>).clone({ body: undefined }) as StrictHttpResponse<void>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `v1TaskUpdateStatusPut$Response()` instead.
   *
   * This method doesn't expect any response body
   */
  v1TaskUpdateStatusPut(params?: {
    id?: number;
    statusId?: number;

  }): Observable<void> {

    return this.v1TaskUpdateStatusPut$Response(params).pipe(
      map((r: StrictHttpResponse<void>) => r.body as void)
    );
  }

}
