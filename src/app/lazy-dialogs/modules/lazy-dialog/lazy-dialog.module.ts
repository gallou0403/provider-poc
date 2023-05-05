import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LazyDialogComponent } from './lazy-dialog.component';
import { LazyDialogContainerComponent } from './lazy-dialog-container.component';
import {MatTabsModule} from "@angular/material/tabs";
import {LazyDialogRoutingModule} from "./lazy-dialog-routing.module";
import {MatDialogModule} from "@angular/material/dialog";
import { LazyDialogPortalComponent } from './lazy-dialog-portal/lazy-dialog-portal.component';



@NgModule({
  declarations: [
    LazyDialogComponent,
    LazyDialogContainerComponent,
    LazyDialogPortalComponent,
  ],
  imports: [
    CommonModule,
    MatTabsModule,
    MatDialogModule,
    LazyDialogRoutingModule
  ]
})
export class LazyDialogModule { }
