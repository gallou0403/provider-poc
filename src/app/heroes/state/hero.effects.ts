import {Injectable} from "@angular/core";
import { createEffect, Actions, ofType } from "@ngrx/effects";
import {HeroDataService} from "../../data-access/heroes/hero-data.service";
import * as HeroActions from './hero.actions';
import {catchError, debounceTime, EMPTY, exhaustMap, filter, map, switchMap} from "rxjs";
import {Store} from "@ngrx/store";
import {HeroState} from "./hero.reducers";
import {selectDetailHero} from "./hero.selectors";
import {HEROES_PAGE_ENTER, HEROES_SEARCH} from "./hero-action-types.const";

@Injectable()
export class HeroEffects {
  constructor(
    private heroService: HeroDataService,
    private actions$: Actions,
    private store: Store<HeroState>) {
  }

  loadHeroes$ = createEffect(() =>
    this.actions$.pipe(
      ofType(HEROES_PAGE_ENTER),
      exhaustMap(() =>
        this.heroService.getHeroes()
          .pipe(
            map((heroes) => HeroActions.heroesLoaded({heroes})),
            catchError(e => {
              HeroActions.heroesLoadError({error: e.message});
              return EMPTY;
            })
          )
      )
    ));

  searchHeroes$ = createEffect(() =>
    this.actions$.pipe(
      ofType(HEROES_SEARCH),
      debounceTime(500),
      switchMap(({query}) =>
        this.heroService.getHeroes(query)
          .pipe(
            map((heroes) => HeroActions.heroesLoaded({heroes})),
            catchError(e => {
              HeroActions.heroesLoadError({error: e.message});
              return EMPTY;
            })
          )
      )
    ));

  loadDetailHero$ = createEffect(() =>
    this.store.select(selectDetailHero).pipe(
      filter(({id}) => !!id),
      switchMap(({detailHero, id}) => {
        if (!detailHero) {
          return this.heroService.getHero(Number(id)).pipe(
            map(remoteHero => HeroActions.detailHeroLoaded({detailHero: remoteHero})),
            catchError(e => {
              HeroActions.detailHeroError({error: e.message});
              return EMPTY;
            })
          )
        } else {
          return EMPTY;
        }
      })
    ));
}
