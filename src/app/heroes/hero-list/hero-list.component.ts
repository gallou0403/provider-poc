import {Component} from '@angular/core';
import {HeroListFacade} from "./hero-list.facade";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-hero-list',
  templateUrl: './hero-list.component.html',
  styleUrls: ['./hero-list.component.css']
})
export class HeroListComponent {
  heroes$ = this.facade.heroes$;

  constructor(private facade: HeroListFacade) { }

  search(query: string) {
    this.facade.search(query);
  }

  delete(id: number) {
    this.facade.delete(id);
  }
}
