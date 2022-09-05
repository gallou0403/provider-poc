import { createEntityAdapter, EntityState } from "@ngrx/entity";
import {Hero} from "../../data-access/heroes/hero.model";
import {createReducer, on} from "@ngrx/store";
import * as HeroActions from './hero.actions';
import {CallState, LoadingState} from "./constants/call-state.const";

export interface HeroState extends EntityState<Hero> {
  callState: CallState;
}

export const heroAdapter = createEntityAdapter<Hero>();

export const initialState: HeroState = heroAdapter.getInitialState({
  callState: LoadingState.Init
});

const heroesLoadedReducer = on(HeroActions.heroesLoadSuccess, (state, action) => {
  return heroAdapter.setAll(action.heroes, state as HeroState);
});

const detailHeroLoadedReducer = on(HeroActions.detailHeroLoadSuccess, (state, action) => {
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

const heroReducers = [
  heroesLoadedReducer,
  detailHeroLoadedReducer,
  heroCreatedReducer,
  heroUpdatedReducer,
  heroDeletedReducer,
];

export const heroReducer = createReducer(
  initialState,
  ...heroReducers
)

