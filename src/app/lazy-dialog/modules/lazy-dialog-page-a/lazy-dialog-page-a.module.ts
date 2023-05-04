import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LazyDialogPageAComponent } from './lazy-dialog-page-a/lazy-dialog-page-a.component';
import {LazyDialogPageARoutingModule} from "./lazy-dialog-page-a-routing.module";



@NgModule({
  declarations: [
    LazyDialogPageAComponent,
  ],
  imports: [
    CommonModule,
    LazyDialogPageARoutingModule
  ],
})
export class LazyDialogPageAModule { }
