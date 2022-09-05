import {Injectable} from "@angular/core";
import {Store} from "@ngrx/store";
import {HeroState} from "../state/hero.reducers";
import {selectDetailHero} from "../state/hero.selectors";
import {map} from "rxjs";
import {HeroDetailForm} from "./hero-detail.form";
import {detailHeroCreate, detailHeroDelete, detailHeroUpdate} from "../state/hero.actions";
import {Hero} from "../../data-access/heroes/hero.model";

@Injectable({
  providedIn: 'root'
})
export class HeroDetailFacade {
  form$ = this.store.select(selectDetailHero).pipe(
    map(result => {
      return new HeroDetailForm(result.detailHero);
    })
  );

  constructor(private store: Store<HeroState>) {
  }

  create(hero: Hero) {
    this.store.dispatch(detailHeroCreate({detailHero: hero}));
  }

  update(hero: Hero) {
    this.store.dispatch(detailHeroUpdate({detailHero: hero}));
  }

  deleteHero(id: number) {
    this.store.dispatch(detailHeroDelete({id}));
  }
}
