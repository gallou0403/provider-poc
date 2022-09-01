import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LazyBComponent } from './lazy-b.component';
import {ThemeModule} from "../theme/theme.module";
import {RouterModule} from "@angular/router";

@NgModule({
  declarations: [
    LazyBComponent,
  ],
  imports: [
    CommonModule,
    ThemeModule.forRoot({
      backgroundService: 'v2'
    }),
    RouterModule.forChild([
      {
        path: '',
        component: LazyBComponent
      }
    ])
  ]
})
export class LazyBModule { }
