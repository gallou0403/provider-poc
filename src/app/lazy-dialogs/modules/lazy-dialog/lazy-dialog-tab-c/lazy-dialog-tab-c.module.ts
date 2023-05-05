import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LazyDialogTabCComponent } from './lazy-dialog-tab-c.component';
import {RouterModule} from "@angular/router";



@NgModule({
  declarations: [
    LazyDialogTabCComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild([
      {
        path: '',
        component: LazyDialogTabCComponent
      }
    ])
  ]
})
export class LazyDialogTabCModule { }
