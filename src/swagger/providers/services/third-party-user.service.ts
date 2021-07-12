/* tslint:disable */
import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { BaseService } from '../base-service';
import { ApiConfiguration } from '../api-configuration';
import { StrictHttpResponse } from '../strict-http-response';
import { RequestBuilder } from '../request-builder';
import { Observable } from 'rxjs';
import { map, filter } from 'rxjs/operators';

import { vmCPActivationEmail } from '../models/vm-cp-activation-email';
import { vmCPUserStatus } from '../models/vm-cp-user-status';
import { vmThirdPartyUser } from '../models/vm-third-party-user';
import { vmValidateEmailAddress } from '../models/vm-validate-email-address';

@Injectable({
  providedIn: 'root',
})
export class ThirdPartyUserService extends BaseService {
  constructor(
    config: ApiConfiguration,
    http: HttpClient
  ) {
    super(config, http);
  }

  /**
   * Path part for operation v1ThirdPartyUserThirdpartyuserPut
   */
  static readonly V1ThirdPartyUserThirdpartyuserPutPath = '/v1/ThirdPartyUser/thirdpartyuser';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `v1ThirdPartyUserThirdpartyuserPut$Json()` instead.
   *
   * This method sends `application/json` and handles response body of type `application/json`
   */
  v1ThirdPartyUserThirdpartyuserPut$Json$Response(params?: {

    body?: vmThirdPartyUser
  }): Observable<StrictHttpResponse<void>> {

    const rb = new RequestBuilder(this.rootUrl, ThirdPartyUserService.V1ThirdPartyUserThirdpartyuserPutPath, 'put');
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
   * To access the full response (for headers, for example), `v1ThirdPartyUserThirdpartyuserPut$Json$Response()` instead.
   *
   * This method sends `application/json` and handles response body of type `application/json`
   */
  v1ThirdPartyUserThirdpartyuserPut$Json(params?: {

    body?: vmThirdPartyUser
  }): Observable<void> {

    return this.v1ThirdPartyUserThirdpartyuserPut$Json$Response(params).pipe(
      map((r: StrictHttpResponse<void>) => r.body as void)
    );
  }

  /**
   * Path part for operation v1ThirdPartyUserThirdpartyuserPost
   */
  static readonly V1ThirdPartyUserThirdpartyuserPostPath = '/v1/ThirdPartyUser/thirdpartyuser';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `v1ThirdPartyUserThirdpartyuserPost$Json()` instead.
   *
   * This method sends `application/json` and handles response body of type `application/json`
   */
  v1ThirdPartyUserThirdpartyuserPost$Json$Response(params?: {

    body?: vmThirdPartyUser
  }): Observable<StrictHttpResponse<void>> {

    const rb = new RequestBuilder(this.rootUrl, ThirdPartyUserService.V1ThirdPartyUserThirdpartyuserPostPath, 'post');
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
   * To access the full response (for headers, for example), `v1ThirdPartyUserThirdpartyuserPost$Json$Response()` instead.
   *
   * This method sends `application/json` and handles response body of type `application/json`
   */
  v1ThirdPartyUserThirdpartyuserPost$Json(params?: {

    body?: vmThirdPartyUser
  }): Observable<void> {

    return this.v1ThirdPartyUserThirdpartyuserPost$Json$Response(params).pipe(
      map((r: StrictHttpResponse<void>) => r.body as void)
    );
  }

  /**
   * Path part for operation v1ThirdPartyUserThirdpartyusersMatterIdGet
   */
  static readonly V1ThirdPartyUserThirdpartyusersMatterIdGetPath = '/v1/ThirdPartyUser/thirdpartyusers/{matterId}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `v1ThirdPartyUserThirdpartyusersMatterIdGet()` instead.
   *
   * This method doesn't expect any response body
   */
  v1ThirdPartyUserThirdpartyusersMatterIdGet$Response(params: {
    matterId: number;

  }): Observable<StrictHttpResponse<void>> {

    const rb = new RequestBuilder(this.rootUrl, ThirdPartyUserService.V1ThirdPartyUserThirdpartyusersMatterIdGetPath, 'get');
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
   * To access the full response (for headers, for example), `v1ThirdPartyUserThirdpartyusersMatterIdGet$Response()` instead.
   *
   * This method doesn't expect any response body
   */
  v1ThirdPartyUserThirdpartyusersMatterIdGet(params: {
    matterId: number;

  }): Observable<void> {

    return this.v1ThirdPartyUserThirdpartyusersMatterIdGet$Response(params).pipe(
      map((r: StrictHttpResponse<void>) => r.body as void)
    );
  }

  /**
   * Path part for operation v1ThirdPartyUserThirdpartyuserMatterIdPersonIdGet
   */
  static readonly V1ThirdPartyUserThirdpartyuserMatterIdPersonIdGetPath = '/v1/ThirdPartyUser/thirdpartyuser/{matterId}/{personId}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `v1ThirdPartyUserThirdpartyuserMatterIdPersonIdGet()` instead.
   *
   * This method doesn't expect any response body
   */
  v1ThirdPartyUserThirdpartyuserMatterIdPersonIdGet$Response(params: {
    matterId: number;
    personId: number;

  }): Observable<StrictHttpResponse<void>> {

    const rb = new RequestBuilder(this.rootUrl, ThirdPartyUserService.V1ThirdPartyUserThirdpartyuserMatterIdPersonIdGetPath, 'get');
    if (params) {

      rb.path('matterId', params.matterId);
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
   * To access the full response (for headers, for example), `v1ThirdPartyUserThirdpartyuserMatterIdPersonIdGet$Response()` instead.
   *
   * This method doesn't expect any response body
   */
  v1ThirdPartyUserThirdpartyuserMatterIdPersonIdGet(params: {
    matterId: number;
    personId: number;

  }): Observable<void> {

    return this.v1ThirdPartyUserThirdpartyuserMatterIdPersonIdGet$Response(params).pipe(
      map((r: StrictHttpResponse<void>) => r.body as void)
    );
  }

  /**
   * Path part for operation v1ThirdPartyUserThirdpartyuserpermissionsGet
   */
  static readonly V1ThirdPartyUserThirdpartyuserpermissionsGetPath = '/v1/ThirdPartyUser/thirdpartyuserpermissions';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `v1ThirdPartyUserThirdpartyuserpermissionsGet()` instead.
   *
   * This method doesn't expect any response body
   */
  v1ThirdPartyUserThirdpartyuserpermissionsGet$Response(params?: {

  }): Observable<StrictHttpResponse<void>> {

    const rb = new RequestBuilder(this.rootUrl, ThirdPartyUserService.V1ThirdPartyUserThirdpartyuserpermissionsGetPath, 'get');
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
   * To access the full response (for headers, for example), `v1ThirdPartyUserThirdpartyuserpermissionsGet$Response()` instead.
   *
   * This method doesn't expect any response body
   */
  v1ThirdPartyUserThirdpartyuserpermissionsGet(params?: {

  }): Observable<void> {

    return this.v1ThirdPartyUserThirdpartyuserpermissionsGet$Response(params).pipe(
      map((r: StrictHttpResponse<void>) => r.body as void)
    );
  }

  /**
   * Path part for operation v1ThirdPartyUserValidatenewemailaddressPost
   */
  static readonly V1ThirdPartyUserValidatenewemailaddressPostPath = '/v1/ThirdPartyUser/validatenewemailaddress';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `v1ThirdPartyUserValidatenewemailaddressPost$Json()` instead.
   *
   * This method sends `application/json` and handles response body of type `application/json`
   */
  v1ThirdPartyUserValidatenewemailaddressPost$Json$Response(params?: {

    body?: vmValidateEmailAddress
  }): Observable<StrictHttpResponse<void>> {

    const rb = new RequestBuilder(this.rootUrl, ThirdPartyUserService.V1ThirdPartyUserValidatenewemailaddressPostPath, 'post');
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
   * To access the full response (for headers, for example), `v1ThirdPartyUserValidatenewemailaddressPost$Json$Response()` instead.
   *
   * This method sends `application/json` and handles response body of type `application/json`
   */
  v1ThirdPartyUserValidatenewemailaddressPost$Json(params?: {

    body?: vmValidateEmailAddress
  }): Observable<void> {

    return this.v1ThirdPartyUserValidatenewemailaddressPost$Json$Response(params).pipe(
      map((r: StrictHttpResponse<void>) => r.body as void)
    );
  }

  /**
   * Path part for operation v1ThirdPartyUserCpuserstatuschangePost
   */
  static readonly V1ThirdPartyUserCpuserstatuschangePostPath = '/v1/ThirdPartyUser/cpuserstatuschange';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `v1ThirdPartyUserCpuserstatuschangePost$Json()` instead.
   *
   * This method sends `application/json` and handles response body of type `application/json`
   */
  v1ThirdPartyUserCpuserstatuschangePost$Json$Response(params?: {

    body?: vmCPUserStatus
  }): Observable<StrictHttpResponse<void>> {

    const rb = new RequestBuilder(this.rootUrl, ThirdPartyUserService.V1ThirdPartyUserCpuserstatuschangePostPath, 'post');
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
   * To access the full response (for headers, for example), `v1ThirdPartyUserCpuserstatuschangePost$Json$Response()` instead.
   *
   * This method sends `application/json` and handles response body of type `application/json`
   */
  v1ThirdPartyUserCpuserstatuschangePost$Json(params?: {

    body?: vmCPUserStatus
  }): Observable<void> {

    return this.v1ThirdPartyUserCpuserstatuschangePost$Json$Response(params).pipe(
      map((r: StrictHttpResponse<void>) => r.body as void)
    );
  }

  /**
   * Path part for operation v1ThirdPartyUserSendactivationlinkPost
   */
  static readonly V1ThirdPartyUserSendactivationlinkPostPath = '/v1/ThirdPartyUser/sendactivationlink';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `v1ThirdPartyUserSendactivationlinkPost$Json()` instead.
   *
   * This method sends `application/json` and handles response body of type `application/json`
   */
  v1ThirdPartyUserSendactivationlinkPost$Json$Response(params?: {

    body?: vmCPActivationEmail
  }): Observable<StrictHttpResponse<void>> {

    const rb = new RequestBuilder(this.rootUrl, ThirdPartyUserService.V1ThirdPartyUserSendactivationlinkPostPath, 'post');
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
   * To access the full response (for headers, for example), `v1ThirdPartyUserSendactivationlinkPost$Json$Response()` instead.
   *
   * This method sends `application/json` and handles response body of type `application/json`
   */
  v1ThirdPartyUserSendactivationlinkPost$Json(params?: {

    body?: vmCPActivationEmail
  }): Observable<void> {

    return this.v1ThirdPartyUserSendactivationlinkPost$Json$Response(params).pipe(
      map((r: StrictHttpResponse<void>) => r.body as void)
    );
  }

}
