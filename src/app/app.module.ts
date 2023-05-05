import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {AppComponent} from "./app.component";
import {AppRoutingModule} from "./app-routing.module";
import {StoreModule} from "@ngrx/store";
import {EffectsModule} from "@ngrx/effects";
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { StoreRouterConnectingModule, routerReducer } from '@ngrx/router-store';
import {HttpClientModule} from "@angular/common/http";


@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserAnimationsModule,
    AppRoutingModule,

    StoreModule.forRoot({
      router: routerReducer
    }, {}),
    EffectsModule.forRoot([]),
    StoreDevtoolsModule.instrument(),
    StoreRouterConnectingModule.forRoot(),
    HttpClientModule
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
