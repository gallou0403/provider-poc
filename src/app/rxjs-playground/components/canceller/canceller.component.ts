import {Component, OnDestroy, OnInit} from '@angular/core';
import {CancellerService} from "./canceller.service";
import { UploadFile } from './file.class';
import {Subject, takeUntil} from "rxjs";

const MOCK_FILES = [
  new UploadFile('MOCK FILE 1'),
  new UploadFile('MOCK FILE 2'),
  new UploadFile('MOCK FILE 3'),
  new UploadFile('MOCK FILE 4'),
  new UploadFile('MOCK FILE 5'),
  new UploadFile('MOCK FILE 6'),
  new UploadFile('MOCK FILE 7'),
  new UploadFile('MOCK FILE 8'),
  new UploadFile('MOCK FILE 9'),
  new UploadFile('MOCK FILE 10'),
];

@Component({
  selector: 'app-canceller',
  templateUrl: './canceller.component.html',
  styleUrls: ['./canceller.component.scss']
})
export class CancellerComponent implements OnInit, OnDestroy {
  docList: UploadFile[] = []

  private destroyed: Subject<void> = new Subject();

  constructor(private service: CancellerService) { }

  ngOnInit(): void {
    this.service.uploadStatusEvent.pipe(
      takeUntil(this.destroyed)
    ).subscribe((evt) => {
      this.updateDocumentList(
        evt.index,
        evt.isLoading,
        evt.isUploaded
      );
    });
  }

  ngOnDestroy() {
    this.destroyed.next();
  }

  updateDocumentList(
    index: number,
    isLoading: boolean,
    isSuccess: boolean,
  ) {
    const documentList: UploadFile[] = [...this.docList];
    documentList[index].isLoading = isLoading;
    documentList[index].isSuccess = isSuccess;
    documentList[index] = { ...documentList[index] };
    this.docList = documentList;
  }

  mockUpload() {
    this.docList = [];

    MOCK_FILES.forEach((file, index) => {
      this.docList.push(file);

      this.service.uploadFile(file).subscribe(() => {
        this.service.uploadStatusEvent.next({
          index: index,
          isLoading: false,
          isUploaded: true
        })
      });
    })
  }
}
