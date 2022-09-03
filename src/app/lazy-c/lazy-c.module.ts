import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LazyCComponent } from './lazy-c.component';
import {ThemeModule} from "../data-access/theme/theme.module";
import {RouterModule} from "@angular/router";

@NgModule({
  declarations: [
    LazyCComponent
  ],
  imports: [
    CommonModule,
    ThemeModule.forRoot({
      backgroundService: 'v1'
    }),
    RouterModule.forChild([
      {
        path: '',
        component: LazyCComponent
      }
    ])
  ]
})
export class LazyCModule { }
