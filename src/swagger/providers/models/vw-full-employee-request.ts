/* tslint:disable */
import { vwEmpGeneralInfo } from './vw-emp-general-info';
import { vwEmpSettingInfo } from './vw-emp-setting-info';
export interface vwFullEmployeeRequest  {
  generalInfo?: vwEmpGeneralInfo;
  isDraft?: null | boolean;
  settings?: vwEmpSettingInfo;
}
