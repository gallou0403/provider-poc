import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LazyDialogComponent } from './lazy-dialog.component';
import { LazyDialogContainerComponent } from './lazy-dialog-container.component';
import {MatTabsModule} from "@angular/material/tabs";
import {LazyDialogRoutingModule} from "./lazy-dialog-routing.module";
import {MatDialogModule} from "@angular/material/dialog";



@NgModule({
  declarations: [
    LazyDialogComponent,
    LazyDialogContainerComponent,
  ],
  imports: [
    CommonModule,
    MatTabsModule,
    MatDialogModule,
    LazyDialogRoutingModule,
  ]
})
export class LazyDialogModule { }
