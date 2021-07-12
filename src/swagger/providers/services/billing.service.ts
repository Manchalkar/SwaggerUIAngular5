/* tslint:disable */
import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { BaseService } from '../base-service';
import { ApiConfiguration } from '../api-configuration';
import { StrictHttpResponse } from '../strict-http-response';
import { RequestBuilder } from '../request-builder';
import { Observable } from 'rxjs';
import { map, filter } from 'rxjs/operators';

import { vwCreditCard } from '../models/vw-credit-card';
import { vwDownloadFile } from '../models/vw-download-file';
import { vwECheck } from '../models/vw-e-check';
import { vwPaymentToTrustEmail } from '../models/vw-payment-to-trust-email';
import { vwPaymentWithMethods } from '../models/vw-payment-with-methods';
import { vwPostPaymentToMultipleMatters } from '../models/vw-post-payment-to-multiple-matters';
import { vwPrintInvoice } from '../models/vw-print-invoice';
import { vwPrintLedgerHistory } from '../models/vw-print-ledger-history';
import { vwSendMatterPaymentEmail } from '../models/vw-send-matter-payment-email';
import { vwTrustPaymentWithPaymentMethod } from '../models/vw-trust-payment-with-payment-method';
import { vwUpdatePaymentMethods } from '../models/vw-update-payment-methods';
import { vwUpdatePaymentPlanAutoPay } from '../models/vw-update-payment-plan-auto-pay';

@Injectable({
  providedIn: 'root',
})
export class BillingService extends BaseService {
  constructor(
    config: ApiConfiguration,
    http: HttpClient
  ) {
    super(config, http);
  }

