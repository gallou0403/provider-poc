import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeroListComponent } from './hero-list.component';
import {RouterModule} from "@angular/router";
import {StateModule} from "../state/state.module";
import {HeroesDataAccessModule} from "../../data-access/heroes/heroes-data-access.module";
import {MatButtonModule} from "@angular/material/button";
import {MatIconModule} from "@angular/material/icon";

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
    ]),
    StateModule,
    HeroesDataAccessModule.forRoot({
      heroService: 'v1'
    }),
    MatButtonModule,
    MatIconModule
  ]
})
export class HeroListModule { }
