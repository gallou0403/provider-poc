import { createEntityAdapter, EntityState } from "@ngrx/entity";
import {Hero} from "../../data-access/heroes/hero.model";
import {createReducer, on} from "@ngrx/store";
import * as HeroActions from './hero.actions';

export interface HeroState extends EntityState<Hero> {
  error: string | null;
}

export const heroAdapter = createEntityAdapter<Hero>();

export const initialState: HeroState = heroAdapter.getInitialState({
  error: null
});

const heroesLoadedReducer = on(HeroActions.heroesLoaded, (state, action) => {
  return heroAdapter.setAll(action.heroes, state as HeroState);
});

const detailHeroLoadedReducer = on(HeroActions.detailHeroLoaded, (state, action) => {
  return heroAdapter.addOne(action.detailHero, state as HeroState);
});


const heroesErrorReducer = on(
  HeroActions.heroesLoadError,
  HeroActions.detailHeroError,
  (state, action) => {
  return {
    ...(state as HeroState),
    error: action.error
  }
});

const heroReducers = [
  heroesLoadedReducer,
  detailHeroLoadedReducer,
  heroesErrorReducer
];

export const heroReducer = createReducer(
  initialState,
  ...heroReducers
)

