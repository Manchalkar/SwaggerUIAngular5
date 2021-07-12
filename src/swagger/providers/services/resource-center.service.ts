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
export class ResourceCenterService extends BaseService {
  constructor(
    config: ApiConfiguration,
    http: HttpClient
  ) {
    super(config, http);
  }

  /**
   * Path part for operation v1ResourceCenterCustomContentGet
   */
  static readonly V1ResourceCenterCustomContentGetPath = '/v1/ResourceCenter/CustomContent';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `v1ResourceCenterCustomContentGet()` instead.
   *
   * This method doesn't expect any response body
   */
  v1ResourceCenterCustomContentGet$Response(params?: {

  }): Observable<StrictHttpResponse<void>> {

    const rb = new RequestBuilder(this.rootUrl, ResourceCenterService.V1ResourceCenterCustomContentGetPath, 'get');
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
   * To access the full response (for headers, for example), `v1ResourceCenterCustomContentGet$Response()` instead.
   *
   * This method doesn't expect any response body
   */
  v1ResourceCenterCustomContentGet(params?: {

  }): Observable<void> {

    return this.v1ResourceCenterCustomContentGet$Response(params).pipe(
      map((r: StrictHttpResponse<void>) => r.body as void)
    );
  }

  /**
   * Path part for operation v1ResourceCenterDocumentContentGet
   */
  static readonly V1ResourceCenterDocumentContentGetPath = '/v1/ResourceCenter/DocumentContent';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `v1ResourceCenterDocumentContentGet()` instead.
   *
   * This method doesn't expect any response body
   */
  v1ResourceCenterDocumentContentGet$Response(params?: {

  }): Observable<StrictHttpResponse<void>> {

    const rb = new RequestBuilder(this.rootUrl, ResourceCenterService.V1ResourceCenterDocumentContentGetPath, 'get');
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
   * To access the full response (for headers, for example), `v1ResourceCenterDocumentContentGet$Response()` instead.
   *
   * This method doesn't expect any response body
   */
  v1ResourceCenterDocumentContentGet(params?: {

  }): Observable<void> {

    return this.v1ResourceCenterDocumentContentGet$Response(params).pipe(
      map((r: StrictHttpResponse<void>) => r.body as void)
    );
  }

}
