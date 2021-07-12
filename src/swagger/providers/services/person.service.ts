/* tslint:disable */
import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { BaseService } from '../base-service';
import { ApiConfiguration } from '../api-configuration';
import { StrictHttpResponse } from '../strict-http-response';
import { RequestBuilder } from '../request-builder';
import { Observable } from 'rxjs';
import { map, filter } from 'rxjs/operators';

import { vwAddressDetails } from '../models/vw-address-details';
import { vwPerson } from '../models/vw-person';

@Injectable({
  providedIn: 'root',
})
export class PersonService extends BaseService {
  constructor(
    config: ApiConfiguration,
    http: HttpClient
  ) {
    super(config, http);
  }

  /**
   * Path part for operation v1PersonAddressPersonIdGet
   */
  static readonly V1PersonAddressPersonIdGetPath = '/v1/Person/Address/{personId}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `v1PersonAddressPersonIdGet()` instead.
   *
   * This method doesn't expect any response body
   */
  v1PersonAddressPersonIdGet$Response(params: {
    personId: number;

  }): Observable<StrictHttpResponse<void>> {

    const rb = new RequestBuilder(this.rootUrl, PersonService.V1PersonAddressPersonIdGetPath, 'get');
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
   * To access the full response (for headers, for example), `v1PersonAddressPersonIdGet$Response()` instead.
   *
   * This method doesn't expect any response body
   */
  v1PersonAddressPersonIdGet(params: {
    personId: number;

  }): Observable<void> {

    return this.v1PersonAddressPersonIdGet$Response(params).pipe(
      map((r: StrictHttpResponse<void>) => r.body as void)
    );
  }

  /**
   * Path part for operation v1PersonAddressPut
   */
  static readonly V1PersonAddressPutPath = '/v1/Person/address';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `v1PersonAddressPut$Json()` instead.
   *
   * This method sends `application/json` and handles response body of type `application/json`
   */
  v1PersonAddressPut$Json$Response(params?: {

    body?: vwAddressDetails
  }): Observable<StrictHttpResponse<void>> {

    const rb = new RequestBuilder(this.rootUrl, PersonService.V1PersonAddressPutPath, 'put');
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
   * To access the full response (for headers, for example), `v1PersonAddressPut$Json$Response()` instead.
   *
   * This method sends `application/json` and handles response body of type `application/json`
   */
  v1PersonAddressPut$Json(params?: {

    body?: vwAddressDetails
  }): Observable<void> {

    return this.v1PersonAddressPut$Json$Response(params).pipe(
      map((r: StrictHttpResponse<void>) => r.body as void)
    );
  }

  /**
   * Path part for operation v1PersonAddressPost
   */
  static readonly V1PersonAddressPostPath = '/v1/Person/address';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `v1PersonAddressPost$Json()` instead.
   *
   * This method sends `application/json` and handles response body of type `application/json`
   */
  v1PersonAddressPost$Json$Response(params?: {

    body?: vwAddressDetails
  }): Observable<StrictHttpResponse<void>> {

    const rb = new RequestBuilder(this.rootUrl, PersonService.V1PersonAddressPostPath, 'post');
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
   * To access the full response (for headers, for example), `v1PersonAddressPost$Json$Response()` instead.
   *
   * This method sends `application/json` and handles response body of type `application/json`
   */
  v1PersonAddressPost$Json(params?: {

    body?: vwAddressDetails
  }): Observable<void> {

    return this.v1PersonAddressPost$Json$Response(params).pipe(
      map((r: StrictHttpResponse<void>) => r.body as void)
    );
  }

  /**
   * Path part for operation v1PersonAddressAddressIdDelete
   */
  static readonly V1PersonAddressAddressIdDeletePath = '/v1/Person/address/{addressId}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `v1PersonAddressAddressIdDelete()` instead.
   *
   * This method doesn't expect any response body
   */
  v1PersonAddressAddressIdDelete$Response(params: {
    addressId: number;

  }): Observable<StrictHttpResponse<void>> {

    const rb = new RequestBuilder(this.rootUrl, PersonService.V1PersonAddressAddressIdDeletePath, 'delete');
    if (params) {

      rb.path('addressId', params.addressId);

    }
    return this.http.request(rb.build({
      responseType: 'text',
      accept: '*/*'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return (r as HttpResponse<any>).clone({ body: undefined }) as StrictHttpResponse<void>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `v1PersonAddressAddressIdDelete$Response()` instead.
   *
   * This method doesn't expect any response body
   */
  v1PersonAddressAddressIdDelete(params: {
    addressId: number;

  }): Observable<void> {

    return this.v1PersonAddressAddressIdDelete$Response(params).pipe(
      map((r: StrictHttpResponse<void>) => r.body as void)
    );
  }

  /**
   * Path part for operation v1PersonPut
   */
  static readonly V1PersonPutPath = '/v1/Person';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `v1PersonPut$Json()` instead.
   *
   * This method sends `application/json` and handles response body of type `application/json`
   */
  v1PersonPut$Json$Response(params?: {

    body?: vwPerson
  }): Observable<StrictHttpResponse<void>> {

    const rb = new RequestBuilder(this.rootUrl, PersonService.V1PersonPutPath, 'put');
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
   * To access the full response (for headers, for example), `v1PersonPut$Json$Response()` instead.
   *
   * This method sends `application/json` and handles response body of type `application/json`
   */
  v1PersonPut$Json(params?: {

    body?: vwPerson
  }): Observable<void> {

    return this.v1PersonPut$Json$Response(params).pipe(
      map((r: StrictHttpResponse<void>) => r.body as void)
    );
  }

  /**
   * Path part for operation v1PersonMattersPermissionCodeGet
   */
  static readonly V1PersonMattersPermissionCodeGetPath = '/v1/Person/matters/{permissionCode}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `v1PersonMattersPermissionCodeGet()` instead.
   *
   * This method doesn't expect any response body
   */
  v1PersonMattersPermissionCodeGet$Response(params: {
    permissionCode: string;

  }): Observable<StrictHttpResponse<void>> {

    const rb = new RequestBuilder(this.rootUrl, PersonService.V1PersonMattersPermissionCodeGetPath, 'get');
    if (params) {

      rb.path('permissionCode', params.permissionCode);

    }
    return this.http.request(rb.build({
      responseType: 'text',
      accept: '*/*'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return (r as HttpResponse<any>).clone({ body: undefined }) as StrictHttpResponse<void>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `v1PersonMattersPermissionCodeGet$Response()` instead.
   *
   * This method doesn't expect any response body
   */
  v1PersonMattersPermissionCodeGet(params: {
    permissionCode: string;

  }): Observable<void> {

    return this.v1PersonMattersPermissionCodeGet$Response(params).pipe(
      map((r: StrictHttpResponse<void>) => r.body as void)
    );
  }

}
