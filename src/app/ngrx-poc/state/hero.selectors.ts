import {heroAdapter, HeroState} from "./hero.reducers";
import {createFeatureSelector, createSelector} from "@ngrx/store";
import {getSelectors} from '@ngrx/router-store';
import {LoadingState} from "./constants/call-state.const";


const heroAdapterSelectors = heroAdapter.getSelectors();
export const heroesFeatureSelector = createFeatureSelector<HeroState>('heroes');

export const selectAllHeroes = createSelector(heroesFeatureSelector, heroAdapterSelectors.selectAll);
export const selectHeroEntities = createSelector(heroesFeatureSelector, heroAdapterSelectors.selectEntities);

export const selectDetailHero = createSelector(
  selectHeroEntities,
  getSelectors().selectRouteParam('heroId'),
  (heroes, heroId) => {
    return {
      id: heroId,
      detailHero: heroId ? heroes?.[heroId] : undefined
    };
  }
)

export const isLoading = createSelector(
  heroesFeatureSelector,
  (state) => state.callState === LoadingState.Loading
)
