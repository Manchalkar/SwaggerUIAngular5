/* tslint:disable */
import { vwRate } from './vw-rate';
export interface vwEmpSettingInfo  {
  baseRate?: null | number;
  fridayCloseHours?: null | string;
  fridayOpenHours?: null | string;
  isCustom?: null | boolean;
  isFridayCustom?: null | boolean;
  isMondayCustom?: null | boolean;
  isSaturdayCustom?: null | boolean;
  isSundayCustom?: null | boolean;
  isThursdayCustom?: null | boolean;
  isTuesdayCustom?: null | boolean;
  isWednesdayCustom?: null | boolean;
  mondayCloseHours?: null | string;
  mondayOpenHours?: null | string;
  rates?: null | Array<vwRate>;
  saturdayCloseHours?: null | string;
  saturdayOpenHours?: null | string;
  sundayCloseHours?: null | string;
  sundayOpenHours?: null | string;
  thursdayCloseHours?: null | string;
  thursdayOpenHours?: null | string;
  timeZone?: null | string;
  tuesdayCloseHours?: null | string;
  tuesdayOpenHours?: null | string;
  wednesdayCloseHours?: null | string;
  wednesdayOpenHours?: null | string;
}
