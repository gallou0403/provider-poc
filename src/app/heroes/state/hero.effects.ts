import {Injectable} from "@angular/core";
import { createEffect, Actions, ofType } from "@ngrx/effects";
import {HeroDataService} from "../../data-access/heroes/hero-data.service";
import * as HeroActions from './hero.actions';
import {catchError, concatMap, debounceTime, EMPTY, exhaustMap, filter, first, map, of, switchMap, tap} from "rxjs";
import {Action, Store} from "@ngrx/store";
import {HeroState} from "./hero.reducers";
import {selectDetailHero} from "./hero.selectors";
import {
  DETAIL_HERO_CREATE, DETAIL_HERO_CREATE_SUCCESS,
  DETAIL_HERO_DELETE,
  DETAIL_HERO_DELETE_SUCCESS,
  DETAIL_HERO_UPDATE, HEROES_DELETE,
  HEROES_PAGE_ENTER,
  HEROES_SEARCH
} from "./hero-action-types.const";
import {Hero} from "../../data-access/heroes/hero.model";
import {
  detailHeroCreateError,
  detailHeroCreateSuccess,
  detailHeroDeleteError, detailHeroDeleteNavigated,
  detailHeroDeleteSuccess,
  detailHeroUpdateError,
  detailHeroUpdateSuccess, heroesDeleteSuccess
} from "./hero.actions";
import {NavigationEnd, Router} from "@angular/router";

@Injectable()
export class HeroEffects {
  constructor(
    private heroService: HeroDataService,
    private actions$: Actions,
    private store: Store<HeroState>,
    private router: Router) {
  }

  loadHeroes$ = createEffect(() =>
    this.actions$.pipe(
      ofType(HEROES_PAGE_ENTER),
      exhaustMap(() =>
        this.heroService.getHeroes()
          .pipe(
            map((heroes) => HeroActions.heroesLoaded({heroes})),
            catchError(e => {
              const errAction = HeroActions.heroesLoadError({error: e.message});
              return of(errAction);
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
              const errAction = HeroActions.heroesLoadError({error: e.message});
              return of(errAction);
            })
          )
      )
    ));

  deleteHero$ = createEffect(() =>
    this.actions$.pipe(
      ofType(HEROES_DELETE),
      concatMap(({id}: {id: number}) => {
        return this.heroService.removeHero(id).pipe(
          map(() => heroesDeleteSuccess({id})),
          catchError(e => of(HeroActions.heroesDeleteError({error: e.message})))
        )
      })
    ))

  loadDetailHero$ = createEffect(() =>
    this.store.select(selectDetailHero).pipe(
      filter(({id}) => !!id),
      switchMap(({detailHero, id}) => {
        if (!detailHero) {
          return this.heroService.getHero(Number(id)).pipe(
            map(remoteHero => HeroActions.detailHeroLoaded({detailHero: remoteHero})),
            catchError(e => {
              const errAction = HeroActions.detailHeroError({error: e.message});
              return of(errAction);
            })
          )
        } else {
          return EMPTY;
        }
      })
    ));

  createDetailHero = createEffect(() =>
    this.actions$.pipe(
      ofType(DETAIL_HERO_CREATE),
      concatMap(({detailHero}: {detailHero: Hero}) => {
        return this.heroService.createHero(detailHero).pipe(
          map((detailHero) => detailHeroCreateSuccess({detailHero})),
          catchError(e => {
            const errAction = detailHeroCreateError({error: e.message, id: detailHero.id})
            return of(errAction);
          })
        )
      })
    ));

  navigateToHeroOnCreate$ = createEffect(() =>
    this.actions$.pipe(
      ofType(DETAIL_HERO_CREATE_SUCCESS),
      switchMap((action: Action & {detailHero: Hero}) => {
        return this.router.navigate(['/heroes', 'hero', action.detailHero.id]);
      }),
    ),
    {dispatch: false}
  );

  updateDetailHero$ = createEffect(() =>
    this.actions$.pipe(
      ofType(DETAIL_HERO_UPDATE),
      concatMap(({detailHero}: {detailHero: Hero}) => {
        return this.heroService.updateHero(detailHero.id, detailHero.name).pipe(
          map((detailHero) => detailHeroUpdateSuccess({detailHero})),
          catchError(e => {
            const errAction = detailHeroUpdateError({error: e.message})
            return of(errAction);
          })
        )
      })
    ));

  deleteDetailHero$ = createEffect(() =>
    this.actions$.pipe(
      ofType(DETAIL_HERO_DELETE),
      exhaustMap(({id}: {id: number}) => {
        return this.heroService.removeHero(id).pipe(
          map(() => {
            return detailHeroDeleteSuccess({id});
          }),
          catchError(e => {
            const errAction = detailHeroDeleteError({error: e.message});
            return of(errAction);
          })
        )
      })
    ));

  navigateToHeroListOnDelete$ = createEffect(() =>
    this.actions$.pipe(
      ofType(DETAIL_HERO_DELETE_SUCCESS),
      switchMap((action: {id: number}) => {
        this.router.navigate(['/heroes']);
        return this.router.events.pipe(
          filter(evt => evt instanceof NavigationEnd),
          first(),
          map(() => detailHeroDeleteNavigated({id: action.id}))
        )
      }),
    )
  );
}