  /**
   * Path part for operation v1BillingPersonIdGet
   */
  static readonly V1BillingPersonIdGetPath = '/v1/Billing/{personId}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `v1BillingPersonIdGet()` instead.
   *
   * This method doesn't expect any response body
   */
  v1BillingPersonIdGet$Response(params: {
    personId: number;

  }): Observable<StrictHttpResponse<void>> {

    const rb = new RequestBuilder(this.rootUrl, BillingService.V1BillingPersonIdGetPath, 'get');
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
   * To access the full response (for headers, for example), `v1BillingPersonIdGet$Response()` instead.
   *
   * This method doesn't expect any response body
   */
  v1BillingPersonIdGet(params: {
    personId: number;

  }): Observable<void> {

    return this.v1BillingPersonIdGet$Response(params).pipe(
      map((r: StrictHttpResponse<void>) => r.body as void)
    );
  }

  /**
   * Path part for operation v1BillingBillingDetailsMatterMatterIdGet
   */
  static readonly V1BillingBillingDetailsMatterMatterIdGetPath = '/v1/Billing/BillingDetails/Matter/{matterId}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `v1BillingBillingDetailsMatterMatterIdGet()` instead.
   *
   * This method doesn't expect any response body
   */
  v1BillingBillingDetailsMatterMatterIdGet$Response(params: {
    matterId: number;

  }): Observable<StrictHttpResponse<void>> {

    const rb = new RequestBuilder(this.rootUrl, BillingService.V1BillingBillingDetailsMatterMatterIdGetPath, 'get');
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
   * To access the full response (for headers, for example), `v1BillingBillingDetailsMatterMatterIdGet$Response()` instead.
   *
   * This method doesn't expect any response body
   */
  v1BillingBillingDetailsMatterMatterIdGet(params: {
    matterId: number;

  }): Observable<void> {

    return this.v1BillingBillingDetailsMatterMatterIdGet$Response(params).pipe(
      map((r: StrictHttpResponse<void>) => r.body as void)
    );
  }

  /**
   * Path part for operation v1BillingBillingDetailsClientClientIdGet
   */
  static readonly V1BillingBillingDetailsClientClientIdGetPath = '/v1/Billing/BillingDetails/Client/{clientId}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `v1BillingBillingDetailsClientClientIdGet()` instead.
   *
   * This method doesn't expect any response body
   */
  v1BillingBillingDetailsClientClientIdGet$Response(params: {
    clientId: number;

  }): Observable<StrictHttpResponse<void>> {

    const rb = new RequestBuilder(this.rootUrl, BillingService.V1BillingBillingDetailsClientClientIdGetPath, 'get');
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
   * To access the full response (for headers, for example), `v1BillingBillingDetailsClientClientIdGet$Response()` instead.
   *
   * This method doesn't expect any response body
   */
  v1BillingBillingDetailsClientClientIdGet(params: {
    clientId: number;

  }): Observable<void> {

    return this.v1BillingBillingDetailsClientClientIdGet$Response(params).pipe(
      map((r: StrictHttpResponse<void>) => r.body as void)
    );
  }

  /**
   * Path part for operation v1BillingBillingDetailsConsultationFeeClientIdGet
   */
  static readonly V1BillingBillingDetailsConsultationFeeClientIdGetPath = '/v1/Billing/BillingDetails/ConsultationFee/{clientId}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `v1BillingBillingDetailsConsultationFeeClientIdGet()` instead.
   *
   * This method doesn't expect any response body
   */
  v1BillingBillingDetailsConsultationFeeClientIdGet$Response(params: {
    clientId: number;

  }): Observable<StrictHttpResponse<void>> {

    const rb = new RequestBuilder(this.rootUrl, BillingService.V1BillingBillingDetailsConsultationFeeClientIdGetPath, 'get');
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
   * To access the full response (for headers, for example), `v1BillingBillingDetailsConsultationFeeClientIdGet$Response()` instead.
   *
   * This method doesn't expect any response body
   */
  v1BillingBillingDetailsConsultationFeeClientIdGet(params: {
    clientId: number;

  }): Observable<void> {

    return this.v1BillingBillingDetailsConsultationFeeClientIdGet$Response(params).pipe(
      map((r: StrictHttpResponse<void>) => r.body as void)
    );
  }

  /**
   * Path part for operation v1BillingPaymentMethodsMatterMatterIdGet
   */
  static readonly V1BillingPaymentMethodsMatterMatterIdGetPath = '/v1/Billing/PaymentMethods/Matter/{matterId}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `v1BillingPaymentMethodsMatterMatterIdGet()` instead.
   *
   * This method doesn't expect any response body
   */
  v1BillingPaymentMethodsMatterMatterIdGet$Response(params: {
    matterId: number;

  }): Observable<StrictHttpResponse<void>> {

    const rb = new RequestBuilder(this.rootUrl, BillingService.V1BillingPaymentMethodsMatterMatterIdGetPath, 'get');
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
   * To access the full response (for headers, for example), `v1BillingPaymentMethodsMatterMatterIdGet$Response()` instead.
   *
   * This method doesn't expect any response body
   */
  v1BillingPaymentMethodsMatterMatterIdGet(params: {
    matterId: number;

  }): Observable<void> {

    return this.v1BillingPaymentMethodsMatterMatterIdGet$Response(params).pipe(
      map((r: StrictHttpResponse<void>) => r.body as void)
    );
  }

  /**
   * Path part for operation v1BillingPaymentMethodsClientClientIdGet
   */
  static readonly V1BillingPaymentMethodsClientClientIdGetPath = '/v1/Billing/PaymentMethods/Client/{clientId}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `v1BillingPaymentMethodsClientClientIdGet()` instead.
   *
   * This method doesn't expect any response body
   */
  v1BillingPaymentMethodsClientClientIdGet$Response(params: {
    clientId: number;

  }): Observable<StrictHttpResponse<void>> {

    const rb = new RequestBuilder(this.rootUrl, BillingService.V1BillingPaymentMethodsClientClientIdGetPath, 'get');
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
   * To access the full response (for headers, for example), `v1BillingPaymentMethodsClientClientIdGet$Response()` instead.
   *
   * This method doesn't expect any response body
   */
  v1BillingPaymentMethodsClientClientIdGet(params: {
    clientId: number;

  }): Observable<void> {

    return this.v1BillingPaymentMethodsClientClientIdGet$Response(params).pipe(
      map((r: StrictHttpResponse<void>) => r.body as void)
    );
  }

  /**
   * Path part for operation v1BillingPaymentMethodPut
   */
  static readonly V1BillingPaymentMethodPutPath = '/v1/Billing/paymentMethod';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `v1BillingPaymentMethodPut$Json()` instead.
   *
   * This method sends `application/json` and handles response body of type `application/json`
   */
  v1BillingPaymentMethodPut$Json$Response(params?: {

    body?: vwCreditCard
  }): Observable<StrictHttpResponse<void>> {

    const rb = new RequestBuilder(this.rootUrl, BillingService.V1BillingPaymentMethodPutPath, 'put');
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
   * To access the full response (for headers, for example), `v1BillingPaymentMethodPut$Json$Response()` instead.
   *
   * This method sends `application/json` and handles response body of type `application/json`
   */
  v1BillingPaymentMethodPut$Json(params?: {

    body?: vwCreditCard
  }): Observable<void> {

    return this.v1BillingPaymentMethodPut$Json$Response(params).pipe(
      map((r: StrictHttpResponse<void>) => r.body as void)
    );
  }

  /**
   * Path part for operation v1BillingPaymentMethodPost
   */
  static readonly V1BillingPaymentMethodPostPath = '/v1/Billing/paymentMethod';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `v1BillingPaymentMethodPost$Json()` instead.
   *
   * This method sends `application/json` and handles response body of type `application/json`
   */
  v1BillingPaymentMethodPost$Json$Response(params?: {

    body?: vwCreditCard
  }): Observable<StrictHttpResponse<void>> {

    const rb = new RequestBuilder(this.rootUrl, BillingService.V1BillingPaymentMethodPostPath, 'post');
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
   * To access the full response (for headers, for example), `v1BillingPaymentMethodPost$Json$Response()` instead.
   *
   * This method sends `application/json` and handles response body of type `application/json`
   */
  v1BillingPaymentMethodPost$Json(params?: {

    body?: vwCreditCard
  }): Observable<void> {

    return this.v1BillingPaymentMethodPost$Json$Response(params).pipe(
      map((r: StrictHttpResponse<void>) => r.body as void)
    );
  }

  /**
   * Path part for operation v1BillingPaymentMethodIdDelete
   */
  static readonly V1BillingPaymentMethodIdDeletePath = '/v1/Billing/paymentMethod/{id}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `v1BillingPaymentMethodIdDelete()` instead.
   *
   * This method doesn't expect any response body
   */
  v1BillingPaymentMethodIdDelete$Response(params: {
    id: number;

  }): Observable<StrictHttpResponse<void>> {

    const rb = new RequestBuilder(this.rootUrl, BillingService.V1BillingPaymentMethodIdDeletePath, 'delete');
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
   * To access the full response (for headers, for example), `v1BillingPaymentMethodIdDelete$Response()` instead.
   *
   * This method doesn't expect any response body
   */
  v1BillingPaymentMethodIdDelete(params: {
    id: number;

  }): Observable<void> {

    return this.v1BillingPaymentMethodIdDelete$Response(params).pipe(
      map((r: StrictHttpResponse<void>) => r.body as void)
    );
  }

  /**
   * Path part for operation v1BillingEcheckPut
   */
  static readonly V1BillingEcheckPutPath = '/v1/Billing/echeck';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `v1BillingEcheckPut$Json()` instead.
   *
   * This method sends `application/json` and handles response body of type `application/json`
   */
  v1BillingEcheckPut$Json$Response(params?: {

    body?: vwECheck
  }): Observable<StrictHttpResponse<void>> {

    const rb = new RequestBuilder(this.rootUrl, BillingService.V1BillingEcheckPutPath, 'put');
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
   * To access the full response (for headers, for example), `v1BillingEcheckPut$Json$Response()` instead.
   *
   * This method sends `application/json` and handles response body of type `application/json`
   */
  v1BillingEcheckPut$Json(params?: {

    body?: vwECheck
  }): Observable<void> {

    return this.v1BillingEcheckPut$Json$Response(params).pipe(
      map((r: StrictHttpResponse<void>) => r.body as void)
    );
  }

  /**
   * Path part for operation v1BillingEcheckPost
   */
  static readonly V1BillingEcheckPostPath = '/v1/Billing/echeck';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `v1BillingEcheckPost$Json()` instead.
   *
   * This method sends `application/json` and handles response body of type `application/json`
   */
  v1BillingEcheckPost$Json$Response(params?: {

    body?: vwECheck
  }): Observable<StrictHttpResponse<void>> {

    const rb = new RequestBuilder(this.rootUrl, BillingService.V1BillingEcheckPostPath, 'post');
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
   * To access the full response (for headers, for example), `v1BillingEcheckPost$Json$Response()` instead.
   *
   * This method sends `application/json` and handles response body of type `application/json`
   */
  v1BillingEcheckPost$Json(params?: {

    body?: vwECheck
  }): Observable<void> {

    return this.v1BillingEcheckPost$Json$Response(params).pipe(
      map((r: StrictHttpResponse<void>) => r.body as void)
    );
  }

  /**
   * Path part for operation v1BillingEcheckIdDelete
   */
  static readonly V1BillingEcheckIdDeletePath = '/v1/Billing/echeck/{id}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `v1BillingEcheckIdDelete()` instead.
   *
   * This method doesn't expect any response body
   */
  v1BillingEcheckIdDelete$Response(params: {
    id: number;

  }): Observable<StrictHttpResponse<void>> {

    const rb = new RequestBuilder(this.rootUrl, BillingService.V1BillingEcheckIdDeletePath, 'delete');
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
   * To access the full response (for headers, for example), `v1BillingEcheckIdDelete$Response()` instead.
   *
   * This method doesn't expect any response body
   */
  v1BillingEcheckIdDelete(params: {
    id: number;

  }): Observable<void> {

    return this.v1BillingEcheckIdDelete$Response(params).pipe(
      map((r: StrictHttpResponse<void>) => r.body as void)
    );
  }

  /**
   * Path part for operation v1BillingSavedPaymentMethodsMatterIdPut
   */
  static readonly V1BillingSavedPaymentMethodsMatterIdPutPath = '/v1/Billing/SavedPaymentMethods/{matterId}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `v1BillingSavedPaymentMethodsMatterIdPut$Json()` instead.
   *
   * This method sends `application/json` and handles response body of type `application/json`
   */
  v1BillingSavedPaymentMethodsMatterIdPut$Json$Response(params: {
    matterId: number;

    body?: vwUpdatePaymentMethods
  }): Observable<StrictHttpResponse<void>> {

    const rb = new RequestBuilder(this.rootUrl, BillingService.V1BillingSavedPaymentMethodsMatterIdPutPath, 'put');
    if (params) {

      rb.path('matterId', params.matterId);

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
   * To access the full response (for headers, for example), `v1BillingSavedPaymentMethodsMatterIdPut$Json$Response()` instead.
   *
   * This method sends `application/json` and handles response body of type `application/json`
   */
  v1BillingSavedPaymentMethodsMatterIdPut$Json(params: {
    matterId: number;

    body?: vwUpdatePaymentMethods
  }): Observable<void> {

    return this.v1BillingSavedPaymentMethodsMatterIdPut$Json$Response(params).pipe(
      map((r: StrictHttpResponse<void>) => r.body as void)
    );
  }

  /**
   * Path part for operation v1BillingPaymentPlanMatterIdPut
   */
  static readonly V1BillingPaymentPlanMatterIdPutPath = '/v1/Billing/PaymentPlan/{matterId}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `v1BillingPaymentPlanMatterIdPut$Json()` instead.
   *
   * This method sends `application/json` and handles response body of type `application/json`
   */
  v1BillingPaymentPlanMatterIdPut$Json$Response(params: {
    matterId: number;

    body?: vwUpdatePaymentPlanAutoPay
  }): Observable<StrictHttpResponse<void>> {

    const rb = new RequestBuilder(this.rootUrl, BillingService.V1BillingPaymentPlanMatterIdPutPath, 'put');
    if (params) {

      rb.path('matterId', params.matterId);

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
   * To access the full response (for headers, for example), `v1BillingPaymentPlanMatterIdPut$Json$Response()` instead.
   *
   * This method sends `application/json` and handles response body of type `application/json`
   */
  v1BillingPaymentPlanMatterIdPut$Json(params: {
    matterId: number;

    body?: vwUpdatePaymentPlanAutoPay
  }): Observable<void> {

    return this.v1BillingPaymentPlanMatterIdPut$Json$Response(params).pipe(
      map((r: StrictHttpResponse<void>) => r.body as void)
    );
  }

  /**
   * Path part for operation v1BillingGetDefaultInvoiceTemplateGet
   */
  static readonly V1BillingGetDefaultInvoiceTemplateGetPath = '/v1/Billing/GetDefaultInvoiceTemplate';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `v1BillingGetDefaultInvoiceTemplateGet()` instead.
   *
   * This method doesn't expect any response body
   */
  v1BillingGetDefaultInvoiceTemplateGet$Response(params?: {

  }): Observable<StrictHttpResponse<void>> {

    const rb = new RequestBuilder(this.rootUrl, BillingService.V1BillingGetDefaultInvoiceTemplateGetPath, 'get');
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
   * To access the full response (for headers, for example), `v1BillingGetDefaultInvoiceTemplateGet$Response()` instead.
   *
   * This method doesn't expect any response body
   */
  v1BillingGetDefaultInvoiceTemplateGet(params?: {

  }): Observable<void> {

    return this.v1BillingGetDefaultInvoiceTemplateGet$Response(params).pipe(
      map((r: StrictHttpResponse<void>) => r.body as void)
    );
  }

  /**
   * Path part for operation v1BillingGetDefaultReceiptTemplateGet
   */
  static readonly V1BillingGetDefaultReceiptTemplateGetPath = '/v1/Billing/GetDefaultReceiptTemplate';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `v1BillingGetDefaultReceiptTemplateGet()` instead.
   *
   * This method doesn't expect any response body
   */
  v1BillingGetDefaultReceiptTemplateGet$Response(params?: {

  }): Observable<StrictHttpResponse<void>> {

    const rb = new RequestBuilder(this.rootUrl, BillingService.V1BillingGetDefaultReceiptTemplateGetPath, 'get');
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
   * To access the full response (for headers, for example), `v1BillingGetDefaultReceiptTemplateGet$Response()` instead.
   *
   * This method doesn't expect any response body
   */
  v1BillingGetDefaultReceiptTemplateGet(params?: {

  }): Observable<void> {

    return this.v1BillingGetDefaultReceiptTemplateGet$Response(params).pipe(
      map((r: StrictHttpResponse<void>) => r.body as void)
    );
  }

  /**
   * Path part for operation v1BillingSettingsMatterMatterIdGet
   */
  static readonly V1BillingSettingsMatterMatterIdGetPath = '/v1/Billing/settings/matter/{matterId}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `v1BillingSettingsMatterMatterIdGet()` instead.
   *
   * This method doesn't expect any response body
   */
  v1BillingSettingsMatterMatterIdGet$Response(params: {
    matterId: number;

  }): Observable<StrictHttpResponse<void>> {

    const rb = new RequestBuilder(this.rootUrl, BillingService.V1BillingSettingsMatterMatterIdGetPath, 'get');
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
   * To access the full response (for headers, for example), `v1BillingSettingsMatterMatterIdGet$Response()` instead.
   *
   * This method doesn't expect any response body
   */
  v1BillingSettingsMatterMatterIdGet(params: {
    matterId: number;

  }): Observable<void> {

    return this.v1BillingSettingsMatterMatterIdGet$Response(params).pipe(
      map((r: StrictHttpResponse<void>) => r.body as void)
    );
  }

  /**
   * Path part for operation v1BillingInvoiceInvoiceIdGet
   */
  static readonly V1BillingInvoiceInvoiceIdGetPath = '/v1/Billing/invoice/{invoiceId}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `v1BillingInvoiceInvoiceIdGet()` instead.
   *
   * This method doesn't expect any response body
   */
  v1BillingInvoiceInvoiceIdGet$Response(params: {
    invoiceId: number;

  }): Observable<StrictHttpResponse<void>> {

    const rb = new RequestBuilder(this.rootUrl, BillingService.V1BillingInvoiceInvoiceIdGetPath, 'get');
    if (params) {

      rb.path('invoiceId', params.invoiceId);

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
   * To access the full response (for headers, for example), `v1BillingInvoiceInvoiceIdGet$Response()` instead.
   *
   * This method doesn't expect any response body
   */
  v1BillingInvoiceInvoiceIdGet(params: {
    invoiceId: number;

  }): Observable<void> {

    return this.v1BillingInvoiceInvoiceIdGet$Response(params).pipe(
      map((r: StrictHttpResponse<void>) => r.body as void)
    );
  }

  /**
   * Path part for operation v1BillingPrintInvoiceDetailsPost
   */
  static readonly V1BillingPrintInvoiceDetailsPostPath = '/v1/Billing/printInvoiceDetails';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `v1BillingPrintInvoiceDetailsPost$Json()` instead.
   *
   * This method sends `application/json` and handles response body of type `application/json`
   */
  v1BillingPrintInvoiceDetailsPost$Json$Response(params?: {

    body?: vwPrintInvoice
  }): Observable<StrictHttpResponse<void>> {

    const rb = new RequestBuilder(this.rootUrl, BillingService.V1BillingPrintInvoiceDetailsPostPath, 'post');
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
   * To access the full response (for headers, for example), `v1BillingPrintInvoiceDetailsPost$Json$Response()` instead.
   *
   * This method sends `application/json` and handles response body of type `application/json`
   */
  v1BillingPrintInvoiceDetailsPost$Json(params?: {

    body?: vwPrintInvoice
  }): Observable<void> {

    return this.v1BillingPrintInvoiceDetailsPost$Json$Response(params).pipe(
      map((r: StrictHttpResponse<void>) => r.body as void)
    );
  }

  /**
   * Path part for operation v1BillingPrintInvoiceDetailsInvoiceIdGet
   */
  static readonly V1BillingPrintInvoiceDetailsInvoiceIdGetPath = '/v1/Billing/printInvoiceDetails/{invoiceId}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `v1BillingPrintInvoiceDetailsInvoiceIdGet()` instead.
   *
   * This method doesn't expect any response body
   */
  v1BillingPrintInvoiceDetailsInvoiceIdGet$Response(params: {
    invoiceId: number;

  }): Observable<StrictHttpResponse<void>> {

    const rb = new RequestBuilder(this.rootUrl, BillingService.V1BillingPrintInvoiceDetailsInvoiceIdGetPath, 'get');
    if (params) {

      rb.path('invoiceId', params.invoiceId);

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
   * To access the full response (for headers, for example), `v1BillingPrintInvoiceDetailsInvoiceIdGet$Response()` instead.
   *
   * This method doesn't expect any response body
   */
  v1BillingPrintInvoiceDetailsInvoiceIdGet(params: {
    invoiceId: number;

  }): Observable<void> {

    return this.v1BillingPrintInvoiceDetailsInvoiceIdGet$Response(params).pipe(
      map((r: StrictHttpResponse<void>) => r.body as void)
    );
  }

  /**
   * Path part for operation v1BillingDownloadFilePost
   */
  static readonly V1BillingDownloadFilePostPath = '/v1/Billing/downloadFile';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `v1BillingDownloadFilePost$Json()` instead.
   *
   * This method sends `application/json` and handles response body of type `application/json`
   */
  v1BillingDownloadFilePost$Json$Response(params?: {

    body?: vwDownloadFile
  }): Observable<StrictHttpResponse<void>> {

    const rb = new RequestBuilder(this.rootUrl, BillingService.V1BillingDownloadFilePostPath, 'post');
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
   * To access the full response (for headers, for example), `v1BillingDownloadFilePost$Json$Response()` instead.
   *
   * This method sends `application/json` and handles response body of type `application/json`
   */
  v1BillingDownloadFilePost$Json(params?: {

    body?: vwDownloadFile
  }): Observable<void> {

    return this.v1BillingDownloadFilePost$Json$Response(params).pipe(
      map((r: StrictHttpResponse<void>) => r.body as void)
    );
  }

  /**
   * Path part for operation v1BillingPrintLedgerHistoryPost
   */
  static readonly V1BillingPrintLedgerHistoryPostPath = '/v1/Billing/printLedgerHistory';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `v1BillingPrintLedgerHistoryPost$Json()` instead.
   *
   * This method sends `application/json` and handles response body of type `application/json`
   */
  v1BillingPrintLedgerHistoryPost$Json$Response(params?: {

    body?: vwPrintLedgerHistory
  }): Observable<StrictHttpResponse<void>> {

    const rb = new RequestBuilder(this.rootUrl, BillingService.V1BillingPrintLedgerHistoryPostPath, 'post');
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
   * To access the full response (for headers, for example), `v1BillingPrintLedgerHistoryPost$Json$Response()` instead.
   *
   * This method sends `application/json` and handles response body of type `application/json`
   */
  v1BillingPrintLedgerHistoryPost$Json(params?: {

    body?: vwPrintLedgerHistory
  }): Observable<void> {

    return this.v1BillingPrintLedgerHistoryPost$Json$Response(params).pipe(
      map((r: StrictHttpResponse<void>) => r.body as void)
    );
  }

  /**
   * Path part for operation v1BillingPostPaymentForTrustPost
   */
  static readonly V1BillingPostPaymentForTrustPostPath = '/v1/Billing/PostPaymentForTrust';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `v1BillingPostPaymentForTrustPost$Json()` instead.
   *
   * This method sends `application/json` and handles response body of type `application/json`
   */
  v1BillingPostPaymentForTrustPost$Json$Response(params?: {

    body?: vwTrustPaymentWithPaymentMethod
  }): Observable<StrictHttpResponse<void>> {

    const rb = new RequestBuilder(this.rootUrl, BillingService.V1BillingPostPaymentForTrustPostPath, 'post');
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
   * To access the full response (for headers, for example), `v1BillingPostPaymentForTrustPost$Json$Response()` instead.
   *
   * This method sends `application/json` and handles response body of type `application/json`
   */
  v1BillingPostPaymentForTrustPost$Json(params?: {

    body?: vwTrustPaymentWithPaymentMethod
  }): Observable<void> {

    return this.v1BillingPostPaymentForTrustPost$Json$Response(params).pipe(
      map((r: StrictHttpResponse<void>) => r.body as void)
    );
  }

  /**
   * Path part for operation v1BillingPostPaymentToMatterBalancePost
   */
  static readonly V1BillingPostPaymentToMatterBalancePostPath = '/v1/Billing/PostPaymentToMatterBalance';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `v1BillingPostPaymentToMatterBalancePost$Json()` instead.
   *
   * This method sends `application/json` and handles response body of type `application/json`
   */
  v1BillingPostPaymentToMatterBalancePost$Json$Response(params?: {

    body?: vwPaymentWithMethods
  }): Observable<StrictHttpResponse<void>> {

    const rb = new RequestBuilder(this.rootUrl, BillingService.V1BillingPostPaymentToMatterBalancePostPath, 'post');
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
   * To access the full response (for headers, for example), `v1BillingPostPaymentToMatterBalancePost$Json$Response()` instead.
   *
   * This method sends `application/json` and handles response body of type `application/json`
   */
  v1BillingPostPaymentToMatterBalancePost$Json(params?: {

    body?: vwPaymentWithMethods
  }): Observable<void> {

    return this.v1BillingPostPaymentToMatterBalancePost$Json$Response(params).pipe(
      map((r: StrictHttpResponse<void>) => r.body as void)
    );
  }

  /**
   * Path part for operation v1BillingPostPaymentToMultipleMattersPost
   */
  static readonly V1BillingPostPaymentToMultipleMattersPostPath = '/v1/Billing/PostPaymentToMultipleMatters';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `v1BillingPostPaymentToMultipleMattersPost$Json()` instead.
   *
   * This method sends `application/json` and handles response body of type `application/json`
   */
  v1BillingPostPaymentToMultipleMattersPost$Json$Response(params?: {

    body?: vwPostPaymentToMultipleMatters
  }): Observable<StrictHttpResponse<void>> {

    const rb = new RequestBuilder(this.rootUrl, BillingService.V1BillingPostPaymentToMultipleMattersPostPath, 'post');
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
   * To access the full response (for headers, for example), `v1BillingPostPaymentToMultipleMattersPost$Json$Response()` instead.
   *
   * This method sends `application/json` and handles response body of type `application/json`
   */
  v1BillingPostPaymentToMultipleMattersPost$Json(params?: {

    body?: vwPostPaymentToMultipleMatters
  }): Observable<void> {

    return this.v1BillingPostPaymentToMultipleMattersPost$Json$Response(params).pipe(
      map((r: StrictHttpResponse<void>) => r.body as void)
    );
  }

  /**
   * Path part for operation v1BillingPaymentEmailMatterIdPost
   */
  static readonly V1BillingPaymentEmailMatterIdPostPath = '/v1/Billing/payment/email/{matterId}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `v1BillingPaymentEmailMatterIdPost$Json()` instead.
   *
   * This method sends `application/json` and handles response body of type `application/json`
   */
  v1BillingPaymentEmailMatterIdPost$Json$Response(params: {
    matterId: number;

    body?: vwSendMatterPaymentEmail
  }): Observable<StrictHttpResponse<void>> {

    const rb = new RequestBuilder(this.rootUrl, BillingService.V1BillingPaymentEmailMatterIdPostPath, 'post');
    if (params) {

      rb.path('matterId', params.matterId);

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
   * To access the full response (for headers, for example), `v1BillingPaymentEmailMatterIdPost$Json$Response()` instead.
   *
   * This method sends `application/json` and handles response body of type `application/json`
   */
  v1BillingPaymentEmailMatterIdPost$Json(params: {
    matterId: number;

    body?: vwSendMatterPaymentEmail
  }): Observable<void> {

    return this.v1BillingPaymentEmailMatterIdPost$Json$Response(params).pipe(
      map((r: StrictHttpResponse<void>) => r.body as void)
    );
  }

  /**
   * Path part for operation v1BillingTrustpaymentEmailMatterIdPost
   */
  static readonly V1BillingTrustpaymentEmailMatterIdPostPath = '/v1/Billing/trustpayment/email/{matterId}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `v1BillingTrustpaymentEmailMatterIdPost$Json()` instead.
   *
   * This method sends `application/json` and handles response body of type `application/json`
   */
  v1BillingTrustpaymentEmailMatterIdPost$Json$Response(params: {
    matterId: number;

    body?: vwPaymentToTrustEmail
  }): Observable<StrictHttpResponse<void>> {

    const rb = new RequestBuilder(this.rootUrl, BillingService.V1BillingTrustpaymentEmailMatterIdPostPath, 'post');
    if (params) {

      rb.path('matterId', params.matterId);

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
   * To access the full response (for headers, for example), `v1BillingTrustpaymentEmailMatterIdPost$Json$Response()` instead.
   *
   * This method sends `application/json` and handles response body of type `application/json`
   */
  v1BillingTrustpaymentEmailMatterIdPost$Json(params: {
    matterId: number;

    body?: vwPaymentToTrustEmail
  }): Observable<void> {

    return this.v1BillingTrustpaymentEmailMatterIdPost$Json$Response(params).pipe(
      map((r: StrictHttpResponse<void>) => r.body as void)
    );
  }

  /**
   * Path part for operation v1BillingOfficeAddressMatterIdGet
   */
  static readonly V1BillingOfficeAddressMatterIdGetPath = '/v1/Billing/officeAddress/{matterId}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `v1BillingOfficeAddressMatterIdGet()` instead.
   *
   * This method doesn't expect any response body
   */
  v1BillingOfficeAddressMatterIdGet$Response(params: {
    matterId: number;

  }): Observable<StrictHttpResponse<void>> {

    const rb = new RequestBuilder(this.rootUrl, BillingService.V1BillingOfficeAddressMatterIdGetPath, 'get');
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
   * To access the full response (for headers, for example), `v1BillingOfficeAddressMatterIdGet$Response()` instead.
   *
   * This method doesn't expect any response body
   */
  v1BillingOfficeAddressMatterIdGet(params: {
    matterId: number;

  }): Observable<void> {

    return this.v1BillingOfficeAddressMatterIdGet$Response(params).pipe(
      map((r: StrictHttpResponse<void>) => r.body as void)
    );
  }

  /**
   * Path part for operation v1BillingConsultLawOfficeAddressClientIdGet
   */
  static readonly V1BillingConsultLawOfficeAddressClientIdGetPath = '/v1/Billing/consultLawOfficeAddress/{clientId}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `v1BillingConsultLawOfficeAddressClientIdGet()` instead.
   *
   * This method doesn't expect any response body
   */
  v1BillingConsultLawOfficeAddressClientIdGet$Response(params: {
    clientId: number;

  }): Observable<StrictHttpResponse<void>> {

    const rb = new RequestBuilder(this.rootUrl, BillingService.V1BillingConsultLawOfficeAddressClientIdGetPath, 'get');
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
   * To access the full response (for headers, for example), `v1BillingConsultLawOfficeAddressClientIdGet$Response()` instead.
   *
   * This method doesn't expect any response body
   */
  v1BillingConsultLawOfficeAddressClientIdGet(params: {
    clientId: number;

  }): Observable<void> {

    return this.v1BillingConsultLawOfficeAddressClientIdGet$Response(params).pipe(
      map((r: StrictHttpResponse<void>) => r.body as void)
    );
  }

}
