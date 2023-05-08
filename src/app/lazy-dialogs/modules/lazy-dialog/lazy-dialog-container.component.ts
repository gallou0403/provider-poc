import {Component, OnInit} from '@angular/core';
import {MatDialog} from "@angular/material/dialog";
import {LazyDialogComponent} from "./lazy-dialog.component";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-lazy-dialog-container',
  templateUrl: './lazy-dialog-container.component.html',
  styleUrls: ['./lazy-dialog-container.component.scss']
})
export class LazyDialogContainerComponent implements OnInit {

  constructor(private dialog: MatDialog,
              private route: ActivatedRoute) {
  }

  ngOnInit(): void {
    this.dialog.open(LazyDialogComponent, {
      data: {
        route: this.route
      }
    });
  }
}
