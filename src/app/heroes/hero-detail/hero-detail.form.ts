import {FormControl, FormGroup, Validators} from "@angular/forms";
import {Hero} from "../../data-access/heroes/hero.model";

export class HeroDetailForm extends FormGroup {
  constructor(seed?: Hero) {
    super({
      id: new FormControl(seed?.id),
      name: new FormControl(seed?.name || '', Validators.required)
    })
  }
}
