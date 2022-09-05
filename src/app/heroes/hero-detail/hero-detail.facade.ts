import {Injectable} from "@angular/core";
import {Store} from "@ngrx/store";
import {HeroState} from "../state/hero.reducers";
import {selectDetailHero} from "../state/hero.selectors";
import {map} from "rxjs";
import {HeroDetailForm} from "./hero-detail.form";
import {detailHeroUpdate} from "../state/hero.actions";

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

  submit(form: HeroDetailForm) {
    this.store.dispatch(detailHeroUpdate({detailHero: form.value}));
  }
}
