import {createAction, props} from "@ngrx/store";
import {Hero} from "../../data-access/heroes/hero.model";
import {
  DETAIL_HERO_DELETE, DETAIL_HERO_DELETE_ERROR, DETAIL_HERO_DELETE_NAVIGATED, DETAIL_HERO_DELETE_SUCCESS,
  DETAIL_HERO_ERROR,
  DETAIL_HERO_LOADED, DETAIL_HERO_UPDATE, DETAIL_HERO_UPDATE_ERROR, DETAIL_HERO_UPDATE_SUCCESS,
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
export const detailHeroUpdate = createAction(DETAIL_HERO_UPDATE, props<{detailHero: Hero}>());
export const detailHeroUpdateSuccess = createAction(DETAIL_HERO_UPDATE_SUCCESS, props<{detailHero: Hero}>());
export const detailHeroUpdateError = createAction(DETAIL_HERO_UPDATE_ERROR, props<{error: string}>());
export const detailHeroDelete = createAction(DETAIL_HERO_DELETE, props<{id: number}>());
export const detailHeroDeleteSuccess = createAction(DETAIL_HERO_DELETE_SUCCESS, props<{id: number}>());
export const detailHeroDeleteNavigated = createAction(DETAIL_HERO_DELETE_NAVIGATED, props<{id: number}>());
export const detailHeroDeleteError = createAction(DETAIL_HERO_DELETE_ERROR, props<{error: string}>());
