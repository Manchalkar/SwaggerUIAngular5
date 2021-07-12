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
export class NoteService extends BaseService {
  constructor(
    config: ApiConfiguration,
    http: HttpClient
  ) {
    super(config, http);
  }

  /**
   * Path part for operation v1NoteMatterListMatterIdGet
   */
  static readonly V1NoteMatterListMatterIdGetPath = '/v1/Note/matter/list/{matterId}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `v1NoteMatterListMatterIdGet()` instead.
   *
   * This method doesn't expect any response body
   */
  v1NoteMatterListMatterIdGet$Response(params: {
    matterId: number;
    isMostRecent?: boolean;

  }): Observable<StrictHttpResponse<void>> {

    const rb = new RequestBuilder(this.rootUrl, NoteService.V1NoteMatterListMatterIdGetPath, 'get');
    if (params) {

      rb.path('matterId', params.matterId);
      rb.query('isMostRecent', params.isMostRecent);

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
   * To access the full response (for headers, for example), `v1NoteMatterListMatterIdGet$Response()` instead.
   *
   * This method doesn't expect any response body
   */
  v1NoteMatterListMatterIdGet(params: {
    matterId: number;
    isMostRecent?: boolean;

  }): Observable<void> {

    return this.v1NoteMatterListMatterIdGet$Response(params).pipe(
      map((r: StrictHttpResponse<void>) => r.body as void)
    );
  }

}
