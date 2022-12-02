import { Component, OnInit } from '@angular/core';
import {CancellerService} from "./canceller.service";
import { UploadFile } from './file.class';

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
export class CancellerComponent implements OnInit {
  docList: UploadFile[] = []

  constructor(private service: CancellerService) { }

  ngOnInit(): void {
  }

  mockUpload() {
    this.docList = [];

    MOCK_FILES.forEach(file => {
      this.docList.push(file);
    })
  }
}
