import {Injectable, OnInit} from "@angular/core";
import {Store} from "@ngrx/store";
import {heroAdapter, HeroState} from "../state/hero.reducers";
import * as HeroActions from '../state/hero.actions';
import {isLoading, selectAllHeroes} from "../state/hero.selectors";

@Injectable()
export class HeroListFacade {
  heroes$ = this.store.select(selectAllHeroes);
  isLoading$ = this.store.select(isLoading);

  constructor(private store: Store<HeroState>) {
    this.init();
  }

  init() {
    this.store.dispatch(HeroActions.heroesPageEnter())
  }

  search(query: string = '') {
    this.store.dispatch(HeroActions.heroesSearch({query}));
  }

  delete(id: number) {
    this.store.dispatch(HeroActions.heroesDelete({id}))
  }
}
