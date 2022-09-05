import { Component } from '@angular/core';
import {HeroDetailFacade} from "./hero-detail.facade";
import {HeroDetailForm} from "./hero-detail.form";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-hero-detail',
  templateUrl: './hero-detail.component.html',
  styleUrls: ['./hero-detail.component.css']
})
export class HeroDetailComponent {
  form$ = this.facade.form$;
  isLoading$ = this.facade.isLoading$;

  constructor(private facade: HeroDetailFacade,
              private router: Router,
              private route: ActivatedRoute) {
    this.facade.init();
  }

  get isNew(): boolean {
    return !this.route.snapshot.paramMap.get('heroId');
  }

  submit(form: HeroDetailForm) {
    if (form.invalid) {
      console.warn('form is invalid', form);
    }

    if (this.isNew) {
      this.facade.create(form.value);
    } else {
      this.facade.update(form.value);
    }
  }

  delete(id: number) {
    this.facade.deleteHero(id);
  }

  cancel(form: HeroDetailForm) {
    if (this.isNew) {
      this.router.navigate(['heroes']);
    } else {
      form.reset();
    }
  }
}
