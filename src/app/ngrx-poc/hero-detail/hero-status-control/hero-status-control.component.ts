import {Component, forwardRef, OnInit} from '@angular/core';
import {ControlValueAccessor, NG_VALUE_ACCESSOR} from "@angular/forms";
import {HERO_STATUSES, HeroStatus} from "../../../data-access/heroes/hero.model";

@Component({
  selector: 'app-hero-status-control',
  templateUrl: './hero-status-control.component.html',
  styleUrls: ['./hero-status-control.component.css'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => HeroStatusControlComponent),
      multi: true
    }
  ]
})
export class HeroStatusControlComponent implements ControlValueAccessor {
  propagateChanges: any;

  value?: HeroStatus;

  heroStatuses = HERO_STATUSES;

  // how values get in
  // how values get out
  // disabled state
  // invalid state

  registerOnChange(fn: any) {
    this.propagateChanges = fn;
  }
  registerOnTouched(fn: any) {  }

  writeValue(value: HeroStatus) {
    this.value = value;
  }

  setValue(nextValue: HeroStatus) {
    if (this.propagateChanges) {
      this.propagateChanges(nextValue);
    }

    this.value = nextValue;
  }
}
