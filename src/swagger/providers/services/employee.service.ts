/* tslint:disable */
import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { BaseService } from '../base-service';
import { ApiConfiguration } from '../api-configuration';
import { StrictHttpResponse } from '../strict-http-response';
import { RequestBuilder } from '../request-builder';
import { Observable } from 'rxjs';
import { map, filter } from 'rxjs/operators';

import { vmProjectHourModel } from '../models/vm-project-hour-model';
import { vmTargetHourRequest } from '../models/vm-target-hour-request';
import { vwEmployee } from '../models/vw-employee';
import { vwEmployeeJobFamily } from '../models/vw-employee-job-family';
import { vwEmployeeNotificationSettings } from '../models/vw-employee-notification-settings';
import { vwFullEmployeeRequest } from '../models/vw-full-employee-request';
import { vwUpdateNotificationFlag } from '../models/vw-update-notification-flag';
import { vwUpdateReportingRelations } from '../models/vw-update-reporting-relations';

@Injectable({
  providedIn: 'root',
})
export class EmployeeService extends BaseService {
  constructor(
    config: ApiConfiguration,
    http: HttpClient
  ) {
    super(config, http);
  }

  /**
   * Path part for operation v1EmployeeGet
   */
  static readonly V1EmployeeGetPath = '/v1/Employee';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `v1EmployeeGet()` instead.
   *
   * This method doesn't expect any response body
   */
  v1EmployeeGet$Response(params?: {

  }): Observable<StrictHttpResponse<void>> {

    const rb = new RequestBuilder(this.rootUrl, EmployeeService.V1EmployeeGetPath, 'get');
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
   * To access the full response (for headers, for example), `v1EmployeeGet$Response()` instead.
   *
   * This method doesn't expect any response body
   */
  v1EmployeeGet(params?: {

  }): Observable<void> {

    return this.v1EmployeeGet$Response(params).pipe(
      map((r: StrictHttpResponse<void>) => r.body as void)
    );
  }

  /**
   * Path part for operation v1EmployeePut
   */
  static readonly V1EmployeePutPath = '/v1/Employee';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `v1EmployeePut$Json()` instead.
   *
   * This method sends `application/json` and handles response body of type `application/json`
   */
  v1EmployeePut$Json$Response(params?: {

    body?: vwEmployee
  }): Observable<StrictHttpResponse<void>> {

    const rb = new RequestBuilder(this.rootUrl, EmployeeService.V1EmployeePutPath, 'put');
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
   * To access the full response (for headers, for example), `v1EmployeePut$Json$Response()` instead.
   *
   * This method sends `application/json` and handles response body of type `application/json`
   */
  v1EmployeePut$Json(params?: {

    body?: vwEmployee
  }): Observable<void> {

    return this.v1EmployeePut$Json$Response(params).pipe(
      map((r: StrictHttpResponse<void>) => r.body as void)
    );
  }

  /**
   * Path part for operation v1EmployeePost
   */
  static readonly V1EmployeePostPath = '/v1/Employee';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `v1EmployeePost$Json()` instead.
   *
   * This method sends `application/json` and handles response body of type `application/json`
   */
  v1EmployeePost$Json$Response(params?: {

    body?: vwEmployee
  }): Observable<StrictHttpResponse<void>> {

    const rb = new RequestBuilder(this.rootUrl, EmployeeService.V1EmployeePostPath, 'post');
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
   * To access the full response (for headers, for example), `v1EmployeePost$Json$Response()` instead.
   *
   * This method sends `application/json` and handles response body of type `application/json`
   */
  v1EmployeePost$Json(params?: {

    body?: vwEmployee
  }): Observable<void> {

    return this.v1EmployeePost$Json$Response(params).pipe(
      map((r: StrictHttpResponse<void>) => r.body as void)
    );
  }

  /**
   * Path part for operation v1EmployeeIdGet
   */
  static readonly V1EmployeeIdGetPath = '/v1/Employee/{id}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `v1EmployeeIdGet()` instead.
   *
   * This method doesn't expect any response body
   */
  v1EmployeeIdGet$Response(params: {
    id: number;

  }): Observable<StrictHttpResponse<void>> {

    const rb = new RequestBuilder(this.rootUrl, EmployeeService.V1EmployeeIdGetPath, 'get');
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
   * To access the full response (for headers, for example), `v1EmployeeIdGet$Response()` instead.
   *
   * This method doesn't expect any response body
   */
  v1EmployeeIdGet(params: {
    id: number;

  }): Observable<void> {

    return this.v1EmployeeIdGet$Response(params).pipe(
      map((r: StrictHttpResponse<void>) => r.body as void)
    );
  }

  /**
   * Path part for operation v1EmployeeIdDelete
   */
  static readonly V1EmployeeIdDeletePath = '/v1/Employee/{id}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `v1EmployeeIdDelete()` instead.
   *
   * This method doesn't expect any response body
   */
  v1EmployeeIdDelete$Response(params: {
    id: number;

  }): Observable<StrictHttpResponse<void>> {

    const rb = new RequestBuilder(this.rootUrl, EmployeeService.V1EmployeeIdDeletePath, 'delete');
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
   * To access the full response (for headers, for example), `v1EmployeeIdDelete$Response()` instead.
   *
   * This method doesn't expect any response body
   */
  v1EmployeeIdDelete(params: {
    id: number;

  }): Observable<void> {

    return this.v1EmployeeIdDelete$Response(params).pipe(
      map((r: StrictHttpResponse<void>) => r.body as void)
    );
  }

  /**
   * Path part for operation v1EmployeeMattersEmployeeIdGet
   */
  static readonly V1EmployeeMattersEmployeeIdGetPath = '/v1/Employee/matters/{employeeId}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `v1EmployeeMattersEmployeeIdGet()` instead.
   *
   * This method doesn't expect any response body
   */
  v1EmployeeMattersEmployeeIdGet$Response(params: {
    employeeId: number;

  }): Observable<StrictHttpResponse<void>> {

    const rb = new RequestBuilder(this.rootUrl, EmployeeService.V1EmployeeMattersEmployeeIdGetPath, 'get');
    if (params) {

      rb.path('employeeId', params.employeeId);

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
   * To access the full response (for headers, for example), `v1EmployeeMattersEmployeeIdGet$Response()` instead.
   *
   * This method doesn't expect any response body
   */
  v1EmployeeMattersEmployeeIdGet(params: {
    employeeId: number;

  }): Observable<void> {

    return this.v1EmployeeMattersEmployeeIdGet$Response(params).pipe(
      map((r: StrictHttpResponse<void>) => r.body as void)
    );
  }

  /**
   * Path part for operation v1EmployeeReportingEmployeeIdGet
   */
  static readonly V1EmployeeReportingEmployeeIdGetPath = '/v1/Employee/reporting/{employeeId}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `v1EmployeeReportingEmployeeIdGet()` instead.
   *
   * This method doesn't expect any response body
   */
  v1EmployeeReportingEmployeeIdGet$Response(params: {
    employeeId: number;

  }): Observable<StrictHttpResponse<void>> {

    const rb = new RequestBuilder(this.rootUrl, EmployeeService.V1EmployeeReportingEmployeeIdGetPath, 'get');
    if (params) {

      rb.path('employeeId', params.employeeId);

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
   * To access the full response (for headers, for example), `v1EmployeeReportingEmployeeIdGet$Response()` instead.
   *
   * This method doesn't expect any response body
   */
  v1EmployeeReportingEmployeeIdGet(params: {
    employeeId: number;

  }): Observable<void> {

    return this.v1EmployeeReportingEmployeeIdGet$Response(params).pipe(
      map((r: StrictHttpResponse<void>) => r.body as void)
    );
  }

  /**
   * Path part for operation v1EmployeeReportingRelationsEmployeeIdPut
   */
  static readonly V1EmployeeReportingRelationsEmployeeIdPutPath = '/v1/Employee/ReportingRelations/{employeeId}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `v1EmployeeReportingRelationsEmployeeIdPut$Json()` instead.
   *
   * This method sends `application/json` and handles response body of type `application/json`
   */
  v1EmployeeReportingRelationsEmployeeIdPut$Json$Response(params: {
    employeeId: number;

    body?: vwUpdateReportingRelations
  }): Observable<StrictHttpResponse<void>> {

    const rb = new RequestBuilder(this.rootUrl, EmployeeService.V1EmployeeReportingRelationsEmployeeIdPutPath, 'put');
    if (params) {

      rb.path('employeeId', params.employeeId);

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
   * To access the full response (for headers, for example), `v1EmployeeReportingRelationsEmployeeIdPut$Json$Response()` instead.
   *
   * This method sends `application/json` and handles response body of type `application/json`
   */
  v1EmployeeReportingRelationsEmployeeIdPut$Json(params: {
    employeeId: number;

    body?: vwUpdateReportingRelations
  }): Observable<void> {

    return this.v1EmployeeReportingRelationsEmployeeIdPut$Json$Response(params).pipe(
      map((r: StrictHttpResponse<void>) => r.body as void)
    );
  }

  /**
   * Path part for operation addUpdateEmployeeProjectTargetHour
   */
  static readonly AddUpdateEmployeeProjectTargetHourPath = '/v1/Employee/ProjectTargetHour';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `addUpdateEmployeeProjectTargetHour$Json()` instead.
   *
   * This method sends `application/json` and handles response body of type `application/json`
   */
  addUpdateEmployeeProjectTargetHour$Json$Response(params?: {

    body?: vmProjectHourModel
  }): Observable<StrictHttpResponse<void>> {

    const rb = new RequestBuilder(this.rootUrl, EmployeeService.AddUpdateEmployeeProjectTargetHourPath, 'post');
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
   * To access the full response (for headers, for example), `addUpdateEmployeeProjectTargetHour$Json$Response()` instead.
   *
   * This method sends `application/json` and handles response body of type `application/json`
   */
  addUpdateEmployeeProjectTargetHour$Json(params?: {

    body?: vmProjectHourModel
  }): Observable<void> {

    return this.addUpdateEmployeeProjectTargetHour$Json$Response(params).pipe(
      map((r: StrictHttpResponse<void>) => r.body as void)
    );
  }

  /**
   * Path part for operation getEmployeeJobFamilyTargetHour
   */
  static readonly GetEmployeeJobFamilyTargetHourPath = '/v1/Employee/{jobFamilyId}/JobFamilyTargetHour';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `getEmployeeJobFamilyTargetHour()` instead.
   *
   * This method doesn't expect any response body
   */
  getEmployeeJobFamilyTargetHour$Response(params: {
    jobFamilyId: number;

  }): Observable<StrictHttpResponse<void>> {

    const rb = new RequestBuilder(this.rootUrl, EmployeeService.GetEmployeeJobFamilyTargetHourPath, 'get');
    if (params) {

      rb.path('jobFamilyId', params.jobFamilyId);

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
   * To access the full response (for headers, for example), `getEmployeeJobFamilyTargetHour$Response()` instead.
   *
   * This method doesn't expect any response body
   */
  getEmployeeJobFamilyTargetHour(params: {
    jobFamilyId: number;

  }): Observable<void> {

    return this.getEmployeeJobFamilyTargetHour$Response(params).pipe(
      map((r: StrictHttpResponse<void>) => r.body as void)
    );
  }

  /**
   * Path part for operation getEmployeePrimaryOfficeHoliday
   */
  static readonly GetEmployeePrimaryOfficeHolidayPath = '/v1/Employee/{officeId}/OfficeHoliday';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `getEmployeePrimaryOfficeHoliday()` instead.
   *
   * This method doesn't expect any response body
   */
  getEmployeePrimaryOfficeHoliday$Response(params: {
    officeId: number;

  }): Observable<StrictHttpResponse<void>> {

    const rb = new RequestBuilder(this.rootUrl, EmployeeService.GetEmployeePrimaryOfficeHolidayPath, 'get');
    if (params) {

      rb.path('officeId', params.officeId);

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
   * To access the full response (for headers, for example), `getEmployeePrimaryOfficeHoliday$Response()` instead.
   *
   * This method doesn't expect any response body
   */
  getEmployeePrimaryOfficeHoliday(params: {
    officeId: number;

  }): Observable<void> {

    return this.getEmployeePrimaryOfficeHoliday$Response(params).pipe(
      map((r: StrictHttpResponse<void>) => r.body as void)
    );
  }

  /**
   * Path part for operation getEmployeeProjectTargetHour
   */
  static readonly GetEmployeeProjectTargetHourPath = '/v1/Employee/{employeeId}/ProjectTargetHour';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `getEmployeeProjectTargetHour()` instead.
   *
   * This method doesn't expect any response body
   */
  getEmployeeProjectTargetHour$Response(params: {
    employeeId: number;

  }): Observable<StrictHttpResponse<void>> {

    const rb = new RequestBuilder(this.rootUrl, EmployeeService.GetEmployeeProjectTargetHourPath, 'get');
    if (params) {

      rb.path('employeeId', params.employeeId);

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
   * To access the full response (for headers, for example), `getEmployeeProjectTargetHour$Response()` instead.
   *
   * This method doesn't expect any response body
   */
  getEmployeeProjectTargetHour(params: {
    employeeId: number;

  }): Observable<void> {

    return this.getEmployeeProjectTargetHour$Response(params).pipe(
      map((r: StrictHttpResponse<void>) => r.body as void)
    );
  }

  /**
   * Path part for operation getTimeKeepingSelf
   */
  static readonly GetTimeKeepingSelfPath = '/v1/Employee/{employeeId}/IsTimeKeepingSelf';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `getTimeKeepingSelf()` instead.
   *
   * This method doesn't expect any response body
   */
  getTimeKeepingSelf$Response(params: {
    employeeId: number;

  }): Observable<StrictHttpResponse<void>> {

    const rb = new RequestBuilder(this.rootUrl, EmployeeService.GetTimeKeepingSelfPath, 'get');
    if (params) {

      rb.path('employeeId', params.employeeId);

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
   * To access the full response (for headers, for example), `getTimeKeepingSelf$Response()` instead.
   *
   * This method doesn't expect any response body
   */
  getTimeKeepingSelf(params: {
    employeeId: number;

  }): Observable<void> {

    return this.getTimeKeepingSelf$Response(params).pipe(
      map((r: StrictHttpResponse<void>) => r.body as void)
    );
  }

  /**
   * Path part for operation getTargetHourWeekly
   */
  static readonly GetTargetHourWeeklyPath = '/v1/Employee/TargetHourWeekly';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `getTargetHourWeekly$Json()` instead.
   *
   * This method sends `application/json` and handles response body of type `application/json`
   */
  getTargetHourWeekly$Json$Response(params?: {

    body?: vmTargetHourRequest
  }): Observable<StrictHttpResponse<void>> {

    const rb = new RequestBuilder(this.rootUrl, EmployeeService.GetTargetHourWeeklyPath, 'post');
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
   * To access the full response (for headers, for example), `getTargetHourWeekly$Json$Response()` instead.
   *
   * This method sends `application/json` and handles response body of type `application/json`
   */
  getTargetHourWeekly$Json(params?: {

    body?: vmTargetHourRequest
  }): Observable<void> {

    return this.getTargetHourWeekly$Json$Response(params).pipe(
      map((r: StrictHttpResponse<void>) => r.body as void)
    );
  }

  /**
   * Path part for operation v1EmployeeListGet
   */
  static readonly V1EmployeeListGetPath = '/v1/Employee/list';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `v1EmployeeListGet()` instead.
   *
   * This method doesn't expect any response body
   */
  v1EmployeeListGet$Response(params?: {
    includeDetails?: boolean;

  }): Observable<StrictHttpResponse<void>> {

    const rb = new RequestBuilder(this.rootUrl, EmployeeService.V1EmployeeListGetPath, 'get');
    if (params) {

      rb.query('includeDetails', params.includeDetails);

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
   * To access the full response (for headers, for example), `v1EmployeeListGet$Response()` instead.
   *
   * This method doesn't expect any response body
   */
  v1EmployeeListGet(params?: {
    includeDetails?: boolean;

  }): Observable<void> {

    return this.v1EmployeeListGet$Response(params).pipe(
      map((r: StrictHttpResponse<void>) => r.body as void)
    );
  }

  /**
   * Path part for operation v1EmployeesGet
   */
  static readonly V1EmployeesGetPath = '/v1/employees';

  /**
   * This is a newer version of the old method GET /list/photos
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `v1EmployeesGet()` instead.
   *
   * This method doesn't expect any response body
   */
  v1EmployeesGet$Response(params?: {
    page?: number;
    pageSize?: number;
    includePhotos?: boolean;
    includeDetails?: boolean;

  }): Observable<StrictHttpResponse<void>> {

    const rb = new RequestBuilder(this.rootUrl, EmployeeService.V1EmployeesGetPath, 'get');
    if (params) {

      rb.query('page', params.page);
      rb.query('pageSize', params.pageSize);
      rb.query('includePhotos', params.includePhotos);
      rb.query('includeDetails', params.includeDetails);

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
   * This is a newer version of the old method GET /list/photos
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `v1EmployeesGet$Response()` instead.
   *
   * This method doesn't expect any response body
   */
  v1EmployeesGet(params?: {
    page?: number;
    pageSize?: number;
    includePhotos?: boolean;
    includeDetails?: boolean;

  }): Observable<void> {

    return this.v1EmployeesGet$Response(params).pipe(
      map((r: StrictHttpResponse<void>) => r.body as void)
    );
  }

  /**
   * Path part for operation v1EmployeeListPhotosGet
   */
  static readonly V1EmployeeListPhotosGetPath = '/v1/Employee/list/photos';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `v1EmployeeListPhotosGet()` instead.
   *
   * This method doesn't expect any response body
   */
  v1EmployeeListPhotosGet$Response(params?: {
    includeDetails?: boolean;

  }): Observable<StrictHttpResponse<void>> {

    const rb = new RequestBuilder(this.rootUrl, EmployeeService.V1EmployeeListPhotosGetPath, 'get');
    if (params) {

      rb.query('includeDetails', params.includeDetails);

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
   * To access the full response (for headers, for example), `v1EmployeeListPhotosGet$Response()` instead.
   *
   * This method doesn't expect any response body
   */
  v1EmployeeListPhotosGet(params?: {
    includeDetails?: boolean;

  }): Observable<void> {

    return this.v1EmployeeListPhotosGet$Response(params).pipe(
      map((r: StrictHttpResponse<void>) => r.body as void)
    );
  }

  /**
   * Path part for operation v1EmployeeEmailCheckGet
   */
  static readonly V1EmployeeEmailCheckGetPath = '/v1/Employee/email/check';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `v1EmployeeEmailCheckGet()` instead.
   *
   * This method doesn't expect any response body
   */
  v1EmployeeEmailCheckGet$Response(params?: {
    email?: string;
    id?: number;

  }): Observable<StrictHttpResponse<void>> {

    const rb = new RequestBuilder(this.rootUrl, EmployeeService.V1EmployeeEmailCheckGetPath, 'get');
    if (params) {

      rb.query('email', params.email);
      rb.query('id', params.id);

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
   * To access the full response (for headers, for example), `v1EmployeeEmailCheckGet$Response()` instead.
   *
   * This method doesn't expect any response body
   */
  v1EmployeeEmailCheckGet(params?: {
    email?: string;
    id?: number;

  }): Observable<void> {

    return this.v1EmployeeEmailCheckGet$Response(params).pipe(
      map((r: StrictHttpResponse<void>) => r.body as void)
    );
  }

  /**
   * Path part for operation v1EmployeeSearchGet
   */
  static readonly V1EmployeeSearchGetPath = '/v1/Employee/search';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `v1EmployeeSearchGet()` instead.
   *
   * This method doesn't expect any response body
   */
  v1EmployeeSearchGet$Response(params?: {
    search?: string;

  }): Observable<StrictHttpResponse<void>> {

    const rb = new RequestBuilder(this.rootUrl, EmployeeService.V1EmployeeSearchGetPath, 'get');
    if (params) {

      rb.query('search', params.search);

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
   * To access the full response (for headers, for example), `v1EmployeeSearchGet$Response()` instead.
   *
   * This method doesn't expect any response body
   */
  v1EmployeeSearchGet(params?: {
    search?: string;

  }): Observable<void> {

    return this.v1EmployeeSearchGet$Response(params).pipe(
      map((r: StrictHttpResponse<void>) => r.body as void)
    );
  }

  /**
   * Path part for operation v1EmployeeTimekeepersearchGet
   */
  static readonly V1EmployeeTimekeepersearchGetPath = '/v1/Employee/timekeepersearch';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `v1EmployeeTimekeepersearchGet()` instead.
   *
   * This method doesn't expect any response body
   */
  v1EmployeeTimekeepersearchGet$Response(params?: {
    search?: string;

  }): Observable<StrictHttpResponse<void>> {

    const rb = new RequestBuilder(this.rootUrl, EmployeeService.V1EmployeeTimekeepersearchGetPath, 'get');
    if (params) {

      rb.query('search', params.search);

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
   * To access the full response (for headers, for example), `v1EmployeeTimekeepersearchGet$Response()` instead.
   *
   * This method doesn't expect any response body
   */
  v1EmployeeTimekeepersearchGet(params?: {
    search?: string;

  }): Observable<void> {

    return this.v1EmployeeTimekeepersearchGet$Response(params).pipe(
      map((r: StrictHttpResponse<void>) => r.body as void)
    );
  }

  /**
   * Path part for operation v1EmployeeSearchPrimaryOfficeIdGet
   */
  static readonly V1EmployeeSearchPrimaryOfficeIdGetPath = '/v1/Employee/search/{primaryOfficeId}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `v1EmployeeSearchPrimaryOfficeIdGet()` instead.
   *
   * This method doesn't expect any response body
   */
  v1EmployeeSearchPrimaryOfficeIdGet$Response(params: {
    primaryOfficeId: number;
    search?: string;

  }): Observable<StrictHttpResponse<void>> {

    const rb = new RequestBuilder(this.rootUrl, EmployeeService.V1EmployeeSearchPrimaryOfficeIdGetPath, 'get');
    if (params) {

      rb.path('primaryOfficeId', params.primaryOfficeId);
      rb.query('search', params.search);

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
   * To access the full response (for headers, for example), `v1EmployeeSearchPrimaryOfficeIdGet$Response()` instead.
   *
   * This method doesn't expect any response body
   */
  v1EmployeeSearchPrimaryOfficeIdGet(params: {
    primaryOfficeId: number;
    search?: string;

  }): Observable<void> {

    return this.v1EmployeeSearchPrimaryOfficeIdGet$Response(params).pipe(
      map((r: StrictHttpResponse<void>) => r.body as void)
    );
  }

  /**
   * Path part for operation v1EmployeeFullPost
   */
  static readonly V1EmployeeFullPostPath = '/v1/Employee/full';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `v1EmployeeFullPost$Json()` instead.
   *
   * This method sends `application/json` and handles response body of type `application/json`
   */
  v1EmployeeFullPost$Json$Response(params?: {

    body?: vwFullEmployeeRequest
  }): Observable<StrictHttpResponse<void>> {

    const rb = new RequestBuilder(this.rootUrl, EmployeeService.V1EmployeeFullPostPath, 'post');
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
   * To access the full response (for headers, for example), `v1EmployeeFullPost$Json$Response()` instead.
   *
   * This method sends `application/json` and handles response body of type `application/json`
   */
  v1EmployeeFullPost$Json(params?: {

    body?: vwFullEmployeeRequest
  }): Observable<void> {

    return this.v1EmployeeFullPost$Json$Response(params).pipe(
      map((r: StrictHttpResponse<void>) => r.body as void)
    );
  }

  /**
   * Path part for operation v1EmployeeDraftEmployeeIdGet
   */
  static readonly V1EmployeeDraftEmployeeIdGetPath = '/v1/Employee/Draft/{employeeId}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `v1EmployeeDraftEmployeeIdGet()` instead.
   *
   * This method doesn't expect any response body
   */
  v1EmployeeDraftEmployeeIdGet$Response(params: {
    employeeId: number;

  }): Observable<StrictHttpResponse<void>> {

    const rb = new RequestBuilder(this.rootUrl, EmployeeService.V1EmployeeDraftEmployeeIdGetPath, 'get');
    if (params) {

      rb.path('employeeId', params.employeeId);

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
   * To access the full response (for headers, for example), `v1EmployeeDraftEmployeeIdGet$Response()` instead.
   *
   * This method doesn't expect any response body
   */
  v1EmployeeDraftEmployeeIdGet(params: {
    employeeId: number;

  }): Observable<void> {

    return this.v1EmployeeDraftEmployeeIdGet$Response(params).pipe(
      map((r: StrictHttpResponse<void>) => r.body as void)
    );
  }

  /**
   * Path part for operation v1EmployeeDraftEmployeeIdPut
   */
  static readonly V1EmployeeDraftEmployeeIdPutPath = '/v1/Employee/Draft/{employeeId}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `v1EmployeeDraftEmployeeIdPut$Json()` instead.
   *
   * This method sends `application/json` and handles response body of type `application/json`
   */
  v1EmployeeDraftEmployeeIdPut$Json$Response(params: {
    employeeId: number;

    body?: vwFullEmployeeRequest
  }): Observable<StrictHttpResponse<void>> {

    const rb = new RequestBuilder(this.rootUrl, EmployeeService.V1EmployeeDraftEmployeeIdPutPath, 'put');
    if (params) {

      rb.path('employeeId', params.employeeId);

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
   * To access the full response (for headers, for example), `v1EmployeeDraftEmployeeIdPut$Json$Response()` instead.
   *
   * This method sends `application/json` and handles response body of type `application/json`
   */
  v1EmployeeDraftEmployeeIdPut$Json(params: {
    employeeId: number;

    body?: vwFullEmployeeRequest
  }): Observable<void> {

    return this.v1EmployeeDraftEmployeeIdPut$Json$Response(params).pipe(
      map((r: StrictHttpResponse<void>) => r.body as void)
    );
  }

  /**
   * Path part for operation v1EmployeeDraftEmployeeIdDelete
   */
  static readonly V1EmployeeDraftEmployeeIdDeletePath = '/v1/Employee/Draft/{employeeId}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `v1EmployeeDraftEmployeeIdDelete()` instead.
   *
   * This method doesn't expect any response body
   */
  v1EmployeeDraftEmployeeIdDelete$Response(params: {
    employeeId: number;

  }): Observable<StrictHttpResponse<void>> {

    const rb = new RequestBuilder(this.rootUrl, EmployeeService.V1EmployeeDraftEmployeeIdDeletePath, 'delete');
    if (params) {

      rb.path('employeeId', params.employeeId);

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
   * To access the full response (for headers, for example), `v1EmployeeDraftEmployeeIdDelete$Response()` instead.
   *
   * This method doesn't expect any response body
   */
  v1EmployeeDraftEmployeeIdDelete(params: {
    employeeId: number;

  }): Observable<void> {

    return this.v1EmployeeDraftEmployeeIdDelete$Response(params).pipe(
      map((r: StrictHttpResponse<void>) => r.body as void)
    );
  }

  /**
   * Path part for operation v1EmployeeRevokeDraftEmployeeIdPost
   */
  static readonly V1EmployeeRevokeDraftEmployeeIdPostPath = '/v1/Employee/RevokeDraft/{employeeId}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `v1EmployeeRevokeDraftEmployeeIdPost()` instead.
   *
   * This method doesn't expect any response body
   */
  v1EmployeeRevokeDraftEmployeeIdPost$Response(params: {
    employeeId: number;

  }): Observable<StrictHttpResponse<void>> {

    const rb = new RequestBuilder(this.rootUrl, EmployeeService.V1EmployeeRevokeDraftEmployeeIdPostPath, 'post');
    if (params) {

      rb.path('employeeId', params.employeeId);

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
   * To access the full response (for headers, for example), `v1EmployeeRevokeDraftEmployeeIdPost$Response()` instead.
   *
   * This method doesn't expect any response body
   */
  v1EmployeeRevokeDraftEmployeeIdPost(params: {
    employeeId: number;

  }): Observable<void> {

    return this.v1EmployeeRevokeDraftEmployeeIdPost$Response(params).pipe(
      map((r: StrictHttpResponse<void>) => r.body as void)
    );
  }

  /**
   * Path part for operation v1EmployeeAddOrUpdateEmployeeOfficePut
   */
  static readonly V1EmployeeAddOrUpdateEmployeeOfficePutPath = '/v1/Employee/AddOrUpdateEmployeeOffice';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `v1EmployeeAddOrUpdateEmployeeOfficePut$Json()` instead.
   *
   * This method sends `application/json` and handles response body of type `application/json`
   */
  v1EmployeeAddOrUpdateEmployeeOfficePut$Json$Response(params?: {

    body?: vwEmployee
  }): Observable<StrictHttpResponse<void>> {

    const rb = new RequestBuilder(this.rootUrl, EmployeeService.V1EmployeeAddOrUpdateEmployeeOfficePutPath, 'put');
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
   * To access the full response (for headers, for example), `v1EmployeeAddOrUpdateEmployeeOfficePut$Json$Response()` instead.
   *
   * This method sends `application/json` and handles response body of type `application/json`
   */
  v1EmployeeAddOrUpdateEmployeeOfficePut$Json(params?: {

    body?: vwEmployee
  }): Observable<void> {

    return this.v1EmployeeAddOrUpdateEmployeeOfficePut$Json$Response(params).pipe(
      map((r: StrictHttpResponse<void>) => r.body as void)
    );
  }

  /**
   * Path part for operation v1EmployeeNotificationFlagPut
   */
  static readonly V1EmployeeNotificationFlagPutPath = '/v1/Employee/NotificationFlag';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `v1EmployeeNotificationFlagPut$Json()` instead.
   *
   * This method sends `application/json` and handles response body of type `application/json`
   */
  v1EmployeeNotificationFlagPut$Json$Response(params?: {

    body?: vwUpdateNotificationFlag
  }): Observable<StrictHttpResponse<void>> {

    const rb = new RequestBuilder(this.rootUrl, EmployeeService.V1EmployeeNotificationFlagPutPath, 'put');
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
   * To access the full response (for headers, for example), `v1EmployeeNotificationFlagPut$Json$Response()` instead.
   *
   * This method sends `application/json` and handles response body of type `application/json`
   */
  v1EmployeeNotificationFlagPut$Json(params?: {

    body?: vwUpdateNotificationFlag
  }): Observable<void> {

    return this.v1EmployeeNotificationFlagPut$Json$Response(params).pipe(
      map((r: StrictHttpResponse<void>) => r.body as void)
    );
  }

  /**
   * Path part for operation v1EmployeeDeactivateIdPut
   */
  static readonly V1EmployeeDeactivateIdPutPath = '/v1/Employee/deactivate/{id}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `v1EmployeeDeactivateIdPut()` instead.
   *
   * This method doesn't expect any response body
   */
  v1EmployeeDeactivateIdPut$Response(params: {
    id: number;

  }): Observable<StrictHttpResponse<void>> {

    const rb = new RequestBuilder(this.rootUrl, EmployeeService.V1EmployeeDeactivateIdPutPath, 'put');
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
   * To access the full response (for headers, for example), `v1EmployeeDeactivateIdPut$Response()` instead.
   *
   * This method doesn't expect any response body
   */
  v1EmployeeDeactivateIdPut(params: {
    id: number;

  }): Observable<void> {

    return this.v1EmployeeDeactivateIdPut$Response(params).pipe(
      map((r: StrictHttpResponse<void>) => r.body as void)
    );
  }

  /**
   * Path part for operation v1EmployeeCheckDeactivateIdPut
   */
  static readonly V1EmployeeCheckDeactivateIdPutPath = '/v1/Employee/CheckDeactivate/{id}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `v1EmployeeCheckDeactivateIdPut()` instead.
   *
   * This method doesn't expect any response body
   */
  v1EmployeeCheckDeactivateIdPut$Response(params: {
    id: number;

  }): Observable<StrictHttpResponse<void>> {

    const rb = new RequestBuilder(this.rootUrl, EmployeeService.V1EmployeeCheckDeactivateIdPutPath, 'put');
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
   * To access the full response (for headers, for example), `v1EmployeeCheckDeactivateIdPut$Response()` instead.
   *
   * This method doesn't expect any response body
   */
  v1EmployeeCheckDeactivateIdPut(params: {
    id: number;

  }): Observable<void> {

    return this.v1EmployeeCheckDeactivateIdPut$Response(params).pipe(
      map((r: StrictHttpResponse<void>) => r.body as void)
    );
  }

  /**
   * Path part for operation v1EmployeeCheckActiveMattersAndPcIdPut
   */
  static readonly V1EmployeeCheckActiveMattersAndPcIdPutPath = '/v1/Employee/CheckActiveMattersAndPC/{id}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `v1EmployeeCheckActiveMattersAndPcIdPut()` instead.
   *
   * This method doesn't expect any response body
   */
  v1EmployeeCheckActiveMattersAndPcIdPut$Response(params: {
    id: number;

  }): Observable<StrictHttpResponse<void>> {

    const rb = new RequestBuilder(this.rootUrl, EmployeeService.V1EmployeeCheckActiveMattersAndPcIdPutPath, 'put');
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
   * To access the full response (for headers, for example), `v1EmployeeCheckActiveMattersAndPcIdPut$Response()` instead.
   *
   * This method doesn't expect any response body
   */
  v1EmployeeCheckActiveMattersAndPcIdPut(params: {
    id: number;

  }): Observable<void> {

    return this.v1EmployeeCheckActiveMattersAndPcIdPut$Response(params).pipe(
      map((r: StrictHttpResponse<void>) => r.body as void)
    );
  }

  /**
   * Path part for operation v1EmployeeReactivateIdPut
   */
  static readonly V1EmployeeReactivateIdPutPath = '/v1/Employee/reactivate/{id}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `v1EmployeeReactivateIdPut()` instead.
   *
   * This method doesn't expect any response body
   */
  v1EmployeeReactivateIdPut$Response(params: {
    id: number;

  }): Observable<StrictHttpResponse<void>> {

    const rb = new RequestBuilder(this.rootUrl, EmployeeService.V1EmployeeReactivateIdPutPath, 'put');
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
   * To access the full response (for headers, for example), `v1EmployeeReactivateIdPut$Response()` instead.
   *
   * This method doesn't expect any response body
   */
  v1EmployeeReactivateIdPut(params: {
    id: number;

  }): Observable<void> {

    return this.v1EmployeeReactivateIdPut$Response(params).pipe(
      map((r: StrictHttpResponse<void>) => r.body as void)
    );
  }

  /**
   * Path part for operation v1EmployeeGroupsEmployeeIdGet
   */
  static readonly V1EmployeeGroupsEmployeeIdGetPath = '/v1/Employee/groups/{employeeId}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `v1EmployeeGroupsEmployeeIdGet()` instead.
   *
   * This method doesn't expect any response body
   */
  v1EmployeeGroupsEmployeeIdGet$Response(params: {
    employeeId: number;

  }): Observable<StrictHttpResponse<void>> {

    const rb = new RequestBuilder(this.rootUrl, EmployeeService.V1EmployeeGroupsEmployeeIdGetPath, 'get');
    if (params) {

      rb.path('employeeId', params.employeeId);

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
   * To access the full response (for headers, for example), `v1EmployeeGroupsEmployeeIdGet$Response()` instead.
   *
   * This method doesn't expect any response body
   */
  v1EmployeeGroupsEmployeeIdGet(params: {
    employeeId: number;

  }): Observable<void> {

    return this.v1EmployeeGroupsEmployeeIdGet$Response(params).pipe(
      map((r: StrictHttpResponse<void>) => r.body as void)
    );
  }

  /**
   * Path part for operation v1EmployeeJobFamilyGet
   */
  static readonly V1EmployeeJobFamilyGetPath = '/v1/Employee/JobFamily';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `v1EmployeeJobFamilyGet()` instead.
   *
   * This method doesn't expect any response body
   */
  v1EmployeeJobFamilyGet$Response(params?: {

  }): Observable<StrictHttpResponse<void>> {

    const rb = new RequestBuilder(this.rootUrl, EmployeeService.V1EmployeeJobFamilyGetPath, 'get');
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
   * To access the full response (for headers, for example), `v1EmployeeJobFamilyGet$Response()` instead.
   *
   * This method doesn't expect any response body
   */
  v1EmployeeJobFamilyGet(params?: {

  }): Observable<void> {

    return this.v1EmployeeJobFamilyGet$Response(params).pipe(
      map((r: StrictHttpResponse<void>) => r.body as void)
    );
  }

  /**
   * Path part for operation v1EmployeeJobFamilyPut
   */
  static readonly V1EmployeeJobFamilyPutPath = '/v1/Employee/JobFamily';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `v1EmployeeJobFamilyPut$Json()` instead.
   *
   * This method sends `application/json` and handles response body of type `application/json`
   */
  v1EmployeeJobFamilyPut$Json$Response(params?: {

    body?: vwEmployeeJobFamily
  }): Observable<StrictHttpResponse<void>> {

    const rb = new RequestBuilder(this.rootUrl, EmployeeService.V1EmployeeJobFamilyPutPath, 'put');
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
   * To access the full response (for headers, for example), `v1EmployeeJobFamilyPut$Json$Response()` instead.
   *
   * This method sends `application/json` and handles response body of type `application/json`
   */
  v1EmployeeJobFamilyPut$Json(params?: {

    body?: vwEmployeeJobFamily
  }): Observable<void> {

    return this.v1EmployeeJobFamilyPut$Json$Response(params).pipe(
      map((r: StrictHttpResponse<void>) => r.body as void)
    );
  }

  /**
   * Path part for operation v1EmployeeJobFamilyPost
   */
  static readonly V1EmployeeJobFamilyPostPath = '/v1/Employee/JobFamily';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `v1EmployeeJobFamilyPost$Json()` instead.
   *
   * This method sends `application/json` and handles response body of type `application/json`
   */
  v1EmployeeJobFamilyPost$Json$Response(params?: {

    body?: vwEmployeeJobFamily
  }): Observable<StrictHttpResponse<void>> {

    const rb = new RequestBuilder(this.rootUrl, EmployeeService.V1EmployeeJobFamilyPostPath, 'post');
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
   * To access the full response (for headers, for example), `v1EmployeeJobFamilyPost$Json$Response()` instead.
   *
   * This method sends `application/json` and handles response body of type `application/json`
   */
  v1EmployeeJobFamilyPost$Json(params?: {

    body?: vwEmployeeJobFamily
  }): Observable<void> {

    return this.v1EmployeeJobFamilyPost$Json$Response(params).pipe(
      map((r: StrictHttpResponse<void>) => r.body as void)
    );
  }

  /**
   * Path part for operation v1EmployeeJobFamilyFromSpGet
   */
  static readonly V1EmployeeJobFamilyFromSpGetPath = '/v1/Employee/JobFamilyFromSP';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `v1EmployeeJobFamilyFromSpGet()` instead.
   *
   * This method doesn't expect any response body
   */
  v1EmployeeJobFamilyFromSpGet$Response(params?: {

  }): Observable<StrictHttpResponse<void>> {

    const rb = new RequestBuilder(this.rootUrl, EmployeeService.V1EmployeeJobFamilyFromSpGetPath, 'get');
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
   * To access the full response (for headers, for example), `v1EmployeeJobFamilyFromSpGet$Response()` instead.
   *
   * This method doesn't expect any response body
   */
  v1EmployeeJobFamilyFromSpGet(params?: {

  }): Observable<void> {

    return this.v1EmployeeJobFamilyFromSpGet$Response(params).pipe(
      map((r: StrictHttpResponse<void>) => r.body as void)
    );
  }

  /**
   * Path part for operation v1EmployeeJobFamilyJobfamilyidGet
   */
  static readonly V1EmployeeJobFamilyJobfamilyidGetPath = '/v1/Employee/JobFamily/{jobfamilyid}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `v1EmployeeJobFamilyJobfamilyidGet()` instead.
   *
   * This method doesn't expect any response body
   */
  v1EmployeeJobFamilyJobfamilyidGet$Response(params: {
    jobfamilyid: number;

  }): Observable<StrictHttpResponse<void>> {

    const rb = new RequestBuilder(this.rootUrl, EmployeeService.V1EmployeeJobFamilyJobfamilyidGetPath, 'get');
    if (params) {

      rb.path('jobfamilyid', params.jobfamilyid);

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
   * To access the full response (for headers, for example), `v1EmployeeJobFamilyJobfamilyidGet$Response()` instead.
   *
   * This method doesn't expect any response body
   */
  v1EmployeeJobFamilyJobfamilyidGet(params: {
    jobfamilyid: number;

  }): Observable<void> {

    return this.v1EmployeeJobFamilyJobfamilyidGet$Response(params).pipe(
      map((r: StrictHttpResponse<void>) => r.body as void)
    );
  }

  /**
   * Path part for operation v1EmployeeJobFamilyJobfamilyidDelete
   */
  static readonly V1EmployeeJobFamilyJobfamilyidDeletePath = '/v1/Employee/JobFamily/{jobfamilyid}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `v1EmployeeJobFamilyJobfamilyidDelete()` instead.
   *
   * This method doesn't expect any response body
   */
  v1EmployeeJobFamilyJobfamilyidDelete$Response(params: {
    jobfamilyid: number;

  }): Observable<StrictHttpResponse<void>> {

    const rb = new RequestBuilder(this.rootUrl, EmployeeService.V1EmployeeJobFamilyJobfamilyidDeletePath, 'delete');
    if (params) {

      rb.path('jobfamilyid', params.jobfamilyid);

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
   * To access the full response (for headers, for example), `v1EmployeeJobFamilyJobfamilyidDelete$Response()` instead.
   *
   * This method doesn't expect any response body
   */
  v1EmployeeJobFamilyJobfamilyidDelete(params: {
    jobfamilyid: number;

  }): Observable<void> {

    return this.v1EmployeeJobFamilyJobfamilyidDelete$Response(params).pipe(
      map((r: StrictHttpResponse<void>) => r.body as void)
    );
  }

  /**
   * Path part for operation v1EmployeeJobFamilyUsersJobfamilyidGet
   */
  static readonly V1EmployeeJobFamilyUsersJobfamilyidGetPath = '/v1/Employee/JobFamily/Users/{jobfamilyid}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `v1EmployeeJobFamilyUsersJobfamilyidGet()` instead.
   *
   * This method doesn't expect any response body
   */
  v1EmployeeJobFamilyUsersJobfamilyidGet$Response(params: {
    jobfamilyid: number;

  }): Observable<StrictHttpResponse<void>> {

    const rb = new RequestBuilder(this.rootUrl, EmployeeService.V1EmployeeJobFamilyUsersJobfamilyidGetPath, 'get');
    if (params) {

      rb.path('jobfamilyid', params.jobfamilyid);

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
   * To access the full response (for headers, for example), `v1EmployeeJobFamilyUsersJobfamilyidGet$Response()` instead.
   *
   * This method doesn't expect any response body
   */
  v1EmployeeJobFamilyUsersJobfamilyidGet(params: {
    jobfamilyid: number;

  }): Observable<void> {

    return this.v1EmployeeJobFamilyUsersJobfamilyidGet$Response(params).pipe(
      map((r: StrictHttpResponse<void>) => r.body as void)
    );
  }

  /**
   * Path part for operation v1EmployeeAddOrUpdateNotificationSettingsPost
   */
  static readonly V1EmployeeAddOrUpdateNotificationSettingsPostPath = '/v1/Employee/AddOrUpdateNotificationSettings';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `v1EmployeeAddOrUpdateNotificationSettingsPost$Json()` instead.
   *
   * This method sends `application/json` and handles response body of type `application/json`
   */
  v1EmployeeAddOrUpdateNotificationSettingsPost$Json$Response(params?: {

    body?: vwEmployeeNotificationSettings
  }): Observable<StrictHttpResponse<void>> {

    const rb = new RequestBuilder(this.rootUrl, EmployeeService.V1EmployeeAddOrUpdateNotificationSettingsPostPath, 'post');
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
   * To access the full response (for headers, for example), `v1EmployeeAddOrUpdateNotificationSettingsPost$Json$Response()` instead.
   *
   * This method sends `application/json` and handles response body of type `application/json`
   */
  v1EmployeeAddOrUpdateNotificationSettingsPost$Json(params?: {

    body?: vwEmployeeNotificationSettings
  }): Observable<void> {

    return this.v1EmployeeAddOrUpdateNotificationSettingsPost$Json$Response(params).pipe(
      map((r: StrictHttpResponse<void>) => r.body as void)
    );
  }

  /**
   * Path part for operation v1EmployeeNotificationSettingsEmployeeIdPost
   */
  static readonly V1EmployeeNotificationSettingsEmployeeIdPostPath = '/v1/Employee/NotificationSettings/{EmployeeId}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `v1EmployeeNotificationSettingsEmployeeIdPost()` instead.
   *
   * This method doesn't expect any response body
   */
  v1EmployeeNotificationSettingsEmployeeIdPost$Response(params: {
    employeeId: number;

  }): Observable<StrictHttpResponse<void>> {

    const rb = new RequestBuilder(this.rootUrl, EmployeeService.V1EmployeeNotificationSettingsEmployeeIdPostPath, 'post');
    if (params) {

      rb.path('EmployeeId', params.employeeId);

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
   * To access the full response (for headers, for example), `v1EmployeeNotificationSettingsEmployeeIdPost$Response()` instead.
   *
   * This method doesn't expect any response body
   */
  v1EmployeeNotificationSettingsEmployeeIdPost(params: {
    employeeId: number;

  }): Observable<void> {

    return this.v1EmployeeNotificationSettingsEmployeeIdPost$Response(params).pipe(
      map((r: StrictHttpResponse<void>) => r.body as void)
    );
  }

  /**
   * Path part for operation getTargetHourNotSetInAppNotification
   */
  static readonly GetTargetHourNotSetInAppNotificationPath = '/v1/Employee/TargetHourNotSetInAppNotification';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `getTargetHourNotSetInAppNotification()` instead.
   *
   * This method doesn't expect any response body
   */
  getTargetHourNotSetInAppNotification$Response(params?: {

  }): Observable<StrictHttpResponse<void>> {

    const rb = new RequestBuilder(this.rootUrl, EmployeeService.GetTargetHourNotSetInAppNotificationPath, 'get');
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
   * To access the full response (for headers, for example), `getTargetHourNotSetInAppNotification$Response()` instead.
   *
   * This method doesn't expect any response body
   */
  getTargetHourNotSetInAppNotification(params?: {

  }): Observable<void> {

    return this.getTargetHourNotSetInAppNotification$Response(params).pipe(
      map((r: StrictHttpResponse<void>) => r.body as void)
    );
  }

  /**
   * Path part for operation getTargetHourNotSetInAppNotificationSuppressed
   */
  static readonly GetTargetHourNotSetInAppNotificationSuppressedPath = '/v1/Employee/{year}/TargetHourNotSetInAppNotificationSuppressed';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `getTargetHourNotSetInAppNotificationSuppressed()` instead.
   *
   * This method doesn't expect any response body
   */
  getTargetHourNotSetInAppNotificationSuppressed$Response(params: {
    year: number;

  }): Observable<StrictHttpResponse<void>> {

    const rb = new RequestBuilder(this.rootUrl, EmployeeService.GetTargetHourNotSetInAppNotificationSuppressedPath, 'get');
    if (params) {

      rb.path('year', params.year);

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
   * To access the full response (for headers, for example), `getTargetHourNotSetInAppNotificationSuppressed$Response()` instead.
   *
   * This method doesn't expect any response body
   */
  getTargetHourNotSetInAppNotificationSuppressed(params: {
    year: number;

  }): Observable<void> {

    return this.getTargetHourNotSetInAppNotificationSuppressed$Response(params).pipe(
      map((r: StrictHttpResponse<void>) => r.body as void)
    );
  }

  /**
   * Path part for operation updateActiveInActiveTargetHour
   */
  static readonly UpdateActiveInActiveTargetHourPath = '/v1/Employee/{isActive}/ActiveInActiveTargetHour';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `updateActiveInActiveTargetHour()` instead.
   *
   * This method doesn't expect any response body
   */
  updateActiveInActiveTargetHour$Response(params: {
    isActive: boolean;

  }): Observable<StrictHttpResponse<void>> {

    const rb = new RequestBuilder(this.rootUrl, EmployeeService.UpdateActiveInActiveTargetHourPath, 'put');
    if (params) {

      rb.path('isActive', params.isActive);

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
   * To access the full response (for headers, for example), `updateActiveInActiveTargetHour$Response()` instead.
   *
   * This method doesn't expect any response body
   */
  updateActiveInActiveTargetHour(params: {
    isActive: boolean;

  }): Observable<void> {

    return this.updateActiveInActiveTargetHour$Response(params).pipe(
      map((r: StrictHttpResponse<void>) => r.body as void)
    );
  }

}
