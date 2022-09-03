import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeroDetailComponent } from './hero-detail.component';
import {RouterModule} from "@angular/router";



@NgModule({
  declarations: [
    HeroDetailComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild([
      {
        path: '',
        component: HeroDetailComponent
      }
    ])
  ]
})
export class HeroDetailModule { }
