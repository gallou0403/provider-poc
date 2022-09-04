import { NgModule } from '@angular/core';
import {StoreModule} from "@ngrx/store";
import {heroAdapter, heroReducer} from "./hero.reducers";
import {EffectsModule} from "@ngrx/effects";
import {HeroEffects} from "./hero.effects";



@NgModule({
  declarations: [],
  imports: [
    StoreModule.forFeature('heroes', heroReducer, { initialState: heroAdapter.getInitialState() } ),
    EffectsModule.forFeature([HeroEffects]),
  ],
  exports: [
    StoreModule,
    EffectsModule
  ]
})
export class StateModule { }
