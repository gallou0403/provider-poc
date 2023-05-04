import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {LazyDialogRoutingModule} from "./lazy-dialog-routing.module";
import {LazyDialogShellModule} from "./modules/lazy-dialog-shell";



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    LazyDialogRoutingModule,
    LazyDialogShellModule
  ]
})
export class LazyDialogModule { }
