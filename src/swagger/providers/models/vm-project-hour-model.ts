/* tslint:disable */
import { TargetHourType } from './target-hour-type';
export interface vmProjectHourModel  {
  employeeId?: number;
  id?: number;
  jobFamilyTargetHour?: null | number;
  targetHourType?: TargetHourType;
  targetHours?: number;
  totalWorkingWeek?: number;
}
