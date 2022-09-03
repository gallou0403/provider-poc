import {Injectable} from "@angular/core";
import {MOCK_HEROES} from "./mock-heroes";
import {map, Observable, timer} from "rxjs";
import {clone, update} from "ramda";
import {HeroDto} from "./hero-dto.model";

@Injectable()
export class HeroService {
  _heroes: HeroDto[];

  constructor() {
    this._heroes = clone(MOCK_HEROES);
  }

  fetchHeroes(): Observable<HeroDto[]> {
    return timer(2000).pipe(
      map(() => clone(this._heroes))
    );
  }

  fetchHero(id: number): Observable<HeroDto | null> {
    return timer(2000).pipe(
      map(() => clone(this._heroes?.find(x => x.id === id) || null))
    );
  }

  updateHero(id: number, name: string): Observable<HeroDto> {
    return timer(2000).pipe(
      map(() => {
        const updated = {id, name};
        this._heroes = update(id, updated, this._heroes);
        return updated;
      })
    );
  }

  deleteHero(id: number): Observable<void> {
    return timer(2000).pipe(
      map(() => {
        return undefined;
      })
    );
  }
}
