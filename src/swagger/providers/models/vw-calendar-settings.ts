/* tslint:disable */
import { vwIdName } from './vw-id-name';
export interface vwCalendarSettings  {
  calendarView?: null | number;
  eventWithTravelEnable?: null | boolean;
  eventWithTravelQuantity?: null | number;
  eventWithTravelUnits?: null | string;
  eventWithoutTravelEnable?: null | boolean;
  eventWithoutTravelQuantity?: null | number;
  eventWithoutTravelUnits?: null | string;
  fridayCloseHours?: null | string;
  fridayOpenHours?: null | string;
  ignoreTimezoneCheck?: null | boolean;
  isEventVisibleToOther?: null | boolean;
  isFridayCustom?: null | boolean;
  isMondayCustom?: null | boolean;
  isNotificationReminderEnabled?: null | boolean;
  isSaturdayCustom?: null | boolean;
  isSkipCalendarIntegration?: null | boolean;
  isSundayCustom?: null | boolean;
  isThursdayCustom?: null | boolean;
  isTuesdayCustom?: null | boolean;
  isWednesdayCustom?: null | boolean;
  mondayCloseHours?: null | string;
  mondayOpenHours?: null | string;
  personId?: number;
  primaryOffice?: vwIdName;
  saturdayCloseHours?: null | string;
  saturdayOpenHours?: null | string;
  sundayCloseHours?: null | string;
  sundayOpenHours?: null | string;
  thursdayCloseHours?: null | string;
  thursdayOpenHours?: null | string;
  timeZoneId?: null | string;
  tuesdayCloseHours?: null | string;
  tuesdayOpenHours?: null | string;
  wednesdayCloseHours?: null | string;
  wednesdayOpenHours?: null | string;
}
