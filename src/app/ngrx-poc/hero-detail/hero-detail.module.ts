import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeroDetailComponent } from './hero-detail.component';
import {RouterModule} from "@angular/router";
import {ReactiveFormsModule} from "@angular/forms";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatInputModule} from "@angular/material/input";
import {MatButtonModule} from "@angular/material/button";
import {MatProgressSpinnerModule} from "@angular/material/progress-spinner";
import {MatChipsModule} from "@angular/material/chips";
import {MatMenuModule} from "@angular/material/menu";
import {MatIconModule} from "@angular/material/icon";
import {HeroStatusLabelPipe} from "./hero-status-label.pipe";



@NgModule({
  declarations: [
    HeroDetailComponent,
    HeroStatusLabelPipe
  ],
  imports: [
    CommonModule,
    RouterModule.forChild([
      {
        path: '',
        component: HeroDetailComponent
      },
      {
        path: ':heroId',
        component: HeroDetailComponent
      },
    ]),
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatProgressSpinnerModule,
    MatChipsModule,
    MatMenuModule,
    MatIconModule
  ]
})
export class HeroDetailModule { }
