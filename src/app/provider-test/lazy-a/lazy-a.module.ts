import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LazyAComponent } from './lazy-a.component';
import {RouterModule} from "@angular/router";
import {ThemeModule} from "../../data-access/theme/theme.module";
import {EagerAModule} from "../eager-a/eager-a.module";
import {EagerAComponent} from "../eager-a/eager-a.component";



@NgModule({
  declarations: [
    LazyAComponent
  ],
  imports: [
    CommonModule,
    EagerAModule,
    ThemeModule.forRoot({
      backgroundService: 'v1'
    }),
    RouterModule.forChild([
      {
        path: '',
        component: LazyAComponent
      },
      {
        path: 'a',
        component: EagerAComponent
      }
    ])
  ]
})
export class LazyAModule { }
