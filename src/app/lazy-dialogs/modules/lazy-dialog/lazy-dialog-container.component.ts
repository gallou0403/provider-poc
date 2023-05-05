import { Component, OnInit } from '@angular/core';
import {MatDialog} from "@angular/material/dialog";
import {LazyDialogComponent} from "./lazy-dialog.component";

@Component({
  selector: 'app-lazy-dialog-container',
  templateUrl: './lazy-dialog-container.component.html',
  styleUrls: ['./lazy-dialog-container.component.scss']
})
export class LazyDialogContainerComponent implements OnInit {

  constructor(private dialog: MatDialog) {
    console.log('constructed')
  }

  ngOnInit(): void {
    this.dialog.open(LazyDialogComponent);
  }
}
