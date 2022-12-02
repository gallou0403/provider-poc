import {Component, OnDestroy, OnInit} from '@angular/core';
import {CancellerService} from "./canceller.service";
import { UploadFile } from './file.class';
import {filter, finalize, Subject, switchMap, takeUntil, tap} from "rxjs";
import {equals, remove, update, without} from "ramda";

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
  private cancel: Subject<UploadFile> = new Subject();

  constructor(private service: CancellerService) { }

  ngOnInit(): void {
    this.service.uploadStatusEvent.pipe(
      takeUntil(this.destroyed)
    ).subscribe((evt) => {
      this.updateDocumentList(
        evt.file,
        evt.isLoading,
        evt.isUploaded
      );
    });
  }

  ngOnDestroy() {
    this.destroyed.next();
  }

  cancelFile(file: UploadFile) {
    console.log('cancelling', file.name);
    this.cancel.next(file);
  }

  cancelledFile$(file: UploadFile) {
    return this.cancel.pipe(
      filter(equals(file)),
      tap(() => {
        this.docList = without([file], this.docList);
      })
    );
  }

  updateDocumentList(
    file: UploadFile,
    isLoading: boolean,
    isSuccess: boolean,
  ) {
    const foundIndex = this.docList.findIndex(equals(file));

    if (foundIndex > -1) {
      this.docList = update(foundIndex, {
        ...file,
        isLoading,
        isSuccess
      }, this.docList);
    }
  }

  mockUpload() {
    this.docList = [];

    MOCK_FILES.forEach((file, index) => {
      this.docList.push(file);

      this.service.uploadFile(file).pipe(
        finalize(() => console.log('finished file', file.name)),
        takeUntil(this.cancelledFile$(file)),
      ).subscribe(() => {
        this.service.uploadStatusEvent.next({
          file: file,
          isLoading: false,
          isUploaded: true
        })
      });
    })
  }
}
