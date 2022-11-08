import {createAction, props} from "@ngrx/store";
import {Hero} from "../../data-access/heroes/hero.model";
import * as ACTION_TYPES from "./constants/hero-action-types.const";

export const heroesPageEnter = createAction(ACTION_TYPES.HEROES_PAGE_ENTER);
export const heroesSearch = createAction(ACTION_TYPES.HEROES_SEARCH, props<{query: string}>());
export const heroesLoadSuccess = createAction(ACTION_TYPES.HEROES_LOAD_SUCCESS, props<{heroes: Hero[]}>());
export const heroesLoadError = createAction(ACTION_TYPES.HEROES_LOAD_ERROR, props<{error: Error}>());
export const heroesDelete = createAction(ACTION_TYPES.HEROES_DELETE, props<{id: number}>());
export const heroesDeleteSuccess = createAction(ACTION_TYPES.HEROES_DELETE_SUCCESS, props<{id: number}>());
export const heroesDeleteError = createAction(ACTION_TYPES.HEROES_DELETE_ERROR, props<{error: Error}>());

export const detailHeroPageEnter = createAction(ACTION_TYPES.DETAIL_HERO_PAGE_ENTER);
export const detailHeroLoad = createAction(ACTION_TYPES.DETAIL_HERO_LOAD, props<{id: number}>());
export const detailHeroLoadSuccess = createAction(ACTION_TYPES.DETAIL_HERO_LOAD_SUCCESS, props<{detailHero: Hero}>());
export const detailHeroLoadError = createAction(ACTION_TYPES.DETAIL_HERO_LOAD_ERROR, props<{error: Error}>());
export const detailHeroCreate = createAction(ACTION_TYPES.DETAIL_HERO_CREATE, props<{detailHero: Hero}>());
export const detailHeroCreateSuccess = createAction(ACTION_TYPES.DETAIL_HERO_CREATE_SUCCESS, props<{detailHero: Hero}>());
export const detailHeroCreateError = createAction(ACTION_TYPES.DETAIL_HERO_CREATE_ERROR, props<{error: Error}>());
export const detailHeroUpdate = createAction(ACTION_TYPES.DETAIL_HERO_UPDATE, props<{detailHero: Hero}>());
export const detailHeroUpdateSuccess = createAction(ACTION_TYPES.DETAIL_HERO_UPDATE_SUCCESS, props<{detailHero: Hero}>());
export const detailHeroUpdateError = createAction(ACTION_TYPES.DETAIL_HERO_UPDATE_ERROR, props<{error: Error}>());
export const detailHeroDelete = createAction(ACTION_TYPES.DETAIL_HERO_DELETE, props<{id: number}>());
export const detailHeroDeleteSuccess = createAction(ACTION_TYPES.DETAIL_HERO_DELETE_SUCCESS, props<{id: number}>());
export const detailHeroDeleteNavigated = createAction(ACTION_TYPES.DETAIL_HERO_DELETE_NAVIGATED, props<{id: number}>());
export const detailHeroDeleteError = createAction(ACTION_TYPES.DETAIL_HERO_DELETE_ERROR, props<{error: Error}>());
