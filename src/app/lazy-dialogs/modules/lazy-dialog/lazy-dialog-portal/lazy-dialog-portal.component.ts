import { Component, OnInit } from '@angular/core';
import {MatDialog} from "@angular/material/dialog";
import {LazyDialogComponent} from "../lazy-dialog.component";

@Component({
  selector: 'app-lazy-dialog-portal',
  templateUrl: './lazy-dialog-portal.component.html',
  styleUrls: ['./lazy-dialog-portal.component.css']
})
export class LazyDialogPortalComponent implements OnInit {

  constructor(private dialog: MatDialog) {
    dialog.open(LazyDialogComponent)
  }

  ngOnInit(): void {
  }

}
