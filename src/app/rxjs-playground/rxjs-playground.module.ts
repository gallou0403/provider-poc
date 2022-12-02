import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import { CancellerComponent } from './components/canceller/canceller.component';
import {RxjsPlaygroundRoutingModule} from "./rxjs-playground-routing.module";
import { RxjsContainerComponent } from './components/rxjs-container/rxjs-container.component';
import {MatButtonModule} from "@angular/material/button";
import {MatListModule} from "@angular/material/list";
import {MatProgressSpinnerModule} from "@angular/material/progress-spinner";
import {MatIconModule} from "@angular/material/icon";

@NgModule({
  imports: [
    CommonModule,
    RxjsPlaygroundRoutingModule,
    MatButtonModule,
    MatListModule,
    MatProgressSpinnerModule,
    MatIconModule
  ],
  declarations: [
    CancellerComponent,
    RxjsContainerComponent
  ]
})
export class RxjsPlaygroundModule {
}
