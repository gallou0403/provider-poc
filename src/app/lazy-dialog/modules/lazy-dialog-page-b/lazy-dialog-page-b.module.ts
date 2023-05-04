import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LazyDialogPageBComponent } from './lazy-dialog-page-b/lazy-dialog-page-b.component';
import {LazyDialogPageBRoutingModule} from "./lazy-dialog-page-b-routing.module";



@NgModule({
  declarations: [
    LazyDialogPageBComponent
  ],
  imports: [
    CommonModule,
    LazyDialogPageBRoutingModule
  ]
})
export class LazyDialogPageBModule { }
