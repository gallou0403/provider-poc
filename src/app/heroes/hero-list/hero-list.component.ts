import {Component, OnDestroy, OnInit} from '@angular/core';
import {HeroListFacade} from "./hero-list.facade";
import {FormControl} from "@angular/forms";
import {Subject, takeUntil} from "rxjs";

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
}
