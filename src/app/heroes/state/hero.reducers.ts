import { createEntityAdapter, EntityState } from "@ngrx/entity";
import {Hero} from "../../data-access/heroes/hero.model";
import {createReducer, on} from "@ngrx/store";
import * as HeroActions from './hero.actions';
import {detailHeroDeleteNavigated} from "./hero.actions";

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

const heroCreatedReducer = on(HeroActions.detailHeroCreateSuccess, (state, action) => {
  return heroAdapter.addOne(action.detailHero, state as HeroState);
})

const heroUpdatedReducer = on(HeroActions.detailHeroUpdateSuccess, (state, action) => {
  return heroAdapter.updateOne({
    id: action.detailHero.id,
    changes: {
      name: action.detailHero.name
    }
  }, state as HeroState);
});

const heroDeletedReducer = on(
  HeroActions.detailHeroDeleteNavigated,
  HeroActions.heroesDeleteSuccess,
  (state, action) => {
  return heroAdapter.removeOne(action.id, state as HeroState);
});


const heroesErrorReducer = on(
  HeroActions.heroesLoadError,
  HeroActions.detailHeroError,
  HeroActions.detailHeroUpdateError,
  (state, action) => {
  return {
    ...(state as HeroState),
    ...heroAdapter.setAll([], state as HeroState),
    error: action.error
  }
});

const heroReducers = [
  heroesLoadedReducer,
  detailHeroLoadedReducer,
  heroCreatedReducer,
  heroUpdatedReducer,
  heroDeletedReducer,
  heroesErrorReducer
];

export const heroReducer = createReducer(
  initialState,
  ...heroReducers
)

