import {UploadFile} from "./file.class";

export interface UploadStatusEvent {
  file: UploadFile;
  isLoading: boolean;
  isUploaded: boolean;
}
