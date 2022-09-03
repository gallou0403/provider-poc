import {Inject, NgModule} from '@angular/core';
import { CommonModule } from '@angular/common';
import { LazyBComponent } from './lazy-b.component';
import {ThemeModule} from "../data-access/theme/theme.module";
import {RouterModule} from "@angular/router";
import {BackgroundService} from "../data-access/theme/services/background.service";
import {BackgroundServiceInterface} from "../data-access/theme/interfaces/background-service.interface";

export class MockBackgroundService implements BackgroundServiceInterface {
  getBackground() {
    return 'purple';
  }
}

@NgModule({
  declarations: [
    LazyBComponent,
  ],
  imports: [
    CommonModule,
    ThemeModule.forRoot({
      backgroundService: 'v2'
    }),
    RouterModule.forChild([
      {
        path: '',
        component: LazyBComponent
      }
    ])
  ],
  providers: [
    {
      provide: BackgroundService,
      useClass: MockBackgroundService
    }
  ]
})
export class LazyBModule { }
