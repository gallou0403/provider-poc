import {Injectable} from "@angular/core";
import {MOCK_HEROES} from "./mock-heroes";
import {map, Observable, switchMap, throwError, timer} from "rxjs";
import {clone, remove, update, without} from "ramda";
import {HeroDto} from "./hero-dto.model";
import {HeroStatus} from "../hero.model";

const TIMEOUT = 500;

@Injectable()
export class HeroService {
  _heroes: HeroDto[];

  constructor() {
    this._heroes = clone(MOCK_HEROES);
  }

  fetchHeroes(query?: string): Observable<HeroDto[]> {
    console.log('remote call: fetchHeroes');
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
    console.log('remote call: fetchHero');
    return timer(TIMEOUT).pipe(
      // switchMap(() => throwError(() => new Error('test'))),
      map(() => clone(this._heroes?.find(x => x.id === id) || null))
    );
  }

  createHero(hero: HeroDto): Observable<HeroDto> {
    console.log('remote call: createHero');
    return timer(TIMEOUT).pipe(
      map(() => {
        const newHero = {
          ...hero,
          id: Math.random() * (100000000 - 1000) + 1000
        };
        this._heroes.push(newHero);
        return newHero;
      })
    );
  }

  updateHero(id: number, name: string, status: HeroStatus): Observable<HeroDto> {
    console.log('remote call: updateHero');
    return timer(TIMEOUT).pipe(
      map(() => {
        const updated = {id, name, status};
        const index = this._heroes.findIndex(x => x.id === id);
        this._heroes = update(index, updated, this._heroes);
        return updated;
      })
    );
  }

  deleteHero(id: number): Observable<void> {
    console.log('remote call: deleteHero');
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
