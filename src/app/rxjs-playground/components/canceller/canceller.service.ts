import {Injectable} from "@angular/core";
import {UploadFile} from "./file.class";
import {Observable, Subject, timer} from "rxjs";
import {UploadStatusEvent} from "./upload-status-event.interface";

@Injectable({
  providedIn: 'root'
})
export class CancellerService {
  uploadStatusEvent: Subject<UploadStatusEvent> = new Subject();

  uploadFile(file: UploadFile): Observable<number> {
    return timer(10000);
  }
}

