import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeroDetailComponent } from './hero-detail.component';
import {RouterModule} from "@angular/router";
import {ReactiveFormsModule} from "@angular/forms";



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
        ]),
        ReactiveFormsModule
    ]
})
export class HeroDetailModule { }
