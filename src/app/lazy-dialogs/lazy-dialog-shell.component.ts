import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-lazy-dialog-shell',
  templateUrl: './lazy-dialog-shell.component.html',
  styleUrls: ['./lazy-dialog-shell.component.scss']
})
export class LazyDialogShellComponent implements OnInit {

  constructor(private router: Router, public route: ActivatedRoute) { }

  ngOnInit(): void {
    console.log(this.router);
  }

}
