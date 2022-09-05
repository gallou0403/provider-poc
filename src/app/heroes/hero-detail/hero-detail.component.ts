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
  form$ = this.facade.form$;

  constructor(private facade: HeroDetailFacade) { }

  submit(form: HeroDetailForm) {
    if (form.invalid) {
      console.warn('form is invalid', form);
    } else {
      this.facade.submit(form);
    }
  }
}
