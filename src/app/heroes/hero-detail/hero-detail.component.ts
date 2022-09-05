import { Component, OnInit } from '@angular/core';
import {HeroDetailFacade} from "./hero-detail.facade";
import {HeroDetailForm} from "./hero-detail.form";
import {map} from "rxjs";

@Component({
  selector: 'app-hero-detail',
  templateUrl: './hero-detail.component.html',
  styleUrls: ['./hero-detail.component.css']
})
export class HeroDetailComponent {
  form$ = this.facade.detailHero$.pipe(
    map(result => {
      return new HeroDetailForm(result.detailHero);
    })
  );

  constructor(private facade: HeroDetailFacade) { }

  submit(form: HeroDetailForm) {
    console.log(form);
  }
}
