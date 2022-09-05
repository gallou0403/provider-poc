import {Component, OnInit} from '@angular/core';
import {HeroListFacade} from "./hero-list.facade";

@Component({
  selector: 'app-hero-list',
  templateUrl: './hero-list.component.html',
  styleUrls: ['./hero-list.component.css'],
})
export class HeroListComponent {
  heroes$ = this.facade.heroes$;

  constructor(private facade: HeroListFacade) {
    this.facade.init();
  }

  search(query: string) {
    this.facade.search(query);
  }

  delete(id: number) {
    this.facade.delete(id);
  }
}
