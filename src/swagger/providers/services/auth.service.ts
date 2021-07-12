/* tslint:disable */
import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { BaseService } from '../base-service';
import { ApiConfiguration } from '../api-configuration';
import { StrictHttpResponse } from '../strict-http-response';
import { RequestBuilder } from '../request-builder';
import { Observable } from 'rxjs';
import { map, filter } from 'rxjs/operators';

import { ForgotPasswordModel } from '../models/forgot-password-model';
import { LoginModel } from '../models/login-model';
import { RegisterModel } from '../models/register-model';
import { ResetPasswordModel } from '../models/reset-password-model';

@Injectable({
  providedIn: 'root',
})
export class AuthService extends BaseService {
  constructor(
    config: ApiConfiguration,
    http: HttpClient
  ) {
    super(config, http);
  }

  /**
   * Path part for operation v1AuthRegisterPost
   */
  static readonly V1AuthRegisterPostPath = '/v1/Auth/Register';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `v1AuthRegisterPost$Json()` instead.
   *
   * This method sends `application/json` and handles response body of type `application/json`
   */
  v1AuthRegisterPost$Json$Response(params?: {

    body?: RegisterModel
  }): Observable<StrictHttpResponse<void>> {

    const rb = new RequestBuilder(this.rootUrl, AuthService.V1AuthRegisterPostPath, 'post');
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
   * To access the full response (for headers, for example), `v1AuthRegisterPost$Json$Response()` instead.
   *
   * This method sends `application/json` and handles response body of type `application/json`
   */
  v1AuthRegisterPost$Json(params?: {

    body?: RegisterModel
  }): Observable<void> {

    return this.v1AuthRegisterPost$Json$Response(params).pipe(
      map((r: StrictHttpResponse<void>) => r.body as void)
    );
  }

  /**
   * Path part for operation v1AuthLoginPost
   */
  static readonly V1AuthLoginPostPath = '/v1/Auth/Login';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `v1AuthLoginPost$Json()` instead.
   *
   * This method sends `application/json` and handles response body of type `application/json`
   */
  v1AuthLoginPost$Json$Response(params?: {

    body?: LoginModel
  }): Observable<StrictHttpResponse<void>> {

    const rb = new RequestBuilder(this.rootUrl, AuthService.V1AuthLoginPostPath, 'post');
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
   * To access the full response (for headers, for example), `v1AuthLoginPost$Json$Response()` instead.
   *
   * This method sends `application/json` and handles response body of type `application/json`
   */
  v1AuthLoginPost$Json(params?: {

    body?: LoginModel
  }): Observable<void> {

    return this.v1AuthLoginPost$Json$Response(params).pipe(
      map((r: StrictHttpResponse<void>) => r.body as void)
    );
  }

  /**
   * Path part for operation v1AuthForgotPasswordPost
   */
  static readonly V1AuthForgotPasswordPostPath = '/v1/Auth/ForgotPassword';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `v1AuthForgotPasswordPost$Json()` instead.
   *
   * This method sends `application/json` and handles response body of type `application/json`
   */
  v1AuthForgotPasswordPost$Json$Response(params?: {

    body?: ForgotPasswordModel
  }): Observable<StrictHttpResponse<void>> {

    const rb = new RequestBuilder(this.rootUrl, AuthService.V1AuthForgotPasswordPostPath, 'post');
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
   * To access the full response (for headers, for example), `v1AuthForgotPasswordPost$Json$Response()` instead.
   *
   * This method sends `application/json` and handles response body of type `application/json`
   */
  v1AuthForgotPasswordPost$Json(params?: {

    body?: ForgotPasswordModel
  }): Observable<void> {

    return this.v1AuthForgotPasswordPost$Json$Response(params).pipe(
      map((r: StrictHttpResponse<void>) => r.body as void)
    );
  }

  /**
   * Path part for operation v1AuthResetPasswordPost
   */
  static readonly V1AuthResetPasswordPostPath = '/v1/Auth/ResetPassword';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `v1AuthResetPasswordPost$Json()` instead.
   *
   * This method sends `application/json` and handles response body of type `application/json`
   */
  v1AuthResetPasswordPost$Json$Response(params?: {

    body?: ResetPasswordModel
  }): Observable<StrictHttpResponse<void>> {

    const rb = new RequestBuilder(this.rootUrl, AuthService.V1AuthResetPasswordPostPath, 'post');
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
   * To access the full response (for headers, for example), `v1AuthResetPasswordPost$Json$Response()` instead.
   *
   * This method sends `application/json` and handles response body of type `application/json`
   */
  v1AuthResetPasswordPost$Json(params?: {

    body?: ResetPasswordModel
  }): Observable<void> {

    return this.v1AuthResetPasswordPost$Json$Response(params).pipe(
      map((r: StrictHttpResponse<void>) => r.body as void)
    );
  }

  /**
   * Path part for operation v1AuthTwoFactorCodeSendGet
   */
  static readonly V1AuthTwoFactorCodeSendGetPath = '/v1/Auth/TwoFactorCode/Send';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `v1AuthTwoFactorCodeSendGet()` instead.
   *
   * This method doesn't expect any response body
   */
  v1AuthTwoFactorCodeSendGet$Response(params?: {
    isForEmail?: boolean;

  }): Observable<StrictHttpResponse<void>> {

    const rb = new RequestBuilder(this.rootUrl, AuthService.V1AuthTwoFactorCodeSendGetPath, 'get');
    if (params) {

      rb.query('isForEmail', params.isForEmail);

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
   * To access the full response (for headers, for example), `v1AuthTwoFactorCodeSendGet$Response()` instead.
   *
   * This method doesn't expect any response body
   */
  v1AuthTwoFactorCodeSendGet(params?: {
    isForEmail?: boolean;

  }): Observable<void> {

    return this.v1AuthTwoFactorCodeSendGet$Response(params).pipe(
      map((r: StrictHttpResponse<void>) => r.body as void)
    );
  }

  /**
   * Path part for operation v1AuthTwoFactorCodeValidateGet
   */
  static readonly V1AuthTwoFactorCodeValidateGetPath = '/v1/Auth/TwoFactorCode/Validate';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `v1AuthTwoFactorCodeValidateGet()` instead.
   *
   * This method doesn't expect any response body
   */
  v1AuthTwoFactorCodeValidateGet$Response(params?: {
    isForEmail?: boolean;
    code?: string;

  }): Observable<StrictHttpResponse<void>> {

    const rb = new RequestBuilder(this.rootUrl, AuthService.V1AuthTwoFactorCodeValidateGetPath, 'get');
    if (params) {

      rb.query('isForEmail', params.isForEmail);
      rb.query('Code', params.code);

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
   * To access the full response (for headers, for example), `v1AuthTwoFactorCodeValidateGet$Response()` instead.
   *
   * This method doesn't expect any response body
   */
  v1AuthTwoFactorCodeValidateGet(params?: {
    isForEmail?: boolean;
    code?: string;

  }): Observable<void> {

    return this.v1AuthTwoFactorCodeValidateGet$Response(params).pipe(
      map((r: StrictHttpResponse<void>) => r.body as void)
    );
  }

  /**
   * Path part for operation v1AuthLogoutPost
   */
  static readonly V1AuthLogoutPostPath = '/v1/Auth/logout';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `v1AuthLogoutPost$Json()` instead.
   *
   * This method sends `application/json` and handles response body of type `application/json`
   */
  v1AuthLogoutPost$Json$Response(params?: {

    body?: number
  }): Observable<StrictHttpResponse<void>> {

    const rb = new RequestBuilder(this.rootUrl, AuthService.V1AuthLogoutPostPath, 'post');
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
   * To access the full response (for headers, for example), `v1AuthLogoutPost$Json$Response()` instead.
   *
   * This method sends `application/json` and handles response body of type `application/json`
   */
  v1AuthLogoutPost$Json(params?: {

    body?: number
  }): Observable<void> {

    return this.v1AuthLogoutPost$Json$Response(params).pipe(
      map((r: StrictHttpResponse<void>) => r.body as void)
    );
  }

  /**
   * Path part for operation v1AuthGetTargetClientsGet
   */
  static readonly V1AuthGetTargetClientsGetPath = '/v1/Auth/GetTargetClients';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `v1AuthGetTargetClientsGet()` instead.
   *
   * This method doesn't expect any response body
   */
  v1AuthGetTargetClientsGet$Response(params?: {

  }): Observable<StrictHttpResponse<void>> {

    const rb = new RequestBuilder(this.rootUrl, AuthService.V1AuthGetTargetClientsGetPath, 'get');
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
   * To access the full response (for headers, for example), `v1AuthGetTargetClientsGet$Response()` instead.
   *
   * This method doesn't expect any response body
   */
  v1AuthGetTargetClientsGet(params?: {

  }): Observable<void> {

    return this.v1AuthGetTargetClientsGet$Response(params).pipe(
      map((r: StrictHttpResponse<void>) => r.body as void)
    );
  }

  /**
   * Path part for operation getUserStatusGet
   */
  static readonly GetUserStatusGetPath = '/GetUserStatus';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `getUserStatusGet()` instead.
   *
   * This method doesn't expect any response body
   */
  getUserStatusGet$Response(params?: {
    personId?: number;

  }): Observable<StrictHttpResponse<void>> {

    const rb = new RequestBuilder(this.rootUrl, AuthService.GetUserStatusGetPath, 'get');
    if (params) {

      rb.query('PersonId', params.personId);

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
   * To access the full response (for headers, for example), `getUserStatusGet$Response()` instead.
   *
   * This method doesn't expect any response body
   */
  getUserStatusGet(params?: {
    personId?: number;

  }): Observable<void> {

    return this.getUserStatusGet$Response(params).pipe(
      map((r: StrictHttpResponse<void>) => r.body as void)
    );
  }

  /**
   * Path part for operation v1AuthIsUrlExpiredPersonIdSecurityGroupIdGet
   */
  static readonly V1AuthIsUrlExpiredPersonIdSecurityGroupIdGetPath = '/v1/Auth/IsUrlExpired/{PersonId}/{SecurityGroupId}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `v1AuthIsUrlExpiredPersonIdSecurityGroupIdGet()` instead.
   *
   * This method doesn't expect any response body
   */
  v1AuthIsUrlExpiredPersonIdSecurityGroupIdGet$Response(params: {
    personId: number;
    securityGroupId: number;
    connectionString?: string;

  }): Observable<StrictHttpResponse<void>> {

    const rb = new RequestBuilder(this.rootUrl, AuthService.V1AuthIsUrlExpiredPersonIdSecurityGroupIdGetPath, 'get');
    if (params) {

      rb.path('PersonId', params.personId);
      rb.path('SecurityGroupId', params.securityGroupId);
      rb.query('connectionString', params.connectionString);

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
   * To access the full response (for headers, for example), `v1AuthIsUrlExpiredPersonIdSecurityGroupIdGet$Response()` instead.
   *
   * This method doesn't expect any response body
   */
  v1AuthIsUrlExpiredPersonIdSecurityGroupIdGet(params: {
    personId: number;
    securityGroupId: number;
    connectionString?: string;

  }): Observable<void> {

    return this.v1AuthIsUrlExpiredPersonIdSecurityGroupIdGet$Response(params).pipe(
      map((r: StrictHttpResponse<void>) => r.body as void)
    );
  }

  /**
   * Path part for operation v1AuthVerifyClientPortalAccessSelectedClientIdGet
   */
  static readonly V1AuthVerifyClientPortalAccessSelectedClientIdGetPath = '/v1/Auth/VerifyClientPortalAccess/{selectedClientId}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `v1AuthVerifyClientPortalAccessSelectedClientIdGet()` instead.
   *
   * This method doesn't expect any response body
   */
  v1AuthVerifyClientPortalAccessSelectedClientIdGet$Response(params: {
    selectedClientId: number;

  }): Observable<StrictHttpResponse<void>> {

    const rb = new RequestBuilder(this.rootUrl, AuthService.V1AuthVerifyClientPortalAccessSelectedClientIdGetPath, 'get');
    if (params) {

      rb.path('selectedClientId', params.selectedClientId);

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
   * To access the full response (for headers, for example), `v1AuthVerifyClientPortalAccessSelectedClientIdGet$Response()` instead.
   *
   * This method doesn't expect any response body
   */
  v1AuthVerifyClientPortalAccessSelectedClientIdGet(params: {
    selectedClientId: number;

  }): Observable<void> {

    return this.v1AuthVerifyClientPortalAccessSelectedClientIdGet$Response(params).pipe(
      map((r: StrictHttpResponse<void>) => r.body as void)
    );
  }

}
