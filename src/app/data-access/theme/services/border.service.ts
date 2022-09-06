import { Injectable, Inject } from '@angular/core';
import { THEME_INJECTION_TOKENS } from '../constants/theme-injection-tokens.const';
import { BorderServiceInterface } from '../interfaces/border-service.interface';
import { BorderDataServiceInterface } from '../interfaces/border-data-service.interface';

@Injectable({
  providedIn: 'any'
})
export class BorderService implements BorderServiceInterface {
  constructor(
    @Inject(THEME_INJECTION_TOKENS.borderDataService)
    private dataService: BorderDataServiceInterface
  ) {
    console.log('constructed BorderService');
  }

  getBorder() {
    return this.dataService.getBorderColor();
  }
}
