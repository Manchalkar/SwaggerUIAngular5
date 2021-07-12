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
export class DocumentSettingService extends BaseService {
  constructor(
    config: ApiConfiguration,
    http: HttpClient
  ) {
    super(config, http);
  }

  /**
   * Path part for operation v1DocumentSettingTenantTenantIdGet
   */
  static readonly V1DocumentSettingTenantTenantIdGetPath = '/v1/DocumentSetting/tenant/{tenantId}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `v1DocumentSettingTenantTenantIdGet()` instead.
   *
   * This method doesn't expect any response body
   */
  v1DocumentSettingTenantTenantIdGet$Response(params: {
    tenantId: number;

  }): Observable<StrictHttpResponse<void>> {

    const rb = new RequestBuilder(this.rootUrl, DocumentSettingService.V1DocumentSettingTenantTenantIdGetPath, 'get');
    if (params) {

      rb.path('tenantId', params.tenantId);

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
   * To access the full response (for headers, for example), `v1DocumentSettingTenantTenantIdGet$Response()` instead.
   *
   * This method doesn't expect any response body
   */
  v1DocumentSettingTenantTenantIdGet(params: {
    tenantId: number;

  }): Observable<void> {

    return this.v1DocumentSettingTenantTenantIdGet$Response(params).pipe(
      map((r: StrictHttpResponse<void>) => r.body as void)
    );
  }

}
