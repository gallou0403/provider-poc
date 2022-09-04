import {Injectable} from "@angular/core";
import {Store} from "@ngrx/store";
import {heroAdapter, HeroState} from "../state/hero.reducers";
import * as HeroActions from '../state/hero.actions';
import {selectAllHeroes} from "../state/hero.selectors";

@Injectable()
export class HeroListFacade {
  heroes$ = this.store.select(selectAllHeroes);

  constructor(private store: Store<HeroState>) {
    this.store.dispatch(HeroActions.heroesPageEnter())
  }
}
