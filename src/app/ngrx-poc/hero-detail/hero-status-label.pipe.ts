import {Pipe, PipeTransform} from "@angular/core";
import {HERO_STATUS_LABEL, HeroStatus} from "../../data-access/heroes/hero.model";

@Pipe({
  name: 'heroStatusLabel'
})
export class HeroStatusLabelPipe implements PipeTransform {
  transform(status: HeroStatus | string): string {
    return HERO_STATUS_LABEL[status as HeroStatus];
  }
}
