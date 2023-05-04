import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LazyDialogShellComponent } from './lazy-dialog-shell/lazy-dialog-shell.component';
import {MatButtonModule} from "@angular/material/button";
import {RouterModule} from "@angular/router";
import {MatSidenavModule} from "@angular/material/sidenav";
import {MatListModule} from "@angular/material/list";



@NgModule({
  declarations: [
    LazyDialogShellComponent
  ],
  imports: [
    CommonModule,
    MatButtonModule,
    RouterModule,
    MatSidenavModule,
    MatListModule
  ],
  exports: [
    LazyDialogShellComponent
  ]
})
export class LazyDialogShellModule { }
