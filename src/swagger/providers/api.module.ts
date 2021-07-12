/* tslint:disable */
import { NgModule, ModuleWithProviders, SkipSelf, Optional } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ApiConfiguration, ApiConfigurationParams } from './api-configuration';

import { AuthService } from './services/auth.service';
import { BillingService } from './services/billing.service';
import { CalendarService } from './services/calendar.service';
import { ClientService } from './services/client.service';
import { DmsService } from './services/dms.service';
import { DocumentPortalService } from './services/document-portal.service';
import { DocumentSettingService } from './services/document-setting.service';
import { EmployeeService } from './services/employee.service';
import { MatterService } from './services/matter.service';
import { MessageService } from './services/message.service';
import { MiscService } from './services/misc.service';
import { NoteService } from './services/note.service';
import { NotificationService } from './services/notification.service';
import { PersonService } from './services/person.service';
import { PlacesService } from './services/places.service';
import { RequestAppointmentService } from './services/request-appointment.service';
import { ResourceCenterService } from './services/resource-center.service';
import { SearchService } from './services/search.service';
import { SiteLogService } from './services/site-log.service';
import { TaskService } from './services/task.service';
import { TenantService } from './services/tenant.service';
import { ThirdPartyUserService } from './services/third-party-user.service';
import { TrustAccountService } from './services/trust-account.service';

/**
 * Module that provides all services and configuration.
 */
@NgModule({
  imports: [],
  exports: [],
  declarations: [],
  providers: [
    AuthService,
    BillingService,
    CalendarService,
    ClientService,
    DmsService,
    DocumentPortalService,
    DocumentSettingService,
    EmployeeService,
    MatterService,
    MessageService,
    MiscService,
    NoteService,
    NotificationService,
    PersonService,
    PlacesService,
    RequestAppointmentService,
    ResourceCenterService,
    SearchService,
    SiteLogService,
    TaskService,
    TenantService,
    ThirdPartyUserService,
    TrustAccountService,
    ApiConfiguration
  ],
})
export class ApiModule {
  static forRoot(params: ApiConfigurationParams): ModuleWithProviders {
    return {
      ngModule: ApiModule,
      providers: [
        {
          provide: ApiConfiguration,
          useValue: params
        }
      ]
    }
  }

  constructor( 
    @Optional() @SkipSelf() parentModule: ApiModule,
    @Optional() http: HttpClient
  ) {
    if (parentModule) {
      throw new Error('ApiModule is already loaded. Import in your base AppModule only.');
    }
    if (!http) {
      throw new Error('You need to import the HttpClientModule in your AppModule! \n' +
      'See also https://github.com/angular/angular/issues/20575');
    }
  }
}
