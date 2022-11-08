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

const loadingReducer = on(
  HeroActions.heroesPageEnter,
  HeroActions.heroesSearch,
  HeroActions.heroesDelete,
  HeroActions.detailHeroCreate,
  HeroActions.detailHeroUpdate,
  HeroActions.detailHeroDelete,
  HeroActions.detailHeroLoad,
  (state, action) => {
    return {
      ...(state as HeroState),
      callState: LoadingState.Loading
    }
  }
)

const errorReducer = on(
  HeroActions.heroesLoadError,
  (state, action) => {
    return {
      ...(state as HeroState),
      callState: {error: action.error.message}
    }
  }
)

const loadedReducer = on(
  HeroActions.heroesDeleteError,
  HeroActions.detailHeroLoadError,
  HeroActions.detailHeroCreateError,
  HeroActions.detailHeroUpdateError,
  HeroActions.detailHeroDeleteError,
  HeroActions.heroesLoadSuccess,
  HeroActions.heroesDeleteSuccess,
  HeroActions.detailHeroLoadSuccess,
  HeroActions.detailHeroCreateSuccess,
  HeroActions.detailHeroUpdateSuccess,
  HeroActions.detailHeroDeleteSuccess,
  (state, action) => {
    return {
      ...(state as HeroState),
      callState: LoadingState.Loaded
    }
  }
)

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
      name: action.detailHero.name,
      status: action.detailHero.status
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
  loadingReducer,
  loadedReducer,
  errorReducer,
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

