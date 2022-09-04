import {createAction, props} from "@ngrx/store";
import {Hero} from "../../data-access/heroes/hero.model";

export const HEROES_PAGE_ENTER = '[HEROES PAGE] ENTER';
export const HEROES_SEARCH = '[HEROES PAGE] HEROES SEARCH';
export const HEROES_LOADED = '[HEROES PAGE] HEROES LOADED';
export const HEROES_LOAD_ERROR = '[HEROES PAGE] HEROES LOAD ERROR';

export const DETAIL_HERO_LOADED = '[DETAIL HERO PAGE] HERO LOADED FROM REMOTE';
export const DETAIL_HERO_ERROR = '[DETAIL HERO PAGE] REMOTE HERO LOAD ERROR';

export const heroesPageEnter = createAction(HEROES_PAGE_ENTER);
export const heroesSearch = createAction(HEROES_SEARCH, props<{query: string}>());
export const heroesLoaded = createAction(HEROES_LOADED, props<{heroes: Hero[]}>());
export const heroesLoadError = createAction(HEROES_LOAD_ERROR, props<{error: string}>());

export const detailHeroLoaded = createAction(DETAIL_HERO_LOADED, props<{detailHero: Hero}>());
export const detailHeroError = createAction(DETAIL_HERO_ERROR, props<{error: string}>());
