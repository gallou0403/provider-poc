import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {LazyDialogsRoutingModule} from "./lazy-dialogs-routing.module";
import {LazyDialogShellComponent} from "./lazy-dialog-shell.component";
import {MatSidenavModule} from "@angular/material/sidenav";
import {MatListModule} from "@angular/material/list";



@NgModule({
  declarations: [
    LazyDialogShellComponent
  ],
  imports: [
    CommonModule,
    LazyDialogsRoutingModule,
    MatSidenavModule,
    MatListModule,
  ]
})
export class LazyDialogsModule { }
