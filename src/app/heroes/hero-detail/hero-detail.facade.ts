import {Injectable} from "@angular/core";
import {Store} from "@ngrx/store";
import {HeroState} from "../state/hero.reducers";
import {selectDetailHero} from "../state/hero.selectors";

@Injectable({
  providedIn: 'root'
})
export class HeroDetailFacade {
  detailHero$ = this.store.select(selectDetailHero);

  constructor(private store: Store<HeroState>) {
  }
}
