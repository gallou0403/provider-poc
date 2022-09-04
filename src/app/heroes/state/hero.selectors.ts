import {heroAdapter, HeroState} from "./hero.reducers";
import {createFeatureSelector, createSelector} from "@ngrx/store";

const {
  selectAll
} = heroAdapter.getSelectors();

export const getHeroState = createFeatureSelector<HeroState>('heroes');
export const selectAllHeroes = createSelector(getHeroState, selectAll);
