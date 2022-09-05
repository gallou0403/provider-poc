import {Injectable} from "@angular/core";
import { createEffect, Actions, ofType } from "@ngrx/effects";
import {HeroDataService} from "../../data-access/heroes/hero-data.service";
import * as HeroActions from './hero.actions';
import {
  catchError,
  concatMap,
  debounceTime,
  EMPTY,
  exhaustMap,
  filter,
  first,
  map,
  of,
  retry,
  switchMap,
  tap
} from "rxjs";
import {Action, Store} from "@ngrx/store";
import {HeroState} from "./hero.reducers";
import {selectDetailHero} from "./hero.selectors";
import {
  DETAIL_HERO_CREATE,
  DETAIL_HERO_CREATE_ERROR,
  DETAIL_HERO_CREATE_SUCCESS,
  DETAIL_HERO_DELETE,
  DETAIL_HERO_DELETE_ERROR,
  DETAIL_HERO_DELETE_SUCCESS,
  DETAIL_HERO_ERROR,
  DETAIL_HERO_UPDATE,
  DETAIL_HERO_UPDATE_ERROR, DETAIL_HERO_UPDATE_SUCCESS,
  HEROES_DELETE,
  HEROES_DELETE_ERROR,
  HEROES_DELETE_SUCCESS,
  HEROES_LOAD_ERROR,
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
import {MatSnackBar} from "@angular/material/snack-bar";

@Injectable()
export class HeroEffects {
  constructor(
    private heroService: HeroDataService,
    private actions$: Actions,
    private store: Store<HeroState>,
    private router: Router,
    private snackbar: MatSnackBar) {
  }

  loadHeroes$ = createEffect(() =>
    this.actions$.pipe(
      ofType(HEROES_PAGE_ENTER),
      exhaustMap(() =>
        this.heroService.getHeroes()
          .pipe(
            map((heroes) => HeroActions.heroesLoaded({heroes})),
            catchError(error => of(HeroActions.heroesLoadError({error})))
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
            catchError(error => of(HeroActions.heroesLoadError({error})))
          )
      )
    ));

  deleteHero$ = createEffect(() =>
    this.actions$.pipe(
      ofType(HEROES_DELETE),
      concatMap(({id}: {id: number}) => {
        return this.heroService.removeHero(id).pipe(
          map(() => heroesDeleteSuccess({id})),
          catchError(error => of(HeroActions.heroesDeleteError({error})))
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
            retry(2),
          )
        } else {
          return EMPTY;
        }
      }),
      // catch at top-level so observable completes
      catchError(error => of(HeroActions.detailHeroError({error})))
    ));

  loadDetailHeroError$ = createEffect(() =>
      this.actions$.pipe(
        ofType(DETAIL_HERO_ERROR),
        switchMap((action: Action & {detailHero: Hero}) => {
          return this.router.navigate(['/heroes']);
        }),
      ),
    {dispatch: false}
  );

  createDetailHero = createEffect(() =>
    this.actions$.pipe(
      ofType(DETAIL_HERO_CREATE),
      concatMap(({detailHero}: {detailHero: Hero}) => {
        return this.heroService.createHero(detailHero).pipe(
          map((detailHero) => detailHeroCreateSuccess({detailHero})),
          catchError(error => of(detailHeroCreateError({error})))
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
          catchError(error => of(detailHeroUpdateError({error})))
        )
      })
    ));

  deleteDetailHero$ = createEffect(() =>
    this.actions$.pipe(
      ofType(DETAIL_HERO_DELETE),
      exhaustMap(({id}: {id: number}) => {
        return this.heroService.removeHero(id).pipe(
          map(() => detailHeroDeleteSuccess({id})),
          catchError(error => of(detailHeroDeleteError({error})))
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

  onSuccess$ = createEffect(() =>
      this.actions$.pipe(
        ofType(...[
          HEROES_DELETE_SUCCESS,
          DETAIL_HERO_CREATE_SUCCESS,
          DETAIL_HERO_UPDATE_SUCCESS,
          DETAIL_HERO_DELETE_SUCCESS
        ]),
        map((action) => {
          this.snackbar.open('Success!', undefined, {duration: 3000});
        })
      ),
    {dispatch: false}
  );

  onError$ = createEffect(() =>
    this.actions$.pipe(
      ofType(...[
        HEROES_LOAD_ERROR,
        HEROES_DELETE_ERROR,
        DETAIL_HERO_ERROR,
        DETAIL_HERO_DELETE_ERROR,
        DETAIL_HERO_CREATE_ERROR,
        DETAIL_HERO_UPDATE_ERROR,
      ]),
      map((action) => {
        const typedAction = action as Action & {error: Error};
        console.error(typedAction.error);
        this.snackbar.open('Error!', undefined, {duration: 3000});
      })
    ),
    {dispatch: false}
  );
}
