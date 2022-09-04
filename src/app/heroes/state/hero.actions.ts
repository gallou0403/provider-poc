import {createAction, props} from "@ngrx/store";
import {Hero} from "../../data-access/heroes/hero.model";
import {
  DETAIL_HERO_ERROR,
  DETAIL_HERO_LOADED,
  HEROES_LOAD_ERROR,
  HEROES_LOADED,
  HEROES_PAGE_ENTER,
  HEROES_SEARCH
} from "./hero-action-types.const";

export const heroesPageEnter = createAction(HEROES_PAGE_ENTER);
export const heroesSearch = createAction(HEROES_SEARCH, props<{query: string}>());
export const heroesLoaded = createAction(HEROES_LOADED, props<{heroes: Hero[]}>());
export const heroesLoadError = createAction(HEROES_LOAD_ERROR, props<{error: string}>());

export const detailHeroLoaded = createAction(DETAIL_HERO_LOADED, props<{detailHero: Hero}>());
export const detailHeroError = createAction(DETAIL_HERO_ERROR, props<{error: string}>());
