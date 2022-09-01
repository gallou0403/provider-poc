import { Injectable, Inject } from '@angular/core';
import { THEME_INJECTION_TOKENS } from '../constants/theme-injection-tokens.const';
import { BorderServiceInterface } from '../interfaces/border-service.interface';
import { BorderDataServiceInterface } from '../interfaces/border-data-service.interface';

@Injectable()
export class BorderService implements BorderServiceInterface {
  constructor(
    @Inject(THEME_INJECTION_TOKENS.borderDataService)
    private dataService: BorderDataServiceInterface
  ) {}

  getBorder() {
    return this.dataService.getBorderColor();
  }
}
