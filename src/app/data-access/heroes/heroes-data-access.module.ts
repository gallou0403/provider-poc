import {ModuleWithProviders, NgModule, Provider} from '@angular/core';
import {HeroDataService} from "./hero-data.service";
import {HeroService} from "./infrastructure/hero.service";

interface Versions {
  heroService: 'v1'
}

@NgModule()
export class HeroesDataAccessModule {
  static forRoot(versions: Versions): ModuleWithProviders<HeroesDataAccessModule> {
    const providers: Provider[] = [
      HeroDataService
    ];

    if (versions.heroService) {
      providers.push(getHeroServiceProvider(versions.heroService));
    }

    return {
      ngModule: HeroesDataAccessModule,
      providers
    };
  }
}

const getHeroServiceProvider = (version: string): Provider => {
  switch (version) {
    case 'v1': return HeroService;
    default:
      throw new Error(`Invalid Version for HeroService: ${version}`);
  }
};
