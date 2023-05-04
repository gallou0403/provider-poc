import {Component, OnDestroy, OnInit} from '@angular/core';
import {HeroDetailFacade} from "./hero-detail.facade";
import {HeroDetailForm} from "./hero-detail.form";
import {ActivatedRoute, Router} from "@angular/router";
import {map, Observable, Subject, takeUntil} from "rxjs";
import {FormControl} from "@angular/forms";

@Component({
  selector: 'app-hero-detail',
  templateUrl: './hero-detail.component.html',
  styleUrls: ['./hero-detail.component.css'],
  providers: [
    HeroDetailFacade
  ]
})
export class HeroDetailComponent {
  form$ = this.facade.form$;
  isLoading$ = this.facade.isLoading$;

  constructor(private facade: HeroDetailFacade,
              private router: Router,
              private route: ActivatedRoute) {
  }

  get isNew(): boolean {
    return !this.route.snapshot.paramMap.get('heroId');
  }

  submit(form: HeroDetailForm) {
    if (form.invalid) {
      console.warn('form is invalid', form);

      Object.values(form.controls).forEach(control => {
        control.markAsDirty();
      })

      return;
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
