/* tslint:disable */
import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { BaseService } from '../base-service';
import { ApiConfiguration } from '../api-configuration';
import { StrictHttpResponse } from '../strict-http-response';
import { RequestBuilder } from '../request-builder';
import { Observable } from 'rxjs';
import { map, filter } from 'rxjs/operators';

import { vwSiteLog } from '../models/vw-site-log';

@Injectable({
  providedIn: 'root',
})
export class SiteLogService extends BaseService {
  constructor(
    config: ApiConfiguration,
    http: HttpClient
  ) {
    super(config, http);
  }

  /**
   * Path part for operation v1SiteLogGet
   */
  static readonly V1SiteLogGetPath = '/v1/SiteLog';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `v1SiteLogGet()` instead.
   *
   * This method doesn't expect any response body
   */
  v1SiteLogGet$Response(params?: {
    eventTypeBand?: string;
    startTime?: string;
    endTime?: string;

  }): Observable<StrictHttpResponse<void>> {

    const rb = new RequestBuilder(this.rootUrl, SiteLogService.V1SiteLogGetPath, 'get');
    if (params) {

      rb.query('eventTypeBand', params.eventTypeBand);
      rb.query('startTime', params.startTime);
      rb.query('endTime', params.endTime);

    }
    return this.http.request(rb.build({
      responseType: 'text',
      accept: '*/*'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return (r as HttpResponse<any>).clone({ body: undefined }) as StrictHttpResponse<void>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `v1SiteLogGet$Response()` instead.
   *
   * This method doesn't expect any response body
   */
  v1SiteLogGet(params?: {
    eventTypeBand?: string;
    startTime?: string;
    endTime?: string;

  }): Observable<void> {

    return this.v1SiteLogGet$Response(params).pipe(
      map((r: StrictHttpResponse<void>) => r.body as void)
    );
  }

  /**
   * Path part for operation v1SiteLogPost
   */
  static readonly V1SiteLogPostPath = '/v1/SiteLog';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `v1SiteLogPost$Json()` instead.
   *
   * This method sends `application/json` and handles response body of type `application/json`
   */
  v1SiteLogPost$Json$Response(params?: {

    body?: vwSiteLog
  }): Observable<StrictHttpResponse<void>> {

    const rb = new RequestBuilder(this.rootUrl, SiteLogService.V1SiteLogPostPath, 'post');
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
   * To access the full response (for headers, for example), `v1SiteLogPost$Json$Response()` instead.
   *
   * This method sends `application/json` and handles response body of type `application/json`
   */
  v1SiteLogPost$Json(params?: {

    body?: vwSiteLog
  }): Observable<void> {

    return this.v1SiteLogPost$Json$Response(params).pipe(
      map((r: StrictHttpResponse<void>) => r.body as void)
    );
  }

}
