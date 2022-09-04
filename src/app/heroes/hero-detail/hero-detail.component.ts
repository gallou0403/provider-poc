import { Component, OnInit } from '@angular/core';
import {HeroDetailFacade} from "./hero-detail.facade";

@Component({
  selector: 'app-hero-detail',
  templateUrl: './hero-detail.component.html',
  styleUrls: ['./hero-detail.component.css']
})
export class HeroDetailComponent {
  detailHero$ = this.facade.detailHero$;

  constructor(private facade: HeroDetailFacade) { }
}
