import {Component, OnInit, ViewContainerRef} from '@angular/core';
import {MatDialog} from "@angular/material/dialog";
import {LazyDialogComponent} from "./lazy-dialog.component";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-lazy-dialog-container',
  templateUrl: './lazy-dialog-container.component.html',
  styleUrls: ['./lazy-dialog-container.component.scss']
})
export class LazyDialogContainerComponent implements OnInit {

  constructor(private dialog: MatDialog,
              private viewContainerRef: ViewContainerRef,
              private route: ActivatedRoute,
              private router: Router) {
  }

  ngOnInit(): void {
    this.dialog.open(LazyDialogComponent, {
      viewContainerRef: this.viewContainerRef,
    }).afterClosed().subscribe(() => {
      // this.route.root.firstChild is weird, but i think it'll be this.route.root in WebApps
      this.router.navigate(['./', {outlets: {globalDialog: null}}], {relativeTo: this.route.root.firstChild});
    });
  }
}
