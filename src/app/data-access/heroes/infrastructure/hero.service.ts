import {Injectable} from "@angular/core";
import {MOCK_HEROES} from "./mock-heroes";
import {map, Observable, timer} from "rxjs";
import {clone, remove, update, without} from "ramda";
import {HeroDto} from "./hero-dto.model";

const TIMEOUT = 500;

@Injectable()
export class HeroService {
  _heroes: HeroDto[];

  constructor() {
    this._heroes = clone(MOCK_HEROES);
  }

  fetchHeroes(query?: string): Observable<HeroDto[]> {
    return timer(TIMEOUT).pipe(
      map(() => {
        const result = clone(this._heroes);
        if (!query) return result;
        return result.filter(hero =>
          hero.name.toLowerCase().trim().startsWith(
            query.toLowerCase().trim()
          )
        )
      })
    );
  }

  fetchHero(id: number): Observable<HeroDto | null> {
    return timer(TIMEOUT).pipe(
      map(() => clone(this._heroes?.find(x => x.id === id) || null))
    );
  }

  createHero(hero: HeroDto): Observable<HeroDto> {
    return timer(TIMEOUT).pipe(
      map(() => {
        const newHero = {
          ...hero,
          id: this._heroes.length
        };
        this._heroes.push(newHero);
        return newHero;
      })
    );
  }

  updateHero(id: number, name: string): Observable<HeroDto> {
    return timer(TIMEOUT).pipe(
      map(() => {
        const updated = {id, name};
        this._heroes = update(id, updated, this._heroes);
        return updated;
      })
    );
  }

  deleteHero(id: number): Observable<void> {
    return timer(TIMEOUT).pipe(
      map(() => {
        const toDelete = this._heroes.find(x => x.id === id);

        if (toDelete) {
          this._heroes = without([toDelete], this._heroes);
        }
        return undefined;
      })
    );
  }
}
