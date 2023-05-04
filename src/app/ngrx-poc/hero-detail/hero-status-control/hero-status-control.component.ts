import {Component, forwardRef, OnInit} from '@angular/core';
import {ControlValueAccessor, NG_VALUE_ACCESSOR, NgControl} from "@angular/forms";
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
  disabled?: boolean;

  heroStatuses = HERO_STATUSES;

  constructor(private control: NgControl) {
  }

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

  setDisabledState(isDisabled: boolean) {
    this.disabled = isDisabled;
  }
}
