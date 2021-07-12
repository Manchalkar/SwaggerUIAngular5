/* tslint:disable */
import { CalendarDisplayView } from './calendar-display-view';
import { CalendarView } from './calendar-view';
export interface vwCalendarClientSettings  {
  calendarDisplayView?: CalendarDisplayView;
  calendarView?: CalendarView;
  createdAt?: string;
  createdBy?: number;
  id?: number;
  isActive?: boolean;
  lastUpdated?: null | string;
  personId?: number;
  updatedBy?: null | number;
}
