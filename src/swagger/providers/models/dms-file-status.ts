/* tslint:disable */
export enum DmsFileStatus {
  Unknown = 'Unknown',
  VerifyFileName = 'VerifyFileName',
  VerifyFileNamePassed = 'VerifyFileNamePassed',
  VerifyFileNameFailed = 'VerifyFileNameFailed',
  SecurityScanInProgress = 'SecurityScanInProgress',
  SecurityScanPassed = 'SecurityScanPassed',
  SecurityScanFailedVirus = 'SecurityScanFailedVirus',
  SecurityScanFailedError = 'SecurityScanFailedError',
  UploadInProgress = 'UploadInProgress',
  UploadDone = 'UploadDone',
  UploadFailed = 'UploadFailed',
  UploadCancelled = 'UploadCancelled',
  UploadRejected = 'UploadRejected',
  GeneratedFile = 'GeneratedFile'
}
