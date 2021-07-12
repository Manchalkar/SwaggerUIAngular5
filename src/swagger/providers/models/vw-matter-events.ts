/* tslint:disable */
import { vwFullPerson } from './vw-full-person';
import { vwIdCodeName } from './vw-id-code-name';
import { vwIdName } from './vw-id-name';
import { vwMatterEventInvitees } from './vw-matter-event-invitees';
import { vwMatterEventsReminders } from './vw-matter-events-reminders';
import { vwRecurringEvent } from './vw-recurring-event';
export interface vwMatterEvents  {
  afterTravelTimeHours?: number;
  afterTravelTimeMinutes?: number;
  beforeTravelTimeHours?: number;
  beforeTravelTimeMinutes?: number;
  client?: vwFullPerson;
  consultationStatusId?: null | number;
  description?: null | string;
  displayDate?: null | string;
  displayIndex?: number;
  empTimezone?: null | string;
  endDateTime?: null | string;
  eventLocation?: null | string;
  eventProposedTimeId?: number;
  eventType?: vwIdCodeName;
  id?: number;
  invitees?: null | Array<vwMatterEventInvitees>;
  isAllDayEvent?: boolean;
  isDeleteAllProposal?: boolean;
  isRecurringEvent?: boolean;
  matter?: vwIdName;
  meetingTypeId?: null | number;
  office?: vwIdName;
  privacy?: vwIdCodeName;
  recurringEvent?: vwRecurringEvent;
  reminderSetting?: vwMatterEventsReminders;
  startDateTime?: null | string;
  status?: vwIdCodeName;
  title?: null | string;
  upcommingReccuringEventsTypeId?: null | number;
  vendorCalendarEvent?: null | string;
}
