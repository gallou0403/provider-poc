import {Injectable} from "@angular/core";
import {Store} from "@ngrx/store";
import {HeroState} from "../state/hero.reducers";
import {isLoading, selectDetailHero} from "../state/hero.selectors";
import {map} from "rxjs";
import {HeroDetailForm} from "./hero-detail.form";
import {detailHeroCreate, detailHeroDelete, detailHeroPageEnter, detailHeroUpdate} from "../state/hero.actions";
import {Hero} from "../../data-access/heroes/hero.model";

@Injectable()
export class HeroDetailFacade {
  form$ = this.store.select(selectDetailHero).pipe(
    map(result => {
      return new HeroDetailForm(result.detailHero);
    })
  );

  isLoading$ = this.store.select(isLoading);

  constructor(private store: Store<HeroState>) {
    this.init();
  }

  init() {
    this.store.dispatch(detailHeroPageEnter());
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
