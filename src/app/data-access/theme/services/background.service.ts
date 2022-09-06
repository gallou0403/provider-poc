import { Injectable, Inject } from '@angular/core';
import { THEME_INJECTION_TOKENS } from '../constants/theme-injection-tokens.const';
import { BackgroundServiceInterface } from '../interfaces/background-service.interface';
import { BackgroundDataServiceInterface } from '../interfaces/background-data-service.interface'

@Injectable({
  providedIn: 'any'
})
export class BackgroundService implements BackgroundServiceInterface {
  constructor(
    @Inject(THEME_INJECTION_TOKENS.backgroundDataService)
    private dataService: BackgroundDataServiceInterface
  ) {
    console.log('constructed BackgroundService');
  }

  getBackground() {
    return this.dataService.getBackgroundColor();
  }
}
