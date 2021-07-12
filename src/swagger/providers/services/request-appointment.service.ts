/* tslint:disable */
import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { BaseService } from '../base-service';
import { ApiConfiguration } from '../api-configuration';
import { StrictHttpResponse } from '../strict-http-response';
import { RequestBuilder } from '../request-builder';
import { Observable } from 'rxjs';
import { map, filter } from 'rxjs/operators';

import { vwRequestAppointment } from '../models/vw-request-appointment';

@Injectable({
  providedIn: 'root',
})
export class RequestAppointmentService extends BaseService {
  constructor(
    config: ApiConfiguration,
    http: HttpClient
  ) {
    super(config, http);
  }

  /**
   * Path part for operation v1RequestAppointmentAddUpdateAppointmentPost
   */
  static readonly V1RequestAppointmentAddUpdateAppointmentPostPath = '/v1/RequestAppointment/AddUpdateAppointment';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `v1RequestAppointmentAddUpdateAppointmentPost$Json()` instead.
   *
   * This method sends `application/json` and handles response body of type `application/json`
   */
  v1RequestAppointmentAddUpdateAppointmentPost$Json$Response(params?: {

    body?: vwRequestAppointment
  }): Observable<StrictHttpResponse<void>> {

    const rb = new RequestBuilder(this.rootUrl, RequestAppointmentService.V1RequestAppointmentAddUpdateAppointmentPostPath, 'post');
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
   * To access the full response (for headers, for example), `v1RequestAppointmentAddUpdateAppointmentPost$Json$Response()` instead.
   *
   * This method sends `application/json` and handles response body of type `application/json`
   */
  v1RequestAppointmentAddUpdateAppointmentPost$Json(params?: {

    body?: vwRequestAppointment
  }): Observable<void> {

    return this.v1RequestAppointmentAddUpdateAppointmentPost$Json$Response(params).pipe(
      map((r: StrictHttpResponse<void>) => r.body as void)
    );
  }

  /**
   * Path part for operation v1RequestAppointmentAppointmentInitiateGet
   */
  static readonly V1RequestAppointmentAppointmentInitiateGetPath = '/v1/RequestAppointment/AppointmentInitiate';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `v1RequestAppointmentAppointmentInitiateGet()` instead.
   *
   * This method doesn't expect any response body
   */
  v1RequestAppointmentAppointmentInitiateGet$Response(params?: {

  }): Observable<StrictHttpResponse<void>> {

    const rb = new RequestBuilder(this.rootUrl, RequestAppointmentService.V1RequestAppointmentAppointmentInitiateGetPath, 'get');
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
   * To access the full response (for headers, for example), `v1RequestAppointmentAppointmentInitiateGet$Response()` instead.
   *
   * This method doesn't expect any response body
   */
  v1RequestAppointmentAppointmentInitiateGet(params?: {

  }): Observable<void> {

    return this.v1RequestAppointmentAppointmentInitiateGet$Response(params).pipe(
      map((r: StrictHttpResponse<void>) => r.body as void)
    );
  }

  /**
   * Path part for operation v1RequestAppointmentGetPendingAppointmentsGet
   */
  static readonly V1RequestAppointmentGetPendingAppointmentsGetPath = '/v1/RequestAppointment/GetPendingAppointments';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `v1RequestAppointmentGetPendingAppointmentsGet()` instead.
   *
   * This method doesn't expect any response body
   */
  v1RequestAppointmentGetPendingAppointmentsGet$Response(params?: {

  }): Observable<StrictHttpResponse<void>> {

    const rb = new RequestBuilder(this.rootUrl, RequestAppointmentService.V1RequestAppointmentGetPendingAppointmentsGetPath, 'get');
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
   * To access the full response (for headers, for example), `v1RequestAppointmentGetPendingAppointmentsGet$Response()` instead.
   *
   * This method doesn't expect any response body
   */
  v1RequestAppointmentGetPendingAppointmentsGet(params?: {

  }): Observable<void> {

    return this.v1RequestAppointmentGetPendingAppointmentsGet$Response(params).pipe(
      map((r: StrictHttpResponse<void>) => r.body as void)
    );
  }

  /**
   * Path part for operation v1RequestAppointmentDeleteAppointmmentDelete
   */
  static readonly V1RequestAppointmentDeleteAppointmmentDeletePath = '/v1/RequestAppointment/DeleteAppointmment';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `v1RequestAppointmentDeleteAppointmmentDelete()` instead.
   *
   * This method doesn't expect any response body
   */
  v1RequestAppointmentDeleteAppointmmentDelete$Response(params?: {
    appointmentId?: number;

  }): Observable<StrictHttpResponse<void>> {

    const rb = new RequestBuilder(this.rootUrl, RequestAppointmentService.V1RequestAppointmentDeleteAppointmmentDeletePath, 'delete');
    if (params) {

      rb.query('appointmentId', params.appointmentId);

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
   * To access the full response (for headers, for example), `v1RequestAppointmentDeleteAppointmmentDelete$Response()` instead.
   *
   * This method doesn't expect any response body
   */
  v1RequestAppointmentDeleteAppointmmentDelete(params?: {
    appointmentId?: number;

  }): Observable<void> {

    return this.v1RequestAppointmentDeleteAppointmmentDelete$Response(params).pipe(
      map((r: StrictHttpResponse<void>) => r.body as void)
    );
  }

}
