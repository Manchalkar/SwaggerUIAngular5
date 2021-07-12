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
export class SearchService extends BaseService {
  constructor(
    config: ApiConfiguration,
    http: HttpClient
  ) {
    super(config, http);
  }

  /**
   * Path part for operation v1SearchAllmodulesGet
   */
  static readonly V1SearchAllmodulesGetPath = '/v1/Search/allmodules';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `v1SearchAllmodulesGet()` instead.
   *
   * This method doesn't expect any response body
   */
  v1SearchAllmodulesGet$Response(params?: {

  }): Observable<StrictHttpResponse<void>> {

    const rb = new RequestBuilder(this.rootUrl, SearchService.V1SearchAllmodulesGetPath, 'get');
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
   * To access the full response (for headers, for example), `v1SearchAllmodulesGet$Response()` instead.
   *
   * This method doesn't expect any response body
   */
  v1SearchAllmodulesGet(params?: {

  }): Observable<void> {

    return this.v1SearchAllmodulesGet$Response(params).pipe(
      map((r: StrictHttpResponse<void>) => r.body as void)
    );
  }

  /**
   * Path part for operation v1SearchSearchClientglobalGet
   */
  static readonly V1SearchSearchClientglobalGetPath = '/v1/Search/search/clientglobal';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `v1SearchSearchClientglobalGet()` instead.
   *
   * This method doesn't expect any response body
   */
  v1SearchSearchClientglobalGet$Response(params?: {
    searchString?: string;
    isAll?: boolean;
    isMatter?: boolean;
    isDocument?: boolean;
    isEvents?: boolean;
    isInvoices?: boolean;
    isMessages?: boolean;
    isNotes?: boolean;
    pageIndex?: number;
    pageSize?: number;
    searchFilterStr?: string;
    clientId?: number;
    matterId?: number;

  }): Observable<StrictHttpResponse<void>> {

    const rb = new RequestBuilder(this.rootUrl, SearchService.V1SearchSearchClientglobalGetPath, 'get');
    if (params) {

      rb.query('searchString', params.searchString);
      rb.query('isAll', params.isAll);
      rb.query('isMatter', params.isMatter);
      rb.query('isDocument', params.isDocument);
      rb.query('isEvents', params.isEvents);
      rb.query('isInvoices', params.isInvoices);
      rb.query('isMessages', params.isMessages);
      rb.query('isNotes', params.isNotes);
      rb.query('pageIndex', params.pageIndex);
      rb.query('pageSize', params.pageSize);
      rb.query('searchFilterStr', params.searchFilterStr);
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
   * To access the full response (for headers, for example), `v1SearchSearchClientglobalGet$Response()` instead.
   *
   * This method doesn't expect any response body
   */
  v1SearchSearchClientglobalGet(params?: {
    searchString?: string;
    isAll?: boolean;
    isMatter?: boolean;
    isDocument?: boolean;
    isEvents?: boolean;
    isInvoices?: boolean;
    isMessages?: boolean;
    isNotes?: boolean;
    pageIndex?: number;
    pageSize?: number;
    searchFilterStr?: string;
    clientId?: number;
    matterId?: number;

  }): Observable<void> {

    return this.v1SearchSearchClientglobalGet$Response(params).pipe(
      map((r: StrictHttpResponse<void>) => r.body as void)
    );
  }

}
