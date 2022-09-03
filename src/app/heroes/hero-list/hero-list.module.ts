import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeroListComponent } from './hero-list.component';
import {RouterModule} from "@angular/router";



@NgModule({
  declarations: [
    HeroListComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild([
      {
        path: '',
        component: HeroListComponent
      }
    ])
  ]
})
export class HeroListModule { }
