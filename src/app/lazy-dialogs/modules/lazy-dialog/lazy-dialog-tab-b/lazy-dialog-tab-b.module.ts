import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LazyDialogTabBComponent } from './lazy-dialog-tab-b.component';
import {RouterModule} from "@angular/router";



@NgModule({
  declarations: [
    LazyDialogTabBComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild([
      {
        path: '',
        component: LazyDialogTabBComponent
      }
    ])
  ],
  exports: [
    LazyDialogTabBComponent
  ]
})
export class LazyDialogTabBModule { }
