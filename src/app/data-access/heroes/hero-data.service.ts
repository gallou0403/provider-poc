import {HeroService} from "./infrastructure/hero.service";
import {map, Observable} from "rxjs";
import {Hero} from "./hero.model";

export class HeroDataService {
  constructor(private dataService: HeroService) {
  }

  getHeroes(): Observable<Hero[]> {
    return this.dataService.fetchHeroes() as Observable<Hero[]>;
  }

  getHero(id: number): Observable<Hero> {
    return this.dataService.fetchHero(id) as Observable<Hero>;
  }

  updateHero(id: number, name: string): Observable<Hero> {
    return this.dataService.updateHero(id, name);
  }

  removeHero(id: number): Observable<void> {
    return this.dataService.deleteHero(id);
  }
}
