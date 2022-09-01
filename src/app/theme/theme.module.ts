import { NgModule, ModuleWithProviders } from '@angular/core';
import { THEME_INJECTION_TOKENS } from './constants/theme-injection-tokens.const';
import { BackgroundService } from './services/background.service';
import { BackgroundDataService as BackgroundDataServiceV1 } from './infrastructure/background-data-v1.service';
import { BackgroundDataService as BackgroundDataServiceV2 } from './infrastructure/background-data-v2.service';
import { BorderService } from './services/border.service';
import { BorderDataService } from './infrastructure/border-data.service';
import {BackgroundServiceInterface} from "./interfaces/background-service.interface";
import {BackgroundDataServiceInterface} from "./interfaces/background-data-service.interface";

interface ThemeProviders {
  backgroundService: 'v1' | 'v2';
  borderService: 'v1';
}

@NgModule()
export class ThemeModule {
  static forRoot(
    providers?: Partial<ThemeProviders>
  ): ModuleWithProviders<ThemeModule> {
    return {
      ngModule: ThemeModule,
      providers: [
        {
          provide: THEME_INJECTION_TOKENS.backgroundService,
          useClass: BackgroundService,
        },
        {
          provide: THEME_INJECTION_TOKENS.backgroundDataService,
          useClass: getBackgroundServiceProvider(providers?.backgroundService)
        },
        {
          provide: THEME_INJECTION_TOKENS.borderService,
          useClass: BorderService,
        },
        {
          provide: THEME_INJECTION_TOKENS.borderDataService,
          useClass: BorderDataService,
        },
      ],
    };
  }
}

const getBackgroundServiceProvider = (version?: string) => {
  switch(version) {
    case 'v1': return BackgroundDataServiceV1;
    default: return BackgroundDataServiceV2;
  }
};
