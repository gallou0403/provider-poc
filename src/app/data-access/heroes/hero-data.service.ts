import {HeroService} from "./infrastructure/hero.service";
import {map, Observable} from "rxjs";
import {Hero, HeroStatus} from "./hero.model";
import {Injectable} from "@angular/core";
import {HeroDto} from "./infrastructure/hero-dto.model";

@Injectable()
export class HeroDataService {
  constructor(private dataService: HeroService) {
  }

  getHeroes(query?: string): Observable<Hero[]> {
    return this.dataService.fetchHeroes(query) as Observable<Hero[]>;
  }

  getHero(id: number): Observable<Hero> {
    return this.dataService.fetchHero(id) as Observable<Hero>;
  }

  createHero(hero: Hero): Observable<Hero> {
    return this.dataService.createHero(hero) as Observable<Hero>;
  }

  updateHero(id: number, name: string, status: HeroStatus): Observable<Hero> {
    return this.dataService.updateHero(id, name, status) as Observable<Hero>
  }

  removeHero(id: number): Observable<void> {
    return this.dataService.deleteHero(id);
  }
}
