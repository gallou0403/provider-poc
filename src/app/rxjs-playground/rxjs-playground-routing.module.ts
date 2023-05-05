import {NgModule} from "@angular/core";
import {RouterModule} from "@angular/router";
import {CancellerComponent} from "./components/canceller/canceller.component";
import {RxjsContainerComponent} from "./components/rxjs-container/rxjs-container.component";
import {IpAddressComponent} from "./components/ip-address/ip-address.component";

@NgModule({
  imports: [
    RouterModule.forChild([
      {
        path: '',
        component: RxjsContainerComponent,
        children: [
          {
            path: 'cancel',
            component: CancellerComponent
          },
          {
            path: 'ip-address',
            component: IpAddressComponent
          }
        ]
      }
    ])
  ],
  exports: [
    RouterModule
  ]
})
export class RxjsPlaygroundRoutingModule {}
