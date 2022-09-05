import { NgModule } from '@angular/core';
import {StoreModule} from "@ngrx/store";
import {heroReducer} from "./hero.reducers";
import {EffectsModule} from "@ngrx/effects";
import {HeroEffects} from "./hero.effects";
import {MatSnackBarModule} from "@angular/material/snack-bar";

@NgModule({
  imports: [
    StoreModule.forFeature('heroes', heroReducer, {}),
    EffectsModule.forFeature([HeroEffects]),
    MatSnackBarModule
  ]
})
export class StateModule { }
