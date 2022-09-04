import { NgModule } from '@angular/core';
import {StoreModule} from "@ngrx/store";
import {heroReducer} from "./hero.reducers";
import {EffectsModule} from "@ngrx/effects";
import {HeroEffects} from "./hero.effects";

@NgModule({
  imports: [
    StoreModule.forFeature('heroes', heroReducer, {}),
    EffectsModule.forFeature([HeroEffects]),
  ]
})
export class StateModule { }
