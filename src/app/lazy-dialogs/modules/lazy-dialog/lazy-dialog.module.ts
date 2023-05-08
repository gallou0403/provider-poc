import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LazyDialogComponent } from './lazy-dialog.component';
import { LazyDialogContainerComponent } from './lazy-dialog-container.component';
import {MatTabsModule} from "@angular/material/tabs";
import {LazyDialogRoutingModule} from "./lazy-dialog-routing.module";
import {MatDialogModule} from "@angular/material/dialog";
import {LazyDialogTabAModule} from "./lazy-dialog-tab-a/lazy-dialog-tab-a.module";
import {LazyDialogTabBModule} from "./lazy-dialog-tab-b/lazy-dialog-tab-b.module";
import {LazyDialogTabCModule} from "./lazy-dialog-tab-c/lazy-dialog-tab-c.module";



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
    LazyDialogTabAModule,
    LazyDialogTabBModule,
    LazyDialogTabCModule
  ]
})
export class LazyDialogModule { }
