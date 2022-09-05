import {Injectable} from "@angular/core";
import {Store} from "@ngrx/store";
import {heroAdapter, HeroState} from "../state/hero.reducers";
import * as HeroActions from '../state/hero.actions';
import {selectAllHeroes} from "../state/hero.selectors";

@Injectable({
  providedIn: 'root'
})
export class HeroListFacade {
  heroes$ = this.store.select(selectAllHeroes);

  constructor(private store: Store<HeroState>) {
    this.store.dispatch(HeroActions.heroesPageEnter())
  }

  search(query: string = '') {
    this.store.dispatch(HeroActions.heroesSearch({query}));
  }

  delete(id: number) {
    this.store.dispatch(HeroActions.heroesDelete({id}))
  }
}
