import {Injectable} from "@angular/core";
import { createEffect, Actions, ofType } from "@ngrx/effects";
import {HeroDataService} from "../../data-access/heroes/hero-data.service";
import * as HeroActions from './hero.actions';
import {catchError, EMPTY, exhaustMap, map} from "rxjs";

@Injectable()
export class HeroEffects {
  constructor(
    private heroService: HeroDataService,
    private actions$: Actions) {
  }

  loadHeroes$ = createEffect(() =>
    this.actions$.pipe(
      ofType(HeroActions.HEROES_PAGE_ENTER),
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
      ofType(HeroActions.HEROES_SEARCH),
      exhaustMap(({query}) =>
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
}
