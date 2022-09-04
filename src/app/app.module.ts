import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {AppComponent} from "./app.component";
import {AppRoutingModule} from "./app-routing.module";
import {StoreModule} from "@ngrx/store";
import {EffectsModule} from "@ngrx/effects";
import { StoreDevtoolsModule } from '@ngrx/store-devtools';


@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserAnimationsModule,
    AppRoutingModule,
    StoreModule.forRoot({}, {}),
    EffectsModule.forRoot([]),
    StoreDevtoolsModule.instrument()

  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
